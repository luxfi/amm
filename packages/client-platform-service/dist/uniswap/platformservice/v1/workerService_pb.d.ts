import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Location Update Request
 *
 * @generated from message uniswap.platformservice.v1.LocationUpdateS3Request
 */
export declare class LocationUpdateS3Request extends Message<LocationUpdateS3Request> {
    constructor(data?: PartialMessage<LocationUpdateS3Request>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.LocationUpdateS3Request";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationUpdateS3Request;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationUpdateS3Request;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationUpdateS3Request;
    static equals(a: LocationUpdateS3Request | PlainMessage<LocationUpdateS3Request> | undefined, b: LocationUpdateS3Request | PlainMessage<LocationUpdateS3Request> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.LocationUpdateS3Response
 */
export declare class LocationUpdateS3Response extends Message<LocationUpdateS3Response> {
    constructor(data?: PartialMessage<LocationUpdateS3Response>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.LocationUpdateS3Response";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LocationUpdateS3Response;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LocationUpdateS3Response;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LocationUpdateS3Response;
    static equals(a: LocationUpdateS3Response | PlainMessage<LocationUpdateS3Response> | undefined, b: LocationUpdateS3Response | PlainMessage<LocationUpdateS3Response> | undefined): boolean;
}
/**
 * Rate limit configuration
 *
 * @generated from message uniswap.platformservice.v1.WorkerRateLimitConfig
 */
export declare class WorkerRateLimitConfig extends Message<WorkerRateLimitConfig> {
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
    constructor(data?: PartialMessage<WorkerRateLimitConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.WorkerRateLimitConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WorkerRateLimitConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WorkerRateLimitConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WorkerRateLimitConfig;
    static equals(a: WorkerRateLimitConfig | PlainMessage<WorkerRateLimitConfig> | undefined, b: WorkerRateLimitConfig | PlainMessage<WorkerRateLimitConfig> | undefined): boolean;
}
/**
 * Create API Key request/response
 *
 * @generated from message uniswap.platformservice.v1.MigrateExistingApikeyRequest
 */
export declare class MigrateExistingApikeyRequest extends Message<MigrateExistingApikeyRequest> {
    /**
     * @generated from field: string api_key = 1;
     */
    apiKey: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string creation_date = 3;
     */
    creationDate: string;
    /**
     * @generated from field: uniswap.platformservice.v1.WorkerRateLimitConfig rate_limit_config = 4;
     */
    rateLimitConfig?: WorkerRateLimitConfig;
    constructor(data?: PartialMessage<MigrateExistingApikeyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.MigrateExistingApikeyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateExistingApikeyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateExistingApikeyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateExistingApikeyRequest;
    static equals(a: MigrateExistingApikeyRequest | PlainMessage<MigrateExistingApikeyRequest> | undefined, b: MigrateExistingApikeyRequest | PlainMessage<MigrateExistingApikeyRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.MigrateExistingApikeyResponse
 */
export declare class MigrateExistingApikeyResponse extends Message<MigrateExistingApikeyResponse> {
    /**
     * @generated from field: string hashed_api_key = 1;
     */
    hashedApiKey: string;
    constructor(data?: PartialMessage<MigrateExistingApikeyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.MigrateExistingApikeyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateExistingApikeyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateExistingApikeyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateExistingApikeyResponse;
    static equals(a: MigrateExistingApikeyResponse | PlainMessage<MigrateExistingApikeyResponse> | undefined, b: MigrateExistingApikeyResponse | PlainMessage<MigrateExistingApikeyResponse> | undefined): boolean;
}
