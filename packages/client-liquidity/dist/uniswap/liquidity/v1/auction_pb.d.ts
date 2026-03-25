import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { AuctionValidation, BidToExit, ChainId, TransactionRequest } from "./types_pb.js";
/**
 * REQUESTS & RESPONSES
 *
 * @generated from message uniswap.liquidity.v1.SubmitBidRequest
 */
export declare class SubmitBidRequest extends Message<SubmitBidRequest> {
    /**
     * @generated from field: string maxPrice = 1;
     */
    maxPrice: string;
    /**
     * @generated from field: optional bool exactIn = 2;
     */
    exactIn?: boolean;
    /**
     * @generated from field: string amount = 3;
     */
    amount: string;
    /**
     * @generated from field: string walletAddress = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: string auctionContractAddress = 5;
     */
    auctionContractAddress: string;
    /**
     * @generated from field: optional string hookData = 6;
     */
    hookData?: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 7;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional bool simulate_transaction = 8;
     */
    simulateTransaction?: boolean;
    constructor(data?: PartialMessage<SubmitBidRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.SubmitBidRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitBidRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitBidRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitBidRequest;
    static equals(a: SubmitBidRequest | PlainMessage<SubmitBidRequest> | undefined, b: SubmitBidRequest | PlainMessage<SubmitBidRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.SubmitBidResponse
 */
export declare class SubmitBidResponse extends Message<SubmitBidResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: uniswap.liquidity.v1.TransactionRequest bid = 2;
     */
    bid?: TransactionRequest;
    /**
     * @generated from field: optional string gasFee = 3;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<SubmitBidResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.SubmitBidResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitBidResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitBidResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitBidResponse;
    static equals(a: SubmitBidResponse | PlainMessage<SubmitBidResponse> | undefined, b: SubmitBidResponse | PlainMessage<SubmitBidResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.ExitBidPositionRequest
 */
export declare class ExitBidPositionRequest extends Message<ExitBidPositionRequest> {
    /**
     * @generated from field: string bidId = 1;
     */
    bidId: string;
    /**
     * @generated from field: string auctionContractAddress = 2;
     */
    auctionContractAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 3;
     */
    chainId: ChainId;
    /**
     * @generated from field: string walletAddress = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: optional bool simulate_transaction = 5;
     */
    simulateTransaction?: boolean;
    constructor(data?: PartialMessage<ExitBidPositionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.ExitBidPositionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExitBidPositionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExitBidPositionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExitBidPositionRequest;
    static equals(a: ExitBidPositionRequest | PlainMessage<ExitBidPositionRequest> | undefined, b: ExitBidPositionRequest | PlainMessage<ExitBidPositionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.ExitBidPositionResponse
 */
export declare class ExitBidPositionResponse extends Message<ExitBidPositionResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: uniswap.liquidity.v1.TransactionRequest exitBid = 2;
     */
    exitBid?: TransactionRequest;
    /**
     * @generated from field: optional string gasFee = 3;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<ExitBidPositionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.ExitBidPositionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExitBidPositionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExitBidPositionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExitBidPositionResponse;
    static equals(a: ExitBidPositionResponse | PlainMessage<ExitBidPositionResponse> | undefined, b: ExitBidPositionResponse | PlainMessage<ExitBidPositionResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.ClaimTokensRequest
 */
export declare class ClaimTokensRequest extends Message<ClaimTokensRequest> {
    /**
     * @generated from field: repeated string bids = 1;
     */
    bids: string[];
    /**
     * @generated from field: string auction_contract_address = 2;
     */
    auctionContractAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 3;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional bool simulate_transaction = 4;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: string wallet_address = 5;
     */
    walletAddress: string;
    /**
     * @generated from field: optional bool should_claim_all = 6;
     */
    shouldClaimAll?: boolean;
    constructor(data?: PartialMessage<ClaimTokensRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.ClaimTokensRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimTokensRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimTokensRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimTokensRequest;
    static equals(a: ClaimTokensRequest | PlainMessage<ClaimTokensRequest> | undefined, b: ClaimTokensRequest | PlainMessage<ClaimTokensRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.ClaimTokensResponse
 */
export declare class ClaimTokensResponse extends Message<ClaimTokensResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: uniswap.liquidity.v1.TransactionRequest claim_tokens = 2;
     */
    claimTokens?: TransactionRequest;
    /**
     * @generated from field: optional string gas_fee = 3;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<ClaimTokensResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.ClaimTokensResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimTokensResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimTokensResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimTokensResponse;
    static equals(a: ClaimTokensResponse | PlainMessage<ClaimTokensResponse> | undefined, b: ClaimTokensResponse | PlainMessage<ClaimTokensResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.ExitBidAndClaimTokensRequest
 */
export declare class ExitBidAndClaimTokensRequest extends Message<ExitBidAndClaimTokensRequest> {
    /**
     * @generated from field: repeated uniswap.liquidity.v1.BidToExit bids = 1;
     */
    bids: BidToExit[];
    /**
     * @generated from field: string auction_contract_address = 2;
     */
    auctionContractAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 3;
     */
    chainId: ChainId;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: optional bool simulate_transaction = 5;
     */
    simulateTransaction?: boolean;
    constructor(data?: PartialMessage<ExitBidAndClaimTokensRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.ExitBidAndClaimTokensRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExitBidAndClaimTokensRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExitBidAndClaimTokensRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExitBidAndClaimTokensRequest;
    static equals(a: ExitBidAndClaimTokensRequest | PlainMessage<ExitBidAndClaimTokensRequest> | undefined, b: ExitBidAndClaimTokensRequest | PlainMessage<ExitBidAndClaimTokensRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.ExitBidAndClaimTokensResponse
 */
export declare class ExitBidAndClaimTokensResponse extends Message<ExitBidAndClaimTokensResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: uniswap.liquidity.v1.TransactionRequest exit_bid_and_claim_tokens = 2;
     */
    exitBidAndClaimTokens?: TransactionRequest;
    /**
     * @generated from field: optional string gas_fee = 3;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<ExitBidAndClaimTokensResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.ExitBidAndClaimTokensResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExitBidAndClaimTokensResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExitBidAndClaimTokensResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExitBidAndClaimTokensResponse;
    static equals(a: ExitBidAndClaimTokensResponse | PlainMessage<ExitBidAndClaimTokensResponse> | undefined, b: ExitBidAndClaimTokensResponse | PlainMessage<ExitBidAndClaimTokensResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.TokenCountAllocatedToLpForAuctionRequest
 */
export declare class TokenCountAllocatedToLpForAuctionRequest extends Message<TokenCountAllocatedToLpForAuctionRequest> {
    /**
     * @generated from field: string auctionContractAddress = 1;
     */
    auctionContractAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 2;
     */
    chainId: ChainId;
    constructor(data?: PartialMessage<TokenCountAllocatedToLpForAuctionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.TokenCountAllocatedToLpForAuctionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenCountAllocatedToLpForAuctionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenCountAllocatedToLpForAuctionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenCountAllocatedToLpForAuctionRequest;
    static equals(a: TokenCountAllocatedToLpForAuctionRequest | PlainMessage<TokenCountAllocatedToLpForAuctionRequest> | undefined, b: TokenCountAllocatedToLpForAuctionRequest | PlainMessage<TokenCountAllocatedToLpForAuctionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.TokenCountAllocatedToLpForAuctionResponse
 */
export declare class TokenCountAllocatedToLpForAuctionResponse extends Message<TokenCountAllocatedToLpForAuctionResponse> {
    /**
     * @generated from field: string request_id = 1;
     */
    requestId: string;
    /**
     * @generated from field: string token_count_allocated_to_lp = 2;
     */
    tokenCountAllocatedToLp: string;
    constructor(data?: PartialMessage<TokenCountAllocatedToLpForAuctionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.TokenCountAllocatedToLpForAuctionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenCountAllocatedToLpForAuctionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenCountAllocatedToLpForAuctionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenCountAllocatedToLpForAuctionResponse;
    static equals(a: TokenCountAllocatedToLpForAuctionResponse | PlainMessage<TokenCountAllocatedToLpForAuctionResponse> | undefined, b: TokenCountAllocatedToLpForAuctionResponse | PlainMessage<TokenCountAllocatedToLpForAuctionResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.VerifyWalletRequest
 */
export declare class VerifyWalletRequest extends Message<VerifyWalletRequest> {
    /**
     * @generated from field: string wallet_address = 1;
     */
    walletAddress: string;
    /**
     * @generated from field: string auction_address = 2;
     */
    auctionAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 3;
     */
    chainId: ChainId;
    constructor(data?: PartialMessage<VerifyWalletRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.VerifyWalletRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyWalletRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyWalletRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyWalletRequest;
    static equals(a: VerifyWalletRequest | PlainMessage<VerifyWalletRequest> | undefined, b: VerifyWalletRequest | PlainMessage<VerifyWalletRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.VerifyWalletResponse
 */
export declare class VerifyWalletResponse extends Message<VerifyWalletResponse> {
    /**
     * @generated from field: repeated uniswap.liquidity.v1.AuctionValidation validations = 1;
     */
    validations: AuctionValidation[];
    constructor(data?: PartialMessage<VerifyWalletResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.VerifyWalletResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyWalletResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyWalletResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyWalletResponse;
    static equals(a: VerifyWalletResponse | PlainMessage<VerifyWalletResponse> | undefined, b: VerifyWalletResponse | PlainMessage<VerifyWalletResponse> | undefined): boolean;
}
