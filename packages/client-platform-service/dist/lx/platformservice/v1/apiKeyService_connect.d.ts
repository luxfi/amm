import { CreateApiKeyRequest, CreateApiKeyResponse, DeleteApiKeyRequest, DeleteApiKeyResponse, InternalCreateApiKeyRequest, InternalCreateApiKeyResponse, InternalModifyApiKeyRequest, InternalModifyApiKeyResponse, IntrospectRequest, IntrospectResponse, ListApiKeyRequest, ListApiKeyResponse, ModifyApiKeyRequest, ModifyApiKeyResponse } from "./apiKeyService_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * Service definition
 *
 * @generated from service uniswap.platformservice.v1.ApiKeyService
 */
export declare const ApiKeyService: {
    readonly typeName: "uniswap.platformservice.v1.ApiKeyService";
    readonly methods: {
        /**
         * @generated from rpc uniswap.platformservice.v1.ApiKeyService.Introspect
         */
        readonly introspect: {
            readonly name: "Introspect";
            readonly I: typeof IntrospectRequest;
            readonly O: typeof IntrospectResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.platformservice.v1.ApiKeyService.CreateApiKey
         */
        readonly createApiKey: {
            readonly name: "CreateApiKey";
            readonly I: typeof CreateApiKeyRequest;
            readonly O: typeof CreateApiKeyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.platformservice.v1.ApiKeyService.InternalCreateApiKey
         */
        readonly internalCreateApiKey: {
            readonly name: "InternalCreateApiKey";
            readonly I: typeof InternalCreateApiKeyRequest;
            readonly O: typeof InternalCreateApiKeyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.platformservice.v1.ApiKeyService.ModifyApiKey
         */
        readonly modifyApiKey: {
            readonly name: "ModifyApiKey";
            readonly I: typeof ModifyApiKeyRequest;
            readonly O: typeof ModifyApiKeyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.platformservice.v1.ApiKeyService.DeleteApiKey
         */
        readonly deleteApiKey: {
            readonly name: "DeleteApiKey";
            readonly I: typeof DeleteApiKeyRequest;
            readonly O: typeof DeleteApiKeyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.platformservice.v1.ApiKeyService.ListApiKeys
         */
        readonly listApiKeys: {
            readonly name: "ListApiKeys";
            readonly I: typeof ListApiKeyRequest;
            readonly O: typeof ListApiKeyResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.platformservice.v1.ApiKeyService.InternalModifyApiKey
         */
        readonly internalModifyApiKey: {
            readonly name: "InternalModifyApiKey";
            readonly I: typeof InternalModifyApiKeyRequest;
            readonly O: typeof InternalModifyApiKeyResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
