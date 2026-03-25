import { CheckApprovalLPRequest, CheckApprovalLPResponse, ClaimLPFeesRequest, ClaimLPFeesResponse, ClaimLPRewardsRequest, ClaimLPRewardsResponse, CreateLPPositionRequest, CreateLPPositionResponse, DecreaseLPPositionRequest, DecreaseLPPositionResponse, GetLPPriceDiscrepancyRequest, GetLPPriceDiscrepancyResponse, IncreaseLPPositionRequest, IncreaseLPPositionResponse, MigrateV2ToV3LPPositionRequest, MigrateV2ToV3LPPositionResponse, MigrateV3ToV4LPPositionRequest, MigrateV3ToV4LPPositionResponse, PoolInfoRequest, PoolInfoResponse } from "./api_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service uniswap.liquidity.v1.LiquidityService
 */
export declare const LiquidityService: {
    readonly typeName: "uniswap.liquidity.v1.LiquidityService";
    readonly methods: {
        /**
         * @generated from rpc uniswap.liquidity.v1.LiquidityService.MigrateV2ToV3LPPosition
         */
        readonly migrateV2ToV3LPPosition: {
            readonly name: "MigrateV2ToV3LPPosition";
            readonly I: typeof MigrateV2ToV3LPPositionRequest;
            readonly O: typeof MigrateV2ToV3LPPositionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.LiquidityService.MigrateV3ToV4LPPosition
         */
        readonly migrateV3ToV4LPPosition: {
            readonly name: "MigrateV3ToV4LPPosition";
            readonly I: typeof MigrateV3ToV4LPPositionRequest;
            readonly O: typeof MigrateV3ToV4LPPositionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.LiquidityService.ClaimLPRewards
         */
        readonly claimLPRewards: {
            readonly name: "ClaimLPRewards";
            readonly I: typeof ClaimLPRewardsRequest;
            readonly O: typeof ClaimLPRewardsResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.LiquidityService.PoolInfo
         */
        readonly poolInfo: {
            readonly name: "PoolInfo";
            readonly I: typeof PoolInfoRequest;
            readonly O: typeof PoolInfoResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.LiquidityService.CreateLPPosition
         */
        readonly createLPPosition: {
            readonly name: "CreateLPPosition";
            readonly I: typeof CreateLPPositionRequest;
            readonly O: typeof CreateLPPositionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.LiquidityService.IncreaseLPPosition
         */
        readonly increaseLPPosition: {
            readonly name: "IncreaseLPPosition";
            readonly I: typeof IncreaseLPPositionRequest;
            readonly O: typeof IncreaseLPPositionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.LiquidityService.DecreaseLPPosition
         */
        readonly decreaseLPPosition: {
            readonly name: "DecreaseLPPosition";
            readonly I: typeof DecreaseLPPositionRequest;
            readonly O: typeof DecreaseLPPositionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.LiquidityService.ClaimLPFees
         */
        readonly claimLPFees: {
            readonly name: "ClaimLPFees";
            readonly I: typeof ClaimLPFeesRequest;
            readonly O: typeof ClaimLPFeesResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.LiquidityService.CheckLPApproval
         */
        readonly checkLPApproval: {
            readonly name: "CheckLPApproval";
            readonly I: typeof CheckApprovalLPRequest;
            readonly O: typeof CheckApprovalLPResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.LiquidityService.GetLPPriceDiscrepancy
         */
        readonly getLPPriceDiscrepancy: {
            readonly name: "GetLPPriceDiscrepancy";
            readonly I: typeof GetLPPriceDiscrepancyRequest;
            readonly O: typeof GetLPPriceDiscrepancyResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
    };
};
