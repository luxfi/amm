import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
import { CheckApprovalLPRequest, CheckApprovalLPResponse, CheckApprovalRequest, CheckApprovalResponse, CheckWalletDelegationRequest, CheckWalletDelegationResponse, ClaimLPFeesRequest, ClaimLPFeesResponse, CreateLPPositionRequest, CreateLPPositionResponse, CreatePlanRequest, DecreaseLPPositionRequest, DecreaseLPPositionResponse, DocsRequest, DocsResponse, Encode7702Request, Encode7702Response, GetLPPriceDiscrepancyRequest, GetLPPriceDiscrepancyResponse, GetOrdersRequest, GetOrdersResponse, GetPlanRequest, GetPlansRequest, GetPlansResponse, GetSwapsRequest, GetSwapsResponse, IncreaseLPPositionRequest, IncreaseLPPositionResponse, MigrateLpPositionRequest, MigrateLpPositionResponse, OrderRequest, OrderResponse, PlanResponse, PoolInfoRequest, PoolInfoResponse, QuoteRequest, QuoteResponse, SendRequest, SendResponse, Swap5792Request, Swap5792Response, Swap7702Request, Swap7702Response, SwappableTokensRequest, SwappableTokensResponse, SwapRequest, SwapResponse, UpdatePlanRequest } from "./api_pb.js";
/**
 * @generated from rpc trading.v1.tradingService.Quote
 */
export declare const quote: {
    readonly localName: "quote";
    readonly name: "Quote";
    readonly kind: MethodKind.Unary;
    readonly I: typeof QuoteRequest;
    readonly O: typeof QuoteResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.Swap
 */
export declare const swap: {
    readonly localName: "swap";
    readonly name: "Swap";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SwapRequest;
    readonly O: typeof SwapResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.Swap7702
 */
export declare const swap7702: {
    readonly localName: "swap7702";
    readonly name: "Swap7702";
    readonly kind: MethodKind.Unary;
    readonly I: typeof Swap7702Request;
    readonly O: typeof Swap7702Response;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.CheckApproval
 */
export declare const checkApproval: {
    readonly localName: "checkApproval";
    readonly name: "CheckApproval";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CheckApprovalRequest;
    readonly O: typeof CheckApprovalResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.GetSwaps
 */
export declare const getSwaps: {
    readonly localName: "getSwaps";
    readonly name: "GetSwaps";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetSwapsRequest;
    readonly O: typeof GetSwapsResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.SwappableTokens
 */
export declare const swappableTokens: {
    readonly localName: "swappableTokens";
    readonly name: "SwappableTokens";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SwappableTokensRequest;
    readonly O: typeof SwappableTokensResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.GetOrders
 */
export declare const getOrders: {
    readonly localName: "getOrders";
    readonly name: "GetOrders";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetOrdersRequest;
    readonly O: typeof GetOrdersResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.Order
 */
export declare const order: {
    readonly localName: "order";
    readonly name: "Order";
    readonly kind: MethodKind.Unary;
    readonly I: typeof OrderRequest;
    readonly O: typeof OrderResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.CreateLPPosition
 */
export declare const createLPPosition: {
    readonly localName: "createLPPosition";
    readonly name: "CreateLPPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CreateLPPositionRequest;
    readonly O: typeof CreateLPPositionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.IncreaseLPPosition
 */
export declare const increaseLPPosition: {
    readonly localName: "increaseLPPosition";
    readonly name: "IncreaseLPPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof IncreaseLPPositionRequest;
    readonly O: typeof IncreaseLPPositionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.DecreaseLPPosition
 */
export declare const decreaseLPPosition: {
    readonly localName: "decreaseLPPosition";
    readonly name: "DecreaseLPPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof DecreaseLPPositionRequest;
    readonly O: typeof DecreaseLPPositionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.ClaimLPFees
 */
export declare const claimLPFees: {
    readonly localName: "claimLPFees";
    readonly name: "ClaimLPFees";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ClaimLPFeesRequest;
    readonly O: typeof ClaimLPFeesResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.MigrateLpPosition
 */
export declare const migrateLpPosition: {
    readonly localName: "migrateLpPosition";
    readonly name: "MigrateLpPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof MigrateLpPositionRequest;
    readonly O: typeof MigrateLpPositionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.CheckLPApproval
 */
export declare const checkLPApproval: {
    readonly localName: "checkLPApproval";
    readonly name: "CheckLPApproval";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CheckApprovalLPRequest;
    readonly O: typeof CheckApprovalLPResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.Send
 */
export declare const send: {
    readonly localName: "send";
    readonly name: "Send";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SendRequest;
    readonly O: typeof SendResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.CheckWalletDelegation
 */
export declare const checkWalletDelegation: {
    readonly localName: "checkWalletDelegation";
    readonly name: "CheckWalletDelegation";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CheckWalletDelegationRequest;
    readonly O: typeof CheckWalletDelegationResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.PoolInfo
 */
export declare const poolInfo: {
    readonly localName: "poolInfo";
    readonly name: "PoolInfo";
    readonly kind: MethodKind.Unary;
    readonly I: typeof PoolInfoRequest;
    readonly O: typeof PoolInfoResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.Swap5792
 */
export declare const swap5792: {
    readonly localName: "swap5792";
    readonly name: "Swap5792";
    readonly kind: MethodKind.Unary;
    readonly I: typeof Swap5792Request;
    readonly O: typeof Swap5792Response;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.GetLPPriceDiscrepancy
 */
export declare const getLPPriceDiscrepancy: {
    readonly localName: "getLPPriceDiscrepancy";
    readonly name: "GetLPPriceDiscrepancy";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetLPPriceDiscrepancyRequest;
    readonly O: typeof GetLPPriceDiscrepancyResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.Encode7702
 */
export declare const encode7702: {
    readonly localName: "encode7702";
    readonly name: "Encode7702";
    readonly kind: MethodKind.Unary;
    readonly I: typeof Encode7702Request;
    readonly O: typeof Encode7702Response;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.CreatePlan
 */
export declare const createPlan: {
    readonly localName: "createPlan";
    readonly name: "CreatePlan";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CreatePlanRequest;
    readonly O: typeof PlanResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.GetPlan
 */
export declare const getPlan: {
    readonly localName: "getPlan";
    readonly name: "GetPlan";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetPlanRequest;
    readonly O: typeof PlanResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.UpdatePlan
 */
export declare const updatePlan: {
    readonly localName: "updatePlan";
    readonly name: "UpdatePlan";
    readonly kind: MethodKind.Unary;
    readonly I: typeof UpdatePlanRequest;
    readonly O: typeof PlanResponse;
    readonly idempotency: MethodIdempotency.Idempotent;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.GetDocs
 */
export declare const getDocs: {
    readonly localName: "getDocs";
    readonly name: "GetDocs";
    readonly kind: MethodKind.Unary;
    readonly I: typeof DocsRequest;
    readonly O: typeof DocsResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
/**
 * @generated from rpc trading.v1.tradingService.GetPlans
 */
export declare const getPlans: {
    readonly localName: "getPlans";
    readonly name: "GetPlans";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetPlansRequest;
    readonly O: typeof GetPlansResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "trading.v1.tradingService";
    };
};
