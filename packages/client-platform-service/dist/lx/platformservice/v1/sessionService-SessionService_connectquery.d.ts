import { MethodKind } from "@bufbuild/protobuf";
import { ChallengeRequest, ChallengeResponse, GetChallengeTypesRequest, GetChallengeTypesResponse, InitSessionRequest, InitSessionResponse, IntrospectSessionRequest, IntrospectSessionResponse, SignoutRequest, SignoutResponse, UpdateSessionRequest, UpdateSessionResponse, VerifyRequest, VerifyResponse } from "./sessionService_pb.js";
/**
 * typically utilized by Entry Gateway for inspecting the validity of a session
 *
 * @generated from rpc uniswap.platformservice.v1.SessionService.IntrospectSession
 */
export declare const introspectSession: {
    readonly localName: "introspectSession";
    readonly name: "IntrospectSession";
    readonly kind: MethodKind.Unary;
    readonly I: typeof IntrospectSessionRequest;
    readonly O: typeof IntrospectSessionResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.SessionService";
    };
};
/**
 * used by client for initializing a session
 *
 * @generated from rpc uniswap.platformservice.v1.SessionService.InitSession
 */
export declare const initSession: {
    readonly localName: "initSession";
    readonly name: "InitSession";
    readonly kind: MethodKind.Unary;
    readonly I: typeof InitSessionRequest;
    readonly O: typeof InitSessionResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.SessionService";
    };
};
/**
 * return a list of possible challenge types
 *
 * @generated from rpc uniswap.platformservice.v1.SessionService.GetChallengeTypes
 */
export declare const getChallengeTypes: {
    readonly localName: "getChallengeTypes";
    readonly name: "GetChallengeTypes";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetChallengeTypesRequest;
    readonly O: typeof GetChallengeTypesResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.SessionService";
    };
};
/**
 * used by client to request a challenge
 *
 * @generated from rpc uniswap.platformservice.v1.SessionService.Challenge
 */
export declare const challenge: {
    readonly localName: "challenge";
    readonly name: "Challenge";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ChallengeRequest;
    readonly O: typeof ChallengeResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.SessionService";
    };
};
/**
 * a universal method for all challenge types (auth and bot detection)
 * OauthVerify is implemented separately as a pure GET endpoint, which proxy request to Verify POST locally.
 *
 * @generated from rpc uniswap.platformservice.v1.SessionService.Verify
 */
export declare const verify: {
    readonly localName: "verify";
    readonly name: "Verify";
    readonly kind: MethodKind.Unary;
    readonly I: typeof VerifyRequest;
    readonly O: typeof VerifyResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.SessionService";
    };
};
/**
 * Update request. We intend this to be generic.
 *
 * @generated from rpc uniswap.platformservice.v1.SessionService.UpdateSession
 */
export declare const updateSession: {
    readonly localName: "updateSession";
    readonly name: "UpdateSession";
    readonly kind: MethodKind.Unary;
    readonly I: typeof UpdateSessionRequest;
    readonly O: typeof UpdateSessionResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.SessionService";
    };
};
/**
 * Sign out user and clear authenticated session
 *
 * @generated from rpc uniswap.platformservice.v1.SessionService.Signout
 */
export declare const signout: {
    readonly localName: "signout";
    readonly name: "Signout";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SignoutRequest;
    readonly O: typeof SignoutResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.SessionService";
    };
};
