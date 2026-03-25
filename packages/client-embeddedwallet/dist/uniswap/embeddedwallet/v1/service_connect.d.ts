import { ChallengeRequest, ChallengeResponse, CreateWalletRequest, CreateWalletResponse, DeleteAuthenticatorRequest, DeleteAuthenticatorResponse, DisconnectWalletRequest, DisconnectWalletResponse, ExportSeedPhraseRequest, ExportSeedPhraseResponse, ListAuthenticatorsRequest, ListAuthenticatorsResponse, RegisterNewAuthenticatorRequest, RegisterNewAuthenticatorResponse, SecuredChallengeRequest, SecuredChallengeResponse, SignMessagesRequest, SignMessagesResponse, SignTransactionsRequest, SignTransactionsResponse, SignTypedDataBatchRequest, SignTypedDataBatchResponse, WalletSigninRequest, WalletSigninResponse } from "./service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service uniswap.embeddedwallet.v1.EmbeddedWalletService
 */
export declare const EmbeddedWalletService: {
    readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    readonly methods: {
        /**
         * Initiates a challenge for given authenticator type
         *
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.Challenge
         */
        readonly challenge: {
            readonly name: "Challenge";
            readonly I: typeof ChallengeRequest;
            readonly O: typeof ChallengeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.SecuredChallenge
         */
        readonly securedChallenge: {
            readonly name: "SecuredChallenge";
            readonly I: typeof SecuredChallengeRequest;
            readonly O: typeof SecuredChallengeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * complete registration + wallet creation
         *
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.CreateWallet
         */
        readonly createWallet: {
            readonly name: "CreateWallet";
            readonly I: typeof CreateWalletRequest;
            readonly O: typeof CreateWalletResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Authenticate + signing messages
         *
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.SignMessages
         */
        readonly signMessages: {
            readonly name: "SignMessages";
            readonly I: typeof SignMessagesRequest;
            readonly O: typeof SignMessagesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Authenticate + sign transaction
         *
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.SignTransactions
         */
        readonly signTransactions: {
            readonly name: "SignTransactions";
            readonly I: typeof SignTransactionsRequest;
            readonly O: typeof SignTransactionsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * readonly signin post authenticator verification
         *
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.WalletSignin
         */
        readonly walletSignin: {
            readonly name: "WalletSignin";
            readonly I: typeof WalletSigninRequest;
            readonly O: typeof WalletSigninResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Authenticate + sign typed data
         *
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.SignTypedDataBatch
         */
        readonly signTypedDataBatch: {
            readonly name: "SignTypedDataBatch";
            readonly I: typeof SignTypedDataBatchRequest;
            readonly O: typeof SignTypedDataBatchResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Authenticate + Securely export the seed phrase using a temporary encryption key
         *
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.ExportSeedPhrase
         */
        readonly exportSeedPhrase: {
            readonly name: "ExportSeedPhrase";
            readonly I: typeof ExportSeedPhraseRequest;
            readonly O: typeof ExportSeedPhraseResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete and destroy the record from uni system entirely
         *
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.DeleteAuthenticator
         */
        readonly deleteAuthenticator: {
            readonly name: "DeleteAuthenticator";
            readonly I: typeof DeleteAuthenticatorRequest;
            readonly O: typeof DeleteAuthenticatorResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Disconnect a wallet from the web client, cleanup session and cookies
         *
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.DisconnectWallet
         */
        readonly disconnectWallet: {
            readonly name: "DisconnectWallet";
            readonly I: typeof DisconnectWalletRequest;
            readonly O: typeof DisconnectWalletResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Add new Authentication types to existing wallet
         *
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.RegisterNewAuthenticator
         */
        readonly registerNewAuthenticator: {
            readonly name: "RegisterNewAuthenticator";
            readonly I: typeof RegisterNewAuthenticatorRequest;
            readonly O: typeof RegisterNewAuthenticatorResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * list all registered authenticator
         *
         * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.ListAuthenticators
         */
        readonly listAuthenticators: {
            readonly name: "ListAuthenticators";
            readonly I: typeof ListAuthenticatorsRequest;
            readonly O: typeof ListAuthenticatorsResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
