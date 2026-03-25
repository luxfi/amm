import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message uniswap.platformservice.v1.UserServiceError
 */
export declare class UserServiceError extends Message<UserServiceError> {
    /**
     * @generated from field: uniswap.platformservice.v1.UserServiceError.Code code = 1;
     */
    code: UserServiceError_Code;
    constructor(data?: PartialMessage<UserServiceError>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.UserServiceError";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserServiceError;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserServiceError;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserServiceError;
    static equals(a: UserServiceError | PlainMessage<UserServiceError> | undefined, b: UserServiceError | PlainMessage<UserServiceError> | undefined): boolean;
}
/**
 * @generated from enum uniswap.platformservice.v1.UserServiceError.Code
 */
export declare enum UserServiceError_Code {
    /**
     * @generated from enum value: USER_ERROR_UNSPECIFIED = 0;
     */
    USER_ERROR_UNSPECIFIED = 0,
    /**
     * @generated from enum value: EMAIL_INVALID = 1;
     */
    EMAIL_INVALID = 1,
    /**
     * @generated from enum value: USER_ALREADY_EXISTS = 2;
     */
    USER_ALREADY_EXISTS = 2,
    /**
     * @generated from enum value: USER_NOT_FOUND = 3;
     */
    USER_NOT_FOUND = 3
}
/**
 * Represents an agreement
 *
 * @generated from message uniswap.platformservice.v1.Agreement
 */
export declare class Agreement extends Message<Agreement> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string version = 2;
     */
    version: string;
    /**
     * Timestamp when the user agreed (milliseconds since epoch). If present and non-zero, the user has agreed.
     *
     * @generated from field: optional int64 agreed_at = 3;
     */
    agreedAt?: bigint;
    constructor(data?: PartialMessage<Agreement>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.Agreement";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Agreement;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Agreement;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Agreement;
    static equals(a: Agreement | PlainMessage<Agreement> | undefined, b: Agreement | PlainMessage<Agreement> | undefined): boolean;
}
/**
 * Request to create a new user
 *
 * @generated from message uniswap.platformservice.v1.CreateUserRequest
 */
export declare class CreateUserRequest extends Message<CreateUserRequest> {
    /**
     * User's email address (required)
     *
     * @generated from field: string email = 1;
     */
    email: string;
    constructor(data?: PartialMessage<CreateUserRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.CreateUserRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateUserRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateUserRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateUserRequest;
    static equals(a: CreateUserRequest | PlainMessage<CreateUserRequest> | undefined, b: CreateUserRequest | PlainMessage<CreateUserRequest> | undefined): boolean;
}
/**
 * Response for create user
 *
 * @generated from message uniswap.platformservice.v1.CreateUserResponse
 */
export declare class CreateUserResponse extends Message<CreateUserResponse> {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: optional uniswap.platformservice.v1.UserServiceError error = 2;
     */
    error?: UserServiceError;
    constructor(data?: PartialMessage<CreateUserResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.CreateUserResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateUserResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateUserResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateUserResponse;
    static equals(a: CreateUserResponse | PlainMessage<CreateUserResponse> | undefined, b: CreateUserResponse | PlainMessage<CreateUserResponse> | undefined): boolean;
}
/**
 * Request to modify an existing user
 *
 * @generated from message uniswap.platformservice.v1.ModifyUserRequest
 */
export declare class ModifyUserRequest extends Message<ModifyUserRequest> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * Multiple agreements can be updated at once
     *
     * @generated from field: repeated uniswap.platformservice.v1.Agreement agreements = 2;
     */
    agreements: Agreement[];
    /**
     * Organization ID (optional, for linking user to org)
     *
     * @generated from field: optional string org_id = 3;
     */
    orgId?: string;
    constructor(data?: PartialMessage<ModifyUserRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ModifyUserRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModifyUserRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModifyUserRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModifyUserRequest;
    static equals(a: ModifyUserRequest | PlainMessage<ModifyUserRequest> | undefined, b: ModifyUserRequest | PlainMessage<ModifyUserRequest> | undefined): boolean;
}
/**
 * Response for modify user
 *
 * @generated from message uniswap.platformservice.v1.ModifyUserResponse
 */
export declare class ModifyUserResponse extends Message<ModifyUserResponse> {
    /**
     * @generated from field: optional uniswap.platformservice.v1.UserServiceError error = 1;
     */
    error?: UserServiceError;
    constructor(data?: PartialMessage<ModifyUserResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ModifyUserResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModifyUserResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModifyUserResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModifyUserResponse;
    static equals(a: ModifyUserResponse | PlainMessage<ModifyUserResponse> | undefined, b: ModifyUserResponse | PlainMessage<ModifyUserResponse> | undefined): boolean;
}
/**
 * Request to get user details
 *
 * @generated from message uniswap.platformservice.v1.GetUserRequest
 */
export declare class GetUserRequest extends Message<GetUserRequest> {
    constructor(data?: PartialMessage<GetUserRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.GetUserRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserRequest;
    static equals(a: GetUserRequest | PlainMessage<GetUserRequest> | undefined, b: GetUserRequest | PlainMessage<GetUserRequest> | undefined): boolean;
}
/**
 * Represents a user's basic information
 *
 * @generated from message uniswap.platformservice.v1.User
 */
export declare class User extends Message<User> {
    /**
     * @generated from field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * @generated from field: optional string email = 3;
     */
    email?: string;
    /**
     * @generated from field: optional string org_id = 4;
     */
    orgId?: string;
    /**
     * User's agreements to terms, policies, etc.
     *
     * @generated from field: repeated uniswap.platformservice.v1.Agreement agreements = 5;
     */
    agreements: Agreement[];
    constructor(data?: PartialMessage<User>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.User";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;
    static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}
/**
 * Response for get user
 *
 * @generated from message uniswap.platformservice.v1.GetUserResponse
 */
export declare class GetUserResponse extends Message<GetUserResponse> {
    /**
     * @generated from field: uniswap.platformservice.v1.User user = 1;
     */
    user?: User;
    /**
     * @generated from field: optional uniswap.platformservice.v1.UserServiceError error = 2;
     */
    error?: UserServiceError;
    constructor(data?: PartialMessage<GetUserResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.GetUserResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserResponse;
    static equals(a: GetUserResponse | PlainMessage<GetUserResponse> | undefined, b: GetUserResponse | PlainMessage<GetUserResponse> | undefined): boolean;
}
/**
 * Request to delete a user account
 *
 * @generated from message uniswap.platformservice.v1.DeleteUserRequest
 */
export declare class DeleteUserRequest extends Message<DeleteUserRequest> {
    constructor(data?: PartialMessage<DeleteUserRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.DeleteUserRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteUserRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteUserRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteUserRequest;
    static equals(a: DeleteUserRequest | PlainMessage<DeleteUserRequest> | undefined, b: DeleteUserRequest | PlainMessage<DeleteUserRequest> | undefined): boolean;
}
/**
 * Response for delete user
 *
 * @generated from message uniswap.platformservice.v1.DeleteUserResponse
 */
export declare class DeleteUserResponse extends Message<DeleteUserResponse> {
    /**
     * @generated from field: optional uniswap.platformservice.v1.UserServiceError error = 1;
     */
    error?: UserServiceError;
    constructor(data?: PartialMessage<DeleteUserResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.DeleteUserResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteUserResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteUserResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteUserResponse;
    static equals(a: DeleteUserResponse | PlainMessage<DeleteUserResponse> | undefined, b: DeleteUserResponse | PlainMessage<DeleteUserResponse> | undefined): boolean;
}
/**
 * Request to get user by email
 *
 * @generated from message uniswap.platformservice.v1.GetUserByEmailRequest
 */
export declare class GetUserByEmailRequest extends Message<GetUserByEmailRequest> {
    /**
     * User's email address
     *
     * @generated from field: string email = 1;
     */
    email: string;
    constructor(data?: PartialMessage<GetUserByEmailRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.GetUserByEmailRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserByEmailRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserByEmailRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserByEmailRequest;
    static equals(a: GetUserByEmailRequest | PlainMessage<GetUserByEmailRequest> | undefined, b: GetUserByEmailRequest | PlainMessage<GetUserByEmailRequest> | undefined): boolean;
}
/**
 * Response for get user by email
 *
 * @generated from message uniswap.platformservice.v1.GetUserByEmailResponse
 */
export declare class GetUserByEmailResponse extends Message<GetUserByEmailResponse> {
    /**
     * User details
     *
     * @generated from field: uniswap.platformservice.v1.User user = 1;
     */
    user?: User;
    /**
     * @generated from field: optional uniswap.platformservice.v1.UserServiceError error = 2;
     */
    error?: UserServiceError;
    constructor(data?: PartialMessage<GetUserByEmailResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.GetUserByEmailResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserByEmailResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserByEmailResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserByEmailResponse;
    static equals(a: GetUserByEmailResponse | PlainMessage<GetUserByEmailResponse> | undefined, b: GetUserByEmailResponse | PlainMessage<GetUserByEmailResponse> | undefined): boolean;
}
