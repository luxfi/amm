import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
import { LPApprovalRequest, LPApprovalResponse, MigrateV2ToV3LPPositionRequest, MigrateV2ToV3LPPositionResponse } from "./api_pb.js";
/**
 * @generated from rpc uniswap.liquidity.v2.LiquidityService.MigrateV2ToV3LPPosition
 */
export declare const migrateV2ToV3LPPosition: {
    readonly localName: "migrateV2ToV3LPPosition";
    readonly name: "MigrateV2ToV3LPPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof MigrateV2ToV3LPPositionRequest;
    readonly O: typeof MigrateV2ToV3LPPositionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v2.LiquidityService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v2.LiquidityService.CheckLPApproval
 */
export declare const checkLPApproval: {
    readonly localName: "checkLPApproval";
    readonly name: "CheckLPApproval";
    readonly kind: MethodKind.Unary;
    readonly I: typeof LPApprovalRequest;
    readonly O: typeof LPApprovalResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v2.LiquidityService";
    };
};
