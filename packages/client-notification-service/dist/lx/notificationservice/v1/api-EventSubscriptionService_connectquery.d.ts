import { MethodKind } from "@bufbuild/protobuf";
import { EventGetSubscriptionsRequest, EventGetSubscriptionsResponse, EventRefreshSessionRequest, EventRefreshSessionResponse, EventSubscribeRequest, EventSubscribeResponse, EventUnsubscribeAllRequest, EventUnsubscribeAllResponse, EventUnsubscribeRequest, EventUnsubscribeResponse } from "./api_pb.js";
/**
 * @generated from rpc uniswap.notificationservice.v1.EventSubscriptionService.Subscribe
 */
export declare const subscribe: {
    readonly localName: "subscribe";
    readonly name: "Subscribe";
    readonly kind: MethodKind.Unary;
    readonly I: typeof EventSubscribeRequest;
    readonly O: typeof EventSubscribeResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.EventSubscriptionService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.EventSubscriptionService.Unsubscribe
 */
export declare const unsubscribe: {
    readonly localName: "unsubscribe";
    readonly name: "Unsubscribe";
    readonly kind: MethodKind.Unary;
    readonly I: typeof EventUnsubscribeRequest;
    readonly O: typeof EventUnsubscribeResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.EventSubscriptionService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.EventSubscriptionService.UnsubscribeAll
 */
export declare const unsubscribeAll: {
    readonly localName: "unsubscribeAll";
    readonly name: "UnsubscribeAll";
    readonly kind: MethodKind.Unary;
    readonly I: typeof EventUnsubscribeAllRequest;
    readonly O: typeof EventUnsubscribeAllResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.EventSubscriptionService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.EventSubscriptionService.GetSubscriptions
 */
export declare const getSubscriptions: {
    readonly localName: "getSubscriptions";
    readonly name: "GetSubscriptions";
    readonly kind: MethodKind.Unary;
    readonly I: typeof EventGetSubscriptionsRequest;
    readonly O: typeof EventGetSubscriptionsResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.EventSubscriptionService";
    };
};
/**
 * @generated from rpc uniswap.notificationservice.v1.EventSubscriptionService.RefreshSession
 */
export declare const refreshSession: {
    readonly localName: "refreshSession";
    readonly name: "RefreshSession";
    readonly kind: MethodKind.Unary;
    readonly I: typeof EventRefreshSessionRequest;
    readonly O: typeof EventRefreshSessionResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.EventSubscriptionService";
    };
};
