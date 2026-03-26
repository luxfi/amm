import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ChainId, Distributor, NFTPermitData, OnChainStatus, PermitBatchData, PoolInformation, PoolParameters, PoolReferenceByProtocol, Protocols, TransactionRequest, V2CheckApprovalLPRequest, V2ClaimLPFeesRequest, V2CreateLPPosition, V2DecreaseLPPosition, V2IncreaseLPPosition, V3CheckApprovalLPRequest, V3ClaimLPFeesRequest, V3CreateLPPosition, V3DecreaseLPPosition, V3IncreaseLPPosition, V3Position, V4CheckApprovalLPRequest, V4ClaimLPFeesRequest, V4CreateLPPosition, V4DecreaseLPPosition, V4IncreaseLPPosition, V4Position } from "./types_pb.js";
/**
 * REQUESTS & RESPONSES
 *
 * @generated from message uniswap.liquidity.v1.MigrateV2ToV3LPPositionRequest
 */
export declare class MigrateV2ToV3LPPositionRequest extends Message<MigrateV2ToV3LPPositionRequest> {
    /**
     * @generated from field: string wallet_address = 1;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 2;
     */
    chainId: ChainId;
    /**
     * @generated from field: uniswap.liquidity.v1.V3Position v3_params = 3;
     */
    v3Params?: V3Position;
    /**
     * @generated from field: optional float slippage_bps = 4;
     */
    slippageBps?: number;
    /**
     * @generated from field: optional string deadline = 5;
     */
    deadline?: string;
    /**
     * @generated from field: optional bool refund_as_eth = 6;
     */
    refundAsEth?: boolean;
    /**
     * @generated from field: optional bool simulate_transaction = 7;
     */
    simulateTransaction?: boolean;
    constructor(data?: PartialMessage<MigrateV2ToV3LPPositionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.MigrateV2ToV3LPPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateV2ToV3LPPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateV2ToV3LPPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateV2ToV3LPPositionRequest;
    static equals(a: MigrateV2ToV3LPPositionRequest | PlainMessage<MigrateV2ToV3LPPositionRequest> | undefined, b: MigrateV2ToV3LPPositionRequest | PlainMessage<MigrateV2ToV3LPPositionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.MigrateV2ToV3LPPositionResponse
 */
export declare class MigrateV2ToV3LPPositionResponse extends Message<MigrateV2ToV3LPPositionResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: uniswap.liquidity.v1.TransactionRequest migrate = 2;
     */
    migrate?: TransactionRequest;
    /**
     * @generated from field: optional string gasFee = 3;
     */
    gasFee?: string;
    /**
     * @generated from field: optional string estimated_refund_token0 = 4;
     */
    estimatedRefundToken0?: string;
    /**
     * @generated from field: optional string estimated_refund_token1 = 5;
     */
    estimatedRefundToken1?: string;
    constructor(data?: PartialMessage<MigrateV2ToV3LPPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.MigrateV2ToV3LPPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateV2ToV3LPPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateV2ToV3LPPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateV2ToV3LPPositionResponse;
    static equals(a: MigrateV2ToV3LPPositionResponse | PlainMessage<MigrateV2ToV3LPPositionResponse> | undefined, b: MigrateV2ToV3LPPositionResponse | PlainMessage<MigrateV2ToV3LPPositionResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.MigrateV3ToV4LPPositionRequest
 */
export declare class MigrateV3ToV4LPPositionRequest extends Message<MigrateV3ToV4LPPositionRequest> {
    /**
     * @generated from field: int32 tokenId = 1;
     */
    tokenId: number;
    /**
     * @generated from field: string wallet_address = 2;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 3;
     */
    chainId: ChainId;
    /**
     * @generated from field: uniswap.liquidity.v1.V3Position input_position = 4;
     */
    inputPosition?: V3Position;
    /**
     * @generated from field: string input_position_liquidity = 5;
     */
    inputPositionLiquidity: string;
    /**
     * @generated from field: optional string signature = 6;
     */
    signature?: string;
    /**
     * @generated from field: string amount0 = 7;
     */
    amount0: string;
    /**
     * @generated from field: string amount1 = 8;
     */
    amount1: string;
    /**
     * @generated from field: uniswap.liquidity.v1.V4Position output_position = 9;
     */
    outputPosition?: V4Position;
    /**
     * @generated from field: optional string initial_price = 10;
     */
    initialPrice?: string;
    /**
     * @generated from field: string expectedTokenOwed0RawAmount = 11;
     */
    expectedTokenOwed0RawAmount: string;
    /**
     * @generated from field: string expectedTokenOwed1RawAmount = 12;
     */
    expectedTokenOwed1RawAmount: string;
    /**
     * @generated from field: bool simulate_transaction = 13;
     */
    simulateTransaction: boolean;
    /**
     * @generated from field: optional float slippage_tolerance = 14;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 15;
     */
    deadline?: number;
    /**
     * @generated from field: optional int32 signature_deadline = 16;
     */
    signatureDeadline?: number;
    constructor(data?: PartialMessage<MigrateV3ToV4LPPositionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.MigrateV3ToV4LPPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateV3ToV4LPPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateV3ToV4LPPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateV3ToV4LPPositionRequest;
    static equals(a: MigrateV3ToV4LPPositionRequest | PlainMessage<MigrateV3ToV4LPPositionRequest> | undefined, b: MigrateV3ToV4LPPositionRequest | PlainMessage<MigrateV3ToV4LPPositionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.MigrateV3ToV4LPPositionResponse
 */
export declare class MigrateV3ToV4LPPositionResponse extends Message<MigrateV3ToV4LPPositionResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: uniswap.liquidity.v1.TransactionRequest migrate = 2;
     */
    migrate?: TransactionRequest;
    /**
     * @generated from field: optional string gasFee = 3;
     */
    gasFee?: string;
    /**
     * @generated from field: optional string estimated_refund_token0 = 4;
     */
    estimatedRefundToken0?: string;
    /**
     * @generated from field: optional string estimated_refund_token1 = 5;
     */
    estimatedRefundToken1?: string;
    constructor(data?: PartialMessage<MigrateV3ToV4LPPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.MigrateV3ToV4LPPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateV3ToV4LPPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateV3ToV4LPPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateV3ToV4LPPositionResponse;
    static equals(a: MigrateV3ToV4LPPositionResponse | PlainMessage<MigrateV3ToV4LPPositionResponse> | undefined, b: MigrateV3ToV4LPPositionResponse | PlainMessage<MigrateV3ToV4LPPositionResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.ClaimLPRewardsRequest
 */
export declare class ClaimLPRewardsRequest extends Message<ClaimLPRewardsRequest> {
    /**
     * @generated from field: string wallet_address = 1;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 2;
     */
    chainId: ChainId;
    /**
     * @generated from field: repeated string tokens = 3;
     */
    tokens: string[];
    /**
     * @generated from field: uniswap.liquidity.v1.Distributor distributor = 4;
     */
    distributor: Distributor;
    /**
     * @generated from field: bool simulate_transaction = 5;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<ClaimLPRewardsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.ClaimLPRewardsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimLPRewardsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimLPRewardsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimLPRewardsRequest;
    static equals(a: ClaimLPRewardsRequest | PlainMessage<ClaimLPRewardsRequest> | undefined, b: ClaimLPRewardsRequest | PlainMessage<ClaimLPRewardsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.ClaimLPRewardsResponse
 */
export declare class ClaimLPRewardsResponse extends Message<ClaimLPRewardsResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest claim = 2;
     */
    claim?: TransactionRequest;
    /**
     * @generated from field: optional string gas_fee = 3;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<ClaimLPRewardsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.ClaimLPRewardsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimLPRewardsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimLPRewardsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimLPRewardsResponse;
    static equals(a: ClaimLPRewardsResponse | PlainMessage<ClaimLPRewardsResponse> | undefined, b: ClaimLPRewardsResponse | PlainMessage<ClaimLPRewardsResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.CreateLPPositionRequest
 */
export declare class CreateLPPositionRequest extends Message<CreateLPPositionRequest> {
    /**
     * @generated from oneof uniswap.liquidity.v1.CreateLPPositionRequest.createLpPosition
     */
    createLpPosition: {
        /**
         * @generated from field: uniswap.liquidity.v1.V2CreateLPPosition v2_create_lp_position = 1;
         */
        value: V2CreateLPPosition;
        case: "v2CreateLpPosition";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.V3CreateLPPosition v3_create_lp_position = 2;
         */
        value: V3CreateLPPosition;
        case: "v3CreateLpPosition";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.V4CreateLPPosition v4_create_lp_position = 3;
         */
        value: V4CreateLPPosition;
        case: "v4CreateLpPosition";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<CreateLPPositionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.CreateLPPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateLPPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateLPPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateLPPositionRequest;
    static equals(a: CreateLPPositionRequest | PlainMessage<CreateLPPositionRequest> | undefined, b: CreateLPPositionRequest | PlainMessage<CreateLPPositionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.CreateLPPositionResponse
 */
export declare class CreateLPPositionResponse extends Message<CreateLPPositionResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest create = 2;
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
    /**
     * @generated from field: optional string gas_fee = 7;
     */
    gasFee?: string;
    /**
     * @generated from field: optional float slippage = 8;
     */
    slippage?: number;
    constructor(data?: PartialMessage<CreateLPPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.CreateLPPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateLPPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateLPPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateLPPositionResponse;
    static equals(a: CreateLPPositionResponse | PlainMessage<CreateLPPositionResponse> | undefined, b: CreateLPPositionResponse | PlainMessage<CreateLPPositionResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PoolInfoRequest
 */
export declare class PoolInfoRequest extends Message<PoolInfoRequest> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: repeated uniswap.liquidity.v1.PoolReferenceByProtocol pool_references = 2;
     */
    poolReferences: PoolReferenceByProtocol[];
    /**
     * @generated from field: optional uniswap.liquidity.v1.PoolParameters pool_parameters = 3;
     */
    poolParameters?: PoolParameters;
    /**
     * @generated from field: optional uniswap.liquidity.v1.ChainId chain_id = 4;
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
    static readonly typeName = "uniswap.liquidity.v1.PoolInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolInfoRequest;
    static equals(a: PoolInfoRequest | PlainMessage<PoolInfoRequest> | undefined, b: PoolInfoRequest | PlainMessage<PoolInfoRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PoolInfoResponse
 */
export declare class PoolInfoResponse extends Message<PoolInfoResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: repeated uniswap.liquidity.v1.PoolInformation pools = 2;
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
    static readonly typeName = "uniswap.liquidity.v1.PoolInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolInfoResponse;
    static equals(a: PoolInfoResponse | PlainMessage<PoolInfoResponse> | undefined, b: PoolInfoResponse | PlainMessage<PoolInfoResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.IncreaseLPPositionRequest
 */
export declare class IncreaseLPPositionRequest extends Message<IncreaseLPPositionRequest> {
    /**
     * @generated from oneof uniswap.liquidity.v1.IncreaseLPPositionRequest.increaseLpPosition
     */
    increaseLpPosition: {
        /**
         * @generated from field: uniswap.liquidity.v1.V2IncreaseLPPosition v2_increase_lp_position = 1;
         */
        value: V2IncreaseLPPosition;
        case: "v2IncreaseLpPosition";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.V3IncreaseLPPosition v3_increase_lp_position = 2;
         */
        value: V3IncreaseLPPosition;
        case: "v3IncreaseLpPosition";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.V4IncreaseLPPosition v4_increase_lp_position = 3;
         */
        value: V4IncreaseLPPosition;
        case: "v4IncreaseLpPosition";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<IncreaseLPPositionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.IncreaseLPPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncreaseLPPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncreaseLPPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncreaseLPPositionRequest;
    static equals(a: IncreaseLPPositionRequest | PlainMessage<IncreaseLPPositionRequest> | undefined, b: IncreaseLPPositionRequest | PlainMessage<IncreaseLPPositionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.IncreaseLPPositionResponse
 */
export declare class IncreaseLPPositionResponse extends Message<IncreaseLPPositionResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest increase = 2;
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
    /**
     * @generated from field: optional string gas_fee = 7;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<IncreaseLPPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.IncreaseLPPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncreaseLPPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncreaseLPPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncreaseLPPositionResponse;
    static equals(a: IncreaseLPPositionResponse | PlainMessage<IncreaseLPPositionResponse> | undefined, b: IncreaseLPPositionResponse | PlainMessage<IncreaseLPPositionResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.DecreaseLPPositionRequest
 */
export declare class DecreaseLPPositionRequest extends Message<DecreaseLPPositionRequest> {
    /**
     * @generated from oneof uniswap.liquidity.v1.DecreaseLPPositionRequest.decreaseLpPosition
     */
    decreaseLpPosition: {
        /**
         * @generated from field: uniswap.liquidity.v1.V2DecreaseLPPosition v2_decrease_lp_position = 1;
         */
        value: V2DecreaseLPPosition;
        case: "v2DecreaseLpPosition";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.V3DecreaseLPPosition v3_decrease_lp_position = 2;
         */
        value: V3DecreaseLPPosition;
        case: "v3DecreaseLpPosition";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.V4DecreaseLPPosition v4_decrease_lp_position = 3;
         */
        value: V4DecreaseLPPosition;
        case: "v4DecreaseLpPosition";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<DecreaseLPPositionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.DecreaseLPPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecreaseLPPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecreaseLPPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecreaseLPPositionRequest;
    static equals(a: DecreaseLPPositionRequest | PlainMessage<DecreaseLPPositionRequest> | undefined, b: DecreaseLPPositionRequest | PlainMessage<DecreaseLPPositionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.DecreaseLPPositionResponse
 */
export declare class DecreaseLPPositionResponse extends Message<DecreaseLPPositionResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest decrease = 2;
     */
    decrease?: TransactionRequest;
    /**
     * @generated from field: optional string pool_liquidity = 3;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 4;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 5;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional string gas_fee = 6;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<DecreaseLPPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.DecreaseLPPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecreaseLPPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecreaseLPPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecreaseLPPositionResponse;
    static equals(a: DecreaseLPPositionResponse | PlainMessage<DecreaseLPPositionResponse> | undefined, b: DecreaseLPPositionResponse | PlainMessage<DecreaseLPPositionResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.ClaimLPFeesRequest
 */
export declare class ClaimLPFeesRequest extends Message<ClaimLPFeesRequest> {
    /**
     * @generated from oneof uniswap.liquidity.v1.ClaimLPFeesRequest.claimLPFeesRequest
     */
    claimLPFeesRequest: {
        /**
         * @generated from field: uniswap.liquidity.v1.V2ClaimLPFeesRequest v2_claim_lp_fees_request = 1;
         */
        value: V2ClaimLPFeesRequest;
        case: "v2ClaimLpFeesRequest";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.V3ClaimLPFeesRequest v3_claim_lp_fees_request = 2;
         */
        value: V3ClaimLPFeesRequest;
        case: "v3ClaimLpFeesRequest";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.V4ClaimLPFeesRequest v4_claim_lp_fees_request = 3;
         */
        value: V4ClaimLPFeesRequest;
        case: "v4ClaimLpFeesRequest";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<ClaimLPFeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.ClaimLPFeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimLPFeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimLPFeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimLPFeesRequest;
    static equals(a: ClaimLPFeesRequest | PlainMessage<ClaimLPFeesRequest> | undefined, b: ClaimLPFeesRequest | PlainMessage<ClaimLPFeesRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.ClaimLPFeesResponse
 */
export declare class ClaimLPFeesResponse extends Message<ClaimLPFeesResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest claim = 2;
     */
    claim?: TransactionRequest;
    /**
     * @generated from field: optional string gas_fee = 3;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<ClaimLPFeesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.ClaimLPFeesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimLPFeesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimLPFeesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimLPFeesResponse;
    static equals(a: ClaimLPFeesResponse | PlainMessage<ClaimLPFeesResponse> | undefined, b: ClaimLPFeesResponse | PlainMessage<ClaimLPFeesResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.CheckApprovalLPRequest
 */
export declare class CheckApprovalLPRequest extends Message<CheckApprovalLPRequest> {
    /**
     * @generated from oneof uniswap.liquidity.v1.CheckApprovalLPRequest.checkApprovalLPRequest
     */
    checkApprovalLPRequest: {
        /**
         * @generated from field: uniswap.liquidity.v1.V2CheckApprovalLPRequest v2_check_approval_lp_request = 1;
         */
        value: V2CheckApprovalLPRequest;
        case: "v2CheckApprovalLpRequest";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.V3CheckApprovalLPRequest v3_check_approval_lp_request = 2;
         */
        value: V3CheckApprovalLPRequest;
        case: "v3CheckApprovalLpRequest";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.V4CheckApprovalLPRequest v4_check_approval_lp_request = 3;
         */
        value: V4CheckApprovalLPRequest;
        case: "v4CheckApprovalLpRequest";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<CheckApprovalLPRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.CheckApprovalLPRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckApprovalLPRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckApprovalLPRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckApprovalLPRequest;
    static equals(a: CheckApprovalLPRequest | PlainMessage<CheckApprovalLPRequest> | undefined, b: CheckApprovalLPRequest | PlainMessage<CheckApprovalLPRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.CheckApprovalLPResponse
 */
export declare class CheckApprovalLPResponse extends Message<CheckApprovalLPResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest token_0_approval = 2;
     */
    token0Approval?: TransactionRequest;
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest token_1_approval = 3;
     */
    token1Approval?: TransactionRequest;
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest token_0_Cancel = 4;
     */
    token0Cancel?: TransactionRequest;
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest token_1_Cancel = 5;
     */
    token1Cancel?: TransactionRequest;
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest position_token_approval = 6;
     */
    positionTokenApproval?: TransactionRequest;
    /**
     * @generated from oneof uniswap.liquidity.v1.CheckApprovalLPResponse.permitData
     */
    permitData: {
        /**
         * @generated from field: uniswap.liquidity.v1.PermitBatchData permit_batch_data = 7;
         */
        value: PermitBatchData;
        case: "permitBatchData";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.NFTPermitData nft_permit_data = 8;
         */
        value: NFTPermitData;
        case: "nftPermitData";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest token_0_permit_transaction = 9;
     */
    token0PermitTransaction?: TransactionRequest;
    /**
     * @generated from field: optional uniswap.liquidity.v1.TransactionRequest token_1_permit_transaction = 10;
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
    static readonly typeName = "uniswap.liquidity.v1.CheckApprovalLPResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckApprovalLPResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckApprovalLPResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckApprovalLPResponse;
    static equals(a: CheckApprovalLPResponse | PlainMessage<CheckApprovalLPResponse> | undefined, b: CheckApprovalLPResponse | PlainMessage<CheckApprovalLPResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.GetLPPriceDiscrepancyRequest
 */
export declare class GetLPPriceDiscrepancyRequest extends Message<GetLPPriceDiscrepancyRequest> {
    /**
     * @generated from field: string txn_hash = 1;
     */
    txnHash: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 2;
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
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 9;
     */
    protocol: Protocols;
    constructor(data?: PartialMessage<GetLPPriceDiscrepancyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.GetLPPriceDiscrepancyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLPPriceDiscrepancyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLPPriceDiscrepancyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLPPriceDiscrepancyRequest;
    static equals(a: GetLPPriceDiscrepancyRequest | PlainMessage<GetLPPriceDiscrepancyRequest> | undefined, b: GetLPPriceDiscrepancyRequest | PlainMessage<GetLPPriceDiscrepancyRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.GetLPPriceDiscrepancyResponse
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
     * @generated from field: uniswap.liquidity.v1.OnChainStatus status = 3;
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
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 6;
     */
    chainId: ChainId;
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 7;
     */
    protocol: Protocols;
    constructor(data?: PartialMessage<GetLPPriceDiscrepancyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.GetLPPriceDiscrepancyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLPPriceDiscrepancyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLPPriceDiscrepancyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLPPriceDiscrepancyResponse;
    static equals(a: GetLPPriceDiscrepancyResponse | PlainMessage<GetLPPriceDiscrepancyResponse> | undefined, b: GetLPPriceDiscrepancyResponse | PlainMessage<GetLPPriceDiscrepancyResponse> | undefined): boolean;
}
