import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum uniswap.platformservice.v1.ChallengeType
 */
export declare enum ChallengeType {
    /**
     * Bot detection mechanisms
     *
     * @generated from enum value: CHALLENGE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CHALLENGE_TYPE_TURNSTILE = 1;
     */
    TURNSTILE = 1,
    /**
     * @generated from enum value: CHALLENGE_TYPE_HASHCASH = 2;
     */
    HASHCASH = 2,
    /**
     * Login Authentication
     *
     * @generated from enum value: CHALLENGE_TYPE_GOOGLE = 3;
     */
    GOOGLE = 3,
    /**
     * @generated from enum value: CHALLENGE_TYPE_SLACK = 4;
     */
    SLACK = 4,
    /**
     * @generated from enum value: CHALLENGE_TYPE_GITHUB = 5;
     */
    GITHUB = 5,
    /**
     * @generated from enum value: CHALLENGE_TYPE_EMAIL = 6;
     */
    EMAIL = 6
}
/**
 * @generated from message uniswap.platformservice.v1.IntrospectSessionRequest
 */
export declare class IntrospectSessionRequest extends Message<IntrospectSessionRequest> {
    /**
     * only Entry Gate way will call, therefore in the request body
     *
     * @generated from field: string session_id = 1;
     */
    sessionId: string;
    constructor(data?: PartialMessage<IntrospectSessionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.IntrospectSessionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntrospectSessionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntrospectSessionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntrospectSessionRequest;
    static equals(a: IntrospectSessionRequest | PlainMessage<IntrospectSessionRequest> | undefined, b: IntrospectSessionRequest | PlainMessage<IntrospectSessionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.IntrospectSessionResponse
 */
export declare class IntrospectSessionResponse extends Message<IntrospectSessionResponse> {
    /**
     * @generated from field: string wrapped_id = 1;
     */
    wrappedId: string;
    /**
     * @generated from field: bool result = 2;
     */
    result: boolean;
    /**
     * string user_id = 3; // will add back when user_id is available
     *
     * @generated from field: int32 score = 4;
     */
    score: number;
    /**
     * @generated from field: string persona_id = 5;
     */
    personaId: string;
    constructor(data?: PartialMessage<IntrospectSessionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.IntrospectSessionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IntrospectSessionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IntrospectSessionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IntrospectSessionResponse;
    static equals(a: IntrospectSessionResponse | PlainMessage<IntrospectSessionResponse> | undefined, b: IntrospectSessionResponse | PlainMessage<IntrospectSessionResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.InitSessionRequest
 */
export declare class InitSessionRequest extends Message<InitSessionRequest> {
    constructor(data?: PartialMessage<InitSessionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.InitSessionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InitSessionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InitSessionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InitSessionRequest;
    static equals(a: InitSessionRequest | PlainMessage<InitSessionRequest> | undefined, b: InitSessionRequest | PlainMessage<InitSessionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.InitSessionResponse
 */
export declare class InitSessionResponse extends Message<InitSessionResponse> {
    /**
     * for web, it is in the cookie, for mobile + extension, it is in the body
     *
     * @generated from field: optional string session_id = 1;
     */
    sessionId?: string;
    /**
     * for web, it is in the cookie, for mobile + extension, it is in the body
     *
     * @generated from field: optional string device_id = 2;
     */
    deviceId?: string;
    /**
     * @generated from field: bool need_challenge = 3;
     */
    needChallenge: boolean;
    /**
     * DEPRECATED: Use uniswap_identifier instead
     *
     * @generated from field: map<string, string> extra = 4 [deprecated = true];
     * @deprecated
     */
    extra: {
        [key: string]: string;
    };
    /**
     * The persona ID associated with this session (previously in extra["uniswapIdentifier"])
     *
     * @generated from field: optional string uniswap_identifier = 5;
     */
    uniswapIdentifier?: string;
    constructor(data?: PartialMessage<InitSessionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.InitSessionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InitSessionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InitSessionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InitSessionResponse;
    static equals(a: InitSessionResponse | PlainMessage<InitSessionResponse> | undefined, b: InitSessionResponse | PlainMessage<InitSessionResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.GetChallengeTypesRequest
 */
export declare class GetChallengeTypesRequest extends Message<GetChallengeTypesRequest> {
    constructor(data?: PartialMessage<GetChallengeTypesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.GetChallengeTypesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetChallengeTypesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetChallengeTypesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetChallengeTypesRequest;
    static equals(a: GetChallengeTypesRequest | PlainMessage<GetChallengeTypesRequest> | undefined, b: GetChallengeTypesRequest | PlainMessage<GetChallengeTypesRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.ChallengeTypeConfig
 */
export declare class ChallengeTypeConfig extends Message<ChallengeTypeConfig> {
    /**
     * @generated from field: uniswap.platformservice.v1.ChallengeType type = 1;
     */
    type: ChallengeType;
    /**
     * Provider-specific config (e.g., "clientId": "xxx", "scope": "openid email profile")
     *
     * @generated from field: map<string, string> config = 2;
     */
    config: {
        [key: string]: string;
    };
    constructor(data?: PartialMessage<ChallengeTypeConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ChallengeTypeConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChallengeTypeConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChallengeTypeConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChallengeTypeConfig;
    static equals(a: ChallengeTypeConfig | PlainMessage<ChallengeTypeConfig> | undefined, b: ChallengeTypeConfig | PlainMessage<ChallengeTypeConfig> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.GetChallengeTypesResponse
 */
export declare class GetChallengeTypesResponse extends Message<GetChallengeTypesResponse> {
    /**
     * @generated from field: repeated uniswap.platformservice.v1.ChallengeTypeConfig challenge_type_config = 1;
     */
    challengeTypeConfig: ChallengeTypeConfig[];
    constructor(data?: PartialMessage<GetChallengeTypesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.GetChallengeTypesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetChallengeTypesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetChallengeTypesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetChallengeTypesResponse;
    static equals(a: GetChallengeTypesResponse | PlainMessage<GetChallengeTypesResponse> | undefined, b: GetChallengeTypesResponse | PlainMessage<GetChallengeTypesResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.ChallengeRequest
 */
export declare class ChallengeRequest extends Message<ChallengeRequest> {
    /**
     * Challenge type (auth provider or bot detection). If not set, server decides
     *
     * @generated from field: optional uniswap.platformservice.v1.ChallengeType challenge_type = 1;
     */
    challengeType?: ChallengeType;
    /**
     * Email address (required when type=PROVIDER_EMAIL)
     *
     * @generated from field: optional string identifier = 2;
     */
    identifier?: string;
    constructor(data?: PartialMessage<ChallengeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ChallengeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChallengeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChallengeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChallengeRequest;
    static equals(a: ChallengeRequest | PlainMessage<ChallengeRequest> | undefined, b: ChallengeRequest | PlainMessage<ChallengeRequest> | undefined): boolean;
}
/**
 * Challenge-specific data messages
 *
 * @generated from message uniswap.platformservice.v1.TurnstileData
 */
export declare class TurnstileData extends Message<TurnstileData> {
    /**
     * @generated from field: string site_key = 1;
     */
    siteKey: string;
    /**
     * @generated from field: string action = 2;
     */
    action: string;
    constructor(data?: PartialMessage<TurnstileData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.TurnstileData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TurnstileData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TurnstileData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TurnstileData;
    static equals(a: TurnstileData | PlainMessage<TurnstileData> | undefined, b: TurnstileData | PlainMessage<TurnstileData> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.HashCashData
 */
export declare class HashCashData extends Message<HashCashData> {
    /**
     * @generated from field: int32 difficulty = 1;
     */
    difficulty: number;
    /**
     * @generated from field: string subject = 2;
     */
    subject: string;
    /**
     * @generated from field: string algorithm = 3;
     */
    algorithm: string;
    /**
     * @generated from field: string nonce = 4;
     */
    nonce: string;
    /**
     * @generated from field: int32 max_proof_length = 5;
     */
    maxProofLength: number;
    /**
     * @generated from field: string verifier = 6;
     */
    verifier: string;
    constructor(data?: PartialMessage<HashCashData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.HashCashData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HashCashData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HashCashData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HashCashData;
    static equals(a: HashCashData | PlainMessage<HashCashData> | undefined, b: HashCashData | PlainMessage<HashCashData> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.GitHubData
 */
export declare class GitHubData extends Message<GitHubData> {
    /**
     * @generated from field: string authorize_url = 1;
     */
    authorizeUrl: string;
    constructor(data?: PartialMessage<GitHubData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.GitHubData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GitHubData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GitHubData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GitHubData;
    static equals(a: GitHubData | PlainMessage<GitHubData> | undefined, b: GitHubData | PlainMessage<GitHubData> | undefined): boolean;
}
/**
 * Challenge failure reasons
 *
 * @generated from message uniswap.platformservice.v1.ChallengeFailure
 */
export declare class ChallengeFailure extends Message<ChallengeFailure> {
    /**
     * @generated from field: uniswap.platformservice.v1.ChallengeFailure.Reason reason = 1;
     */
    reason: ChallengeFailure_Reason;
    constructor(data?: PartialMessage<ChallengeFailure>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ChallengeFailure";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChallengeFailure;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChallengeFailure;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChallengeFailure;
    static equals(a: ChallengeFailure | PlainMessage<ChallengeFailure> | undefined, b: ChallengeFailure | PlainMessage<ChallengeFailure> | undefined): boolean;
}
/**
 * @generated from enum uniswap.platformservice.v1.ChallengeFailure.Reason
 */
export declare enum ChallengeFailure_Reason {
    /**
     * @generated from enum value: REASON_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Session must pass bot detection first (score < 60)
     *
     * @generated from enum value: REASON_BOT_DETECTION_REQUIRED = 1;
     */
    BOT_DETECTION_REQUIRED = 1
}
/**
 * @generated from message uniswap.platformservice.v1.ChallengeResponse
 */
export declare class ChallengeResponse extends Message<ChallengeResponse> {
    /**
     * @generated from field: string challenge_id = 1;
     */
    challengeId: string;
    /**
     * The challenge type being enforced for
     *
     * @generated from field: uniswap.platformservice.v1.ChallengeType challenge_type = 2;
     */
    challengeType: ChallengeType;
    /**
     * DEPRECATED: Use challenge_data instead
     *
     * Extra data for challenge (e.g., hashcash difficulty, turnstile site key)
     *
     * @generated from field: map<string, string> extra = 3 [deprecated = true];
     * @deprecated
     */
    extra: {
        [key: string]: string;
    };
    /**
     * Type-safe challenge-specific data
     *
     * @generated from oneof uniswap.platformservice.v1.ChallengeResponse.challenge_data
     */
    challengeData: {
        /**
         * @generated from field: uniswap.platformservice.v1.TurnstileData turnstile = 4;
         */
        value: TurnstileData;
        case: "turnstile";
    } | {
        /**
         * @generated from field: uniswap.platformservice.v1.HashCashData hashcash = 5;
         */
        value: HashCashData;
        case: "hashcash";
    } | {
        /**
         * @generated from field: uniswap.platformservice.v1.GitHubData github = 6;
         */
        value: GitHubData;
        case: "github";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Present only when challenge request fails
     * When failure is set, other fields (challenge_id, challenge_type, challenge_data) are not populated
     *
     * @generated from field: optional uniswap.platformservice.v1.ChallengeFailure failure = 7;
     */
    failure?: ChallengeFailure;
    constructor(data?: PartialMessage<ChallengeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.ChallengeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChallengeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChallengeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChallengeResponse;
    static equals(a: ChallengeResponse | PlainMessage<ChallengeResponse> | undefined, b: ChallengeResponse | PlainMessage<ChallengeResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.VerifyRequest
 */
export declare class VerifyRequest extends Message<VerifyRequest> {
    /**
     * Bot detection token, hashcash solution, or OTP code. Oauth code == solution.
     *
     * @generated from field: string solution = 1;
     */
    solution: string;
    /**
     * Oauth state = challenge_id
     *
     * @generated from field: string challenge_id = 2;
     */
    challengeId: string;
    /**
     * Challenge type (must match the one used in Challenge).
     *
     * @generated from field: uniswap.platformservice.v1.ChallengeType type = 3;
     */
    type: ChallengeType;
    constructor(data?: PartialMessage<VerifyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.VerifyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyRequest;
    static equals(a: VerifyRequest | PlainMessage<VerifyRequest> | undefined, b: VerifyRequest | PlainMessage<VerifyRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.VerifySuccess
 */
export declare class VerifySuccess extends Message<VerifySuccess> {
    /**
     * @generated from field: uniswap.platformservice.v1.UserInfo user_info = 1;
     */
    userInfo?: UserInfo;
    constructor(data?: PartialMessage<VerifySuccess>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.VerifySuccess";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifySuccess;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifySuccess;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifySuccess;
    static equals(a: VerifySuccess | PlainMessage<VerifySuccess> | undefined, b: VerifySuccess | PlainMessage<VerifySuccess> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.VerifyFailure
 */
export declare class VerifyFailure extends Message<VerifyFailure> {
    /**
     * @generated from field: uniswap.platformservice.v1.VerifyFailure.Reason reason = 1;
     */
    reason: VerifyFailure_Reason;
    /**
     * human-friendly message, includes provider type for mismatch errors
     *
     * @generated from field: string message = 2;
     */
    message: string;
    /**
     * cool-down if relevant
     *
     * @generated from field: optional int32 wait_seconds = 4;
     */
    waitSeconds?: number;
    constructor(data?: PartialMessage<VerifyFailure>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.VerifyFailure";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyFailure;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyFailure;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyFailure;
    static equals(a: VerifyFailure | PlainMessage<VerifyFailure> | undefined, b: VerifyFailure | PlainMessage<VerifyFailure> | undefined): boolean;
}
/**
 * @generated from enum uniswap.platformservice.v1.VerifyFailure.Reason
 */
export declare enum VerifyFailure_Reason {
    /**
     * @generated from enum value: REASON_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * bad OTP / bot detection solutions
     *
     * @generated from enum value: REASON_INVALID_SOLUTION = 1;
     */
    INVALID_SOLUTION = 1,
    /**
     * provider email needs verification
     *
     * @generated from enum value: REASON_EMAIL_NOT_VERIFIED = 2;
     */
    EMAIL_NOT_VERIFIED = 2,
    /**
     * challenge id is invalid, re-initiate a challenge.
     *
     * @generated from enum value: REASON_IVALID_CHALLENGE = 3;
     */
    IVALID_CHALLENGE = 3,
    /**
     * email linked to different auth provider
     *
     * @generated from enum value: REASON_PROVIDER_MISMATCH = 4;
     */
    PROVIDER_MISMATCH = 4
}
/**
 * @generated from message uniswap.platformservice.v1.VerifyResponse
 */
export declare class VerifyResponse extends Message<VerifyResponse> {
    /**
     * @generated from field: bool retry = 1;
     */
    retry: boolean;
    /**
     * @generated from oneof uniswap.platformservice.v1.VerifyResponse.outcome
     */
    outcome: {
        /**
         * @generated from field: uniswap.platformservice.v1.VerifySuccess success = 2;
         */
        value: VerifySuccess;
        case: "success";
    } | {
        /**
         * @generated from field: uniswap.platformservice.v1.VerifyFailure failure = 3;
         */
        value: VerifyFailure;
        case: "failure";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * New session ID after rotation (only set for OAuth authentication on mobile/extension)
     * For web clients, this is set via Set-Cookie header instead
     *
     * @generated from field: optional string new_session_id = 4;
     */
    newSessionId?: string;
    constructor(data?: PartialMessage<VerifyResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.VerifyResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyResponse;
    static equals(a: VerifyResponse | PlainMessage<VerifyResponse> | undefined, b: VerifyResponse | PlainMessage<VerifyResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.UserInfo
 */
export declare class UserInfo extends Message<UserInfo> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: optional string email = 2;
     */
    email?: string;
    constructor(data?: PartialMessage<UserInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.UserInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserInfo;
    static equals(a: UserInfo | PlainMessage<UserInfo> | undefined, b: UserInfo | PlainMessage<UserInfo> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.UpdateSessionRequest
 */
export declare class UpdateSessionRequest extends Message<UpdateSessionRequest> {
    /**
     * @generated from field: string wallet_addr = 1;
     */
    walletAddr: string;
    constructor(data?: PartialMessage<UpdateSessionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.UpdateSessionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSessionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSessionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSessionRequest;
    static equals(a: UpdateSessionRequest | PlainMessage<UpdateSessionRequest> | undefined, b: UpdateSessionRequest | PlainMessage<UpdateSessionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.UpdateSessionResponse
 */
export declare class UpdateSessionResponse extends Message<UpdateSessionResponse> {
    constructor(data?: PartialMessage<UpdateSessionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.UpdateSessionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateSessionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateSessionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateSessionResponse;
    static equals(a: UpdateSessionResponse | PlainMessage<UpdateSessionResponse> | undefined, b: UpdateSessionResponse | PlainMessage<UpdateSessionResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.SignoutRequest
 */
export declare class SignoutRequest extends Message<SignoutRequest> {
    constructor(data?: PartialMessage<SignoutRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.SignoutRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignoutRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignoutRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignoutRequest;
    static equals(a: SignoutRequest | PlainMessage<SignoutRequest> | undefined, b: SignoutRequest | PlainMessage<SignoutRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.SignoutResponse
 */
export declare class SignoutResponse extends Message<SignoutResponse> {
    constructor(data?: PartialMessage<SignoutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.SignoutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignoutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignoutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignoutResponse;
    static equals(a: SignoutResponse | PlainMessage<SignoutResponse> | undefined, b: SignoutResponse | PlainMessage<SignoutResponse> | undefined): boolean;
}
