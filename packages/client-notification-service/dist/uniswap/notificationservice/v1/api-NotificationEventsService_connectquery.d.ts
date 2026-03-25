import { MethodKind } from "@bufbuild/protobuf";
import { SendNotificationEventsRequest, SendNotificationEventsResponse } from "./api_pb.js";
/**
 * @generated from rpc uniswap.notificationservice.v1.NotificationEventsService.SendNotificationEvents
 */
export declare const sendNotificationEvents: {
    readonly localName: "sendNotificationEvents";
    readonly name: "SendNotificationEvents";
    readonly kind: MethodKind.Unary;
    readonly I: typeof SendNotificationEventsRequest;
    readonly O: typeof SendNotificationEventsResponse;
    readonly service: {
        readonly typeName: "uniswap.notificationservice.v1.NotificationEventsService";
    };
};
