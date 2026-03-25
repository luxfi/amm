import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum Search.v1.SearchType
 */
export declare enum SearchType {
    /**
     * @generated from enum value: SEARCH_TYPE_UNSPECIFIED = 0;
     */
    SEARCH_TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: TOKEN = 1;
     */
    TOKEN = 1,
    /**
     * @generated from enum value: POOL = 2;
     */
    POOL = 2
}
/**
 * @generated from enum Search.v1.SpamCode
 */
export declare enum SpamCode {
    /**
     * @generated from enum value: NOT_SPAM = 0;
     */
    NOT_SPAM = 0,
    /**
     * @generated from enum value: SPAM = 1;
     */
    SPAM = 1,
    /**
     * @generated from enum value: SPAM_URL = 2;
     */
    SPAM_URL = 2
}
/**
 * @generated from enum Search.v1.AttackType
 */
export declare enum AttackType {
    /**
     * @generated from enum value: ATTACK_TYPE_UNSPECIFIED = 0;
     */
    ATTACK_TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: METADATA = 1;
     */
    METADATA = 1,
    /**
     * @generated from enum value: INORGANIC_VOLUME = 2;
     */
    INORGANIC_VOLUME = 2,
    /**
     * @generated from enum value: AIRDROP_PATTERN = 3;
     */
    AIRDROP_PATTERN = 3,
    /**
     * @generated from enum value: DYNAMIC_ANALYSIS = 4;
     */
    DYNAMIC_ANALYSIS = 4,
    /**
     * @generated from enum value: STATIC_CODE_SIGNATURE = 5;
     */
    STATIC_CODE_SIGNATURE = 5,
    /**
     * @generated from enum value: KNOWN_MALICIOUS = 6;
     */
    KNOWN_MALICIOUS = 6,
    /**
     * @generated from enum value: IMPERSONATOR = 7;
     */
    IMPERSONATOR = 7,
    /**
     * @generated from enum value: UNSTABLE_TOKEN_PRICE = 8;
     */
    UNSTABLE_TOKEN_PRICE = 8,
    /**
     * @generated from enum value: RUGPULL = 9;
     */
    RUGPULL = 9,
    /**
     * @generated from enum value: HIGH_FEES = 10;
     */
    HIGH_FEES = 10
}
/**
 * @generated from message Search.v1.SearchTokensRequest
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
     * @generated from field: Search.v1.SearchType search_type = 3;
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
    /**
     * @generated from field: bool prioritize_svm = 6;
     */
    prioritizeSvm: boolean;
    /**
     * @generated from field: bool multichain = 7;
     */
    multichain: boolean;
    constructor(data?: PartialMessage<SearchTokensRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.SearchTokensRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchTokensRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchTokensRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchTokensRequest;
    static equals(a: SearchTokensRequest | PlainMessage<SearchTokensRequest> | undefined, b: SearchTokensRequest | PlainMessage<SearchTokensRequest> | undefined): boolean;
}
/**
 * @generated from message Search.v1.SearchTokensResponse
 */
export declare class SearchTokensResponse extends Message<SearchTokensResponse> {
    /**
     * @generated from field: repeated Search.v1.Token tokens = 1;
     */
    tokens: Token[];
    /**
     * @generated from field: repeated Search.v1.Pool pools = 2;
     */
    pools: Pool[];
    /**
     * @generated from field: repeated Search.v1.MultichainToken multichain_tokens = 3;
     */
    multichainTokens: MultichainToken[];
    constructor(data?: PartialMessage<SearchTokensResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.SearchTokensResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchTokensResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchTokensResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchTokensResponse;
    static equals(a: SearchTokensResponse | PlainMessage<SearchTokensResponse> | undefined, b: SearchTokensResponse | PlainMessage<SearchTokensResponse> | undefined): boolean;
}
/**
 * @generated from message Search.v1.Token
 */
export declare class Token extends Message<Token> {
    /**
     * @generated from field: string token_id = 1;
     */
    tokenId: string;
    /**
     * @generated from field: uint32 chain_id = 2;
     */
    chainId: number;
    /**
     * @generated from field: string address = 3;
     */
    address: string;
    /**
     * @generated from field: uint32 decimals = 4;
     */
    decimals: number;
    /**
     * @generated from field: string symbol = 5;
     */
    symbol: string;
    /**
     * @generated from field: string name = 6;
     */
    name: string;
    /**
     * @generated from field: string standard = 7;
     */
    standard: string;
    /**
     * @generated from field: string project_name = 8;
     */
    projectName: string;
    /**
     * @generated from field: string logo_url = 9;
     */
    logoUrl: string;
    /**
     * @generated from field: string is_spam = 10;
     */
    isSpam: string;
    /**
     * @generated from field: string safety_level = 11;
     */
    safetyLevel: string;
    /**
     * @generated from field: Search.v1.SpamCode spam_code = 12;
     */
    spamCode: SpamCode;
    /**
     * @generated from field: Search.v1.FeeData fee_data = 13;
     */
    feeData?: FeeData;
    /**
     * @generated from field: Search.v1.TokenProtectionInfo protection_info = 14;
     */
    protectionInfo?: TokenProtectionInfo;
    constructor(data?: PartialMessage<Token>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.Token";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Token;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Token;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Token;
    static equals(a: Token | PlainMessage<Token> | undefined, b: Token | PlainMessage<Token> | undefined): boolean;
}
/**
 * @generated from message Search.v1.ChainToken
 */
export declare class ChainToken extends Message<ChainToken> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: uint32 decimals = 3;
     */
    decimals: number;
    /**
     * @generated from field: string safety_level = 4;
     */
    safetyLevel: string;
    /**
     * @generated from field: Search.v1.SpamCode spam_code = 5;
     */
    spamCode: SpamCode;
    /**
     * @generated from field: string is_spam = 6;
     */
    isSpam: string;
    /**
     * @generated from field: Search.v1.FeeData fee_data = 7;
     */
    feeData?: FeeData;
    /**
     * @generated from field: Search.v1.TokenProtectionInfo protection_info = 8;
     */
    protectionInfo?: TokenProtectionInfo;
    constructor(data?: PartialMessage<ChainToken>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.ChainToken";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainToken;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainToken;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainToken;
    static equals(a: ChainToken | PlainMessage<ChainToken> | undefined, b: ChainToken | PlainMessage<ChainToken> | undefined): boolean;
}
/**
 * @generated from message Search.v1.MultichainToken
 */
export declare class MultichainToken extends Message<MultichainToken> {
    /**
     * @generated from field: string multichain_id = 1;
     */
    multichainId: string;
    /**
     * @generated from field: string symbol = 2;
     */
    symbol: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string standard = 4;
     */
    standard: string;
    /**
     * @generated from field: string project_name = 5;
     */
    projectName: string;
    /**
     * @generated from field: string logo_url = 6;
     */
    logoUrl: string;
    /**
     * @generated from field: string safety_level = 7;
     */
    safetyLevel: string;
    /**
     * @generated from field: Search.v1.SpamCode spam_code = 8;
     */
    spamCode: SpamCode;
    /**
     * @generated from field: string is_spam = 9;
     */
    isSpam: string;
    /**
     * @generated from field: Search.v1.FeeData fee_data = 10;
     */
    feeData?: FeeData;
    /**
     * @generated from field: Search.v1.TokenProtectionInfo protection_info = 11;
     */
    protectionInfo?: TokenProtectionInfo;
    /**
     * @generated from field: repeated Search.v1.ChainToken chain_tokens = 12;
     */
    chainTokens: ChainToken[];
    constructor(data?: PartialMessage<MultichainToken>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.MultichainToken";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MultichainToken;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MultichainToken;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MultichainToken;
    static equals(a: MultichainToken | PlainMessage<MultichainToken> | undefined, b: MultichainToken | PlainMessage<MultichainToken> | undefined): boolean;
}
/**
 * @generated from message Search.v1.FeeData
 */
export declare class FeeData extends Message<FeeData> {
    /**
     * @generated from field: string sell_fee_bps = 1;
     */
    sellFeeBps: string;
    /**
     * @generated from field: string buy_fee_bps = 2;
     */
    buyFeeBps: string;
    /**
     * @generated from field: bool fee_taken_on_transfer = 3;
     */
    feeTakenOnTransfer: boolean;
    /**
     * @generated from field: bool external_transfer_failed = 4;
     */
    externalTransferFailed: boolean;
    /**
     * @generated from field: bool sell_reverted = 5;
     */
    sellReverted: boolean;
    constructor(data?: PartialMessage<FeeData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.FeeData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeData;
    static equals(a: FeeData | PlainMessage<FeeData> | undefined, b: FeeData | PlainMessage<FeeData> | undefined): boolean;
}
/**
 * @generated from message Search.v1.BlockaidFees
 */
export declare class BlockaidFees extends Message<BlockaidFees> {
    /**
     * @generated from field: double transfer = 1;
     */
    transfer: number;
    /**
     * @generated from field: double buy = 2;
     */
    buy: number;
    /**
     * @generated from field: double sell = 3;
     */
    sell: number;
    constructor(data?: PartialMessage<BlockaidFees>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.BlockaidFees";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockaidFees;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockaidFees;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockaidFees;
    static equals(a: BlockaidFees | PlainMessage<BlockaidFees> | undefined, b: BlockaidFees | PlainMessage<BlockaidFees> | undefined): boolean;
}
/**
 * @generated from message Search.v1.TokenProtectionInfo
 */
export declare class TokenProtectionInfo extends Message<TokenProtectionInfo> {
    /**
     * @generated from field: string result = 1;
     */
    result: string;
    /**
     * @generated from field: string token_id = 2;
     */
    tokenId: string;
    /**
     * @generated from field: uint32 chain_id = 3;
     */
    chainId: number;
    /**
     * @generated from field: repeated string attack_types = 4;
     */
    attackTypes: string[];
    /**
     * @generated from field: string address = 5;
     */
    address: string;
    /**
     * @generated from field: Search.v1.BlockaidFees blockaid_fees = 6;
     */
    blockaidFees?: BlockaidFees;
    /**
     * @generated from field: uint32 updated_at = 7;
     */
    updatedAt: number;
    /**
     * @generated from field: Search.v1.FeeData fee_data = 8;
     */
    feeData?: FeeData;
    constructor(data?: PartialMessage<TokenProtectionInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.TokenProtectionInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenProtectionInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenProtectionInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenProtectionInfo;
    static equals(a: TokenProtectionInfo | PlainMessage<TokenProtectionInfo> | undefined, b: TokenProtectionInfo | PlainMessage<TokenProtectionInfo> | undefined): boolean;
}
/**
 * @generated from message Search.v1.PoolTokenData
 */
export declare class PoolTokenData extends Message<PoolTokenData> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: string symbol = 3;
     */
    symbol: string;
    /**
     * @generated from field: string name = 4;
     */
    name: string;
    /**
     * @generated from field: uint32 decimals = 5;
     */
    decimals: number;
    /**
     * @generated from field: string logo_url = 6;
     */
    logoUrl: string;
    constructor(data?: PartialMessage<PoolTokenData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.PoolTokenData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolTokenData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolTokenData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolTokenData;
    static equals(a: PoolTokenData | PlainMessage<PoolTokenData> | undefined, b: PoolTokenData | PlainMessage<PoolTokenData> | undefined): boolean;
}
/**
 * @generated from message Search.v1.Pool
 */
export declare class Pool extends Message<Pool> {
    /**
     * @generated from field: double volume_usd_24hr = 1;
     */
    volumeUsd24hr: number;
    /**
     * @generated from field: double volume_usd_12hr = 2;
     */
    volumeUsd12hr: number;
    /**
     * @generated from field: double volume_usd_6hr = 3;
     */
    volumeUsd6hr: number;
    /**
     * @generated from field: Search.v1.PoolTokenData token0 = 4;
     */
    token0?: PoolTokenData;
    /**
     * @generated from field: Search.v1.PoolTokenData token1 = 5;
     */
    token1?: PoolTokenData;
    /**
     * @generated from field: string id = 6;
     */
    id: string;
    /**
     * @generated from field: uint32 chain_id = 7;
     */
    chainId: number;
    /**
     * @generated from field: optional string hook_address = 8;
     */
    hookAddress?: string;
    /**
     * V4, V3, or V2
     *
     * @generated from field: string protocol_version = 9;
     */
    protocolVersion: string;
    /**
     * @generated from field: uint32 fee_tier = 10;
     */
    feeTier: number;
    constructor(data?: PartialMessage<Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pool;
    static equals(a: Pool | PlainMessage<Pool> | undefined, b: Pool | PlainMessage<Pool> | undefined): boolean;
}
/**
 * @generated from message Search.v1.IndexPoolsRequest
 */
export declare class IndexPoolsRequest extends Message<IndexPoolsRequest> {
    /**
     * @generated from field: repeated Search.v1.Pool pools = 1;
     */
    pools: Pool[];
    constructor(data?: PartialMessage<IndexPoolsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.IndexPoolsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IndexPoolsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IndexPoolsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IndexPoolsRequest;
    static equals(a: IndexPoolsRequest | PlainMessage<IndexPoolsRequest> | undefined, b: IndexPoolsRequest | PlainMessage<IndexPoolsRequest> | undefined): boolean;
}
/**
 * @generated from message Search.v1.IndexPoolsResponse
 */
export declare class IndexPoolsResponse extends Message<IndexPoolsResponse> {
    constructor(data?: PartialMessage<IndexPoolsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.IndexPoolsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IndexPoolsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IndexPoolsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IndexPoolsResponse;
    static equals(a: IndexPoolsResponse | PlainMessage<IndexPoolsResponse> | undefined, b: IndexPoolsResponse | PlainMessage<IndexPoolsResponse> | undefined): boolean;
}
/**
 * @generated from message Search.v1.DeletePoolsRequest
 */
export declare class DeletePoolsRequest extends Message<DeletePoolsRequest> {
    /**
     * @generated from field: repeated string pool_ids = 1;
     */
    poolIds: string[];
    constructor(data?: PartialMessage<DeletePoolsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.DeletePoolsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePoolsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePoolsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePoolsRequest;
    static equals(a: DeletePoolsRequest | PlainMessage<DeletePoolsRequest> | undefined, b: DeletePoolsRequest | PlainMessage<DeletePoolsRequest> | undefined): boolean;
}
/**
 * @generated from message Search.v1.DeletePoolsResponse
 */
export declare class DeletePoolsResponse extends Message<DeletePoolsResponse> {
    constructor(data?: PartialMessage<DeletePoolsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "Search.v1.DeletePoolsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePoolsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePoolsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePoolsResponse;
    static equals(a: DeletePoolsResponse | PlainMessage<DeletePoolsResponse> | undefined, b: DeletePoolsResponse | PlainMessage<DeletePoolsResponse> | undefined): boolean;
}
