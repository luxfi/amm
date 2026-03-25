import { CoinbasePayAnalyticsWebhookRequest, CoinbasePayAnalyticsWebhookResponse, GetCountryRequest, GetCountryResponse, MeldAnalyticsWebhookRequest, MeldAnalyticsWebhookResponse, MoonpayAnalyticsWebhookRequest, MoonpayAnalyticsWebhookResponse, OffRampTransferDetailsRequest, OffRampTransferDetailsResponse, OffRampWidgetUrlRequest, OffRampWidgetUrlResponse, QuoteRequest, QuoteResponse, SupportedCountriesRequest, SupportedCountriesResponse, SupportedFiatCurrenciesRequest, SupportedFiatCurrenciesResponse, SupportedTokensRequest, SupportedTokensResponse, TransactionRequest, TransactionResponse, TransactionsRequest, TransactionsResponse, TransferServiceProvidersRequest, TransferServiceProvidersResponse, TransferWidgetUrlRequest, TransferWidgetUrlResponse, WidgetUrlRequest, WidgetUrlResponse } from "./api_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service FOR.v1.FORService
 */
export declare const FORService: {
    readonly typeName: "FOR.v1.FORService";
    readonly methods: {
        /**
         * @generated from rpc FOR.v1.FORService.GetCountry
         */
        readonly getCountry: {
            readonly name: "GetCountry";
            readonly I: typeof GetCountryRequest;
            readonly O: typeof GetCountryResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.SupportedCountries
         */
        readonly supportedCountries: {
            readonly name: "SupportedCountries";
            readonly I: typeof SupportedCountriesRequest;
            readonly O: typeof SupportedCountriesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.SupportedFiatCurrencies
         */
        readonly supportedFiatCurrencies: {
            readonly name: "SupportedFiatCurrencies";
            readonly I: typeof SupportedFiatCurrenciesRequest;
            readonly O: typeof SupportedFiatCurrenciesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.SupportedTokens
         */
        readonly supportedTokens: {
            readonly name: "SupportedTokens";
            readonly I: typeof SupportedTokensRequest;
            readonly O: typeof SupportedTokensResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.TransferServiceProviders
         */
        readonly transferServiceProviders: {
            readonly name: "TransferServiceProviders";
            readonly I: typeof TransferServiceProvidersRequest;
            readonly O: typeof TransferServiceProvidersResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.WidgetUrl
         */
        readonly widgetUrl: {
            readonly name: "WidgetUrl";
            readonly I: typeof WidgetUrlRequest;
            readonly O: typeof WidgetUrlResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.TransferWidgetUrl
         */
        readonly transferWidgetUrl: {
            readonly name: "TransferWidgetUrl";
            readonly I: typeof TransferWidgetUrlRequest;
            readonly O: typeof TransferWidgetUrlResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.Transactions
         */
        readonly transactions: {
            readonly name: "Transactions";
            readonly I: typeof TransactionsRequest;
            readonly O: typeof TransactionsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.Transaction
         */
        readonly transaction: {
            readonly name: "Transaction";
            readonly I: typeof TransactionRequest;
            readonly O: typeof TransactionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.Quote
         */
        readonly quote: {
            readonly name: "Quote";
            readonly I: typeof QuoteRequest;
            readonly O: typeof QuoteResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.OffRampWidgetUrl
         */
        readonly offRampWidgetUrl: {
            readonly name: "OffRampWidgetUrl";
            readonly I: typeof OffRampWidgetUrlRequest;
            readonly O: typeof OffRampWidgetUrlResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.MeldAnalyticsWebhook
         */
        readonly meldAnalyticsWebhook: {
            readonly name: "MeldAnalyticsWebhook";
            readonly I: typeof MeldAnalyticsWebhookRequest;
            readonly O: typeof MeldAnalyticsWebhookResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.MoonpayAnalyticsWebhook
         */
        readonly moonpayAnalyticsWebhook: {
            readonly name: "MoonpayAnalyticsWebhook";
            readonly I: typeof MoonpayAnalyticsWebhookRequest;
            readonly O: typeof MoonpayAnalyticsWebhookResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.CoinbasePayAnalyticsWebhook
         */
        readonly coinbasePayAnalyticsWebhook: {
            readonly name: "CoinbasePayAnalyticsWebhook";
            readonly I: typeof CoinbasePayAnalyticsWebhookRequest;
            readonly O: typeof CoinbasePayAnalyticsWebhookResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc FOR.v1.FORService.OffRampTransferDetails
         */
        readonly offRampTransferDetails: {
            readonly name: "OffRampTransferDetails";
            readonly I: typeof OffRampTransferDetailsRequest;
            readonly O: typeof OffRampTransferDetailsResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
