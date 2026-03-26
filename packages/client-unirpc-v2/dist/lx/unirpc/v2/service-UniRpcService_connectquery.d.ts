import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
import { EstimateGasFeeRequest, EstimateGasFeeResponse, UniRpcRequest, UniRpcResponse } from "./service_pb.js";
/**
 * @generated from rpc uniswap.unirpc.v2.UniRpcService.EstimateGasFee
 */
export declare const estimateGasFee: {
    readonly localName: "estimateGasFee";
    readonly name: "EstimateGasFee";
    readonly kind: MethodKind.Unary;
    readonly I: typeof EstimateGasFeeRequest;
    readonly O: typeof EstimateGasFeeResponse;
    readonly idempotency: MethodIdempotency.NoSideEffects;
    readonly service: {
        readonly typeName: "uniswap.unirpc.v2.UniRpcService";
    };
};
/**
 * @generated from rpc uniswap.unirpc.v2.UniRpcService.UniRpcCall
 */
export declare const uniRpcCall: {
    readonly localName: "uniRpcCall";
    readonly name: "UniRpcCall";
    readonly kind: MethodKind.Unary;
    readonly I: typeof UniRpcRequest;
    readonly O: typeof UniRpcResponse;
    readonly service: {
        readonly typeName: "uniswap.unirpc.v2.UniRpcService";
    };
};
