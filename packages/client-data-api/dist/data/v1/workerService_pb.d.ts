import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message data.v1.RefreshProtocolStatsRequest
 */
export declare class RefreshProtocolStatsRequest extends Message<RefreshProtocolStatsRequest> {
    constructor(data?: PartialMessage<RefreshProtocolStatsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.RefreshProtocolStatsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshProtocolStatsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshProtocolStatsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshProtocolStatsRequest;
    static equals(a: RefreshProtocolStatsRequest | PlainMessage<RefreshProtocolStatsRequest> | undefined, b: RefreshProtocolStatsRequest | PlainMessage<RefreshProtocolStatsRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.RefreshProtocolStatsResponse
 */
export declare class RefreshProtocolStatsResponse extends Message<RefreshProtocolStatsResponse> {
    constructor(data?: PartialMessage<RefreshProtocolStatsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.RefreshProtocolStatsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshProtocolStatsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshProtocolStatsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshProtocolStatsResponse;
    static equals(a: RefreshProtocolStatsResponse | PlainMessage<RefreshProtocolStatsResponse> | undefined, b: RefreshProtocolStatsResponse | PlainMessage<RefreshProtocolStatsResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.CheckSubgraphHealthRequest
 */
export declare class CheckSubgraphHealthRequest extends Message<CheckSubgraphHealthRequest> {
    constructor(data?: PartialMessage<CheckSubgraphHealthRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.CheckSubgraphHealthRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckSubgraphHealthRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckSubgraphHealthRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckSubgraphHealthRequest;
    static equals(a: CheckSubgraphHealthRequest | PlainMessage<CheckSubgraphHealthRequest> | undefined, b: CheckSubgraphHealthRequest | PlainMessage<CheckSubgraphHealthRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.CheckSubgraphHealthResponse
 */
export declare class CheckSubgraphHealthResponse extends Message<CheckSubgraphHealthResponse> {
    constructor(data?: PartialMessage<CheckSubgraphHealthResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.CheckSubgraphHealthResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckSubgraphHealthResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckSubgraphHealthResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckSubgraphHealthResponse;
    static equals(a: CheckSubgraphHealthResponse | PlainMessage<CheckSubgraphHealthResponse> | undefined, b: CheckSubgraphHealthResponse | PlainMessage<CheckSubgraphHealthResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.BlockaidMetadataItem
 */
export declare class BlockaidMetadataItem extends Message<BlockaidMetadataItem> {
    /**
     * @generated from field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: string result_type = 3;
     */
    resultType: string;
    /**
     * @generated from field: repeated string attack_types = 4;
     */
    attackTypes: string[];
    /**
     * @generated from field: double fee_buy = 5;
     */
    feeBuy: number;
    /**
     * @generated from field: double fee_sell = 6;
     */
    feeSell: number;
    /**
     * @generated from field: double fee_transfer = 7;
     */
    feeTransfer: number;
    constructor(data?: PartialMessage<BlockaidMetadataItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.BlockaidMetadataItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockaidMetadataItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockaidMetadataItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockaidMetadataItem;
    static equals(a: BlockaidMetadataItem | PlainMessage<BlockaidMetadataItem> | undefined, b: BlockaidMetadataItem | PlainMessage<BlockaidMetadataItem> | undefined): boolean;
}
/**
 * @generated from message data.v1.IngestBlockaidMetadataRequest
 */
export declare class IngestBlockaidMetadataRequest extends Message<IngestBlockaidMetadataRequest> {
    /**
     * @generated from field: repeated data.v1.BlockaidMetadataItem items = 1;
     */
    items: BlockaidMetadataItem[];
    constructor(data?: PartialMessage<IngestBlockaidMetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.IngestBlockaidMetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IngestBlockaidMetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IngestBlockaidMetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IngestBlockaidMetadataRequest;
    static equals(a: IngestBlockaidMetadataRequest | PlainMessage<IngestBlockaidMetadataRequest> | undefined, b: IngestBlockaidMetadataRequest | PlainMessage<IngestBlockaidMetadataRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.IngestBlockaidMetadataResponse
 */
export declare class IngestBlockaidMetadataResponse extends Message<IngestBlockaidMetadataResponse> {
    constructor(data?: PartialMessage<IngestBlockaidMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.IngestBlockaidMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IngestBlockaidMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IngestBlockaidMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IngestBlockaidMetadataResponse;
    static equals(a: IngestBlockaidMetadataResponse | PlainMessage<IngestBlockaidMetadataResponse> | undefined, b: IngestBlockaidMetadataResponse | PlainMessage<IngestBlockaidMetadataResponse> | undefined): boolean;
}
