import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * API Key Tier
 *
 * @generated from enum uniswap.platformservice.v1.ApiKeyTier
 */
export declare enum ApiKeyTier {
    /**
     * @generated from enum value: API_KEY_TIER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: API_KEY_TIER_INTERNAL = 1;
     */
    INTERNAL = 1,
    /**
     * @generated from enum value: API_KEY_TIER_PARTNER = 2;
     */
    PARTNER = 2,
    /**
     * @generated from enum value: API_KEY_TIER_DEV_PORTAL = 3;
     */
    DEV_PORTAL = 3
}
/**
 * Application error codes for the API Key service (dev portal / API clients).
 * FE uses code only; no message field to avoid leaking sensitive information.
 *
 * @generated from message uniswap.platformservice.v1.ApiKeyServiceError
 */
export declare class ApiKeyServiceError extends Message<ApiKeyServiceError> {
    /**
     * @generated from field: uniswap.platformservice.v1.ApiKeyServiceError.Code code = 1;
     */
    code: ApiKeyServiceError_Code;
    constructor(data?: PartialMessage<ApiKeyServiceError>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ApiKeyServiceError";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ApiKeyServiceError;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ApiKeyServiceError;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ApiKeyServiceError;
    static equals(a: ApiKeyServiceError | PlainMessage<ApiKeyServiceError> | undefined, b: ApiKeyServiceError | PlainMessage<ApiKeyServiceError> | undefined): boolean;
}
/**
 * @generated from enum uniswap.platformservice.v1.ApiKeyServiceError.Code
 */
export declare enum ApiKeyServiceError_Code {
    /**
     * @generated from enum value: API_KEY_ERROR_UNSPECIFIED = 0;
     */
    API_KEY_ERROR_UNSPECIFIED = 0,
    /**
     * @generated from enum value: INVALID_REQUEST = 1;
     */
    INVALID_REQUEST = 1,
    /**
     * @generated from enum value: ORGANIZATION_KEY_LIMIT_REACHED = 10;
     */
    ORGANIZATION_KEY_LIMIT_REACHED = 10,
    /**
     * @generated from enum value: UNAUTHORIZED_ACCESS = 11;
     */
    UNAUTHORIZED_ACCESS = 11,
    /**
     * @generated from enum value: API_KEY_NOT_ACTIVE = 20;
     */
    API_KEY_NOT_ACTIVE = 20,
    /**
     * @generated from enum value: API_KEY_NOT_FOUND = 40;
     */
    API_KEY_NOT_FOUND = 40
}
/**
 * Rate limit configuration
 *
 * @generated from message uniswap.platformservice.v1.RateLimitConfig
 */
export declare class RateLimitConfig extends Message<RateLimitConfig> {
    /**
     * period_ms defines the time window in milliseconds for the rate limit
     * For example: 60000 means a 1-minute window
     * If you want to limit "X requests per minute", set this to 60000
     *
     * @generated from field: int32 period_ms = 1;
     */
    periodMs: number;
    /**
     * units defines the number of requests allowed per time period
     * For example: if period_ms=60000 and units=100, this means
     * the user can make 100 requests every minute
     *
     * @generated from field: int32 units = 2;
     */
    units: number;
    /**
     * capacity defines the maximum number of requests that can be made at once
     * This acts as a hard limit on burst requests
     * For example: if capacity=200, even if the user hasn't made requests for a while,
     * they can't make more than 200 requests at once
     *
     * @generated from field: int32 capacity = 3;
     */
    capacity: number;
    constructor(data?: PartialMessage<RateLimitConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.RateLimitConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RateLimitConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RateLimitConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RateLimitConfig;
    static equals(a: RateLimitConfig | PlainMessage<RateLimitConfig> | undefined, b: RateLimitConfig | PlainMessage<RateLimitConfig> | undefined): boolean;
}
/**
 * Introspect request/response
 *
 * @generated from message uniswap.platformservice.v1.IntrospectRequest
 */
export declare class IntrospectRequest extends Message<IntrospectRequest> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    constructor(data?: PartialMessage<IntrospectRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.IntrospectRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntrospectRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntrospectRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntrospectRequest;
    static equals(a: IntrospectRequest | PlainMessage<IntrospectRequest> | undefined, b: IntrospectRequest | PlainMessage<IntrospectRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.IntrospectResponse
 */
export declare class IntrospectResponse extends Message<IntrospectResponse> {
    /**
     * @generated from field: string wrapped_id = 1;
     */
    wrappedId: string;
    /**
     * @generated from field: bool result = 2;
     */
    result: boolean;
    /**
     * @generated from field: string user_id = 3;
     */
    userId: string;
    /**
     * @generated from field: string organization_id = 4;
     */
    organizationId: string;
    /**
     * @generated from field: string analytics_id = 5;
     */
    analyticsId: string;
    /**
     * @generated from field: uniswap.platformservice.v1.ApiKeyTier tier = 6;
     */
    tier: ApiKeyTier;
    constructor(data?: PartialMessage<IntrospectResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.IntrospectResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntrospectResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntrospectResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntrospectResponse;
    static equals(a: IntrospectResponse | PlainMessage<IntrospectResponse> | undefined, b: IntrospectResponse | PlainMessage<IntrospectResponse> | undefined): boolean;
}
/**
 * Create API Key request/response
 *
 * @generated from message uniswap.platformservice.v1.CreateApiKeyRequest
 */
export declare class CreateApiKeyRequest extends Message<CreateApiKeyRequest> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: optional uniswap.platformservice.v1.RateLimitConfig rate_limit_config = 2;
     */
    rateLimitConfig?: RateLimitConfig;
    constructor(data?: PartialMessage<CreateApiKeyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.CreateApiKeyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateApiKeyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateApiKeyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateApiKeyRequest;
    static equals(a: CreateApiKeyRequest | PlainMessage<CreateApiKeyRequest> | undefined, b: CreateApiKeyRequest | PlainMessage<CreateApiKeyRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.CreateApiKeyResponse
 */
export declare class CreateApiKeyResponse extends Message<CreateApiKeyResponse> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string wrapped_id = 2;
     */
    wrappedId: string;
    /**
     * When set, request failed with this application error (frontend can parse directly).
     *
     * @generated from field: optional uniswap.platformservice.v1.ApiKeyServiceError error = 3;
     */
    error?: ApiKeyServiceError;
    constructor(data?: PartialMessage<CreateApiKeyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.CreateApiKeyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateApiKeyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateApiKeyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateApiKeyResponse;
    static equals(a: CreateApiKeyResponse | PlainMessage<CreateApiKeyResponse> | undefined, b: CreateApiKeyResponse | PlainMessage<CreateApiKeyResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.ModificationData
 */
export declare class ModificationData extends Message<ModificationData> {
    /**
     * @generated from field: optional bool active = 1;
     */
    active?: boolean;
    /**
     * @generated from field: optional uniswap.platformservice.v1.RateLimitConfig rate_limit_config = 2;
     */
    rateLimitConfig?: RateLimitConfig;
    /**
     * @generated from field: optional string name = 3;
     */
    name?: string;
    constructor(data?: PartialMessage<ModificationData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ModificationData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModificationData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModificationData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModificationData;
    static equals(a: ModificationData | PlainMessage<ModificationData> | undefined, b: ModificationData | PlainMessage<ModificationData> | undefined): boolean;
}
/**
 * Modify API Key request/response
 *
 * @generated from message uniswap.platformservice.v1.ModifyApiKeyRequest
 */
export declare class ModifyApiKeyRequest extends Message<ModifyApiKeyRequest> {
    /**
     * we are using hashed api key because during list operation, user will only see hashed api key
     *
     * @generated from field: string identifier = 1;
     */
    identifier: string;
    /**
     * @generated from field: uniswap.platformservice.v1.ModificationData modification_data = 2;
     */
    modificationData?: ModificationData;
    constructor(data?: PartialMessage<ModifyApiKeyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ModifyApiKeyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModifyApiKeyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModifyApiKeyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModifyApiKeyRequest;
    static equals(a: ModifyApiKeyRequest | PlainMessage<ModifyApiKeyRequest> | undefined, b: ModifyApiKeyRequest | PlainMessage<ModifyApiKeyRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.ModifyApiKeyResponse
 */
export declare class ModifyApiKeyResponse extends Message<ModifyApiKeyResponse> {
    /**
     * @generated from field: optional uniswap.platformservice.v1.ApiKeyServiceError error = 1;
     */
    error?: ApiKeyServiceError;
    constructor(data?: PartialMessage<ModifyApiKeyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ModifyApiKeyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModifyApiKeyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModifyApiKeyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModifyApiKeyResponse;
    static equals(a: ModifyApiKeyResponse | PlainMessage<ModifyApiKeyResponse> | undefined, b: ModifyApiKeyResponse | PlainMessage<ModifyApiKeyResponse> | undefined): boolean;
}
/**
 * Delete API Key request/response
 *
 * @generated from message uniswap.platformservice.v1.DeleteApiKeyRequest
 */
export declare class DeleteApiKeyRequest extends Message<DeleteApiKeyRequest> {
    /**
     * we are using hashed api key because during list operation, user will only see hashed api key
     *
     * @generated from field: string identifier = 1;
     */
    identifier: string;
    constructor(data?: PartialMessage<DeleteApiKeyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.DeleteApiKeyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteApiKeyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteApiKeyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteApiKeyRequest;
    static equals(a: DeleteApiKeyRequest | PlainMessage<DeleteApiKeyRequest> | undefined, b: DeleteApiKeyRequest | PlainMessage<DeleteApiKeyRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.DeleteApiKeyResponse
 */
export declare class DeleteApiKeyResponse extends Message<DeleteApiKeyResponse> {
    /**
     * @generated from field: optional uniswap.platformservice.v1.ApiKeyServiceError error = 1;
     */
    error?: ApiKeyServiceError;
    constructor(data?: PartialMessage<DeleteApiKeyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.DeleteApiKeyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteApiKeyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteApiKeyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteApiKeyResponse;
    static equals(a: DeleteApiKeyResponse | PlainMessage<DeleteApiKeyResponse> | undefined, b: DeleteApiKeyResponse | PlainMessage<DeleteApiKeyResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.ApiKeyDataStruct
 */
export declare class ApiKeyDataStruct extends Message<ApiKeyDataStruct> {
    /**
     * @generated from field: optional string organization_id = 2;
     */
    organizationId?: string;
    /**
     * @generated from field: string hashed_api_key = 3;
     */
    hashedApiKey: string;
    /**
     * @generated from field: optional string raw_key = 4;
     */
    rawKey?: string;
    /**
     * @generated from field: string name = 5;
     */
    name: string;
    /**
     * @generated from field: bool active = 6;
     */
    active: boolean;
    /**
     * @generated from field: uniswap.platformservice.v1.RateLimitConfig rate_limit_config = 7;
     */
    rateLimitConfig?: RateLimitConfig;
    /**
     * @generated from field: google.protobuf.Timestamp last_modified_at = 8;
     */
    lastModifiedAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp creation_time = 9;
     */
    creationTime?: Timestamp;
    constructor(data?: PartialMessage<ApiKeyDataStruct>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ApiKeyDataStruct";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ApiKeyDataStruct;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ApiKeyDataStruct;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ApiKeyDataStruct;
    static equals(a: ApiKeyDataStruct | PlainMessage<ApiKeyDataStruct> | undefined, b: ApiKeyDataStruct | PlainMessage<ApiKeyDataStruct> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.ListApiKeyRequest
 */
export declare class ListApiKeyRequest extends Message<ListApiKeyRequest> {
    /**
     * @generated from field: bool include_raw_keys = 1;
     */
    includeRawKeys: boolean;
    constructor(data?: PartialMessage<ListApiKeyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ListApiKeyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListApiKeyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListApiKeyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListApiKeyRequest;
    static equals(a: ListApiKeyRequest | PlainMessage<ListApiKeyRequest> | undefined, b: ListApiKeyRequest | PlainMessage<ListApiKeyRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.ListApiKeyResponse
 */
export declare class ListApiKeyResponse extends Message<ListApiKeyResponse> {
    /**
     * @generated from field: repeated uniswap.platformservice.v1.ApiKeyDataStruct api_key_data_list = 1;
     */
    apiKeyDataList: ApiKeyDataStruct[];
    /**
     * @generated from field: optional uniswap.platformservice.v1.ApiKeyServiceError error = 2;
     */
    error?: ApiKeyServiceError;
    constructor(data?: PartialMessage<ListApiKeyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ListApiKeyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListApiKeyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListApiKeyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListApiKeyResponse;
    static equals(a: ListApiKeyResponse | PlainMessage<ListApiKeyResponse> | undefined, b: ListApiKeyResponse | PlainMessage<ListApiKeyResponse> | undefined): boolean;
}
/**
 * Internal Create API Key request/response (VPN-restricted admin endpoint)
 *
 * @generated from message uniswap.platformservice.v1.InternalCreateApiKeyRequest
 */
export declare class InternalCreateApiKeyRequest extends Message<InternalCreateApiKeyRequest> {
    /**
     * @generated from field: string organization_id = 1;
     */
    organizationId: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: optional uniswap.platformservice.v1.RateLimitConfig rate_limit_config = 3;
     */
    rateLimitConfig?: RateLimitConfig;
    /**
     * @generated from field: uniswap.platformservice.v1.ApiKeyTier tier = 4;
     */
    tier: ApiKeyTier;
    constructor(data?: PartialMessage<InternalCreateApiKeyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.InternalCreateApiKeyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InternalCreateApiKeyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InternalCreateApiKeyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InternalCreateApiKeyRequest;
    static equals(a: InternalCreateApiKeyRequest | PlainMessage<InternalCreateApiKeyRequest> | undefined, b: InternalCreateApiKeyRequest | PlainMessage<InternalCreateApiKeyRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.InternalCreateApiKeyResponse
 */
export declare class InternalCreateApiKeyResponse extends Message<InternalCreateApiKeyResponse> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string wrapped_id = 2;
     */
    wrappedId: string;
    constructor(data?: PartialMessage<InternalCreateApiKeyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.InternalCreateApiKeyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InternalCreateApiKeyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InternalCreateApiKeyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InternalCreateApiKeyResponse;
    static equals(a: InternalCreateApiKeyResponse | PlainMessage<InternalCreateApiKeyResponse> | undefined, b: InternalCreateApiKeyResponse | PlainMessage<InternalCreateApiKeyResponse> | undefined): boolean;
}
/**
 * Internal Modify API Key request/response (VPN-restricted admin endpoint)
 *
 * @generated from message uniswap.platformservice.v1.InternalModifyApiKeyRequest
 */
export declare class InternalModifyApiKeyRequest extends Message<InternalModifyApiKeyRequest> {
    /**
     * user email to look up their organization
     *
     * @generated from field: string email = 1;
     */
    email: string;
    /**
     * api key name to identify the key within the org
     *
     * @generated from field: string api_key_name = 2;
     */
    apiKeyName: string;
    /**
     * required
     *
     * @generated from field: uniswap.platformservice.v1.RateLimitConfig rate_limit_config = 3;
     */
    rateLimitConfig?: RateLimitConfig;
    constructor(data?: PartialMessage<InternalModifyApiKeyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.InternalModifyApiKeyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InternalModifyApiKeyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InternalModifyApiKeyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InternalModifyApiKeyRequest;
    static equals(a: InternalModifyApiKeyRequest | PlainMessage<InternalModifyApiKeyRequest> | undefined, b: InternalModifyApiKeyRequest | PlainMessage<InternalModifyApiKeyRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.InternalModifyApiKeyResponse
 */
export declare class InternalModifyApiKeyResponse extends Message<InternalModifyApiKeyResponse> {
    constructor(data?: PartialMessage<InternalModifyApiKeyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.InternalModifyApiKeyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InternalModifyApiKeyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InternalModifyApiKeyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InternalModifyApiKeyResponse;
    static equals(a: InternalModifyApiKeyResponse | PlainMessage<InternalModifyApiKeyResponse> | undefined, b: InternalModifyApiKeyResponse | PlainMessage<InternalModifyApiKeyResponse> | undefined): boolean;
}
