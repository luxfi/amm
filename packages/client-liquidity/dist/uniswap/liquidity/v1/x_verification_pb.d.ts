import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message uniswap.liquidity.v1.GetXAuthUrlRequest
 */
export declare class GetXAuthUrlRequest extends Message<GetXAuthUrlRequest> {
    /**
     * Wallet address to bind in the verification token
     *
     * @generated from field: string wallet_address = 1;
     */
    walletAddress: string;
    constructor(data?: PartialMessage<GetXAuthUrlRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.GetXAuthUrlRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetXAuthUrlRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetXAuthUrlRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetXAuthUrlRequest;
    static equals(a: GetXAuthUrlRequest | PlainMessage<GetXAuthUrlRequest> | undefined, b: GetXAuthUrlRequest | PlainMessage<GetXAuthUrlRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.GetXAuthUrlResponse
 */
export declare class GetXAuthUrlResponse extends Message<GetXAuthUrlResponse> {
    /**
     * Full https://x.com/i/oauth2/authorize?... URL — redirect user here
     *
     * @generated from field: string auth_url = 1;
     */
    authUrl: string;
    /**
     * Signed HMAC state token — frontend must store this and return it on callback
     *
     * @generated from field: string state = 2;
     */
    state: string;
    constructor(data?: PartialMessage<GetXAuthUrlResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.GetXAuthUrlResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetXAuthUrlResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetXAuthUrlResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetXAuthUrlResponse;
    static equals(a: GetXAuthUrlResponse | PlainMessage<GetXAuthUrlResponse> | undefined, b: GetXAuthUrlResponse | PlainMessage<GetXAuthUrlResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.VerifyXCallbackRequest
 */
export declare class VerifyXCallbackRequest extends Message<VerifyXCallbackRequest> {
    /**
     * Authorization code received from X in the callback URL
     *
     * @generated from field: string code = 1;
     */
    code: string;
    /**
     * The state value returned by GetXAuthUrl (pass back unmodified)
     *
     * @generated from field: string state = 2;
     */
    state: string;
    constructor(data?: PartialMessage<VerifyXCallbackRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.VerifyXCallbackRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyXCallbackRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyXCallbackRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyXCallbackRequest;
    static equals(a: VerifyXCallbackRequest | PlainMessage<VerifyXCallbackRequest> | undefined, b: VerifyXCallbackRequest | PlainMessage<VerifyXCallbackRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.VerifyXCallbackResponse
 */
export declare class VerifyXCallbackResponse extends Message<VerifyXCallbackResponse> {
    /**
     * X @handle without the @ (e.g. "elonmusk")
     *
     * @generated from field: string x_handle = 1;
     */
    xHandle: string;
    /**
     * Server-signed proof: HMAC({x_handle, wallet_address, exp}) — submit with token creation
     *
     * @generated from field: string x_verification_token = 2;
     */
    xVerificationToken: string;
    constructor(data?: PartialMessage<VerifyXCallbackResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.VerifyXCallbackResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyXCallbackResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyXCallbackResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyXCallbackResponse;
    static equals(a: VerifyXCallbackResponse | PlainMessage<VerifyXCallbackResponse> | undefined, b: VerifyXCallbackResponse | PlainMessage<VerifyXCallbackResponse> | undefined): boolean;
}
