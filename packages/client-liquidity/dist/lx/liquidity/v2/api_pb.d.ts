import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ChainId, NFTPermitData, PermitBatchData, Protocols, TransactionRequest, V3Position } from "../v1/types_pb.js";
import { ApprovalTransactionRequest, GasUrgency, LPAction, LPToken } from "./types_pb.js";
/**
 * MigrateV2ToV3LPPosition
 *
 * @generated from message uniswap.liquidity.v2.MigrateV2ToV3LPPositionRequest
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
    static readonly typeName = "uniswap.liquidity.v2.MigrateV2ToV3LPPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateV2ToV3LPPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateV2ToV3LPPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateV2ToV3LPPositionRequest;
    static equals(a: MigrateV2ToV3LPPositionRequest | PlainMessage<MigrateV2ToV3LPPositionRequest> | undefined, b: MigrateV2ToV3LPPositionRequest | PlainMessage<MigrateV2ToV3LPPositionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v2.MigrateV2ToV3LPPositionResponse
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
    static readonly typeName = "uniswap.liquidity.v2.MigrateV2ToV3LPPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateV2ToV3LPPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateV2ToV3LPPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateV2ToV3LPPositionResponse;
    static equals(a: MigrateV2ToV3LPPositionResponse | PlainMessage<MigrateV2ToV3LPPositionResponse> | undefined, b: MigrateV2ToV3LPPositionResponse | PlainMessage<MigrateV2ToV3LPPositionResponse> | undefined): boolean;
}
/**
 * CheckLPApproval
 *
 * @generated from message uniswap.liquidity.v2.LPApprovalRequest
 */
export declare class LPApprovalRequest extends Message<LPApprovalRequest> {
    /**
     * @generated from field: string wallet_address = 1;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 2;
     */
    protocol: Protocols;
    /**
     * @generated from field: repeated uniswap.liquidity.v2.LPToken lp_tokens = 3;
     */
    lpTokens: LPToken[];
    /**
     * @generated from field: uniswap.liquidity.v2.LPAction action = 4;
     */
    action: LPAction;
    /**
     * @generated from field: optional bool include_gas_info = 5;
     */
    includeGasInfo?: boolean;
    /**
     * @generated from field: optional bool simulate_transaction = 6;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: optional bool generate_permit_as_transaction = 7;
     */
    generatePermitAsTransaction?: boolean;
    /**
     * @generated from field: optional uniswap.liquidity.v2.GasUrgency urgency = 8;
     */
    urgency?: GasUrgency;
    /**
     * @generated from field: optional int32 v3_nft_token_id = 9;
     */
    v3NftTokenId?: number;
    constructor(data?: PartialMessage<LPApprovalRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v2.LPApprovalRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LPApprovalRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LPApprovalRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LPApprovalRequest;
    static equals(a: LPApprovalRequest | PlainMessage<LPApprovalRequest> | undefined, b: LPApprovalRequest | PlainMessage<LPApprovalRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v2.LPApprovalResponse
 */
export declare class LPApprovalResponse extends Message<LPApprovalResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: repeated uniswap.liquidity.v2.ApprovalTransactionRequest transactions = 2;
     */
    transactions: ApprovalTransactionRequest[];
    /**
     * @generated from field: optional uniswap.liquidity.v1.PermitBatchData v4_batch_permit_data = 3;
     */
    v4BatchPermitData?: PermitBatchData;
    /**
     * @generated from field: optional uniswap.liquidity.v1.NFTPermitData v3_nft_permit_data = 4;
     */
    v3NftPermitData?: NFTPermitData;
    constructor(data?: PartialMessage<LPApprovalResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v2.LPApprovalResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LPApprovalResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LPApprovalResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LPApprovalResponse;
    static equals(a: LPApprovalResponse | PlainMessage<LPApprovalResponse> | undefined, b: LPApprovalResponse | PlainMessage<LPApprovalResponse> | undefined): boolean;
}
