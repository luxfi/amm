"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HybridOrderTrade = void 0;
const sdk_core_1 = require("@uniswap/sdk-core");
const v4_1 = require("../constants/v4");
const HybridOrder_1 = require("../order/v4/HybridOrder");
const utils_1 = require("./utils");
class HybridOrderTrade {
    constructor({ currencyIn, currenciesOut, orderInfo, chainId, resolver, permit2Address, tradeType, expectedAmounts, }) {
        this._currencyIn = currencyIn;
        this._currenciesOut = currenciesOut;
        this.tradeType = tradeType;
        this.expectedAmounts = expectedAmounts;
        this.order = new HybridOrder_1.CosignedHybridOrder(orderInfo, chainId, resolver, permit2Address);
    }
    get inputAmount() {
        var _a;
        if (this._inputAmount)
            return this._inputAmount;
        const amount = ((_a = this.expectedAmounts) === null || _a === void 0 ? void 0 : _a.expectedAmountIn)
            ? this.getExpectedAmountIn()
            : sdk_core_1.CurrencyAmount.fromRawAmount(this._currencyIn, this.order.info.input.maxAmount.toString());
        this._inputAmount = amount;
        return amount;
    }
    get outputAmounts() {
        if (this._outputAmounts)
            return this._outputAmounts;
        const amounts = this.order.info.outputs.map((output) => {
            const currencyOut = this._currenciesOut.find((currency) => (0, utils_1.areCurrenciesEqual)(currency, output.token, currency.chainId));
            if (!currencyOut) {
                throw new Error("Currency out not found");
            }
            return sdk_core_1.CurrencyAmount.fromRawAmount(currencyOut, output.minAmount.toString());
        });
        this._outputAmounts = amounts;
        return amounts;
    }
    // Same assumption as V3 that there is only one non-fee output at a time, and it exists at index 0
    get outputAmount() {
        var _a;
        return ((_a = this.expectedAmounts) === null || _a === void 0 ? void 0 : _a.expectedAmountOut)
            ? this.getExpectedAmountOut()
            : this.outputAmounts[0];
    }
    /**
     * For exact-in orders: minimum amount out is the minAmount from the order
     * For exact-out orders: minimum amount out is the fixed output amount
     */
    minimumAmountOut() {
        const firstOutput = this.order.info.outputs[0];
        return sdk_core_1.CurrencyAmount.fromRawAmount(this.outputAmount.currency, firstOutput.minAmount.toString());
    }
    /**
     * For exact-in orders: maximum amount in is the fixed maxAmount
     * For exact-out orders: maximum amount in is the maxAmount (worst case)
     */
    maximumAmountIn() {
        return sdk_core_1.CurrencyAmount.fromRawAmount(this._currencyIn, this.order.info.input.maxAmount.toString());
    }
    /**
     * The price expressed in terms of output amount/input amount.
     */
    get executionPrice() {
        var _a;
        return ((_a = this._executionPrice) !== null && _a !== void 0 ? _a : (this._executionPrice = new sdk_core_1.Price(this.inputAmount.currency, this.outputAmount.currency, this.inputAmount.quotient, this.outputAmount.quotient)));
    }
    /**
     * Return the execution price after accounting for slippage tolerance
     * @returns The worst execution price (max in / min out)
     */
    worstExecutionPrice() {
        return new sdk_core_1.Price(this.inputAmount.currency, this.outputAmount.currency, this.maximumAmountIn().quotient, this.minimumAmountOut().quotient);
    }
    /**
     * Determine if this is an exact-in order based on the scalingFactor
     */
    isExactIn() {
        return (this.order.info.scalingFactor.gt(v4_1.BASE_SCALING_FACTOR) ||
            this.order.info.scalingFactor.eq(v4_1.BASE_SCALING_FACTOR));
    }
    /**
     * Determine if this is an exact-out order based on the scalingFactor
     */
    isExactOut() {
        return this.order.info.scalingFactor.lt(v4_1.BASE_SCALING_FACTOR);
    }
    getExpectedAmountIn() {
        var _a;
        if (!((_a = this.expectedAmounts) === null || _a === void 0 ? void 0 : _a.expectedAmountIn)) {
            throw new Error("expectedAmountIn not set");
        }
        return sdk_core_1.CurrencyAmount.fromRawAmount(this._currencyIn, this.expectedAmounts.expectedAmountIn);
    }
    getExpectedAmountOut() {
        var _a;
        if (!((_a = this.expectedAmounts) === null || _a === void 0 ? void 0 : _a.expectedAmountOut)) {
            throw new Error("expectedAmountOut not set");
        }
        return sdk_core_1.CurrencyAmount.fromRawAmount(this._currenciesOut[0], this.expectedAmounts.expectedAmountOut);
    }
}
exports.HybridOrderTrade = HybridOrderTrade;
//# sourceMappingURL=HybridOrderTrade.js.map