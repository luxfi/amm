import { MethodKind } from "@bufbuild/protobuf";
import { ClearTokenCooldownRequest, ClearTokenCooldownResponse, DeleteGlobalAlertTokenConfigsRequest, DeleteGlobalAlertTokenConfigsResponse, GetGlobalAlertTokenConfigRequest, GetGlobalAlertTokenConfigResponse, ListGlobalAlertTokenConfigsRequest, ListGlobalAlertTokenConfigsResponse, UpsertGlobalAlertTokenConfigsRequest, UpsertGlobalAlertTokenConfigsResponse } from "./api_pb.js";
/**
 * @generated from rpc uniswap.notificationservice.v1.GlobalPriceAlertConfigService.UpsertTokenConfigs
 */
export declare const upsertTokenConfigs: {
    readonly localName: "upsertTokenConfigs";
    readonly name: "UpsertTokenConfigs";
    readonly kind: MethodKind.Unary;
    readonly I: typeof UpsertGlobalAlertTokenConfigsRequest;
    readonly O: typeof UpsertGlobalAlertTokenConfigsResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.GlobalPriceAlertConfigService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.GlobalPriceAlertConfigService.DeleteTokenConfigs
 */
export declare const deleteTokenConfigs: {
    readonly localName: "deleteTokenConfigs";
    readonly name: "DeleteTokenConfigs";
    readonly kind: MethodKind.Unary;
    readonly I: typeof DeleteGlobalAlertTokenConfigsRequest;
    readonly O: typeof DeleteGlobalAlertTokenConfigsResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.GlobalPriceAlertConfigService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.GlobalPriceAlertConfigService.GetTokenConfig
 */
export declare const getTokenConfig: {
    readonly localName: "getTokenConfig";
    readonly name: "GetTokenConfig";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetGlobalAlertTokenConfigRequest;
    readonly O: typeof GetGlobalAlertTokenConfigResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.GlobalPriceAlertConfigService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.GlobalPriceAlertConfigService.ListTokenConfigs
 */
export declare const listTokenConfigs: {
    readonly localName: "listTokenConfigs";
    readonly name: "ListTokenConfigs";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ListGlobalAlertTokenConfigsRequest;
    readonly O: typeof ListGlobalAlertTokenConfigsResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.GlobalPriceAlertConfigService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.GlobalPriceAlertConfigService.ClearTokenCooldown
 */
export declare const clearTokenCooldown: {
    readonly localName: "clearTokenCooldown";
    readonly name: "ClearTokenCooldown";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ClearTokenCooldownRequest;
    readonly O: typeof ClearTokenCooldownResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.GlobalPriceAlertConfigService";
    };
};
