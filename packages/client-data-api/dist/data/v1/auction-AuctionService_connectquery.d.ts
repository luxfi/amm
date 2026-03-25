import { MethodKind } from "@bufbuild/protobuf";
import { GetAuctionActivityRequest, GetAuctionActivityResponse, GetAuctionRequest, GetAuctionResponse, GetBidsByWalletRequest, GetBidsByWalletResponse, GetBidsRequest, GetBidsResponse, GetCheckpointsForBidRequest, GetCheckpointsForBidResponse, GetCheckpointsRequest, GetCheckpointsResponse, GetClearingPriceHistoryRequest, GetClearingPriceHistoryResponse, GetLatestCheckpointRequest, GetLatestCheckpointResponse, ListTopAuctionsRequest, ListTopAuctionsResponse } from "./auction_pb.js";
/**
 * @generated from rpc data.v1.AuctionService.GetBidsByWallet
 */
export declare const getBidsByWallet: {
    readonly localName: "getBidsByWallet";
    readonly name: "GetBidsByWallet";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetBidsByWalletRequest;
    readonly O: typeof GetBidsByWalletResponse;
    readonly service: {
        readonly typeName: "data.v1.AuctionService";
    };
};
/**
 * @generated from rpc data.v1.AuctionService.GetBids
 */
export declare const getBids: {
    readonly localName: "getBids";
    readonly name: "GetBids";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetBidsRequest;
    readonly O: typeof GetBidsResponse;
    readonly service: {
        readonly typeName: "data.v1.AuctionService";
    };
};
/**
 * @generated from rpc data.v1.AuctionService.GetAuction
 */
export declare const getAuction: {
    readonly localName: "getAuction";
    readonly name: "GetAuction";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetAuctionRequest;
    readonly O: typeof GetAuctionResponse;
    readonly service: {
        readonly typeName: "data.v1.AuctionService";
    };
};
/**
 * @generated from rpc data.v1.AuctionService.GetLatestCheckpoint
 */
export declare const getLatestCheckpoint: {
    readonly localName: "getLatestCheckpoint";
    readonly name: "GetLatestCheckpoint";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetLatestCheckpointRequest;
    readonly O: typeof GetLatestCheckpointResponse;
    readonly service: {
        readonly typeName: "data.v1.AuctionService";
    };
};
/**
 * @generated from rpc data.v1.AuctionService.GetClearingPriceHistory
 */
export declare const getClearingPriceHistory: {
    readonly localName: "getClearingPriceHistory";
    readonly name: "GetClearingPriceHistory";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetClearingPriceHistoryRequest;
    readonly O: typeof GetClearingPriceHistoryResponse;
    readonly service: {
        readonly typeName: "data.v1.AuctionService";
    };
};
/**
 * @generated from rpc data.v1.AuctionService.GetAuctionActivity
 */
export declare const getAuctionActivity: {
    readonly localName: "getAuctionActivity";
    readonly name: "GetAuctionActivity";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetAuctionActivityRequest;
    readonly O: typeof GetAuctionActivityResponse;
    readonly service: {
        readonly typeName: "data.v1.AuctionService";
    };
};
/**
 * @generated from rpc data.v1.AuctionService.GetCheckpoints
 */
export declare const getCheckpoints: {
    readonly localName: "getCheckpoints";
    readonly name: "GetCheckpoints";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetCheckpointsRequest;
    readonly O: typeof GetCheckpointsResponse;
    readonly service: {
        readonly typeName: "data.v1.AuctionService";
    };
};
/**
 * @generated from rpc data.v1.AuctionService.ListTopAuctions
 */
export declare const listTopAuctions: {
    readonly localName: "listTopAuctions";
    readonly name: "ListTopAuctions";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ListTopAuctionsRequest;
    readonly O: typeof ListTopAuctionsResponse;
    readonly service: {
        readonly typeName: "data.v1.AuctionService";
    };
};
/**
 * @generated from rpc data.v1.AuctionService.GetCheckpointsForBid
 */
export declare const getCheckpointsForBid: {
    readonly localName: "getCheckpointsForBid";
    readonly name: "GetCheckpointsForBid";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetCheckpointsForBidRequest;
    readonly O: typeof GetCheckpointsForBidResponse;
    readonly service: {
        readonly typeName: "data.v1.AuctionService";
    };
};
