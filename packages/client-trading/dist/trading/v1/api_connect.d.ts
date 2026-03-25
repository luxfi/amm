import { CheckApprovalLPRequest, CheckApprovalLPResponse, CheckApprovalRequest, CheckApprovalResponse, CheckWalletDelegationRequest, CheckWalletDelegationResponse, ClaimLPFeesRequest, ClaimLPFeesResponse, CreateLPPositionRequest, CreateLPPositionResponse, CreatePlanRequest, DecreaseLPPositionRequest, DecreaseLPPositionResponse, DocsRequest, DocsResponse, Encode7702Request, Encode7702Response, GetLPPriceDiscrepancyRequest, GetLPPriceDiscrepancyResponse, GetOrdersRequest, GetOrdersResponse, GetPlanRequest, GetPlansRequest, GetPlansResponse, GetSwapsRequest, GetSwapsResponse, IncreaseLPPositionRequest, IncreaseLPPositionResponse, MigrateLpPositionRequest, MigrateLpPositionResponse, OrderRequest, OrderResponse, PlanResponse, PoolInfoRequest, PoolInfoResponse, QuoteRequest, QuoteResponse, SendRequest, SendResponse, Swap5792Request, Swap5792Response, Swap7702Request, Swap7702Response, SwappableTokensRequest, SwappableTokensResponse, SwapRequest, SwapResponse, UpdatePlanRequest } from "./api_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service trading.v1.tradingService
 */
export declare const tradingService: {
    readonly typeName: "trading.v1.tradingService";
    readonly methods: {
        /**
         * @generated from rpc trading.v1.tradingService.Quote
         */
        readonly quote: {
            readonly name: "Quote";
            readonly I: typeof QuoteRequest;
            readonly O: typeof QuoteResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.Swap
         */
        readonly swap: {
            readonly name: "Swap";
            readonly I: typeof SwapRequest;
            readonly O: typeof SwapResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.Swap7702
         */
        readonly swap7702: {
            readonly name: "Swap7702";
            readonly I: typeof Swap7702Request;
            readonly O: typeof Swap7702Response;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.CheckApproval
         */
        readonly checkApproval: {
            readonly name: "CheckApproval";
            readonly I: typeof CheckApprovalRequest;
            readonly O: typeof CheckApprovalResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.GetSwaps
         */
        readonly getSwaps: {
            readonly name: "GetSwaps";
            readonly I: typeof GetSwapsRequest;
            readonly O: typeof GetSwapsResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.SwappableTokens
         */
        readonly swappableTokens: {
            readonly name: "SwappableTokens";
            readonly I: typeof SwappableTokensRequest;
            readonly O: typeof SwappableTokensResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.GetOrders
         */
        readonly getOrders: {
            readonly name: "GetOrders";
            readonly I: typeof GetOrdersRequest;
            readonly O: typeof GetOrdersResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.Order
         */
        readonly order: {
            readonly name: "Order";
            readonly I: typeof OrderRequest;
            readonly O: typeof OrderResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.CreateLPPosition
         */
        readonly createLPPosition: {
            readonly name: "CreateLPPosition";
            readonly I: typeof CreateLPPositionRequest;
            readonly O: typeof CreateLPPositionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.IncreaseLPPosition
         */
        readonly increaseLPPosition: {
            readonly name: "IncreaseLPPosition";
            readonly I: typeof IncreaseLPPositionRequest;
            readonly O: typeof IncreaseLPPositionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.DecreaseLPPosition
         */
        readonly decreaseLPPosition: {
            readonly name: "DecreaseLPPosition";
            readonly I: typeof DecreaseLPPositionRequest;
            readonly O: typeof DecreaseLPPositionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.ClaimLPFees
         */
        readonly claimLPFees: {
            readonly name: "ClaimLPFees";
            readonly I: typeof ClaimLPFeesRequest;
            readonly O: typeof ClaimLPFeesResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.MigrateLpPosition
         */
        readonly migrateLpPosition: {
            readonly name: "MigrateLpPosition";
            readonly I: typeof MigrateLpPositionRequest;
            readonly O: typeof MigrateLpPositionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.CheckLPApproval
         */
        readonly checkLPApproval: {
            readonly name: "CheckLPApproval";
            readonly I: typeof CheckApprovalLPRequest;
            readonly O: typeof CheckApprovalLPResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.Send
         */
        readonly send: {
            readonly name: "Send";
            readonly I: typeof SendRequest;
            readonly O: typeof SendResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.CheckWalletDelegation
         */
        readonly checkWalletDelegation: {
            readonly name: "CheckWalletDelegation";
            readonly I: typeof CheckWalletDelegationRequest;
            readonly O: typeof CheckWalletDelegationResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.PoolInfo
         */
        readonly poolInfo: {
            readonly name: "PoolInfo";
            readonly I: typeof PoolInfoRequest;
            readonly O: typeof PoolInfoResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.Swap5792
         */
        readonly swap5792: {
            readonly name: "Swap5792";
            readonly I: typeof Swap5792Request;
            readonly O: typeof Swap5792Response;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.GetLPPriceDiscrepancy
         */
        readonly getLPPriceDiscrepancy: {
            readonly name: "GetLPPriceDiscrepancy";
            readonly I: typeof GetLPPriceDiscrepancyRequest;
            readonly O: typeof GetLPPriceDiscrepancyResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.Encode7702
         */
        readonly encode7702: {
            readonly name: "Encode7702";
            readonly I: typeof Encode7702Request;
            readonly O: typeof Encode7702Response;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.CreatePlan
         */
        readonly createPlan: {
            readonly name: "CreatePlan";
            readonly I: typeof CreatePlanRequest;
            readonly O: typeof PlanResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.GetPlan
         */
        readonly getPlan: {
            readonly name: "GetPlan";
            readonly I: typeof GetPlanRequest;
            readonly O: typeof PlanResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.UpdatePlan
         */
        readonly updatePlan: {
            readonly name: "UpdatePlan";
            readonly I: typeof UpdatePlanRequest;
            readonly O: typeof PlanResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.Idempotent;
        };
        /**
         * @generated from rpc trading.v1.tradingService.GetDocs
         */
        readonly getDocs: {
            readonly name: "GetDocs";
            readonly I: typeof DocsRequest;
            readonly O: typeof DocsResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc trading.v1.tradingService.GetPlans
         */
        readonly getPlans: {
            readonly name: "GetPlans";
            readonly I: typeof GetPlansRequest;
            readonly O: typeof GetPlansResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
    };
};
