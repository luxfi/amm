import { MethodKind } from "@bufbuild/protobuf";
import { CreateApiKeyRequest, CreateApiKeyResponse, DeleteApiKeyRequest, DeleteApiKeyResponse, InternalCreateApiKeyRequest, InternalCreateApiKeyResponse, InternalModifyApiKeyRequest, InternalModifyApiKeyResponse, IntrospectRequest, IntrospectResponse, ListApiKeyRequest, ListApiKeyResponse, ModifyApiKeyRequest, ModifyApiKeyResponse } from "./apiKeyService_pb.js";
/**
 * @generated from rpc uniswap.platformservice.v1.ApiKeyService.Introspect
 */
export declare const introspect: {
    readonly localName: "introspect";
    readonly name: "Introspect";
    readonly kind: MethodKind.Unary;
    readonly I: typeof IntrospectRequest;
    readonly O: typeof IntrospectResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.ApiKeyService";
    };
};
/**
 * @generated from rpc uniswap.platformservice.v1.ApiKeyService.CreateApiKey
 */
export declare const createApiKey: {
    readonly localName: "createApiKey";
    readonly name: "CreateApiKey";
    readonly kind: MethodKind.Unary;
    readonly I: typeof CreateApiKeyRequest;
    readonly O: typeof CreateApiKeyResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.ApiKeyService";
    };
};
/**
 * @generated from rpc uniswap.platformservice.v1.ApiKeyService.InternalCreateApiKey
 */
export declare const internalCreateApiKey: {
    readonly localName: "internalCreateApiKey";
    readonly name: "InternalCreateApiKey";
    readonly kind: MethodKind.Unary;
    readonly I: typeof InternalCreateApiKeyRequest;
    readonly O: typeof InternalCreateApiKeyResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.ApiKeyService";
    };
};
/**
 * @generated from rpc uniswap.platformservice.v1.ApiKeyService.ModifyApiKey
 */
export declare const modifyApiKey: {
    readonly localName: "modifyApiKey";
    readonly name: "ModifyApiKey";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ModifyApiKeyRequest;
    readonly O: typeof ModifyApiKeyResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.ApiKeyService";
    };
};
/**
 * @generated from rpc uniswap.platformservice.v1.ApiKeyService.DeleteApiKey
 */
export declare const deleteApiKey: {
    readonly localName: "deleteApiKey";
    readonly name: "DeleteApiKey";
    readonly kind: MethodKind.Unary;
    readonly I: typeof DeleteApiKeyRequest;
    readonly O: typeof DeleteApiKeyResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.ApiKeyService";
    };
};
/**
 * @generated from rpc uniswap.platformservice.v1.ApiKeyService.ListApiKeys
 */
export declare const listApiKeys: {
    readonly localName: "listApiKeys";
    readonly name: "ListApiKeys";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ListApiKeyRequest;
    readonly O: typeof ListApiKeyResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.ApiKeyService";
    };
};
/**
 * @generated from rpc uniswap.platformservice.v1.ApiKeyService.InternalModifyApiKey
 */
export declare const internalModifyApiKey: {
    readonly localName: "internalModifyApiKey";
    readonly name: "InternalModifyApiKey";
    readonly kind: MethodKind.Unary;
    readonly I: typeof InternalModifyApiKeyRequest;
    readonly O: typeof InternalModifyApiKeyResponse;
    readonly service: {
        readonly typeName: "uniswap.platformservice.v1.ApiKeyService";
    };
};
