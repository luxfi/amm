import { MethodKind } from "@bufbuild/protobuf";
import { CoinbasePayAnalyticsWebhookRequest, CoinbasePayAnalyticsWebhookResponse, GetCountryRequest, GetCountryResponse, MeldAnalyticsWebhookRequest, MeldAnalyticsWebhookResponse, MoonpayAnalyticsWebhookRequest, MoonpayAnalyticsWebhookResponse, OffRampTransferDetailsRequest, OffRampTransferDetailsResponse, OffRampWidgetUrlRequest, OffRampWidgetUrlResponse, QuoteRequest, QuoteResponse, SupportedCountriesRequest, SupportedCountriesResponse, SupportedFiatCurrenciesRequest, SupportedFiatCurrenciesResponse, SupportedTokensRequest, SupportedTokensResponse, TransactionRequest, TransactionResponse, TransactionsRequest, TransactionsResponse, TransferServiceProvidersRequest, TransferServiceProvidersResponse, TransferWidgetUrlRequest, TransferWidgetUrlResponse, WidgetUrlRequest, WidgetUrlResponse } from "./api_pb.js";
/**
 * @generated from rpc FOR.v1.FORService.GetCountry
 */
export declare const getCountry: {
    readonly localName: "getCountry";
    readonly name: "GetCountry";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetCountryRequest;
    readonly O: typeof GetCountryResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.SupportedCountries
 */
export declare const supportedCountries: {
    readonly localName: "supportedCountries";
    readonly name: "SupportedCountries";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SupportedCountriesRequest;
    readonly O: typeof SupportedCountriesResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.SupportedFiatCurrencies
 */
export declare const supportedFiatCurrencies: {
    readonly localName: "supportedFiatCurrencies";
    readonly name: "SupportedFiatCurrencies";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SupportedFiatCurrenciesRequest;
    readonly O: typeof SupportedFiatCurrenciesResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.SupportedTokens
 */
export declare const supportedTokens: {
    readonly localName: "supportedTokens";
    readonly name: "SupportedTokens";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SupportedTokensRequest;
    readonly O: typeof SupportedTokensResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.TransferServiceProviders
 */
export declare const transferServiceProviders: {
    readonly localName: "transferServiceProviders";
    readonly name: "TransferServiceProviders";
    readonly kind: MethodKind.Unary;
    readonly I: typeof TransferServiceProvidersRequest;
    readonly O: typeof TransferServiceProvidersResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.WidgetUrl
 */
export declare const widgetUrl: {
    readonly localName: "widgetUrl";
    readonly name: "WidgetUrl";
    readonly kind: MethodKind.Unary;
    readonly I: typeof WidgetUrlRequest;
    readonly O: typeof WidgetUrlResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.TransferWidgetUrl
 */
export declare const transferWidgetUrl: {
    readonly localName: "transferWidgetUrl";
    readonly name: "TransferWidgetUrl";
    readonly kind: MethodKind.Unary;
    readonly I: typeof TransferWidgetUrlRequest;
    readonly O: typeof TransferWidgetUrlResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.Transactions
 */
export declare const transactions: {
    readonly localName: "transactions";
    readonly name: "Transactions";
    readonly kind: MethodKind.Unary;
    readonly I: typeof TransactionsRequest;
    readonly O: typeof TransactionsResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.Transaction
 */
export declare const transaction: {
    readonly localName: "transaction";
    readonly name: "Transaction";
    readonly kind: MethodKind.Unary;
    readonly I: typeof TransactionRequest;
    readonly O: typeof TransactionResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.Quote
 */
export declare const quote: {
    readonly localName: "quote";
    readonly name: "Quote";
    readonly kind: MethodKind.Unary;
    readonly I: typeof QuoteRequest;
    readonly O: typeof QuoteResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.OffRampWidgetUrl
 */
export declare const offRampWidgetUrl: {
    readonly localName: "offRampWidgetUrl";
    readonly name: "OffRampWidgetUrl";
    readonly kind: MethodKind.Unary;
    readonly I: typeof OffRampWidgetUrlRequest;
    readonly O: typeof OffRampWidgetUrlResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.MeldAnalyticsWebhook
 */
export declare const meldAnalyticsWebhook: {
    readonly localName: "meldAnalyticsWebhook";
    readonly name: "MeldAnalyticsWebhook";
    readonly kind: MethodKind.Unary;
    readonly I: typeof MeldAnalyticsWebhookRequest;
    readonly O: typeof MeldAnalyticsWebhookResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.MoonpayAnalyticsWebhook
 */
export declare const moonpayAnalyticsWebhook: {
    readonly localName: "moonpayAnalyticsWebhook";
    readonly name: "MoonpayAnalyticsWebhook";
    readonly kind: MethodKind.Unary;
    readonly I: typeof MoonpayAnalyticsWebhookRequest;
    readonly O: typeof MoonpayAnalyticsWebhookResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.CoinbasePayAnalyticsWebhook
 */
export declare const coinbasePayAnalyticsWebhook: {
    readonly localName: "coinbasePayAnalyticsWebhook";
    readonly name: "CoinbasePayAnalyticsWebhook";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CoinbasePayAnalyticsWebhookRequest;
    readonly O: typeof CoinbasePayAnalyticsWebhookResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
/**
 * @generated from rpc FOR.v1.FORService.OffRampTransferDetails
 */
export declare const offRampTransferDetails: {
    readonly localName: "offRampTransferDetails";
    readonly name: "OffRampTransferDetails";
    readonly kind: MethodKind.Unary;
    readonly I: typeof OffRampTransferDetailsRequest;
    readonly O: typeof OffRampTransferDetailsResponse;
    readonly service: {
        readonly typeName: "FOR.v1.FORService";
    };
};
