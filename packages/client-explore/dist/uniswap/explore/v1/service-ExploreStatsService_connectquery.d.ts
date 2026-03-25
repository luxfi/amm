import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
import { ExploreStatsRequest, ExploreStatsResponse, ProtocolStatsRequest, ProtocolStatsResponse, TokenRankingsRequest, TokenRankingsResponse } from "./service_pb.js";
/**
 * @generated from rpc uniswap.explore.v1.ExploreStatsService.ExploreStats
 */
export declare const exploreStats: {
    readonly localName: "exploreStats";
    readonly name: "ExploreStats";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ExploreStatsRequest;
    readonly O: typeof ExploreStatsResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.explore.v1.ExploreStatsService";
    };
};
/**
 * @generated from rpc uniswap.explore.v1.ExploreStatsService.ProtocolStats
 */
export declare const protocolStats: {
    readonly localName: "protocolStats";
    readonly name: "ProtocolStats";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ProtocolStatsRequest;
    readonly O: typeof ProtocolStatsResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.explore.v1.ExploreStatsService";
    };
};
/**
 * @generated from rpc uniswap.explore.v1.ExploreStatsService.TokenRankings
 */
export declare const tokenRankings: {
    readonly localName: "tokenRankings";
    readonly name: "TokenRankings";
    readonly kind: MethodKind.Unary;
    readonly I: typeof TokenRankingsRequest;
    readonly O: typeof TokenRankingsResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.explore.v1.ExploreStatsService";
    };
};
