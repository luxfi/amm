import { AckNotificationRequest, AckNotificationResponse, ClearTokenCooldownRequest, ClearTokenCooldownResponse, DeleteGlobalAlertTokenConfigsRequest, DeleteGlobalAlertTokenConfigsResponse, DeleteNotificationRequest, DeleteNotificationResponse, EventGetSubscriptionsRequest, EventGetSubscriptionsResponse, EventRefreshSessionRequest, EventRefreshSessionResponse, EventSubscribeRequest, EventSubscribeResponse, EventUnsubscribeAllRequest, EventUnsubscribeAllResponse, EventUnsubscribeRequest, EventUnsubscribeResponse, GetGlobalAlertTokenConfigRequest, GetGlobalAlertTokenConfigResponse, GetNotificationsRequest, GetNotificationsResponse, ListGlobalAlertTokenConfigsRequest, ListGlobalAlertTokenConfigsResponse, ListGlobalNotificationsRequest, ListGlobalNotificationsResponse, SendDirectMessageRequest, SendDirectMessageResponse, SendNotificationEventsRequest, SendNotificationEventsResponse, SendNotificationsRequest, SendNotificationsResponse, UpsertGlobalAlertTokenConfigsRequest, UpsertGlobalAlertTokenConfigsResponse } from "./api_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * Core notification management service
 *
 * @generated from service uniswap.notificationservice.v1.NotificationService
 */
export declare const NotificationService: {
    readonly typeName: "uniswap.notificationservice.v1.NotificationService";
    readonly methods: {
        /**
         * @generated from rpc uniswap.notificationservice.v1.NotificationService.SendNotifications
         */
        readonly sendNotifications: {
            readonly name: "SendNotifications";
            readonly I: typeof SendNotificationsRequest;
            readonly O: typeof SendNotificationsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.NotificationService.GetNotifications
         */
        readonly getNotifications: {
            readonly name: "GetNotifications";
            readonly I: typeof GetNotificationsRequest;
            readonly O: typeof GetNotificationsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.NotificationService.AckNotifications
         */
        readonly ackNotifications: {
            readonly name: "AckNotifications";
            readonly I: typeof AckNotificationRequest;
            readonly O: typeof AckNotificationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.NotificationService.DeleteNotification
         */
        readonly deleteNotification: {
            readonly name: "DeleteNotification";
            readonly I: typeof DeleteNotificationRequest;
            readonly O: typeof DeleteNotificationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.NotificationService.ListGlobalNotifications
         */
        readonly listGlobalNotifications: {
            readonly name: "ListGlobalNotifications";
            readonly I: typeof ListGlobalNotificationsRequest;
            readonly O: typeof ListGlobalNotificationsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.NotificationService.SendDirectMessages
         */
        readonly sendDirectMessages: {
            readonly name: "SendDirectMessages";
            readonly I: typeof SendDirectMessageRequest;
            readonly O: typeof SendDirectMessageResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
/**
 * @generated from service uniswap.notificationservice.v1.NotificationEventsService
 */
export declare const NotificationEventsService: {
    readonly typeName: "uniswap.notificationservice.v1.NotificationEventsService";
    readonly methods: {
        /**
         * @generated from rpc uniswap.notificationservice.v1.NotificationEventsService.SendNotificationEvents
         */
        readonly sendNotificationEvents: {
            readonly name: "SendNotificationEvents";
            readonly I: typeof SendNotificationEventsRequest;
            readonly O: typeof SendNotificationEventsResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
/**
 * @generated from service uniswap.notificationservice.v1.EventSubscriptionService
 */
export declare const EventSubscriptionService: {
    readonly typeName: "uniswap.notificationservice.v1.EventSubscriptionService";
    readonly methods: {
        /**
         * @generated from rpc uniswap.notificationservice.v1.EventSubscriptionService.Subscribe
         */
        readonly subscribe: {
            readonly name: "Subscribe";
            readonly I: typeof EventSubscribeRequest;
            readonly O: typeof EventSubscribeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.EventSubscriptionService.Unsubscribe
         */
        readonly unsubscribe: {
            readonly name: "Unsubscribe";
            readonly I: typeof EventUnsubscribeRequest;
            readonly O: typeof EventUnsubscribeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.EventSubscriptionService.UnsubscribeAll
         */
        readonly unsubscribeAll: {
            readonly name: "UnsubscribeAll";
            readonly I: typeof EventUnsubscribeAllRequest;
            readonly O: typeof EventUnsubscribeAllResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.EventSubscriptionService.GetSubscriptions
         */
        readonly getSubscriptions: {
            readonly name: "GetSubscriptions";
            readonly I: typeof EventGetSubscriptionsRequest;
            readonly O: typeof EventGetSubscriptionsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.EventSubscriptionService.RefreshSession
         */
        readonly refreshSession: {
            readonly name: "RefreshSession";
            readonly I: typeof EventRefreshSessionRequest;
            readonly O: typeof EventRefreshSessionResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
/**
 * Global Price Alert Config Service - CRUD for system-wide price alert configuration
 *
 * @generated from service uniswap.notificationservice.v1.GlobalPriceAlertConfigService
 */
export declare const GlobalPriceAlertConfigService: {
    readonly typeName: "uniswap.notificationservice.v1.GlobalPriceAlertConfigService";
    readonly methods: {
        /**
         * @generated from rpc uniswap.notificationservice.v1.GlobalPriceAlertConfigService.UpsertTokenConfigs
         */
        readonly upsertTokenConfigs: {
            readonly name: "UpsertTokenConfigs";
            readonly I: typeof UpsertGlobalAlertTokenConfigsRequest;
            readonly O: typeof UpsertGlobalAlertTokenConfigsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.GlobalPriceAlertConfigService.DeleteTokenConfigs
         */
        readonly deleteTokenConfigs: {
            readonly name: "DeleteTokenConfigs";
            readonly I: typeof DeleteGlobalAlertTokenConfigsRequest;
            readonly O: typeof DeleteGlobalAlertTokenConfigsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.GlobalPriceAlertConfigService.GetTokenConfig
         */
        readonly getTokenConfig: {
            readonly name: "GetTokenConfig";
            readonly I: typeof GetGlobalAlertTokenConfigRequest;
            readonly O: typeof GetGlobalAlertTokenConfigResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.GlobalPriceAlertConfigService.ListTokenConfigs
         */
        readonly listTokenConfigs: {
            readonly name: "ListTokenConfigs";
            readonly I: typeof ListGlobalAlertTokenConfigsRequest;
            readonly O: typeof ListGlobalAlertTokenConfigsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc uniswap.notificationservice.v1.GlobalPriceAlertConfigService.ClearTokenCooldown
         */
        readonly clearTokenCooldown: {
            readonly name: "ClearTokenCooldown";
            readonly I: typeof ClearTokenCooldownRequest;
            readonly O: typeof ClearTokenCooldownResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
