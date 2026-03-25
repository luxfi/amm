import { ClaimTokensRequest, ClaimTokensResponse, ExitBidAndClaimTokensRequest, ExitBidAndClaimTokensResponse, ExitBidPositionRequest, ExitBidPositionResponse, SubmitBidRequest, SubmitBidResponse, TokenCountAllocatedToLpForAuctionRequest, TokenCountAllocatedToLpForAuctionResponse, VerifyWalletRequest, VerifyWalletResponse } from "./auction_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service uniswap.liquidity.v1.AuctionService
 */
export declare const AuctionService: {
    readonly typeName: "uniswap.liquidity.v1.AuctionService";
    readonly methods: {
        /**
         * @generated from rpc uniswap.liquidity.v1.AuctionService.SubmitBid
         */
        readonly submitBid: {
            readonly name: "SubmitBid";
            readonly I: typeof SubmitBidRequest;
            readonly O: typeof SubmitBidResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.AuctionService.ExitBidPosition
         */
        readonly exitBidPosition: {
            readonly name: "ExitBidPosition";
            readonly I: typeof ExitBidPositionRequest;
            readonly O: typeof ExitBidPositionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.AuctionService.ClaimTokens
         */
        readonly claimTokens: {
            readonly name: "ClaimTokens";
            readonly I: typeof ClaimTokensRequest;
            readonly O: typeof ClaimTokensResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.AuctionService.ExitBidAndClaimTokens
         */
        readonly exitBidAndClaimTokens: {
            readonly name: "ExitBidAndClaimTokens";
            readonly I: typeof ExitBidAndClaimTokensRequest;
            readonly O: typeof ExitBidAndClaimTokensResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.AuctionService.TokenCountAllocatedToLpForAuction
         */
        readonly tokenCountAllocatedToLpForAuction: {
            readonly name: "TokenCountAllocatedToLpForAuction";
            readonly I: typeof TokenCountAllocatedToLpForAuctionRequest;
            readonly O: typeof TokenCountAllocatedToLpForAuctionResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.liquidity.v1.AuctionService.VerifyWallet
         */
        readonly verifyWallet: {
            readonly name: "VerifyWallet";
            readonly I: typeof VerifyWalletRequest;
            readonly O: typeof VerifyWalletResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
    };
};
