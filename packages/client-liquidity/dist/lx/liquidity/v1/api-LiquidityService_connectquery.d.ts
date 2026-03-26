import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
import { CheckApprovalLPRequest, CheckApprovalLPResponse, ClaimLPFeesRequest, ClaimLPFeesResponse, ClaimLPRewardsRequest, ClaimLPRewardsResponse, CreateLPPositionRequest, CreateLPPositionResponse, DecreaseLPPositionRequest, DecreaseLPPositionResponse, GetLPPriceDiscrepancyRequest, GetLPPriceDiscrepancyResponse, IncreaseLPPositionRequest, IncreaseLPPositionResponse, MigrateV2ToV3LPPositionRequest, MigrateV2ToV3LPPositionResponse, MigrateV3ToV4LPPositionRequest, MigrateV3ToV4LPPositionResponse, PoolInfoRequest, PoolInfoResponse } from "./api_pb.js";
/**
 * @generated from rpc uniswap.liquidity.v1.LiquidityService.MigrateV2ToV3LPPosition
 */
export declare const migrateV2ToV3LPPosition: {
    readonly localName: "migrateV2ToV3LPPosition";
    readonly name: "MigrateV2ToV3LPPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof MigrateV2ToV3LPPositionRequest;
    readonly O: typeof MigrateV2ToV3LPPositionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.LiquidityService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.LiquidityService.MigrateV3ToV4LPPosition
 */
export declare const migrateV3ToV4LPPosition: {
    readonly localName: "migrateV3ToV4LPPosition";
    readonly name: "MigrateV3ToV4LPPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof MigrateV3ToV4LPPositionRequest;
    readonly O: typeof MigrateV3ToV4LPPositionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.LiquidityService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.LiquidityService.ClaimLPRewards
 */
export declare const claimLPRewards: {
    readonly localName: "claimLPRewards";
    readonly name: "ClaimLPRewards";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ClaimLPRewardsRequest;
    readonly O: typeof ClaimLPRewardsResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.LiquidityService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.LiquidityService.PoolInfo
 */
export declare const poolInfo: {
    readonly localName: "poolInfo";
    readonly name: "PoolInfo";
    readonly kind: MethodKind.Unary;
    readonly I: typeof PoolInfoRequest;
    readonly O: typeof PoolInfoResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.LiquidityService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.LiquidityService.CreateLPPosition
 */
export declare const createLPPosition: {
    readonly localName: "createLPPosition";
    readonly name: "CreateLPPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CreateLPPositionRequest;
    readonly O: typeof CreateLPPositionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.LiquidityService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.LiquidityService.IncreaseLPPosition
 */
export declare const increaseLPPosition: {
    readonly localName: "increaseLPPosition";
    readonly name: "IncreaseLPPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof IncreaseLPPositionRequest;
    readonly O: typeof IncreaseLPPositionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.LiquidityService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.LiquidityService.DecreaseLPPosition
 */
export declare const decreaseLPPosition: {
    readonly localName: "decreaseLPPosition";
    readonly name: "DecreaseLPPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof DecreaseLPPositionRequest;
    readonly O: typeof DecreaseLPPositionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.LiquidityService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.LiquidityService.ClaimLPFees
 */
export declare const claimLPFees: {
    readonly localName: "claimLPFees";
    readonly name: "ClaimLPFees";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ClaimLPFeesRequest;
    readonly O: typeof ClaimLPFeesResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.LiquidityService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.LiquidityService.CheckLPApproval
 */
export declare const checkLPApproval: {
    readonly localName: "checkLPApproval";
    readonly name: "CheckLPApproval";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CheckApprovalLPRequest;
    readonly O: typeof CheckApprovalLPResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.LiquidityService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.LiquidityService.GetLPPriceDiscrepancy
 */
export declare const getLPPriceDiscrepancy: {
    readonly localName: "getLPPriceDiscrepancy";
    readonly name: "GetLPPriceDiscrepancy";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetLPPriceDiscrepancyRequest;
    readonly O: typeof GetLPPriceDiscrepancyResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.LiquidityService";
    };
};
