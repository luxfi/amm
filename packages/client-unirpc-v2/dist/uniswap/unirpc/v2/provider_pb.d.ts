import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum uniswap.unirpc.v2.Provider
 */
export declare enum Provider {
    /**
     * @generated from enum value: PROVIDER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PROVIDER_INFURA = 1;
     */
    INFURA = 1,
    /**
     * @generated from enum value: PROVIDER_QUICKNODE = 2;
     */
    QUICKNODE = 2,
    /**
     * @generated from enum value: PROVIDER_ALCHEMY = 3;
     */
    ALCHEMY = 3,
    /**
     * @generated from enum value: PROVIDER_NIRVANA = 4;
     */
    NIRVANA = 4,
    /**
     * @generated from enum value: PROVIDER_UNICHAINBETASERVICE = 5;
     */
    UNICHAINBETASERVICE = 5,
    /**
     * @generated from enum value: PROVIDER_MONADINFRA = 6;
     */
    MONADINFRA = 6,
    /**
     * @generated from enum value: PROVIDER_SELFHOST = 7;
     */
    SELFHOST = 7
}
/**
 * @generated from message uniswap.unirpc.v2.ProviderConfig
 */
export declare class ProviderConfig extends Message<ProviderConfig> {
    /**
     * @generated from field: uniswap.unirpc.v2.Provider provider = 1;
     */
    provider: Provider;
    /**
     * @generated from field: string url = 2;
     */
    url: string;
    constructor(data?: PartialMessage<ProviderConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.ProviderConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProviderConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProviderConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProviderConfig;
    static equals(a: ProviderConfig | PlainMessage<ProviderConfig> | undefined, b: ProviderConfig | PlainMessage<ProviderConfig> | undefined): boolean;
}
/**
 * @generated from message uniswap.unirpc.v2.ProviderHealth
 */
export declare class ProviderHealth extends Message<ProviderHealth> {
    /**
     * @generated from field: int32 healthScore = 1;
     */
    healthScore: number;
    /**
     * @generated from field: int32 lastUpdated = 2;
     */
    lastUpdated: number;
    constructor(data?: PartialMessage<ProviderHealth>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.unirpc.v2.ProviderHealth";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProviderHealth;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProviderHealth;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProviderHealth;
    static equals(a: ProviderHealth | PlainMessage<ProviderHealth> | undefined, b: ProviderHealth | PlainMessage<ProviderHealth> | undefined): boolean;
}
