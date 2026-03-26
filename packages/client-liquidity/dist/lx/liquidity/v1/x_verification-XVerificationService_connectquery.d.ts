import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
import { GetXAuthUrlRequest, GetXAuthUrlResponse, VerifyXCallbackRequest, VerifyXCallbackResponse } from "./x_verification_pb.js";
/**
 * Step 1: Get X OAuth authorization URL + signed state token
 *
 * @generated from rpc uniswap.liquidity.v1.XVerificationService.GetXAuthUrl
 */
export declare const getXAuthUrl: {
    readonly localName: "getXAuthUrl";
    readonly name: "GetXAuthUrl";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetXAuthUrlRequest;
    readonly O: typeof GetXAuthUrlResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.XVerificationService";
    };
};
/**
 * Step 2: Exchange callback code for verified X handle + signed verification token
 *
 * @generated from rpc uniswap.liquidity.v1.XVerificationService.VerifyXCallback
 */
export declare const verifyXCallback: {
    readonly localName: "verifyXCallback";
    readonly name: "VerifyXCallback";
    readonly kind: MethodKind.Unary;
    readonly I: typeof VerifyXCallbackRequest;
    readonly O: typeof VerifyXCallbackResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.XVerificationService";
    };
};
