import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Empty, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from enum uniswap.notificationservice.v1.SendDirectMessageTypeEnum
 */
export declare enum SendDirectMessageTypeEnum {
    /**
     * @generated from enum value: SEND_DIRECT_MESSAGE_TYPE_EMAIL = 0;
     */
    SEND_DIRECT_MESSAGE_TYPE_EMAIL = 0,
    /**
     * @generated from enum value: SEND_DIRECT_MESSAGE_TYPE_PHONE = 1;
     */
    SEND_DIRECT_MESSAGE_TYPE_PHONE = 1
}
/**
 * @generated from enum uniswap.notificationservice.v1.NotificationVersion
 */
export declare enum NotificationVersion {
    /**
     * @generated from enum value: NOTIFICATION_VERSION_V0 = 0;
     */
    V0 = 0
}
/**
 * @generated from enum uniswap.notificationservice.v1.ContentStyle
 */
export declare enum ContentStyle {
    /**
     * @generated from enum value: CONTENT_STYLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CONTENT_STYLE_LOWER_LEFT_BANNER = 1;
     */
    LOWER_LEFT_BANNER = 1,
    /**
     * @generated from enum value: CONTENT_STYLE_MODAL = 2;
     */
    MODAL = 2,
    /**
     * @generated from enum value: CONTENT_STYLE_SYSTEM_BANNER = 3;
     */
    SYSTEM_BANNER = 3,
    /**
     * @generated from enum value: CONTENT_STYLE_POPUP = 4;
     */
    POPUP = 4
}
/**
 * @generated from enum uniswap.notificationservice.v1.OnClickAction
 */
export declare enum OnClickAction {
    /**
     * not specified, nothing should happen
     *
     * @generated from enum value: ON_CLICK_ACTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * jump to an external link
     *
     * @generated from enum value: ON_CLICK_ACTION_EXTERNAL_LINK = 1;
     */
    EXTERNAL_LINK = 1,
    /**
     * navigate to another popup, but not dismiss
     *
     * @generated from enum value: ON_CLICK_ACTION_POPUP = 2;
     */
    POPUP = 2,
    /**
     * dismiss the current notification
     *
     * @generated from enum value: ON_CLICK_ACTION_DISMISS = 3;
     */
    DISMISS = 3,
    /**
     * trigger an acknowledgement
     *
     * @generated from enum value: ON_CLICK_ACTION_ACK = 4;
     */
    ACK = 4
}
/**
 * @generated from enum uniswap.notificationservice.v1.BackgroundType
 */
export declare enum BackgroundType {
    /**
     * @generated from enum value: BACKGROUND_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: BACKGROUND_TYPE_IMAGE = 1;
     */
    IMAGE = 1
}
/**
 * @generated from enum uniswap.notificationservice.v1.PlatformType
 */
export declare enum PlatformType {
    /**
     * @generated from enum value: PLATFORM_TYPE_WEB = 0;
     */
    WEB = 0,
    /**
     * @generated from enum value: PLATFORM_TYPE_MOBILE = 1;
     */
    MOBILE = 1,
    /**
     * @generated from enum value: PLATFORM_TYPE_EXTENSION = 2;
     */
    EXTENSION = 2
}
/**
 * @generated from enum uniswap.notificationservice.v1.IdentifierType
 */
export declare enum IdentifierType {
    /**
     * @generated from enum value: IDENTIFIER_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: IDENTIFIER_TYPE_UNISWAP_ID = 1;
     */
    UNISWAP_ID = 1,
    /**
     * @generated from enum value: IDENTIFIER_TYPE_GLOBAL = 2;
     */
    GLOBAL = 2
}
/**
 * @generated from enum uniswap.notificationservice.v1.DeliveryStatus
 */
export declare enum DeliveryStatus {
    /**
     * @generated from enum value: DELIVERY_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: DELIVERY_STATUS_QUEUED = 1;
     */
    QUEUED = 1,
    /**
     * @generated from enum value: DELIVERY_STATUS_PERSISTED = 2;
     */
    PERSISTED = 2,
    /**
     * @generated from enum value: DELIVERY_STATUS_FAILED = 3;
     */
    FAILED = 3
}
/**
 * @generated from enum uniswap.notificationservice.v1.EventSubscriptionType
 */
export declare enum EventSubscriptionType {
    /**
     * @generated from enum value: EVENT_SUBSCRIPTION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: EVENT_SUBSCRIPTION_TYPE_TOKEN_PRICE = 1;
     */
    TOKEN_PRICE = 1
}
/**
 * @generated from enum uniswap.notificationservice.v1.ThresholdType
 */
export declare enum ThresholdType {
    /**
     * @generated from enum value: THRESHOLD_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: THRESHOLD_TYPE_PERCENTAGE = 1;
     */
    PERCENTAGE = 1,
    /**
     * @generated from enum value: THRESHOLD_TYPE_ABSOLUTE_USD = 2;
     */
    ABSOLUTE_USD = 2
}
/**
 * @generated from message uniswap.notificationservice.v1.SendDirectMessageRequest
 */
export declare class SendDirectMessageRequest extends Message<SendDirectMessageRequest> {
    /**
     * @generated from field: string to = 1;
     */
    to: string;
    /**
     * @generated from field: string template_id = 2;
     */
    templateId: string;
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.OneSignalCustomData custom_data = 3;
     */
    customData: OneSignalCustomData[];
    /**
     * @generated from field: uniswap.notificationservice.v1.SendDirectMessageTypeEnum type = 4;
     */
    type: SendDirectMessageTypeEnum;
    constructor(data?: PartialMessage<SendDirectMessageRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.SendDirectMessageRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendDirectMessageRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendDirectMessageRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendDirectMessageRequest;
    static equals(a: SendDirectMessageRequest | PlainMessage<SendDirectMessageRequest> | undefined, b: SendDirectMessageRequest | PlainMessage<SendDirectMessageRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.OneSignalCustomData
 */
export declare class OneSignalCustomData extends Message<OneSignalCustomData> {
    /**
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * @generated from field: string val = 2;
     */
    val: string;
    constructor(data?: PartialMessage<OneSignalCustomData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.OneSignalCustomData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OneSignalCustomData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OneSignalCustomData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OneSignalCustomData;
    static equals(a: OneSignalCustomData | PlainMessage<OneSignalCustomData> | undefined, b: OneSignalCustomData | PlainMessage<OneSignalCustomData> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.SendDirectMessageResponse
 */
export declare class SendDirectMessageResponse extends Message<SendDirectMessageResponse> {
    /**
     * @generated from field: string notification_id = 1;
     */
    notificationId: string;
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.SendDirectMessageResponse.Error errors = 2;
     */
    errors: SendDirectMessageResponse_Error[];
    constructor(data?: PartialMessage<SendDirectMessageResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.SendDirectMessageResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendDirectMessageResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendDirectMessageResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendDirectMessageResponse;
    static equals(a: SendDirectMessageResponse | PlainMessage<SendDirectMessageResponse> | undefined, b: SendDirectMessageResponse | PlainMessage<SendDirectMessageResponse> | undefined): boolean;
}
/**
 * @generated from enum uniswap.notificationservice.v1.SendDirectMessageResponse.Error
 */
export declare enum SendDirectMessageResponse_Error {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * 200 response errors (partial success) - user data issues
     *
     * @generated from enum value: INVALID_EMAIL_TOKENS = 1;
     */
    INVALID_EMAIL_TOKENS = 1,
    /**
     * @generated from enum value: INVALID_ALIASES = 2;
     */
    INVALID_ALIASES = 2,
    /**
     * @generated from enum value: INVALID_PLAYER_IDS = 3;
     */
    INVALID_PLAYER_IDS = 3
}
/**
 * @generated from message uniswap.notificationservice.v1.ListGlobalNotificationsRequest
 */
export declare class ListGlobalNotificationsRequest extends Message<ListGlobalNotificationsRequest> {
    constructor(data?: PartialMessage<ListGlobalNotificationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.ListGlobalNotificationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGlobalNotificationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGlobalNotificationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGlobalNotificationsRequest;
    static equals(a: ListGlobalNotificationsRequest | PlainMessage<ListGlobalNotificationsRequest> | undefined, b: ListGlobalNotificationsRequest | PlainMessage<ListGlobalNotificationsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.ListGlobalNotificationsResponse
 */
export declare class ListGlobalNotificationsResponse extends Message<ListGlobalNotificationsResponse> {
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.Notification notifications = 1;
     */
    notifications: Notification[];
    constructor(data?: PartialMessage<ListGlobalNotificationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.ListGlobalNotificationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGlobalNotificationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGlobalNotificationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGlobalNotificationsResponse;
    static equals(a: ListGlobalNotificationsResponse | PlainMessage<ListGlobalNotificationsResponse> | undefined, b: ListGlobalNotificationsResponse | PlainMessage<ListGlobalNotificationsResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.DeleteNotificationRequest
 */
export declare class DeleteNotificationRequest extends Message<DeleteNotificationRequest> {
    /**
     * @generated from field: string notification_id = 1;
     */
    notificationId: string;
    /**
     * @generated from field: string identifier = 2;
     */
    identifier: string;
    constructor(data?: PartialMessage<DeleteNotificationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.DeleteNotificationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteNotificationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteNotificationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteNotificationRequest;
    static equals(a: DeleteNotificationRequest | PlainMessage<DeleteNotificationRequest> | undefined, b: DeleteNotificationRequest | PlainMessage<DeleteNotificationRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.DeleteNotificationResponse
 */
export declare class DeleteNotificationResponse extends Message<DeleteNotificationResponse> {
    /**
     * @generated from field: google.protobuf.Empty result = 1;
     */
    result?: Empty;
    constructor(data?: PartialMessage<DeleteNotificationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.DeleteNotificationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteNotificationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteNotificationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteNotificationResponse;
    static equals(a: DeleteNotificationResponse | PlainMessage<DeleteNotificationResponse> | undefined, b: DeleteNotificationResponse | PlainMessage<DeleteNotificationResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.AckNotificationRequest
 */
export declare class AckNotificationRequest extends Message<AckNotificationRequest> {
    /**
     * @generated from field: repeated string ids = 1;
     */
    ids: string[];
    constructor(data?: PartialMessage<AckNotificationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.AckNotificationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckNotificationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckNotificationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckNotificationRequest;
    static equals(a: AckNotificationRequest | PlainMessage<AckNotificationRequest> | undefined, b: AckNotificationRequest | PlainMessage<AckNotificationRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.AckNotificationResponse
 */
export declare class AckNotificationResponse extends Message<AckNotificationResponse> {
    constructor(data?: PartialMessage<AckNotificationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.AckNotificationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AckNotificationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AckNotificationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AckNotificationResponse;
    static equals(a: AckNotificationResponse | PlainMessage<AckNotificationResponse> | undefined, b: AckNotificationResponse | PlainMessage<AckNotificationResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.SendNotificationsRequest
 */
export declare class SendNotificationsRequest extends Message<SendNotificationsRequest> {
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.Notification notifications = 1;
     */
    notifications: Notification[];
    /**
     * @generated from field: string identifier = 2;
     */
    identifier: string;
    constructor(data?: PartialMessage<SendNotificationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.SendNotificationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendNotificationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendNotificationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendNotificationsRequest;
    static equals(a: SendNotificationsRequest | PlainMessage<SendNotificationsRequest> | undefined, b: SendNotificationsRequest | PlainMessage<SendNotificationsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.SendNotificationsResponse
 */
export declare class SendNotificationsResponse extends Message<SendNotificationsResponse> {
    constructor(data?: PartialMessage<SendNotificationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.SendNotificationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendNotificationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendNotificationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendNotificationsResponse;
    static equals(a: SendNotificationsResponse | PlainMessage<SendNotificationsResponse> | undefined, b: SendNotificationsResponse | PlainMessage<SendNotificationsResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.GetNotificationsRequest
 */
export declare class GetNotificationsRequest extends Message<GetNotificationsRequest> {
    constructor(data?: PartialMessage<GetNotificationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.GetNotificationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNotificationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNotificationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNotificationsRequest;
    static equals(a: GetNotificationsRequest | PlainMessage<GetNotificationsRequest> | undefined, b: GetNotificationsRequest | PlainMessage<GetNotificationsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.GetNotificationsResponse
 */
export declare class GetNotificationsResponse extends Message<GetNotificationsResponse> {
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.Notification notifications = 1;
     */
    notifications: Notification[];
    constructor(data?: PartialMessage<GetNotificationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.GetNotificationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNotificationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNotificationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNotificationsResponse;
    static equals(a: GetNotificationsResponse | PlainMessage<GetNotificationsResponse> | undefined, b: GetNotificationsResponse | PlainMessage<GetNotificationsResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.Button
 */
export declare class Button extends Message<Button> {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
    /**
     * when user tap on the background
     *
     * @generated from field: optional uniswap.notificationservice.v1.OnClick on_click = 2;
     */
    onClick?: OnClick;
    /**
     * default to false
     *
     * @generated from field: optional bool is_primary = 3;
     */
    isPrimary?: boolean;
    constructor(data?: PartialMessage<Button>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.Button";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Button;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Button;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Button;
    static equals(a: Button | PlainMessage<Button> | undefined, b: Button | PlainMessage<Button> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.Body
 */
export declare class Body extends Message<Body> {
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.BodyItem items = 1;
     */
    items: BodyItem[];
    constructor(data?: PartialMessage<Body>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.Body";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Body;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Body;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Body;
    static equals(a: Body | PlainMessage<Body> | undefined, b: Body | PlainMessage<Body> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.BodyItem
 */
export declare class BodyItem extends Message<BodyItem> {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
    /**
     * @generated from field: optional string icon_url = 2;
     */
    iconUrl?: string;
    /**
     * icon url for dark mode
     *
     * @generated from field: optional string dark_mode_icon_url = 3;
     */
    darkModeIconUrl?: string;
    constructor(data?: PartialMessage<BodyItem>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.BodyItem";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BodyItem;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BodyItem;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BodyItem;
    static equals(a: BodyItem | PlainMessage<BodyItem> | undefined, b: BodyItem | PlainMessage<BodyItem> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.Content
 */
export declare class Content extends Message<Content> {
    /**
     * version of the Notification Protobuf
     *
     * @generated from field: uniswap.notificationservice.v1.NotificationVersion version = 1;
     */
    version: NotificationVersion;
    /**
     * title of the notification
     *
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * subtitle of the notification
     *
     * @generated from field: string subtitle = 3;
     */
    subtitle: string;
    /**
     * notification styles
     *
     * @generated from field: uniswap.notificationservice.v1.ContentStyle style = 4;
     */
    style: ContentStyle;
    /**
     * the buttons
     *
     * @generated from field: repeated uniswap.notificationservice.v1.Button buttons = 5;
     */
    buttons: Button[];
    /**
     * link for the icon
     *
     * @generated from field: optional string icon_link = 6;
     */
    iconLink?: string;
    /**
     * @generated from field: optional uniswap.notificationservice.v1.Background background = 7;
     */
    background?: Background;
    /**
     * certain large notification may have body
     *
     * @generated from field: optional uniswap.notificationservice.v1.Body body = 8;
     */
    body?: Body;
    /**
     * by default, the notification will not have a dismiss, user must explicitly specify
     *
     * @generated from field: optional uniswap.notificationservice.v1.OnClick on_dismiss_click = 9;
     */
    onDismissClick?: OnClick;
    /**
     * link for icon at dark mode
     *
     * @generated from field: optional string dark_mode_icon_link = 10;
     */
    darkModeIconLink?: string;
    /**
     * business specific fields
     *
     * @generated from field: optional string extra = 255;
     */
    extra?: string;
    constructor(data?: PartialMessage<Content>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.Content";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Content;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Content;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Content;
    static equals(a: Content | PlainMessage<Content> | undefined, b: Content | PlainMessage<Content> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.Background
 */
export declare class Background extends Message<Background> {
    /**
     * different background color or image, client will hard code based on each style
     *
     * @generated from field: optional uniswap.notificationservice.v1.BackgroundType background_type = 1;
     */
    backgroundType?: BackgroundType;
    /**
     * if background type is image, use this link
     *
     * @generated from field: optional string link = 2;
     */
    link?: string;
    /**
     * when user tap on the background
     *
     * @generated from field: optional uniswap.notificationservice.v1.OnClick background_on_click = 3;
     */
    backgroundOnClick?: OnClick;
    /**
     * if background type is image, use this link for dark mode
     *
     * @generated from field: optional string dark_mode_link = 4;
     */
    darkModeLink?: string;
    constructor(data?: PartialMessage<Background>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.Background";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Background;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Background;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Background;
    static equals(a: Background | PlainMessage<Background> | undefined, b: Background | PlainMessage<Background> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.OnClick
 */
export declare class OnClick extends Message<OnClick> {
    /**
     * when user clicks
     *
     * @generated from field: repeated uniswap.notificationservice.v1.OnClickAction on_click = 1;
     */
    onClick: OnClickAction[];
    /**
     * @generated from field: optional string on_click_link = 2;
     */
    onClickLink?: string;
    constructor(data?: PartialMessage<OnClick>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.OnClick";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnClick;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnClick;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnClick;
    static equals(a: OnClick | PlainMessage<OnClick> | undefined, b: OnClick | PlainMessage<OnClick> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.Metadata
 */
export declare class Metadata extends Message<Metadata> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: string business = 2;
     */
    business: string;
    /**
     * @generated from field: optional google.protobuf.Timestamp create_time = 3;
     */
    createTime?: Timestamp;
    constructor(data?: PartialMessage<Metadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.Metadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Metadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Metadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Metadata;
    static equals(a: Metadata | PlainMessage<Metadata> | undefined, b: Metadata | PlainMessage<Metadata> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.Criteria
 */
export declare class Criteria extends Message<Criteria> {
    /**
     * if field is empty, notification will expire in 30 days. otherwise in expire in ttl-seconds
     *
     * @generated from field: optional google.protobuf.Duration ttl = 1;
     */
    ttl?: Duration;
    /**
     * @generated from field: optional uniswap.notificationservice.v1.PlatformType platform_type = 2;
     */
    platformType?: PlatformType;
    /**
     * @generated from field: optional google.protobuf.Timestamp scheduled_publish_time = 3;
     */
    scheduledPublishTime?: Timestamp;
    constructor(data?: PartialMessage<Criteria>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.Criteria";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Criteria;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Criteria;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Criteria;
    static equals(a: Criteria | PlainMessage<Criteria> | undefined, b: Criteria | PlainMessage<Criteria> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.Notification
 */
export declare class Notification extends Message<Notification> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: uniswap.notificationservice.v1.Metadata metadata = 2;
     */
    metadata?: Metadata;
    /**
     * @generated from field: uniswap.notificationservice.v1.Content content = 3;
     */
    content?: Content;
    /**
     * @generated from field: optional uniswap.notificationservice.v1.Criteria criteria = 4;
     */
    criteria?: Criteria;
    constructor(data?: PartialMessage<Notification>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.Notification";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Notification;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Notification;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Notification;
    static equals(a: Notification | PlainMessage<Notification> | undefined, b: Notification | PlainMessage<Notification> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.TokenPriceEvent
 */
export declare class TokenPriceEvent extends Message<TokenPriceEvent> {
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 1;
     */
    timestamp?: Timestamp;
    /**
     * @generated from field: int32 chain_id = 2;
     */
    chainId: number;
    /**
     * @generated from field: string token_address = 3;
     */
    tokenAddress: string;
    /**
     * @generated from field: string price_usd = 5;
     */
    priceUsd: string;
    constructor(data?: PartialMessage<TokenPriceEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.TokenPriceEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenPriceEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenPriceEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenPriceEvent;
    static equals(a: TokenPriceEvent | PlainMessage<TokenPriceEvent> | undefined, b: TokenPriceEvent | PlainMessage<TokenPriceEvent> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.MarketingNotification
 */
export declare class MarketingNotification extends Message<MarketingNotification> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: uniswap.notificationservice.v1.Metadata metadata = 2;
     */
    metadata?: Metadata;
    /**
     * @generated from field: uniswap.notificationservice.v1.Content content = 3;
     */
    content?: Content;
    /**
     * @generated from field: optional uniswap.notificationservice.v1.Criteria criteria = 4;
     */
    criteria?: Criteria;
    constructor(data?: PartialMessage<MarketingNotification>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.MarketingNotification";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MarketingNotification;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MarketingNotification;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MarketingNotification;
    static equals(a: MarketingNotification | PlainMessage<MarketingNotification> | undefined, b: MarketingNotification | PlainMessage<MarketingNotification> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.NotificationEventData
 */
export declare class NotificationEventData extends Message<NotificationEventData> {
    /**
     * @generated from oneof uniswap.notificationservice.v1.NotificationEventData.data
     */
    data: {
        /**
         * @generated from field: uniswap.notificationservice.v1.MarketingNotification marketing = 1;
         */
        value: MarketingNotification;
        case: "marketing";
    } | {
        /**
         * @generated from field: uniswap.notificationservice.v1.TokenPriceEvent token_price_event = 2;
         */
        value: TokenPriceEvent;
        case: "tokenPriceEvent";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<NotificationEventData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.NotificationEventData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NotificationEventData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NotificationEventData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NotificationEventData;
    static equals(a: NotificationEventData | PlainMessage<NotificationEventData> | undefined, b: NotificationEventData | PlainMessage<NotificationEventData> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.SendNotificationEventsRequest
 */
export declare class SendNotificationEventsRequest extends Message<SendNotificationEventsRequest> {
    /**
     * @generated from field: string identifier = 1;
     */
    identifier: string;
    /**
     * @generated from field: uniswap.notificationservice.v1.IdentifierType identifier_type = 2;
     */
    identifierType: IdentifierType;
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.NotificationEventData notifications = 3;
     */
    notifications: NotificationEventData[];
    constructor(data?: PartialMessage<SendNotificationEventsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.SendNotificationEventsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendNotificationEventsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendNotificationEventsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendNotificationEventsRequest;
    static equals(a: SendNotificationEventsRequest | PlainMessage<SendNotificationEventsRequest> | undefined, b: SendNotificationEventsRequest | PlainMessage<SendNotificationEventsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.NotificationEventDeliveryResult
 */
export declare class NotificationEventDeliveryResult extends Message<NotificationEventDeliveryResult> {
    /**
     * @generated from field: int32 notification_index = 1;
     */
    notificationIndex: number;
    /**
     * @generated from field: bool success = 2;
     */
    success: boolean;
    /**
     * @generated from field: optional string error_message = 3;
     */
    errorMessage?: string;
    /**
     * @generated from field: optional int32 users_reached = 4;
     */
    usersReached?: number;
    /**
     * @generated from field: optional string notification_id = 5;
     */
    notificationId?: string;
    /**
     * @generated from field: uniswap.notificationservice.v1.DeliveryStatus delivery_status = 6;
     */
    deliveryStatus: DeliveryStatus;
    constructor(data?: PartialMessage<NotificationEventDeliveryResult>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.NotificationEventDeliveryResult";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NotificationEventDeliveryResult;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NotificationEventDeliveryResult;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NotificationEventDeliveryResult;
    static equals(a: NotificationEventDeliveryResult | PlainMessage<NotificationEventDeliveryResult> | undefined, b: NotificationEventDeliveryResult | PlainMessage<NotificationEventDeliveryResult> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.SendNotificationEventsResponse
 */
export declare class SendNotificationEventsResponse extends Message<SendNotificationEventsResponse> {
    /**
     * @generated from field: bool success = 1;
     */
    success: boolean;
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.NotificationEventDeliveryResult results = 2;
     */
    results: NotificationEventDeliveryResult[];
    /**
     * @generated from field: int32 total_users_reached = 3;
     */
    totalUsersReached: number;
    constructor(data?: PartialMessage<SendNotificationEventsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.SendNotificationEventsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendNotificationEventsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendNotificationEventsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendNotificationEventsResponse;
    static equals(a: SendNotificationEventsResponse | PlainMessage<SendNotificationEventsResponse> | undefined, b: SendNotificationEventsResponse | PlainMessage<SendNotificationEventsResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.TokenKey
 */
export declare class TokenKey extends Message<TokenKey> {
    /**
     * @generated from field: int32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string token_address = 2;
     */
    tokenAddress: string;
    constructor(data?: PartialMessage<TokenKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.TokenKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenKey;
    static equals(a: TokenKey | PlainMessage<TokenKey> | undefined, b: TokenKey | PlainMessage<TokenKey> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.EventSubscription
 */
export declare class EventSubscription extends Message<EventSubscription> {
    /**
     * @generated from oneof uniswap.notificationservice.v1.EventSubscription.data
     */
    data: {
        /**
         * @generated from field: uniswap.notificationservice.v1.TokenKey token = 1;
         */
        value: TokenKey;
        case: "token";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<EventSubscription>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.EventSubscription";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSubscription;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSubscription;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSubscription;
    static equals(a: EventSubscription | PlainMessage<EventSubscription> | undefined, b: EventSubscription | PlainMessage<EventSubscription> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.EventSubscribeRequest
 */
export declare class EventSubscribeRequest extends Message<EventSubscribeRequest> {
    /**
     * @generated from field: uniswap.notificationservice.v1.EventSubscriptionType event_subscription_type = 1;
     */
    eventSubscriptionType: EventSubscriptionType;
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.EventSubscription events = 2;
     */
    events: EventSubscription[];
    /**
     * @generated from field: string connection_id = 3;
     */
    connectionId: string;
    constructor(data?: PartialMessage<EventSubscribeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.EventSubscribeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSubscribeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSubscribeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSubscribeRequest;
    static equals(a: EventSubscribeRequest | PlainMessage<EventSubscribeRequest> | undefined, b: EventSubscribeRequest | PlainMessage<EventSubscribeRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.EventSubscribeResponse
 */
export declare class EventSubscribeResponse extends Message<EventSubscribeResponse> {
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.EventSubscription subscribed_events = 1;
     */
    subscribedEvents: EventSubscription[];
    /**
     * @generated from field: int32 total_subscriptions = 2;
     */
    totalSubscriptions: number;
    constructor(data?: PartialMessage<EventSubscribeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.EventSubscribeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSubscribeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSubscribeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSubscribeResponse;
    static equals(a: EventSubscribeResponse | PlainMessage<EventSubscribeResponse> | undefined, b: EventSubscribeResponse | PlainMessage<EventSubscribeResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.EventUnsubscribeRequest
 */
export declare class EventUnsubscribeRequest extends Message<EventUnsubscribeRequest> {
    /**
     * @generated from field: uniswap.notificationservice.v1.EventSubscriptionType event_subscription_type = 1;
     */
    eventSubscriptionType: EventSubscriptionType;
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.EventSubscription events = 2;
     */
    events: EventSubscription[];
    /**
     * @generated from field: string connection_id = 3;
     */
    connectionId: string;
    constructor(data?: PartialMessage<EventUnsubscribeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.EventUnsubscribeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUnsubscribeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUnsubscribeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUnsubscribeRequest;
    static equals(a: EventUnsubscribeRequest | PlainMessage<EventUnsubscribeRequest> | undefined, b: EventUnsubscribeRequest | PlainMessage<EventUnsubscribeRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.EventUnsubscribeResponse
 */
export declare class EventUnsubscribeResponse extends Message<EventUnsubscribeResponse> {
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.EventSubscription unsubscribed_events = 1;
     */
    unsubscribedEvents: EventSubscription[];
    /**
     * @generated from field: int32 remaining_subscriptions = 2;
     */
    remainingSubscriptions: number;
    constructor(data?: PartialMessage<EventUnsubscribeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.EventUnsubscribeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUnsubscribeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUnsubscribeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUnsubscribeResponse;
    static equals(a: EventUnsubscribeResponse | PlainMessage<EventUnsubscribeResponse> | undefined, b: EventUnsubscribeResponse | PlainMessage<EventUnsubscribeResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.EventUnsubscribeAllRequest
 */
export declare class EventUnsubscribeAllRequest extends Message<EventUnsubscribeAllRequest> {
    /**
     * @generated from field: uniswap.notificationservice.v1.EventSubscriptionType event_subscription_type = 1;
     */
    eventSubscriptionType: EventSubscriptionType;
    /**
     * @generated from field: string connection_id = 2;
     */
    connectionId: string;
    constructor(data?: PartialMessage<EventUnsubscribeAllRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.EventUnsubscribeAllRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUnsubscribeAllRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUnsubscribeAllRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUnsubscribeAllRequest;
    static equals(a: EventUnsubscribeAllRequest | PlainMessage<EventUnsubscribeAllRequest> | undefined, b: EventUnsubscribeAllRequest | PlainMessage<EventUnsubscribeAllRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.EventUnsubscribeAllResponse
 */
export declare class EventUnsubscribeAllResponse extends Message<EventUnsubscribeAllResponse> {
    /**
     * @generated from field: int32 unsubscribed_count = 1;
     */
    unsubscribedCount: number;
    constructor(data?: PartialMessage<EventUnsubscribeAllResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.EventUnsubscribeAllResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUnsubscribeAllResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUnsubscribeAllResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUnsubscribeAllResponse;
    static equals(a: EventUnsubscribeAllResponse | PlainMessage<EventUnsubscribeAllResponse> | undefined, b: EventUnsubscribeAllResponse | PlainMessage<EventUnsubscribeAllResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.EventGetSubscriptionsRequest
 */
export declare class EventGetSubscriptionsRequest extends Message<EventGetSubscriptionsRequest> {
    /**
     * @generated from field: uniswap.notificationservice.v1.EventSubscriptionType event_subscription_type = 1;
     */
    eventSubscriptionType: EventSubscriptionType;
    /**
     * @generated from field: string connection_id = 2;
     */
    connectionId: string;
    constructor(data?: PartialMessage<EventGetSubscriptionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.EventGetSubscriptionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventGetSubscriptionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventGetSubscriptionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventGetSubscriptionsRequest;
    static equals(a: EventGetSubscriptionsRequest | PlainMessage<EventGetSubscriptionsRequest> | undefined, b: EventGetSubscriptionsRequest | PlainMessage<EventGetSubscriptionsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.EventGetSubscriptionsResponse
 */
export declare class EventGetSubscriptionsResponse extends Message<EventGetSubscriptionsResponse> {
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.EventSubscription events = 1;
     */
    events: EventSubscription[];
    constructor(data?: PartialMessage<EventGetSubscriptionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.EventGetSubscriptionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventGetSubscriptionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventGetSubscriptionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventGetSubscriptionsResponse;
    static equals(a: EventGetSubscriptionsResponse | PlainMessage<EventGetSubscriptionsResponse> | undefined, b: EventGetSubscriptionsResponse | PlainMessage<EventGetSubscriptionsResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.EventRefreshSessionRequest
 */
export declare class EventRefreshSessionRequest extends Message<EventRefreshSessionRequest> {
    /**
     * @generated from field: uniswap.notificationservice.v1.EventSubscriptionType event_subscription_type = 1;
     */
    eventSubscriptionType: EventSubscriptionType;
    /**
     * @generated from field: string connection_id = 2;
     */
    connectionId: string;
    constructor(data?: PartialMessage<EventRefreshSessionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.EventRefreshSessionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventRefreshSessionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventRefreshSessionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventRefreshSessionRequest;
    static equals(a: EventRefreshSessionRequest | PlainMessage<EventRefreshSessionRequest> | undefined, b: EventRefreshSessionRequest | PlainMessage<EventRefreshSessionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.EventRefreshSessionResponse
 */
export declare class EventRefreshSessionResponse extends Message<EventRefreshSessionResponse> {
    constructor(data?: PartialMessage<EventRefreshSessionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.EventRefreshSessionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventRefreshSessionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventRefreshSessionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventRefreshSessionResponse;
    static equals(a: EventRefreshSessionResponse | PlainMessage<EventRefreshSessionResponse> | undefined, b: EventRefreshSessionResponse | PlainMessage<EventRefreshSessionResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.GlobalAlertTokenConfig
 */
export declare class GlobalAlertTokenConfig extends Message<GlobalAlertTokenConfig> {
    /**
     * @generated from field: int32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string token_address = 2;
     */
    tokenAddress: string;
    /**
     * @generated from field: uniswap.notificationservice.v1.ThresholdType threshold_type = 4;
     */
    thresholdType: ThresholdType;
    /**
     * @generated from field: double threshold_value = 5;
     */
    thresholdValue: number;
    /**
     * @generated from field: int32 time_window_seconds = 6;
     */
    timeWindowSeconds: number;
    /**
     * @generated from field: int32 cooldown_seconds = 7;
     */
    cooldownSeconds: number;
    /**
     * @generated from field: bool enabled = 8;
     */
    enabled: boolean;
    constructor(data?: PartialMessage<GlobalAlertTokenConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.GlobalAlertTokenConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GlobalAlertTokenConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GlobalAlertTokenConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GlobalAlertTokenConfig;
    static equals(a: GlobalAlertTokenConfig | PlainMessage<GlobalAlertTokenConfig> | undefined, b: GlobalAlertTokenConfig | PlainMessage<GlobalAlertTokenConfig> | undefined): boolean;
}
/**
 * Upsert (create or update)
 *
 * @generated from message uniswap.notificationservice.v1.UpsertGlobalAlertTokenConfigsRequest
 */
export declare class UpsertGlobalAlertTokenConfigsRequest extends Message<UpsertGlobalAlertTokenConfigsRequest> {
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.GlobalAlertTokenConfig configs = 1;
     */
    configs: GlobalAlertTokenConfig[];
    constructor(data?: PartialMessage<UpsertGlobalAlertTokenConfigsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.UpsertGlobalAlertTokenConfigsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpsertGlobalAlertTokenConfigsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpsertGlobalAlertTokenConfigsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpsertGlobalAlertTokenConfigsRequest;
    static equals(a: UpsertGlobalAlertTokenConfigsRequest | PlainMessage<UpsertGlobalAlertTokenConfigsRequest> | undefined, b: UpsertGlobalAlertTokenConfigsRequest | PlainMessage<UpsertGlobalAlertTokenConfigsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.UpsertGlobalAlertTokenConfigsResponse
 */
export declare class UpsertGlobalAlertTokenConfigsResponse extends Message<UpsertGlobalAlertTokenConfigsResponse> {
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.GlobalAlertTokenConfig configs = 1;
     */
    configs: GlobalAlertTokenConfig[];
    /**
     * @generated from field: int32 created = 2;
     */
    created: number;
    /**
     * @generated from field: int32 updated = 3;
     */
    updated: number;
    constructor(data?: PartialMessage<UpsertGlobalAlertTokenConfigsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.UpsertGlobalAlertTokenConfigsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpsertGlobalAlertTokenConfigsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpsertGlobalAlertTokenConfigsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpsertGlobalAlertTokenConfigsResponse;
    static equals(a: UpsertGlobalAlertTokenConfigsResponse | PlainMessage<UpsertGlobalAlertTokenConfigsResponse> | undefined, b: UpsertGlobalAlertTokenConfigsResponse | PlainMessage<UpsertGlobalAlertTokenConfigsResponse> | undefined): boolean;
}
/**
 * Delete
 *
 * @generated from message uniswap.notificationservice.v1.DeleteGlobalAlertTokenConfigsRequest
 */
export declare class DeleteGlobalAlertTokenConfigsRequest extends Message<DeleteGlobalAlertTokenConfigsRequest> {
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.TokenKey token_keys = 1;
     */
    tokenKeys: TokenKey[];
    constructor(data?: PartialMessage<DeleteGlobalAlertTokenConfigsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.DeleteGlobalAlertTokenConfigsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteGlobalAlertTokenConfigsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteGlobalAlertTokenConfigsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteGlobalAlertTokenConfigsRequest;
    static equals(a: DeleteGlobalAlertTokenConfigsRequest | PlainMessage<DeleteGlobalAlertTokenConfigsRequest> | undefined, b: DeleteGlobalAlertTokenConfigsRequest | PlainMessage<DeleteGlobalAlertTokenConfigsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.DeleteGlobalAlertTokenConfigsResponse
 */
export declare class DeleteGlobalAlertTokenConfigsResponse extends Message<DeleteGlobalAlertTokenConfigsResponse> {
    /**
     * @generated from field: int32 removed = 1;
     */
    removed: number;
    constructor(data?: PartialMessage<DeleteGlobalAlertTokenConfigsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.DeleteGlobalAlertTokenConfigsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteGlobalAlertTokenConfigsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteGlobalAlertTokenConfigsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteGlobalAlertTokenConfigsResponse;
    static equals(a: DeleteGlobalAlertTokenConfigsResponse | PlainMessage<DeleteGlobalAlertTokenConfigsResponse> | undefined, b: DeleteGlobalAlertTokenConfigsResponse | PlainMessage<DeleteGlobalAlertTokenConfigsResponse> | undefined): boolean;
}
/**
 * Get single
 *
 * @generated from message uniswap.notificationservice.v1.GetGlobalAlertTokenConfigRequest
 */
export declare class GetGlobalAlertTokenConfigRequest extends Message<GetGlobalAlertTokenConfigRequest> {
    /**
     * @generated from field: int32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string token_address = 2;
     */
    tokenAddress: string;
    constructor(data?: PartialMessage<GetGlobalAlertTokenConfigRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.GetGlobalAlertTokenConfigRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGlobalAlertTokenConfigRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGlobalAlertTokenConfigRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGlobalAlertTokenConfigRequest;
    static equals(a: GetGlobalAlertTokenConfigRequest | PlainMessage<GetGlobalAlertTokenConfigRequest> | undefined, b: GetGlobalAlertTokenConfigRequest | PlainMessage<GetGlobalAlertTokenConfigRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.GetGlobalAlertTokenConfigResponse
 */
export declare class GetGlobalAlertTokenConfigResponse extends Message<GetGlobalAlertTokenConfigResponse> {
    /**
     * @generated from field: uniswap.notificationservice.v1.GlobalAlertTokenConfig config = 1;
     */
    config?: GlobalAlertTokenConfig;
    constructor(data?: PartialMessage<GetGlobalAlertTokenConfigResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.GetGlobalAlertTokenConfigResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGlobalAlertTokenConfigResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGlobalAlertTokenConfigResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGlobalAlertTokenConfigResponse;
    static equals(a: GetGlobalAlertTokenConfigResponse | PlainMessage<GetGlobalAlertTokenConfigResponse> | undefined, b: GetGlobalAlertTokenConfigResponse | PlainMessage<GetGlobalAlertTokenConfigResponse> | undefined): boolean;
}
/**
 * List
 *
 * @generated from message uniswap.notificationservice.v1.ListGlobalAlertTokenConfigsRequest
 */
export declare class ListGlobalAlertTokenConfigsRequest extends Message<ListGlobalAlertTokenConfigsRequest> {
    /**
     * @generated from field: bool include_disabled = 1;
     */
    includeDisabled: boolean;
    constructor(data?: PartialMessage<ListGlobalAlertTokenConfigsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.ListGlobalAlertTokenConfigsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGlobalAlertTokenConfigsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGlobalAlertTokenConfigsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGlobalAlertTokenConfigsRequest;
    static equals(a: ListGlobalAlertTokenConfigsRequest | PlainMessage<ListGlobalAlertTokenConfigsRequest> | undefined, b: ListGlobalAlertTokenConfigsRequest | PlainMessage<ListGlobalAlertTokenConfigsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.ListGlobalAlertTokenConfigsResponse
 */
export declare class ListGlobalAlertTokenConfigsResponse extends Message<ListGlobalAlertTokenConfigsResponse> {
    /**
     * @generated from field: repeated uniswap.notificationservice.v1.GlobalAlertTokenConfig configs = 1;
     */
    configs: GlobalAlertTokenConfig[];
    constructor(data?: PartialMessage<ListGlobalAlertTokenConfigsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.ListGlobalAlertTokenConfigsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGlobalAlertTokenConfigsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGlobalAlertTokenConfigsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGlobalAlertTokenConfigsResponse;
    static equals(a: ListGlobalAlertTokenConfigsResponse | PlainMessage<ListGlobalAlertTokenConfigsResponse> | undefined, b: ListGlobalAlertTokenConfigsResponse | PlainMessage<ListGlobalAlertTokenConfigsResponse> | undefined): boolean;
}
/**
 * Operational - clear cooldown
 *
 * @generated from message uniswap.notificationservice.v1.ClearTokenCooldownRequest
 */
export declare class ClearTokenCooldownRequest extends Message<ClearTokenCooldownRequest> {
    /**
     * @generated from field: int32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string token_address = 2;
     */
    tokenAddress: string;
    constructor(data?: PartialMessage<ClearTokenCooldownRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.ClearTokenCooldownRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearTokenCooldownRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearTokenCooldownRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearTokenCooldownRequest;
    static equals(a: ClearTokenCooldownRequest | PlainMessage<ClearTokenCooldownRequest> | undefined, b: ClearTokenCooldownRequest | PlainMessage<ClearTokenCooldownRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.notificationservice.v1.ClearTokenCooldownResponse
 */
export declare class ClearTokenCooldownResponse extends Message<ClearTokenCooldownResponse> {
    constructor(data?: PartialMessage<ClearTokenCooldownResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.ClearTokenCooldownResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearTokenCooldownResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearTokenCooldownResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearTokenCooldownResponse;
    static equals(a: ClearTokenCooldownResponse | PlainMessage<ClearTokenCooldownResponse> | undefined, b: ClearTokenCooldownResponse | PlainMessage<ClearTokenCooldownResponse> | undefined): boolean;
}
/**
 * Delivery info for global alerts
 *
 * @generated from message uniswap.notificationservice.v1.GlobalAlertDeliveryInfo
 */
export declare class GlobalAlertDeliveryInfo extends Message<GlobalAlertDeliveryInfo> {
    /**
     * @generated from field: bool triggered = 1;
     */
    triggered: boolean;
    /**
     * @generated from field: double price_change_percent = 2;
     */
    priceChangePercent: number;
    /**
     * @generated from field: double price_change_absolute = 3;
     */
    priceChangeAbsolute: number;
    /**
     * @generated from field: string reason_skipped = 4;
     */
    reasonSkipped: string;
    constructor(data?: PartialMessage<GlobalAlertDeliveryInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.notificationservice.v1.GlobalAlertDeliveryInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GlobalAlertDeliveryInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GlobalAlertDeliveryInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GlobalAlertDeliveryInfo;
    static equals(a: GlobalAlertDeliveryInfo | PlainMessage<GlobalAlertDeliveryInfo> | undefined, b: GlobalAlertDeliveryInfo | PlainMessage<GlobalAlertDeliveryInfo> | undefined): boolean;
}
