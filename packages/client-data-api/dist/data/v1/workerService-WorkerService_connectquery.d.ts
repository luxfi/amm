import { MethodKind } from "@bufbuild/protobuf";
import { CheckSubgraphHealthRequest, CheckSubgraphHealthResponse, IngestBlockaidMetadataRequest, IngestBlockaidMetadataResponse, RefreshProtocolStatsRequest, RefreshProtocolStatsResponse } from "./workerService_pb.js";
/**
 * @generated from rpc data.v1.WorkerService.RefreshProtocolStats
 */
export declare const refreshProtocolStats: {
    readonly localName: "refreshProtocolStats";
    readonly name: "RefreshProtocolStats";
    readonly kind: MethodKind.Unary;
    readonly I: typeof RefreshProtocolStatsRequest;
    readonly O: typeof RefreshProtocolStatsResponse;
    readonly service: {
        readonly typeName: "data.v1.WorkerService";
    };
};
/**
 * @generated from rpc data.v1.WorkerService.CheckSubgraphHealth
 */
export declare const checkSubgraphHealth: {
    readonly localName: "checkSubgraphHealth";
    readonly name: "CheckSubgraphHealth";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CheckSubgraphHealthRequest;
    readonly O: typeof CheckSubgraphHealthResponse;
    readonly service: {
        readonly typeName: "data.v1.WorkerService";
    };
};
/**
 * @generated from rpc data.v1.WorkerService.IngestBlockaidMetadata
 */
export declare const ingestBlockaidMetadata: {
    readonly localName: "ingestBlockaidMetadata";
    readonly name: "IngestBlockaidMetadata";
    readonly kind: MethodKind.Unary;
    readonly I: typeof IngestBlockaidMetadataRequest;
    readonly O: typeof IngestBlockaidMetadataResponse;
    readonly service: {
        readonly typeName: "data.v1.WorkerService";
    };
};
