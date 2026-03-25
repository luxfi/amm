import { MethodKind } from "@bufbuild/protobuf";
import { CreatePendingTokenFactoryTokenRequest, CreatePendingTokenFactoryTokenResponse, CreateTokenFactoryPresignedUrlRequest, CreateTokenFactoryPresignedUrlResponse, GetPairRequest, GetPairResponse, GetPoolRequest, GetPoolResponse, GetPortfolioChartRequest, GetPortfolioChartResponse, GetPortfolioRequest, GetPortfolioResponse, GetPositionRequest, GetPositionResponse, GetProtocolStatsRequest, GetProtocolStatsResponse, GetRewardsRequest, GetRewardsResponse, GetTokenPricesRequest, GetTokenPricesResponse, GetTokenRequest, GetTokenResponse, GetTransactionRequest, GetTransactionResponse, GetWalletProfitLossRequest, GetWalletProfitLossResponse, GetWalletTokenProfitLossRequest, GetWalletTokenProfitLossResponse, GetWalletTokensProfitLossRequest, GetWalletTokensProfitLossResponse, ListPoolsRequest, ListPoolsResponse, ListPortfoliosRequest, ListPortfoliosResponse, ListPositionsRequest, ListPositionsResponse, ListTokensRequest, ListTokensResponse, ListTopPoolsRequest, ListTopPoolsResponse, ListTransactionsRequest, ListTransactionsResponse, SubmitReportRequest, SubmitReportResponse, SubmitTokenFactoryTokenRequest, SubmitTokenFactoryTokenResponse } from "./api_pb.js";
/**
 * @generated from rpc data.v1.DataApiService.CreatePendingTokenFactoryToken
 */
export declare const createPendingTokenFactoryToken: {
    readonly localName: "createPendingTokenFactoryToken";
    readonly name: "CreatePendingTokenFactoryToken";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CreatePendingTokenFactoryTokenRequest;
    readonly O: typeof CreatePendingTokenFactoryTokenResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.SubmitTokenFactoryToken
 */
export declare const submitTokenFactoryToken: {
    readonly localName: "submitTokenFactoryToken";
    readonly name: "SubmitTokenFactoryToken";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SubmitTokenFactoryTokenRequest;
    readonly O: typeof SubmitTokenFactoryTokenResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetToken
 */
export declare const getToken: {
    readonly localName: "getToken";
    readonly name: "GetToken";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetTokenRequest;
    readonly O: typeof GetTokenResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.SubmitReport
 */
export declare const submitReport: {
    readonly localName: "submitReport";
    readonly name: "SubmitReport";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SubmitReportRequest;
    readonly O: typeof SubmitReportResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetPortfolio
 */
export declare const getPortfolio: {
    readonly localName: "getPortfolio";
    readonly name: "GetPortfolio";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetPortfolioRequest;
    readonly O: typeof GetPortfolioResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.ListPortfolios
 */
export declare const listPortfolios: {
    readonly localName: "listPortfolios";
    readonly name: "ListPortfolios";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ListPortfoliosRequest;
    readonly O: typeof ListPortfoliosResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetPortfolioChart
 */
export declare const getPortfolioChart: {
    readonly localName: "getPortfolioChart";
    readonly name: "GetPortfolioChart";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetPortfolioChartRequest;
    readonly O: typeof GetPortfolioChartResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetTransaction
 */
export declare const getTransaction: {
    readonly localName: "getTransaction";
    readonly name: "GetTransaction";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetTransactionRequest;
    readonly O: typeof GetTransactionResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.ListTransactions
 */
export declare const listTransactions: {
    readonly localName: "listTransactions";
    readonly name: "ListTransactions";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ListTransactionsRequest;
    readonly O: typeof ListTransactionsResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.CreateTokenFactoryPresignedUrl
 */
export declare const createTokenFactoryPresignedUrl: {
    readonly localName: "createTokenFactoryPresignedUrl";
    readonly name: "CreateTokenFactoryPresignedUrl";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CreateTokenFactoryPresignedUrlRequest;
    readonly O: typeof CreateTokenFactoryPresignedUrlResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetPair
 */
export declare const getPair: {
    readonly localName: "getPair";
    readonly name: "GetPair";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetPairRequest;
    readonly O: typeof GetPairResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetPool
 */
export declare const getPool: {
    readonly localName: "getPool";
    readonly name: "GetPool";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetPoolRequest;
    readonly O: typeof GetPoolResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetPosition
 */
export declare const getPosition: {
    readonly localName: "getPosition";
    readonly name: "GetPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetPositionRequest;
    readonly O: typeof GetPositionResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.ListPools
 */
export declare const listPools: {
    readonly localName: "listPools";
    readonly name: "ListPools";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ListPoolsRequest;
    readonly O: typeof ListPoolsResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.ListPositions
 */
export declare const listPositions: {
    readonly localName: "listPositions";
    readonly name: "ListPositions";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ListPositionsRequest;
    readonly O: typeof ListPositionsResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetRewards
 */
export declare const getRewards: {
    readonly localName: "getRewards";
    readonly name: "GetRewards";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetRewardsRequest;
    readonly O: typeof GetRewardsResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.ListTopPools
 */
export declare const listTopPools: {
    readonly localName: "listTopPools";
    readonly name: "ListTopPools";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ListTopPoolsRequest;
    readonly O: typeof ListTopPoolsResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.ListTokens
 */
export declare const listTokens: {
    readonly localName: "listTokens";
    readonly name: "ListTokens";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ListTokensRequest;
    readonly O: typeof ListTokensResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetProtocolStats
 */
export declare const getProtocolStats: {
    readonly localName: "getProtocolStats";
    readonly name: "GetProtocolStats";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetProtocolStatsRequest;
    readonly O: typeof GetProtocolStatsResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetTokenPrices
 */
export declare const getTokenPrices: {
    readonly localName: "getTokenPrices";
    readonly name: "GetTokenPrices";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetTokenPricesRequest;
    readonly O: typeof GetTokenPricesResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetWalletProfitLoss
 */
export declare const getWalletProfitLoss: {
    readonly localName: "getWalletProfitLoss";
    readonly name: "GetWalletProfitLoss";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetWalletProfitLossRequest;
    readonly O: typeof GetWalletProfitLossResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetWalletTokensProfitLoss
 */
export declare const getWalletTokensProfitLoss: {
    readonly localName: "getWalletTokensProfitLoss";
    readonly name: "GetWalletTokensProfitLoss";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetWalletTokensProfitLossRequest;
    readonly O: typeof GetWalletTokensProfitLossResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
/**
 * @generated from rpc data.v1.DataApiService.GetWalletTokenProfitLoss
 */
export declare const getWalletTokenProfitLoss: {
    readonly localName: "getWalletTokenProfitLoss";
    readonly name: "GetWalletTokenProfitLoss";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetWalletTokenProfitLossRequest;
    readonly O: typeof GetWalletTokenProfitLossResponse;
    readonly service: {
        readonly typeName: "data.v1.DataApiService";
    };
};
