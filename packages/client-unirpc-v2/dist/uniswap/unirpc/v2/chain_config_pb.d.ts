import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Chain } from "./service_pb.js";
import { Provider } from "./provider_pb.js";
/**
 * @generated from message uniswap.unirpc.v2.ChainConfig
 */
export declare class ChainConfig extends Message<ChainConfig> {
    /**
     * @generated from field: uniswap.unirpc.v2.Chain chain = 1;
     */
    chain: Chain;
    /**
     * @generated from field: repeated uniswap.unirpc.v2.ChainProviderConfig providers = 2;
     */
    providers: ChainProviderConfig[];
    constructor(data?: PartialMessage<ChainConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.ChainConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainConfig;
    static equals(a: ChainConfig | PlainMessage<ChainConfig> | undefined, b: ChainConfig | PlainMessage<ChainConfig> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.ChainProviderConfig
 */
export declare class ChainProviderConfig extends Message<ChainProviderConfig> {
    /**
     * @generated from field: uniswap.unirpc.v2.Provider provider = 1;
     */
    provider: Provider;
    /**
     * @generated from field: double weight = 2;
     */
    weight: number;
    /**
     * @generated from field: uniswap.unirpc.v2.Alert alert = 3;
     */
    alert?: Alert;
    constructor(data?: PartialMessage<ChainProviderConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.ChainProviderConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainProviderConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainProviderConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainProviderConfig;
    static equals(a: ChainProviderConfig | PlainMessage<ChainProviderConfig> | undefined, b: ChainProviderConfig | PlainMessage<ChainProviderConfig> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.Alert
 */
export declare class Alert extends Message<Alert> {
    /**
     * @generated from field: uint32 id = 1;
     */
    id: number;
    /**
     * @generated from field: uniswap.unirpc.v2.HealthChangeRate sinkRate = 2;
     */
    sinkRate?: HealthChangeRate;
    /**
     * @generated from field: uniswap.unirpc.v2.HealthChangeRate recoverRate = 3;
     */
    recoverRate?: HealthChangeRate;
    constructor(data?: PartialMessage<Alert>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.Alert";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Alert;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Alert;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Alert;
    static equals(a: Alert | PlainMessage<Alert> | undefined, b: Alert | PlainMessage<Alert> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.HealthChangeRate
 */
export declare class HealthChangeRate extends Message<HealthChangeRate> {
    /**
     * @generated from field: double rate = 1;
     */
    rate: number;
    /**
     * @generated from field: uint32 periodSeconds = 2;
     */
    periodSeconds: number;
    constructor(data?: PartialMessage<HealthChangeRate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.HealthChangeRate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthChangeRate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthChangeRate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthChangeRate;
    static equals(a: HealthChangeRate | PlainMessage<HealthChangeRate> | undefined, b: HealthChangeRate | PlainMessage<HealthChangeRate> | undefined): boolean;
}
