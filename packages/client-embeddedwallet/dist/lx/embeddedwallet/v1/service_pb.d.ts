import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * Authentication types determins the form of the challenge
 *
 * @generated from enum uniswap.embeddedwallet.v1.AuthenticationTypes
 */
export declare enum AuthenticationTypes {
    /**
     * @generated from enum value: AUTHENTICATION_TYPE_UNSPECIFIED = 0;
     */
    AUTHENTICATION_TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: PASSKEY_REGISTRATION = 1;
     */
    PASSKEY_REGISTRATION = 1,
    /**
     * @generated from enum value: PASSKEY_AUTHENTICATION = 2;
     */
    PASSKEY_AUTHENTICATION = 2
}
/**
 * Action determins what form of authentication type will/can be used. eg: session cookie compares to other types
 *
 * @generated from enum uniswap.embeddedwallet.v1.Action
 */
export declare enum Action {
    /**
     * @generated from enum value: ACTION_UNSPECIFIED = 0;
     */
    ACTION_UNSPECIFIED = 0,
    /**
     * @generated from enum value: CREATE_WALLET = 1;
     */
    CREATE_WALLET = 1,
    /**
     * @generated from enum value: SIGN_MESSAGES = 2;
     */
    SIGN_MESSAGES = 2,
    /**
     * @generated from enum value: SIGN_TRANSACTIONS = 3;
     */
    SIGN_TRANSACTIONS = 3,
    /**
     * @generated from enum value: SIGN_TYPED_DATA_BATCH = 4;
     */
    SIGN_TYPED_DATA_BATCH = 4,
    /**
     * @generated from enum value: WALLET_SIGNIN = 5;
     */
    WALLET_SIGNIN = 5,
    /**
     * @generated from enum value: EXPORT_SEED_PHRASE = 6;
     */
    EXPORT_SEED_PHRASE = 6,
    /**
     * @generated from enum value: DELETE_RECORD = 7;
     */
    DELETE_RECORD = 7,
    /**
     * @generated from enum value: REGISTER_NEW_AUTHENTICATION_TYPES = 8;
     */
    REGISTER_NEW_AUTHENTICATION_TYPES = 8,
    /**
     * @generated from enum value: LIST_AUTHENTICATORS = 9;
     */
    LIST_AUTHENTICATORS = 9
}
/**
 * @generated from enum uniswap.embeddedwallet.v1.AuthenticatorNameType
 */
export declare enum AuthenticatorNameType {
    /**
     * @generated from enum value: AUTHENTICATOR_NAME_TYPE_UNSPECIFIED = 0;
     */
    AUTHENTICATOR_NAME_TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: GOOGLE_PASSWORD_MANAGER = 1;
     */
    GOOGLE_PASSWORD_MANAGER = 1,
    /**
     * @generated from enum value: CHROME_MAC = 2;
     */
    CHROME_MAC = 2,
    /**
     * @generated from enum value: WINDOWS_HELLO = 3;
     */
    WINDOWS_HELLO = 3,
    /**
     * @generated from enum value: ICLOUD_KEYCHAIN_MANAGED = 4;
     */
    ICLOUD_KEYCHAIN_MANAGED = 4,
    /**
     * @generated from enum value: DASHLANE = 5;
     */
    DASHLANE = 5,
    /**
     * @generated from enum value: ONE_PASSWORD = 6;
     */
    ONE_PASSWORD = 6,
    /**
     * @generated from enum value: NORDPASS = 7;
     */
    NORDPASS = 7,
    /**
     * @generated from enum value: KEEPER = 8;
     */
    KEEPER = 8,
    /**
     * @generated from enum value: SESAME = 9;
     */
    SESAME = 9,
    /**
     * @generated from enum value: ENPASS = 10;
     */
    ENPASS = 10,
    /**
     * @generated from enum value: CHROMIUM_BROWSER = 11;
     */
    CHROMIUM_BROWSER = 11,
    /**
     * @generated from enum value: EDGE_MAC = 12;
     */
    EDGE_MAC = 12,
    /**
     * @generated from enum value: IDMELON = 13;
     */
    IDMELON = 13,
    /**
     * @generated from enum value: BITWARDEN = 14;
     */
    BITWARDEN = 14,
    /**
     * @generated from enum value: ICLOUD_KEYCHAIN = 15;
     */
    ICLOUD_KEYCHAIN = 15,
    /**
     * @generated from enum value: SAMSUNG_PASS = 16;
     */
    SAMSUNG_PASS = 16,
    /**
     * @generated from enum value: THALES_BIO_IOS_SDK = 17;
     */
    THALES_BIO_IOS_SDK = 17,
    /**
     * @generated from enum value: THALES_BIO_ANDROID_SDK = 18;
     */
    THALES_BIO_ANDROID_SDK = 18,
    /**
     * @generated from enum value: THALES_PIN_ANDROID_SDK = 19;
     */
    THALES_PIN_ANDROID_SDK = 19,
    /**
     * @generated from enum value: THALES_PIN_IOS_SDK = 20;
     */
    THALES_PIN_IOS_SDK = 20,
    /**
     * @generated from enum value: PROTON_PASS = 21;
     */
    PROTON_PASS = 21,
    /**
     * @generated from enum value: KEEPASSXC = 22;
     */
    KEEPASSXC = 22,
    /**
     * @generated from enum value: TOOTHPIC_PASSKEY_PROVIDER = 23;
     */
    TOOTHPIC_PASSKEY_PROVIDER = 23,
    /**
     * @generated from enum value: IPASSWORDS = 24;
     */
    IPASSWORDS = 24,
    /**
     * @generated from enum value: ZOHO_VAULT = 25;
     */
    ZOHO_VAULT = 25,
    /**
     * @generated from enum value: LASTPASS = 26;
     */
    LASTPASS = 26,
    /**
     * @generated from enum value: DEVOLUTIONS = 27;
     */
    DEVOLUTIONS = 27,
    /**
     * @generated from enum value: LOGMEONCE = 28;
     */
    LOGMEONCE = 28,
    /**
     * @generated from enum value: KASPERSKY_PASSWORD_MANAGER = 29;
     */
    KASPERSKY_PASSWORD_MANAGER = 29
}
/**
 * @generated from message uniswap.embeddedwallet.v1.RegistrationOptions
 */
export declare class RegistrationOptions extends Message<RegistrationOptions> {
    /**
     * @generated from field: optional uniswap.embeddedwallet.v1.RegistrationOptions.AuthenticatorAttachment authenticator_attachment = 1;
     */
    authenticatorAttachment?: RegistrationOptions_AuthenticatorAttachment;
    /**
     * @generated from field: optional string username = 2;
     */
    username?: string;
    constructor(data?: PartialMessage<RegistrationOptions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.RegistrationOptions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegistrationOptions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegistrationOptions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegistrationOptions;
    static equals(a: RegistrationOptions | PlainMessage<RegistrationOptions> | undefined, b: RegistrationOptions | PlainMessage<RegistrationOptions> | undefined): boolean;
}
/**
 * @generated from enum uniswap.embeddedwallet.v1.RegistrationOptions.AuthenticatorAttachment
 */
export declare enum RegistrationOptions_AuthenticatorAttachment {
    /**
     * @generated from enum value: UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PLATFORM = 1;
     */
    PLATFORM = 1,
    /**
     * @generated from enum value: CROSS_PLATFORM = 2;
     */
    CROSS_PLATFORM = 2
}
/**
 * @generated from message uniswap.embeddedwallet.v1.ChallengeRequest
 */
export declare class ChallengeRequest extends Message<ChallengeRequest> {
    /**
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes type = 1;
     */
    type: AuthenticationTypes;
    /**
     * @generated from field: uniswap.embeddedwallet.v1.Action action = 2;
     */
    action: Action;
    /**
     * @generated from field: optional uniswap.embeddedwallet.v1.RegistrationOptions options = 3;
     */
    options?: RegistrationOptions;
    constructor(data?: PartialMessage<ChallengeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.ChallengeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChallengeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChallengeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChallengeRequest;
    static equals(a: ChallengeRequest | PlainMessage<ChallengeRequest> | undefined, b: ChallengeRequest | PlainMessage<ChallengeRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.ChallengeResponse
 */
export declare class ChallengeResponse extends Message<ChallengeResponse> {
    /**
     * @generated from field: string challenge_options = 1;
     */
    challengeOptions: string;
    constructor(data?: PartialMessage<ChallengeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.ChallengeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChallengeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChallengeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChallengeResponse;
    static equals(a: ChallengeResponse | PlainMessage<ChallengeResponse> | undefined, b: ChallengeResponse | PlainMessage<ChallengeResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.SecuredChallengeRequest
 */
export declare class SecuredChallengeRequest extends Message<SecuredChallengeRequest> {
    /**
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes type = 1;
     */
    type: AuthenticationTypes;
    /**
     * @generated from field: uniswap.embeddedwallet.v1.Action action = 2;
     */
    action: Action;
    /**
     * @generated from field: optional uniswap.embeddedwallet.v1.RegistrationOptions options = 3;
     */
    options?: RegistrationOptions;
    /**
     * base64 encoded public key
     *
     * @generated from field: optional string b64_encryption_public_key = 4;
     */
    b64EncryptionPublicKey?: string;
    constructor(data?: PartialMessage<SecuredChallengeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.SecuredChallengeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SecuredChallengeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SecuredChallengeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SecuredChallengeRequest;
    static equals(a: SecuredChallengeRequest | PlainMessage<SecuredChallengeRequest> | undefined, b: SecuredChallengeRequest | PlainMessage<SecuredChallengeRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.SecuredChallengeResponse
 */
export declare class SecuredChallengeResponse extends Message<SecuredChallengeResponse> {
    /**
     * @generated from field: string challenge_options = 1;
     */
    challengeOptions: string;
    constructor(data?: PartialMessage<SecuredChallengeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.SecuredChallengeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SecuredChallengeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SecuredChallengeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SecuredChallengeResponse;
    static equals(a: SecuredChallengeResponse | PlainMessage<SecuredChallengeResponse> | undefined, b: SecuredChallengeResponse | PlainMessage<SecuredChallengeResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.CreateWalletRequest
 */
export declare class CreateWalletRequest extends Message<CreateWalletRequest> {
    /**
     * @generated from field: string credential = 1;
     */
    credential: string;
    /**
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes type = 2;
     */
    type: AuthenticationTypes;
    constructor(data?: PartialMessage<CreateWalletRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.CreateWalletRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateWalletRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateWalletRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateWalletRequest;
    static equals(a: CreateWalletRequest | PlainMessage<CreateWalletRequest> | undefined, b: CreateWalletRequest | PlainMessage<CreateWalletRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.CreateWalletResponse
 */
export declare class CreateWalletResponse extends Message<CreateWalletResponse> {
    /**
     * @generated from field: string wallet_address = 1;
     */
    walletAddress: string;
    /**
     * @generated from field: optional string encrypted_seed_phrase = 2;
     */
    encryptedSeedPhrase?: string;
    constructor(data?: PartialMessage<CreateWalletResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.CreateWalletResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateWalletResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateWalletResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateWalletResponse;
    static equals(a: CreateWalletResponse | PlainMessage<CreateWalletResponse> | undefined, b: CreateWalletResponse | PlainMessage<CreateWalletResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.SignTransactionsRequest
 */
export declare class SignTransactionsRequest extends Message<SignTransactionsRequest> {
    /**
     * @generated from field: string credential = 1;
     */
    credential: string;
    /**
     * @generated from field: repeated string transactions = 2;
     */
    transactions: string[];
    /**
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes type = 3;
     */
    type: AuthenticationTypes;
    constructor(data?: PartialMessage<SignTransactionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.SignTransactionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignTransactionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignTransactionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignTransactionsRequest;
    static equals(a: SignTransactionsRequest | PlainMessage<SignTransactionsRequest> | undefined, b: SignTransactionsRequest | PlainMessage<SignTransactionsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.SignTransactionsResponse
 */
export declare class SignTransactionsResponse extends Message<SignTransactionsResponse> {
    /**
     * @generated from field: repeated string signed_transactions = 1;
     */
    signedTransactions: string[];
    constructor(data?: PartialMessage<SignTransactionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.SignTransactionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignTransactionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignTransactionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignTransactionsResponse;
    static equals(a: SignTransactionsResponse | PlainMessage<SignTransactionsResponse> | undefined, b: SignTransactionsResponse | PlainMessage<SignTransactionsResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.SignMessagesRequest
 */
export declare class SignMessagesRequest extends Message<SignMessagesRequest> {
    /**
     * @generated from field: string credential = 1;
     */
    credential: string;
    /**
     * @generated from field: repeated string messages = 2;
     */
    messages: string[];
    /**
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes type = 3;
     */
    type: AuthenticationTypes;
    constructor(data?: PartialMessage<SignMessagesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.SignMessagesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignMessagesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignMessagesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignMessagesRequest;
    static equals(a: SignMessagesRequest | PlainMessage<SignMessagesRequest> | undefined, b: SignMessagesRequest | PlainMessage<SignMessagesRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.SignMessagesResponse
 */
export declare class SignMessagesResponse extends Message<SignMessagesResponse> {
    /**
     * @generated from field: repeated string signed_messages = 1;
     */
    signedMessages: string[];
    constructor(data?: PartialMessage<SignMessagesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.SignMessagesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignMessagesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignMessagesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignMessagesResponse;
    static equals(a: SignMessagesResponse | PlainMessage<SignMessagesResponse> | undefined, b: SignMessagesResponse | PlainMessage<SignMessagesResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.WalletSigninRequest
 */
export declare class WalletSigninRequest extends Message<WalletSigninRequest> {
    /**
     * @generated from field: string credential = 1;
     */
    credential: string;
    /**
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes type = 2;
     */
    type: AuthenticationTypes;
    constructor(data?: PartialMessage<WalletSigninRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.WalletSigninRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WalletSigninRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WalletSigninRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WalletSigninRequest;
    static equals(a: WalletSigninRequest | PlainMessage<WalletSigninRequest> | undefined, b: WalletSigninRequest | PlainMessage<WalletSigninRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.WalletSigninResponse
 */
export declare class WalletSigninResponse extends Message<WalletSigninResponse> {
    /**
     * @generated from field: string wallet_address = 1;
     */
    walletAddress: string;
    /**
     * @generated from field: optional bool exported = 2;
     */
    exported?: boolean;
    constructor(data?: PartialMessage<WalletSigninResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.WalletSigninResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WalletSigninResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WalletSigninResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WalletSigninResponse;
    static equals(a: WalletSigninResponse | PlainMessage<WalletSigninResponse> | undefined, b: WalletSigninResponse | PlainMessage<WalletSigninResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.ExportSeedPhraseRequest
 */
export declare class ExportSeedPhraseRequest extends Message<ExportSeedPhraseRequest> {
    /**
     * @generated from field: string credential = 1;
     */
    credential: string;
    /**
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes type = 2;
     */
    type: AuthenticationTypes;
    constructor(data?: PartialMessage<ExportSeedPhraseRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.ExportSeedPhraseRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportSeedPhraseRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportSeedPhraseRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportSeedPhraseRequest;
    static equals(a: ExportSeedPhraseRequest | PlainMessage<ExportSeedPhraseRequest> | undefined, b: ExportSeedPhraseRequest | PlainMessage<ExportSeedPhraseRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.ExportSeedPhraseResponse
 */
export declare class ExportSeedPhraseResponse extends Message<ExportSeedPhraseResponse> {
    /**
     * @generated from field: string encrypted_seed_phrase = 1;
     */
    encryptedSeedPhrase: string;
    constructor(data?: PartialMessage<ExportSeedPhraseResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.ExportSeedPhraseResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExportSeedPhraseResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExportSeedPhraseResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExportSeedPhraseResponse;
    static equals(a: ExportSeedPhraseResponse | PlainMessage<ExportSeedPhraseResponse> | undefined, b: ExportSeedPhraseResponse | PlainMessage<ExportSeedPhraseResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.SignTypedDataBatchRequest
 */
export declare class SignTypedDataBatchRequest extends Message<SignTypedDataBatchRequest> {
    /**
     * @generated from field: string credential = 1;
     */
    credential: string;
    /**
     * @generated from field: repeated string typed_data_batch = 2;
     */
    typedDataBatch: string[];
    /**
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes type = 3;
     */
    type: AuthenticationTypes;
    constructor(data?: PartialMessage<SignTypedDataBatchRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.SignTypedDataBatchRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignTypedDataBatchRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignTypedDataBatchRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignTypedDataBatchRequest;
    static equals(a: SignTypedDataBatchRequest | PlainMessage<SignTypedDataBatchRequest> | undefined, b: SignTypedDataBatchRequest | PlainMessage<SignTypedDataBatchRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.SignTypedDataBatchResponse
 */
export declare class SignTypedDataBatchResponse extends Message<SignTypedDataBatchResponse> {
    /**
     * Multiple signatures.
     *
     * @generated from field: repeated string signature = 1;
     */
    signature: string[];
    constructor(data?: PartialMessage<SignTypedDataBatchResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.SignTypedDataBatchResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SignTypedDataBatchResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SignTypedDataBatchResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SignTypedDataBatchResponse;
    static equals(a: SignTypedDataBatchResponse | PlainMessage<SignTypedDataBatchResponse> | undefined, b: SignTypedDataBatchResponse | PlainMessage<SignTypedDataBatchResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.DeleteAuthenticatorRequest
 */
export declare class DeleteAuthenticatorRequest extends Message<DeleteAuthenticatorRequest> {
    /**
     * @generated from field: string credential = 1;
     */
    credential: string;
    /**
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes type = 2;
     */
    type: AuthenticationTypes;
    /**
     * @generated from field: string authenticator_id = 3;
     */
    authenticatorId: string;
    /**
     * @generated from field: string authenticator_type = 4;
     */
    authenticatorType: string;
    constructor(data?: PartialMessage<DeleteAuthenticatorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.DeleteAuthenticatorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAuthenticatorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAuthenticatorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAuthenticatorRequest;
    static equals(a: DeleteAuthenticatorRequest | PlainMessage<DeleteAuthenticatorRequest> | undefined, b: DeleteAuthenticatorRequest | PlainMessage<DeleteAuthenticatorRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.DeleteAuthenticatorResponse
 */
export declare class DeleteAuthenticatorResponse extends Message<DeleteAuthenticatorResponse> {
    constructor(data?: PartialMessage<DeleteAuthenticatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.DeleteAuthenticatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAuthenticatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAuthenticatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAuthenticatorResponse;
    static equals(a: DeleteAuthenticatorResponse | PlainMessage<DeleteAuthenticatorResponse> | undefined, b: DeleteAuthenticatorResponse | PlainMessage<DeleteAuthenticatorResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.DisconnectWalletRequest
 */
export declare class DisconnectWalletRequest extends Message<DisconnectWalletRequest> {
    constructor(data?: PartialMessage<DisconnectWalletRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.DisconnectWalletRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DisconnectWalletRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DisconnectWalletRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DisconnectWalletRequest;
    static equals(a: DisconnectWalletRequest | PlainMessage<DisconnectWalletRequest> | undefined, b: DisconnectWalletRequest | PlainMessage<DisconnectWalletRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.DisconnectWalletResponse
 */
export declare class DisconnectWalletResponse extends Message<DisconnectWalletResponse> {
    constructor(data?: PartialMessage<DisconnectWalletResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.DisconnectWalletResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DisconnectWalletResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DisconnectWalletResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DisconnectWalletResponse;
    static equals(a: DisconnectWalletResponse | PlainMessage<DisconnectWalletResponse> | undefined, b: DisconnectWalletResponse | PlainMessage<DisconnectWalletResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.RegisterNewAuthenticatorRequest
 */
export declare class RegisterNewAuthenticatorRequest extends Message<RegisterNewAuthenticatorRequest> {
    /**
     * credential of the new authentication type
     *
     * @generated from field: string new_credential = 1;
     */
    newCredential: string;
    /**
     * authentication type to register
     *
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes new_authentication_type = 2;
     */
    newAuthenticationType: AuthenticationTypes;
    /**
     * credential of the existing authentication type
     *
     * @generated from field: string existing_credential = 3;
     */
    existingCredential: string;
    /**
     * authentication type of the existing authentication type
     *
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes existing_authentication_type = 4;
     */
    existingAuthenticationType: AuthenticationTypes;
    constructor(data?: PartialMessage<RegisterNewAuthenticatorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.RegisterNewAuthenticatorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterNewAuthenticatorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterNewAuthenticatorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterNewAuthenticatorRequest;
    static equals(a: RegisterNewAuthenticatorRequest | PlainMessage<RegisterNewAuthenticatorRequest> | undefined, b: RegisterNewAuthenticatorRequest | PlainMessage<RegisterNewAuthenticatorRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.RegisterNewAuthenticatorResponse
 */
export declare class RegisterNewAuthenticatorResponse extends Message<RegisterNewAuthenticatorResponse> {
    constructor(data?: PartialMessage<RegisterNewAuthenticatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.RegisterNewAuthenticatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterNewAuthenticatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterNewAuthenticatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterNewAuthenticatorResponse;
    static equals(a: RegisterNewAuthenticatorResponse | PlainMessage<RegisterNewAuthenticatorResponse> | undefined, b: RegisterNewAuthenticatorResponse | PlainMessage<RegisterNewAuthenticatorResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.ListAuthenticatorsRequest
 */
export declare class ListAuthenticatorsRequest extends Message<ListAuthenticatorsRequest> {
    /**
     * @generated from field: string credential = 1;
     */
    credential: string;
    /**
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticationTypes type = 2;
     */
    type: AuthenticationTypes;
    constructor(data?: PartialMessage<ListAuthenticatorsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.ListAuthenticatorsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAuthenticatorsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAuthenticatorsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAuthenticatorsRequest;
    static equals(a: ListAuthenticatorsRequest | PlainMessage<ListAuthenticatorsRequest> | undefined, b: ListAuthenticatorsRequest | PlainMessage<ListAuthenticatorsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.ListAuthenticatorsResponse
 */
export declare class ListAuthenticatorsResponse extends Message<ListAuthenticatorsResponse> {
    /**
     * @generated from field: repeated uniswap.embeddedwallet.v1.Authenticator authenticators = 1;
     */
    authenticators: Authenticator[];
    constructor(data?: PartialMessage<ListAuthenticatorsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.ListAuthenticatorsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAuthenticatorsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAuthenticatorsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAuthenticatorsResponse;
    static equals(a: ListAuthenticatorsResponse | PlainMessage<ListAuthenticatorsResponse> | undefined, b: ListAuthenticatorsResponse | PlainMessage<ListAuthenticatorsResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.embeddedwallet.v1.Authenticator
 */
export declare class Authenticator extends Message<Authenticator> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string type = 2;
     */
    type: string;
    /**
     * @generated from field: string username = 3;
     */
    username: string;
    /**
     * @generated from field: uniswap.embeddedwallet.v1.AuthenticatorNameType provider_name = 4;
     */
    providerName: AuthenticatorNameType;
    /**
     * @generated from field: google.protobuf.Timestamp creation_time = 5;
     */
    creationTime?: Timestamp;
    constructor(data?: PartialMessage<Authenticator>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.embeddedwallet.v1.Authenticator";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Authenticator;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Authenticator;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Authenticator;
    static equals(a: Authenticator | PlainMessage<Authenticator> | undefined, b: Authenticator | PlainMessage<Authenticator> | undefined): boolean;
}
