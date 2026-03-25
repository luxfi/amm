import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Pool, SearchType, Token } from "./searchTypes_pb.js";
/**
 * @generated from message data.v1.SearchTokensRequest
 */
export declare class SearchTokensRequest extends Message<SearchTokensRequest> {
    /**
     * @generated from field: string search_query = 1;
     */
    searchQuery: string;
    /**
     * @generated from field: repeated uint32 chain_ids = 2;
     */
    chainIds: number[];
    /**
     * @generated from field: search.v1.SearchType search_type = 3;
     */
    searchType: SearchType;
    /**
     * @generated from field: uint32 page = 4;
     */
    page: number;
    /**
     * @generated from field: uint32 size = 5;
     */
    size: number;
    constructor(data?: PartialMessage<SearchTokensRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.SearchTokensRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchTokensRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchTokensRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchTokensRequest;
    static equals(a: SearchTokensRequest | PlainMessage<SearchTokensRequest> | undefined, b: SearchTokensRequest | PlainMessage<SearchTokensRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.SearchTokensResponse
 */
export declare class SearchTokensResponse extends Message<SearchTokensResponse> {
    /**
     * @generated from field: repeated search.v1.Token tokens = 1;
     */
    tokens: Token[];
    /**
     * @generated from field: repeated search.v1.Pool pools = 2;
     */
    pools: Pool[];
    constructor(data?: PartialMessage<SearchTokensResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.SearchTokensResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchTokensResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchTokensResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchTokensResponse;
    static equals(a: SearchTokensResponse | PlainMessage<SearchTokensResponse> | undefined, b: SearchTokensResponse | PlainMessage<SearchTokensResponse> | undefined): boolean;
}
