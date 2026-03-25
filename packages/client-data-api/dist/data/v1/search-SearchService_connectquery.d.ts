import { MethodKind } from "@bufbuild/protobuf";
import { SearchTokensRequest, SearchTokensResponse } from "./search_pb.js";
/**
 * @generated from rpc data.v1.SearchService.SearchTokens
 */
export declare const searchTokens: {
    readonly localName: "searchTokens";
    readonly name: "SearchTokens";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SearchTokensRequest;
    readonly O: typeof SearchTokensResponse;
    readonly service: {
        readonly typeName: "data.v1.SearchService";
    };
};
