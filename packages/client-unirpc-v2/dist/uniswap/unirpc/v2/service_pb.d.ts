import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Value } from "@bufbuild/protobuf";
/**
 * @generated from enum uniswap.unirpc.v2.Chain
 */
export declare enum Chain {
    /**
     * @generated from enum value: CHAIN_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CHAIN_MAINNET = 1;
     */
    MAINNET = 1,
    /**
     * @generated from enum value: CHAIN_GOERLI = 5;
     */
    GOERLI = 5,
    /**
     * @generated from enum value: CHAIN_SEPOLIA = 11155111;
     */
    SEPOLIA = 11155111,
    /**
     * @generated from enum value: CHAIN_OPTIMISM = 10;
     */
    OPTIMISM = 10,
    /**
     * @generated from enum value: CHAIN_OPTIMISM_GOERLI = 420;
     */
    OPTIMISM_GOERLI = 420,
    /**
     * @generated from enum value: CHAIN_OPTIMISM_SEPOLIA = 11155420;
     */
    OPTIMISM_SEPOLIA = 11155420,
    /**
     * @generated from enum value: CHAIN_ARBITRUM_ONE = 42161;
     */
    ARBITRUM_ONE = 42161,
    /**
     * @generated from enum value: CHAIN_ARBITRUM_GOERLI = 421613;
     */
    ARBITRUM_GOERLI = 421613,
    /**
     * @generated from enum value: CHAIN_ARBITRUM_SEPOLIA = 421614;
     */
    ARBITRUM_SEPOLIA = 421614,
    /**
     * @generated from enum value: CHAIN_POLYGON = 137;
     */
    POLYGON = 137,
    /**
     * @generated from enum value: CHAIN_POLYGON_MUMBAI = 80001;
     */
    POLYGON_MUMBAI = 80001,
    /**
     * @generated from enum value: CHAIN_CELO = 42220;
     */
    CELO = 42220,
    /**
     * @generated from enum value: CHAIN_CELO_ALFAJORES = 44787;
     */
    CELO_ALFAJORES = 44787,
    /**
     * @generated from enum value: CHAIN_GNOSIS = 100;
     */
    GNOSIS = 100,
    /**
     * @generated from enum value: CHAIN_MOONBEAM = 1284;
     */
    MOONBEAM = 1284,
    /**
     * @generated from enum value: CHAIN_BNB = 56;
     */
    BNB = 56,
    /**
     * @generated from enum value: CHAIN_AVALANCHE = 43114;
     */
    AVALANCHE = 43114,
    /**
     * @generated from enum value: CHAIN_BASE_GOERLI = 84531;
     */
    BASE_GOERLI = 84531,
    /**
     * @generated from enum value: CHAIN_BASE = 8453;
     */
    BASE = 8453,
    /**
     * @generated from enum value: CHAIN_ZORA = 7777777;
     */
    ZORA = 7777777,
    /**
     * @generated from enum value: CHAIN_ZORA_SEPOLIA = 999999999;
     */
    ZORA_SEPOLIA = 999999999,
    /**
     * @generated from enum value: CHAIN_ROOTSTOCK = 30;
     */
    ROOTSTOCK = 30,
    /**
     * @generated from enum value: CHAIN_BLAST = 81457;
     */
    BLAST = 81457,
    /**
     * @generated from enum value: CHAIN_ZKSYNC = 324;
     */
    ZKSYNC = 324,
    /**
     * @generated from enum value: CHAIN_UNICHAIN = 130;
     */
    UNICHAIN = 130,
    /**
     * @generated from enum value: CHAIN_UNICHAIN_TESTNET = 1301;
     */
    UNICHAIN_TESTNET = 1301,
    /**
     * @generated from enum value: CHAIN_WORLDCHAIN = 480;
     */
    WORLDCHAIN = 480,
    /**
     * Deprecated, Id changed to CHAIN_MONAD_TESTNET_V2
     *
     * @generated from enum value: CHAIN_MONAD_TESTNET = 41454 [deprecated = true];
     * @deprecated
     */
    MONAD_TESTNET = 41454,
    /**
     * @generated from enum value: CHAIN_MONAD_TESTNET_V2 = 10143;
     */
    MONAD_TESTNET_V2 = 10143,
    /**
     * @generated from enum value: CHAIN_BASE_SEPOLIA = 84532;
     */
    BASE_SEPOLIA = 84532,
    /**
     * @generated from enum value: CHAIN_SONEIUM = 1868;
     */
    SONEIUM = 1868,
    /**
     * @generated from enum value: CHAIN_MONAD = 143;
     */
    MONAD = 143,
    /**
     * @generated from enum value: CHAIN_XLAYER = 196;
     */
    XLAYER = 196,
    /**
     * @generated from enum value: CHAIN_MEGAETH = 4326;
     */
    MEGAETH = 4326,
    /**
     * @generated from enum value: CHAIN_TEMPO = 4217;
     */
    TEMPO = 4217,
    /**
     * @generated from enum value: CHAIN_LINEA = 59144;
     */
    LINEA = 59144
}
/**
 * @generated from message uniswap.unirpc.v2.GasStrategy
 */
export declare class GasStrategy extends Message<GasStrategy> {
    /**
     * @generated from field: optional double limit_inflation_factor = 1;
     */
    limitInflationFactor?: number;
    /**
     * @generated from field: optional double price_inflation_factor = 2;
     */
    priceInflationFactor?: number;
    /**
     * @generated from field: optional double percentile_threshold_for1559_fee = 3;
     */
    percentileThresholdFor1559Fee?: number;
    /**
     * @generated from field: optional double threshold_to_inflate_last_block_base_fee = 4;
     */
    thresholdToInflateLastBlockBaseFee?: number;
    /**
     * @generated from field: optional double base_fee_multiplier = 5;
     */
    baseFeeMultiplier?: number;
    /**
     * @generated from field: optional uint32 base_fee_history_window = 6;
     */
    baseFeeHistoryWindow?: number;
    /**
     * @generated from field: optional double min_priority_fee_ratio_of_base_fee = 7;
     */
    minPriorityFeeRatioOfBaseFee?: number;
    /**
     * @generated from field: optional double min_priority_fee_gwei = 8;
     */
    minPriorityFeeGwei?: number;
    /**
     * @generated from field: optional double max_priority_fee_gwei = 9;
     */
    maxPriorityFeeGwei?: number;
    constructor(data?: PartialMessage<GasStrategy>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.GasStrategy";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GasStrategy;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GasStrategy;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GasStrategy;
    static equals(a: GasStrategy | PlainMessage<GasStrategy> | undefined, b: GasStrategy | PlainMessage<GasStrategy> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.GasFeesBySpeed
 */
export declare class GasFeesBySpeed extends Message<GasFeesBySpeed> {
    /**
     * @generated from field: optional string normal = 1;
     */
    normal?: string;
    /**
     * @generated from field: optional string fast = 2;
     */
    fast?: string;
    /**
     * @generated from field: optional string urgent = 3;
     */
    urgent?: string;
    constructor(data?: PartialMessage<GasFeesBySpeed>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.GasFeesBySpeed";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GasFeesBySpeed;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GasFeesBySpeed;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GasFeesBySpeed;
    static equals(a: GasFeesBySpeed | PlainMessage<GasFeesBySpeed> | undefined, b: GasFeesBySpeed | PlainMessage<GasFeesBySpeed> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.GasEstimate
 */
export declare class GasEstimate extends Message<GasEstimate> {
    /**
     * @generated from field: optional string type = 1;
     */
    type?: string;
    /**
     * @generated from field: optional uniswap.unirpc.v2.GasStrategy strategy = 2;
     */
    strategy?: GasStrategy;
    /**
     * @generated from field: optional string gas_limit = 3;
     */
    gasLimit?: string;
    /**
     * @generated from field: optional string gas_fee = 4;
     */
    gasFee?: string;
    /**
     * @generated from field: optional string gas_price = 5;
     */
    gasPrice?: string;
    /**
     * @generated from field: optional string max_priority_fee_per_gas = 6;
     */
    maxPriorityFeePerGas?: string;
    /**
     * @generated from field: optional string max_fee_per_gas = 7;
     */
    maxFeePerGas?: string;
    constructor(data?: PartialMessage<GasEstimate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.GasEstimate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GasEstimate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GasEstimate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GasEstimate;
    static equals(a: GasEstimate | PlainMessage<GasEstimate> | undefined, b: GasEstimate | PlainMessage<GasEstimate> | undefined): boolean;
}
/**
 * StateOverrideItem is one account's state override for eth_simulateV1.
 *
 * @generated from message uniswap.unirpc.v2.StateOverrideItem
 */
export declare class StateOverrideItem extends Message<StateOverrideItem> {
    /**
     * @generated from field: optional string balance = 1;
     */
    balance?: string;
    /**
     * @generated from field: optional string nonce = 2;
     */
    nonce?: string;
    /**
     * @generated from field: optional string code = 3;
     */
    code?: string;
    /**
     * @generated from field: map<string, string> state = 4;
     */
    state: {
        [key: string]: string;
    };
    /**
     * @generated from field: map<string, string> state_diff = 5;
     */
    stateDiff: {
        [key: string]: string;
    };
    constructor(data?: PartialMessage<StateOverrideItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.StateOverrideItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StateOverrideItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StateOverrideItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StateOverrideItem;
    static equals(a: StateOverrideItem | PlainMessage<StateOverrideItem> | undefined, b: StateOverrideItem | PlainMessage<StateOverrideItem> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.Call
 */
export declare class Call extends Message<Call> {
    /**
     * @generated from field: optional string from = 1;
     */
    from?: string;
    /**
     * @generated from field: optional string to = 2;
     */
    to?: string;
    /**
     * @generated from field: optional string data = 3;
     */
    data?: string;
    /**
     * @generated from field: optional string value = 4;
     */
    value?: string;
    constructor(data?: PartialMessage<Call>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.Call";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Call;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Call;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Call;
    static equals(a: Call | PlainMessage<Call> | undefined, b: Call | PlainMessage<Call> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.EstimateGasFeeRequest
 */
export declare class EstimateGasFeeRequest extends Message<EstimateGasFeeRequest> {
    /**
     * @generated from field: optional int32 chain_id = 1;
     */
    chainId?: number;
    /**
     * @generated from field: optional string from = 2;
     */
    from?: string;
    /**
     * @generated from field: optional string to = 3;
     */
    to?: string;
    /**
     * @generated from field: optional string data = 4;
     */
    data?: string;
    /**
     * @generated from field: optional string value = 5;
     */
    value?: string;
    /**
     * @generated from field: optional string gas_limit = 6;
     */
    gasLimit?: string;
    /**
     * @generated from field: repeated uniswap.unirpc.v2.GasStrategy gas_strategies = 7;
     */
    gasStrategies: GasStrategy[];
    /**
     * @generated from field: optional string smart_contract_delegation_address = 8;
     */
    smartContractDelegationAddress?: string;
    /**
     * @generated from field: map<string, uniswap.unirpc.v2.StateOverrideItem> state_overrides = 9;
     */
    stateOverrides: {
        [key: string]: StateOverrideItem;
    };
    /**
     * @generated from field: repeated uniswap.unirpc.v2.Call preflight_calls = 10;
     */
    preflightCalls: Call[];
    constructor(data?: PartialMessage<EstimateGasFeeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.EstimateGasFeeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateGasFeeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateGasFeeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateGasFeeRequest;
    static equals(a: EstimateGasFeeRequest | PlainMessage<EstimateGasFeeRequest> | undefined, b: EstimateGasFeeRequest | PlainMessage<EstimateGasFeeRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.EstimateGasFeeResponse
 */
export declare class EstimateGasFeeResponse extends Message<EstimateGasFeeResponse> {
    /**
     * @generated from field: optional string type = 1;
     */
    type?: string;
    /**
     * @generated from field: optional string gas_limit = 2;
     */
    gasLimit?: string;
    /**
     * @generated from field: optional uniswap.unirpc.v2.GasFeesBySpeed gas_fee = 3;
     */
    gasFee?: GasFeesBySpeed;
    /**
     * @generated from field: optional uniswap.unirpc.v2.GasFeesBySpeed gas_price = 4;
     */
    gasPrice?: GasFeesBySpeed;
    /**
     * @generated from field: optional uniswap.unirpc.v2.GasFeesBySpeed max_priority_fee_per_gas = 5;
     */
    maxPriorityFeePerGas?: GasFeesBySpeed;
    /**
     * @generated from field: optional uniswap.unirpc.v2.GasFeesBySpeed max_fee_per_gas = 6;
     */
    maxFeePerGas?: GasFeesBySpeed;
    /**
     * @generated from field: repeated uniswap.unirpc.v2.GasEstimate gas_estimates = 7;
     */
    gasEstimates: GasEstimate[];
    constructor(data?: PartialMessage<EstimateGasFeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.EstimateGasFeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EstimateGasFeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EstimateGasFeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EstimateGasFeeResponse;
    static equals(a: EstimateGasFeeResponse | PlainMessage<EstimateGasFeeResponse> | undefined, b: EstimateGasFeeResponse | PlainMessage<EstimateGasFeeResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.UniRpcRequest
 */
export declare class UniRpcRequest extends Message<UniRpcRequest> {
    /**
     * Standard JSON-RPC fields
     *
     * @generated from field: string jsonrpc = 1;
     */
    jsonrpc: string;
    /**
     * @generated from field: int32 id = 2;
     */
    id: number;
    /**
     * @generated from field: string method = 3;
     */
    method: string;
    /**
     * Params can be any valid JSON value.
     *
     * @generated from field: google.protobuf.Value params = 4;
     */
    params?: Value;
    constructor(data?: PartialMessage<UniRpcRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.UniRpcRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UniRpcRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UniRpcRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UniRpcRequest;
    static equals(a: UniRpcRequest | PlainMessage<UniRpcRequest> | undefined, b: UniRpcRequest | PlainMessage<UniRpcRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.UniRpcResponse
 */
export declare class UniRpcResponse extends Message<UniRpcResponse> {
    /**
     * Standard JSON-RPC fields
     *
     * @generated from field: string jsonrpc = 1;
     */
    jsonrpc: string;
    /**
     * @generated from field: int32 id = 2;
     */
    id: number;
    /**
     * Result can be any valid JSON value
     *
     * @generated from field: google.protobuf.Value result = 3;
     */
    result?: Value;
    /**
     * @generated from field: uniswap.unirpc.v2.UniRpcError error = 4;
     */
    error?: UniRpcError;
    /**
     * UniRpc specific fields
     * - returned as header
     *
     * @generated from field: google.protobuf.StringValue stickyId = 5;
     */
    stickyId?: string;
    constructor(data?: PartialMessage<UniRpcResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.UniRpcResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UniRpcResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UniRpcResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UniRpcResponse;
    static equals(a: UniRpcResponse | PlainMessage<UniRpcResponse> | undefined, b: UniRpcResponse | PlainMessage<UniRpcResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.UniRpcError
 */
export declare class UniRpcError extends Message<UniRpcError> {
    /**
     * @generated from field: int32 code = 1;
     */
    code: number;
    /**
     * @generated from field: string message = 2;
     */
    message: string;
    /**
     * @generated from field: google.protobuf.Value data = 3;
     */
    data?: Value;
    constructor(data?: PartialMessage<UniRpcError>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.UniRpcError";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UniRpcError;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UniRpcError;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UniRpcError;
    static equals(a: UniRpcError | PlainMessage<UniRpcError> | undefined, b: UniRpcError | PlainMessage<UniRpcError> | undefined): boolean;
}
