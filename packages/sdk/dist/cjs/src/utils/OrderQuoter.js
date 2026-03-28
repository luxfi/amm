"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V4OrderQuoter = exports.RelayOrderQuoter = exports.UniswapXOrderQuoter = exports.OrderValidation = void 0;
const tslib_1 = require("tslib");
const ethers_1 = require("ethers");
const constants_1 = require("../constants");
const contracts_1 = require("../contracts");
const errors_1 = require("../errors");
const validation_1 = require("../order/validation");
const NonceManager_1 = require("./NonceManager");
const multicall_1 = require("./multicall");
var OrderValidation;
(function (OrderValidation) {
    OrderValidation[OrderValidation["Expired"] = 0] = "Expired";
    OrderValidation[OrderValidation["NonceUsed"] = 1] = "NonceUsed";
    OrderValidation[OrderValidation["InsufficientFunds"] = 2] = "InsufficientFunds";
    OrderValidation[OrderValidation["InvalidSignature"] = 3] = "InvalidSignature";
    OrderValidation[OrderValidation["InvalidOrderFields"] = 4] = "InvalidOrderFields";
    OrderValidation[OrderValidation["UnknownError"] = 5] = "UnknownError";
    OrderValidation[OrderValidation["ValidationFailed"] = 6] = "ValidationFailed";
    OrderValidation[OrderValidation["ExclusivityPeriod"] = 7] = "ExclusivityPeriod";
    OrderValidation[OrderValidation["OrderNotFillableYet"] = 8] = "OrderNotFillableYet";
    OrderValidation[OrderValidation["InvalidGasPrice"] = 9] = "InvalidGasPrice";
    OrderValidation[OrderValidation["InvalidCosignature"] = 10] = "InvalidCosignature";
    OrderValidation[OrderValidation["OK"] = 11] = "OK";
})(OrderValidation = exports.OrderValidation || (exports.OrderValidation = {}));
const BASIC_ERROR = "0x08c379a0";
const KNOWN_ERRORS = {
    "8baa579f": OrderValidation.InvalidSignature,
    "815e1d64": OrderValidation.InvalidSignature,
    "756688fe": OrderValidation.NonceUsed,
    // invalid dutch decay time
    "302e5b7c": OrderValidation.InvalidOrderFields,
    // invalid dutch decay time
    "773a6187": OrderValidation.InvalidOrderFields,
    // invalid reactor address
    "4ddf4a64": OrderValidation.InvalidOrderFields,
    // both input and output decay
    d303758b: OrderValidation.InvalidOrderFields,
    // Incorrect amounts
    "7c1f8113": OrderValidation.InvalidOrderFields,
    // invalid dutch decay time
    "43133453": OrderValidation.InvalidOrderFields,
    "48fee69c": OrderValidation.InvalidOrderFields,
    "70f65caa": OrderValidation.Expired,
    ee3b3d4b: OrderValidation.NonceUsed,
    "0a0b0d79": OrderValidation.ValidationFailed,
    b9ec1e96: OrderValidation.ExclusivityPeriod,
    "062dec56": OrderValidation.ExclusivityPeriod,
    "75c1bb14": OrderValidation.ExclusivityPeriod,
    // invalid cosigner output
    a305df82: OrderValidation.InvalidOrderFields,
    // invalid cosigner input
    ac9143e7: OrderValidation.InvalidOrderFields,
    // duplicate fee output
    fff08303: OrderValidation.InvalidOrderFields,
    // invalid cosignature
    d7815be1: OrderValidation.InvalidCosignature,
    TRANSFER_FROM_FAILED: OrderValidation.InsufficientFunds,
    // invalid fee escalation amounts
    d856fc5a: OrderValidation.InvalidOrderFields,
    // Signature expired
    cd21db4f: OrderValidation.Expired,
    // PriorityOrderReactor:InvalidDeadline()
    "769d11e4": OrderValidation.Expired,
    // PriorityOrderReactor:OrderNotFillable()
    c6035520: OrderValidation.OrderNotFillableYet,
    // PriorityOrderReactor:InputOutputScaling()
    a6b844f5: OrderValidation.InvalidOrderFields,
    // PriorityOrderReactor:InvalidGasPrice()
    f3eb44e5: OrderValidation.InvalidGasPrice,
};
// Offchain orders have one quirk
// all reactors check expiry before anything else, so old but already filled orders will return as expired
// so this function takes orders in expired state and double checks them
function checkTerminalStates(provider, nonceManager, orders, validations) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(validations.map((validation, i) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const order = orders[i];
            if (validation === OrderValidation.Expired ||
                order.order.info.deadline < Math.floor(new Date().getTime() / 1000)) {
                const maker = order.order.getSigner(order.signature);
                const cancelled = yield nonceManager.isUsed(maker, order.order.info.nonce);
                return cancelled ? OrderValidation.NonceUsed : OrderValidation.Expired;
            }
            // if the order has block overrides AND order validation is OK, it is invalid if current block number is < block override
            else if (order.order.blockOverrides &&
                order.order.blockOverrides.number &&
                validation === OrderValidation.OK) {
                const blockNumber = yield provider.getBlockNumber();
                if (blockNumber < parseInt(order.order.blockOverrides.number, 16)) {
                    return OrderValidation.OrderNotFillableYet;
                }
            }
            return validation;
        })));
    });
}
/**
 * UniswapX order quoter
 */
class UniswapXOrderQuoter {
    constructor(provider, chainId, orderQuoterAddress) {
        this.provider = provider;
        this.chainId = chainId;
        if (orderQuoterAddress) {
            this.quoter = contracts_1.OrderQuoter__factory.connect(orderQuoterAddress, provider);
        }
        else if (constants_1.UNISWAPX_ORDER_QUOTER_MAPPING[chainId]) {
            this.quoter = contracts_1.OrderQuoter__factory.connect(constants_1.UNISWAPX_ORDER_QUOTER_MAPPING[chainId], this.provider);
        }
        else {
            throw new errors_1.MissingConfiguration("quoter", chainId.toString());
        }
    }
    quote(order) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.quoteBatch([order]))[0];
        });
    }
    quoteBatch(orders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const results = yield this.getMulticallResults("quote", orders);
            const validations = yield this.getValidations(orders, results);
            const quotes = results.map(({ success, returnData }) => {
                if (!success) {
                    return undefined;
                }
                return this.quoter.interface.decodeFunctionResult("quote", returnData)
                    .result;
            });
            return validations.map((validation, i) => {
                return {
                    validation,
                    quote: quotes[i],
                };
            });
        });
    }
    getValidations(orders, results) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const validations = results.map((result, idx) => {
                if (result.success) {
                    return OrderValidation.OK;
                }
                else {
                    let returnData = result.returnData;
                    // Parse traditional string error messages
                    if (returnData.startsWith(BASIC_ERROR)) {
                        returnData = new ethers_1.ethers.utils.AbiCoder().decode(["string"], "0x" + returnData.slice(10))[0];
                    }
                    for (const key of Object.keys(KNOWN_ERRORS)) {
                        if (returnData.includes(key)) {
                            // OrderValidation.ValidationFailed
                            if (key === "0a0b0d79") {
                                // V4 orders use hooks instead of additionalValidationData
                                if ("additionalValidationData" in orders[idx].order.info) {
                                    const fillerValidation = (0, validation_1.parseExclusiveFillerData)(orders[idx].order.info
                                        .additionalValidationData);
                                    if (fillerValidation.type === validation_1.ValidationType.ExclusiveFiller &&
                                        fillerValidation.data.filler !== ethers_1.ethers.constants.AddressZero) {
                                        return OrderValidation.ExclusivityPeriod;
                                    }
                                }
                                return OrderValidation.ValidationFailed;
                            }
                            return KNOWN_ERRORS[key];
                        }
                    }
                    return OrderValidation.UnknownError;
                }
            });
            return yield checkTerminalStates(this.provider, new NonceManager_1.NonceManager(this.provider, this.chainId, constants_1.PERMIT2_MAPPING[this.chainId]), orders, validations);
        });
    }
    /// Get the results of a multicall for a given function
    /// Each order with a blockOverride is multicalled separately
    getMulticallResults(functionName, orders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersWithBlockOverrides = orders.filter((order) => order.order.blockOverrides);
            const promises = [];
            ordersWithBlockOverrides.map((order) => {
                promises.push((0, multicall_1.multicallSameContractManyFunctions)(this.provider, {
                    address: this.quoter.address,
                    contractInterface: this.quoter.interface,
                    functionName: functionName,
                    functionParams: [[order.order.serialize(), order.signature]],
                }, undefined, order.order.blockOverrides));
            });
            const ordersWithoutBlockOverrides = orders.filter((order) => !order.order.blockOverrides);
            const calls = ordersWithoutBlockOverrides.map((order) => {
                return [order.order.serialize(), order.signature];
            });
            promises.push((0, multicall_1.multicallSameContractManyFunctions)(this.provider, {
                address: this.quoter.address,
                contractInterface: this.quoter.interface,
                functionName: functionName,
                functionParams: calls,
            }));
            const results = yield Promise.all(promises);
            return results.flat();
        });
    }
    get orderQuoterAddress() {
        return this.quoter.address;
    }
}
exports.UniswapXOrderQuoter = UniswapXOrderQuoter;
/**
 * Relay order quoter
 */
class RelayOrderQuoter {
    constructor(provider, chainId, reactorAddress) {
        this.provider = provider;
        this.chainId = chainId;
        this.quoteFunctionSelector = "0x3f62192e"; // function execute((bytes, bytes))
        if (reactorAddress) {
            this.quoter = contracts_1.RelayOrderReactor__factory.connect(reactorAddress, provider);
        }
        else if (constants_1.REACTOR_ADDRESS_MAPPING[chainId][constants_1.OrderType.Relay]) {
            this.quoter = contracts_1.RelayOrderReactor__factory.connect(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            constants_1.REACTOR_ADDRESS_MAPPING[chainId][constants_1.OrderType.Relay], this.provider);
        }
        else {
            throw new errors_1.MissingConfiguration("quoter", chainId.toString());
        }
    }
    quote(order) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.quoteBatch([order]))[0];
        });
    }
    quoteBatch(orders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const results = yield this.getMulticallResults(this.quoteFunctionSelector, orders);
            const validations = yield this.getValidations(orders, results);
            const quotes = results.map(
            // no return data
            ({ success }, idx) => {
                if (!success) {
                    return undefined;
                }
                // TODO:
                return orders[idx].order.resolve({
                    timestamp: Math.floor(new Date().getTime() / 1000),
                });
            });
            return validations.map((validation, i) => {
                return {
                    validation,
                    quote: quotes[i],
                };
            });
        });
    }
    /// Get the results of a multicall for a given function
    /// Each order with a blockOverride is multicalled separately
    getMulticallResults(functionName, orders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersWithBlockOverrides = orders.filter((order) => order.order.blockOverrides);
            const promises = [];
            ordersWithBlockOverrides.map((order) => {
                promises.push((0, multicall_1.multicallSameContractManyFunctions)(this.provider, {
                    address: this.quoter.address,
                    contractInterface: this.quoter.interface,
                    functionName: functionName,
                    functionParams: [
                        [
                            {
                                order: order.order.serialize(),
                                sig: order.signature,
                            },
                        ],
                    ],
                }, undefined, order.order.blockOverrides));
            });
            const ordersWithoutBlockOverrides = orders.filter((order) => !order.order.blockOverrides);
            const calls = ordersWithoutBlockOverrides.map((order) => {
                return [
                    {
                        order: order.order.serialize(),
                        sig: order.signature,
                    },
                ];
            });
            promises.push((0, multicall_1.multicallSameContractManyFunctions)(this.provider, {
                address: this.quoter.address,
                contractInterface: this.quoter.interface,
                functionName: functionName,
                functionParams: calls,
            }));
            const results = yield Promise.all(promises);
            return results.flat();
        });
    }
    getValidations(orders, results) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const validations = results.map((result) => {
                if (result.success) {
                    return OrderValidation.OK;
                }
                else {
                    let returnData = result.returnData;
                    // Parse traditional string error messages
                    if (returnData.startsWith(BASIC_ERROR)) {
                        returnData = new ethers_1.ethers.utils.AbiCoder().decode(["string"], "0x" + returnData.slice(10))[0];
                    }
                    for (const key of Object.keys(KNOWN_ERRORS)) {
                        if (returnData.includes(key)) {
                            return KNOWN_ERRORS[key];
                        }
                    }
                    return OrderValidation.UnknownError;
                }
            });
            return yield checkTerminalStates(this.provider, new NonceManager_1.NonceManager(this.provider, this.chainId, constants_1.PERMIT2_MAPPING[this.chainId]), orders, validations);
        });
    }
    get orderQuoterAddress() {
        return this.quoter.address;
    }
}
exports.RelayOrderQuoter = RelayOrderQuoter;
// Solidity `Panic(uint256)` selector. If revert data starts with this, we decode it as a panic
// (e.g. overflow/out-of-bounds/assert) instead of treating it as an unknown error.
const V4_PANIC_ERROR = "0x4e487b71";
function decodeV4RevertData(returnData) {
    const raw = returnData;
    if (!raw || raw === "0x" || raw === "0x0") {
        return { raw, text: "Empty revert data" };
    }
    try {
        // Error(string)
        if (raw.startsWith(BASIC_ERROR)) {
            const decoded = new ethers_1.ethers.utils.AbiCoder().decode(["string"], "0x" + raw.slice(10))[0];
            return { raw, text: decoded };
        }
        // Panic(uint256)
        if (raw.startsWith(V4_PANIC_ERROR)) {
            const code = new ethers_1.ethers.utils.AbiCoder().decode(["uint256"], "0x" + raw.slice(10))[0];
            return { raw, text: `Panic(${code.toHexString()})` };
        }
        // Custom errors: first 4 bytes are selector
        if (raw.startsWith("0x") && raw.length >= 10) {
            return { raw, text: `CustomError(${raw.slice(0, 10)})` };
        }
    }
    catch (_a) {
        // best-effort decoding only
    }
    return { raw };
}
function createV4SendCapturingProvider(provider, traces) {
    const originalSend = provider.send.bind(provider);
    const proxy = new Proxy(provider, {
        get(target, prop, receiver) {
            if (prop === "send") {
                return (method, params) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    var _a, _b, _c;
                    const trace = method === "eth_call" ? { method, params } : undefined;
                    if (trace)
                        traces.push(trace);
                    try {
                        const result = yield originalSend(method, params);
                        if (trace)
                            trace.result = result;
                        return result;
                    }
                    catch (e) {
                        if (trace) {
                            const err = e;
                            trace.error = {
                                message: err === null || err === void 0 ? void 0 : err.message,
                                code: err === null || err === void 0 ? void 0 : err.code,
                                data: err === null || err === void 0 ? void 0 : err.data,
                                body: (_a = err === null || err === void 0 ? void 0 : err.body) !== null && _a !== void 0 ? _a : ((_c = (_b = err === null || err === void 0 ? void 0 : err.error) === null || _b === void 0 ? void 0 : _b.body) !== null && _c !== void 0 ? _c : undefined),
                                error: err === null || err === void 0 ? void 0 : err.error,
                            };
                        }
                        throw e;
                    }
                });
            }
            return Reflect.get(target, prop, receiver);
        },
    });
    return proxy;
}
/**
 * V4 order quoter for Hybrid orders
 */
class V4OrderQuoter {
    constructor(provider, chainId, orderQuoterAddress) {
        this.provider = provider;
        this.chainId = chainId;
        if (orderQuoterAddress) {
            this.quoter = contracts_1.OrderQuoterV4__factory.connect(orderQuoterAddress, this.provider);
        }
        else if (constants_1.UNISWAPX_V4_ORDER_QUOTER_MAPPING[chainId]) {
            this.quoter = contracts_1.OrderQuoterV4__factory.connect(constants_1.UNISWAPX_V4_ORDER_QUOTER_MAPPING[chainId], this.provider);
        }
        else {
            throw new errors_1.MissingConfiguration("v4Quoter", chainId.toString());
        }
    }
    quote(order) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (yield this.quoteBatch([order]))[0];
        });
    }
    quoteBatch(orders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const rpcCalls = [];
            const providerForQuote = createV4SendCapturingProvider(this.provider, rpcCalls);
            const results = yield this.getMulticallResults(providerForQuote, "quote", orders);
            const validations = yield this.getValidations(orders, results);
            const validationErrors = results.map((r) => r.success ? undefined : decodeV4RevertData(r.returnData));
            const quotes = results.map(({ success, returnData }) => {
                if (!success) {
                    return undefined;
                }
                const result = this.quoter.interface.decodeFunctionResult("quote", returnData).result;
                return {
                    input: {
                        token: result.input.token,
                        amount: result.input.amount,
                    },
                    outputs: result.outputs.map((output) => ({
                        token: output.token,
                        amount: output.amount,
                    })),
                    auctionResolver: result.auctionResolver,
                    witnessTypeString: result.witnessTypeString,
                };
            });
            return validations.map((validation, i) => {
                var _a, _b;
                return {
                    validation,
                    quote: quotes[i],
                    validationErrorData: (_a = validationErrors[i]) === null || _a === void 0 ? void 0 : _a.raw,
                    validationErrorText: (_b = validationErrors[i]) === null || _b === void 0 ? void 0 : _b.text,
                    rpcCalls: validation === OrderValidation.OK ? undefined : rpcCalls,
                };
            });
        });
    }
    getValidations(orders, results) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const validations = results.map((result) => {
                if (result.success) {
                    return OrderValidation.OK;
                }
                else {
                    let returnData = result.returnData;
                    // Parse traditional string error messages
                    if (returnData.startsWith(BASIC_ERROR)) {
                        returnData = new ethers_1.ethers.utils.AbiCoder().decode(["string"], "0x" + returnData.slice(10))[0];
                    }
                    for (const key of Object.keys(KNOWN_ERRORS)) {
                        if (returnData.includes(key)) {
                            return KNOWN_ERRORS[key];
                        }
                    }
                    return OrderValidation.UnknownError;
                }
            });
            return yield checkTerminalStates(this.provider, new NonceManager_1.NonceManager(this.provider, this.chainId, constants_1.PERMIT2_MAPPING[this.chainId]), orders, validations);
        });
    }
    /// Get the results of a multicall for a given function
    /// V4 quote requires (reactor, order, sig) instead of (order, sig)
    getMulticallResults(provider, functionName, orders) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ordersWithBlockOverrides = orders.filter((order) => order.order.blockOverrides);
            const promises = [];
            ordersWithBlockOverrides.map((order) => {
                promises.push((0, multicall_1.multicallSameContractManyFunctions)(provider, {
                    address: this.quoter.address,
                    contractInterface: this.quoter.interface,
                    functionName: functionName,
                    functionParams: [
                        [
                            order.order.info.reactor,
                            order.order.serialize(),
                            order.signature,
                        ],
                    ],
                }, undefined, order.order.blockOverrides));
            });
            const ordersWithoutBlockOverrides = orders.filter((order) => !order.order.blockOverrides);
            const calls = ordersWithoutBlockOverrides.map((order) => {
                return [
                    order.order.info.reactor,
                    order.order.serialize(),
                    order.signature,
                ];
            });
            if (calls.length > 0) {
                promises.push((0, multicall_1.multicallSameContractManyFunctions)(provider, {
                    address: this.quoter.address,
                    contractInterface: this.quoter.interface,
                    functionName: functionName,
                    functionParams: calls,
                }, undefined));
            }
            const results = yield Promise.all(promises);
            return results.flat();
        });
    }
    get orderQuoterAddress() {
        return this.quoter.address;
    }
}
exports.V4OrderQuoter = V4OrderQuoter;
//# sourceMappingURL=OrderQuoter.js.map