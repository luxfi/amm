import { GetXAuthUrlRequest, GetXAuthUrlResponse, VerifyXCallbackRequest, VerifyXCallbackResponse } from "./x_verification_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service uniswap.liquidity.v1.XVerificationService
 */
export declare const XVerificationService: {
    readonly typeName: "uniswap.liquidity.v1.XVerificationService";
    readonly methods: {
        /**
         * Step 1: Get X OAuth authorization URL + signed state token
         *
         * @generated from rpc uniswap.liquidity.v1.XVerificationService.GetXAuthUrl
         */
        readonly getXAuthUrl: {
            readonly name: "GetXAuthUrl";
            readonly I: typeof GetXAuthUrlRequest;
            readonly O: typeof GetXAuthUrlResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * Step 2: Exchange callback code for verified X handle + signed verification token
         *
         * @generated from rpc uniswap.liquidity.v1.XVerificationService.VerifyXCallback
         */
        readonly verifyXCallback: {
            readonly name: "VerifyXCallback";
            readonly I: typeof VerifyXCallbackRequest;
            readonly O: typeof VerifyXCallbackResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
    };
};
