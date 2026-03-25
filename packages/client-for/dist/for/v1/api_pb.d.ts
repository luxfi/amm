import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum FOR.v1.RampDirection
 */
export declare enum RampDirection {
    /**
     * @generated from enum value: ON_RAMP = 0;
     */
    ON_RAMP = 0,
    /**
     * @generated from enum value: OFF_RAMP = 1;
     */
    OFF_RAMP = 1
}
/**
 * @generated from enum FOR.v1.TransactionStatus
 */
export declare enum TransactionStatus {
    /**
     * @generated from enum value: PENDING = 0;
     */
    PENDING = 0,
    /**
     * @generated from enum value: SETTLED = 1;
     */
    SETTLED = 1,
    /**
     * @generated from enum value: FAILED = 2;
     */
    FAILED = 2
}
/**
 * @generated from message FOR.v1.GetCountryRequest
 */
export declare class GetCountryRequest extends Message<GetCountryRequest> {
    /**
     * @generated from field: optional string clientIp = 1;
     */
    clientIp?: string;
    constructor(data?: PartialMessage<GetCountryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.GetCountryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCountryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCountryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCountryRequest;
    static equals(a: GetCountryRequest | PlainMessage<GetCountryRequest> | undefined, b: GetCountryRequest | PlainMessage<GetCountryRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.GetCountryResponse
 */
export declare class GetCountryResponse extends Message<GetCountryResponse> {
    /**
     * @generated from field: string countryCode = 1;
     */
    countryCode: string;
    /**
     * @generated from field: string displayName = 2;
     */
    displayName: string;
    /**
     * @generated from field: optional string state = 3;
     */
    state?: string;
    constructor(data?: PartialMessage<GetCountryResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.GetCountryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCountryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCountryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCountryResponse;
    static equals(a: GetCountryResponse | PlainMessage<GetCountryResponse> | undefined, b: GetCountryResponse | PlainMessage<GetCountryResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.SupportedCountry
 */
export declare class SupportedCountry extends Message<SupportedCountry> {
    /**
     * @generated from field: string countryCode = 1;
     */
    countryCode: string;
    /**
     * @generated from field: string displayName = 2;
     */
    displayName: string;
    constructor(data?: PartialMessage<SupportedCountry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.SupportedCountry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupportedCountry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupportedCountry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupportedCountry;
    static equals(a: SupportedCountry | PlainMessage<SupportedCountry> | undefined, b: SupportedCountry | PlainMessage<SupportedCountry> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.SupportedCountriesRequest
 */
export declare class SupportedCountriesRequest extends Message<SupportedCountriesRequest> {
    /**
     * @generated from field: optional FOR.v1.RampDirection rampDirection = 1;
     */
    rampDirection?: RampDirection;
    constructor(data?: PartialMessage<SupportedCountriesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.SupportedCountriesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupportedCountriesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupportedCountriesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupportedCountriesRequest;
    static equals(a: SupportedCountriesRequest | PlainMessage<SupportedCountriesRequest> | undefined, b: SupportedCountriesRequest | PlainMessage<SupportedCountriesRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.SupportedCountriesResponse
 */
export declare class SupportedCountriesResponse extends Message<SupportedCountriesResponse> {
    /**
     * @generated from field: repeated FOR.v1.SupportedCountry supportedCountries = 1;
     */
    supportedCountries: SupportedCountry[];
    constructor(data?: PartialMessage<SupportedCountriesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.SupportedCountriesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupportedCountriesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupportedCountriesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupportedCountriesResponse;
    static equals(a: SupportedCountriesResponse | PlainMessage<SupportedCountriesResponse> | undefined, b: SupportedCountriesResponse | PlainMessage<SupportedCountriesResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.SupportedFiatCurrenciesRequest
 */
export declare class SupportedFiatCurrenciesRequest extends Message<SupportedFiatCurrenciesRequest> {
    /**
     * @generated from field: string countryCode = 1;
     */
    countryCode: string;
    /**
     * @generated from field: optional FOR.v1.RampDirection rampDirection = 2;
     */
    rampDirection?: RampDirection;
    constructor(data?: PartialMessage<SupportedFiatCurrenciesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.SupportedFiatCurrenciesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupportedFiatCurrenciesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupportedFiatCurrenciesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupportedFiatCurrenciesRequest;
    static equals(a: SupportedFiatCurrenciesRequest | PlainMessage<SupportedFiatCurrenciesRequest> | undefined, b: SupportedFiatCurrenciesRequest | PlainMessage<SupportedFiatCurrenciesRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.FiatCurrency
 */
export declare class FiatCurrency extends Message<FiatCurrency> {
    /**
     * @generated from field: string fiatCurrencyCode = 1;
     */
    fiatCurrencyCode: string;
    /**
     * @generated from field: string displayName = 2;
     */
    displayName: string;
    /**
     * @generated from field: string symbol = 3;
     */
    symbol: string;
    constructor(data?: PartialMessage<FiatCurrency>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.FiatCurrency";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FiatCurrency;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FiatCurrency;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FiatCurrency;
    static equals(a: FiatCurrency | PlainMessage<FiatCurrency> | undefined, b: FiatCurrency | PlainMessage<FiatCurrency> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.SupportedFiatCurrenciesResponse
 */
export declare class SupportedFiatCurrenciesResponse extends Message<SupportedFiatCurrenciesResponse> {
    /**
     * @generated from field: repeated FOR.v1.FiatCurrency fiatCurrencies = 1;
     */
    fiatCurrencies: FiatCurrency[];
    constructor(data?: PartialMessage<SupportedFiatCurrenciesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.SupportedFiatCurrenciesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupportedFiatCurrenciesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupportedFiatCurrenciesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupportedFiatCurrenciesResponse;
    static equals(a: SupportedFiatCurrenciesResponse | PlainMessage<SupportedFiatCurrenciesResponse> | undefined, b: SupportedFiatCurrenciesResponse | PlainMessage<SupportedFiatCurrenciesResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.SupportedTokensRequest
 */
export declare class SupportedTokensRequest extends Message<SupportedTokensRequest> {
    /**
     * @generated from field: string fiatCurrency = 1;
     */
    fiatCurrency: string;
    /**
     * @generated from field: string countryCode = 2;
     */
    countryCode: string;
    /**
     * @generated from field: FOR.v1.RampDirection rampDirection = 3;
     */
    rampDirection: RampDirection;
    /**
     * @generated from field: optional bool isSolanaEnabled = 4;
     */
    isSolanaEnabled?: boolean;
    constructor(data?: PartialMessage<SupportedTokensRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.SupportedTokensRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupportedTokensRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupportedTokensRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupportedTokensRequest;
    static equals(a: SupportedTokensRequest | PlainMessage<SupportedTokensRequest> | undefined, b: SupportedTokensRequest | PlainMessage<SupportedTokensRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.SupportedToken
 */
export declare class SupportedToken extends Message<SupportedToken> {
    /**
     * @generated from field: string cryptoCurrencyCode = 1;
     */
    cryptoCurrencyCode: string;
    /**
     * @generated from field: string displayName = 2;
     */
    displayName: string;
    /**
     * @generated from field: string cryptoCurrencyChain = 3;
     */
    cryptoCurrencyChain: string;
    /**
     * @generated from field: string chainId = 4;
     */
    chainId: string;
    /**
     * @generated from field: string symbol = 5;
     */
    symbol: string;
    /**
     * @generated from field: optional string address = 6;
     */
    address?: string;
    constructor(data?: PartialMessage<SupportedToken>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.SupportedToken";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupportedToken;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupportedToken;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupportedToken;
    static equals(a: SupportedToken | PlainMessage<SupportedToken> | undefined, b: SupportedToken | PlainMessage<SupportedToken> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.SupportedTokensResponse
 */
export declare class SupportedTokensResponse extends Message<SupportedTokensResponse> {
    /**
     * @generated from field: repeated FOR.v1.SupportedToken supportedTokens = 1;
     */
    supportedTokens: SupportedToken[];
    constructor(data?: PartialMessage<SupportedTokensResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.SupportedTokensResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SupportedTokensResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SupportedTokensResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SupportedTokensResponse;
    static equals(a: SupportedTokensResponse | PlainMessage<SupportedTokensResponse> | undefined, b: SupportedTokensResponse | PlainMessage<SupportedTokensResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.ServiceProviderLogo
 */
export declare class ServiceProviderLogo extends Message<ServiceProviderLogo> {
    /**
     * @generated from field: string darkLogo = 1;
     */
    darkLogo: string;
    /**
     * @generated from field: string lightLogo = 2;
     */
    lightLogo: string;
    /**
     * @generated from field: optional string darkFullLogo = 3;
     */
    darkFullLogo?: string;
    /**
     * @generated from field: optional string lightFullLogo = 4;
     */
    lightFullLogo?: string;
    constructor(data?: PartialMessage<ServiceProviderLogo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.ServiceProviderLogo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceProviderLogo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceProviderLogo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceProviderLogo;
    static equals(a: ServiceProviderLogo | PlainMessage<ServiceProviderLogo> | undefined, b: ServiceProviderLogo | PlainMessage<ServiceProviderLogo> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.ServiceProvider
 */
export declare class ServiceProvider extends Message<ServiceProvider> {
    /**
     * @generated from field: string serviceProvider = 1;
     */
    serviceProvider: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string url = 3;
     */
    url: string;
    /**
     * @generated from field: FOR.v1.ServiceProviderLogo logos = 4;
     */
    logos?: ServiceProviderLogo;
    /**
     * @generated from field: repeated string paymentMethods = 5;
     */
    paymentMethods: string[];
    /**
     * @generated from field: optional string supportUrl = 6;
     */
    supportUrl?: string;
    constructor(data?: PartialMessage<ServiceProvider>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.ServiceProvider";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ServiceProvider;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ServiceProvider;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ServiceProvider;
    static equals(a: ServiceProvider | PlainMessage<ServiceProvider> | undefined, b: ServiceProvider | PlainMessage<ServiceProvider> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.TransferServiceProvidersRequest
 */
export declare class TransferServiceProvidersRequest extends Message<TransferServiceProvidersRequest> {
    /**
     * @generated from field: optional string clientIp = 1;
     */
    clientIp?: string;
    constructor(data?: PartialMessage<TransferServiceProvidersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.TransferServiceProvidersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferServiceProvidersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferServiceProvidersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferServiceProvidersRequest;
    static equals(a: TransferServiceProvidersRequest | PlainMessage<TransferServiceProvidersRequest> | undefined, b: TransferServiceProvidersRequest | PlainMessage<TransferServiceProvidersRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.TransferServiceProvidersResponse
 */
export declare class TransferServiceProvidersResponse extends Message<TransferServiceProvidersResponse> {
    /**
     * @generated from field: repeated FOR.v1.ServiceProvider serviceProviders = 1;
     */
    serviceProviders: ServiceProvider[];
    constructor(data?: PartialMessage<TransferServiceProvidersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.TransferServiceProvidersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferServiceProvidersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferServiceProvidersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferServiceProvidersResponse;
    static equals(a: TransferServiceProvidersResponse | PlainMessage<TransferServiceProvidersResponse> | undefined, b: TransferServiceProvidersResponse | PlainMessage<TransferServiceProvidersResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.WidgetUrlRequest
 */
export declare class WidgetUrlRequest extends Message<WidgetUrlRequest> {
    /**
     * @generated from field: float sourceAmount = 1;
     */
    sourceAmount: number;
    /**
     * @generated from field: string sourceCurrencyCode = 2;
     */
    sourceCurrencyCode: string;
    /**
     * @generated from field: string destinationCurrencyCode = 3;
     */
    destinationCurrencyCode: string;
    /**
     * @generated from field: string countryCode = 4;
     */
    countryCode: string;
    /**
     * @generated from field: string serviceProvider = 5;
     */
    serviceProvider: string;
    /**
     * @generated from field: string walletAddress = 6;
     */
    walletAddress: string;
    /**
     * @generated from field: string externalSessionId = 7;
     */
    externalSessionId: string;
    /**
     * @generated from field: optional string redirectUrl = 8;
     */
    redirectUrl?: string;
    /**
     * @generated from field: optional string requestSource = 9;
     */
    requestSource?: string;
    constructor(data?: PartialMessage<WidgetUrlRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.WidgetUrlRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WidgetUrlRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WidgetUrlRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WidgetUrlRequest;
    static equals(a: WidgetUrlRequest | PlainMessage<WidgetUrlRequest> | undefined, b: WidgetUrlRequest | PlainMessage<WidgetUrlRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.WidgetUrlResponse
 */
export declare class WidgetUrlResponse extends Message<WidgetUrlResponse> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string widgetUrl = 2;
     */
    widgetUrl: string;
    constructor(data?: PartialMessage<WidgetUrlResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.WidgetUrlResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WidgetUrlResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WidgetUrlResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WidgetUrlResponse;
    static equals(a: WidgetUrlResponse | PlainMessage<WidgetUrlResponse> | undefined, b: WidgetUrlResponse | PlainMessage<WidgetUrlResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.Address
 */
export declare class Address extends Message<Address> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<Address>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.Address";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Address;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Address;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Address;
    static equals(a: Address | PlainMessage<Address> | undefined, b: Address | PlainMessage<Address> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.TransactionsRequest
 */
export declare class TransactionsRequest extends Message<TransactionsRequest> {
    /**
     * @generated from field: optional FOR.v1.Address signerAddress = 1;
     */
    signerAddress?: Address;
    /**
     * @generated from field: optional uint32 limit = 2;
     */
    limit?: number;
    /**
     * @generated from field: optional string sessionIds = 3;
     */
    sessionIds?: string;
    constructor(data?: PartialMessage<TransactionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.TransactionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionsRequest;
    static equals(a: TransactionsRequest | PlainMessage<TransactionsRequest> | undefined, b: TransactionsRequest | PlainMessage<TransactionsRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.CryptoDetails
 */
export declare class CryptoDetails extends Message<CryptoDetails> {
    /**
     * @generated from field: string walletAddress = 1;
     */
    walletAddress: string;
    /**
     * @generated from field: float networkFee = 2;
     */
    networkFee: number;
    /**
     * @generated from field: float transactionFee = 3;
     */
    transactionFee: number;
    /**
     * @generated from field: float totalFee = 4;
     */
    totalFee: number;
    /**
     * @generated from field: string blockchainTransactionId = 5;
     */
    blockchainTransactionId: string;
    /**
     * @generated from field: string chainId = 6;
     */
    chainId: string;
    constructor(data?: PartialMessage<CryptoDetails>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.CryptoDetails";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CryptoDetails;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CryptoDetails;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CryptoDetails;
    static equals(a: CryptoDetails | PlainMessage<CryptoDetails> | undefined, b: CryptoDetails | PlainMessage<CryptoDetails> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.Transaction
 */
export declare class Transaction extends Message<Transaction> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: FOR.v1.TransactionStatus status = 2;
     */
    status: TransactionStatus;
    /**
     * @generated from field: float sourceAmount = 3;
     */
    sourceAmount: number;
    /**
     * @generated from field: string sourceCurrencyCode = 4;
     */
    sourceCurrencyCode: string;
    /**
     * @generated from field: float destinationAmount = 5;
     */
    destinationAmount: number;
    /**
     * @generated from field: string destinationCurrencyCode = 6;
     */
    destinationCurrencyCode: string;
    /**
     * @generated from field: string destinationContractAddress = 7;
     */
    destinationContractAddress: string;
    /**
     * @generated from field: FOR.v1.ServiceProvider serviceProviderDetails = 8;
     */
    serviceProviderDetails?: ServiceProvider;
    /**
     * @generated from field: FOR.v1.CryptoDetails cryptoDetails = 9;
     */
    cryptoDetails?: CryptoDetails;
    /**
     * @generated from field: string createdAt = 10;
     */
    createdAt: string;
    /**
     * @generated from field: string updatedAt = 11;
     */
    updatedAt: string;
    /**
     * @generated from field: string externalSessionId = 12;
     */
    externalSessionId: string;
    /**
     * @generated from field: FOR.v1.RampDirection rampDirection = 13;
     */
    rampDirection: RampDirection;
    constructor(data?: PartialMessage<Transaction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.Transaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transaction;
    static equals(a: Transaction | PlainMessage<Transaction> | undefined, b: Transaction | PlainMessage<Transaction> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.TransactionsResponse
 */
export declare class TransactionsResponse extends Message<TransactionsResponse> {
    /**
     * @generated from field: repeated FOR.v1.Transaction transactions = 1;
     */
    transactions: Transaction[];
    /**
     * @generated from field: uint32 count = 2;
     */
    count: number;
    /**
     * @generated from field: uint32 remaining = 3;
     */
    remaining: number;
    /**
     * @generated from field: uint32 totalCount = 4;
     */
    totalCount: number;
    /**
     * @generated from field: string message = 5;
     */
    message: string;
    /**
     * @generated from field: string error = 6;
     */
    error: string;
    constructor(data?: PartialMessage<TransactionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.TransactionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionsResponse;
    static equals(a: TransactionsResponse | PlainMessage<TransactionsResponse> | undefined, b: TransactionsResponse | PlainMessage<TransactionsResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.TransferWidgetUrlRequest
 */
export declare class TransferWidgetUrlRequest extends Message<TransferWidgetUrlRequest> {
    /**
     * @generated from field: string serviceProvider = 1;
     */
    serviceProvider: string;
    /**
     * @generated from field: string walletAddress = 2;
     */
    walletAddress: string;
    /**
     * @generated from field: string externalSessionId = 3;
     */
    externalSessionId: string;
    /**
     * @generated from field: optional string redirectUrl = 4;
     */
    redirectUrl?: string;
    /**
     * @generated from field: optional string requestSource = 5;
     */
    requestSource?: string;
    /**
     * @generated from field: optional string clientIp = 6;
     */
    clientIp?: string;
    constructor(data?: PartialMessage<TransferWidgetUrlRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.TransferWidgetUrlRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferWidgetUrlRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferWidgetUrlRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferWidgetUrlRequest;
    static equals(a: TransferWidgetUrlRequest | PlainMessage<TransferWidgetUrlRequest> | undefined, b: TransferWidgetUrlRequest | PlainMessage<TransferWidgetUrlRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.TransferWidgetUrlResponse
 */
export declare class TransferWidgetUrlResponse extends Message<TransferWidgetUrlResponse> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string widgetUrl = 2;
     */
    widgetUrl: string;
    constructor(data?: PartialMessage<TransferWidgetUrlResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.TransferWidgetUrlResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferWidgetUrlResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferWidgetUrlResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferWidgetUrlResponse;
    static equals(a: TransferWidgetUrlResponse | PlainMessage<TransferWidgetUrlResponse> | undefined, b: TransferWidgetUrlResponse | PlainMessage<TransferWidgetUrlResponse> | undefined): boolean;
}
/**
 * difference between transaction and transactions is fetching for a single transaction and also having the option to force fetch it
 *
 * @generated from message FOR.v1.TransactionRequest
 */
export declare class TransactionRequest extends Message<TransactionRequest> {
    /**
     * @generated from field: optional FOR.v1.Address signerAddress = 1;
     */
    signerAddress?: Address;
    /**
     * @generated from field: optional string sessionId = 2;
     */
    sessionId?: string;
    /**
     * @generated from field: optional bool forceFetch = 3;
     */
    forceFetch?: boolean;
    constructor(data?: PartialMessage<TransactionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.TransactionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionRequest;
    static equals(a: TransactionRequest | PlainMessage<TransactionRequest> | undefined, b: TransactionRequest | PlainMessage<TransactionRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.TransactionResponse
 */
export declare class TransactionResponse extends Message<TransactionResponse> {
    /**
     * @generated from field: optional FOR.v1.Transaction transaction = 1;
     */
    transaction?: Transaction;
    constructor(data?: PartialMessage<TransactionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.TransactionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionResponse;
    static equals(a: TransactionResponse | PlainMessage<TransactionResponse> | undefined, b: TransactionResponse | PlainMessage<TransactionResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.QuoteRequest
 */
export declare class QuoteRequest extends Message<QuoteRequest> {
    /**
     * @generated from field: string countryCode = 1;
     */
    countryCode: string;
    /**
     * @generated from field: string destinationCurrencyCode = 2;
     */
    destinationCurrencyCode: string;
    /**
     * @generated from field: float sourceAmount = 3;
     */
    sourceAmount: number;
    /**
     * @generated from field: string sourceCurrencyCode = 4;
     */
    sourceCurrencyCode: string;
    /**
     * @generated from field: FOR.v1.RampDirection rampDirection = 5;
     */
    rampDirection: RampDirection;
    /**
     * @generated from field: optional string state = 6;
     */
    state?: string;
    /**
     * @generated from field: optional string walletAddress = 7;
     */
    walletAddress?: string;
    /**
     * @generated from field: optional string requestSource = 8;
     */
    requestSource?: string;
    constructor(data?: PartialMessage<QuoteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.QuoteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuoteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuoteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuoteRequest;
    static equals(a: QuoteRequest | PlainMessage<QuoteRequest> | undefined, b: QuoteRequest | PlainMessage<QuoteRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.Quote
 */
export declare class Quote extends Message<Quote> {
    /**
     * @generated from field: string countryCode = 1;
     */
    countryCode: string;
    /**
     * @generated from field: float sourceAmount = 2;
     */
    sourceAmount: number;
    /**
     * @generated from field: string sourceCurrencyCode = 3;
     */
    sourceCurrencyCode: string;
    /**
     * @generated from field: float destinationAmount = 4;
     */
    destinationAmount: number;
    /**
     * @generated from field: string destinationCurrencyCode = 5;
     */
    destinationCurrencyCode: string;
    /**
     * @generated from field: float totalFee = 6;
     */
    totalFee: number;
    /**
     * @generated from field: string serviceProvider = 7;
     */
    serviceProvider: string;
    /**
     * @generated from field: FOR.v1.ServiceProvider serviceProviderDetails = 8;
     */
    serviceProviderDetails?: ServiceProvider;
    /**
     * @generated from field: bool isMostRecentlyUsedProvider = 9;
     */
    isMostRecentlyUsedProvider: boolean;
    constructor(data?: PartialMessage<Quote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.Quote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Quote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Quote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Quote;
    static equals(a: Quote | PlainMessage<Quote> | undefined, b: Quote | PlainMessage<Quote> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.QuoteResponse
 */
export declare class QuoteResponse extends Message<QuoteResponse> {
    /**
     * @generated from field: repeated FOR.v1.Quote quotes = 1;
     */
    quotes: Quote[];
    /**
     * @generated from field: string message = 2;
     */
    message: string;
    /**
     * @generated from field: string error = 3;
     */
    error: string;
    constructor(data?: PartialMessage<QuoteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.QuoteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuoteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuoteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuoteResponse;
    static equals(a: QuoteResponse | PlainMessage<QuoteResponse> | undefined, b: QuoteResponse | PlainMessage<QuoteResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.MeldWebhookPayload
 */
export declare class MeldWebhookPayload extends Message<MeldWebhookPayload> {
    /**
     * @generated from field: string paymentTransactionId = 1;
     */
    paymentTransactionId: string;
    /**
     * @generated from field: string externalCustomerId = 2;
     */
    externalCustomerId: string;
    /**
     * @generated from field: string paymentTransactionStatus = 3;
     */
    paymentTransactionStatus: string;
    constructor(data?: PartialMessage<MeldWebhookPayload>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.MeldWebhookPayload";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeldWebhookPayload;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeldWebhookPayload;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeldWebhookPayload;
    static equals(a: MeldWebhookPayload | PlainMessage<MeldWebhookPayload> | undefined, b: MeldWebhookPayload | PlainMessage<MeldWebhookPayload> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.MeldAnalyticsWebhookRequest
 */
export declare class MeldAnalyticsWebhookRequest extends Message<MeldAnalyticsWebhookRequest> {
    /**
     * @generated from field: string eventType = 1;
     */
    eventType: string;
    /**
     * @generated from field: string timestamp = 2;
     */
    timestamp: string;
    /**
     * @generated from field: FOR.v1.MeldWebhookPayload payload = 3;
     */
    payload?: MeldWebhookPayload;
    /**
     * @generated from field: string requestSource = 4;
     */
    requestSource: string;
    constructor(data?: PartialMessage<MeldAnalyticsWebhookRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.MeldAnalyticsWebhookRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeldAnalyticsWebhookRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeldAnalyticsWebhookRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeldAnalyticsWebhookRequest;
    static equals(a: MeldAnalyticsWebhookRequest | PlainMessage<MeldAnalyticsWebhookRequest> | undefined, b: MeldAnalyticsWebhookRequest | PlainMessage<MeldAnalyticsWebhookRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.MeldAnalyticsWebhookResponse
 */
export declare class MeldAnalyticsWebhookResponse extends Message<MeldAnalyticsWebhookResponse> {
    constructor(data?: PartialMessage<MeldAnalyticsWebhookResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.MeldAnalyticsWebhookResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeldAnalyticsWebhookResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeldAnalyticsWebhookResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeldAnalyticsWebhookResponse;
    static equals(a: MeldAnalyticsWebhookResponse | PlainMessage<MeldAnalyticsWebhookResponse> | undefined, b: MeldAnalyticsWebhookResponse | PlainMessage<MeldAnalyticsWebhookResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.MoonpayTransactionCurrencyMetadata
 */
export declare class MoonpayTransactionCurrencyMetadata extends Message<MoonpayTransactionCurrencyMetadata> {
    /**
     * @generated from field: string chainId = 1;
     */
    chainId: string;
    constructor(data?: PartialMessage<MoonpayTransactionCurrencyMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.MoonpayTransactionCurrencyMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MoonpayTransactionCurrencyMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MoonpayTransactionCurrencyMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MoonpayTransactionCurrencyMetadata;
    static equals(a: MoonpayTransactionCurrencyMetadata | PlainMessage<MoonpayTransactionCurrencyMetadata> | undefined, b: MoonpayTransactionCurrencyMetadata | PlainMessage<MoonpayTransactionCurrencyMetadata> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.MoonpayTransactionCurrency
 */
export declare class MoonpayTransactionCurrency extends Message<MoonpayTransactionCurrency> {
    /**
     * @generated from field: string code = 1;
     */
    code: string;
    /**
     * @generated from field: optional FOR.v1.MoonpayTransactionCurrencyMetadata metadata = 2;
     */
    metadata?: MoonpayTransactionCurrencyMetadata;
    constructor(data?: PartialMessage<MoonpayTransactionCurrency>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.MoonpayTransactionCurrency";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MoonpayTransactionCurrency;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MoonpayTransactionCurrency;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MoonpayTransactionCurrency;
    static equals(a: MoonpayTransactionCurrency | PlainMessage<MoonpayTransactionCurrency> | undefined, b: MoonpayTransactionCurrency | PlainMessage<MoonpayTransactionCurrency> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.MoonpayTransactionData
 */
export declare class MoonpayTransactionData extends Message<MoonpayTransactionData> {
    /**
     * @generated from field: FOR.v1.MoonpayTransactionCurrency baseCurrency = 1;
     */
    baseCurrency?: MoonpayTransactionCurrency;
    /**
     * @generated from field: float baseCurrencyAmount = 2;
     */
    baseCurrencyAmount: number;
    /**
     * @generated from field: string country = 3;
     */
    country: string;
    /**
     * @generated from field: string createdAt = 4;
     */
    createdAt: string;
    /**
     * @generated from field: string id = 5;
     */
    id: string;
    /**
     * @generated from field: string externalTransactionId = 6;
     */
    externalTransactionId: string;
    /**
     * @generated from field: string externalCustomerId = 7;
     */
    externalCustomerId: string;
    /**
     * @generated from field: string status = 8;
     */
    status: string;
    /**
     * @generated from field: FOR.v1.MoonpayTransactionCurrency currency = 9;
     */
    currency?: MoonpayTransactionCurrency;
    /**
     * @generated from field: optional float quoteCurrencyAmount = 10;
     */
    quoteCurrencyAmount?: number;
    /**
     * @generated from field: optional float extraFeeAmount = 11;
     */
    extraFeeAmount?: number;
    /**
     * @generated from field: optional string failureReason = 12;
     */
    failureReason?: string;
    /**
     * @generated from field: optional float feeAmount = 13;
     */
    feeAmount?: number;
    /**
     * @generated from field: optional float networkFeeAmount = 14;
     */
    networkFeeAmount?: number;
    /**
     * @generated from field: optional string paymentMethod = 15;
     */
    paymentMethod?: string;
    /**
     * @generated from field: optional string updatedAt = 16;
     */
    updatedAt?: string;
    /**
     * @generated from field: optional float usdRate = 17;
     */
    usdRate?: number;
    /**
     * @generated from field: optional string cardType = 18;
     */
    cardType?: string;
    /**
     * @generated from field: optional string cardPaymentType = 19;
     */
    cardPaymentType?: string;
    constructor(data?: PartialMessage<MoonpayTransactionData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.MoonpayTransactionData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MoonpayTransactionData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MoonpayTransactionData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MoonpayTransactionData;
    static equals(a: MoonpayTransactionData | PlainMessage<MoonpayTransactionData> | undefined, b: MoonpayTransactionData | PlainMessage<MoonpayTransactionData> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.MoonpayAnalyticsWebhookRequest
 */
export declare class MoonpayAnalyticsWebhookRequest extends Message<MoonpayAnalyticsWebhookRequest> {
    /**
     * @generated from field: string externalCustomerId = 1;
     */
    externalCustomerId: string;
    /**
     * @generated from field: string type = 2;
     */
    type: string;
    /**
     * @generated from field: FOR.v1.MoonpayTransactionData data = 3;
     */
    data?: MoonpayTransactionData;
    constructor(data?: PartialMessage<MoonpayAnalyticsWebhookRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.MoonpayAnalyticsWebhookRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MoonpayAnalyticsWebhookRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MoonpayAnalyticsWebhookRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MoonpayAnalyticsWebhookRequest;
    static equals(a: MoonpayAnalyticsWebhookRequest | PlainMessage<MoonpayAnalyticsWebhookRequest> | undefined, b: MoonpayAnalyticsWebhookRequest | PlainMessage<MoonpayAnalyticsWebhookRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.MoonpayAnalyticsWebhookResponse
 */
export declare class MoonpayAnalyticsWebhookResponse extends Message<MoonpayAnalyticsWebhookResponse> {
    constructor(data?: PartialMessage<MoonpayAnalyticsWebhookResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.MoonpayAnalyticsWebhookResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MoonpayAnalyticsWebhookResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MoonpayAnalyticsWebhookResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MoonpayAnalyticsWebhookResponse;
    static equals(a: MoonpayAnalyticsWebhookResponse | PlainMessage<MoonpayAnalyticsWebhookResponse> | undefined, b: MoonpayAnalyticsWebhookResponse | PlainMessage<MoonpayAnalyticsWebhookResponse> | undefined): boolean;
}
/**
 * Coinbase Pay Analytics Webhook messages
 *
 * @generated from message FOR.v1.CoinbasePayAmount
 */
export declare class CoinbasePayAmount extends Message<CoinbasePayAmount> {
    /**
     * @generated from field: string currency = 1;
     */
    currency: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
    constructor(data?: PartialMessage<CoinbasePayAmount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.CoinbasePayAmount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CoinbasePayAmount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CoinbasePayAmount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CoinbasePayAmount;
    static equals(a: CoinbasePayAmount | PlainMessage<CoinbasePayAmount> | undefined, b: CoinbasePayAmount | PlainMessage<CoinbasePayAmount> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.CoinbasePayFee
 */
export declare class CoinbasePayFee extends Message<CoinbasePayFee> {
    /**
     * @generated from field: string feeType = 1;
     */
    feeType: string;
    /**
     * @generated from field: string feeAmount = 2;
     */
    feeAmount: string;
    /**
     * @generated from field: string feeCurrency = 3;
     */
    feeCurrency: string;
    constructor(data?: PartialMessage<CoinbasePayFee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.CoinbasePayFee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CoinbasePayFee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CoinbasePayFee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CoinbasePayFee;
    static equals(a: CoinbasePayFee | PlainMessage<CoinbasePayFee> | undefined, b: CoinbasePayFee | PlainMessage<CoinbasePayFee> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.CoinbasePayAnalyticsWebhookRequest
 */
export declare class CoinbasePayAnalyticsWebhookRequest extends Message<CoinbasePayAnalyticsWebhookRequest> {
    /**
     * @generated from field: string eventType = 1;
     */
    eventType: string;
    /**
     * Transaction ID for guest checkout events
     *
     * @generated from field: optional string transactionId = 2;
     */
    transactionId?: string;
    /**
     * Order ID for Apple Pay order events
     *
     * @generated from field: optional string orderId = 3;
     */
    orderId?: string;
    /**
     * @generated from field: optional FOR.v1.CoinbasePayAmount coinbaseFee = 4;
     */
    coinbaseFee?: CoinbasePayAmount;
    /**
     * @generated from field: optional string completedAt = 5;
     */
    completedAt?: string;
    /**
     * @generated from field: optional string country = 6;
     */
    country?: string;
    /**
     * @generated from field: optional string createdAt = 7;
     */
    createdAt?: string;
    /**
     * @generated from field: optional string updatedAt = 8;
     */
    updatedAt?: string;
    /**
     * @generated from field: optional FOR.v1.CoinbasePayAmount exchangeRate = 9;
     */
    exchangeRate?: CoinbasePayAmount;
    /**
     * @generated from field: optional FOR.v1.CoinbasePayAmount networkFee = 10;
     */
    networkFee?: CoinbasePayAmount;
    /**
     * @generated from field: optional string paymentMethod = 11;
     */
    paymentMethod?: string;
    /**
     * @generated from field: optional FOR.v1.CoinbasePayAmount paymentSubtotal = 12;
     */
    paymentSubtotal?: CoinbasePayAmount;
    /**
     * @generated from field: optional FOR.v1.CoinbasePayAmount paymentTotal = 13;
     */
    paymentTotal?: CoinbasePayAmount;
    /**
     * @generated from field: optional FOR.v1.CoinbasePayAmount paymentTotalUsd = 14;
     */
    paymentTotalUsd?: CoinbasePayAmount;
    /**
     * @generated from field: optional FOR.v1.CoinbasePayAmount purchaseAmount = 15;
     */
    purchaseAmount?: CoinbasePayAmount;
    /**
     * @generated from field: optional string purchaseCurrency = 16;
     */
    purchaseCurrency?: string;
    /**
     * @generated from field: optional string purchaseNetwork = 17;
     */
    purchaseNetwork?: string;
    /**
     * @generated from field: optional string status = 18;
     */
    status?: string;
    /**
     * @generated from field: optional string txHash = 19;
     */
    txHash?: string;
    /**
     * @generated from field: optional string type = 20;
     */
    type?: string;
    /**
     * @generated from field: optional string userId = 21;
     */
    userId?: string;
    /**
     * @generated from field: optional string userType = 22;
     */
    userType?: string;
    /**
     * @generated from field: optional string walletAddress = 23;
     */
    walletAddress?: string;
    /**
     * @generated from field: optional string partnerUserRef = 24;
     */
    partnerUserRef?: string;
    /**
     * @generated from field: optional string destinationAddress = 25;
     */
    destinationAddress?: string;
    /**
     * @generated from field: optional string destinationNetwork = 26;
     */
    destinationNetwork?: string;
    /**
     * For Apple Pay order events with fees array
     *
     * @generated from field: repeated FOR.v1.CoinbasePayFee fees = 27;
     */
    fees: CoinbasePayFee[];
    /**
     * Payment currency for order events (string format)
     *
     * @generated from field: optional string paymentCurrency = 28;
     */
    paymentCurrency?: string;
    constructor(data?: PartialMessage<CoinbasePayAnalyticsWebhookRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.CoinbasePayAnalyticsWebhookRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CoinbasePayAnalyticsWebhookRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CoinbasePayAnalyticsWebhookRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CoinbasePayAnalyticsWebhookRequest;
    static equals(a: CoinbasePayAnalyticsWebhookRequest | PlainMessage<CoinbasePayAnalyticsWebhookRequest> | undefined, b: CoinbasePayAnalyticsWebhookRequest | PlainMessage<CoinbasePayAnalyticsWebhookRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.CoinbasePayAnalyticsWebhookResponse
 */
export declare class CoinbasePayAnalyticsWebhookResponse extends Message<CoinbasePayAnalyticsWebhookResponse> {
    constructor(data?: PartialMessage<CoinbasePayAnalyticsWebhookResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.CoinbasePayAnalyticsWebhookResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CoinbasePayAnalyticsWebhookResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CoinbasePayAnalyticsWebhookResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CoinbasePayAnalyticsWebhookResponse;
    static equals(a: CoinbasePayAnalyticsWebhookResponse | PlainMessage<CoinbasePayAnalyticsWebhookResponse> | undefined, b: CoinbasePayAnalyticsWebhookResponse | PlainMessage<CoinbasePayAnalyticsWebhookResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.OffRampWidgetUrlRequest
 */
export declare class OffRampWidgetUrlRequest extends Message<OffRampWidgetUrlRequest> {
    /**
     * @generated from field: float sourceAmount = 1;
     */
    sourceAmount: number;
    /**
     * @generated from field: string baseCurrencyCode = 2;
     */
    baseCurrencyCode: string;
    /**
     * @generated from field: string refundWalletAddress = 3;
     */
    refundWalletAddress: string;
    /**
     * @generated from field: string countryCode = 4;
     */
    countryCode: string;
    /**
     * @generated from field: string quoteCurrencyCode = 5;
     */
    quoteCurrencyCode: string;
    /**
     * @generated from field: string serviceProvider = 6;
     */
    serviceProvider: string;
    /**
     * @generated from field: string externalSessionId = 7;
     */
    externalSessionId: string;
    /**
     * @generated from field: optional string lockAmount = 8;
     */
    lockAmount?: string;
    /**
     * @generated from field: optional string requestSource = 9;
     */
    requestSource?: string;
    /**
     * @generated from field: optional string externalTransactionId = 10;
     */
    externalTransactionId?: string;
    /**
     * @generated from field: optional string externalCustomerId = 11;
     */
    externalCustomerId?: string;
    /**
     * @generated from field: optional string redirectUrl = 12;
     */
    redirectUrl?: string;
    constructor(data?: PartialMessage<OffRampWidgetUrlRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.OffRampWidgetUrlRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OffRampWidgetUrlRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OffRampWidgetUrlRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OffRampWidgetUrlRequest;
    static equals(a: OffRampWidgetUrlRequest | PlainMessage<OffRampWidgetUrlRequest> | undefined, b: OffRampWidgetUrlRequest | PlainMessage<OffRampWidgetUrlRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.OffRampWidgetUrlResponse
 */
export declare class OffRampWidgetUrlResponse extends Message<OffRampWidgetUrlResponse> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string widgetUrl = 2;
     */
    widgetUrl: string;
    constructor(data?: PartialMessage<OffRampWidgetUrlResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.OffRampWidgetUrlResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OffRampWidgetUrlResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OffRampWidgetUrlResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OffRampWidgetUrlResponse;
    static equals(a: OffRampWidgetUrlResponse | PlainMessage<OffRampWidgetUrlResponse> | undefined, b: OffRampWidgetUrlResponse | PlainMessage<OffRampWidgetUrlResponse> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.MoonpayOffRampTransferDetailsRequest
 */
export declare class MoonpayOffRampTransferDetailsRequest extends Message<MoonpayOffRampTransferDetailsRequest> {
    /**
     * @generated from field: string baseCurrencyCode = 1;
     */
    baseCurrencyCode: string;
    /**
     * @generated from field: float baseCurrencyAmount = 2;
     */
    baseCurrencyAmount: number;
    /**
     * @generated from field: string depositWalletAddress = 3;
     */
    depositWalletAddress: string;
    /**
     * @generated from field: optional string depositWalletAddressTag = 4;
     */
    depositWalletAddressTag?: string;
    constructor(data?: PartialMessage<MoonpayOffRampTransferDetailsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.MoonpayOffRampTransferDetailsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MoonpayOffRampTransferDetailsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MoonpayOffRampTransferDetailsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MoonpayOffRampTransferDetailsRequest;
    static equals(a: MoonpayOffRampTransferDetailsRequest | PlainMessage<MoonpayOffRampTransferDetailsRequest> | undefined, b: MoonpayOffRampTransferDetailsRequest | PlainMessage<MoonpayOffRampTransferDetailsRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.MeldOffRampTransferDetailsRequest
 */
export declare class MeldOffRampTransferDetailsRequest extends Message<MeldOffRampTransferDetailsRequest> {
    /**
     * @generated from field: string sessionId = 1;
     */
    sessionId: string;
    constructor(data?: PartialMessage<MeldOffRampTransferDetailsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.MeldOffRampTransferDetailsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MeldOffRampTransferDetailsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MeldOffRampTransferDetailsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MeldOffRampTransferDetailsRequest;
    static equals(a: MeldOffRampTransferDetailsRequest | PlainMessage<MeldOffRampTransferDetailsRequest> | undefined, b: MeldOffRampTransferDetailsRequest | PlainMessage<MeldOffRampTransferDetailsRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.OffRampTransferDetailsRequest
 */
export declare class OffRampTransferDetailsRequest extends Message<OffRampTransferDetailsRequest> {
    /**
     * requestSource currently not used because offramp is only allowed on Mobile
     *
     * @generated from field: optional string requestSource = 1;
     */
    requestSource?: string;
    /**
     * these are different because Moonpay provides more details needed for the transfer than Meld
     *
     * @generated from oneof FOR.v1.OffRampTransferDetailsRequest.transferProviderDetails
     */
    transferProviderDetails: {
        /**
         * @generated from field: FOR.v1.MoonpayOffRampTransferDetailsRequest moonpayDetails = 2;
         */
        value: MoonpayOffRampTransferDetailsRequest;
        case: "moonpayDetails";
    } | {
        /**
         * @generated from field: FOR.v1.MeldOffRampTransferDetailsRequest meldDetails = 3;
         */
        value: MeldOffRampTransferDetailsRequest;
        case: "meldDetails";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<OffRampTransferDetailsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.OffRampTransferDetailsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OffRampTransferDetailsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OffRampTransferDetailsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OffRampTransferDetailsRequest;
    static equals(a: OffRampTransferDetailsRequest | PlainMessage<OffRampTransferDetailsRequest> | undefined, b: OffRampTransferDetailsRequest | PlainMessage<OffRampTransferDetailsRequest> | undefined): boolean;
}
/**
 * @generated from message FOR.v1.OffRampTransferDetailsResponse
 */
export declare class OffRampTransferDetailsResponse extends Message<OffRampTransferDetailsResponse> {
    /**
     * @generated from field: string baseCurrencyCode = 1;
     */
    baseCurrencyCode: string;
    /**
     * @generated from field: float baseCurrencyAmount = 2;
     */
    baseCurrencyAmount: number;
    /**
     * @generated from field: string depositWalletAddress = 3;
     */
    depositWalletAddress: string;
    /**
     * @generated from field: string chainId = 4;
     */
    chainId: string;
    /**
     * @generated from field: string provider = 5;
     */
    provider: string;
    /**
     * @generated from field: string tokenAddress = 6;
     */
    tokenAddress: string;
    /**
     * @generated from field: FOR.v1.ServiceProviderLogo logos = 7;
     */
    logos?: ServiceProviderLogo;
    /**
     * @generated from field: optional string depositWalletAddressTag = 8;
     */
    depositWalletAddressTag?: string;
    constructor(data?: PartialMessage<OffRampTransferDetailsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "FOR.v1.OffRampTransferDetailsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OffRampTransferDetailsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OffRampTransferDetailsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OffRampTransferDetailsResponse;
    static equals(a: OffRampTransferDetailsResponse | PlainMessage<OffRampTransferDetailsResponse> | undefined, b: OffRampTransferDetailsResponse | PlainMessage<OffRampTransferDetailsResponse> | undefined): boolean;
}
