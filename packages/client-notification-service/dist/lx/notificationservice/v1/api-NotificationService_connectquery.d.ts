import { MethodKind } from "@bufbuild/protobuf";
import { AckNotificationRequest, AckNotificationResponse, DeleteNotificationRequest, DeleteNotificationResponse, GetNotificationsRequest, GetNotificationsResponse, ListGlobalNotificationsRequest, ListGlobalNotificationsResponse, SendDirectMessageRequest, SendDirectMessageResponse, SendNotificationsRequest, SendNotificationsResponse } from "./api_pb.js";
/**
 * @generated from rpc uniswap.notificationservice.v1.NotificationService.SendNotifications
 */
export declare const sendNotifications: {
    readonly localName: "sendNotifications";
    readonly name: "SendNotifications";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SendNotificationsRequest;
    readonly O: typeof SendNotificationsResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.NotificationService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.NotificationService.GetNotifications
 */
export declare const getNotifications: {
    readonly localName: "getNotifications";
    readonly name: "GetNotifications";
    readonly kind: MethodKind.Unary;
    readonly I: typeof GetNotificationsRequest;
    readonly O: typeof GetNotificationsResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.NotificationService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.NotificationService.AckNotifications
 */
export declare const ackNotifications: {
    readonly localName: "ackNotifications";
    readonly name: "AckNotifications";
    readonly kind: MethodKind.Unary;
    readonly I: typeof AckNotificationRequest;
    readonly O: typeof AckNotificationResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.NotificationService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.NotificationService.DeleteNotification
 */
export declare const deleteNotification: {
    readonly localName: "deleteNotification";
    readonly name: "DeleteNotification";
    readonly kind: MethodKind.Unary;
    readonly I: typeof DeleteNotificationRequest;
    readonly O: typeof DeleteNotificationResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.NotificationService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.NotificationService.ListGlobalNotifications
 */
export declare const listGlobalNotifications: {
    readonly localName: "listGlobalNotifications";
    readonly name: "ListGlobalNotifications";
    readonly kind: MethodKind.Unary;
    readonly I: typeof ListGlobalNotificationsRequest;
    readonly O: typeof ListGlobalNotificationsResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.NotificationService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.NotificationService.SendDirectMessages
 */
export declare const sendDirectMessages: {
    readonly localName: "sendDirectMessages";
    readonly name: "SendDirectMessages";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SendDirectMessageRequest;
    readonly O: typeof SendDirectMessageResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.NotificationService";
    };
};
