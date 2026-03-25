import { GetAuctionActivityRequest, GetAuctionActivityResponse, GetAuctionRequest, GetAuctionResponse, GetBidsByWalletRequest, GetBidsByWalletResponse, GetBidsRequest, GetBidsResponse, GetCheckpointsForBidRequest, GetCheckpointsForBidResponse, GetCheckpointsRequest, GetCheckpointsResponse, GetClearingPriceHistoryRequest, GetClearingPriceHistoryResponse, GetLatestCheckpointRequest, GetLatestCheckpointResponse, ListTopAuctionsRequest, ListTopAuctionsResponse } from "./auction_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service data.v1.AuctionService
 */
export declare const AuctionService: {
    readonly typeName: "data.v1.AuctionService";
    readonly methods: {
        /**
         * @generated from rpc data.v1.AuctionService.GetBidsByWallet
         */
        readonly getBidsByWallet: {
            readonly name: "GetBidsByWallet";
            readonly I: typeof GetBidsByWalletRequest;
            readonly O: typeof GetBidsByWalletResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.AuctionService.GetBids
         */
        readonly getBids: {
            readonly name: "GetBids";
            readonly I: typeof GetBidsRequest;
            readonly O: typeof GetBidsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.AuctionService.GetAuction
         */
        readonly getAuction: {
            readonly name: "GetAuction";
            readonly I: typeof GetAuctionRequest;
            readonly O: typeof GetAuctionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.AuctionService.GetLatestCheckpoint
         */
        readonly getLatestCheckpoint: {
            readonly name: "GetLatestCheckpoint";
            readonly I: typeof GetLatestCheckpointRequest;
            readonly O: typeof GetLatestCheckpointResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.AuctionService.GetClearingPriceHistory
         */
        readonly getClearingPriceHistory: {
            readonly name: "GetClearingPriceHistory";
            readonly I: typeof GetClearingPriceHistoryRequest;
            readonly O: typeof GetClearingPriceHistoryResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.AuctionService.GetAuctionActivity
         */
        readonly getAuctionActivity: {
            readonly name: "GetAuctionActivity";
            readonly I: typeof GetAuctionActivityRequest;
            readonly O: typeof GetAuctionActivityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.AuctionService.GetCheckpoints
         */
        readonly getCheckpoints: {
            readonly name: "GetCheckpoints";
            readonly I: typeof GetCheckpointsRequest;
            readonly O: typeof GetCheckpointsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.AuctionService.ListTopAuctions
         */
        readonly listTopAuctions: {
            readonly name: "ListTopAuctions";
            readonly I: typeof ListTopAuctionsRequest;
            readonly O: typeof ListTopAuctionsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.AuctionService.GetCheckpointsForBid
         */
        readonly getCheckpointsForBid: {
            readonly name: "GetCheckpointsForBid";
            readonly I: typeof GetCheckpointsForBidRequest;
            readonly O: typeof GetCheckpointsForBidResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
