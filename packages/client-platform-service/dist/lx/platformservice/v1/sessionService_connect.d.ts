import { ChallengeRequest, ChallengeResponse, GetChallengeTypesRequest, GetChallengeTypesResponse, InitSessionRequest, InitSessionResponse, IntrospectSessionRequest, IntrospectSessionResponse, SignoutRequest, SignoutResponse, UpdateSessionRequest, UpdateSessionResponse, VerifyRequest, VerifyResponse } from "./sessionService_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service uniswap.platformservice.v1.SessionService
 */
export declare const SessionService: {
    readonly typeName: "uniswap.platformservice.v1.SessionService";
    readonly methods: {
        /**
         * typically utilized by Entry Gateway for inspecting the validity of a session
         *
         * @generated from rpc uniswap.platformservice.v1.SessionService.IntrospectSession
         */
        readonly introspectSession: {
            readonly name: "IntrospectSession";
            readonly I: typeof IntrospectSessionRequest;
            readonly O: typeof IntrospectSessionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * used by client for initializing a session
         *
         * @generated from rpc uniswap.platformservice.v1.SessionService.InitSession
         */
        readonly initSession: {
            readonly name: "InitSession";
            readonly I: typeof InitSessionRequest;
            readonly O: typeof InitSessionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * return a list of possible challenge types
         *
         * @generated from rpc uniswap.platformservice.v1.SessionService.GetChallengeTypes
         */
        readonly getChallengeTypes: {
            readonly name: "GetChallengeTypes";
            readonly I: typeof GetChallengeTypesRequest;
            readonly O: typeof GetChallengeTypesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * used by client to request a challenge
         *
         * @generated from rpc uniswap.platformservice.v1.SessionService.Challenge
         */
        readonly challenge: {
            readonly name: "Challenge";
            readonly I: typeof ChallengeRequest;
            readonly O: typeof ChallengeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * a universal method for all challenge types (auth and bot detection)
         * OauthVerify is implemented separately as a pure GET endpoint, which proxy request to Verify POST locally.
         *
         * @generated from rpc uniswap.platformservice.v1.SessionService.Verify
         */
        readonly verify: {
            readonly name: "Verify";
            readonly I: typeof VerifyRequest;
            readonly O: typeof VerifyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update request. We intend this to be generic.
         *
         * @generated from rpc uniswap.platformservice.v1.SessionService.UpdateSession
         */
        readonly updateSession: {
            readonly name: "UpdateSession";
            readonly I: typeof UpdateSessionRequest;
            readonly O: typeof UpdateSessionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Sign out user and clear authenticated session
         *
         * @generated from rpc uniswap.platformservice.v1.SessionService.Signout
         */
        readonly signout: {
            readonly name: "Signout";
            readonly I: typeof SignoutRequest;
            readonly O: typeof SignoutResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
