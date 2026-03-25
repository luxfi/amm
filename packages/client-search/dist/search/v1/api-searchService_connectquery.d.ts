import { MethodKind } from "@bufbuild/protobuf";
import { DeletePoolsRequest, DeletePoolsResponse, IndexPoolsRequest, IndexPoolsResponse, SearchTokensRequest, SearchTokensResponse } from "./api_pb.js";
/**
 * @generated from rpc Search.v1.SearchService.SearchTokens
 */
export declare const searchTokens: {
    readonly localName: "searchTokens";
    readonly name: "SearchTokens";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SearchTokensRequest;
    readonly O: typeof SearchTokensResponse;
    readonly service: {
        readonly typeName: "Search.v1.SearchService";
    };
};
/**
 * @generated from rpc Search.v1.SearchService.IndexPools
 */
export declare const indexPools: {
    readonly localName: "indexPools";
    readonly name: "IndexPools";
    readonly kind: MethodKind.Unary;
    readonly I: typeof IndexPoolsRequest;
    readonly O: typeof IndexPoolsResponse;
    readonly service: {
        readonly typeName: "Search.v1.SearchService";
    };
};
/**
 * @generated from rpc Search.v1.SearchService.DeletePools
 */
export declare const deletePools: {
    readonly localName: "deletePools";
    readonly name: "DeletePools";
    readonly kind: MethodKind.Unary;
    readonly I: typeof DeletePoolsRequest;
    readonly O: typeof DeletePoolsResponse;
    readonly service: {
        readonly typeName: "Search.v1.SearchService";
    };
};
