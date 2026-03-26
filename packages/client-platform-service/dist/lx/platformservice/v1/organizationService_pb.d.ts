import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message uniswap.platformservice.v1.OrganizationServiceError
 */
export declare class OrganizationServiceError extends Message<OrganizationServiceError> {
    /**
     * @generated from field: uniswap.platformservice.v1.OrganizationServiceError.Code code = 1;
     */
    code: OrganizationServiceError_Code;
    constructor(data?: PartialMessage<OrganizationServiceError>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.OrganizationServiceError";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrganizationServiceError;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrganizationServiceError;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrganizationServiceError;
    static equals(a: OrganizationServiceError | PlainMessage<OrganizationServiceError> | undefined, b: OrganizationServiceError | PlainMessage<OrganizationServiceError> | undefined): boolean;
}
/**
 * @generated from enum uniswap.platformservice.v1.OrganizationServiceError.Code
 */
export declare enum OrganizationServiceError_Code {
    /**
     * @generated from enum value: ORGANIZATION_ERROR_UNSPECIFIED = 0;
     */
    ORGANIZATION_ERROR_UNSPECIFIED = 0,
    /**
     * @generated from enum value: USER_ALREADY_BELONGS_TO_ORGANIZATION = 1;
     */
    USER_ALREADY_BELONGS_TO_ORGANIZATION = 1,
    /**
     * @generated from enum value: ORG_USER_ID_REQUIRED = 2;
     */
    ORG_USER_ID_REQUIRED = 2,
    /**
     * @generated from enum value: ORG_USER_NOT_FOUND = 3;
     */
    ORG_USER_NOT_FOUND = 3,
    /**
     * @generated from enum value: USER_HAS_NO_ORGANIZATION = 4;
     */
    USER_HAS_NO_ORGANIZATION = 4,
    /**
     * @generated from enum value: ORGANIZATION_NOT_FOUND = 5;
     */
    ORGANIZATION_NOT_FOUND = 5
}
/**
 * @generated from message uniswap.platformservice.v1.CreateOrganizationRequest
 */
export declare class CreateOrganizationRequest extends Message<CreateOrganizationRequest> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    constructor(data?: PartialMessage<CreateOrganizationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.CreateOrganizationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrganizationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrganizationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrganizationRequest;
    static equals(a: CreateOrganizationRequest | PlainMessage<CreateOrganizationRequest> | undefined, b: CreateOrganizationRequest | PlainMessage<CreateOrganizationRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.CreateOrganizationResponse
 */
export declare class CreateOrganizationResponse extends Message<CreateOrganizationResponse> {
    /**
     * @generated from field: optional uniswap.platformservice.v1.OrganizationServiceError error = 1;
     */
    error?: OrganizationServiceError;
    constructor(data?: PartialMessage<CreateOrganizationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.CreateOrganizationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrganizationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrganizationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrganizationResponse;
    static equals(a: CreateOrganizationResponse | PlainMessage<CreateOrganizationResponse> | undefined, b: CreateOrganizationResponse | PlainMessage<CreateOrganizationResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.GetOrganizationRequest
 */
export declare class GetOrganizationRequest extends Message<GetOrganizationRequest> {
    constructor(data?: PartialMessage<GetOrganizationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.GetOrganizationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationRequest;
    static equals(a: GetOrganizationRequest | PlainMessage<GetOrganizationRequest> | undefined, b: GetOrganizationRequest | PlainMessage<GetOrganizationRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.GetOrganizationResponse
 */
export declare class GetOrganizationResponse extends Message<GetOrganizationResponse> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: int32 max_api_keys = 3;
     */
    maxApiKeys: number;
    /**
     * @generated from field: string created_at = 4;
     */
    createdAt: string;
    /**
     * True if organization has no more active users
     *
     * @generated from field: optional bool archived = 5;
     */
    archived?: boolean;
    /**
     * @generated from field: optional uniswap.platformservice.v1.OrganizationServiceError error = 6;
     */
    error?: OrganizationServiceError;
    constructor(data?: PartialMessage<GetOrganizationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.GetOrganizationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationResponse;
    static equals(a: GetOrganizationResponse | PlainMessage<GetOrganizationResponse> | undefined, b: GetOrganizationResponse | PlainMessage<GetOrganizationResponse> | undefined): boolean;
}
