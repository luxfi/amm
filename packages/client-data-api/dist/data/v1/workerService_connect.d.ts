import { CheckSubgraphHealthRequest, CheckSubgraphHealthResponse, IngestBlockaidMetadataRequest, IngestBlockaidMetadataResponse, RefreshProtocolStatsRequest, RefreshProtocolStatsResponse } from "./workerService_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service data.v1.WorkerService
 */
export declare const WorkerService: {
    readonly typeName: "data.v1.WorkerService";
    readonly methods: {
        /**
         * @generated from rpc data.v1.WorkerService.RefreshProtocolStats
         */
        readonly refreshProtocolStats: {
            readonly name: "RefreshProtocolStats";
            readonly I: typeof RefreshProtocolStatsRequest;
            readonly O: typeof RefreshProtocolStatsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.WorkerService.CheckSubgraphHealth
         */
        readonly checkSubgraphHealth: {
            readonly name: "CheckSubgraphHealth";
            readonly I: typeof CheckSubgraphHealthRequest;
            readonly O: typeof CheckSubgraphHealthResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc data.v1.WorkerService.IngestBlockaidMetadata
         */
        readonly ingestBlockaidMetadata: {
            readonly name: "IngestBlockaidMetadata";
            readonly I: typeof IngestBlockaidMetadataRequest;
            readonly O: typeof IngestBlockaidMetadataResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
