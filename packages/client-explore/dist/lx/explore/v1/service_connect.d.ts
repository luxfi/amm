import { ExploreStatsRequest, ExploreStatsResponse, ProtocolStatsRequest, ProtocolStatsResponse, TokenRankingsRequest, TokenRankingsResponse } from "./service_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service uniswap.explore.v1.ExploreStatsService
 */
export declare const ExploreStatsService: {
    readonly typeName: "uniswap.explore.v1.ExploreStatsService";
    readonly methods: {
        /**
         * @generated from rpc uniswap.explore.v1.ExploreStatsService.ExploreStats
         */
        readonly exploreStats: {
            readonly name: "ExploreStats";
            readonly I: typeof ExploreStatsRequest;
            readonly O: typeof ExploreStatsResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.explore.v1.ExploreStatsService.ProtocolStats
         */
        readonly protocolStats: {
            readonly name: "ProtocolStats";
            readonly I: typeof ProtocolStatsRequest;
            readonly O: typeof ProtocolStatsResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.explore.v1.ExploreStatsService.TokenRankings
         */
        readonly tokenRankings: {
            readonly name: "TokenRankings";
            readonly I: typeof TokenRankingsRequest;
            readonly O: typeof TokenRankingsResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
    };
};
