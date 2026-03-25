import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct } from "@bufbuild/protobuf";
/**
 * @generated from enum trading.v1.OnChainStatus
 */
export declare enum OnChainStatus {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * @generated from enum value: FAILED = 2;
     */
    FAILED = 2
}
/**
 * @generated from enum trading.v1.IndependentToken
 */
export declare enum IndependentToken {
    /**
     * @generated from enum value: TOKEN_0 = 0;
     */
    TOKEN_0 = 0,
    /**
     * @generated from enum value: TOKEN_1 = 1;
     */
    TOKEN_1 = 1
}
/**
 * @generated from enum trading.v1.SafetyLevel
 */
export declare enum SafetyLevel {
    /**
     * @generated from enum value: SAFETY_LEVEL_UNSPECIFIED = 0;
     */
    SAFETY_LEVEL_UNSPECIFIED = 0,
    /**
     * @generated from enum value: BLOCKED = 1;
     */
    BLOCKED = 1,
    /**
     * @generated from enum value: MEDIUM_WARNING = 2;
     */
    MEDIUM_WARNING = 2,
    /**
     * @generated from enum value: STRONG_WARNING = 3;
     */
    STRONG_WARNING = 3,
    /**
     * @generated from enum value: VERIFIED = 4;
     */
    VERIFIED = 4
}
/**
 * @generated from enum trading.v1.TradeType
 */
export declare enum TradeType {
    /**
     * @generated from enum value: EXACT_INPUT = 0;
     */
    EXACT_INPUT = 0,
    /**
     * @generated from enum value: EXACT_OUTPUT = 1;
     */
    EXACT_OUTPUT = 1
}
/**
 * @generated from enum trading.v1.ChainId
 */
export declare enum ChainId {
    /**
     * @generated from enum value: CHAIN_ID_UNSPECIFIED = 0;
     */
    CHAIN_ID_UNSPECIFIED = 0,
    /**
     * @generated from enum value: MAINNET = 1;
     */
    MAINNET = 1,
    /**
     * @generated from enum value: OPTIMISM = 10;
     */
    OPTIMISM = 10,
    /**
     * @generated from enum value: POLYGON = 137;
     */
    POLYGON = 137,
    /**
     * @generated from enum value: ARBITRUM = 42161;
     */
    ARBITRUM = 42161,
    /**
     * @generated from enum value: BNB = 56;
     */
    BNB = 56,
    /**
     * @generated from enum value: BASE = 8453;
     */
    BASE = 8453,
    /**
     * @generated from enum value: BLAST = 81457;
     */
    BLAST = 81457,
    /**
     * @generated from enum value: AVAX = 43114;
     */
    AVAX = 43114,
    /**
     * @generated from enum value: CELO = 42220;
     */
    CELO = 42220,
    /**
     * @generated from enum value: ZORA = 7777777;
     */
    ZORA = 7777777,
    /**
     * @generated from enum value: ZKSYNC = 324;
     */
    ZKSYNC = 324,
    /**
     * @generated from enum value: SEPOLIA = 11155111;
     */
    SEPOLIA = 11155111,
    /**
     * @generated from enum value: UNICHAIN_SEPOLIA = 1301;
     */
    UNICHAIN_SEPOLIA = 1301,
    /**
     * @generated from enum value: WORLDCHAIN = 480;
     */
    WORLDCHAIN = 480,
    /**
     * @generated from enum value: MONAD_TESTNET = 10143;
     */
    MONAD_TESTNET = 10143,
    /**
     * @generated from enum value: MONAD = 143;
     */
    MONAD = 143,
    /**
     * @generated from enum value: BASE_SEPOLIA = 84532;
     */
    BASE_SEPOLIA = 84532,
    /**
     * @generated from enum value: UNICHAIN = 130;
     */
    UNICHAIN = 130,
    /**
     * @generated from enum value: SONEIUM = 1868;
     */
    SONEIUM = 1868,
    /**
     * @generated from enum value: XLAYER = 196;
     */
    XLAYER = 196
}
/**
 * @generated from enum trading.v1.Protocols
 */
export declare enum Protocols {
    /**
     * @generated from enum value: V2 = 0;
     */
    V2 = 0,
    /**
     * @generated from enum value: V3 = 1;
     */
    V3 = 1,
    /**
     * @generated from enum value: V4 = 2;
     */
    V4 = 2,
    /**
     * @generated from enum value: UNISWAPX_V2 = 4;
     */
    UNISWAPX_V2 = 4,
    /**
     * @generated from enum value: UNISWAPX_V3 = 5;
     */
    UNISWAPX_V3 = 5
}
/**
 * @generated from enum trading.v1.RoutingPreference
 */
export declare enum RoutingPreference {
    /**
     * @generated from enum value: BEST_PRICE = 0;
     */
    BEST_PRICE = 0,
    /**
     * @generated from enum value: FASTEST = 1;
     */
    FASTEST = 1,
    /**
     * @generated from enum value: ROUTING_CLASSIC = 2;
     */
    ROUTING_CLASSIC = 2,
    /**
     * @generated from enum value: ROUTING_UNISWAPX_V2 = 4;
     */
    ROUTING_UNISWAPX_V2 = 4,
    /**
     * @generated from enum value: V3_ONLY = 5;
     */
    V3_ONLY = 5,
    /**
     * @generated from enum value: V2_ONLY = 6;
     */
    V2_ONLY = 6,
    /**
     * @generated from enum value: BEST_PRICE_V2 = 7;
     */
    BEST_PRICE_V2 = 7
}
/**
 * @generated from enum trading.v1.SpreadOptimization
 */
export declare enum SpreadOptimization {
    /**
     * @generated from enum value: EXECUTION = 0;
     */
    EXECUTION = 0,
    /**
     * @generated from enum value: PRICE = 1;
     */
    PRICE = 1
}
/**
 * @generated from enum trading.v1.AutoSlippage
 */
export declare enum AutoSlippage {
    /**
     * @generated from enum value: DEFAULT = 0;
     */
    DEFAULT = 0
}
/**
 * @generated from enum trading.v1.Urgency
 */
export declare enum Urgency {
    /**
     * @generated from enum value: NORMAL = 0;
     */
    NORMAL = 0,
    /**
     * @generated from enum value: FAST = 1;
     */
    FAST = 1,
    /**
     * @generated from enum value: URGENT = 2;
     */
    URGENT = 2
}
/**
 * @generated from enum trading.v1.PermitAmount
 */
export declare enum PermitAmount {
    /**
     * @generated from enum value: FULL = 0;
     */
    FULL = 0,
    /**
     * @generated from enum value: EXACT = 1;
     */
    EXACT = 1
}
/**
 * @generated from enum trading.v1.HooksOptions
 */
export declare enum HooksOptions {
    /**
     * @generated from enum value: V4_HOOKS_INCLUSIVE = 0;
     */
    V4_HOOKS_INCLUSIVE = 0,
    /**
     * @generated from enum value: V4_HOOKS_ONLY = 1;
     */
    V4_HOOKS_ONLY = 1,
    /**
     * @generated from enum value: V4_NO_HOOKS = 2;
     */
    V4_NO_HOOKS = 2
}
/**
 * @generated from enum trading.v1.SwapType
 */
export declare enum SwapType {
    /**
     * @generated from enum value: CLASSIC = 0;
     */
    CLASSIC = 0,
    /**
     * @generated from enum value: DUTCH_LIMIT = 1;
     */
    DUTCH_LIMIT = 1,
    /**
     * @generated from enum value: DUTCH_V2 = 2;
     */
    DUTCH_V2 = 2,
    /**
     * @generated from enum value: LIMIT_ORDER = 3;
     */
    LIMIT_ORDER = 3,
    /**
     * @generated from enum value: WRAP = 4;
     */
    WRAP = 4,
    /**
     * @generated from enum value: UNWRAP = 5;
     */
    UNWRAP = 5,
    /**
     * @generated from enum value: BRIDGE = 6;
     */
    BRIDGE = 6,
    /**
     * @generated from enum value: PRIORITY = 7;
     */
    PRIORITY = 7,
    /**
     * @generated from enum value: DUTCH_V3 = 8;
     */
    DUTCH_V3 = 8,
    /**
     * @generated from enum value: QUICKROUTE = 9;
     */
    QUICKROUTE = 9,
    /**
     * @generated from enum value: CHAINED = 10;
     */
    CHAINED = 10
}
/**
 * @generated from enum trading.v1.PlanStepType
 */
export declare enum PlanStepType {
    /**
     * @generated from enum value: PLAN_STEP_TYPE_CLASSIC = 0;
     */
    CLASSIC = 0,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_DUTCH_LIMIT = 1;
     */
    DUTCH_LIMIT = 1,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_DUTCH_V2 = 2;
     */
    DUTCH_V2 = 2,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_LIMIT_ORDER = 3;
     */
    LIMIT_ORDER = 3,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_WRAP = 4;
     */
    WRAP = 4,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_UNWRAP = 5;
     */
    UNWRAP = 5,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_BRIDGE = 6;
     */
    BRIDGE = 6,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_PRIORITY = 7;
     */
    PRIORITY = 7,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_DUTCH_V3 = 8;
     */
    DUTCH_V3 = 8,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_QUICKROUTE = 9;
     */
    QUICKROUTE = 9,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_CHAINED = 10;
     */
    CHAINED = 10,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_APPROVAL_TXN = 11;
     */
    APPROVAL_TXN = 11,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_APPROVAL_PERMIT = 12;
     */
    APPROVAL_PERMIT = 12,
    /**
     * @generated from enum value: PLAN_STEP_TYPE_RESET_APPROVAL_TXN = 13;
     */
    RESET_APPROVAL_TXN = 13
}
/**
 * @generated from enum trading.v1.PoolType
 */
export declare enum PoolType {
    /**
     * @generated from enum value: V2_POOL = 0;
     */
    V2_POOL = 0,
    /**
     * @generated from enum value: V3_POOL = 1;
     */
    V3_POOL = 1,
    /**
     * @generated from enum value: V4_POOL = 2;
     */
    V4_POOL = 2
}
/**
 * @generated from enum trading.v1.FeeType
 */
export declare enum FeeType {
    /**
     * @generated from enum value: LEGACY = 0;
     */
    LEGACY = 0,
    /**
     * @generated from enum value: EIP1559 = 1;
     */
    EIP1559 = 1
}
/**
 * @generated from enum trading.v1.SwapSafetyMode
 */
export declare enum SwapSafetyMode {
    /**
     * @generated from enum value: SAFE = 0;
     */
    SAFE = 0
}
/**
 * @generated from enum trading.v1.TransactionFailureReason
 */
export declare enum TransactionFailureReason {
    /**
     * @generated from enum value: SIMULATION_ERROR = 0;
     */
    SIMULATION_ERROR = 0,
    /**
     * @generated from enum value: UNSUPPORTED_SIMULATION = 1;
     */
    UNSUPPORTED_SIMULATION = 1,
    /**
     * @generated from enum value: SIMULATION_UNAVAILABLE = 2;
     */
    SIMULATION_UNAVAILABLE = 2,
    /**
     * @generated from enum value: SLIPPAGE_TOO_LOW = 3;
     */
    SLIPPAGE_TOO_LOW = 3,
    /**
     * @generated from enum value: TRANSFER_FROM_FAILED = 4;
     */
    TRANSFER_FROM_FAILED = 4
}
/**
 * @generated from enum trading.v1.OrderStatus
 */
export declare enum OrderStatus {
    /**
     * @generated from enum value: ORDER_STATUS_UNSPECIFIED = 0;
     */
    ORDER_STATUS_UNSPECIFIED = 0,
    /**
     * @generated from enum value: OPEN = 1;
     */
    OPEN = 1,
    /**
     * @generated from enum value: EXPIRED = 2;
     */
    EXPIRED = 2,
    /**
     * @generated from enum value: ERROR = 3;
     */
    ERROR = 3,
    /**
     * @generated from enum value: CANCELLED = 4;
     */
    CANCELLED = 4,
    /**
     * @generated from enum value: FILLED = 5;
     */
    FILLED = 5,
    /**
     * @generated from enum value: INSUFFICIENT_FUNDS = 6;
     */
    INSUFFICIENT_FUNDS = 6
}
/**
 * @generated from enum trading.v1.SortFields
 */
export declare enum SortFields {
    /**
     * @generated from enum value: SORT_FIELDS_UNSPECIFIED = 0;
     */
    SORT_FIELDS_UNSPECIFIED = 0,
    /**
     * @generated from enum value: CREATED_AT = 1;
     */
    CREATED_AT = 1
}
/**
 * @generated from enum trading.v1.OrderTypeQueryParam
 */
export declare enum OrderTypeQueryParam {
    /**
     * @generated from enum value: ORDER_TYPE_QUERY_PARAM_UNSPECIFIED = 0;
     */
    ORDER_TYPE_QUERY_PARAM_UNSPECIFIED = 0,
    /**
     * @generated from enum value: OrderTypeQueryParam_DUTCH_V2 = 2;
     */
    OrderTypeQueryParam_DUTCH_V2 = 2,
    /**
     * @generated from enum value: OrderTypeQueryParam_LIMIT = 4;
     */
    OrderTypeQueryParam_LIMIT = 4,
    /**
     * @generated from enum value: OrderTypeQueryParam_PRIORITY = 5;
     */
    OrderTypeQueryParam_PRIORITY = 5,
    /**
     * @generated from enum value: OrderTypeQueryParam_DUTCH_V3 = 6;
     */
    OrderTypeQueryParam_DUTCH_V3 = 6
}
/**
 * @generated from enum trading.v1.OrderType
 */
export declare enum OrderType {
    /**
     * @generated from enum value: ORDER_TYPE_UNSPECIFIED = 0;
     */
    ORDER_TYPE_UNSPECIFIED = 0,
    /**
     * Also used for DUTCH
     *
     * @generated from enum value: OrderType_DUTCH_LIMIT = 1;
     */
    OrderType_DUTCH_LIMIT = 1,
    /**
     * @generated from enum value: OrderType_DUTCH_V2 = 2;
     */
    OrderType_DUTCH_V2 = 2,
    /**
     * @generated from enum value: OrderType_PRIORITY = 3;
     */
    OrderType_PRIORITY = 3,
    /**
     * @generated from enum value: OrderType_DUTCH_V3 = 4;
     */
    OrderType_DUTCH_V3 = 4
}
/**
 * @generated from message trading.v1.GetLPPriceDiscrepancyRequest
 */
export declare class GetLPPriceDiscrepancyRequest extends Message<GetLPPriceDiscrepancyRequest> {
    /**
     * @generated from field: string txn_hash = 1;
     */
    txnHash: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 2;
     */
    chainId: ChainId;
    /**
     * @generated from field: string token0 = 3;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 4;
     */
    token1: string;
    /**
     * @generated from field: optional int32 tick_spacing = 5;
     */
    tickSpacing?: number;
    /**
     * @generated from field: optional int32 fee = 6;
     */
    fee?: number;
    /**
     * @generated from field: optional string hooks = 7;
     */
    hooks?: string;
    /**
     * @generated from field: string sqrt_ratio_x96 = 8;
     */
    sqrtRatioX96: string;
    /**
     * @generated from field: trading.v1.Protocols protocol = 9;
     */
    protocol: Protocols;
    constructor(data?: PartialMessage<GetLPPriceDiscrepancyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GetLPPriceDiscrepancyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLPPriceDiscrepancyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLPPriceDiscrepancyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLPPriceDiscrepancyRequest;
    static equals(a: GetLPPriceDiscrepancyRequest | PlainMessage<GetLPPriceDiscrepancyRequest> | undefined, b: GetLPPriceDiscrepancyRequest | PlainMessage<GetLPPriceDiscrepancyRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GetLPPriceDiscrepancyResponse
 */
export declare class GetLPPriceDiscrepancyResponse extends Message<GetLPPriceDiscrepancyResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: string percent_price_difference = 2;
     */
    percentPriceDifference: string;
    /**
     * @generated from field: trading.v1.OnChainStatus status = 3;
     */
    status: OnChainStatus;
    /**
     * @generated from field: string sqrt_ratio_x96_before = 4;
     */
    sqrtRatioX96Before: string;
    /**
     * @generated from field: string sqrt_ratio_x96_after = 5;
     */
    sqrtRatioX96After: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 6;
     */
    chainId: ChainId;
    /**
     * @generated from field: trading.v1.Protocols protocol = 7;
     */
    protocol: Protocols;
    constructor(data?: PartialMessage<GetLPPriceDiscrepancyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GetLPPriceDiscrepancyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLPPriceDiscrepancyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLPPriceDiscrepancyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLPPriceDiscrepancyResponse;
    static equals(a: GetLPPriceDiscrepancyResponse | PlainMessage<GetLPPriceDiscrepancyResponse> | undefined, b: GetLPPriceDiscrepancyResponse | PlainMessage<GetLPPriceDiscrepancyResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.Encode7702Request
 */
export declare class Encode7702Request extends Message<Encode7702Request> {
    /**
     * @generated from field: repeated trading.v1.TransactionRequest calls = 1;
     */
    calls: TransactionRequest[];
    /**
     * @generated from field: string wallet_address = 2;
     */
    walletAddress: string;
    /**
     * @generated from field: string smart_contract_delegation_address = 3;
     */
    smartContractDelegationAddress: string;
    constructor(data?: PartialMessage<Encode7702Request>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.Encode7702Request";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Encode7702Request;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Encode7702Request;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Encode7702Request;
    static equals(a: Encode7702Request | PlainMessage<Encode7702Request> | undefined, b: Encode7702Request | PlainMessage<Encode7702Request> | undefined): boolean;
}
/**
 * @generated from message trading.v1.Encode7702Response
 */
export declare class Encode7702Response extends Message<Encode7702Response> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: trading.v1.TransactionRequest encoded_transaction = 2;
     */
    encodedTransaction?: TransactionRequest;
    constructor(data?: PartialMessage<Encode7702Response>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.Encode7702Response";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Encode7702Response;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Encode7702Response;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Encode7702Response;
    static equals(a: Encode7702Response | PlainMessage<Encode7702Response> | undefined, b: Encode7702Response | PlainMessage<Encode7702Response> | undefined): boolean;
}
/**
 * @generated from message trading.v1.Swap5792Request
 */
export declare class Swap5792Request extends Message<Swap5792Request> {
    /**
     * @generated from oneof trading.v1.Swap5792Request.quote
     */
    quote: {
        /**
         * @generated from field: trading.v1.ClassicQuote classic_quote = 1;
         */
        value: ClassicQuote;
        case: "classicQuote";
    } | {
        /**
         * @generated from field: trading.v1.WrapUnwrapQuote wrap_unwrap_quote = 2;
         */
        value: WrapUnwrapQuote;
        case: "wrapUnwrapQuote";
    } | {
        /**
         * @generated from field: trading.v1.BridgeQuote bridge_quote = 3;
         */
        value: BridgeQuote;
        case: "bridgeQuote";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional trading.v1.PermitSingleData permit_data = 4;
     */
    permitData?: PermitSingleData;
    /**
     * @generated from field: int64 deadline = 5;
     */
    deadline: bigint;
    /**
     * @generated from field: optional trading.v1.Urgency urgency = 6;
     */
    urgency?: Urgency;
    constructor(data?: PartialMessage<Swap5792Request>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.Swap5792Request";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Swap5792Request;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Swap5792Request;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Swap5792Request;
    static equals(a: Swap5792Request | PlainMessage<Swap5792Request> | undefined, b: Swap5792Request | PlainMessage<Swap5792Request> | undefined): boolean;
}
/**
 * @generated from message trading.v1.Swap5792Response
 */
export declare class Swap5792Response extends Message<Swap5792Response> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: string from = 2;
     */
    from: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 3;
     */
    chainId: ChainId;
    /**
     * @generated from field: repeated trading.v1.TransactionRequest5792 calls = 4;
     */
    calls: TransactionRequest5792[];
    /**
     * @generated from field: optional string gas_fee = 5;
     */
    gasFee?: string;
    /**
     * @generated from field: repeated trading.v1.GasEstimate gas_estimates = 6;
     */
    gasEstimates: GasEstimate[];
    /**
     * @generated from field: optional string signature = 7;
     */
    signature?: string;
    /**
     * @generated from field: optional string public_key_id = 8;
     */
    publicKeyId?: string;
    constructor(data?: PartialMessage<Swap5792Response>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.Swap5792Response";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Swap5792Response;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Swap5792Response;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Swap5792Response;
    static equals(a: Swap5792Response | PlainMessage<Swap5792Response> | undefined, b: Swap5792Response | PlainMessage<Swap5792Response> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PoolInfoRequest
 */
export declare class PoolInfoRequest extends Message<PoolInfoRequest> {
    /**
     * @generated from field: trading.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: repeated trading.v1.PoolReferenceByProtocol pool_references = 2;
     */
    poolReferences: PoolReferenceByProtocol[];
    /**
     * @generated from field: optional trading.v1.PoolParameters pool_parameters = 3;
     */
    poolParameters?: PoolParameters;
    /**
     * @generated from field: optional trading.v1.ChainId chain_id = 4;
     */
    chainId?: ChainId;
    /**
     * @generated from field: optional int32 page_size = 5;
     */
    pageSize?: number;
    /**
     * @generated from field: optional int32 current_page = 6;
     */
    currentPage?: number;
    constructor(data?: PartialMessage<PoolInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PoolInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolInfoRequest;
    static equals(a: PoolInfoRequest | PlainMessage<PoolInfoRequest> | undefined, b: PoolInfoRequest | PlainMessage<PoolInfoRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PoolInfoResponse
 */
export declare class PoolInfoResponse extends Message<PoolInfoResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: repeated trading.v1.PoolInformation pools = 2;
     */
    pools: PoolInformation[];
    /**
     * @generated from field: int32 current_page = 3;
     */
    currentPage: number;
    /**
     * @generated from field: int32 page_size = 4;
     */
    pageSize: number;
    constructor(data?: PartialMessage<PoolInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PoolInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolInfoResponse;
    static equals(a: PoolInfoResponse | PlainMessage<PoolInfoResponse> | undefined, b: PoolInfoResponse | PlainMessage<PoolInfoResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PoolInformation
 */
export declare class PoolInformation extends Message<PoolInformation> {
    /**
     * @generated from field: string pool_reference_identifier = 1;
     */
    poolReferenceIdentifier: string;
    /**
     * @generated from field: trading.v1.Protocols pool_protocol = 2;
     */
    poolProtocol: Protocols;
    /**
     * @generated from field: string token_address_A = 3;
     */
    tokenAddressA: string;
    /**
     * @generated from field: string token_address_B = 4;
     */
    tokenAddressB: string;
    /**
     * @generated from field: optional int32 tick_spacing = 5;
     */
    tickSpacing?: number;
    /**
     * @generated from field: optional int32 fee = 6;
     */
    fee?: number;
    /**
     * @generated from field: optional string hook_address = 7;
     */
    hookAddress?: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 8;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string token_amount_A = 9;
     */
    tokenAmountA?: string;
    /**
     * @generated from field: optional string token_amount_B = 10;
     */
    tokenAmountB?: string;
    /**
     * @generated from field: string token_decimals_A = 11;
     */
    tokenDecimalsA: string;
    /**
     * @generated from field: string token_decimals_B = 12;
     */
    tokenDecimalsB: string;
    /**
     * @generated from field: optional string pool_liquidity = 13;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional string sqrt_ratio_x96 = 14;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional int32 current_tick = 15;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string token_0_reserves = 16;
     */
    token0Reserves?: string;
    /**
     * @generated from field: optional string token_1_reserves = 17;
     */
    token1Reserves?: string;
    constructor(data?: PartialMessage<PoolInformation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PoolInformation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolInformation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolInformation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolInformation;
    static equals(a: PoolInformation | PlainMessage<PoolInformation> | undefined, b: PoolInformation | PlainMessage<PoolInformation> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PoolReferenceByProtocol
 */
export declare class PoolReferenceByProtocol extends Message<PoolReferenceByProtocol> {
    /**
     * @generated from field: string reference_identifier = 1;
     */
    referenceIdentifier: string;
    /**
     * @generated from field: trading.v1.Protocols protocol = 2;
     */
    protocol: Protocols;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 3;
     */
    chainId: ChainId;
    constructor(data?: PartialMessage<PoolReferenceByProtocol>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PoolReferenceByProtocol";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolReferenceByProtocol;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolReferenceByProtocol;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolReferenceByProtocol;
    static equals(a: PoolReferenceByProtocol | PlainMessage<PoolReferenceByProtocol> | undefined, b: PoolReferenceByProtocol | PlainMessage<PoolReferenceByProtocol> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PoolParameters
 */
export declare class PoolParameters extends Message<PoolParameters> {
    /**
     * @generated from field: string token_address_A = 2;
     */
    tokenAddressA: string;
    /**
     * @generated from field: string token_address_B = 3;
     */
    tokenAddressB: string;
    /**
     * @generated from field: optional int32 tick_spacing = 4;
     */
    tickSpacing?: number;
    /**
     * @generated from field: optional int32 fee = 5;
     */
    fee?: number;
    /**
     * @generated from field: optional string hook_address = 6;
     */
    hookAddress?: string;
    constructor(data?: PartialMessage<PoolParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PoolParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolParameters;
    static equals(a: PoolParameters | PlainMessage<PoolParameters> | undefined, b: PoolParameters | PlainMessage<PoolParameters> | undefined): boolean;
}
/**
 * @generated from message trading.v1.SendRequest
 */
export declare class SendRequest extends Message<SendRequest> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string recipient = 2;
     */
    recipient: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 3;
     */
    chainId: ChainId;
    /**
     * @generated from field: string token = 4;
     */
    token: string;
    /**
     * @generated from field: string amount = 5;
     */
    amount: string;
    /**
     * @generated from field: optional trading.v1.Urgency urgency = 6;
     */
    urgency?: Urgency;
    /**
     * @generated from field: repeated trading.v1.GasStrategy gas_strategies = 7;
     */
    gasStrategies: GasStrategy[];
    constructor(data?: PartialMessage<SendRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.SendRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendRequest;
    static equals(a: SendRequest | PlainMessage<SendRequest> | undefined, b: SendRequest | PlainMessage<SendRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.SendResponse
 */
export declare class SendResponse extends Message<SendResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional trading.v1.TransactionRequest send = 2;
     */
    send?: TransactionRequest;
    /**
     * @generated from field: optional string gas_fee = 3;
     */
    gasFee?: string;
    /**
     * @generated from field: optional string gas_fee_usd = 4;
     */
    gasFeeUsd?: string;
    /**
     * @generated from field: repeated trading.v1.GasEstimate gas_estimates = 5;
     */
    gasEstimates: GasEstimate[];
    constructor(data?: PartialMessage<SendResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.SendResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendResponse;
    static equals(a: SendResponse | PlainMessage<SendResponse> | undefined, b: SendResponse | PlainMessage<SendResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CheckApprovalLPRequest
 */
export declare class CheckApprovalLPRequest extends Message<CheckApprovalLPRequest> {
    /**
     * @generated from oneof trading.v1.CheckApprovalLPRequest.checkApprovalLPRequest
     */
    checkApprovalLPRequest: {
        /**
         * @generated from field: trading.v1.V2CheckApprovalLPRequest v2_check_approval_lp_request = 1;
         */
        value: V2CheckApprovalLPRequest;
        case: "v2CheckApprovalLpRequest";
    } | {
        /**
         * @generated from field: trading.v1.V3CheckApprovalLPRequest v3_check_approval_lp_request = 2;
         */
        value: V3CheckApprovalLPRequest;
        case: "v3CheckApprovalLpRequest";
    } | {
        /**
         * @generated from field: trading.v1.V4CheckApprovalLPRequest v4_check_approval_lp_request = 3;
         */
        value: V4CheckApprovalLPRequest;
        case: "v4CheckApprovalLpRequest";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<CheckApprovalLPRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CheckApprovalLPRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckApprovalLPRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckApprovalLPRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckApprovalLPRequest;
    static equals(a: CheckApprovalLPRequest | PlainMessage<CheckApprovalLPRequest> | undefined, b: CheckApprovalLPRequest | PlainMessage<CheckApprovalLPRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CheckApprovalLPResponse
 */
export declare class CheckApprovalLPResponse extends Message<CheckApprovalLPResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional trading.v1.TransactionRequest token_0_approval = 2;
     */
    token0Approval?: TransactionRequest;
    /**
     * @generated from field: optional trading.v1.TransactionRequest token_1_approval = 3;
     */
    token1Approval?: TransactionRequest;
    /**
     * @generated from field: optional trading.v1.TransactionRequest token_0_Cancel = 4;
     */
    token0Cancel?: TransactionRequest;
    /**
     * @generated from field: optional trading.v1.TransactionRequest token_1_Cancel = 5;
     */
    token1Cancel?: TransactionRequest;
    /**
     * @generated from field: optional trading.v1.TransactionRequest position_token_approval = 6;
     */
    positionTokenApproval?: TransactionRequest;
    /**
     * @generated from oneof trading.v1.CheckApprovalLPResponse.permitData
     */
    permitData: {
        /**
         * @generated from field: trading.v1.PermitBatchData permit_batch_data = 7;
         */
        value: PermitBatchData;
        case: "permitBatchData";
    } | {
        /**
         * @generated from field: trading.v1.NFTPermitData nft_permit_data = 8;
         */
        value: NFTPermitData;
        case: "nftPermitData";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional trading.v1.TransactionRequest token_0_permit_transaction = 9;
     */
    token0PermitTransaction?: TransactionRequest;
    /**
     * @generated from field: optional trading.v1.TransactionRequest token_1_permit_transaction = 10;
     */
    token1PermitTransaction?: TransactionRequest;
    /**
     * @generated from field: optional string gas_fee_token_0_approval = 11;
     */
    gasFeeToken0Approval?: string;
    /**
     * @generated from field: optional string gas_fee_token_1_approval = 12;
     */
    gasFeeToken1Approval?: string;
    /**
     * @generated from field: optional string gas_fee_position_token_approval = 13;
     */
    gasFeePositionTokenApproval?: string;
    /**
     * @generated from field: optional string gas_fee_token_0_cancel = 14;
     */
    gasFeeToken0Cancel?: string;
    /**
     * @generated from field: optional string gas_fee_token_1_cancel = 15;
     */
    gasFeeToken1Cancel?: string;
    /**
     * @generated from field: optional string gas_fee_token_0_permit = 16;
     */
    gasFeeToken0Permit?: string;
    /**
     * @generated from field: optional string gas_fee_token_1_permit = 17;
     */
    gasFeeToken1Permit?: string;
    constructor(data?: PartialMessage<CheckApprovalLPResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CheckApprovalLPResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckApprovalLPResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckApprovalLPResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckApprovalLPResponse;
    static equals(a: CheckApprovalLPResponse | PlainMessage<CheckApprovalLPResponse> | undefined, b: CheckApprovalLPResponse | PlainMessage<CheckApprovalLPResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V2CheckApprovalLPRequest
 */
export declare class V2CheckApprovalLPRequest extends Message<V2CheckApprovalLPRequest> {
    /**
     * @generated from field: trading.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: optional string token0 = 2;
     */
    token0?: string;
    /**
     * @generated from field: optional string token1 = 3;
     */
    token1?: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string position_token = 5;
     */
    positionToken?: string;
    /**
     * @generated from field: string wallet_address = 6;
     */
    walletAddress: string;
    /**
     * @generated from field: optional string amount0 = 7;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 8;
     */
    amount1?: string;
    /**
     * @generated from field: optional string position_amount = 9;
     */
    positionAmount?: string;
    /**
     * @generated from field: bool simulate_transaction = 10;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V2CheckApprovalLPRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V2CheckApprovalLPRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2CheckApprovalLPRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2CheckApprovalLPRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2CheckApprovalLPRequest;
    static equals(a: V2CheckApprovalLPRequest | PlainMessage<V2CheckApprovalLPRequest> | undefined, b: V2CheckApprovalLPRequest | PlainMessage<V2CheckApprovalLPRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V3CheckApprovalLPRequest
 */
export declare class V3CheckApprovalLPRequest extends Message<V3CheckApprovalLPRequest> {
    /**
     * @generated from field: trading.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: optional string token0 = 2;
     */
    token0?: string;
    /**
     * @generated from field: optional string token1 = 3;
     */
    token1?: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string position_token = 5;
     */
    positionToken?: string;
    /**
     * @generated from field: string wallet_address = 6;
     */
    walletAddress: string;
    /**
     * @generated from field: optional string amount0 = 7;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 8;
     */
    amount1?: string;
    /**
     * @generated from field: bool simulate_transaction = 10;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V3CheckApprovalLPRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V3CheckApprovalLPRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3CheckApprovalLPRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3CheckApprovalLPRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3CheckApprovalLPRequest;
    static equals(a: V3CheckApprovalLPRequest | PlainMessage<V3CheckApprovalLPRequest> | undefined, b: V3CheckApprovalLPRequest | PlainMessage<V3CheckApprovalLPRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V4CheckApprovalLPRequest
 */
export declare class V4CheckApprovalLPRequest extends Message<V4CheckApprovalLPRequest> {
    /**
     * @generated from field: trading.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: string token0 = 2;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 3;
     */
    token1: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: string wallet_address = 6;
     */
    walletAddress: string;
    /**
     * @generated from field: string amount0 = 7;
     */
    amount0: string;
    /**
     * @generated from field: string amount1 = 8;
     */
    amount1: string;
    /**
     * @generated from field: bool generate_permit_as_transaction = 9;
     */
    generatePermitAsTransaction: boolean;
    /**
     * @generated from field: bool simulate_transaction = 10;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V4CheckApprovalLPRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V4CheckApprovalLPRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4CheckApprovalLPRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4CheckApprovalLPRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4CheckApprovalLPRequest;
    static equals(a: V4CheckApprovalLPRequest | PlainMessage<V4CheckApprovalLPRequest> | undefined, b: V4CheckApprovalLPRequest | PlainMessage<V4CheckApprovalLPRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.MigrateLpPositionRequest
 */
export declare class MigrateLpPositionRequest extends Message<MigrateLpPositionRequest> {
    /**
     * @generated from field: int32 tokenId = 1;
     */
    tokenId: number;
    /**
     * @generated from field: string wallet_address = 2;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 3;
     */
    chainId: ChainId;
    /**
     * @generated from field: trading.v1.Protocols input_protocol = 4;
     */
    inputProtocol: Protocols;
    /**
     * @generated from field: trading.v1.V3Position input_position = 5;
     */
    inputPosition?: V3Position;
    /**
     * @generated from field: string input_pool_liquidity = 6;
     */
    inputPoolLiquidity: string;
    /**
     * @generated from field: int32 input_current_tick = 7;
     */
    inputCurrentTick: number;
    /**
     * @generated from field: string input_sqrt_ratio_x96 = 8;
     */
    inputSqrtRatioX96: string;
    /**
     * @generated from field: string input_position_liquidity = 9;
     */
    inputPositionLiquidity: string;
    /**
     * @generated from field: optional string signature = 10;
     */
    signature?: string;
    /**
     * @generated from field: string amount0 = 11;
     */
    amount0: string;
    /**
     * @generated from field: string amount1 = 12;
     */
    amount1: string;
    /**
     * @generated from field: trading.v1.Protocols output_protocol = 13;
     */
    outputProtocol: Protocols;
    /**
     * @generated from field: trading.v1.V4Position output_position = 14;
     */
    outputPosition?: V4Position;
    /**
     * @generated from field: optional string output_pool_liquidity = 15;
     */
    outputPoolLiquidity?: string;
    /**
     * @generated from field: optional int32 output_current_tick = 16;
     */
    outputCurrentTick?: number;
    /**
     * @generated from field: optional string output_sqrt_ratio_x96 = 17;
     */
    outputSqrtRatioX96?: string;
    /**
     * @generated from field: optional string initial_price = 18;
     */
    initialPrice?: string;
    /**
     * @generated from field: string expectedTokenOwed0RawAmount = 19;
     */
    expectedTokenOwed0RawAmount: string;
    /**
     * @generated from field: string expectedTokenOwed1RawAmount = 20;
     */
    expectedTokenOwed1RawAmount: string;
    /**
     * @generated from field: bool simulate_transaction = 21;
     */
    simulateTransaction: boolean;
    /**
     * @generated from field: optional int32 slippage_tolerance = 22;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 23;
     */
    deadline?: number;
    /**
     * @generated from field: optional int32 signature_deadline = 24;
     */
    signatureDeadline?: number;
    constructor(data?: PartialMessage<MigrateLpPositionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.MigrateLpPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateLpPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateLpPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateLpPositionRequest;
    static equals(a: MigrateLpPositionRequest | PlainMessage<MigrateLpPositionRequest> | undefined, b: MigrateLpPositionRequest | PlainMessage<MigrateLpPositionRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.MigrateLpPositionResponse
 */
export declare class MigrateLpPositionResponse extends Message<MigrateLpPositionResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional trading.v1.TransactionRequest migrate = 2;
     */
    migrate?: TransactionRequest;
    /**
     * @generated from field: optional string gasFee = 3;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<MigrateLpPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.MigrateLpPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateLpPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateLpPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateLpPositionResponse;
    static equals(a: MigrateLpPositionResponse | PlainMessage<MigrateLpPositionResponse> | undefined, b: MigrateLpPositionResponse | PlainMessage<MigrateLpPositionResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.ClaimLPFeesRequest
 */
export declare class ClaimLPFeesRequest extends Message<ClaimLPFeesRequest> {
    /**
     * @generated from oneof trading.v1.ClaimLPFeesRequest.claimLPFeesRequest
     */
    claimLPFeesRequest: {
        /**
         * @generated from field: trading.v1.V2ClaimLPFeesRequest v2_claim_lp_fees_request = 1;
         */
        value: V2ClaimLPFeesRequest;
        case: "v2ClaimLpFeesRequest";
    } | {
        /**
         * @generated from field: trading.v1.V3ClaimLPFeesRequest v3_claim_lp_fees_request = 2;
         */
        value: V3ClaimLPFeesRequest;
        case: "v3ClaimLpFeesRequest";
    } | {
        /**
         * @generated from field: trading.v1.V4ClaimLPFeesRequest v4_claim_lp_fees_request = 3;
         */
        value: V4ClaimLPFeesRequest;
        case: "v4ClaimLpFeesRequest";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<ClaimLPFeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.ClaimLPFeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimLPFeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimLPFeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimLPFeesRequest;
    static equals(a: ClaimLPFeesRequest | PlainMessage<ClaimLPFeesRequest> | undefined, b: ClaimLPFeesRequest | PlainMessage<ClaimLPFeesRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.ClaimLPFeesResponse
 */
export declare class ClaimLPFeesResponse extends Message<ClaimLPFeesResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional trading.v1.TransactionRequest claim = 2;
     */
    claim?: TransactionRequest;
    /**
     * @generated from field: optional string gasFee = 3;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<ClaimLPFeesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.ClaimLPFeesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimLPFeesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimLPFeesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimLPFeesResponse;
    static equals(a: ClaimLPFeesResponse | PlainMessage<ClaimLPFeesResponse> | undefined, b: ClaimLPFeesResponse | PlainMessage<ClaimLPFeesResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V2ClaimLPFeesRequest
 */
export declare class V2ClaimLPFeesRequest extends Message<V2ClaimLPFeesRequest> {
    /**
     * @generated from field: trading.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: trading.v1.V2Position position = 2;
     */
    position?: V2Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional bool simulate_transaction = 5;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: bool collectAsWETH = 6;
     */
    collectAsWETH: boolean;
    constructor(data?: PartialMessage<V2ClaimLPFeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V2ClaimLPFeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2ClaimLPFeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2ClaimLPFeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2ClaimLPFeesRequest;
    static equals(a: V2ClaimLPFeesRequest | PlainMessage<V2ClaimLPFeesRequest> | undefined, b: V2ClaimLPFeesRequest | PlainMessage<V2ClaimLPFeesRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V3ClaimLPFeesRequest
 */
export declare class V3ClaimLPFeesRequest extends Message<V3ClaimLPFeesRequest> {
    /**
     * @generated from field: trading.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: trading.v1.V3Position position = 3;
     */
    position?: V3Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional bool simulate_transaction = 6;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: bool collectAsWETH = 7;
     */
    collectAsWETH: boolean;
    /**
     * @generated from field: string expectedTokenOwed0RawAmount = 8;
     */
    expectedTokenOwed0RawAmount: string;
    /**
     * @generated from field: string expectedTokenOwed1RawAmount = 9;
     */
    expectedTokenOwed1RawAmount: string;
    constructor(data?: PartialMessage<V3ClaimLPFeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V3ClaimLPFeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3ClaimLPFeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3ClaimLPFeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3ClaimLPFeesRequest;
    static equals(a: V3ClaimLPFeesRequest | PlainMessage<V3ClaimLPFeesRequest> | undefined, b: V3ClaimLPFeesRequest | PlainMessage<V3ClaimLPFeesRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V4ClaimLPFeesRequest
 */
export declare class V4ClaimLPFeesRequest extends Message<V4ClaimLPFeesRequest> {
    /**
     * @generated from field: trading.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: trading.v1.V4Position position = 3;
     */
    position?: V4Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional bool simulate_transaction = 6;
     */
    simulateTransaction?: boolean;
    constructor(data?: PartialMessage<V4ClaimLPFeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V4ClaimLPFeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4ClaimLPFeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4ClaimLPFeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4ClaimLPFeesRequest;
    static equals(a: V4ClaimLPFeesRequest | PlainMessage<V4ClaimLPFeesRequest> | undefined, b: V4ClaimLPFeesRequest | PlainMessage<V4ClaimLPFeesRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DecreaseLPPositionRequest
 */
export declare class DecreaseLPPositionRequest extends Message<DecreaseLPPositionRequest> {
    /**
     * @generated from oneof trading.v1.DecreaseLPPositionRequest.decreaseLpPosition
     */
    decreaseLpPosition: {
        /**
         * @generated from field: trading.v1.V2DecreaseLPPosition v2_decrease_lp_position = 1;
         */
        value: V2DecreaseLPPosition;
        case: "v2DecreaseLpPosition";
    } | {
        /**
         * @generated from field: trading.v1.V3DecreaseLPPosition v3_decrease_lp_position = 2;
         */
        value: V3DecreaseLPPosition;
        case: "v3DecreaseLpPosition";
    } | {
        /**
         * @generated from field: trading.v1.V4DecreaseLPPosition v4_decrease_lp_position = 3;
         */
        value: V4DecreaseLPPosition;
        case: "v4DecreaseLpPosition";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<DecreaseLPPositionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DecreaseLPPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecreaseLPPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecreaseLPPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecreaseLPPositionRequest;
    static equals(a: DecreaseLPPositionRequest | PlainMessage<DecreaseLPPositionRequest> | undefined, b: DecreaseLPPositionRequest | PlainMessage<DecreaseLPPositionRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DecreaseLPPositionResponse
 */
export declare class DecreaseLPPositionResponse extends Message<DecreaseLPPositionResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional trading.v1.TransactionRequest decrease = 2;
     */
    decrease?: TransactionRequest;
    /**
     * @generated from field: optional string pool_liquidity = 4;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 5;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 6;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional string gasFee = 7;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<DecreaseLPPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DecreaseLPPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecreaseLPPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecreaseLPPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecreaseLPPositionResponse;
    static equals(a: DecreaseLPPositionResponse | PlainMessage<DecreaseLPPositionResponse> | undefined, b: DecreaseLPPositionResponse | PlainMessage<DecreaseLPPositionResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V2DecreaseLPPosition
 */
export declare class V2DecreaseLPPosition extends Message<V2DecreaseLPPosition> {
    /**
     * @generated from field: trading.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: trading.v1.V2Position position = 2;
     */
    position?: V2Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: string positionLiquidity = 5;
     */
    positionLiquidity: string;
    /**
     * @generated from field: int32 liquidityPercentageToDecrease = 6;
     */
    liquidityPercentageToDecrease: number;
    /**
     * @generated from field: string liquidity0 = 7;
     */
    liquidity0: string;
    /**
     * @generated from field: string liquidity1 = 8;
     */
    liquidity1: string;
    /**
     * @generated from field: bool collectAsWETH = 10;
     */
    collectAsWETH: boolean;
    /**
     * @generated from field: optional bool simulate_transaction = 11;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: optional int32 slippage_tolerance = 12;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 13;
     */
    deadline?: number;
    constructor(data?: PartialMessage<V2DecreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V2DecreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2DecreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2DecreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2DecreaseLPPosition;
    static equals(a: V2DecreaseLPPosition | PlainMessage<V2DecreaseLPPosition> | undefined, b: V2DecreaseLPPosition | PlainMessage<V2DecreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V3DecreaseLPPosition
 */
export declare class V3DecreaseLPPosition extends Message<V3DecreaseLPPosition> {
    /**
     * @generated from field: trading.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: trading.v1.V3Position position = 3;
     */
    position?: V3Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: string liquidityPercentageToDecrease = 7;
     */
    liquidityPercentageToDecrease: string;
    /**
     * @generated from field: optional string poolLiquidity = 8;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional int32 current_tick = 9;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 10;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: string positionLiquidity = 11;
     */
    positionLiquidity: string;
    /**
     * @generated from field: string expectedTokenOwed0RawAmount = 12;
     */
    expectedTokenOwed0RawAmount: string;
    /**
     * @generated from field: string expectedTokenOwed1RawAmount = 13;
     */
    expectedTokenOwed1RawAmount: string;
    /**
     * @generated from field: bool collectAsWETH = 14;
     */
    collectAsWETH: boolean;
    /**
     * @generated from field: optional bool simulate_transaction = 15;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: optional int32 slippage_tolerance = 16;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 17;
     */
    deadline?: number;
    constructor(data?: PartialMessage<V3DecreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V3DecreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3DecreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3DecreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3DecreaseLPPosition;
    static equals(a: V3DecreaseLPPosition | PlainMessage<V3DecreaseLPPosition> | undefined, b: V3DecreaseLPPosition | PlainMessage<V3DecreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V4DecreaseLPPosition
 */
export declare class V4DecreaseLPPosition extends Message<V4DecreaseLPPosition> {
    /**
     * @generated from field: trading.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: trading.v1.V4Position position = 3;
     */
    position?: V4Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: int32 liquidityPercentageToDecrease = 6;
     */
    liquidityPercentageToDecrease: number;
    /**
     * @generated from field: optional string poolLiquidity = 7;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional int32 current_tick = 8;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 9;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: string positionLiquidity = 10;
     */
    positionLiquidity: string;
    /**
     * @generated from field: optional bool simulate_transaction = 11;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: optional int32 slippage_tolerance = 12;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 13;
     */
    deadline?: number;
    constructor(data?: PartialMessage<V4DecreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V4DecreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4DecreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4DecreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4DecreaseLPPosition;
    static equals(a: V4DecreaseLPPosition | PlainMessage<V4DecreaseLPPosition> | undefined, b: V4DecreaseLPPosition | PlainMessage<V4DecreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message trading.v1.IncreaseLPPositionRequest
 */
export declare class IncreaseLPPositionRequest extends Message<IncreaseLPPositionRequest> {
    /**
     * @generated from oneof trading.v1.IncreaseLPPositionRequest.increaseLpPosition
     */
    increaseLpPosition: {
        /**
         * @generated from field: trading.v1.V2IncreaseLPPosition v2_increase_lp_position = 1;
         */
        value: V2IncreaseLPPosition;
        case: "v2IncreaseLpPosition";
    } | {
        /**
         * @generated from field: trading.v1.V3IncreaseLPPosition v3_increase_lp_position = 2;
         */
        value: V3IncreaseLPPosition;
        case: "v3IncreaseLpPosition";
    } | {
        /**
         * @generated from field: trading.v1.V4IncreaseLPPosition v4_increase_lp_position = 3;
         */
        value: V4IncreaseLPPosition;
        case: "v4IncreaseLpPosition";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<IncreaseLPPositionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.IncreaseLPPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncreaseLPPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncreaseLPPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncreaseLPPositionRequest;
    static equals(a: IncreaseLPPositionRequest | PlainMessage<IncreaseLPPositionRequest> | undefined, b: IncreaseLPPositionRequest | PlainMessage<IncreaseLPPositionRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.IncreaseLPPositionResponse
 */
export declare class IncreaseLPPositionResponse extends Message<IncreaseLPPositionResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional trading.v1.TransactionRequest increase = 2;
     */
    increase?: TransactionRequest;
    /**
     * @generated from field: optional string dependent_amount = 3;
     */
    dependentAmount?: string;
    /**
     * @generated from field: optional string pool_liquidity = 4;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 5;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 6;
     */
    sqrtRatioX96?: string;
    constructor(data?: PartialMessage<IncreaseLPPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.IncreaseLPPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncreaseLPPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncreaseLPPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncreaseLPPositionResponse;
    static equals(a: IncreaseLPPositionResponse | PlainMessage<IncreaseLPPositionResponse> | undefined, b: IncreaseLPPositionResponse | PlainMessage<IncreaseLPPositionResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V2IncreaseLPPosition
 */
export declare class V2IncreaseLPPosition extends Message<V2IncreaseLPPosition> {
    /**
     * @generated from field: trading.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: trading.v1.V2Position position = 2;
     */
    position?: V2Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string amount0 = 5;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 6;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 7;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional trading.v1.IndependentToken independent_token = 8;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string default_dependent_amount = 9;
     */
    defaultDependentAmount?: string;
    /**
     * @generated from field: optional int32 slippage_tolerance = 10;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 11;
     */
    deadline?: number;
    /**
     * @generated from field: bool simulate_transaction = 12;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V2IncreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V2IncreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2IncreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2IncreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2IncreaseLPPosition;
    static equals(a: V2IncreaseLPPosition | PlainMessage<V2IncreaseLPPosition> | undefined, b: V2IncreaseLPPosition | PlainMessage<V2IncreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V3IncreaseLPPosition
 */
export declare class V3IncreaseLPPosition extends Message<V3IncreaseLPPosition> {
    /**
     * @generated from field: trading.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: trading.v1.V3Position position = 3;
     */
    position?: V3Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string amount0 = 6;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 7;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 8;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional trading.v1.IndependentToken independent_token = 9;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string pool_liquidity = 10;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 11;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 12;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional int32 slippage_tolerance = 14;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 15;
     */
    deadline?: number;
    /**
     * @generated from field: bool simulate_transaction = 16;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V3IncreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V3IncreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3IncreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3IncreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3IncreaseLPPosition;
    static equals(a: V3IncreaseLPPosition | PlainMessage<V3IncreaseLPPosition> | undefined, b: V3IncreaseLPPosition | PlainMessage<V3IncreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V4IncreaseLPPosition
 */
export declare class V4IncreaseLPPosition extends Message<V4IncreaseLPPosition> {
    /**
     * @generated from field: trading.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: trading.v1.V4Position position = 3;
     */
    position?: V4Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string amount0 = 6;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 7;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 8;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional trading.v1.IndependentToken independent_token = 9;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string pool_liquidity = 10;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 11;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 12;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional int32 slippage_tolerance = 14;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 15;
     */
    deadline?: number;
    /**
     * @generated from field: bool simulate_transaction = 16;
     */
    simulateTransaction: boolean;
    /**
     * @generated from field: optional string signature = 17;
     */
    signature?: string;
    /**
     * @generated from field: optional trading.v1.PermitBatchData batchPermitData = 18;
     */
    batchPermitData?: PermitBatchData;
    constructor(data?: PartialMessage<V4IncreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V4IncreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4IncreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4IncreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4IncreaseLPPosition;
    static equals(a: V4IncreaseLPPosition | PlainMessage<V4IncreaseLPPosition> | undefined, b: V4IncreaseLPPosition | PlainMessage<V4IncreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CreateLPPositionRequest
 */
export declare class CreateLPPositionRequest extends Message<CreateLPPositionRequest> {
    /**
     * @generated from oneof trading.v1.CreateLPPositionRequest.createLpPosition
     */
    createLpPosition: {
        /**
         * @generated from field: trading.v1.V2CreateLPPosition v2_create_lp_position = 1;
         */
        value: V2CreateLPPosition;
        case: "v2CreateLpPosition";
    } | {
        /**
         * @generated from field: trading.v1.V3CreateLPPosition v3_create_lp_position = 2;
         */
        value: V3CreateLPPosition;
        case: "v3CreateLpPosition";
    } | {
        /**
         * @generated from field: trading.v1.V4CreateLPPosition v4_create_lp_position = 3;
         */
        value: V4CreateLPPosition;
        case: "v4CreateLpPosition";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<CreateLPPositionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CreateLPPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateLPPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateLPPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateLPPositionRequest;
    static equals(a: CreateLPPositionRequest | PlainMessage<CreateLPPositionRequest> | undefined, b: CreateLPPositionRequest | PlainMessage<CreateLPPositionRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CreateLPPositionResponse
 */
export declare class CreateLPPositionResponse extends Message<CreateLPPositionResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional trading.v1.TransactionRequest create = 2;
     */
    create?: TransactionRequest;
    /**
     * @generated from field: optional string dependent_amount = 3;
     */
    dependentAmount?: string;
    /**
     * @generated from field: optional string pool_liquidity = 4;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 5;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 6;
     */
    sqrtRatioX96?: string;
    constructor(data?: PartialMessage<CreateLPPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CreateLPPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateLPPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateLPPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateLPPositionResponse;
    static equals(a: CreateLPPositionResponse | PlainMessage<CreateLPPositionResponse> | undefined, b: CreateLPPositionResponse | PlainMessage<CreateLPPositionResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V2CreateLPPosition
 */
export declare class V2CreateLPPosition extends Message<V2CreateLPPosition> {
    /**
     * @generated from field: trading.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: trading.v1.V2Position position = 2;
     */
    position?: V2Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string amount0 = 5;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 6;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 7;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional trading.v1.IndependentToken independent_token = 8;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string default_dependent_amount = 10;
     */
    defaultDependentAmount?: string;
    /**
     * @generated from field: optional int32 slippage_tolerance = 15;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 16;
     */
    deadline?: number;
    /**
     * @generated from field: bool simulate_transaction = 19;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V2CreateLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V2CreateLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2CreateLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2CreateLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2CreateLPPosition;
    static equals(a: V2CreateLPPosition | PlainMessage<V2CreateLPPosition> | undefined, b: V2CreateLPPosition | PlainMessage<V2CreateLPPosition> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V3CreateLPPosition
 */
export declare class V3CreateLPPosition extends Message<V3CreateLPPosition> {
    /**
     * @generated from field: trading.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: trading.v1.V3Position position = 2;
     */
    position?: V3Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string initial_price = 11;
     */
    initialPrice?: string;
    /**
     * @generated from field: optional string amount0 = 5;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 6;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 7;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional trading.v1.IndependentToken independent_token = 8;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string initial_dependent_amount = 9;
     */
    initialDependentAmount?: string;
    /**
     * @generated from field: optional string pool_liquidity = 12;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 13;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 14;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional int32 slippage_tolerance = 15;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 16;
     */
    deadline?: number;
    /**
     * @generated from field: bool simulate_transaction = 19;
     */
    simulateTransaction: boolean;
    /**
     * @generated from field: optional string default_dependent_amount = 10;
     */
    defaultDependentAmount?: string;
    /**
     * @generated from field: optional string signature = 17;
     */
    signature?: string;
    /**
     * @generated from field: optional trading.v1.PermitBatchData batchPermitData = 18;
     */
    batchPermitData?: PermitBatchData;
    constructor(data?: PartialMessage<V3CreateLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V3CreateLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3CreateLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3CreateLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3CreateLPPosition;
    static equals(a: V3CreateLPPosition | PlainMessage<V3CreateLPPosition> | undefined, b: V3CreateLPPosition | PlainMessage<V3CreateLPPosition> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V4CreateLPPosition
 */
export declare class V4CreateLPPosition extends Message<V4CreateLPPosition> {
    /**
     * @generated from field: trading.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: trading.v1.V4Position position = 2;
     */
    position?: V4Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string initial_price = 11;
     */
    initialPrice?: string;
    /**
     * @generated from field: optional string amount0 = 5;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 6;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 7;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional trading.v1.IndependentToken independent_token = 8;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string initial_dependent_amount = 9;
     */
    initialDependentAmount?: string;
    /**
     * @generated from field: optional string pool_liquidity = 12;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 13;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 14;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional string signature = 17;
     */
    signature?: string;
    /**
     * @generated from field: optional trading.v1.PermitBatchData batchPermitData = 18;
     */
    batchPermitData?: PermitBatchData;
    /**
     * @generated from field: optional string default_dependent_amount = 10;
     */
    defaultDependentAmount?: string;
    /**
     * @generated from field: optional int32 slippage_tolerance = 15;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 16;
     */
    deadline?: number;
    /**
     * @generated from field: bool simulate_transaction = 19;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V4CreateLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V4CreateLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4CreateLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4CreateLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4CreateLPPosition;
    static equals(a: V4CreateLPPosition | PlainMessage<V4CreateLPPosition> | undefined, b: V4CreateLPPosition | PlainMessage<V4CreateLPPosition> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V4Position
 */
export declare class V4Position extends Message<V4Position> {
    /**
     * @generated from field: trading.v1.V4Pool pool = 1;
     */
    pool?: V4Pool;
    /**
     * @generated from field: sint32 tick_lower = 2;
     */
    tickLower: number;
    /**
     * @generated from field: sint32 tick_upper = 3;
     */
    tickUpper: number;
    constructor(data?: PartialMessage<V4Position>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V4Position";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4Position;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4Position;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4Position;
    static equals(a: V4Position | PlainMessage<V4Position> | undefined, b: V4Position | PlainMessage<V4Position> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V3Position
 */
export declare class V3Position extends Message<V3Position> {
    /**
     * @generated from field: trading.v1.V3Pool pool = 1;
     */
    pool?: V3Pool;
    /**
     * @generated from field: sint32 tick_lower = 2;
     */
    tickLower: number;
    /**
     * @generated from field: sint32 tick_upper = 3;
     */
    tickUpper: number;
    constructor(data?: PartialMessage<V3Position>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V3Position";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3Position;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3Position;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3Position;
    static equals(a: V3Position | PlainMessage<V3Position> | undefined, b: V3Position | PlainMessage<V3Position> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V2Position
 */
export declare class V2Position extends Message<V2Position> {
    /**
     * @generated from field: trading.v1.V2Pool pool = 1;
     */
    pool?: V2Pool;
    constructor(data?: PartialMessage<V2Position>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V2Position";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2Position;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2Position;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2Position;
    static equals(a: V2Position | PlainMessage<V2Position> | undefined, b: V2Position | PlainMessage<V2Position> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V2Pool
 */
export declare class V2Pool extends Message<V2Pool> {
    /**
     * @generated from field: string token0 = 1;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 2;
     */
    token1: string;
    constructor(data?: PartialMessage<V2Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V2Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2Pool;
    static equals(a: V2Pool | PlainMessage<V2Pool> | undefined, b: V2Pool | PlainMessage<V2Pool> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V3Pool
 */
export declare class V3Pool extends Message<V3Pool> {
    /**
     * @generated from field: string token0 = 1;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 2;
     */
    token1: string;
    /**
     * @generated from field: int32 fee = 3;
     */
    fee: number;
    /**
     * @generated from field: int32 tick_spacing = 4;
     */
    tickSpacing: number;
    constructor(data?: PartialMessage<V3Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V3Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3Pool;
    static equals(a: V3Pool | PlainMessage<V3Pool> | undefined, b: V3Pool | PlainMessage<V3Pool> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V4Pool
 */
export declare class V4Pool extends Message<V4Pool> {
    /**
     * @generated from field: string token0 = 1;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 2;
     */
    token1: string;
    /**
     * @generated from field: int32 fee = 3;
     */
    fee: number;
    /**
     * @generated from field: int32 tick_spacing = 4;
     */
    tickSpacing: number;
    /**
     * @generated from field: optional string hooks = 5;
     */
    hooks?: string;
    constructor(data?: PartialMessage<V4Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V4Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4Pool;
    static equals(a: V4Pool | PlainMessage<V4Pool> | undefined, b: V4Pool | PlainMessage<V4Pool> | undefined): boolean;
}
/**
 * @generated from message trading.v1.TypedDataDomain
 */
export declare class TypedDataDomain extends Message<TypedDataDomain> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: optional string version = 2;
     */
    version?: string;
    /**
     * @generated from field: optional int32 chain_id = 3;
     */
    chainId?: number;
    /**
     * @generated from field: optional string verifying_contract = 4;
     */
    verifyingContract?: string;
    /**
     * @generated from field: optional string salt = 5;
     */
    salt?: string;
    constructor(data?: PartialMessage<TypedDataDomain>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.TypedDataDomain";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TypedDataDomain;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TypedDataDomain;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TypedDataDomain;
    static equals(a: TypedDataDomain | PlainMessage<TypedDataDomain> | undefined, b: TypedDataDomain | PlainMessage<TypedDataDomain> | undefined): boolean;
}
/**
 * @generated from message trading.v1.NFTPermitValues
 */
export declare class NFTPermitValues extends Message<NFTPermitValues> {
    /**
     * @generated from field: string spender = 1;
     */
    spender: string;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: string deadline = 3;
     */
    deadline: string;
    /**
     * @generated from field: string nonce = 4;
     */
    nonce: string;
    constructor(data?: PartialMessage<NFTPermitValues>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.NFTPermitValues";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NFTPermitValues;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NFTPermitValues;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NFTPermitValues;
    static equals(a: NFTPermitValues | PlainMessage<NFTPermitValues> | undefined, b: NFTPermitValues | PlainMessage<NFTPermitValues> | undefined): boolean;
}
/**
 * @generated from message trading.v1.NFTPermitData
 */
export declare class NFTPermitData extends Message<NFTPermitData> {
    /**
     * @generated from field: trading.v1.TypedDataDomain domain = 1;
     */
    domain?: TypedDataDomain;
    /**
     * @generated from field: map<string, trading.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: trading.v1.NFTPermitValues values = 3;
     */
    values?: NFTPermitValues;
    constructor(data?: PartialMessage<NFTPermitData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.NFTPermitData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NFTPermitData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NFTPermitData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NFTPermitData;
    static equals(a: NFTPermitData | PlainMessage<NFTPermitData> | undefined, b: NFTPermitData | PlainMessage<NFTPermitData> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PermitBatchData
 */
export declare class PermitBatchData extends Message<PermitBatchData> {
    /**
     * @generated from field: trading.v1.Domain domain = 1;
     */
    domain?: Domain;
    /**
     * @generated from field: map<string, trading.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: trading.v1.PermitBatch values = 3;
     */
    values?: PermitBatch;
    constructor(data?: PartialMessage<PermitBatchData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PermitBatchData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitBatchData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitBatchData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitBatchData;
    static equals(a: PermitBatchData | PlainMessage<PermitBatchData> | undefined, b: PermitBatchData | PlainMessage<PermitBatchData> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PermitBatch
 */
export declare class PermitBatch extends Message<PermitBatch> {
    /**
     * @generated from field: repeated trading.v1.PermitDetails details = 1;
     */
    details: PermitDetails[];
    /**
     * @generated from field: string spender = 2;
     */
    spender: string;
    /**
     * @generated from field: string sig_deadline = 3;
     */
    sigDeadline: string;
    constructor(data?: PartialMessage<PermitBatch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PermitBatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitBatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitBatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitBatch;
    static equals(a: PermitBatch | PlainMessage<PermitBatch> | undefined, b: PermitBatch | PlainMessage<PermitBatch> | undefined): boolean;
}
/**
 * @generated from message trading.v1.SwappableTokensRequest
 */
export declare class SwappableTokensRequest extends Message<SwappableTokensRequest> {
    /**
     * @generated from field: string token_in = 1;
     */
    tokenIn: string;
    /**
     * @generated from field: trading.v1.ChainId token_in_chain_id = 2;
     */
    tokenInChainId: ChainId;
    /**
     * @generated from field: optional string client_version = 3;
     */
    clientVersion?: string;
    /**
     * @generated from field: optional string client_name = 4;
     */
    clientName?: string;
    /**
     * @generated from field: repeated trading.v1.ChainId chain_blocklist = 5;
     */
    chainBlocklist: ChainId[];
    constructor(data?: PartialMessage<SwappableTokensRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.SwappableTokensRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwappableTokensRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwappableTokensRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwappableTokensRequest;
    static equals(a: SwappableTokensRequest | PlainMessage<SwappableTokensRequest> | undefined, b: SwappableTokensRequest | PlainMessage<SwappableTokensRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.SwappableTokensResponse
 */
export declare class SwappableTokensResponse extends Message<SwappableTokensResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: repeated trading.v1.Token tokens = 2;
     */
    tokens: Token[];
    constructor(data?: PartialMessage<SwappableTokensResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.SwappableTokensResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwappableTokensResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwappableTokensResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwappableTokensResponse;
    static equals(a: SwappableTokensResponse | PlainMessage<SwappableTokensResponse> | undefined, b: SwappableTokensResponse | PlainMessage<SwappableTokensResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.TokenProjectLogo
 */
export declare class TokenProjectLogo extends Message<TokenProjectLogo> {
    /**
     * @generated from field: optional string url = 1;
     */
    url?: string;
    constructor(data?: PartialMessage<TokenProjectLogo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.TokenProjectLogo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenProjectLogo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenProjectLogo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenProjectLogo;
    static equals(a: TokenProjectLogo | PlainMessage<TokenProjectLogo> | undefined, b: TokenProjectLogo | PlainMessage<TokenProjectLogo> | undefined): boolean;
}
/**
 * @generated from message trading.v1.TokenProject
 */
export declare class TokenProject extends Message<TokenProject> {
    /**
     * @generated from field: trading.v1.TokenProjectLogo logo = 1;
     */
    logo?: TokenProjectLogo;
    /**
     * @generated from field: bool is_spam = 2;
     */
    isSpam: boolean;
    /**
     * @generated from field: trading.v1.SafetyLevel safety_level = 3;
     */
    safetyLevel: SafetyLevel;
    constructor(data?: PartialMessage<TokenProject>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.TokenProject";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenProject;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenProject;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenProject;
    static equals(a: TokenProject | PlainMessage<TokenProject> | undefined, b: TokenProject | PlainMessage<TokenProject> | undefined): boolean;
}
/**
 * @generated from message trading.v1.Token
 */
export declare class Token extends Message<Token> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 2;
     */
    chainId: ChainId;
    /**
     * @generated from field: string symbol = 3;
     */
    symbol: string;
    /**
     * @generated from field: int32 decimals = 4;
     */
    decimals: number;
    /**
     * @generated from field: string name = 5;
     */
    name: string;
    /**
     * @generated from field: trading.v1.TokenProject project = 6;
     */
    project?: TokenProject;
    constructor(data?: PartialMessage<Token>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.Token";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Token;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Token;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Token;
    static equals(a: Token | PlainMessage<Token> | undefined, b: Token | PlainMessage<Token> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GasStrategy
 */
export declare class GasStrategy extends Message<GasStrategy> {
    /**
     * @generated from field: double limit_inflation_factor = 1;
     */
    limitInflationFactor: number;
    /**
     * @generated from field: double price_inflation_factor = 2;
     */
    priceInflationFactor: number;
    /**
     * @generated from field: double percentile_threshold_for_1559_fee = 3;
     */
    percentileThresholdFor1559Fee: number;
    /**
     * @generated from field: optional double min_priority_fee_gwei = 4;
     */
    minPriorityFeeGwei?: number;
    /**
     * @generated from field: optional double max_priority_fee_gwei = 5;
     */
    maxPriorityFeeGwei?: number;
    /**
     * @generated from field: optional double base_fee_multiplier = 6;
     */
    baseFeeMultiplier?: number;
    /**
     * @generated from field: optional double base_fee_history_window = 7;
     */
    baseFeeHistoryWindow?: number;
    /**
     * @generated from field: optional double min_priority_fee_ratio_of_base_fee = 8;
     */
    minPriorityFeeRatioOfBaseFee?: number;
    /**
     * @generated from field: optional double threshold_to_inflate_last_block_base_fee = 9;
     */
    thresholdToInflateLastBlockBaseFee?: number;
    /**
     * @generated from field: optional double display_limit_inflation_factor = 10;
     */
    displayLimitInflationFactor?: number;
    constructor(data?: PartialMessage<GasStrategy>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GasStrategy";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GasStrategy;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GasStrategy;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GasStrategy;
    static equals(a: GasStrategy | PlainMessage<GasStrategy> | undefined, b: GasStrategy | PlainMessage<GasStrategy> | undefined): boolean;
}
/**
 * @generated from message trading.v1.QuoteRequest
 */
export declare class QuoteRequest extends Message<QuoteRequest> {
    /**
     * @generated from field: string swapper = 1;
     */
    swapper: string;
    /**
     * @generated from field: string amount = 2;
     */
    amount: string;
    /**
     * @generated from field: trading.v1.TradeType type = 3;
     */
    type: TradeType;
    /**
     * @generated from field: string token_in = 4;
     */
    tokenIn: string;
    /**
     * @generated from field: string token_out = 5;
     */
    tokenOut: string;
    /**
     * @generated from field: trading.v1.ChainId token_in_chain_id = 6;
     */
    tokenInChainId: ChainId;
    /**
     * @generated from field: trading.v1.ChainId token_out_chain_id = 7;
     */
    tokenOutChainId: ChainId;
    /**
     * @generated from field: repeated trading.v1.Protocols protocols = 8;
     */
    protocols: Protocols[];
    /**
     * @generated from field: trading.v1.RoutingPreference routing_preference = 9;
     */
    routingPreference: RoutingPreference;
    /**
     * @generated from field: trading.v1.SpreadOptimization spread_optimization = 10;
     */
    spreadOptimization: SpreadOptimization;
    /**
     * @generated from field: optional float slippage_tolerance = 11;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional trading.v1.AutoSlippage auto_slippage = 12;
     */
    autoSlippage?: AutoSlippage;
    /**
     * @generated from field: optional trading.v1.Urgency urgency = 13;
     */
    urgency?: Urgency;
    /**
     * @generated from field: repeated trading.v1.GasStrategy gas_strategies = 14;
     */
    gasStrategies: GasStrategy[];
    /**
     * @generated from field: optional trading.v1.PermitAmount permit_amount = 15;
     */
    permitAmount?: PermitAmount;
    /**
     * @generated from field: optional int32 portion_bips = 16;
     */
    portionBips?: number;
    /**
     * @generated from field: optional string portion_recipient = 17;
     */
    portionRecipient?: string;
    /**
     * @generated from field: bool generate_permit_as_transaction = 18;
     */
    generatePermitAsTransaction: boolean;
    /**
     * @generated from field: optional trading.v1.HooksOptions hooks_options = 19;
     */
    hooksOptions?: HooksOptions;
    constructor(data?: PartialMessage<QuoteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.QuoteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuoteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuoteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuoteRequest;
    static equals(a: QuoteRequest | PlainMessage<QuoteRequest> | undefined, b: QuoteRequest | PlainMessage<QuoteRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.QuoteResponse
 */
export declare class QuoteResponse extends Message<QuoteResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: trading.v1.SwapType routing = 2;
     */
    routing: SwapType;
    /**
     * @generated from oneof trading.v1.QuoteResponse.quote
     */
    quote: {
        /**
         * @generated from field: trading.v1.ClassicQuote classic_quote = 5;
         */
        value: ClassicQuote;
        case: "classicQuote";
    } | {
        /**
         * @generated from field: trading.v1.BridgeQuote bridge_quote = 6;
         */
        value: BridgeQuote;
        case: "bridgeQuote";
    } | {
        /**
         * @generated from field: trading.v1.DutchLimitQuote dutch_limit_quote = 7;
         */
        value: DutchLimitQuote;
        case: "dutchLimitQuote";
    } | {
        /**
         * @generated from field: trading.v1.DutchLimitV2Quote dutch_limit_v2_quote = 8;
         */
        value: DutchLimitV2Quote;
        case: "dutchLimitV2Quote";
    } | {
        /**
         * @generated from field: trading.v1.DutchLimitV3Quote dutch_limit_v3_quote = 9;
         */
        value: DutchLimitV3Quote;
        case: "dutchLimitV3Quote";
    } | {
        /**
         * @generated from field: trading.v1.WrapUnwrapQuote wrap_unwrap_quote = 10;
         */
        value: WrapUnwrapQuote;
        case: "wrapUnwrapQuote";
    } | {
        /**
         * @generated from field: trading.v1.PriorityQuote priority_quote = 11;
         */
        value: PriorityQuote;
        case: "priorityQuote";
    } | {
        /**
         * @generated from field: trading.v1.ChainedQuote chained_quote = 12;
         */
        value: ChainedQuote;
        case: "chainedQuote";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from oneof trading.v1.QuoteResponse.permit_data
     */
    permitData: {
        /**
         * @generated from field: trading.v1.PermitSingleData permit_single_data = 13;
         */
        value: PermitSingleData;
        case: "permitSingleData";
    } | {
        /**
         * @generated from field: trading.v1.PermitTransferFromData permit_transfer_from_data = 14;
         */
        value: PermitTransferFromData;
        case: "permitTransferFromData";
    } | {
        /**
         * @generated from field: trading.v1.DutchLimitPermitData dutch_limit_permit_data = 15;
         */
        value: DutchLimitPermitData;
        case: "dutchLimitPermitData";
    } | {
        /**
         * @generated from field: trading.v1.DutchLimitV2PermitData dutch_limit_v2_permit_data = 16;
         */
        value: DutchLimitV2PermitData;
        case: "dutchLimitV2PermitData";
    } | {
        /**
         * @generated from field: trading.v1.DutchLimitV3PermitData dutch_limit_v3_permit_data = 17;
         */
        value: DutchLimitV3PermitData;
        case: "dutchLimitV3PermitData";
    } | {
        /**
         * @generated from field: trading.v1.PriorityPermitData priority_permit_data = 18;
         */
        value: PriorityPermitData;
        case: "priorityPermitData";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional trading.v1.TransactionRequest permit_transaction = 19;
     */
    permitTransaction?: TransactionRequest;
    /**
     * @generated from field: optional string permit_gas_fee = 20;
     */
    permitGasFee?: string;
    constructor(data?: PartialMessage<QuoteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.QuoteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuoteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuoteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuoteResponse;
    static equals(a: QuoteResponse | PlainMessage<QuoteResponse> | undefined, b: QuoteResponse | PlainMessage<QuoteResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.ClassicInput
 */
export declare class ClassicInput extends Message<ClassicInput> {
    /**
     * @generated from field: string amount = 1;
     */
    amount: string;
    /**
     * @generated from field: string token = 2;
     */
    token: string;
    constructor(data?: PartialMessage<ClassicInput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.ClassicInput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClassicInput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClassicInput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClassicInput;
    static equals(a: ClassicInput | PlainMessage<ClassicInput> | undefined, b: ClassicInput | PlainMessage<ClassicInput> | undefined): boolean;
}
/**
 * @generated from message trading.v1.ClassicOutput
 */
export declare class ClassicOutput extends Message<ClassicOutput> {
    /**
     * @generated from field: string amount = 1;
     */
    amount: string;
    /**
     * @generated from field: string token = 2;
     */
    token: string;
    /**
     * @generated from field: string recipient = 3;
     */
    recipient: string;
    constructor(data?: PartialMessage<ClassicOutput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.ClassicOutput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClassicOutput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClassicOutput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClassicOutput;
    static equals(a: ClassicOutput | PlainMessage<ClassicOutput> | undefined, b: ClassicOutput | PlainMessage<ClassicOutput> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CandidatePoolInRoute
 */
export declare class CandidatePoolInRoute extends Message<CandidatePoolInRoute> {
    /**
     * @generated from oneof trading.v1.CandidatePoolInRoute.pool_in_route
     */
    poolInRoute: {
        /**
         * @generated from field: trading.v1.V2PoolInRoute v2_pool_in_route = 1;
         */
        value: V2PoolInRoute;
        case: "v2PoolInRoute";
    } | {
        /**
         * @generated from field: trading.v1.V3PoolInRoute v3_pool_in_route = 2;
         */
        value: V3PoolInRoute;
        case: "v3PoolInRoute";
    } | {
        /**
         * @generated from field: trading.v1.V4PoolInRoute v4_pool_in_route = 3;
         */
        value: V4PoolInRoute;
        case: "v4PoolInRoute";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<CandidatePoolInRoute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CandidatePoolInRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CandidatePoolInRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CandidatePoolInRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CandidatePoolInRoute;
    static equals(a: CandidatePoolInRoute | PlainMessage<CandidatePoolInRoute> | undefined, b: CandidatePoolInRoute | PlainMessage<CandidatePoolInRoute> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V2PoolInRoute
 */
export declare class V2PoolInRoute extends Message<V2PoolInRoute> {
    /**
     * @generated from field: trading.v1.PoolType type = 1;
     */
    type: PoolType;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: trading.v1.TokenInRoute token_in = 3;
     */
    tokenIn?: TokenInRoute;
    /**
     * @generated from field: trading.v1.TokenInRoute token_out = 4;
     */
    tokenOut?: TokenInRoute;
    /**
     * @generated from field: trading.v1.V2Reserve reserve0 = 5;
     */
    reserve0?: V2Reserve;
    /**
     * @generated from field: trading.v1.V2Reserve reserve1 = 6;
     */
    reserve1?: V2Reserve;
    /**
     * @generated from field: optional string amount_in = 7;
     */
    amountIn?: string;
    /**
     * @generated from field: optional string amount_out = 8;
     */
    amountOut?: string;
    constructor(data?: PartialMessage<V2PoolInRoute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V2PoolInRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2PoolInRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2PoolInRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2PoolInRoute;
    static equals(a: V2PoolInRoute | PlainMessage<V2PoolInRoute> | undefined, b: V2PoolInRoute | PlainMessage<V2PoolInRoute> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V3PoolInRoute
 */
export declare class V3PoolInRoute extends Message<V3PoolInRoute> {
    /**
     * @generated from field: trading.v1.PoolType type = 1;
     */
    type: PoolType;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: trading.v1.TokenInRoute token_in = 3;
     */
    tokenIn?: TokenInRoute;
    /**
     * @generated from field: trading.v1.TokenInRoute token_out = 4;
     */
    tokenOut?: TokenInRoute;
    /**
     * @generated from field: string sqrt_ratio_x96 = 5;
     */
    sqrtRatioX96: string;
    /**
     * @generated from field: string liquidity = 6;
     */
    liquidity: string;
    /**
     * @generated from field: string tick_current = 7;
     */
    tickCurrent: string;
    /**
     * @generated from field: string fee = 8;
     */
    fee: string;
    /**
     * @generated from field: optional string amount_in = 9;
     */
    amountIn?: string;
    /**
     * @generated from field: optional string amount_out = 10;
     */
    amountOut?: string;
    constructor(data?: PartialMessage<V3PoolInRoute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V3PoolInRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3PoolInRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3PoolInRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3PoolInRoute;
    static equals(a: V3PoolInRoute | PlainMessage<V3PoolInRoute> | undefined, b: V3PoolInRoute | PlainMessage<V3PoolInRoute> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V4PoolInRoute
 */
export declare class V4PoolInRoute extends Message<V4PoolInRoute> {
    /**
     * @generated from field: trading.v1.PoolType type = 1;
     */
    type: PoolType;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: trading.v1.TokenInRoute token_in = 3;
     */
    tokenIn?: TokenInRoute;
    /**
     * @generated from field: trading.v1.TokenInRoute token_out = 4;
     */
    tokenOut?: TokenInRoute;
    /**
     * @generated from field: string sqrt_ratio_x96 = 5;
     */
    sqrtRatioX96: string;
    /**
     * @generated from field: string liquidity = 6;
     */
    liquidity: string;
    /**
     * @generated from field: string tick_current = 7;
     */
    tickCurrent: string;
    /**
     * @generated from field: string fee = 8;
     */
    fee: string;
    /**
     * @generated from field: string tick_spacing = 9;
     */
    tickSpacing: string;
    /**
     * @generated from field: string hooks = 10;
     */
    hooks: string;
    /**
     * @generated from field: optional string amount_in = 11;
     */
    amountIn?: string;
    /**
     * @generated from field: optional string amount_out = 12;
     */
    amountOut?: string;
    constructor(data?: PartialMessage<V4PoolInRoute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V4PoolInRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4PoolInRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4PoolInRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4PoolInRoute;
    static equals(a: V4PoolInRoute | PlainMessage<V4PoolInRoute> | undefined, b: V4PoolInRoute | PlainMessage<V4PoolInRoute> | undefined): boolean;
}
/**
 * @generated from message trading.v1.TokenInRoute
 */
export declare class TokenInRoute extends Message<TokenInRoute> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 2;
     */
    chainId: ChainId;
    /**
     * @generated from field: string symbol = 3;
     */
    symbol: string;
    /**
     * @generated from field: string decimals = 4;
     */
    decimals: string;
    /**
     * @generated from field: optional string name = 5;
     */
    name?: string;
    /**
     * @generated from field: optional string buy_fee_bps = 6;
     */
    buyFeeBps?: string;
    /**
     * @generated from field: optional string sell_fee_bps = 7;
     */
    sellFeeBps?: string;
    constructor(data?: PartialMessage<TokenInRoute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.TokenInRoute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenInRoute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenInRoute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenInRoute;
    static equals(a: TokenInRoute | PlainMessage<TokenInRoute> | undefined, b: TokenInRoute | PlainMessage<TokenInRoute> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V2Reserve
 */
export declare class V2Reserve extends Message<V2Reserve> {
    /**
     * @generated from field: trading.v1.TokenInRoute token = 1;
     */
    token?: TokenInRoute;
    /**
     * @generated from field: string quotient = 2;
     */
    quotient: string;
    constructor(data?: PartialMessage<V2Reserve>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V2Reserve";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2Reserve;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2Reserve;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2Reserve;
    static equals(a: V2Reserve | PlainMessage<V2Reserve> | undefined, b: V2Reserve | PlainMessage<V2Reserve> | undefined): boolean;
}
/**
 * @generated from message trading.v1.AggregatedOutput
 */
export declare class AggregatedOutput extends Message<AggregatedOutput> {
    /**
     * @generated from field: string amount = 1;
     */
    amount: string;
    /**
     * @generated from field: string token = 2;
     */
    token: string;
    /**
     * @generated from field: string recipient = 3;
     */
    recipient: string;
    /**
     * @generated from field: int32 bps = 4;
     */
    bps: number;
    /**
     * @generated from field: optional string min_amount = 5;
     */
    minAmount?: string;
    constructor(data?: PartialMessage<AggregatedOutput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.AggregatedOutput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AggregatedOutput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AggregatedOutput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AggregatedOutput;
    static equals(a: AggregatedOutput | PlainMessage<AggregatedOutput> | undefined, b: AggregatedOutput | PlainMessage<AggregatedOutput> | undefined): boolean;
}
/**
 * @generated from message trading.v1.RouteList
 */
export declare class RouteList extends Message<RouteList> {
    /**
     * @generated from field: repeated trading.v1.CandidatePoolInRoute route = 1;
     */
    route: CandidatePoolInRoute[];
    constructor(data?: PartialMessage<RouteList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.RouteList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RouteList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RouteList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RouteList;
    static equals(a: RouteList | PlainMessage<RouteList> | undefined, b: RouteList | PlainMessage<RouteList> | undefined): boolean;
}
/**
 * @generated from message trading.v1.ClassicQuote
 */
export declare class ClassicQuote extends Message<ClassicQuote> {
    /**
     * @generated from field: trading.v1.ChainId chain_id = 1;
     */
    chainId: ChainId;
    /**
     * @generated from field: string swapper = 2;
     */
    swapper: string;
    /**
     * @generated from field: trading.v1.ClassicInput input = 3;
     */
    input?: ClassicInput;
    /**
     * @generated from field: trading.v1.ClassicOutput output = 4;
     */
    output?: ClassicOutput;
    /**
     * @generated from field: double slippage = 5;
     */
    slippage: number;
    /**
     * @generated from field: trading.v1.TradeType trade_type = 6;
     */
    tradeType: TradeType;
    /**
     * @generated from field: repeated trading.v1.RouteList route = 7;
     */
    route: RouteList[];
    /**
     * @generated from field: optional double price_impact = 8;
     */
    priceImpact?: number;
    /**
     * @generated from field: optional string gas_fee = 9;
     */
    gasFee?: string;
    /**
     * @generated from field: optional string gas_fee_usd = 10;
     */
    gasFeeUsd?: string;
    /**
     * @generated from field: optional string gas_fee_quote = 11;
     */
    gasFeeQuote?: string;
    /**
     * @generated from field: optional string gas_use_estimate = 12;
     */
    gasUseEstimate?: string;
    /**
     * @generated from field: optional string route_string = 13;
     */
    routeString?: string;
    /**
     * @generated from field: optional string block_number = 14;
     */
    blockNumber?: string;
    /**
     * @generated from field: optional string quote_id = 15;
     */
    quoteId?: string;
    /**
     * @generated from field: optional string gas_price = 16;
     */
    gasPrice?: string;
    /**
     * @generated from field: optional string max_fee_per_gas = 17;
     */
    maxFeePerGas?: string;
    /**
     * @generated from field: optional string max_priority_fee_per_gas = 18;
     */
    maxPriorityFeePerGas?: string;
    /**
     * @generated from field: repeated string tx_failure_reasons = 19;
     */
    txFailureReasons: string[];
    /**
     * @generated from field: repeated trading.v1.GasEstimate gas_estimates = 20;
     */
    gasEstimates: GasEstimate[];
    /**
     * @generated from field: repeated trading.v1.AggregatedOutput aggregated_outputs = 21;
     */
    aggregatedOutputs: AggregatedOutput[];
    /**
     * @generated from field: optional int32 portion_bips = 22;
     */
    portionBips?: number;
    /**
     * @generated from field: optional string portion_amount = 23;
     */
    portionAmount?: string;
    /**
     * @generated from field: optional string portion_recipient = 24;
     */
    portionRecipient?: string;
    constructor(data?: PartialMessage<ClassicQuote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.ClassicQuote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClassicQuote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClassicQuote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClassicQuote;
    static equals(a: ClassicQuote | PlainMessage<ClassicQuote> | undefined, b: ClassicQuote | PlainMessage<ClassicQuote> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GasEstimate
 */
export declare class GasEstimate extends Message<GasEstimate> {
    /**
     * @generated from oneof trading.v1.GasEstimate.gas_estimate
     */
    gasEstimate: {
        /**
         * @generated from field: trading.v1.GasEstimateLegacy legacy = 1;
         */
        value: GasEstimateLegacy;
        case: "legacy";
    } | {
        /**
         * @generated from field: trading.v1.GasEstimateEip1559 eip1559 = 2;
         */
        value: GasEstimateEip1559;
        case: "eip1559";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<GasEstimate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GasEstimate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GasEstimate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GasEstimate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GasEstimate;
    static equals(a: GasEstimate | PlainMessage<GasEstimate> | undefined, b: GasEstimate | PlainMessage<GasEstimate> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GasEstimateLegacy
 */
export declare class GasEstimateLegacy extends Message<GasEstimateLegacy> {
    /**
     * @generated from field: trading.v1.FeeType type = 1;
     */
    type: FeeType;
    /**
     * @generated from field: trading.v1.GasStrategy strategy = 2;
     */
    strategy?: GasStrategy;
    /**
     * @generated from field: string gas_limit = 3;
     */
    gasLimit: string;
    /**
     * @generated from field: string gas_fee = 4;
     */
    gasFee: string;
    /**
     * @generated from field: string gas_price = 5;
     */
    gasPrice: string;
    constructor(data?: PartialMessage<GasEstimateLegacy>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GasEstimateLegacy";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GasEstimateLegacy;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GasEstimateLegacy;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GasEstimateLegacy;
    static equals(a: GasEstimateLegacy | PlainMessage<GasEstimateLegacy> | undefined, b: GasEstimateLegacy | PlainMessage<GasEstimateLegacy> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GasEstimateEip1559
 */
export declare class GasEstimateEip1559 extends Message<GasEstimateEip1559> {
    /**
     * @generated from field: trading.v1.FeeType type = 1;
     */
    type: FeeType;
    /**
     * @generated from field: trading.v1.GasStrategy strategy = 2;
     */
    strategy?: GasStrategy;
    /**
     * @generated from field: string gas_limit = 3;
     */
    gasLimit: string;
    /**
     * @generated from field: string gas_fee = 4;
     */
    gasFee: string;
    /**
     * @generated from field: string max_priority_fee_per_gas = 5;
     */
    maxPriorityFeePerGas: string;
    /**
     * @generated from field: string max_fee_per_gas = 6;
     */
    maxFeePerGas: string;
    constructor(data?: PartialMessage<GasEstimateEip1559>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GasEstimateEip1559";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GasEstimateEip1559;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GasEstimateEip1559;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GasEstimateEip1559;
    static equals(a: GasEstimateEip1559 | PlainMessage<GasEstimateEip1559> | undefined, b: GasEstimateEip1559 | PlainMessage<GasEstimateEip1559> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PermitSingleData
 */
export declare class PermitSingleData extends Message<PermitSingleData> {
    /**
     * @generated from field: trading.v1.Domain domain = 1;
     */
    domain?: Domain;
    /**
     * @generated from field: map<string, trading.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: trading.v1.PermitSingle values = 3;
     */
    values?: PermitSingle;
    constructor(data?: PartialMessage<PermitSingleData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PermitSingleData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitSingleData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitSingleData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitSingleData;
    static equals(a: PermitSingleData | PlainMessage<PermitSingleData> | undefined, b: PermitSingleData | PlainMessage<PermitSingleData> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PermitSingle
 */
export declare class PermitSingle extends Message<PermitSingle> {
    /**
     * @generated from field: trading.v1.PermitDetails details = 1;
     */
    details?: PermitDetails;
    /**
     * @generated from field: string spender = 2;
     */
    spender: string;
    /**
     * @generated from field: string sig_deadline = 3;
     */
    sigDeadline: string;
    constructor(data?: PartialMessage<PermitSingle>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PermitSingle";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitSingle;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitSingle;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitSingle;
    static equals(a: PermitSingle | PlainMessage<PermitSingle> | undefined, b: PermitSingle | PlainMessage<PermitSingle> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PermitDetails
 */
export declare class PermitDetails extends Message<PermitDetails> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string amount = 2;
     */
    amount: string;
    /**
     * @generated from field: string expiration = 3;
     */
    expiration: string;
    /**
     * @generated from field: string nonce = 4;
     */
    nonce: string;
    constructor(data?: PartialMessage<PermitDetails>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PermitDetails";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitDetails;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitDetails;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitDetails;
    static equals(a: PermitDetails | PlainMessage<PermitDetails> | undefined, b: PermitDetails | PlainMessage<PermitDetails> | undefined): boolean;
}
/**
 * @generated from message trading.v1.TransactionRequest
 */
export declare class TransactionRequest extends Message<TransactionRequest> {
    /**
     * @generated from field: string to = 1;
     */
    to: string;
    /**
     * @generated from field: string from = 2;
     */
    from: string;
    /**
     * @generated from field: string data = 3;
     */
    data: string;
    /**
     * @generated from field: string value = 4;
     */
    value: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string gas_limit = 6;
     */
    gasLimit?: string;
    /**
     * @generated from field: optional string max_fee_per_gas = 7;
     */
    maxFeePerGas?: string;
    /**
     * @generated from field: optional string max_priority_fee_per_gas = 8;
     */
    maxPriorityFeePerGas?: string;
    /**
     * @generated from field: optional string gas_price = 9;
     */
    gasPrice?: string;
    constructor(data?: PartialMessage<TransactionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.TransactionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionRequest;
    static equals(a: TransactionRequest | PlainMessage<TransactionRequest> | undefined, b: TransactionRequest | PlainMessage<TransactionRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.TransactionRequest5792
 */
export declare class TransactionRequest5792 extends Message<TransactionRequest5792> {
    /**
     * @generated from field: string to = 1;
     */
    to: string;
    /**
     * @generated from field: string data = 2;
     */
    data: string;
    /**
     * @generated from field: string value = 3;
     */
    value: string;
    constructor(data?: PartialMessage<TransactionRequest5792>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.TransactionRequest5792";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionRequest5792;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionRequest5792;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionRequest5792;
    static equals(a: TransactionRequest5792 | PlainMessage<TransactionRequest5792> | undefined, b: TransactionRequest5792 | PlainMessage<TransactionRequest5792> | undefined): boolean;
}
/**
 * @generated from message trading.v1.WrapUnwrapQuote
 */
export declare class WrapUnwrapQuote extends Message<WrapUnwrapQuote> {
    /**
     * @generated from field: trading.v1.ChainId chain_id = 1;
     */
    chainId: ChainId;
    /**
     * @generated from field: trading.v1.ChainId destination_chain_id = 2;
     */
    destinationChainId: ChainId;
    /**
     * @generated from field: string swapper = 3;
     */
    swapper: string;
    /**
     * @generated from field: trading.v1.ClassicInput input = 4;
     */
    input?: ClassicInput;
    /**
     * @generated from field: trading.v1.ClassicOutput output = 5;
     */
    output?: ClassicOutput;
    /**
     * @generated from field: trading.v1.TradeType trade_type = 6;
     */
    tradeType: TradeType;
    /**
     * @generated from field: optional string gas_fee = 7;
     */
    gasFee?: string;
    /**
     * @generated from field: optional string gas_fee_usd = 8;
     */
    gasFeeUsd?: string;
    /**
     * @generated from field: optional string gas_fee_quote = 9;
     */
    gasFeeQuote?: string;
    /**
     * @generated from field: optional string gas_use_estimate = 10;
     */
    gasUseEstimate?: string;
    /**
     * @generated from field: optional string gas_price = 11;
     */
    gasPrice?: string;
    /**
     * @generated from field: optional string max_fee_per_gas = 12;
     */
    maxFeePerGas?: string;
    /**
     * @generated from field: optional string max_priority_fee_per_gas = 13;
     */
    maxPriorityFeePerGas?: string;
    constructor(data?: PartialMessage<WrapUnwrapQuote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.WrapUnwrapQuote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WrapUnwrapQuote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WrapUnwrapQuote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WrapUnwrapQuote;
    static equals(a: WrapUnwrapQuote | PlainMessage<WrapUnwrapQuote> | undefined, b: WrapUnwrapQuote | PlainMessage<WrapUnwrapQuote> | undefined): boolean;
}
/**
 * @generated from message trading.v1.SwapRequest
 */
export declare class SwapRequest extends Message<SwapRequest> {
    /**
     * @generated from field: optional string request_id = 1;
     */
    requestId?: string;
    /**
     * @generated from oneof trading.v1.SwapRequest.quote
     */
    quote: {
        /**
         * @generated from field: trading.v1.ClassicQuote classic_quote = 2;
         */
        value: ClassicQuote;
        case: "classicQuote";
    } | {
        /**
         * @generated from field: trading.v1.WrapUnwrapQuote wrap_unwrap_quote = 3;
         */
        value: WrapUnwrapQuote;
        case: "wrapUnwrapQuote";
    } | {
        /**
         * @generated from field: trading.v1.BridgeQuote bridge_quote = 4;
         */
        value: BridgeQuote;
        case: "bridgeQuote";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional string signature = 5;
     */
    signature?: string;
    /**
     * @generated from field: optional trading.v1.PermitSingleData permit_data = 6;
     */
    permitData?: PermitSingleData;
    /**
     * @generated from field: optional trading.v1.SwapSafetyMode safety_mode = 7;
     */
    safetyMode?: SwapSafetyMode;
    /**
     * @generated from field: optional int64 deadline = 8;
     */
    deadline?: bigint;
    /**
     * @generated from field: optional bool simulate_transaction = 9;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: optional bool refresh_gas_price = 10;
     */
    refreshGasPrice?: boolean;
    /**
     * @generated from field: optional trading.v1.Urgency urgency = 11;
     */
    urgency?: Urgency;
    /**
     * @generated from field: repeated trading.v1.GasStrategy gas_strategies = 12;
     */
    gasStrategies: GasStrategy[];
    /**
     * @generated from field: optional bool include_gas_info = 13;
     */
    includeGasInfo?: boolean;
    constructor(data?: PartialMessage<SwapRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.SwapRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapRequest;
    static equals(a: SwapRequest | PlainMessage<SwapRequest> | undefined, b: SwapRequest | PlainMessage<SwapRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.SwapResponse
 */
export declare class SwapResponse extends Message<SwapResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: trading.v1.TransactionRequest swap = 2;
     */
    swap?: TransactionRequest;
    /**
     * @generated from field: optional string gas_fee = 3;
     */
    gasFee?: string;
    /**
     * @generated from field: repeated trading.v1.TransactionFailureReason tx_failure_reasons = 4;
     */
    txFailureReasons: TransactionFailureReason[];
    /**
     * @generated from field: repeated trading.v1.GasEstimate gas_estimates = 5;
     */
    gasEstimates: GasEstimate[];
    /**
     * @generated from field: optional string signature = 6;
     */
    signature?: string;
    /**
     * @generated from field: optional string public_key_id = 7;
     */
    publicKeyId?: string;
    constructor(data?: PartialMessage<SwapResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.SwapResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapResponse;
    static equals(a: SwapResponse | PlainMessage<SwapResponse> | undefined, b: SwapResponse | PlainMessage<SwapResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.Swap7702Request
 */
export declare class Swap7702Request extends Message<Swap7702Request> {
    /**
     * @generated from oneof trading.v1.Swap7702Request.quote
     */
    quote: {
        /**
         * @generated from field: trading.v1.ClassicQuote classic_quote = 1;
         */
        value: ClassicQuote;
        case: "classicQuote";
    } | {
        /**
         * @generated from field: trading.v1.WrapUnwrapQuote wrap_unwrap_quote = 2;
         */
        value: WrapUnwrapQuote;
        case: "wrapUnwrapQuote";
    } | {
        /**
         * @generated from field: trading.v1.BridgeQuote bridge_quote = 3;
         */
        value: BridgeQuote;
        case: "bridgeQuote";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional trading.v1.PermitSingleData permit_data = 4;
     */
    permitData?: PermitSingleData;
    /**
     * @generated from field: string smart_contract_delegation_address = 5;
     */
    smartContractDelegationAddress: string;
    /**
     * @generated from field: bool include_gas_info = 6;
     */
    includeGasInfo: boolean;
    /**
     * @generated from field: bool simulate_transaction = 7;
     */
    simulateTransaction: boolean;
    /**
     * @generated from field: int64 deadline = 8;
     */
    deadline: bigint;
    /**
     * @generated from field: optional trading.v1.Urgency urgency = 9;
     */
    urgency?: Urgency;
    /**
     * @generated from field: repeated trading.v1.GasStrategy gas_strategies = 10;
     */
    gasStrategies: GasStrategy[];
    constructor(data?: PartialMessage<Swap7702Request>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.Swap7702Request";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Swap7702Request;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Swap7702Request;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Swap7702Request;
    static equals(a: Swap7702Request | PlainMessage<Swap7702Request> | undefined, b: Swap7702Request | PlainMessage<Swap7702Request> | undefined): boolean;
}
/**
 * @generated from message trading.v1.Swap7702Response
 */
export declare class Swap7702Response extends Message<Swap7702Response> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: trading.v1.TransactionRequest swap = 2;
     */
    swap?: TransactionRequest;
    /**
     * @generated from field: optional string gas_fee = 3;
     */
    gasFee?: string;
    /**
     * @generated from field: repeated trading.v1.GasEstimate gas_estimates = 4;
     */
    gasEstimates: GasEstimate[];
    constructor(data?: PartialMessage<Swap7702Response>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.Swap7702Response";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Swap7702Response;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Swap7702Response;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Swap7702Response;
    static equals(a: Swap7702Response | PlainMessage<Swap7702Response> | undefined, b: Swap7702Response | PlainMessage<Swap7702Response> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GetSwapsRequest
 */
export declare class GetSwapsRequest extends Message<GetSwapsRequest> {
    /**
     * @generated from field: repeated string tx_hashes = 1;
     */
    txHashes: string[];
    /**
     * @generated from field: trading.v1.ChainId chain_id = 2;
     */
    chainId: ChainId;
    constructor(data?: PartialMessage<GetSwapsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GetSwapsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSwapsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSwapsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSwapsRequest;
    static equals(a: GetSwapsRequest | PlainMessage<GetSwapsRequest> | undefined, b: GetSwapsRequest | PlainMessage<GetSwapsRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GetSwapsResponse
 */
export declare class GetSwapsResponse extends Message<GetSwapsResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: repeated trading.v1.SwapResult swaps = 2;
     */
    swaps: SwapResult[];
    constructor(data?: PartialMessage<GetSwapsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GetSwapsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSwapsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSwapsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSwapsResponse;
    static equals(a: GetSwapsResponse | PlainMessage<GetSwapsResponse> | undefined, b: GetSwapsResponse | PlainMessage<GetSwapsResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.SwapResult
 */
export declare class SwapResult extends Message<SwapResult> {
    /**
     * @generated from field: trading.v1.SwapResult.SwapStatus status = 1;
     */
    status: SwapResult_SwapStatus;
    /**
     * @generated from field: trading.v1.SwapType swap_type = 2;
     */
    swapType: SwapType;
    /**
     * @generated from field: string tx_hash = 3;
     */
    txHash: string;
    /**
     * @generated from field: optional string swap_id = 4;
     */
    swapId?: string;
    constructor(data?: PartialMessage<SwapResult>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.SwapResult";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SwapResult;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SwapResult;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SwapResult;
    static equals(a: SwapResult | PlainMessage<SwapResult> | undefined, b: SwapResult | PlainMessage<SwapResult> | undefined): boolean;
}
/**
 * @generated from enum trading.v1.SwapResult.SwapStatus
 */
export declare enum SwapResult_SwapStatus {
    /**
     * @generated from enum value: SWAP_STATUS_UNSPECIFIED = 0;
     */
    SWAP_STATUS_UNSPECIFIED = 0,
    /**
     * @generated from enum value: PENDING = 1;
     */
    PENDING = 1,
    /**
     * @generated from enum value: SUCCESS = 2;
     */
    SUCCESS = 2,
    /**
     * @generated from enum value: NOT_FOUND = 3;
     */
    NOT_FOUND = 3,
    /**
     * @generated from enum value: FAILED = 4;
     */
    FAILED = 4,
    /**
     * @generated from enum value: EXPIRED = 5;
     */
    EXPIRED = 5
}
/**
 * @generated from message trading.v1.Customer
 */
export declare class Customer extends Message<Customer> {
    /**
     * @generated from field: string hash = 1;
     */
    hash: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: bool isInternal = 3;
     */
    isInternal: boolean;
    /**
     * @generated from field: string createdAt = 4;
     */
    createdAt: string;
    /**
     * @generated from field: string modifiedAt = 5;
     */
    modifiedAt: string;
    /**
     * @generated from field: string usagePlanId = 6;
     */
    usagePlanId: string;
    /**
     * @generated from field: int32 id = 7;
     */
    id: number;
    /**
     * @generated from field: optional string universalRouterCustomerIdentifier = 8;
     */
    universalRouterCustomerIdentifier?: string;
    /**
     * @generated from field: string createdBy = 9;
     */
    createdBy: string;
    constructor(data?: PartialMessage<Customer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.Customer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Customer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Customer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Customer;
    static equals(a: Customer | PlainMessage<Customer> | undefined, b: Customer | PlainMessage<Customer> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CreateCustomerRequest
 */
export declare class CreateCustomerRequest extends Message<CreateCustomerRequest> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: bool isInternal = 2;
     */
    isInternal: boolean;
    /**
     * @generated from field: string createdBy = 3;
     */
    createdBy: string;
    constructor(data?: PartialMessage<CreateCustomerRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CreateCustomerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCustomerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCustomerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCustomerRequest;
    static equals(a: CreateCustomerRequest | PlainMessage<CreateCustomerRequest> | undefined, b: CreateCustomerRequest | PlainMessage<CreateCustomerRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CreateCustomerResponse
 */
export declare class CreateCustomerResponse extends Message<CreateCustomerResponse> {
    /**
     * @generated from field: trading.v1.Customer customer = 1;
     */
    customer?: Customer;
    constructor(data?: PartialMessage<CreateCustomerResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CreateCustomerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCustomerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCustomerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCustomerResponse;
    static equals(a: CreateCustomerResponse | PlainMessage<CreateCustomerResponse> | undefined, b: CreateCustomerResponse | PlainMessage<CreateCustomerResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GetCustomerRequest
 */
export declare class GetCustomerRequest extends Message<GetCustomerRequest> {
    /**
     * @generated from field: string hash = 1;
     */
    hash: string;
    constructor(data?: PartialMessage<GetCustomerRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GetCustomerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCustomerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCustomerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCustomerRequest;
    static equals(a: GetCustomerRequest | PlainMessage<GetCustomerRequest> | undefined, b: GetCustomerRequest | PlainMessage<GetCustomerRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GetCustomerResponse
 */
export declare class GetCustomerResponse extends Message<GetCustomerResponse> {
    /**
     * @generated from field: trading.v1.Customer customer = 1;
     */
    customer?: Customer;
    constructor(data?: PartialMessage<GetCustomerResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GetCustomerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCustomerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCustomerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCustomerResponse;
    static equals(a: GetCustomerResponse | PlainMessage<GetCustomerResponse> | undefined, b: GetCustomerResponse | PlainMessage<GetCustomerResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.ListCustomersRequest
 */
export declare class ListCustomersRequest extends Message<ListCustomersRequest> {
    /**
     * @generated from field: int32 page = 1;
     */
    page: number;
    /**
     * @generated from field: int32 limit = 2;
     */
    limit: number;
    constructor(data?: PartialMessage<ListCustomersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.ListCustomersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCustomersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCustomersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCustomersRequest;
    static equals(a: ListCustomersRequest | PlainMessage<ListCustomersRequest> | undefined, b: ListCustomersRequest | PlainMessage<ListCustomersRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.ListCustomersResponse
 */
export declare class ListCustomersResponse extends Message<ListCustomersResponse> {
    /**
     * @generated from field: repeated trading.v1.Customer customers = 1;
     */
    customers: Customer[];
    /**
     * @generated from field: int32 total = 2;
     */
    total: number;
    /**
     * @generated from field: int32 page = 3;
     */
    page: number;
    constructor(data?: PartialMessage<ListCustomersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.ListCustomersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListCustomersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListCustomersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListCustomersResponse;
    static equals(a: ListCustomersResponse | PlainMessage<ListCustomersResponse> | undefined, b: ListCustomersResponse | PlainMessage<ListCustomersResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.UpdateCustomerRequest
 */
export declare class UpdateCustomerRequest extends Message<UpdateCustomerRequest> {
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: bool isInternal = 3;
     */
    isInternal: boolean;
    constructor(data?: PartialMessage<UpdateCustomerRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.UpdateCustomerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateCustomerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateCustomerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateCustomerRequest;
    static equals(a: UpdateCustomerRequest | PlainMessage<UpdateCustomerRequest> | undefined, b: UpdateCustomerRequest | PlainMessage<UpdateCustomerRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.UpdateCustomerResponse
 */
export declare class UpdateCustomerResponse extends Message<UpdateCustomerResponse> {
    /**
     * @generated from field: trading.v1.Customer customer = 1;
     */
    customer?: Customer;
    constructor(data?: PartialMessage<UpdateCustomerResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.UpdateCustomerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateCustomerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateCustomerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateCustomerResponse;
    static equals(a: UpdateCustomerResponse | PlainMessage<UpdateCustomerResponse> | undefined, b: UpdateCustomerResponse | PlainMessage<UpdateCustomerResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DeleteCustomerRequest
 */
export declare class DeleteCustomerRequest extends Message<DeleteCustomerRequest> {
    /**
     * @generated from field: string hash = 1;
     */
    hash: string;
    constructor(data?: PartialMessage<DeleteCustomerRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DeleteCustomerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCustomerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCustomerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCustomerRequest;
    static equals(a: DeleteCustomerRequest | PlainMessage<DeleteCustomerRequest> | undefined, b: DeleteCustomerRequest | PlainMessage<DeleteCustomerRequest> | undefined): boolean;
}
/**
 * Status status = 1;
 *
 * @generated from message trading.v1.DeleteCustomerResponse
 */
export declare class DeleteCustomerResponse extends Message<DeleteCustomerResponse> {
    constructor(data?: PartialMessage<DeleteCustomerResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DeleteCustomerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteCustomerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteCustomerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteCustomerResponse;
    static equals(a: DeleteCustomerResponse | PlainMessage<DeleteCustomerResponse> | undefined, b: DeleteCustomerResponse | PlainMessage<DeleteCustomerResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GetOrdersRequest
 */
export declare class GetOrdersRequest extends Message<GetOrdersRequest> {
    /**
     * @generated from field: optional int32 limit = 1;
     */
    limit?: number;
    /**
     * @generated from field: optional trading.v1.OrderStatus order_status = 2;
     */
    orderStatus?: OrderStatus;
    /**
     * @generated from field: optional string order_id = 3;
     */
    orderId?: string;
    /**
     * @generated from field: optional string order_ids = 4;
     */
    orderIds?: string;
    /**
     * @generated from field: optional string swapper = 5;
     */
    swapper?: string;
    /**
     * @generated from field: optional trading.v1.SortFields sort_key = 6;
     */
    sortKey?: SortFields;
    /**
     * @generated from field: optional string sort = 7;
     */
    sort?: string;
    /**
     * @generated from field: optional string filler = 8;
     */
    filler?: string;
    /**
     * @generated from field: optional string cursor = 9;
     */
    cursor?: string;
    /**
     * @generated from field: optional trading.v1.ChainId chain_id = 10;
     */
    chainId?: ChainId;
    /**
     * @generated from field: optional bool desc = 11;
     */
    desc?: boolean;
    /**
     * @generated from field: optional trading.v1.OrderTypeQueryParam order_type = 12;
     */
    orderType?: OrderTypeQueryParam;
    constructor(data?: PartialMessage<GetOrdersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GetOrdersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrdersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrdersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrdersRequest;
    static equals(a: GetOrdersRequest | PlainMessage<GetOrdersRequest> | undefined, b: GetOrdersRequest | PlainMessage<GetOrdersRequest> | undefined): boolean;
}
/**
 * Top-level response message.
 *
 * @generated from message trading.v1.GetOrdersResponse
 */
export declare class GetOrdersResponse extends Message<GetOrdersResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: repeated trading.v1.UniswapXOrder orders = 2;
     */
    orders: UniswapXOrder[];
    /**
     * optional; will be empty if not set
     *
     * @generated from field: string cursor = 3;
     */
    cursor: string;
    constructor(data?: PartialMessage<GetOrdersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GetOrdersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrdersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrdersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrdersResponse;
    static equals(a: GetOrdersResponse | PlainMessage<GetOrdersResponse> | undefined, b: GetOrdersResponse | PlainMessage<GetOrdersResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.OrderRequest
 */
export declare class OrderRequest extends Message<OrderRequest> {
    /**
     * @generated from field: string signature = 1;
     */
    signature: string;
    /**
     * @generated from oneof trading.v1.OrderRequest.quote
     */
    quote: {
        /**
         * @generated from field: trading.v1.DutchLimitQuote dutch_limit_quote = 2;
         */
        value: DutchLimitQuote;
        case: "dutchLimitQuote";
    } | {
        /**
         * @generated from field: trading.v1.DutchLimitV2Quote dutch_limit_v2_quote = 3;
         */
        value: DutchLimitV2Quote;
        case: "dutchLimitV2Quote";
    } | {
        /**
         * @generated from field: trading.v1.DutchLimitV3Quote dutch_limit_v3_quote = 4;
         */
        value: DutchLimitV3Quote;
        case: "dutchLimitV3Quote";
    } | {
        /**
         * @generated from field: trading.v1.PriorityQuote priority_quote = 5;
         */
        value: PriorityQuote;
        case: "priorityQuote";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional trading.v1.OrderType routing = 6;
     */
    routing?: OrderType;
    constructor(data?: PartialMessage<OrderRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.OrderRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderRequest;
    static equals(a: OrderRequest | PlainMessage<OrderRequest> | undefined, b: OrderRequest | PlainMessage<OrderRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.OrderResponse
 */
export declare class OrderResponse extends Message<OrderResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: string order_id = 2;
     */
    orderId: string;
    /**
     * @generated from field: trading.v1.OrderStatus order_status = 3;
     */
    orderStatus: OrderStatus;
    constructor(data?: PartialMessage<OrderResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.OrderResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderResponse;
    static equals(a: OrderResponse | PlainMessage<OrderResponse> | undefined, b: OrderResponse | PlainMessage<OrderResponse> | undefined): boolean;
}
/**
 * Input types defined as a separate message with optional fields for all possible inputs.
 *
 * @generated from message trading.v1.UniswapXOrderInput
 */
export declare class UniswapXOrderInput extends Message<UniswapXOrderInput> {
    /**
     * Common field
     *
     * @generated from field: optional string token = 1;
     */
    token?: string;
    /**
     * DutchInput specific
     *
     * @generated from field: optional string start_amount = 2;
     */
    startAmount?: string;
    /**
     * @generated from field: optional string end_amount = 3;
     */
    endAmount?: string;
    /**
     * PriorityInput specific
     *
     * @generated from field: optional string amount = 4;
     */
    amount?: string;
    /**
     * @generated from field: optional string mps_per_priority_fee_wei = 5;
     */
    mpsPerPriorityFeeWei?: string;
    /**
     * V3DutchInput specific
     * start_amount is already included (field 2)
     *
     * @generated from field: optional trading.v1.NonlinearDutchDecay curve = 6;
     */
    curve?: NonlinearDutchDecay;
    /**
     * @generated from field: optional string max_amount = 7;
     */
    maxAmount?: string;
    /**
     * @generated from field: optional string adjustment_per_gwei_base_fee = 8;
     */
    adjustmentPerGweiBaseFee?: string;
    constructor(data?: PartialMessage<UniswapXOrderInput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.UniswapXOrderInput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UniswapXOrderInput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UniswapXOrderInput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UniswapXOrderInput;
    static equals(a: UniswapXOrderInput | PlainMessage<UniswapXOrderInput> | undefined, b: UniswapXOrderInput | PlainMessage<UniswapXOrderInput> | undefined): boolean;
}
/**
 * @generated from message trading.v1.UniswapXOrder
 */
export declare class UniswapXOrder extends Message<UniswapXOrder> {
    /**
     * @generated from field: optional string order_id = 1;
     */
    orderId?: string;
    /**
     * @generated from field: optional trading.v1.OrderType type = 2;
     */
    type?: OrderType;
    /**
     * @generated from field: optional string encoded_order = 3;
     */
    encodedOrder?: string;
    /**
     * @generated from field: optional string signature = 4;
     */
    signature?: string;
    /**
     * @generated from field: optional trading.v1.OrderStatus order_status = 5;
     */
    orderStatus?: OrderStatus;
    /**
     * @generated from field: optional trading.v1.ChainId chain_id = 6;
     */
    chainId?: ChainId;
    /**
     * The order input uses the unified input message.
     *
     * @generated from field: optional trading.v1.UniswapXOrderInput input = 7;
     */
    input?: UniswapXOrderInput;
    /**
     * The outputs: each order will have a repeated list of outputs.
     *
     * @generated from field: repeated trading.v1.UniswapXOrderOutput outputs = 10;
     */
    outputs: UniswapXOrderOutput[];
    /**
     * Optional fields.
     *
     * @generated from field: optional string swapper = 11;
     */
    swapper?: string;
    /**
     * @generated from field: optional int32 created_at = 12;
     */
    createdAt?: number;
    /**
     * @generated from field: repeated trading.v1.SettledAmount settled_amounts = 13;
     */
    settledAmounts: SettledAmount[];
    /**
     * @generated from field: optional string nonce = 14;
     */
    nonce?: string;
    /**
     * @generated from field: optional string filler = 15;
     */
    filler?: string;
    /**
     * @generated from field: optional string tx_hash = 16;
     */
    txHash?: string;
    /**
     * @generated from field: optional string quote_id = 17;
     */
    quoteId?: string;
    /**
     * Flattened cosigner data.
     *
     * @generated from field: optional trading.v1.CosignerData cosigner_data = 18;
     */
    cosignerData?: CosignerData;
    /**
     * @generated from field: optional string cosignature = 21;
     */
    cosignature?: string;
    /**
     * @generated from field: optional int64 auction_start_block = 22;
     */
    auctionStartBlock?: bigint;
    /**
     * @generated from field: optional string baseline_priority_fee_wei = 23;
     */
    baselinePriorityFeeWei?: string;
    constructor(data?: PartialMessage<UniswapXOrder>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.UniswapXOrder";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UniswapXOrder;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UniswapXOrder;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UniswapXOrder;
    static equals(a: UniswapXOrder | PlainMessage<UniswapXOrder> | undefined, b: UniswapXOrder | PlainMessage<UniswapXOrder> | undefined): boolean;
}
/**
 * Input types.
 *
 * @generated from message trading.v1.DutchInput
 */
export declare class DutchInput extends Message<DutchInput> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string start_amount = 2;
     */
    startAmount: string;
    /**
     * @generated from field: string end_amount = 3;
     */
    endAmount: string;
    constructor(data?: PartialMessage<DutchInput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchInput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchInput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchInput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchInput;
    static equals(a: DutchInput | PlainMessage<DutchInput> | undefined, b: DutchInput | PlainMessage<DutchInput> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PriorityInput
 */
export declare class PriorityInput extends Message<PriorityInput> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string amount = 2;
     */
    amount: string;
    /**
     * @generated from field: string mps_per_priority_fee_wei = 3;
     */
    mpsPerPriorityFeeWei: string;
    constructor(data?: PartialMessage<PriorityInput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PriorityInput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriorityInput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriorityInput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriorityInput;
    static equals(a: PriorityInput | PlainMessage<PriorityInput> | undefined, b: PriorityInput | PlainMessage<PriorityInput> | undefined): boolean;
}
/**
 * @generated from message trading.v1.NonlinearDutchDecay
 */
export declare class NonlinearDutchDecay extends Message<NonlinearDutchDecay> {
    /**
     * @generated from field: repeated int32 relative_blocks = 1;
     */
    relativeBlocks: number[];
    /**
     * @generated from field: repeated string relative_amounts = 2;
     */
    relativeAmounts: string[];
    constructor(data?: PartialMessage<NonlinearDutchDecay>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.NonlinearDutchDecay";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NonlinearDutchDecay;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NonlinearDutchDecay;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NonlinearDutchDecay;
    static equals(a: NonlinearDutchDecay | PlainMessage<NonlinearDutchDecay> | undefined, b: NonlinearDutchDecay | PlainMessage<NonlinearDutchDecay> | undefined): boolean;
}
/**
 * @generated from message trading.v1.WitnessNonlinearDutchDecay
 */
export declare class WitnessNonlinearDutchDecay extends Message<WitnessNonlinearDutchDecay> {
    /**
     * @generated from field: string relative_blocks = 1;
     */
    relativeBlocks: string;
    /**
     * @generated from field: repeated string relative_amounts = 2;
     */
    relativeAmounts: string[];
    constructor(data?: PartialMessage<WitnessNonlinearDutchDecay>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.WitnessNonlinearDutchDecay";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WitnessNonlinearDutchDecay;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WitnessNonlinearDutchDecay;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WitnessNonlinearDutchDecay;
    static equals(a: WitnessNonlinearDutchDecay | PlainMessage<WitnessNonlinearDutchDecay> | undefined, b: WitnessNonlinearDutchDecay | PlainMessage<WitnessNonlinearDutchDecay> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V3DutchInput
 */
export declare class V3DutchInput extends Message<V3DutchInput> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string start_amount = 2;
     */
    startAmount: string;
    /**
     * @generated from field: trading.v1.NonlinearDutchDecay curve = 3;
     */
    curve?: NonlinearDutchDecay;
    /**
     * @generated from field: string max_amount = 4;
     */
    maxAmount: string;
    /**
     * @generated from field: string adjustment_per_gwei_base_fee = 5;
     */
    adjustmentPerGweiBaseFee: string;
    constructor(data?: PartialMessage<V3DutchInput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V3DutchInput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3DutchInput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3DutchInput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3DutchInput;
    static equals(a: V3DutchInput | PlainMessage<V3DutchInput> | undefined, b: V3DutchInput | PlainMessage<V3DutchInput> | undefined): boolean;
}
/**
 * @generated from message trading.v1.WitnessV3DutchInput
 */
export declare class WitnessV3DutchInput extends Message<WitnessV3DutchInput> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string start_amount = 2;
     */
    startAmount: string;
    /**
     * @generated from field: trading.v1.WitnessNonlinearDutchDecay curve = 3;
     */
    curve?: WitnessNonlinearDutchDecay;
    /**
     * @generated from field: string max_amount = 4;
     */
    maxAmount: string;
    /**
     * @generated from field: string adjustment_per_gwei_base_fee = 5;
     */
    adjustmentPerGweiBaseFee: string;
    constructor(data?: PartialMessage<WitnessV3DutchInput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.WitnessV3DutchInput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WitnessV3DutchInput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WitnessV3DutchInput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WitnessV3DutchInput;
    static equals(a: WitnessV3DutchInput | PlainMessage<WitnessV3DutchInput> | undefined, b: WitnessV3DutchInput | PlainMessage<WitnessV3DutchInput> | undefined): boolean;
}
/**
 * Output types.
 *
 * @generated from message trading.v1.DutchOutput
 */
export declare class DutchOutput extends Message<DutchOutput> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string start_amount = 2;
     */
    startAmount: string;
    /**
     * @generated from field: string end_amount = 3;
     */
    endAmount: string;
    /**
     * @generated from field: string recipient = 4;
     */
    recipient: string;
    constructor(data?: PartialMessage<DutchOutput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchOutput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchOutput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchOutput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchOutput;
    static equals(a: DutchOutput | PlainMessage<DutchOutput> | undefined, b: DutchOutput | PlainMessage<DutchOutput> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PriorityOutput
 */
export declare class PriorityOutput extends Message<PriorityOutput> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string amount = 2;
     */
    amount: string;
    /**
     * @generated from field: string mps_per_priority_fee_wei = 3;
     */
    mpsPerPriorityFeeWei: string;
    /**
     * @generated from field: string recipient = 4;
     */
    recipient: string;
    constructor(data?: PartialMessage<PriorityOutput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PriorityOutput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriorityOutput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriorityOutput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriorityOutput;
    static equals(a: PriorityOutput | PlainMessage<PriorityOutput> | undefined, b: PriorityOutput | PlainMessage<PriorityOutput> | undefined): boolean;
}
/**
 * @generated from message trading.v1.V3DutchOutput
 */
export declare class V3DutchOutput extends Message<V3DutchOutput> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string start_amount = 2;
     */
    startAmount: string;
    /**
     * @generated from field: trading.v1.NonlinearDutchDecay curve = 3;
     */
    curve?: NonlinearDutchDecay;
    /**
     * @generated from field: string recipient = 4;
     */
    recipient: string;
    /**
     * @generated from field: string min_amount = 5;
     */
    minAmount: string;
    /**
     * @generated from field: string adjustment_per_gwei_base_fee = 6;
     */
    adjustmentPerGweiBaseFee: string;
    constructor(data?: PartialMessage<V3DutchOutput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.V3DutchOutput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3DutchOutput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3DutchOutput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3DutchOutput;
    static equals(a: V3DutchOutput | PlainMessage<V3DutchOutput> | undefined, b: V3DutchOutput | PlainMessage<V3DutchOutput> | undefined): boolean;
}
/**
 * @generated from message trading.v1.WitnessV3DutchOutput
 */
export declare class WitnessV3DutchOutput extends Message<WitnessV3DutchOutput> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string start_amount = 2;
     */
    startAmount: string;
    /**
     * @generated from field: trading.v1.WitnessNonlinearDutchDecay curve = 3;
     */
    curve?: WitnessNonlinearDutchDecay;
    /**
     * @generated from field: string recipient = 4;
     */
    recipient: string;
    /**
     * @generated from field: string min_amount = 5;
     */
    minAmount: string;
    /**
     * @generated from field: string adjustment_per_gwei_base_fee = 6;
     */
    adjustmentPerGweiBaseFee: string;
    constructor(data?: PartialMessage<WitnessV3DutchOutput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.WitnessV3DutchOutput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WitnessV3DutchOutput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WitnessV3DutchOutput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WitnessV3DutchOutput;
    static equals(a: WitnessV3DutchOutput | PlainMessage<WitnessV3DutchOutput> | undefined, b: WitnessV3DutchOutput | PlainMessage<WitnessV3DutchOutput> | undefined): boolean;
}
/**
 * Contains all possible fields for different order output types, marked as optional.
 *
 * @generated from message trading.v1.UniswapXOrderOutput
 */
export declare class UniswapXOrderOutput extends Message<UniswapXOrderOutput> {
    /**
     * Common fields
     *
     * @generated from field: optional string token = 1;
     */
    token?: string;
    /**
     * @generated from field: optional string recipient = 2;
     */
    recipient?: string;
    /**
     * Dutch/V3Dutch specific
     *
     * @generated from field: optional string start_amount = 3;
     */
    startAmount?: string;
    /**
     * Dutch specific
     *
     * @generated from field: optional string end_amount = 4;
     */
    endAmount?: string;
    /**
     * Priority specific
     *
     * @generated from field: optional string amount = 5;
     */
    amount?: string;
    /**
     * @generated from field: optional string mps_per_priority_fee_wei = 6;
     */
    mpsPerPriorityFeeWei?: string;
    /**
     * V3Dutch specific
     *
     * @generated from field: optional trading.v1.NonlinearDutchDecay curve = 7;
     */
    curve?: NonlinearDutchDecay;
    /**
     * @generated from field: optional string min_amount = 8;
     */
    minAmount?: string;
    /**
     * @generated from field: optional string adjustment_per_gwei_base_fee = 9;
     */
    adjustmentPerGweiBaseFee?: string;
    constructor(data?: PartialMessage<UniswapXOrderOutput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.UniswapXOrderOutput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UniswapXOrderOutput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UniswapXOrderOutput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UniswapXOrderOutput;
    static equals(a: UniswapXOrderOutput | PlainMessage<UniswapXOrderOutput> | undefined, b: UniswapXOrderOutput | PlainMessage<UniswapXOrderOutput> | undefined): boolean;
}
/**
 * @generated from message trading.v1.SettledAmount
 */
export declare class SettledAmount extends Message<SettledAmount> {
    /**
     * @generated from field: string token_out = 1;
     */
    tokenOut: string;
    /**
     * @generated from field: string amount_out = 2;
     */
    amountOut: string;
    /**
     * @generated from field: string token_in = 3;
     */
    tokenIn: string;
    /**
     * @generated from field: string amount_in = 4;
     */
    amountIn: string;
    constructor(data?: PartialMessage<SettledAmount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.SettledAmount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SettledAmount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SettledAmount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SettledAmount;
    static equals(a: SettledAmount | PlainMessage<SettledAmount> | undefined, b: SettledAmount | PlainMessage<SettledAmount> | undefined): boolean;
}
/**
 * Contains all possible fields for different cosigner data types, marked as optional.
 *
 * @generated from message trading.v1.CosignerData
 */
export declare class CosignerData extends Message<CosignerData> {
    /**
     * DutchV2 specific
     *
     * @generated from field: optional int64 decay_start_time = 1;
     */
    decayStartTime?: bigint;
    /**
     * @generated from field: optional int64 decay_end_time = 2;
     */
    decayEndTime?: bigint;
    /**
     * Common DutchV2/V3 fields
     *
     * @generated from field: optional string exclusive_filler = 3;
     */
    exclusiveFiller?: string;
    /**
     * @generated from field: optional string input_override = 4;
     */
    inputOverride?: string;
    /**
     * @generated from field: repeated string output_overrides = 5;
     */
    outputOverrides: string[];
    /**
     * Priority specific
     *
     * @generated from field: optional int64 auction_target_block = 6;
     */
    auctionTargetBlock?: bigint;
    /**
     * DutchV3 specific
     *
     * @generated from field: optional int64 decay_start_block = 7;
     */
    decayStartBlock?: bigint;
    constructor(data?: PartialMessage<CosignerData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CosignerData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CosignerData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CosignerData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CosignerData;
    static equals(a: CosignerData | PlainMessage<CosignerData> | undefined, b: CosignerData | PlainMessage<CosignerData> | undefined): boolean;
}
/**
 * @generated from message trading.v1.BridgeQuote
 */
export declare class BridgeQuote extends Message<BridgeQuote> {
    /**
     * @generated from field: trading.v1.ChainId chain_id = 1;
     */
    chainId: ChainId;
    /**
     * @generated from field: trading.v1.ChainId destination_chain_id = 2;
     */
    destinationChainId: ChainId;
    /**
     * @generated from field: string swapper = 3;
     */
    swapper: string;
    /**
     * @generated from field: string quote_id = 4;
     */
    quoteId: string;
    /**
     * @generated from field: trading.v1.ClassicInput input = 5;
     */
    input?: ClassicInput;
    /**
     * @generated from field: trading.v1.ClassicOutput output = 6;
     */
    output?: ClassicOutput;
    /**
     * @generated from field: trading.v1.TradeType trade_type = 7;
     */
    tradeType: TradeType;
    /**
     * @generated from field: int32 quote_timestamp = 8;
     */
    quoteTimestamp: number;
    /**
     * @generated from field: int32 estimated_fill_time_ms = 9;
     */
    estimatedFillTimeMs: number;
    /**
     * @generated from field: optional string gas_price = 10;
     */
    gasPrice?: string;
    /**
     * @generated from field: optional string max_fee_per_gas = 11;
     */
    maxFeePerGas?: string;
    /**
     * @generated from field: optional string max_priority_fee_per_gas = 12;
     */
    maxPriorityFeePerGas?: string;
    /**
     * @generated from field: optional string gas_fee = 13;
     */
    gasFee?: string;
    /**
     * @generated from field: optional string gas_use_estimate = 14;
     */
    gasUseEstimate?: string;
    /**
     * @generated from field: optional string exclusive_relayer = 15;
     */
    exclusiveRelayer?: string;
    /**
     * @generated from field: optional int32 exclusivity_deadline = 16;
     */
    exclusivityDeadline?: number;
    /**
     * @generated from field: optional int32 fill_deadline = 17;
     */
    fillDeadline?: number;
    /**
     * @generated from field: optional string gas_fee_usd = 18;
     */
    gasFeeUsd?: string;
    /**
     * @generated from field: repeated trading.v1.GasEstimate gas_estimates = 19;
     */
    gasEstimates: GasEstimate[];
    constructor(data?: PartialMessage<BridgeQuote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.BridgeQuote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BridgeQuote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BridgeQuote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BridgeQuote;
    static equals(a: BridgeQuote | PlainMessage<BridgeQuote> | undefined, b: BridgeQuote | PlainMessage<BridgeQuote> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitOrderInfo
 */
export declare class DutchLimitOrderInfo extends Message<DutchLimitOrderInfo> {
    /**
     * @generated from field: string reactor = 1;
     */
    reactor: string;
    /**
     * @generated from field: string swapper = 2;
     */
    swapper: string;
    /**
     * @generated from field: string nonce = 3;
     */
    nonce: string;
    /**
     * @generated from field: int32 deadline = 4;
     */
    deadline: number;
    /**
     * @generated from field: string additional_validation_contract = 5;
     */
    additionalValidationContract: string;
    /**
     * @generated from field: string additional_validation_data = 6;
     */
    additionalValidationData: string;
    /**
     * @generated from field: int32 decay_start_time = 7;
     */
    decayStartTime: number;
    /**
     * @generated from field: int32 decay_end_time = 8;
     */
    decayEndTime: number;
    /**
     * @generated from field: string exclusive_filler = 9;
     */
    exclusiveFiller: string;
    /**
     * @generated from field: string exclusivity_override_bps = 10;
     */
    exclusivityOverrideBps: string;
    /**
     * @generated from field: trading.v1.DutchInput input = 11;
     */
    input?: DutchInput;
    /**
     * @generated from field: repeated trading.v1.DutchOutput outputs = 12;
     */
    outputs: DutchOutput[];
    /**
     * @generated from field: trading.v1.ChainId chain_id = 13;
     */
    chainId: ChainId;
    constructor(data?: PartialMessage<DutchLimitOrderInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitOrderInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitOrderInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitOrderInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitOrderInfo;
    static equals(a: DutchLimitOrderInfo | PlainMessage<DutchLimitOrderInfo> | undefined, b: DutchLimitOrderInfo | PlainMessage<DutchLimitOrderInfo> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitQuote
 */
export declare class DutchLimitQuote extends Message<DutchLimitQuote> {
    /**
     * @generated from field: string order_id = 1;
     */
    orderId: string;
    /**
     * @generated from field: string encoded_order = 2;
     */
    encodedOrder: string;
    /**
     * @generated from field: trading.v1.DutchLimitOrderInfo order_info = 3;
     */
    orderInfo?: DutchLimitOrderInfo;
    /**
     * @generated from field: optional double slippage_tolerance = 4;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional string quote_id = 5;
     */
    quoteId?: string;
    /**
     * @generated from field: optional string classic_gas_use_estimate_usd = 6;
     */
    classicGasUseEstimateUsd?: string;
    /**
     * @generated from field: repeated trading.v1.AggregatedOutput aggregated_outputs = 7;
     */
    aggregatedOutputs: AggregatedOutput[];
    /**
     * @generated from field: optional int32 portion_bips = 8;
     */
    portionBips?: number;
    /**
     * @generated from field: optional string portion_amount = 9;
     */
    portionAmount?: string;
    /**
     * @generated from field: optional string portion_recipient = 10;
     */
    portionRecipient?: string;
    constructor(data?: PartialMessage<DutchLimitQuote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitQuote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitQuote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitQuote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitQuote;
    static equals(a: DutchLimitQuote | PlainMessage<DutchLimitQuote> | undefined, b: DutchLimitQuote | PlainMessage<DutchLimitQuote> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitV2OrderInfo
 */
export declare class DutchLimitV2OrderInfo extends Message<DutchLimitV2OrderInfo> {
    /**
     * @generated from field: string reactor = 1;
     */
    reactor: string;
    /**
     * @generated from field: string swapper = 2;
     */
    swapper: string;
    /**
     * @generated from field: string nonce = 3;
     */
    nonce: string;
    /**
     * @generated from field: int32 deadline = 4;
     */
    deadline: number;
    /**
     * @generated from field: string additional_validation_contract = 5;
     */
    additionalValidationContract: string;
    /**
     * @generated from field: string additional_validation_data = 6;
     */
    additionalValidationData: string;
    /**
     * @generated from field: string cosigner = 7;
     */
    cosigner: string;
    /**
     * @generated from field: trading.v1.DutchInput input = 8;
     */
    input?: DutchInput;
    /**
     * @generated from field: repeated trading.v1.DutchOutput outputs = 9;
     */
    outputs: DutchOutput[];
    /**
     * @generated from field: trading.v1.ChainId chain_id = 10;
     */
    chainId: ChainId;
    constructor(data?: PartialMessage<DutchLimitV2OrderInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitV2OrderInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitV2OrderInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitV2OrderInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitV2OrderInfo;
    static equals(a: DutchLimitV2OrderInfo | PlainMessage<DutchLimitV2OrderInfo> | undefined, b: DutchLimitV2OrderInfo | PlainMessage<DutchLimitV2OrderInfo> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitV2Quote
 */
export declare class DutchLimitV2Quote extends Message<DutchLimitV2Quote> {
    /**
     * @generated from field: string order_id = 1;
     */
    orderId: string;
    /**
     * @generated from field: string encoded_order = 2;
     */
    encodedOrder: string;
    /**
     * @generated from field: trading.v1.DutchLimitV2OrderInfo order_info = 3;
     */
    orderInfo?: DutchLimitV2OrderInfo;
    /**
     * @generated from field: double slippage_tolerance = 4;
     */
    slippageTolerance: number;
    /**
     * @generated from field: string quote_id = 5;
     */
    quoteId: string;
    /**
     * @generated from field: optional string classic_gas_use_estimate_usd = 6;
     */
    classicGasUseEstimateUsd?: string;
    /**
     * @generated from field: optional int32 deadline_buffer_secs = 7;
     */
    deadlineBufferSecs?: number;
    /**
     * @generated from field: repeated trading.v1.AggregatedOutput aggregated_outputs = 8;
     */
    aggregatedOutputs: AggregatedOutput[];
    /**
     * @generated from field: optional int32 portion_bips = 9;
     */
    portionBips?: number;
    /**
     * @generated from field: optional string portion_amount = 10;
     */
    portionAmount?: string;
    /**
     * @generated from field: optional string portion_recipient = 11;
     */
    portionRecipient?: string;
    constructor(data?: PartialMessage<DutchLimitV2Quote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitV2Quote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitV2Quote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitV2Quote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitV2Quote;
    static equals(a: DutchLimitV2Quote | PlainMessage<DutchLimitV2Quote> | undefined, b: DutchLimitV2Quote | PlainMessage<DutchLimitV2Quote> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitV3OrderInfo
 */
export declare class DutchLimitV3OrderInfo extends Message<DutchLimitV3OrderInfo> {
    /**
     * @generated from field: string reactor = 1;
     */
    reactor: string;
    /**
     * @generated from field: string swapper = 2;
     */
    swapper: string;
    /**
     * @generated from field: string nonce = 3;
     */
    nonce: string;
    /**
     * @generated from field: int32 deadline = 4;
     */
    deadline: number;
    /**
     * @generated from field: string additional_validation_contract = 5;
     */
    additionalValidationContract: string;
    /**
     * @generated from field: string additional_validation_data = 6;
     */
    additionalValidationData: string;
    /**
     * @generated from field: string cosigner = 7;
     */
    cosigner: string;
    /**
     * @generated from field: string starting_base_fee = 8;
     */
    startingBaseFee: string;
    /**
     * @generated from field: trading.v1.V3DutchInput input = 9;
     */
    input?: V3DutchInput;
    /**
     * @generated from field: repeated trading.v1.V3DutchOutput outputs = 10;
     */
    outputs: V3DutchOutput[];
    /**
     * @generated from field: trading.v1.ChainId chain_id = 11;
     */
    chainId: ChainId;
    constructor(data?: PartialMessage<DutchLimitV3OrderInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitV3OrderInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitV3OrderInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitV3OrderInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitV3OrderInfo;
    static equals(a: DutchLimitV3OrderInfo | PlainMessage<DutchLimitV3OrderInfo> | undefined, b: DutchLimitV3OrderInfo | PlainMessage<DutchLimitV3OrderInfo> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitV3Quote
 */
export declare class DutchLimitV3Quote extends Message<DutchLimitV3Quote> {
    /**
     * @generated from field: string order_id = 1;
     */
    orderId: string;
    /**
     * @generated from field: string encoded_order = 2;
     */
    encodedOrder: string;
    /**
     * @generated from field: trading.v1.DutchLimitV3OrderInfo order_info = 3;
     */
    orderInfo?: DutchLimitV3OrderInfo;
    /**
     * @generated from field: double slippage_tolerance = 4;
     */
    slippageTolerance: number;
    /**
     * @generated from field: string quote_id = 5;
     */
    quoteId: string;
    /**
     * @generated from field: optional string classic_gas_use_estimate_usd = 6;
     */
    classicGasUseEstimateUsd?: string;
    /**
     * @generated from field: optional int32 deadline_buffer_secs = 7;
     */
    deadlineBufferSecs?: number;
    /**
     * @generated from field: optional string expected_amount_in = 8;
     */
    expectedAmountIn?: string;
    /**
     * @generated from field: optional string expected_amount_out = 9;
     */
    expectedAmountOut?: string;
    /**
     * @generated from field: repeated trading.v1.AggregatedOutput aggregated_outputs = 10;
     */
    aggregatedOutputs: AggregatedOutput[];
    /**
     * @generated from field: optional int32 portion_bips = 11;
     */
    portionBips?: number;
    /**
     * @generated from field: optional string portion_amount = 12;
     */
    portionAmount?: string;
    /**
     * @generated from field: optional string portion_recipient = 13;
     */
    portionRecipient?: string;
    constructor(data?: PartialMessage<DutchLimitV3Quote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitV3Quote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitV3Quote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitV3Quote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitV3Quote;
    static equals(a: DutchLimitV3Quote | PlainMessage<DutchLimitV3Quote> | undefined, b: DutchLimitV3Quote | PlainMessage<DutchLimitV3Quote> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CheckApprovalRequest
 */
export declare class CheckApprovalRequest extends Message<CheckApprovalRequest> {
    /**
     * @generated from field: string wallet_address = 1;
     */
    walletAddress: string;
    /**
     * @generated from field: string token = 2;
     */
    token: string;
    /**
     * @generated from field: string amount = 3;
     */
    amount: string;
    /**
     * @generated from field: trading.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional trading.v1.Urgency urgency = 5;
     */
    urgency?: Urgency;
    /**
     * @generated from field: optional bool include_gas_info = 6;
     */
    includeGasInfo?: boolean;
    /**
     * @generated from field: optional string token_out = 7;
     */
    tokenOut?: string;
    /**
     * @generated from field: optional trading.v1.ChainId token_out_chain_id = 8;
     */
    tokenOutChainId?: ChainId;
    constructor(data?: PartialMessage<CheckApprovalRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CheckApprovalRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckApprovalRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckApprovalRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckApprovalRequest;
    static equals(a: CheckApprovalRequest | PlainMessage<CheckApprovalRequest> | undefined, b: CheckApprovalRequest | PlainMessage<CheckApprovalRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CheckApprovalResponse
 */
export declare class CheckApprovalResponse extends Message<CheckApprovalResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: trading.v1.TransactionRequest approval = 2;
     */
    approval?: TransactionRequest;
    /**
     * @generated from field: trading.v1.TransactionRequest cancel = 3;
     */
    cancel?: TransactionRequest;
    /**
     * @generated from field: optional string gas_fee = 4;
     */
    gasFee?: string;
    /**
     * @generated from field: optional string cancel_gas_fee = 5;
     */
    cancelGasFee?: string;
    /**
     * @generated from field: repeated trading.v1.GasEstimate gas_estimates = 6;
     */
    gasEstimates: GasEstimate[];
    constructor(data?: PartialMessage<CheckApprovalResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CheckApprovalResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckApprovalResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckApprovalResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckApprovalResponse;
    static equals(a: CheckApprovalResponse | PlainMessage<CheckApprovalResponse> | undefined, b: CheckApprovalResponse | PlainMessage<CheckApprovalResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PriorityOrderInfo
 */
export declare class PriorityOrderInfo extends Message<PriorityOrderInfo> {
    /**
     * @generated from field: string reactor = 1;
     */
    reactor: string;
    /**
     * @generated from field: string swapper = 2;
     */
    swapper: string;
    /**
     * @generated from field: string nonce = 3;
     */
    nonce: string;
    /**
     * @generated from field: int32 deadline = 4;
     */
    deadline: number;
    /**
     * @generated from field: string additional_validation_contract = 5;
     */
    additionalValidationContract: string;
    /**
     * @generated from field: string additional_validation_data = 6;
     */
    additionalValidationData: string;
    /**
     * @generated from field: string cosigner = 7;
     */
    cosigner: string;
    /**
     * @generated from field: string auction_start_block = 8;
     */
    auctionStartBlock: string;
    /**
     * @generated from field: string baseline_priority_fee_wei = 9;
     */
    baselinePriorityFeeWei: string;
    /**
     * @generated from field: trading.v1.PriorityInput input = 10;
     */
    input?: PriorityInput;
    /**
     * @generated from field: repeated trading.v1.PriorityOutput outputs = 11;
     */
    outputs: PriorityOutput[];
    /**
     * @generated from field: trading.v1.ChainId chain_id = 12;
     */
    chainId: ChainId;
    constructor(data?: PartialMessage<PriorityOrderInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PriorityOrderInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriorityOrderInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriorityOrderInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriorityOrderInfo;
    static equals(a: PriorityOrderInfo | PlainMessage<PriorityOrderInfo> | undefined, b: PriorityOrderInfo | PlainMessage<PriorityOrderInfo> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PriorityQuote
 */
export declare class PriorityQuote extends Message<PriorityQuote> {
    /**
     * @generated from field: string order_id = 1;
     */
    orderId: string;
    /**
     * @generated from field: string encoded_order = 2;
     */
    encodedOrder: string;
    /**
     * @generated from field: trading.v1.PriorityOrderInfo order_info = 3;
     */
    orderInfo?: PriorityOrderInfo;
    /**
     * @generated from field: string quote_id = 4;
     */
    quoteId: string;
    /**
     * @generated from field: optional double slippage_tolerance = 5;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline_buffer_secs = 6;
     */
    deadlineBufferSecs?: number;
    /**
     * @generated from field: optional string expected_amount_in = 7;
     */
    expectedAmountIn?: string;
    /**
     * @generated from field: optional string expected_amount_out = 8;
     */
    expectedAmountOut?: string;
    /**
     * @generated from field: optional string classic_gas_use_estimate_usd = 9;
     */
    classicGasUseEstimateUsd?: string;
    /**
     * @generated from field: repeated trading.v1.AggregatedOutput aggregated_outputs = 10;
     */
    aggregatedOutputs: AggregatedOutput[];
    /**
     * @generated from field: optional int32 portion_bips = 11;
     */
    portionBips?: number;
    /**
     * @generated from field: optional string portion_amount = 12;
     */
    portionAmount?: string;
    /**
     * @generated from field: optional string portion_recipient = 13;
     */
    portionRecipient?: string;
    constructor(data?: PartialMessage<PriorityQuote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PriorityQuote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriorityQuote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriorityQuote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriorityQuote;
    static equals(a: PriorityQuote | PlainMessage<PriorityQuote> | undefined, b: PriorityQuote | PlainMessage<PriorityQuote> | undefined): boolean;
}
/**
 * @generated from message trading.v1.TruncatedPlanStep
 */
export declare class TruncatedPlanStep extends Message<TruncatedPlanStep> {
    /**
     * @generated from field: trading.v1.PlanStepType step_type = 1;
     */
    stepType: PlanStepType;
    /**
     * @generated from field: optional string token_in = 2;
     */
    tokenIn?: string;
    /**
     * @generated from field: optional int32 token_in_chain_id = 3;
     */
    tokenInChainId?: number;
    /**
     * @generated from field: optional string token_out = 4;
     */
    tokenOut?: string;
    /**
     * @generated from field: optional int32 token_out_chain_id = 5;
     */
    tokenOutChainId?: number;
    constructor(data?: PartialMessage<TruncatedPlanStep>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.TruncatedPlanStep";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TruncatedPlanStep;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TruncatedPlanStep;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TruncatedPlanStep;
    static equals(a: TruncatedPlanStep | PlainMessage<TruncatedPlanStep> | undefined, b: TruncatedPlanStep | PlainMessage<TruncatedPlanStep> | undefined): boolean;
}
/**
 * @generated from message trading.v1.ChainedQuote
 */
export declare class ChainedQuote extends Message<ChainedQuote> {
    /**
     * @generated from field: trading.v1.ChainId token_in_chain_id = 1;
     */
    tokenInChainId: ChainId;
    /**
     * @generated from field: trading.v1.ChainId token_out_chain_id = 2;
     */
    tokenOutChainId: ChainId;
    /**
     * @generated from field: string swapper = 3;
     */
    swapper: string;
    /**
     * @generated from field: trading.v1.ClassicInput input = 4;
     */
    input?: ClassicInput;
    /**
     * @generated from field: trading.v1.ClassicOutput output = 5;
     */
    output?: ClassicOutput;
    /**
     * @generated from field: trading.v1.TradeType trade_type = 6;
     */
    tradeType: TradeType;
    /**
     * @generated from field: string quote_id = 7;
     */
    quoteId: string;
    /**
     * @generated from field: repeated trading.v1.GasEstimate gas_estimates = 8;
     */
    gasEstimates: GasEstimate[];
    /**
     * @generated from field: optional string gas_use_estimate = 9;
     */
    gasUseEstimate?: string;
    /**
     * @generated from field: optional string gas_fee_usd = 10;
     */
    gasFeeUsd?: string;
    /**
     * @generated from field: optional string gas_fee_quote = 11;
     */
    gasFeeQuote?: string;
    /**
     * @generated from field: optional string gas_fee = 12;
     */
    gasFee?: string;
    /**
     * @generated from field: optional int32 time_estimate_ms = 13;
     */
    timeEstimateMs?: number;
    /**
     * @generated from field: repeated trading.v1.Protocols protocols = 14;
     */
    protocols: Protocols[];
    /**
     * @generated from field: optional trading.v1.HooksOptions hooks_options = 15;
     */
    hooksOptions?: HooksOptions;
    /**
     * @generated from field: repeated trading.v1.TruncatedPlanStep steps = 16;
     */
    steps: TruncatedPlanStep[];
    constructor(data?: PartialMessage<ChainedQuote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.ChainedQuote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainedQuote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainedQuote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainedQuote;
    static equals(a: ChainedQuote | PlainMessage<ChainedQuote> | undefined, b: ChainedQuote | PlainMessage<ChainedQuote> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PermitTransferFromData
 */
export declare class PermitTransferFromData extends Message<PermitTransferFromData> {
    /**
     * @generated from field: trading.v1.Domain domain = 1;
     */
    domain?: Domain;
    /**
     * @generated from field: map<string, trading.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: trading.v1.PermitTransferFrom values = 3;
     */
    values?: PermitTransferFrom;
    constructor(data?: PartialMessage<PermitTransferFromData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PermitTransferFromData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitTransferFromData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitTransferFromData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitTransferFromData;
    static equals(a: PermitTransferFromData | PlainMessage<PermitTransferFromData> | undefined, b: PermitTransferFromData | PlainMessage<PermitTransferFromData> | undefined): boolean;
}
/**
 * @generated from message trading.v1.TypeFieldArray
 */
export declare class TypeFieldArray extends Message<TypeFieldArray> {
    /**
     * @generated from field: repeated trading.v1.TypeField fields = 1;
     */
    fields: TypeField[];
    constructor(data?: PartialMessage<TypeFieldArray>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.TypeFieldArray";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TypeFieldArray;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TypeFieldArray;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TypeFieldArray;
    static equals(a: TypeFieldArray | PlainMessage<TypeFieldArray> | undefined, b: TypeFieldArray | PlainMessage<TypeFieldArray> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PermitTransferFrom
 */
export declare class PermitTransferFrom extends Message<PermitTransferFrom> {
    /**
     * @generated from field: trading.v1.TokenPermissions permitted = 1;
     */
    permitted?: TokenPermissions;
    /**
     * @generated from field: string spender = 2;
     */
    spender: string;
    /**
     * @generated from field: string nonce = 3;
     */
    nonce: string;
    /**
     * @generated from field: string deadline = 4;
     */
    deadline: string;
    constructor(data?: PartialMessage<PermitTransferFrom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PermitTransferFrom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitTransferFrom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitTransferFrom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitTransferFrom;
    static equals(a: PermitTransferFrom | PlainMessage<PermitTransferFrom> | undefined, b: PermitTransferFrom | PlainMessage<PermitTransferFrom> | undefined): boolean;
}
/**
 * @generated from message trading.v1.TokenPermissions
 */
export declare class TokenPermissions extends Message<TokenPermissions> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string amount = 2;
     */
    amount: string;
    constructor(data?: PartialMessage<TokenPermissions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.TokenPermissions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenPermissions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenPermissions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenPermissions;
    static equals(a: TokenPermissions | PlainMessage<TokenPermissions> | undefined, b: TokenPermissions | PlainMessage<TokenPermissions> | undefined): boolean;
}
/**
 * @generated from message trading.v1.Domain
 */
export declare class Domain extends Message<Domain> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: optional trading.v1.ChainId chain_id = 2;
     */
    chainId?: ChainId;
    /**
     * @generated from field: optional string verifying_contract = 3;
     */
    verifyingContract?: string;
    /**
     * @generated from field: optional string version = 4;
     */
    version?: string;
    /**
     * @generated from field: optional string salt = 5;
     */
    salt?: string;
    constructor(data?: PartialMessage<Domain>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.Domain";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Domain;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Domain;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Domain;
    static equals(a: Domain | PlainMessage<Domain> | undefined, b: Domain | PlainMessage<Domain> | undefined): boolean;
}
/**
 * @generated from message trading.v1.TypeField
 */
export declare class TypeField extends Message<TypeField> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string type = 2;
     */
    type: string;
    constructor(data?: PartialMessage<TypeField>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.TypeField";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TypeField;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TypeField;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TypeField;
    static equals(a: TypeField | PlainMessage<TypeField> | undefined, b: TypeField | PlainMessage<TypeField> | undefined): boolean;
}
/**
 * @generated from message trading.v1.OrderInfo
 */
export declare class OrderInfo extends Message<OrderInfo> {
    /**
     * @generated from field: string reactor = 1;
     */
    reactor: string;
    /**
     * @generated from field: string swapper = 2;
     */
    swapper: string;
    /**
     * @generated from field: string nonce = 3;
     */
    nonce: string;
    /**
     * @generated from field: int32 deadline = 4;
     */
    deadline: number;
    /**
     * @generated from field: string additional_validation_contract = 5;
     */
    additionalValidationContract: string;
    /**
     * @generated from field: string additional_validation_data = 6;
     */
    additionalValidationData: string;
    constructor(data?: PartialMessage<OrderInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.OrderInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderInfo;
    static equals(a: OrderInfo | PlainMessage<OrderInfo> | undefined, b: OrderInfo | PlainMessage<OrderInfo> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitWitness
 */
export declare class DutchLimitWitness extends Message<DutchLimitWitness> {
    /**
     * @generated from field: trading.v1.OrderInfo info = 1;
     */
    info?: OrderInfo;
    /**
     * @generated from field: string exclusive_filler = 2;
     */
    exclusiveFiller: string;
    /**
     * @generated from field: string exclusivity_override_bps = 3;
     */
    exclusivityOverrideBps: string;
    /**
     * @generated from field: string input_token = 4;
     */
    inputToken: string;
    /**
     * @generated from field: string input_start_amount = 5;
     */
    inputStartAmount: string;
    /**
     * @generated from field: string input_end_amount = 6;
     */
    inputEndAmount: string;
    /**
     * @generated from field: repeated trading.v1.DutchOutput outputs = 7;
     */
    outputs: DutchOutput[];
    /**
     * @generated from field: int32 decay_start_time = 8;
     */
    decayStartTime: number;
    /**
     * @generated from field: int32 decay_end_time = 9;
     */
    decayEndTime: number;
    constructor(data?: PartialMessage<DutchLimitWitness>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitWitness";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitWitness;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitWitness;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitWitness;
    static equals(a: DutchLimitWitness | PlainMessage<DutchLimitWitness> | undefined, b: DutchLimitWitness | PlainMessage<DutchLimitWitness> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitV2Witness
 */
export declare class DutchLimitV2Witness extends Message<DutchLimitV2Witness> {
    /**
     * @generated from field: trading.v1.OrderInfo info = 1;
     */
    info?: OrderInfo;
    /**
     * @generated from field: string cosigner = 2;
     */
    cosigner: string;
    /**
     * @generated from field: string base_input_token = 3;
     */
    baseInputToken: string;
    /**
     * @generated from field: string base_input_start_amount = 4;
     */
    baseInputStartAmount: string;
    /**
     * @generated from field: string base_input_end_amount = 5;
     */
    baseInputEndAmount: string;
    /**
     * @generated from field: repeated trading.v1.DutchOutput base_outputs = 6;
     */
    baseOutputs: DutchOutput[];
    constructor(data?: PartialMessage<DutchLimitV2Witness>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitV2Witness";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitV2Witness;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitV2Witness;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitV2Witness;
    static equals(a: DutchLimitV2Witness | PlainMessage<DutchLimitV2Witness> | undefined, b: DutchLimitV2Witness | PlainMessage<DutchLimitV2Witness> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitV3Witness
 */
export declare class DutchLimitV3Witness extends Message<DutchLimitV3Witness> {
    /**
     * @generated from field: trading.v1.OrderInfo info = 1;
     */
    info?: OrderInfo;
    /**
     * @generated from field: string cosigner = 2;
     */
    cosigner: string;
    /**
     * @generated from field: string starting_base_fee = 3;
     */
    startingBaseFee: string;
    /**
     * @generated from field: trading.v1.WitnessV3DutchInput base_input = 4;
     */
    baseInput?: WitnessV3DutchInput;
    /**
     * @generated from field: repeated trading.v1.WitnessV3DutchOutput base_outputs = 5;
     */
    baseOutputs: WitnessV3DutchOutput[];
    constructor(data?: PartialMessage<DutchLimitV3Witness>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitV3Witness";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitV3Witness;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitV3Witness;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitV3Witness;
    static equals(a: DutchLimitV3Witness | PlainMessage<DutchLimitV3Witness> | undefined, b: DutchLimitV3Witness | PlainMessage<DutchLimitV3Witness> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PriorityWitness
 */
export declare class PriorityWitness extends Message<PriorityWitness> {
    /**
     * @generated from field: trading.v1.OrderInfo info = 1;
     */
    info?: OrderInfo;
    /**
     * @generated from field: string cosigner = 2;
     */
    cosigner: string;
    /**
     * @generated from field: string auction_start_block = 3;
     */
    auctionStartBlock: string;
    /**
     * @generated from field: string baseline_priority_fee_wei = 4;
     */
    baselinePriorityFeeWei: string;
    /**
     * @generated from field: trading.v1.PriorityInput input = 5;
     */
    input?: PriorityInput;
    /**
     * @generated from field: repeated trading.v1.PriorityOutput outputs = 6;
     */
    outputs: PriorityOutput[];
    constructor(data?: PartialMessage<PriorityWitness>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PriorityWitness";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriorityWitness;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriorityWitness;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriorityWitness;
    static equals(a: PriorityWitness | PlainMessage<PriorityWitness> | undefined, b: PriorityWitness | PlainMessage<PriorityWitness> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitPermitValues
 */
export declare class DutchLimitPermitValues extends Message<DutchLimitPermitValues> {
    /**
     * @generated from field: trading.v1.TokenPermissions permitted = 1;
     */
    permitted?: TokenPermissions;
    /**
     * @generated from field: string spender = 2;
     */
    spender: string;
    /**
     * @generated from field: string nonce = 3;
     */
    nonce: string;
    /**
     * @generated from field: string deadline = 4;
     */
    deadline: string;
    /**
     * @generated from field: trading.v1.DutchLimitWitness witness = 5;
     */
    witness?: DutchLimitWitness;
    constructor(data?: PartialMessage<DutchLimitPermitValues>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitPermitValues";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitPermitValues;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitPermitValues;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitPermitValues;
    static equals(a: DutchLimitPermitValues | PlainMessage<DutchLimitPermitValues> | undefined, b: DutchLimitPermitValues | PlainMessage<DutchLimitPermitValues> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitV2PermitValues
 */
export declare class DutchLimitV2PermitValues extends Message<DutchLimitV2PermitValues> {
    /**
     * @generated from field: trading.v1.TokenPermissions permitted = 1;
     */
    permitted?: TokenPermissions;
    /**
     * @generated from field: string spender = 2;
     */
    spender: string;
    /**
     * @generated from field: string nonce = 3;
     */
    nonce: string;
    /**
     * @generated from field: string deadline = 4;
     */
    deadline: string;
    /**
     * @generated from field: trading.v1.DutchLimitV2Witness witness = 5;
     */
    witness?: DutchLimitV2Witness;
    constructor(data?: PartialMessage<DutchLimitV2PermitValues>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitV2PermitValues";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitV2PermitValues;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitV2PermitValues;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitV2PermitValues;
    static equals(a: DutchLimitV2PermitValues | PlainMessage<DutchLimitV2PermitValues> | undefined, b: DutchLimitV2PermitValues | PlainMessage<DutchLimitV2PermitValues> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitV3PermitValues
 */
export declare class DutchLimitV3PermitValues extends Message<DutchLimitV3PermitValues> {
    /**
     * @generated from field: trading.v1.TokenPermissions permitted = 1;
     */
    permitted?: TokenPermissions;
    /**
     * @generated from field: string spender = 2;
     */
    spender: string;
    /**
     * @generated from field: string nonce = 3;
     */
    nonce: string;
    /**
     * @generated from field: string deadline = 4;
     */
    deadline: string;
    /**
     * @generated from field: trading.v1.DutchLimitV3Witness witness = 5;
     */
    witness?: DutchLimitV3Witness;
    constructor(data?: PartialMessage<DutchLimitV3PermitValues>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitV3PermitValues";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitV3PermitValues;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitV3PermitValues;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitV3PermitValues;
    static equals(a: DutchLimitV3PermitValues | PlainMessage<DutchLimitV3PermitValues> | undefined, b: DutchLimitV3PermitValues | PlainMessage<DutchLimitV3PermitValues> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PriorityPermitValues
 */
export declare class PriorityPermitValues extends Message<PriorityPermitValues> {
    /**
     * @generated from field: trading.v1.TokenPermissions permitted = 1;
     */
    permitted?: TokenPermissions;
    /**
     * @generated from field: string spender = 2;
     */
    spender: string;
    /**
     * @generated from field: string nonce = 3;
     */
    nonce: string;
    /**
     * @generated from field: string deadline = 4;
     */
    deadline: string;
    /**
     * @generated from field: trading.v1.PriorityWitness witness = 5;
     */
    witness?: PriorityWitness;
    constructor(data?: PartialMessage<PriorityPermitValues>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PriorityPermitValues";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriorityPermitValues;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriorityPermitValues;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriorityPermitValues;
    static equals(a: PriorityPermitValues | PlainMessage<PriorityPermitValues> | undefined, b: PriorityPermitValues | PlainMessage<PriorityPermitValues> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitPermitData
 */
export declare class DutchLimitPermitData extends Message<DutchLimitPermitData> {
    /**
     * @generated from field: trading.v1.Domain domain = 1;
     */
    domain?: Domain;
    /**
     * @generated from field: map<string, trading.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: trading.v1.DutchLimitPermitValues values = 3;
     */
    values?: DutchLimitPermitValues;
    constructor(data?: PartialMessage<DutchLimitPermitData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitPermitData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitPermitData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitPermitData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitPermitData;
    static equals(a: DutchLimitPermitData | PlainMessage<DutchLimitPermitData> | undefined, b: DutchLimitPermitData | PlainMessage<DutchLimitPermitData> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitV2PermitData
 */
export declare class DutchLimitV2PermitData extends Message<DutchLimitV2PermitData> {
    /**
     * @generated from field: trading.v1.Domain domain = 1;
     */
    domain?: Domain;
    /**
     * @generated from field: map<string, trading.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: trading.v1.DutchLimitV2PermitValues values = 3;
     */
    values?: DutchLimitV2PermitValues;
    constructor(data?: PartialMessage<DutchLimitV2PermitData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitV2PermitData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitV2PermitData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitV2PermitData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitV2PermitData;
    static equals(a: DutchLimitV2PermitData | PlainMessage<DutchLimitV2PermitData> | undefined, b: DutchLimitV2PermitData | PlainMessage<DutchLimitV2PermitData> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DutchLimitV3PermitData
 */
export declare class DutchLimitV3PermitData extends Message<DutchLimitV3PermitData> {
    /**
     * @generated from field: trading.v1.Domain domain = 1;
     */
    domain?: Domain;
    /**
     * @generated from field: map<string, trading.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: trading.v1.DutchLimitV3PermitValues values = 3;
     */
    values?: DutchLimitV3PermitValues;
    constructor(data?: PartialMessage<DutchLimitV3PermitData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DutchLimitV3PermitData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DutchLimitV3PermitData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DutchLimitV3PermitData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DutchLimitV3PermitData;
    static equals(a: DutchLimitV3PermitData | PlainMessage<DutchLimitV3PermitData> | undefined, b: DutchLimitV3PermitData | PlainMessage<DutchLimitV3PermitData> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PriorityPermitData
 */
export declare class PriorityPermitData extends Message<PriorityPermitData> {
    /**
     * @generated from field: trading.v1.Domain domain = 1;
     */
    domain?: Domain;
    /**
     * @generated from field: map<string, trading.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: trading.v1.PriorityPermitValues values = 3;
     */
    values?: PriorityPermitValues;
    constructor(data?: PartialMessage<PriorityPermitData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PriorityPermitData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriorityPermitData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriorityPermitData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriorityPermitData;
    static equals(a: PriorityPermitData | PlainMessage<PriorityPermitData> | undefined, b: PriorityPermitData | PlainMessage<PriorityPermitData> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CheckWalletDelegationRequest
 */
export declare class CheckWalletDelegationRequest extends Message<CheckWalletDelegationRequest> {
    /**
     * @generated from field: repeated string wallet_addresses = 1;
     */
    walletAddresses: string[];
    /**
     * @generated from field: repeated trading.v1.ChainId chain_ids = 2;
     */
    chainIds: ChainId[];
    constructor(data?: PartialMessage<CheckWalletDelegationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CheckWalletDelegationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckWalletDelegationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckWalletDelegationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckWalletDelegationRequest;
    static equals(a: CheckWalletDelegationRequest | PlainMessage<CheckWalletDelegationRequest> | undefined, b: CheckWalletDelegationRequest | PlainMessage<CheckWalletDelegationRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CheckWalletDelegationResponse
 */
export declare class CheckWalletDelegationResponse extends Message<CheckWalletDelegationResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: map<string, trading.v1.WalletDelegationMap> delegation_details = 2;
     */
    delegationDetails: {
        [key: string]: WalletDelegationMap;
    };
    constructor(data?: PartialMessage<CheckWalletDelegationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CheckWalletDelegationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckWalletDelegationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckWalletDelegationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckWalletDelegationResponse;
    static equals(a: CheckWalletDelegationResponse | PlainMessage<CheckWalletDelegationResponse> | undefined, b: CheckWalletDelegationResponse | PlainMessage<CheckWalletDelegationResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.WalletDelegationMap
 */
export declare class WalletDelegationMap extends Message<WalletDelegationMap> {
    /**
     * @generated from field: map<int32, trading.v1.DelegationDetails> chains = 1;
     */
    chains: {
        [key: number]: DelegationDetails;
    };
    constructor(data?: PartialMessage<WalletDelegationMap>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.WalletDelegationMap";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WalletDelegationMap;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WalletDelegationMap;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WalletDelegationMap;
    static equals(a: WalletDelegationMap | PlainMessage<WalletDelegationMap> | undefined, b: WalletDelegationMap | PlainMessage<WalletDelegationMap> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DelegationDetails
 */
export declare class DelegationDetails extends Message<DelegationDetails> {
    /**
     * @generated from field: bool is_wallet_delegated_to_uniswap = 1;
     */
    isWalletDelegatedToUniswap: boolean;
    /**
     * @generated from field: optional string current_delegation_address = 2;
     */
    currentDelegationAddress?: string;
    /**
     * @generated from field: optional string latest_delegation_address = 3;
     */
    latestDelegationAddress?: string;
    constructor(data?: PartialMessage<DelegationDetails>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DelegationDetails";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DelegationDetails;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DelegationDetails;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DelegationDetails;
    static equals(a: DelegationDetails | PlainMessage<DelegationDetails> | undefined, b: DelegationDetails | PlainMessage<DelegationDetails> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PlanStep
 */
export declare class PlanStep extends Message<PlanStep> {
    /**
     * @generated from field: string step_index = 1;
     */
    stepIndex: string;
    /**
     * @generated from field: trading.v1.PlanStep.Method method = 2;
     */
    method: PlanStep_Method;
    /**
     * @generated from field: trading.v1.PlanStep.PayloadType payload_type = 3;
     */
    payloadType: PlanStep_PayloadType;
    /**
     * JSON serialized payload
     *
     * @generated from field: string payload = 4;
     */
    payload: string;
    /**
     * @generated from field: trading.v1.PlanStep.StepStatus status = 5;
     */
    status: PlanStep_StepStatus;
    /**
     * @generated from field: optional trading.v1.PlanStep.StepProof proof = 6;
     */
    proof?: PlanStep_StepProof;
    /**
     * @generated from field: optional string token_in = 7;
     */
    tokenIn?: string;
    /**
     * @generated from field: optional string token_out = 8;
     */
    tokenOut?: string;
    /**
     * @generated from field: optional int32 token_in_chain_id = 9;
     */
    tokenInChainId?: number;
    /**
     * @generated from field: optional int32 token_out_chain_id = 10;
     */
    tokenOutChainId?: number;
    /**
     * @generated from field: optional string token_in_amount = 11;
     */
    tokenInAmount?: string;
    /**
     * @generated from field: optional string token_out_amount = 12;
     */
    tokenOutAmount?: string;
    /**
     * @generated from field: optional string swapper = 13;
     */
    swapper?: string;
    /**
     * @generated from field: optional string recipient = 14;
     */
    recipient?: string;
    /**
     * @generated from field: trading.v1.PlanStepType step_type = 15;
     */
    stepType: PlanStepType;
    /**
     * @generated from field: optional string gas_use_estimate = 16;
     */
    gasUseEstimate?: string;
    /**
     * @generated from field: optional string gas_fee_usd = 17;
     */
    gasFeeUsd?: string;
    /**
     * @generated from field: optional string gas_fee_quote = 18;
     */
    gasFeeQuote?: string;
    /**
     * @generated from field: optional string gas_price = 19;
     */
    gasPrice?: string;
    /**
     * @generated from field: optional string max_fee_per_gas = 20;
     */
    maxFeePerGas?: string;
    /**
     * @generated from field: optional string max_priority_fee_per_gas = 21;
     */
    maxPriorityFeePerGas?: string;
    /**
     * @generated from field: optional string gas_fee = 22;
     */
    gasFee?: string;
    /**
     * @generated from field: optional string routing_step_key = 23;
     */
    routingStepKey?: string;
    constructor(data?: PartialMessage<PlanStep>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PlanStep";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlanStep;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlanStep;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlanStep;
    static equals(a: PlanStep | PlainMessage<PlanStep> | undefined, b: PlanStep | PlainMessage<PlanStep> | undefined): boolean;
}
/**
 * @generated from enum trading.v1.PlanStep.StepStatus
 */
export declare enum PlanStep_StepStatus {
    /**
     * @generated from enum value: NOT_READY = 0;
     */
    NOT_READY = 0,
    /**
     * @generated from enum value: AWAITING_ACTION = 1;
     */
    AWAITING_ACTION = 1,
    /**
     * @generated from enum value: IN_PROGRESS = 2;
     */
    IN_PROGRESS = 2,
    /**
     * @generated from enum value: COMPLETE = 3;
     */
    COMPLETE = 3,
    /**
     * @generated from enum value: STEP_ERROR = 4;
     */
    STEP_ERROR = 4
}
/**
 * @generated from enum trading.v1.PlanStep.Method
 */
export declare enum PlanStep_Method {
    /**
     * @generated from enum value: SEND_TX = 0;
     */
    SEND_TX = 0,
    /**
     * @generated from enum value: SIGN_MSG = 1;
     */
    SIGN_MSG = 1,
    /**
     * @generated from enum value: SEND_CALLS = 2;
     */
    SEND_CALLS = 2
}
/**
 * @generated from enum trading.v1.PlanStep.PayloadType
 */
export declare enum PlanStep_PayloadType {
    /**
     * @generated from enum value: TX = 0;
     */
    TX = 0,
    /**
     * @generated from enum value: EIP_712 = 1;
     */
    EIP_712 = 1,
    /**
     * @generated from enum value: EIP_5792 = 2;
     */
    EIP_5792 = 2
}
/**
 * @generated from message trading.v1.PlanStep.StepProof
 */
export declare class PlanStep_StepProof extends Message<PlanStep_StepProof> {
    /**
     * @generated from field: optional string tx_hash = 1;
     */
    txHash?: string;
    /**
     * @generated from field: optional string signature = 2;
     */
    signature?: string;
    /**
     * @generated from field: optional string order_id = 3;
     */
    orderId?: string;
    constructor(data?: PartialMessage<PlanStep_StepProof>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PlanStep.StepProof";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlanStep_StepProof;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlanStep_StepProof;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlanStep_StepProof;
    static equals(a: PlanStep_StepProof | PlainMessage<PlanStep_StepProof> | undefined, b: PlanStep_StepProof | PlainMessage<PlanStep_StepProof> | undefined): boolean;
}
/**
 * @generated from message trading.v1.CreatePlanRequest
 */
export declare class CreatePlanRequest extends Message<CreatePlanRequest> {
    /**
     * @generated from field: trading.v1.SwapType routing = 1;
     */
    routing: SwapType;
    /**
     * @generated from field: trading.v1.ChainedQuote quote = 2;
     */
    quote?: ChainedQuote;
    /**
     * @generated from field: optional trading.v1.WalletExecutionContext wallet_execution_context = 3;
     */
    walletExecutionContext?: WalletExecutionContext;
    constructor(data?: PartialMessage<CreatePlanRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.CreatePlanRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePlanRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePlanRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePlanRequest;
    static equals(a: CreatePlanRequest | PlainMessage<CreatePlanRequest> | undefined, b: CreatePlanRequest | PlainMessage<CreatePlanRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GetPlanRequest
 */
export declare class GetPlanRequest extends Message<GetPlanRequest> {
    /**
     * @generated from field: string plan_id = 1;
     */
    planId: string;
    /**
     * @generated from field: bool force_refresh = 2;
     */
    forceRefresh: boolean;
    constructor(data?: PartialMessage<GetPlanRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GetPlanRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPlanRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPlanRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPlanRequest;
    static equals(a: GetPlanRequest | PlainMessage<GetPlanRequest> | undefined, b: GetPlanRequest | PlainMessage<GetPlanRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PlanResponse
 */
export declare class PlanResponse extends Message<PlanResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: string plan_id = 2;
     */
    planId: string;
    /**
     * @generated from field: string swapper = 3;
     */
    swapper: string;
    /**
     * @generated from field: string recipient = 4;
     */
    recipient: string;
    /**
     * @generated from field: string quote_id = 5;
     */
    quoteId: string;
    /**
     * @generated from field: trading.v1.PlanResponse.PlanStatus status = 6;
     */
    status: PlanResponse_PlanStatus;
    /**
     * @generated from field: repeated trading.v1.PlanStep steps = 7;
     */
    steps: PlanStep[];
    /**
     * @generated from field: int32 current_step_index = 8;
     */
    currentStepIndex: number;
    /**
     * @generated from field: string expected_output = 9;
     */
    expectedOutput: string;
    /**
     * @generated from field: optional string gas_fee = 10;
     */
    gasFee?: string;
    /**
     * @generated from field: optional int32 time_estimate_ms = 11;
     */
    timeEstimateMs?: number;
    /**
     * @generated from field: repeated trading.v1.GasStrategy gas_strategies = 12;
     */
    gasStrategies: GasStrategy[];
    /**
     * @generated from field: repeated trading.v1.Protocols protocols = 13;
     */
    protocols: Protocols[];
    /**
     * @generated from field: optional trading.v1.HooksOptions hooks_options = 14;
     */
    hooksOptions?: HooksOptions;
    /**
     * @generated from field: optional string created_at = 15;
     */
    createdAt?: string;
    /**
     * @generated from field: optional trading.v1.WalletExecutionContext wallet_execution_context = 16;
     */
    walletExecutionContext?: WalletExecutionContext;
    constructor(data?: PartialMessage<PlanResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PlanResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlanResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlanResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlanResponse;
    static equals(a: PlanResponse | PlainMessage<PlanResponse> | undefined, b: PlanResponse | PlainMessage<PlanResponse> | undefined): boolean;
}
/**
 * @generated from enum trading.v1.PlanResponse.PlanStatus
 */
export declare enum PlanResponse_PlanStatus {
    /**
     * @generated from enum value: ACTIVE = 0;
     */
    ACTIVE = 0,
    /**
     * @generated from enum value: IN_PROGRESS = 1;
     */
    IN_PROGRESS = 1,
    /**
     * @generated from enum value: COMPLETED = 2;
     */
    COMPLETED = 2,
    /**
     * @generated from enum value: FAILED = 3;
     */
    FAILED = 3
}
/**
 * @generated from message trading.v1.DocsRequest
 */
export declare class DocsRequest extends Message<DocsRequest> {
    constructor(data?: PartialMessage<DocsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DocsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DocsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DocsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DocsRequest;
    static equals(a: DocsRequest | PlainMessage<DocsRequest> | undefined, b: DocsRequest | PlainMessage<DocsRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.DocsResponse
 */
export declare class DocsResponse extends Message<DocsResponse> {
    /**
     * @generated from field: string openapi = 1;
     */
    openapi: string;
    /**
     * @generated from field: repeated google.protobuf.Struct servers = 2;
     */
    servers: Struct[];
    /**
     * @generated from field: google.protobuf.Struct info = 3;
     */
    info?: Struct;
    /**
     * @generated from field: google.protobuf.Struct paths = 4;
     */
    paths?: Struct;
    /**
     * @generated from field: google.protobuf.Struct components = 5;
     */
    components?: Struct;
    /**
     * @generated from field: repeated google.protobuf.Struct security = 6;
     */
    security: Struct[];
    constructor(data?: PartialMessage<DocsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.DocsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DocsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DocsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DocsResponse;
    static equals(a: DocsResponse | PlainMessage<DocsResponse> | undefined, b: DocsResponse | PlainMessage<DocsResponse> | undefined): boolean;
}
/**
 * @generated from message trading.v1.UpdatePlanRequest
 */
export declare class UpdatePlanRequest extends Message<UpdatePlanRequest> {
    /**
     * @generated from field: string plan_id = 1;
     */
    planId: string;
    /**
     * @generated from field: repeated trading.v1.PlanStepUpdate steps = 2;
     */
    steps: PlanStepUpdate[];
    constructor(data?: PartialMessage<UpdatePlanRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.UpdatePlanRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdatePlanRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdatePlanRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdatePlanRequest;
    static equals(a: UpdatePlanRequest | PlainMessage<UpdatePlanRequest> | undefined, b: UpdatePlanRequest | PlainMessage<UpdatePlanRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.PlanStepUpdate
 */
export declare class PlanStepUpdate extends Message<PlanStepUpdate> {
    /**
     * @generated from field: int32 step_index = 1;
     */
    stepIndex: number;
    /**
     * @generated from field: trading.v1.PlanStep.StepProof proof = 2;
     */
    proof?: PlanStep_StepProof;
    constructor(data?: PartialMessage<PlanStepUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.PlanStepUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlanStepUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlanStepUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlanStepUpdate;
    static equals(a: PlanStepUpdate | PlainMessage<PlanStepUpdate> | undefined, b: PlanStepUpdate | PlainMessage<PlanStepUpdate> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GetPlansRequest
 */
export declare class GetPlansRequest extends Message<GetPlansRequest> {
    /**
     * @generated from field: string swapper = 1;
     */
    swapper: string;
    /**
     * @generated from field: optional int32 limit = 2;
     */
    limit?: number;
    /**
     * @generated from field: optional string cursor = 3;
     */
    cursor?: string;
    /**
     * @generated from field: optional string min_timestamp = 4;
     */
    minTimestamp?: string;
    /**
     * @generated from field: optional string max_timestamp = 5;
     */
    maxTimestamp?: string;
    constructor(data?: PartialMessage<GetPlansRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GetPlansRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPlansRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPlansRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPlansRequest;
    static equals(a: GetPlansRequest | PlainMessage<GetPlansRequest> | undefined, b: GetPlansRequest | PlainMessage<GetPlansRequest> | undefined): boolean;
}
/**
 * @generated from message trading.v1.GetPlansResponse
 */
export declare class GetPlansResponse extends Message<GetPlansResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: repeated trading.v1.PlanResponse plans = 2;
     */
    plans: PlanResponse[];
    /**
     * @generated from field: optional string next_cursor = 3;
     */
    nextCursor?: string;
    constructor(data?: PartialMessage<GetPlansResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.GetPlansResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPlansResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPlansResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPlansResponse;
    static equals(a: GetPlansResponse | PlainMessage<GetPlansResponse> | undefined, b: GetPlansResponse | PlainMessage<GetPlansResponse> | undefined): boolean;
}
/**
 * WalletExecutionContext based on CAIP-25 Standard
 *
 * @generated from message trading.v1.WalletExecutionContext
 */
export declare class WalletExecutionContext extends Message<WalletExecutionContext> {
    /**
     * @generated from field: map<string, trading.v1.ScopeData> scopes = 1;
     */
    scopes: {
        [key: string]: ScopeData;
    };
    /**
     * @generated from field: optional trading.v1.WalletProperties properties = 2;
     */
    properties?: WalletProperties;
    constructor(data?: PartialMessage<WalletExecutionContext>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.WalletExecutionContext";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WalletExecutionContext;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WalletExecutionContext;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WalletExecutionContext;
    static equals(a: WalletExecutionContext | PlainMessage<WalletExecutionContext> | undefined, b: WalletExecutionContext | PlainMessage<WalletExecutionContext> | undefined): boolean;
}
/**
 * @generated from message trading.v1.ScopeData
 */
export declare class ScopeData extends Message<ScopeData> {
    /**
     * @generated from field: repeated string accounts = 1;
     */
    accounts: string[];
    /**
     * @generated from field: repeated string methods = 2;
     */
    methods: string[];
    /**
     * @generated from field: optional google.protobuf.Struct capabilities = 3;
     */
    capabilities?: Struct;
    /**
     * @generated from field: repeated string chains = 4;
     */
    chains: string[];
    /**
     * Uni client-specific context describing how this wallet integrates with the application
     *
     * @generated from field: optional trading.v1.ClientContext client_context = 5;
     */
    clientContext?: ClientContext;
    constructor(data?: PartialMessage<ScopeData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.ScopeData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ScopeData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ScopeData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ScopeData;
    static equals(a: ScopeData | PlainMessage<ScopeData> | undefined, b: ScopeData | PlainMessage<ScopeData> | undefined): boolean;
}
/**
 * @generated from message trading.v1.ClientContext
 */
export declare class ClientContext extends Message<ClientContext> {
    /**
     * @generated from field: optional bool direct_private_key_access = 1;
     */
    directPrivateKeyAccess?: boolean;
    /**
     * @generated from field: optional string next_evm_upgrade_address = 2;
     */
    nextEvmUpgradeAddress?: string;
    constructor(data?: PartialMessage<ClientContext>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.ClientContext";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientContext;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientContext;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientContext;
    static equals(a: ClientContext | PlainMessage<ClientContext> | undefined, b: ClientContext | PlainMessage<ClientContext> | undefined): boolean;
}
/**
 * @generated from message trading.v1.WalletProperties
 */
export declare class WalletProperties extends Message<WalletProperties> {
    /**
     * @generated from field: optional trading.v1.WalletInfo wallet_info = 1;
     */
    walletInfo?: WalletInfo;
    constructor(data?: PartialMessage<WalletProperties>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.WalletProperties";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WalletProperties;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WalletProperties;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WalletProperties;
    static equals(a: WalletProperties | PlainMessage<WalletProperties> | undefined, b: WalletProperties | PlainMessage<WalletProperties> | undefined): boolean;
}
/**
 * @generated from message trading.v1.WalletInfo
 */
export declare class WalletInfo extends Message<WalletInfo> {
    /**
     * @generated from field: optional string uuid = 1;
     */
    uuid?: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * @generated from field: optional string rdns = 3;
     */
    rdns?: string;
    constructor(data?: PartialMessage<WalletInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "trading.v1.WalletInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WalletInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WalletInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WalletInfo;
    static equals(a: WalletInfo | PlainMessage<WalletInfo> | undefined, b: WalletInfo | PlainMessage<WalletInfo> | undefined): boolean;
}
