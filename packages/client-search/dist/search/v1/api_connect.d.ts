import { DeletePoolsRequest, DeletePoolsResponse, IndexPoolsRequest, IndexPoolsResponse, SearchTokensRequest, SearchTokensResponse } from "./api_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service Search.v1.SearchService
 */
export declare const SearchService: {
    readonly typeName: "Search.v1.SearchService";
    readonly methods: {
        /**
         * @generated from rpc Search.v1.SearchService.SearchTokens
         */
        readonly searchTokens: {
            readonly name: "SearchTokens";
            readonly I: typeof SearchTokensRequest;
            readonly O: typeof SearchTokensResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc Search.v1.SearchService.IndexPools
         */
        readonly indexPools: {
            readonly name: "IndexPools";
            readonly I: typeof IndexPoolsRequest;
            readonly O: typeof IndexPoolsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc Search.v1.SearchService.DeletePools
         */
        readonly deletePools: {
            readonly name: "DeletePools";
            readonly I: typeof DeletePoolsRequest;
            readonly O: typeof DeletePoolsResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
