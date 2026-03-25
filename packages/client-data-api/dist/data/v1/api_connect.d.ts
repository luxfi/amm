import { CreatePendingTokenFactoryTokenRequest, CreatePendingTokenFactoryTokenResponse, CreateTokenFactoryPresignedUrlRequest, CreateTokenFactoryPresignedUrlResponse, GetPairRequest, GetPairResponse, GetPoolRequest, GetPoolResponse, GetPortfolioChartRequest, GetPortfolioChartResponse, GetPortfolioRequest, GetPortfolioResponse, GetPositionRequest, GetPositionResponse, GetProtocolStatsRequest, GetProtocolStatsResponse, GetRewardsRequest, GetRewardsResponse, GetTokenPricesRequest, GetTokenPricesResponse, GetTokenRequest, GetTokenResponse, GetTransactionRequest, GetTransactionResponse, GetWalletProfitLossRequest, GetWalletProfitLossResponse, GetWalletTokenProfitLossRequest, GetWalletTokenProfitLossResponse, GetWalletTokensProfitLossRequest, GetWalletTokensProfitLossResponse, ListPoolsRequest, ListPoolsResponse, ListPortfoliosRequest, ListPortfoliosResponse, ListPositionsRequest, ListPositionsResponse, ListTokensRequest, ListTokensResponse, ListTopPoolsRequest, ListTopPoolsResponse, ListTransactionsRequest, ListTransactionsResponse, SubmitReportRequest, SubmitReportResponse, SubmitTokenFactoryTokenRequest, SubmitTokenFactoryTokenResponse } from "./api_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service data.v1.DataApiService
 */
export declare const DataApiService: {
    readonly typeName: "data.v1.DataApiService";
    readonly methods: {
        /**
         * @generated from rpc data.v1.DataApiService.CreatePendingTokenFactoryToken
         */
        readonly createPendingTokenFactoryToken: {
            readonly name: "CreatePendingTokenFactoryToken";
            readonly I: typeof CreatePendingTokenFactoryTokenRequest;
            readonly O: typeof CreatePendingTokenFactoryTokenResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.SubmitTokenFactoryToken
         */
        readonly submitTokenFactoryToken: {
            readonly name: "SubmitTokenFactoryToken";
            readonly I: typeof SubmitTokenFactoryTokenRequest;
            readonly O: typeof SubmitTokenFactoryTokenResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetToken
         */
        readonly getToken: {
            readonly name: "GetToken";
            readonly I: typeof GetTokenRequest;
            readonly O: typeof GetTokenResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.SubmitReport
         */
        readonly submitReport: {
            readonly name: "SubmitReport";
            readonly I: typeof SubmitReportRequest;
            readonly O: typeof SubmitReportResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetPortfolio
         */
        readonly getPortfolio: {
            readonly name: "GetPortfolio";
            readonly I: typeof GetPortfolioRequest;
            readonly O: typeof GetPortfolioResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.ListPortfolios
         */
        readonly listPortfolios: {
            readonly name: "ListPortfolios";
            readonly I: typeof ListPortfoliosRequest;
            readonly O: typeof ListPortfoliosResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetPortfolioChart
         */
        readonly getPortfolioChart: {
            readonly name: "GetPortfolioChart";
            readonly I: typeof GetPortfolioChartRequest;
            readonly O: typeof GetPortfolioChartResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetTransaction
         */
        readonly getTransaction: {
            readonly name: "GetTransaction";
            readonly I: typeof GetTransactionRequest;
            readonly O: typeof GetTransactionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.ListTransactions
         */
        readonly listTransactions: {
            readonly name: "ListTransactions";
            readonly I: typeof ListTransactionsRequest;
            readonly O: typeof ListTransactionsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.CreateTokenFactoryPresignedUrl
         */
        readonly createTokenFactoryPresignedUrl: {
            readonly name: "CreateTokenFactoryPresignedUrl";
            readonly I: typeof CreateTokenFactoryPresignedUrlRequest;
            readonly O: typeof CreateTokenFactoryPresignedUrlResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetPair
         */
        readonly getPair: {
            readonly name: "GetPair";
            readonly I: typeof GetPairRequest;
            readonly O: typeof GetPairResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetPool
         */
        readonly getPool: {
            readonly name: "GetPool";
            readonly I: typeof GetPoolRequest;
            readonly O: typeof GetPoolResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetPosition
         */
        readonly getPosition: {
            readonly name: "GetPosition";
            readonly I: typeof GetPositionRequest;
            readonly O: typeof GetPositionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.ListPools
         */
        readonly listPools: {
            readonly name: "ListPools";
            readonly I: typeof ListPoolsRequest;
            readonly O: typeof ListPoolsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.ListPositions
         */
        readonly listPositions: {
            readonly name: "ListPositions";
            readonly I: typeof ListPositionsRequest;
            readonly O: typeof ListPositionsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetRewards
         */
        readonly getRewards: {
            readonly name: "GetRewards";
            readonly I: typeof GetRewardsRequest;
            readonly O: typeof GetRewardsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.ListTopPools
         */
        readonly listTopPools: {
            readonly name: "ListTopPools";
            readonly I: typeof ListTopPoolsRequest;
            readonly O: typeof ListTopPoolsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.ListTokens
         */
        readonly listTokens: {
            readonly name: "ListTokens";
            readonly I: typeof ListTokensRequest;
            readonly O: typeof ListTokensResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetProtocolStats
         */
        readonly getProtocolStats: {
            readonly name: "GetProtocolStats";
            readonly I: typeof GetProtocolStatsRequest;
            readonly O: typeof GetProtocolStatsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetTokenPrices
         */
        readonly getTokenPrices: {
            readonly name: "GetTokenPrices";
            readonly I: typeof GetTokenPricesRequest;
            readonly O: typeof GetTokenPricesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetWalletProfitLoss
         */
        readonly getWalletProfitLoss: {
            readonly name: "GetWalletProfitLoss";
            readonly I: typeof GetWalletProfitLossRequest;
            readonly O: typeof GetWalletProfitLossResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetWalletTokensProfitLoss
         */
        readonly getWalletTokensProfitLoss: {
            readonly name: "GetWalletTokensProfitLoss";
            readonly I: typeof GetWalletTokensProfitLossRequest;
            readonly O: typeof GetWalletTokensProfitLossResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.DataApiService.GetWalletTokenProfitLoss
         */
        readonly getWalletTokenProfitLoss: {
            readonly name: "GetWalletTokenProfitLoss";
            readonly I: typeof GetWalletTokenProfitLossRequest;
            readonly O: typeof GetWalletTokenProfitLossResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
