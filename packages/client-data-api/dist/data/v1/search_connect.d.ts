import { SearchTokensRequest, SearchTokensResponse } from "./search_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service data.v1.SearchService
 */
export declare const SearchService: {
    readonly typeName: "data.v1.SearchService";
    readonly methods: {
        /**
         * @generated from rpc data.v1.SearchService.SearchTokens
         */
        readonly searchTokens: {
            readonly name: "SearchTokens";
            readonly I: typeof SearchTokensRequest;
            readonly O: typeof SearchTokensResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
