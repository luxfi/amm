import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { MultichainToken, Pool as Pool$1, Portfolio, PortfolioValueModifier, Token, TokenDetailProfitLoss, TokenProfitLoss, TokenReportEventType, Transaction, TransactionTypeFilter, WalletProfitLoss } from "./types_pb.js";
import { Pair, Pool, Position, PositionStatus, ProtocolVersion } from "./poolTypes_pb.js";
/**
 * @generated from enum data.v1.Platform
 */
export declare enum Platform {
    /**
     * @generated from enum value: EVM = 0;
     */
    EVM = 0,
    /**
     * @generated from enum value: SVM = 1;
     */
    SVM = 1
}
/**
 * @generated from enum data.v1.OrderBy
 */
export declare enum OrderBy {
    /**
     * @generated from enum value: ORDER_BY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ORDER_BY_CREATION_DATE = 1;
     */
    CREATION_DATE = 1
}
/**
 * @generated from enum data.v1.TopPoolsOrderBy
 */
export declare enum TopPoolsOrderBy {
    /**
     * @generated from enum value: TOP_POOLS_ORDER_BY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: TOP_POOLS_ORDER_BY_TVL = 1;
     */
    TVL = 1,
    /**
     * @generated from enum value: TOP_POOLS_ORDER_BY_VOLUME_1D = 2;
     */
    VOLUME_1D = 2,
    /**
     * @generated from enum value: TOP_POOLS_ORDER_BY_VOLUME_30D = 3;
     */
    VOLUME_30D = 3,
    /**
     * @generated from enum value: TOP_POOLS_ORDER_BY_APR = 4;
     */
    APR = 4,
    /**
     * @generated from enum value: TOP_POOLS_ORDER_BY_REWARD_APR = 5;
     */
    REWARD_APR = 5
}
/**
 * @generated from enum data.v1.TokensOrderBy
 */
export declare enum TokensOrderBy {
    /**
     * @generated from enum value: TOKENS_ORDER_BY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: TOKENS_ORDER_BY_FDV = 1;
     */
    FDV = 1,
    /**
     * @generated from enum value: TOKENS_ORDER_BY_VOLUME_1H = 2;
     */
    VOLUME_1H = 2,
    /**
     * @generated from enum value: TOKENS_ORDER_BY_VOLUME_1D = 3;
     */
    VOLUME_1D = 3,
    /**
     * @generated from enum value: TOKENS_ORDER_BY_VOLUME_7D = 4;
     */
    VOLUME_7D = 4,
    /**
     * @generated from enum value: TOKENS_ORDER_BY_VOLUME_30D = 5;
     */
    VOLUME_30D = 5,
    /**
     * @generated from enum value: TOKENS_ORDER_BY_VOLUME_1Y = 6;
     */
    VOLUME_1Y = 6,
    /**
     * @generated from enum value: TOKENS_ORDER_BY_PRICE_CHANGE_1H = 7;
     */
    PRICE_CHANGE_1H = 7,
    /**
     * @generated from enum value: TOKENS_ORDER_BY_PRICE_CHANGE_1D = 8;
     */
    PRICE_CHANGE_1D = 8
}
/**
 * @generated from enum data.v1.ChartPeriod
 */
export declare enum ChartPeriod {
    /**
     * @generated from enum value: CHART_PERIOD_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CHART_PERIOD_HOUR = 1;
     */
    HOUR = 1,
    /**
     * @generated from enum value: CHART_PERIOD_DAY = 2;
     */
    DAY = 2,
    /**
     * @generated from enum value: CHART_PERIOD_WEEK = 3;
     */
    WEEK = 3,
    /**
     * @generated from enum value: CHART_PERIOD_MONTH = 4;
     */
    MONTH = 4,
    /**
     * @generated from enum value: CHART_PERIOD_YEAR = 5;
     */
    YEAR = 5,
    /**
     * @generated from enum value: CHART_PERIOD_MAX = 6;
     */
    MAX = 6
}
/**
 * @generated from message data.v1.CreatePendingTokenFactoryTokenRequest
 */
export declare class CreatePendingTokenFactoryTokenRequest extends Message<CreatePendingTokenFactoryTokenRequest> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: string token_address = 2;
     */
    tokenAddress: string;
    /**
     * @generated from field: uint32 chain_id = 3;
     */
    chainId: number;
    /**
     * @generated from field: string token_name = 4;
     */
    tokenName: string;
    /**
     * @generated from field: string token_symbol = 5;
     */
    tokenSymbol: string;
    /**
     * @generated from field: string image_url = 6;
     */
    imageUrl: string;
    /**
     * @generated from field: uint32 decimals = 7;
     */
    decimals: number;
    /**
     * @generated from field: optional string description = 8;
     */
    description?: string;
    /**
     * @generated from field: optional string website_url = 9;
     */
    websiteUrl?: string;
    /**
     * @generated from field: optional string x_url = 10;
     */
    xUrl?: string;
    constructor(data?: PartialMessage<CreatePendingTokenFactoryTokenRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.CreatePendingTokenFactoryTokenRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePendingTokenFactoryTokenRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePendingTokenFactoryTokenRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePendingTokenFactoryTokenRequest;
    static equals(a: CreatePendingTokenFactoryTokenRequest | PlainMessage<CreatePendingTokenFactoryTokenRequest> | undefined, b: CreatePendingTokenFactoryTokenRequest | PlainMessage<CreatePendingTokenFactoryTokenRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.CreatePendingTokenFactoryTokenResponse
 */
export declare class CreatePendingTokenFactoryTokenResponse extends Message<CreatePendingTokenFactoryTokenResponse> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<CreatePendingTokenFactoryTokenResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.CreatePendingTokenFactoryTokenResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePendingTokenFactoryTokenResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePendingTokenFactoryTokenResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePendingTokenFactoryTokenResponse;
    static equals(a: CreatePendingTokenFactoryTokenResponse | PlainMessage<CreatePendingTokenFactoryTokenResponse> | undefined, b: CreatePendingTokenFactoryTokenResponse | PlainMessage<CreatePendingTokenFactoryTokenResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.SubmitTokenFactoryTokenRequest
 */
export declare class SubmitTokenFactoryTokenRequest extends Message<SubmitTokenFactoryTokenRequest> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    constructor(data?: PartialMessage<SubmitTokenFactoryTokenRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.SubmitTokenFactoryTokenRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitTokenFactoryTokenRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitTokenFactoryTokenRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitTokenFactoryTokenRequest;
    static equals(a: SubmitTokenFactoryTokenRequest | PlainMessage<SubmitTokenFactoryTokenRequest> | undefined, b: SubmitTokenFactoryTokenRequest | PlainMessage<SubmitTokenFactoryTokenRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.SubmitTokenFactoryTokenResponse
 */
export declare class SubmitTokenFactoryTokenResponse extends Message<SubmitTokenFactoryTokenResponse> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<SubmitTokenFactoryTokenResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.SubmitTokenFactoryTokenResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitTokenFactoryTokenResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitTokenFactoryTokenResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitTokenFactoryTokenResponse;
    static equals(a: SubmitTokenFactoryTokenResponse | PlainMessage<SubmitTokenFactoryTokenResponse> | undefined, b: SubmitTokenFactoryTokenResponse | PlainMessage<SubmitTokenFactoryTokenResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.PlatformAddress
 */
export declare class PlatformAddress extends Message<PlatformAddress> {
    /**
     * @generated from field: data.v1.Platform platform = 1;
     */
    platform: Platform;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<PlatformAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.PlatformAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlatformAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlatformAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlatformAddress;
    static equals(a: PlatformAddress | PlainMessage<PlatformAddress> | undefined, b: PlatformAddress | PlainMessage<PlatformAddress> | undefined): boolean;
}
/**
 * @generated from message data.v1.WalletAccount
 */
export declare class WalletAccount extends Message<WalletAccount> {
    /**
     * @generated from field: repeated data.v1.PlatformAddress platform_addresses = 1;
     */
    platformAddresses: PlatformAddress[];
    constructor(data?: PartialMessage<WalletAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.WalletAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WalletAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WalletAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WalletAccount;
    static equals(a: WalletAccount | PlainMessage<WalletAccount> | undefined, b: WalletAccount | PlainMessage<WalletAccount> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetTokenRequest
 */
export declare class GetTokenRequest extends Message<GetTokenRequest> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<GetTokenRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetTokenRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTokenRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTokenRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTokenRequest;
    static equals(a: GetTokenRequest | PlainMessage<GetTokenRequest> | undefined, b: GetTokenRequest | PlainMessage<GetTokenRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetTokenResponse
 */
export declare class GetTokenResponse extends Message<GetTokenResponse> {
    /**
     * @generated from field: data.v1.Token token = 1;
     */
    token?: Token;
    constructor(data?: PartialMessage<GetTokenResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetTokenResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTokenResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTokenResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTokenResponse;
    static equals(a: GetTokenResponse | PlainMessage<GetTokenResponse> | undefined, b: GetTokenResponse | PlainMessage<GetTokenResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetPortfolioRequest
 */
export declare class GetPortfolioRequest extends Message<GetPortfolioRequest> {
    /**
     * @generated from field: data.v1.WalletAccount wallet_account = 1;
     */
    walletAccount?: WalletAccount;
    /**
     * @generated from field: repeated uint32 chain_ids = 2;
     */
    chainIds: number[];
    /**
     * @generated from field: optional data.v1.PortfolioValueModifier modifier = 3;
     */
    modifier?: PortfolioValueModifier;
    /**
     * @generated from field: optional bool multichain = 4;
     */
    multichain?: boolean;
    constructor(data?: PartialMessage<GetPortfolioRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetPortfolioRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPortfolioRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPortfolioRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPortfolioRequest;
    static equals(a: GetPortfolioRequest | PlainMessage<GetPortfolioRequest> | undefined, b: GetPortfolioRequest | PlainMessage<GetPortfolioRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetPortfolioResponse
 */
export declare class GetPortfolioResponse extends Message<GetPortfolioResponse> {
    /**
     * @generated from field: data.v1.Portfolio portfolio = 1;
     */
    portfolio?: Portfolio;
    constructor(data?: PartialMessage<GetPortfolioResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetPortfolioResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPortfolioResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPortfolioResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPortfolioResponse;
    static equals(a: GetPortfolioResponse | PlainMessage<GetPortfolioResponse> | undefined, b: GetPortfolioResponse | PlainMessage<GetPortfolioResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListPortfoliosRequest
 */
export declare class ListPortfoliosRequest extends Message<ListPortfoliosRequest> {
    /**
     * @generated from field: repeated data.v1.WalletAccount wallet_accounts = 1;
     */
    walletAccounts: WalletAccount[];
    /**
     * @generated from field: repeated uint32 chain_ids = 2;
     */
    chainIds: number[];
    /**
     * @generated from field: repeated data.v1.PortfolioValueModifier modifiers = 3;
     */
    modifiers: PortfolioValueModifier[];
    constructor(data?: PartialMessage<ListPortfoliosRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListPortfoliosRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPortfoliosRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPortfoliosRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPortfoliosRequest;
    static equals(a: ListPortfoliosRequest | PlainMessage<ListPortfoliosRequest> | undefined, b: ListPortfoliosRequest | PlainMessage<ListPortfoliosRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListPortfoliosResponse
 */
export declare class ListPortfoliosResponse extends Message<ListPortfoliosResponse> {
    /**
     * @generated from field: repeated data.v1.Portfolio portfolios = 1;
     */
    portfolios: Portfolio[];
    constructor(data?: PartialMessage<ListPortfoliosResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListPortfoliosResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPortfoliosResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPortfoliosResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPortfoliosResponse;
    static equals(a: ListPortfoliosResponse | PlainMessage<ListPortfoliosResponse> | undefined, b: ListPortfoliosResponse | PlainMessage<ListPortfoliosResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.SubmitReportRequest
 */
export declare class SubmitReportRequest extends Message<SubmitReportRequest> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: data.v1.TokenReportEventType event = 3;
     */
    event: TokenReportEventType;
    /**
     * @generated from field: string details = 4;
     */
    details: string;
    constructor(data?: PartialMessage<SubmitReportRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.SubmitReportRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitReportRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitReportRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitReportRequest;
    static equals(a: SubmitReportRequest | PlainMessage<SubmitReportRequest> | undefined, b: SubmitReportRequest | PlainMessage<SubmitReportRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.SubmitReportResponse
 */
export declare class SubmitReportResponse extends Message<SubmitReportResponse> {
    /**
     * @generated from field: bool success = 1;
     */
    success: boolean;
    constructor(data?: PartialMessage<SubmitReportResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.SubmitReportResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitReportResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitReportResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitReportResponse;
    static equals(a: SubmitReportResponse | PlainMessage<SubmitReportResponse> | undefined, b: SubmitReportResponse | PlainMessage<SubmitReportResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetTransactionRequest
 */
export declare class GetTransactionRequest extends Message<GetTransactionRequest> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string hash = 2;
     */
    hash: string;
    /**
     * @generated from field: optional string address = 3;
     */
    address?: string;
    constructor(data?: PartialMessage<GetTransactionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetTransactionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTransactionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTransactionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTransactionRequest;
    static equals(a: GetTransactionRequest | PlainMessage<GetTransactionRequest> | undefined, b: GetTransactionRequest | PlainMessage<GetTransactionRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetTransactionResponse
 */
export declare class GetTransactionResponse extends Message<GetTransactionResponse> {
    /**
     * @generated from field: data.v1.Transaction transaction = 1;
     */
    transaction?: Transaction;
    constructor(data?: PartialMessage<GetTransactionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetTransactionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTransactionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTransactionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTransactionResponse;
    static equals(a: GetTransactionResponse | PlainMessage<GetTransactionResponse> | undefined, b: GetTransactionResponse | PlainMessage<GetTransactionResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListTransactionsRequest
 */
export declare class ListTransactionsRequest extends Message<ListTransactionsRequest> {
    /**
     * @generated from field: repeated uint32 chain_ids = 1;
     */
    chainIds: number[];
    /**
     * @generated from field: data.v1.WalletAccount wallet_account = 2;
     */
    walletAccount?: WalletAccount;
    /**
     * @generated from field: optional data.v1.FiatOnRampParams fiat_on_ramp_params = 3;
     */
    fiatOnRampParams?: FiatOnRampParams;
    /**
     * @generated from field: optional string page_token = 4;
     */
    pageToken?: string;
    /**
     * @generated from field: optional uint32 page_size = 5;
     */
    pageSize?: number;
    /**
     * @generated from field: optional bool include_plans = 6;
     */
    includePlans?: boolean;
    /**
     * @generated from field: repeated data.v1.TransactionTypeFilter filter_transaction_types = 7;
     */
    filterTransactionTypes: TransactionTypeFilter[];
    /**
     * @generated from field: optional string search_text = 8;
     */
    searchText?: string;
    constructor(data?: PartialMessage<ListTransactionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListTransactionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTransactionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTransactionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTransactionsRequest;
    static equals(a: ListTransactionsRequest | PlainMessage<ListTransactionsRequest> | undefined, b: ListTransactionsRequest | PlainMessage<ListTransactionsRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.FiatOnRampParams
 */
export declare class FiatOnRampParams extends Message<FiatOnRampParams> {
    /**
     * @generated from oneof data.v1.FiatOnRampParams.params
     */
    params: {
        /**
         * @generated from field: data.v1.FiatOnRampTransactionIds transaction_ids = 1;
         */
        value: FiatOnRampTransactionIds;
        case: "transactionIds";
    } | {
        /**
         * @generated from field: data.v1.FiatOnRampAuth auth = 2;
         */
        value: FiatOnRampAuth;
        case: "auth";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<FiatOnRampParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.FiatOnRampParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FiatOnRampParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FiatOnRampParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FiatOnRampParams;
    static equals(a: FiatOnRampParams | PlainMessage<FiatOnRampParams> | undefined, b: FiatOnRampParams | PlainMessage<FiatOnRampParams> | undefined): boolean;
}
/**
 * @generated from message data.v1.FiatOnRampAuth
 */
export declare class FiatOnRampAuth extends Message<FiatOnRampAuth> {
    /**
     * @generated from field: string query_params = 1;
     */
    queryParams: string;
    /**
     * @generated from field: string signature = 2;
     */
    signature: string;
    constructor(data?: PartialMessage<FiatOnRampAuth>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.FiatOnRampAuth";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FiatOnRampAuth;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FiatOnRampAuth;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FiatOnRampAuth;
    static equals(a: FiatOnRampAuth | PlainMessage<FiatOnRampAuth> | undefined, b: FiatOnRampAuth | PlainMessage<FiatOnRampAuth> | undefined): boolean;
}
/**
 * @generated from message data.v1.FiatOnRampTransactionIds
 */
export declare class FiatOnRampTransactionIds extends Message<FiatOnRampTransactionIds> {
    /**
     * @generated from field: repeated string transaction_ids = 1;
     */
    transactionIds: string[];
    constructor(data?: PartialMessage<FiatOnRampTransactionIds>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.FiatOnRampTransactionIds";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FiatOnRampTransactionIds;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FiatOnRampTransactionIds;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FiatOnRampTransactionIds;
    static equals(a: FiatOnRampTransactionIds | PlainMessage<FiatOnRampTransactionIds> | undefined, b: FiatOnRampTransactionIds | PlainMessage<FiatOnRampTransactionIds> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListTransactionsResponse
 */
export declare class ListTransactionsResponse extends Message<ListTransactionsResponse> {
    /**
     * @generated from field: repeated data.v1.Transaction transactions = 1;
     */
    transactions: Transaction[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<ListTransactionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListTransactionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTransactionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTransactionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTransactionsResponse;
    static equals(a: ListTransactionsResponse | PlainMessage<ListTransactionsResponse> | undefined, b: ListTransactionsResponse | PlainMessage<ListTransactionsResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.CreateTokenFactoryPresignedUrlRequest
 */
export declare class CreateTokenFactoryPresignedUrlRequest extends Message<CreateTokenFactoryPresignedUrlRequest> {
    /**
     * @generated from field: string file_name = 1;
     */
    fileName: string;
    constructor(data?: PartialMessage<CreateTokenFactoryPresignedUrlRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.CreateTokenFactoryPresignedUrlRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTokenFactoryPresignedUrlRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTokenFactoryPresignedUrlRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTokenFactoryPresignedUrlRequest;
    static equals(a: CreateTokenFactoryPresignedUrlRequest | PlainMessage<CreateTokenFactoryPresignedUrlRequest> | undefined, b: CreateTokenFactoryPresignedUrlRequest | PlainMessage<CreateTokenFactoryPresignedUrlRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.CreateTokenFactoryPresignedUrlResponse
 */
export declare class CreateTokenFactoryPresignedUrlResponse extends Message<CreateTokenFactoryPresignedUrlResponse> {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
    constructor(data?: PartialMessage<CreateTokenFactoryPresignedUrlResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.CreateTokenFactoryPresignedUrlResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateTokenFactoryPresignedUrlResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateTokenFactoryPresignedUrlResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateTokenFactoryPresignedUrlResponse;
    static equals(a: CreateTokenFactoryPresignedUrlResponse | PlainMessage<CreateTokenFactoryPresignedUrlResponse> | undefined, b: CreateTokenFactoryPresignedUrlResponse | PlainMessage<CreateTokenFactoryPresignedUrlResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetPairRequest
 */
export declare class GetPairRequest extends Message<GetPairRequest> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string pair_address = 2;
     */
    pairAddress: string;
    constructor(data?: PartialMessage<GetPairRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetPairRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPairRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPairRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPairRequest;
    static equals(a: GetPairRequest | PlainMessage<GetPairRequest> | undefined, b: GetPairRequest | PlainMessage<GetPairRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetPairResponse
 */
export declare class GetPairResponse extends Message<GetPairResponse> {
    /**
     * @generated from field: pools.v1.Pair pair = 1;
     */
    pair?: Pair;
    constructor(data?: PartialMessage<GetPairResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetPairResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPairResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPairResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPairResponse;
    static equals(a: GetPairResponse | PlainMessage<GetPairResponse> | undefined, b: GetPairResponse | PlainMessage<GetPairResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetPoolRequest
 */
export declare class GetPoolRequest extends Message<GetPoolRequest> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string pool_id = 2;
     */
    poolId: string;
    /**
     * @generated from field: pools.v1.ProtocolVersion protocol_version = 3;
     */
    protocolVersion: ProtocolVersion;
    constructor(data?: PartialMessage<GetPoolRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetPoolRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPoolRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPoolRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPoolRequest;
    static equals(a: GetPoolRequest | PlainMessage<GetPoolRequest> | undefined, b: GetPoolRequest | PlainMessage<GetPoolRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetPoolResponse
 */
export declare class GetPoolResponse extends Message<GetPoolResponse> {
    /**
     * @generated from field: pools.v1.Pool pool = 1;
     */
    pool?: Pool;
    constructor(data?: PartialMessage<GetPoolResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetPoolResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPoolResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPoolResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPoolResponse;
    static equals(a: GetPoolResponse | PlainMessage<GetPoolResponse> | undefined, b: GetPoolResponse | PlainMessage<GetPoolResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetPositionRequest
 */
export declare class GetPositionRequest extends Message<GetPositionRequest> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: pools.v1.ProtocolVersion protocol_version = 2;
     */
    protocolVersion: ProtocolVersion;
    /**
     * required for V3/V4
     *
     * @generated from field: string token_id = 3;
     */
    tokenId: string;
    /**
     * required for V2
     *
     * @generated from field: string pair_address = 4;
     */
    pairAddress: string;
    /**
     * required for V2
     *
     * @generated from field: string owner = 5;
     */
    owner: string;
    /**
     * if true, fallback to onchain data for pool data
     *
     * @generated from field: optional bool fallback_to_chain = 6;
     */
    fallbackToChain?: boolean;
    constructor(data?: PartialMessage<GetPositionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPositionRequest;
    static equals(a: GetPositionRequest | PlainMessage<GetPositionRequest> | undefined, b: GetPositionRequest | PlainMessage<GetPositionRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetPositionResponse
 */
export declare class GetPositionResponse extends Message<GetPositionResponse> {
    /**
     * @generated from field: pools.v1.Position position = 1;
     */
    position?: Position;
    constructor(data?: PartialMessage<GetPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPositionResponse;
    static equals(a: GetPositionResponse | PlainMessage<GetPositionResponse> | undefined, b: GetPositionResponse | PlainMessage<GetPositionResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListPoolsRequest
 */
export declare class ListPoolsRequest extends Message<ListPoolsRequest> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string token0 = 2;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 3;
     */
    token1: string;
    /**
     * @generated from field: repeated pools.v1.ProtocolVersion protocol_versions = 4;
     */
    protocolVersions: ProtocolVersion[];
    /**
     * @generated from field: optional uint32 fee = 5;
     */
    fee?: number;
    /**
     * @generated from field: optional int32 tick_spacing = 6;
     */
    tickSpacing?: number;
    /**
     * @generated from field: optional string hooks = 7;
     */
    hooks?: string;
    /**
     * @generated from field: optional uint32 page_size = 8;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 9;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<ListPoolsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListPoolsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPoolsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPoolsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPoolsRequest;
    static equals(a: ListPoolsRequest | PlainMessage<ListPoolsRequest> | undefined, b: ListPoolsRequest | PlainMessage<ListPoolsRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListPoolsResponse
 */
export declare class ListPoolsResponse extends Message<ListPoolsResponse> {
    /**
     * @generated from field: repeated pools.v1.Pool pools = 1;
     */
    pools: Pool[];
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    constructor(data?: PartialMessage<ListPoolsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListPoolsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPoolsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPoolsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPoolsResponse;
    static equals(a: ListPoolsResponse | PlainMessage<ListPoolsResponse> | undefined, b: ListPoolsResponse | PlainMessage<ListPoolsResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListPositionsRequest
 */
export declare class ListPositionsRequest extends Message<ListPositionsRequest> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * default all chains
     *
     * @generated from field: repeated uint32 chain_ids = 2;
     */
    chainIds: number[];
    /**
     * default all versions
     *
     * @generated from field: repeated pools.v1.ProtocolVersion protocol_versions = 3;
     */
    protocolVersions: ProtocolVersion[];
    /**
     * default all position statuses
     *
     * @generated from field: repeated pools.v1.PositionStatus position_statuses = 4;
     */
    positionStatuses: PositionStatus[];
    /**
     * @generated from field: optional uint32 page_size = 5;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 6;
     */
    pageToken?: string;
    /**
     * default creation date
     *
     * @generated from field: optional data.v1.OrderBy order_by = 7;
     */
    orderBy?: OrderBy;
    /**
     * default false
     *
     * @generated from field: optional bool ascending = 8;
     */
    ascending?: boolean;
    /**
     * @generated from field: optional string poolId = 9;
     */
    poolId?: string;
    /**
     * @generated from field: optional string token0 = 10;
     */
    token0?: string;
    /**
     * @generated from field: optional string token1 = 11;
     */
    token1?: string;
    /**
     * default false; hides spam
     *
     * @generated from field: optional bool include_hidden = 12;
     */
    includeHidden?: boolean;
    constructor(data?: PartialMessage<ListPositionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListPositionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPositionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPositionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPositionsRequest;
    static equals(a: ListPositionsRequest | PlainMessage<ListPositionsRequest> | undefined, b: ListPositionsRequest | PlainMessage<ListPositionsRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListPositionsResponse
 */
export declare class ListPositionsResponse extends Message<ListPositionsResponse> {
    /**
     * @generated from field: repeated pools.v1.Position positions = 1;
     */
    positions: Position[];
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    constructor(data?: PartialMessage<ListPositionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListPositionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListPositionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListPositionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListPositionsResponse;
    static equals(a: ListPositionsResponse | PlainMessage<ListPositionsResponse> | undefined, b: ListPositionsResponse | PlainMessage<ListPositionsResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetRewardsRequest
 */
export declare class GetRewardsRequest extends Message<GetRewardsRequest> {
    /**
     * @generated from field: string wallet_address = 1;
     */
    walletAddress: string;
    /**
     * @generated from field: repeated uint32 chain_ids = 2;
     */
    chainIds: number[];
    /**
     * @generated from field: optional bool reload = 3;
     */
    reload?: boolean;
    constructor(data?: PartialMessage<GetRewardsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetRewardsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRewardsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRewardsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRewardsRequest;
    static equals(a: GetRewardsRequest | PlainMessage<GetRewardsRequest> | undefined, b: GetRewardsRequest | PlainMessage<GetRewardsRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetRewardsResponse
 */
export declare class GetRewardsResponse extends Message<GetRewardsResponse> {
    /**
     * @generated from field: string total_unclaimed_amount_uni = 1;
     */
    totalUnclaimedAmountUni: string;
    constructor(data?: PartialMessage<GetRewardsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetRewardsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRewardsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRewardsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRewardsResponse;
    static equals(a: GetRewardsResponse | PlainMessage<GetRewardsResponse> | undefined, b: GetRewardsResponse | PlainMessage<GetRewardsResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListTopPoolsRequest
 */
export declare class ListTopPoolsRequest extends Message<ListTopPoolsRequest> {
    /**
     * @generated from field: repeated uint32 chain_ids = 1;
     */
    chainIds: number[];
    /**
     * @generated from field: repeated pools.v1.ProtocolVersion protocol_versions = 2;
     */
    protocolVersions: ProtocolVersion[];
    /**
     * @generated from field: optional data.v1.TopPoolsOrderBy order_by = 3;
     */
    orderBy?: TopPoolsOrderBy;
    /**
     * default false
     *
     * @generated from field: optional bool ascending = 4;
     */
    ascending?: boolean;
    /**
     * @generated from field: optional uint32 page_size = 5;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 6;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<ListTopPoolsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListTopPoolsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTopPoolsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTopPoolsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTopPoolsRequest;
    static equals(a: ListTopPoolsRequest | PlainMessage<ListTopPoolsRequest> | undefined, b: ListTopPoolsRequest | PlainMessage<ListTopPoolsRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListTopPoolsResponse
 */
export declare class ListTopPoolsResponse extends Message<ListTopPoolsResponse> {
    /**
     * @generated from field: repeated data.v1.Pool pools = 1;
     */
    pools: Pool$1[];
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    constructor(data?: PartialMessage<ListTopPoolsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListTopPoolsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTopPoolsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTopPoolsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTopPoolsResponse;
    static equals(a: ListTopPoolsResponse | PlainMessage<ListTopPoolsResponse> | undefined, b: ListTopPoolsResponse | PlainMessage<ListTopPoolsResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListTokensRequest
 */
export declare class ListTokensRequest extends Message<ListTokensRequest> {
    /**
     * @generated from field: repeated uint32 chain_ids = 1;
     */
    chainIds: number[];
    /**
     * @generated from field: optional data.v1.TokensOrderBy order_by = 2;
     */
    orderBy?: TokensOrderBy;
    /**
     * default false
     *
     * @generated from field: optional bool ascending = 3;
     */
    ascending?: boolean;
    /**
     * @generated from field: optional uint32 page_size = 4;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 5;
     */
    pageToken?: string;
    /**
     * @generated from field: optional bool multichain = 6;
     */
    multichain?: boolean;
    constructor(data?: PartialMessage<ListTokensRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListTokensRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTokensRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTokensRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTokensRequest;
    static equals(a: ListTokensRequest | PlainMessage<ListTokensRequest> | undefined, b: ListTokensRequest | PlainMessage<ListTokensRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.ListTokensResponse
 */
export declare class ListTokensResponse extends Message<ListTokensResponse> {
    /**
     * @generated from field: repeated data.v1.Token tokens = 1;
     */
    tokens: Token[];
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    /**
     * @generated from field: repeated data.v1.MultichainToken multichain_tokens = 3;
     */
    multichainTokens: MultichainToken[];
    constructor(data?: PartialMessage<ListTokensResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListTokensResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTokensResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTokensResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTokensResponse;
    static equals(a: ListTokensResponse | PlainMessage<ListTokensResponse> | undefined, b: ListTokensResponse | PlainMessage<ListTokensResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetProtocolStatsRequest
 */
export declare class GetProtocolStatsRequest extends Message<GetProtocolStatsRequest> {
    constructor(data?: PartialMessage<GetProtocolStatsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetProtocolStatsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProtocolStatsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProtocolStatsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProtocolStatsRequest;
    static equals(a: GetProtocolStatsRequest | PlainMessage<GetProtocolStatsRequest> | undefined, b: GetProtocolStatsRequest | PlainMessage<GetProtocolStatsRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetProtocolStatsResponse
 */
export declare class GetProtocolStatsResponse extends Message<GetProtocolStatsResponse> {
    /**
     * @generated from field: uint32 total_pools = 1;
     */
    totalPools: number;
    /**
     * @generated from field: uint32 total_v2_pools = 2;
     */
    totalV2Pools: number;
    /**
     * @generated from field: uint32 total_v3_pools = 3;
     */
    totalV3Pools: number;
    /**
     * @generated from field: uint32 total_v4_pools = 4;
     */
    totalV4Pools: number;
    /**
     * @generated from field: double tvl = 5;
     */
    tvl: number;
    /**
     * @generated from field: double v2_tvl = 6;
     */
    v2Tvl: number;
    /**
     * @generated from field: double v3_tvl = 7;
     */
    v3Tvl: number;
    /**
     * @generated from field: double v4_tvl = 8;
     */
    v4Tvl: number;
    /**
     * @generated from field: double volume_1d = 9;
     */
    volume1d: number;
    /**
     * @generated from field: double v2_volume_1d = 10;
     */
    v2Volume1d: number;
    /**
     * @generated from field: double v3_volume_1d = 11;
     */
    v3Volume1d: number;
    /**
     * @generated from field: double v4_volume_1d = 12;
     */
    v4Volume1d: number;
    /**
     * @generated from field: float volume_change_1d = 13;
     */
    volumeChange1d: number;
    /**
     * @generated from field: float tvl_change_1d = 14;
     */
    tvlChange1d: number;
    /**
     * @generated from field: float v2_tvl_change_1d = 15;
     */
    v2TvlChange1d: number;
    /**
     * @generated from field: float v3_tvl_change_1d = 16;
     */
    v3TvlChange1d: number;
    /**
     * @generated from field: float v4_tvl_change_1d = 17;
     */
    v4TvlChange1d: number;
    /**
     * @generated from field: float total_pools_change_1d = 18;
     */
    totalPoolsChange1d: number;
    constructor(data?: PartialMessage<GetProtocolStatsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetProtocolStatsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProtocolStatsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProtocolStatsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProtocolStatsResponse;
    static equals(a: GetProtocolStatsResponse | PlainMessage<GetProtocolStatsResponse> | undefined, b: GetProtocolStatsResponse | PlainMessage<GetProtocolStatsResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetPortfolioChartRequest
 */
export declare class GetPortfolioChartRequest extends Message<GetPortfolioChartRequest> {
    /**
     * @generated from field: data.v1.WalletAccount wallet_account = 1;
     */
    walletAccount?: WalletAccount;
    /**
     * @generated from field: repeated uint32 chain_ids = 2;
     */
    chainIds: number[];
    /**
     * @generated from field: data.v1.ChartPeriod chart_period = 3;
     */
    chartPeriod: ChartPeriod;
    constructor(data?: PartialMessage<GetPortfolioChartRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetPortfolioChartRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPortfolioChartRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPortfolioChartRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPortfolioChartRequest;
    static equals(a: GetPortfolioChartRequest | PlainMessage<GetPortfolioChartRequest> | undefined, b: GetPortfolioChartRequest | PlainMessage<GetPortfolioChartRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.ChartPoint
 */
export declare class ChartPoint extends Message<ChartPoint> {
    /**
     * @generated from field: int64 timestamp = 1;
     */
    timestamp: bigint;
    /**
     * @generated from field: double value = 2;
     */
    value: number;
    constructor(data?: PartialMessage<ChartPoint>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ChartPoint";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChartPoint;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChartPoint;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChartPoint;
    static equals(a: ChartPoint | PlainMessage<ChartPoint> | undefined, b: ChartPoint | PlainMessage<ChartPoint> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetPortfolioChartResponse
 */
export declare class GetPortfolioChartResponse extends Message<GetPortfolioChartResponse> {
    /**
     * @generated from field: repeated data.v1.ChartPoint points = 1;
     */
    points: ChartPoint[];
    /**
     * @generated from field: int64 begin_at = 2;
     */
    beginAt: bigint;
    /**
     * @generated from field: int64 end_at = 3;
     */
    endAt: bigint;
    constructor(data?: PartialMessage<GetPortfolioChartResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetPortfolioChartResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPortfolioChartResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPortfolioChartResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPortfolioChartResponse;
    static equals(a: GetPortfolioChartResponse | PlainMessage<GetPortfolioChartResponse> | undefined, b: GetPortfolioChartResponse | PlainMessage<GetPortfolioChartResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.TokenPriceInput
 */
export declare class TokenPriceInput extends Message<TokenPriceInput> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<TokenPriceInput>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.TokenPriceInput";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenPriceInput;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenPriceInput;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenPriceInput;
    static equals(a: TokenPriceInput | PlainMessage<TokenPriceInput> | undefined, b: TokenPriceInput | PlainMessage<TokenPriceInput> | undefined): boolean;
}
/**
 * @generated from message data.v1.TokenPrice
 */
export declare class TokenPrice extends Message<TokenPrice> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: optional double price_usd = 3;
     */
    priceUsd?: number;
    /**
     * @generated from field: optional string updated_at = 4;
     */
    updatedAt?: string;
    constructor(data?: PartialMessage<TokenPrice>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.TokenPrice";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenPrice;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenPrice;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenPrice;
    static equals(a: TokenPrice | PlainMessage<TokenPrice> | undefined, b: TokenPrice | PlainMessage<TokenPrice> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetTokenPricesRequest
 */
export declare class GetTokenPricesRequest extends Message<GetTokenPricesRequest> {
    /**
     * @generated from field: repeated data.v1.TokenPriceInput tokens = 1;
     */
    tokens: TokenPriceInput[];
    constructor(data?: PartialMessage<GetTokenPricesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetTokenPricesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTokenPricesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTokenPricesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTokenPricesRequest;
    static equals(a: GetTokenPricesRequest | PlainMessage<GetTokenPricesRequest> | undefined, b: GetTokenPricesRequest | PlainMessage<GetTokenPricesRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetTokenPricesResponse
 */
export declare class GetTokenPricesResponse extends Message<GetTokenPricesResponse> {
    /**
     * @generated from field: repeated data.v1.TokenPrice token_prices = 1;
     */
    tokenPrices: TokenPrice[];
    constructor(data?: PartialMessage<GetTokenPricesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetTokenPricesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTokenPricesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTokenPricesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTokenPricesResponse;
    static equals(a: GetTokenPricesResponse | PlainMessage<GetTokenPricesResponse> | undefined, b: GetTokenPricesResponse | PlainMessage<GetTokenPricesResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetWalletProfitLossRequest
 */
export declare class GetWalletProfitLossRequest extends Message<GetWalletProfitLossRequest> {
    /**
     * @generated from field: data.v1.WalletAccount wallet_account = 1;
     */
    walletAccount?: WalletAccount;
    /**
     * @generated from field: repeated uint32 chain_ids = 2;
     */
    chainIds: number[];
    /**
     * @generated from field: optional int64 since = 3;
     */
    since?: bigint;
    /**
     * @generated from field: optional int64 till = 4;
     */
    till?: bigint;
    constructor(data?: PartialMessage<GetWalletProfitLossRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetWalletProfitLossRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetWalletProfitLossRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetWalletProfitLossRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetWalletProfitLossRequest;
    static equals(a: GetWalletProfitLossRequest | PlainMessage<GetWalletProfitLossRequest> | undefined, b: GetWalletProfitLossRequest | PlainMessage<GetWalletProfitLossRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetWalletProfitLossResponse
 */
export declare class GetWalletProfitLossResponse extends Message<GetWalletProfitLossResponse> {
    /**
     * @generated from field: data.v1.WalletProfitLoss profit_loss = 1;
     */
    profitLoss?: WalletProfitLoss;
    constructor(data?: PartialMessage<GetWalletProfitLossResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetWalletProfitLossResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetWalletProfitLossResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetWalletProfitLossResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetWalletProfitLossResponse;
    static equals(a: GetWalletProfitLossResponse | PlainMessage<GetWalletProfitLossResponse> | undefined, b: GetWalletProfitLossResponse | PlainMessage<GetWalletProfitLossResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetWalletTokensProfitLossRequest
 */
export declare class GetWalletTokensProfitLossRequest extends Message<GetWalletTokensProfitLossRequest> {
    /**
     * @generated from field: data.v1.WalletAccount wallet_account = 1;
     */
    walletAccount?: WalletAccount;
    /**
     * @generated from field: repeated uint32 chain_ids = 2;
     */
    chainIds: number[];
    /**
     * @generated from field: optional int64 since = 3;
     */
    since?: bigint;
    /**
     * @generated from field: optional int64 till = 4;
     */
    till?: bigint;
    /**
     * @generated from field: optional uint32 page_size = 5;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 6;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<GetWalletTokensProfitLossRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetWalletTokensProfitLossRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetWalletTokensProfitLossRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetWalletTokensProfitLossRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetWalletTokensProfitLossRequest;
    static equals(a: GetWalletTokensProfitLossRequest | PlainMessage<GetWalletTokensProfitLossRequest> | undefined, b: GetWalletTokensProfitLossRequest | PlainMessage<GetWalletTokensProfitLossRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetWalletTokensProfitLossResponse
 */
export declare class GetWalletTokensProfitLossResponse extends Message<GetWalletTokensProfitLossResponse> {
    /**
     * @generated from field: repeated data.v1.TokenProfitLoss token_profit_losses = 1;
     */
    tokenProfitLosses: TokenProfitLoss[];
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    constructor(data?: PartialMessage<GetWalletTokensProfitLossResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetWalletTokensProfitLossResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetWalletTokensProfitLossResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetWalletTokensProfitLossResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetWalletTokensProfitLossResponse;
    static equals(a: GetWalletTokensProfitLossResponse | PlainMessage<GetWalletTokensProfitLossResponse> | undefined, b: GetWalletTokensProfitLossResponse | PlainMessage<GetWalletTokensProfitLossResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetWalletTokenProfitLossRequest
 */
export declare class GetWalletTokenProfitLossRequest extends Message<GetWalletTokenProfitLossRequest> {
    /**
     * @generated from field: data.v1.WalletAccount wallet_account = 1;
     */
    walletAccount?: WalletAccount;
    /**
     * @generated from field: uint32 chain_id = 2;
     */
    chainId: number;
    /**
     * @generated from field: string token_address = 3;
     */
    tokenAddress: string;
    /**
     * @generated from field: optional int64 since = 4;
     */
    since?: bigint;
    /**
     * @generated from field: optional int64 till = 5;
     */
    till?: bigint;
    constructor(data?: PartialMessage<GetWalletTokenProfitLossRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetWalletTokenProfitLossRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetWalletTokenProfitLossRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetWalletTokenProfitLossRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetWalletTokenProfitLossRequest;
    static equals(a: GetWalletTokenProfitLossRequest | PlainMessage<GetWalletTokenProfitLossRequest> | undefined, b: GetWalletTokenProfitLossRequest | PlainMessage<GetWalletTokenProfitLossRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetWalletTokenProfitLossResponse
 */
export declare class GetWalletTokenProfitLossResponse extends Message<GetWalletTokenProfitLossResponse> {
    /**
     * @generated from field: data.v1.TokenDetailProfitLoss profit_loss = 1;
     */
    profitLoss?: TokenDetailProfitLoss;
    constructor(data?: PartialMessage<GetWalletTokenProfitLossResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetWalletTokenProfitLossResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetWalletTokenProfitLossResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetWalletTokenProfitLossResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetWalletTokenProfitLossResponse;
    static equals(a: GetWalletTokenProfitLossResponse | PlainMessage<GetWalletTokenProfitLossResponse> | undefined, b: GetWalletTokenProfitLossResponse | PlainMessage<GetWalletTokenProfitLossResponse> | undefined): boolean;
}
