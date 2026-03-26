import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
import { ClaimTokensRequest, ClaimTokensResponse, ExitBidAndClaimTokensRequest, ExitBidAndClaimTokensResponse, ExitBidPositionRequest, ExitBidPositionResponse, SubmitBidRequest, SubmitBidResponse, TokenCountAllocatedToLpForAuctionRequest, TokenCountAllocatedToLpForAuctionResponse, VerifyWalletRequest, VerifyWalletResponse } from "./auction_pb.js";
/**
 * @generated from rpc uniswap.liquidity.v1.AuctionService.SubmitBid
 */
export declare const submitBid: {
    readonly localName: "submitBid";
    readonly name: "SubmitBid";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SubmitBidRequest;
    readonly O: typeof SubmitBidResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.AuctionService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.AuctionService.ExitBidPosition
 */
export declare const exitBidPosition: {
    readonly localName: "exitBidPosition";
    readonly name: "ExitBidPosition";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ExitBidPositionRequest;
    readonly O: typeof ExitBidPositionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.AuctionService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.AuctionService.ClaimTokens
 */
export declare const claimTokens: {
    readonly localName: "claimTokens";
    readonly name: "ClaimTokens";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ClaimTokensRequest;
    readonly O: typeof ClaimTokensResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.AuctionService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.AuctionService.ExitBidAndClaimTokens
 */
export declare const exitBidAndClaimTokens: {
    readonly localName: "exitBidAndClaimTokens";
    readonly name: "ExitBidAndClaimTokens";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ExitBidAndClaimTokensRequest;
    readonly O: typeof ExitBidAndClaimTokensResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.AuctionService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.AuctionService.TokenCountAllocatedToLpForAuction
 */
export declare const tokenCountAllocatedToLpForAuction: {
    readonly localName: "tokenCountAllocatedToLpForAuction";
    readonly name: "TokenCountAllocatedToLpForAuction";
    readonly kind: MethodKind.Unary;
    readonly I: typeof TokenCountAllocatedToLpForAuctionRequest;
    readonly O: typeof TokenCountAllocatedToLpForAuctionResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.AuctionService";
    };
};
/**
 * @generated from rpc uniswap.liquidity.v1.AuctionService.VerifyWallet
 */
export declare const verifyWallet: {
    readonly localName: "verifyWallet";
    readonly name: "VerifyWallet";
    readonly kind: MethodKind.Unary;
    readonly I: typeof VerifyWalletRequest;
    readonly O: typeof VerifyWalletResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.liquidity.v1.AuctionService";
    };
};
