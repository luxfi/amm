import { LPApprovalRequest, LPApprovalResponse, MigrateV2ToV3LPPositionRequest, MigrateV2ToV3LPPositionResponse } from "./api_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service uniswap.liquidity.v2.LiquidityService
 */
export declare const LiquidityService: {
    readonly typeName: "uniswap.liquidity.v2.LiquidityService";
    readonly methods: {
        /**
         * @generated from rpc uniswap.liquidity.v2.LiquidityService.MigrateV2ToV3LPPosition
         */
        readonly migrateV2ToV3LPPosition: {
            readonly name: "MigrateV2ToV3LPPosition";
            readonly I: typeof MigrateV2ToV3LPPositionRequest;
            readonly O: typeof MigrateV2ToV3LPPositionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v2.LiquidityService.CheckLPApproval
         */
        readonly checkLPApproval: {
            readonly name: "CheckLPApproval";
            readonly I: typeof LPApprovalRequest;
            readonly O: typeof LPApprovalResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
    };
};
