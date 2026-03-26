import { EstimateGasFeeRequest, EstimateGasFeeResponse, UniRpcRequest, UniRpcResponse } from "./service_pb.js";
import { MethodIdempotency, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service uniswap.unirpc.v2.UniRpcService
 */
export declare const UniRpcService: {
    readonly typeName: "uniswap.unirpc.v2.UniRpcService";
    readonly methods: {
        /**
         * @generated from rpc uniswap.unirpc.v2.UniRpcService.EstimateGasFee
         */
        readonly estimateGasFee: {
            readonly name: "EstimateGasFee";
            readonly I: typeof EstimateGasFeeRequest;
            readonly O: typeof EstimateGasFeeResponse;
            readonly kind: MethodKind.Unary;
            readonly idempotency: MethodIdempotency.NoSideEffects;
        };
        /**
         * @generated from rpc uniswap.unirpc.v2.UniRpcService.UniRpcCall
         */
        readonly uniRpcCall: {
            readonly name: "UniRpcCall";
            readonly I: typeof UniRpcRequest;
            readonly O: typeof UniRpcResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
