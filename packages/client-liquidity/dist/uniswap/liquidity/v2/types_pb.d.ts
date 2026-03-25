import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ChainId, TransactionRequest } from "../v1/types_pb.js";
/**
 * @generated from enum uniswap.liquidity.v2.LPAction
 */
export declare enum LPAction {
    /**
     * @generated from enum value: CREATE = 0;
     */
    CREATE = 0,
    /**
     * @generated from enum value: INCREASE = 1;
     */
    INCREASE = 1,
    /**
     * @generated from enum value: DECREASE = 2;
     */
    DECREASE = 2,
    /**
     * @generated from enum value: MIGRATE = 3;
     */
    MIGRATE = 3
}
/**
 * @generated from enum uniswap.liquidity.v2.GasUrgency
 */
export declare enum GasUrgency {
    /**
     * @generated from enum value: GAS_URGENCY_UNSPECIFIED = 0;
     */
    GAS_URGENCY_UNSPECIFIED = 0,
    /**
     * @generated from enum value: NORMAL = 1;
     */
    NORMAL = 1,
    /**
     * @generated from enum value: FAST = 2;
     */
    FAST = 2,
    /**
     * @generated from enum value: URGENT = 3;
     */
    URGENT = 3
}
/**
 * @generated from message uniswap.liquidity.v2.LPToken
 */
export declare class LPToken extends Message<LPToken> {
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 1;
     */
    chainId: ChainId;
    /**
     * @generated from field: string token_address = 2;
     */
    tokenAddress: string;
    /**
     * @generated from field: string amount = 3;
     */
    amount: string;
    constructor(data?: PartialMessage<LPToken>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v2.LPToken";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LPToken;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LPToken;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LPToken;
    static equals(a: LPToken | PlainMessage<LPToken> | undefined, b: LPToken | PlainMessage<LPToken> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v2.ApprovalTransactionRequest
 */
export declare class ApprovalTransactionRequest extends Message<ApprovalTransactionRequest> {
    /**
     * @generated from field: uniswap.liquidity.v1.TransactionRequest transaction = 1;
     */
    transaction?: TransactionRequest;
    /**
     * @generated from field: bool cancel_approval = 2;
     */
    cancelApproval: boolean;
    /**
     * @generated from field: uniswap.liquidity.v2.LPAction action = 3;
     */
    action: LPAction;
    /**
     * @generated from field: optional string gas_fee = 4;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<ApprovalTransactionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v2.ApprovalTransactionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ApprovalTransactionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ApprovalTransactionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ApprovalTransactionRequest;
    static equals(a: ApprovalTransactionRequest | PlainMessage<ApprovalTransactionRequest> | undefined, b: ApprovalTransactionRequest | PlainMessage<ApprovalTransactionRequest> | undefined): boolean;
}
