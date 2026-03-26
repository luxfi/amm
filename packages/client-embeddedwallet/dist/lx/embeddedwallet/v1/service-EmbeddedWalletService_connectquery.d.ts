import { MethodKind } from "@bufbuild/protobuf";
import { ChallengeRequest, ChallengeResponse, CreateWalletRequest, CreateWalletResponse, DeleteAuthenticatorRequest, DeleteAuthenticatorResponse, DisconnectWalletRequest, DisconnectWalletResponse, ExportSeedPhraseRequest, ExportSeedPhraseResponse, ListAuthenticatorsRequest, ListAuthenticatorsResponse, RegisterNewAuthenticatorRequest, RegisterNewAuthenticatorResponse, SecuredChallengeRequest, SecuredChallengeResponse, SignMessagesRequest, SignMessagesResponse, SignTransactionsRequest, SignTransactionsResponse, SignTypedDataBatchRequest, SignTypedDataBatchResponse, WalletSigninRequest, WalletSigninResponse } from "./service_pb.js";
/**
 * Initiates a challenge for given authenticator type
 *
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.Challenge
 */
export declare const challenge: {
    readonly localName: "challenge";
    readonly name: "Challenge";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ChallengeRequest;
    readonly O: typeof ChallengeResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
/**
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.SecuredChallenge
 */
export declare const securedChallenge: {
    readonly localName: "securedChallenge";
    readonly name: "SecuredChallenge";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SecuredChallengeRequest;
    readonly O: typeof SecuredChallengeResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
/**
 * complete registration + wallet creation
 *
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.CreateWallet
 */
export declare const createWallet: {
    readonly localName: "createWallet";
    readonly name: "CreateWallet";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CreateWalletRequest;
    readonly O: typeof CreateWalletResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
/**
 * Authenticate + signing messages
 *
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.SignMessages
 */
export declare const signMessages: {
    readonly localName: "signMessages";
    readonly name: "SignMessages";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SignMessagesRequest;
    readonly O: typeof SignMessagesResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
/**
 * Authenticate + sign transaction
 *
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.SignTransactions
 */
export declare const signTransactions: {
    readonly localName: "signTransactions";
    readonly name: "SignTransactions";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SignTransactionsRequest;
    readonly O: typeof SignTransactionsResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
/**
 * readonly signin post authenticator verification
 *
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.WalletSignin
 */
export declare const walletSignin: {
    readonly localName: "walletSignin";
    readonly name: "WalletSignin";
    readonly kind: MethodKind.Unary;
    readonly I: typeof WalletSigninRequest;
    readonly O: typeof WalletSigninResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
/**
 * Authenticate + sign typed data
 *
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.SignTypedDataBatch
 */
export declare const signTypedDataBatch: {
    readonly localName: "signTypedDataBatch";
    readonly name: "SignTypedDataBatch";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SignTypedDataBatchRequest;
    readonly O: typeof SignTypedDataBatchResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
/**
 * Authenticate + Securely export the seed phrase using a temporary encryption key
 *
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.ExportSeedPhrase
 */
export declare const exportSeedPhrase: {
    readonly localName: "exportSeedPhrase";
    readonly name: "ExportSeedPhrase";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ExportSeedPhraseRequest;
    readonly O: typeof ExportSeedPhraseResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
/**
 * Delete and destroy the record from uni system entirely
 *
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.DeleteAuthenticator
 */
export declare const deleteAuthenticator: {
    readonly localName: "deleteAuthenticator";
    readonly name: "DeleteAuthenticator";
    readonly kind: MethodKind.Unary;
    readonly I: typeof DeleteAuthenticatorRequest;
    readonly O: typeof DeleteAuthenticatorResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
/**
 * Disconnect a wallet from the web client, cleanup session and cookies
 *
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.DisconnectWallet
 */
export declare const disconnectWallet: {
    readonly localName: "disconnectWallet";
    readonly name: "DisconnectWallet";
    readonly kind: MethodKind.Unary;
    readonly I: typeof DisconnectWalletRequest;
    readonly O: typeof DisconnectWalletResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
/**
 * Add new Authentication types to existing wallet
 *
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.RegisterNewAuthenticator
 */
export declare const registerNewAuthenticator: {
    readonly localName: "registerNewAuthenticator";
    readonly name: "RegisterNewAuthenticator";
    readonly kind: MethodKind.Unary;
    readonly I: typeof RegisterNewAuthenticatorRequest;
    readonly O: typeof RegisterNewAuthenticatorResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
/**
 * list all registered authenticator
 *
 * @generated from rpc uniswap.embeddedwallet.v1.EmbeddedWalletService.ListAuthenticators
 */
export declare const listAuthenticators: {
    readonly localName: "listAuthenticators";
    readonly name: "ListAuthenticators";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ListAuthenticatorsRequest;
    readonly O: typeof ListAuthenticatorsResponse;
    readonly service: {
        readonly typeName: "uniswap.embeddedwallet.v1.EmbeddedWalletService";
    };
};
