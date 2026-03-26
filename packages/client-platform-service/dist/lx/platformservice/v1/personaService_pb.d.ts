import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message uniswap.platformservice.v1.GetOrCreatePersonaRequest
 */
export declare class GetOrCreatePersonaRequest extends Message<GetOrCreatePersonaRequest> {
    /**
     * @generated from field: string device_id = 1;
     */
    deviceId: string;
    constructor(data?: PartialMessage<GetOrCreatePersonaRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.GetOrCreatePersonaRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrCreatePersonaRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrCreatePersonaRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrCreatePersonaRequest;
    static equals(a: GetOrCreatePersonaRequest | PlainMessage<GetOrCreatePersonaRequest> | undefined, b: GetOrCreatePersonaRequest | PlainMessage<GetOrCreatePersonaRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.platformservice.v1.GetOrCreatePersonaResponse
 */
export declare class GetOrCreatePersonaResponse extends Message<GetOrCreatePersonaResponse> {
    /**
     * @generated from field: uniswap.platformservice.v1.PersonaScore persona = 1;
     */
    persona?: PersonaScore;
    constructor(data?: PartialMessage<GetOrCreatePersonaResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.GetOrCreatePersonaResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrCreatePersonaResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrCreatePersonaResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrCreatePersonaResponse;
    static equals(a: GetOrCreatePersonaResponse | PlainMessage<GetOrCreatePersonaResponse> | undefined, b: GetOrCreatePersonaResponse | PlainMessage<GetOrCreatePersonaResponse> | undefined): boolean;
}
/**
 * Request to update persona information
 *
 * @generated from message uniswap.platformservice.v1.UpgradePersonaRequest
 */
export declare class UpgradePersonaRequest extends Message<UpgradePersonaRequest> {
    /**
     * Note: all other data should be in the header
     *
     * @generated from field: string persona_id = 1;
     */
    personaId: string;
    /**
     * @generated from field: string wallet_addr = 2;
     */
    walletAddr: string;
    constructor(data?: PartialMessage<UpgradePersonaRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.UpgradePersonaRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpgradePersonaRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpgradePersonaRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpgradePersonaRequest;
    static equals(a: UpgradePersonaRequest | PlainMessage<UpgradePersonaRequest> | undefined, b: UpgradePersonaRequest | PlainMessage<UpgradePersonaRequest> | undefined): boolean;
}
/**
 * Response for persona update
 *
 * @generated from message uniswap.platformservice.v1.UpgradePersonaResponse
 */
export declare class UpgradePersonaResponse extends Message<UpgradePersonaResponse> {
    constructor(data?: PartialMessage<UpgradePersonaResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.UpgradePersonaResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpgradePersonaResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpgradePersonaResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpgradePersonaResponse;
    static equals(a: UpgradePersonaResponse | PlainMessage<UpgradePersonaResponse> | undefined, b: UpgradePersonaResponse | PlainMessage<UpgradePersonaResponse> | undefined): boolean;
}
/**
 * Represents a persona with its score
 *
 * @generated from message uniswap.platformservice.v1.PersonaScore
 */
export declare class PersonaScore extends Message<PersonaScore> {
    /**
     * @generated from field: string persona_id = 1;
     */
    personaId: string;
    /**
     * @generated from field: int32 score = 2;
     */
    score: number;
    constructor(data?: PartialMessage<PersonaScore>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.platformservice.v1.PersonaScore";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PersonaScore;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PersonaScore;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PersonaScore;
    static equals(a: PersonaScore | PlainMessage<PersonaScore> | undefined, b: PersonaScore | PlainMessage<PersonaScore> | undefined): boolean;
}
