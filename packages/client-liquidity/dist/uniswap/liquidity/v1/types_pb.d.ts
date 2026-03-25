import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ENUMS
 *
 * @generated from enum uniswap.liquidity.v1.Protocols
 */
export declare enum Protocols {
    /**
     * @generated from enum value: V2 = 0;
     */
    V2 = 0,
    /**
     * @generated from enum value: V3 = 1;
     */
    V3 = 1,
    /**
     * @generated from enum value: V4 = 2;
     */
    V4 = 2
}
/**
 * @generated from enum uniswap.liquidity.v1.ChainId
 */
export declare enum ChainId {
    /**
     * @generated from enum value: CHAIN_ID_UNSPECIFIED = 0;
     */
    CHAIN_ID_UNSPECIFIED = 0,
    /**
     * @generated from enum value: MAINNET = 1;
     */
    MAINNET = 1,
    /**
     * @generated from enum value: OPTIMISM = 10;
     */
    OPTIMISM = 10,
    /**
     * @generated from enum value: POLYGON = 137;
     */
    POLYGON = 137,
    /**
     * @generated from enum value: ARBITRUM = 42161;
     */
    ARBITRUM = 42161,
    /**
     * @generated from enum value: BNB = 56;
     */
    BNB = 56,
    /**
     * @generated from enum value: BASE = 8453;
     */
    BASE = 8453,
    /**
     * @generated from enum value: BLAST = 81457;
     */
    BLAST = 81457,
    /**
     * @generated from enum value: AVAX = 43114;
     */
    AVAX = 43114,
    /**
     * @generated from enum value: CELO = 42220;
     */
    CELO = 42220,
    /**
     * @generated from enum value: ZORA = 7777777;
     */
    ZORA = 7777777,
    /**
     * @generated from enum value: ZKSYNC = 324;
     */
    ZKSYNC = 324,
    /**
     * @generated from enum value: SEPOLIA = 11155111;
     */
    SEPOLIA = 11155111,
    /**
     * @generated from enum value: UNICHAIN_SEPOLIA = 1301;
     */
    UNICHAIN_SEPOLIA = 1301,
    /**
     * @generated from enum value: WORLDCHAIN = 480;
     */
    WORLDCHAIN = 480,
    /**
     * @generated from enum value: MONAD_TESTNET = 10143;
     */
    MONAD_TESTNET = 10143,
    /**
     * @generated from enum value: BASE_SEPOLIA = 84532;
     */
    BASE_SEPOLIA = 84532,
    /**
     * @generated from enum value: UNICHAIN = 130;
     */
    UNICHAIN = 130,
    /**
     * @generated from enum value: SONEIUM = 1868;
     */
    SONEIUM = 1868,
    /**
     * @generated from enum value: MONAD = 143;
     */
    MONAD = 143,
    /**
     * @generated from enum value: XLAYER = 196;
     */
    XLAYER = 196
}
/**
 * @generated from enum uniswap.liquidity.v1.Distributor
 */
export declare enum Distributor {
    /**
     * @generated from enum value: MERKLE = 0;
     */
    MERKLE = 0
}
/**
 * @generated from enum uniswap.liquidity.v1.IndependentToken
 */
export declare enum IndependentToken {
    /**
     * @generated from enum value: TOKEN_0 = 0;
     */
    TOKEN_0 = 0,
    /**
     * @generated from enum value: TOKEN_1 = 1;
     */
    TOKEN_1 = 1
}
/**
 * @generated from enum uniswap.liquidity.v1.OnChainStatus
 */
export declare enum OnChainStatus {
    /**
     * @generated from enum value: ON_CHAIN_STATUS_UNSPECIFIED = 0;
     */
    ON_CHAIN_STATUS_UNSPECIFIED = 0,
    /**
     * @generated from enum value: SUCCESS = 1;
     */
    SUCCESS = 1,
    /**
     * @generated from enum value: FAILED = 2;
     */
    FAILED = 2
}
/**
 * @generated from enum uniswap.liquidity.v1.KycVerificationStatus
 */
export declare enum KycVerificationStatus {
    /**
     * @generated from enum value: VERIFICATION_STATUS_UNSPECIFIED = 0;
     */
    VERIFICATION_STATUS_UNSPECIFIED = 0,
    /**
     * this is basically verified
     *
     * @generated from enum value: VERIFICATION_STATUS_COMPLETED = 1;
     */
    VERIFICATION_STATUS_COMPLETED = 1,
    /**
     * @generated from enum value: VERIFICATION_STATUS_NOT_STARTED = 2;
     */
    VERIFICATION_STATUS_NOT_STARTED = 2,
    /**
     * @generated from enum value: VERIFICATION_STATUS_PENDING = 3;
     */
    VERIFICATION_STATUS_PENDING = 3,
    /**
     * @generated from enum value: VERIFICATION_STATUS_RETRY = 4;
     */
    VERIFICATION_STATUS_RETRY = 4,
    /**
     * @generated from enum value: VERIFICATION_STATUS_REJECTED = 5;
     */
    VERIFICATION_STATUS_REJECTED = 5
}
/**
 * @generated from enum uniswap.liquidity.v1.ValidationType
 */
export declare enum ValidationType {
    /**
     * @generated from enum value: VALIDATION_TYPE_UNSPECIFIED = 0;
     */
    VALIDATION_TYPE_UNSPECIFIED = 0,
    /**
     * @generated from enum value: KYC_VERIFICATION = 1;
     */
    KYC_VERIFICATION = 1,
    /**
     * @generated from enum value: ERC_1155_GATEWAY = 2;
     */
    ERC_1155_GATEWAY = 2
}
/**
 * CORE TYPE OBJECTS
 *
 * @generated from message uniswap.liquidity.v1.TransactionRequest
 */
export declare class TransactionRequest extends Message<TransactionRequest> {
    /**
     * @generated from field: string to = 1;
     */
    to: string;
    /**
     * @generated from field: string from = 2;
     */
    from: string;
    /**
     * @generated from field: string data = 3;
     */
    data: string;
    /**
     * @generated from field: string value = 4;
     */
    value: string;
    /**
     * @generated from field: uint32 chain_id = 5;
     */
    chainId: number;
    /**
     * @generated from field: optional string gas_limit = 6;
     */
    gasLimit?: string;
    /**
     * @generated from field: optional string max_fee_per_gas = 7;
     */
    maxFeePerGas?: string;
    /**
     * @generated from field: optional string max_priority_fee_per_gas = 8;
     */
    maxPriorityFeePerGas?: string;
    /**
     * @generated from field: optional string gas_price = 9;
     */
    gasPrice?: string;
    constructor(data?: PartialMessage<TransactionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.TransactionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionRequest;
    static equals(a: TransactionRequest | PlainMessage<TransactionRequest> | undefined, b: TransactionRequest | PlainMessage<TransactionRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V4Position
 */
export declare class V4Position extends Message<V4Position> {
    /**
     * @generated from field: uniswap.liquidity.v1.V4Pool pool = 1;
     */
    pool?: V4Pool;
    /**
     * @generated from field: sint32 tick_lower = 2;
     */
    tickLower: number;
    /**
     * @generated from field: sint32 tick_upper = 3;
     */
    tickUpper: number;
    constructor(data?: PartialMessage<V4Position>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V4Position";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4Position;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4Position;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4Position;
    static equals(a: V4Position | PlainMessage<V4Position> | undefined, b: V4Position | PlainMessage<V4Position> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V3Position
 */
export declare class V3Position extends Message<V3Position> {
    /**
     * @generated from field: uniswap.liquidity.v1.V3Pool pool = 1;
     */
    pool?: V3Pool;
    /**
     * @generated from field: sint32 tick_lower = 2;
     */
    tickLower: number;
    /**
     * @generated from field: sint32 tick_upper = 3;
     */
    tickUpper: number;
    constructor(data?: PartialMessage<V3Position>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V3Position";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3Position;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3Position;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3Position;
    static equals(a: V3Position | PlainMessage<V3Position> | undefined, b: V3Position | PlainMessage<V3Position> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V2Position
 */
export declare class V2Position extends Message<V2Position> {
    /**
     * @generated from field: uniswap.liquidity.v1.V2Pool pool = 1;
     */
    pool?: V2Pool;
    constructor(data?: PartialMessage<V2Position>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V2Position";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2Position;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2Position;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2Position;
    static equals(a: V2Position | PlainMessage<V2Position> | undefined, b: V2Position | PlainMessage<V2Position> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V2Pool
 */
export declare class V2Pool extends Message<V2Pool> {
    /**
     * @generated from field: string token0 = 1;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 2;
     */
    token1: string;
    constructor(data?: PartialMessage<V2Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V2Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2Pool;
    static equals(a: V2Pool | PlainMessage<V2Pool> | undefined, b: V2Pool | PlainMessage<V2Pool> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V3Pool
 */
export declare class V3Pool extends Message<V3Pool> {
    /**
     * @generated from field: string token0 = 1;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 2;
     */
    token1: string;
    /**
     * @generated from field: int32 fee = 3;
     */
    fee: number;
    /**
     * @generated from field: int32 tick_spacing = 4;
     */
    tickSpacing: number;
    constructor(data?: PartialMessage<V3Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V3Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3Pool;
    static equals(a: V3Pool | PlainMessage<V3Pool> | undefined, b: V3Pool | PlainMessage<V3Pool> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V4Pool
 */
export declare class V4Pool extends Message<V4Pool> {
    /**
     * @generated from field: string token0 = 1;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 2;
     */
    token1: string;
    /**
     * @generated from field: int32 fee = 3;
     */
    fee: number;
    /**
     * @generated from field: int32 tick_spacing = 4;
     */
    tickSpacing: number;
    /**
     * @generated from field: optional string hooks = 5;
     */
    hooks?: string;
    constructor(data?: PartialMessage<V4Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V4Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4Pool;
    static equals(a: V4Pool | PlainMessage<V4Pool> | undefined, b: V4Pool | PlainMessage<V4Pool> | undefined): boolean;
}
/**
 * PERMIT TYPES
 *
 * @generated from message uniswap.liquidity.v1.PermitSingleData
 */
export declare class PermitSingleData extends Message<PermitSingleData> {
    /**
     * @generated from field: uniswap.liquidity.v1.Domain domain = 1;
     */
    domain?: Domain;
    /**
     * @generated from field: map<string, uniswap.liquidity.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: uniswap.liquidity.v1.PermitSingle values = 3;
     */
    values?: PermitSingle;
    constructor(data?: PartialMessage<PermitSingleData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.PermitSingleData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitSingleData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitSingleData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitSingleData;
    static equals(a: PermitSingleData | PlainMessage<PermitSingleData> | undefined, b: PermitSingleData | PlainMessage<PermitSingleData> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PermitSingle
 */
export declare class PermitSingle extends Message<PermitSingle> {
    /**
     * @generated from field: uniswap.liquidity.v1.PermitDetails details = 1;
     */
    details?: PermitDetails;
    /**
     * @generated from field: string spender = 2;
     */
    spender: string;
    /**
     * @generated from field: string sig_deadline = 3;
     */
    sigDeadline: string;
    constructor(data?: PartialMessage<PermitSingle>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.PermitSingle";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitSingle;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitSingle;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitSingle;
    static equals(a: PermitSingle | PlainMessage<PermitSingle> | undefined, b: PermitSingle | PlainMessage<PermitSingle> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PermitDetails
 */
export declare class PermitDetails extends Message<PermitDetails> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string amount = 2;
     */
    amount: string;
    /**
     * @generated from field: string expiration = 3;
     */
    expiration: string;
    /**
     * @generated from field: string nonce = 4;
     */
    nonce: string;
    constructor(data?: PartialMessage<PermitDetails>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.PermitDetails";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitDetails;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitDetails;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitDetails;
    static equals(a: PermitDetails | PlainMessage<PermitDetails> | undefined, b: PermitDetails | PlainMessage<PermitDetails> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.Domain
 */
export declare class Domain extends Message<Domain> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.ChainId chain_id = 2;
     */
    chainId?: ChainId;
    /**
     * @generated from field: optional string verifying_contract = 3;
     */
    verifyingContract?: string;
    /**
     * @generated from field: optional string version = 4;
     */
    version?: string;
    /**
     * @generated from field: optional string salt = 5;
     */
    salt?: string;
    constructor(data?: PartialMessage<Domain>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.Domain";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Domain;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Domain;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Domain;
    static equals(a: Domain | PlainMessage<Domain> | undefined, b: Domain | PlainMessage<Domain> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.TypeField
 */
export declare class TypeField extends Message<TypeField> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string type = 2;
     */
    type: string;
    constructor(data?: PartialMessage<TypeField>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.TypeField";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TypeField;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TypeField;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TypeField;
    static equals(a: TypeField | PlainMessage<TypeField> | undefined, b: TypeField | PlainMessage<TypeField> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PermitBatchData
 */
export declare class PermitBatchData extends Message<PermitBatchData> {
    /**
     * @generated from field: uniswap.liquidity.v1.Domain domain = 1;
     */
    domain?: Domain;
    /**
     * @generated from field: map<string, uniswap.liquidity.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: uniswap.liquidity.v1.PermitBatch values = 3;
     */
    values?: PermitBatch;
    constructor(data?: PartialMessage<PermitBatchData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.PermitBatchData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitBatchData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitBatchData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitBatchData;
    static equals(a: PermitBatchData | PlainMessage<PermitBatchData> | undefined, b: PermitBatchData | PlainMessage<PermitBatchData> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PermitBatch
 */
export declare class PermitBatch extends Message<PermitBatch> {
    /**
     * @generated from field: repeated uniswap.liquidity.v1.PermitDetails details = 1;
     */
    details: PermitDetails[];
    /**
     * @generated from field: string spender = 2;
     */
    spender: string;
    /**
     * @generated from field: string sig_deadline = 3;
     */
    sigDeadline: string;
    constructor(data?: PartialMessage<PermitBatch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.PermitBatch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitBatch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitBatch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitBatch;
    static equals(a: PermitBatch | PlainMessage<PermitBatch> | undefined, b: PermitBatch | PlainMessage<PermitBatch> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.TypedDataDomain
 */
export declare class TypedDataDomain extends Message<TypedDataDomain> {
    /**
     * @generated from field: optional string name = 1;
     */
    name?: string;
    /**
     * @generated from field: optional string version = 2;
     */
    version?: string;
    /**
     * @generated from field: optional int32 chain_id = 3;
     */
    chainId?: number;
    /**
     * @generated from field: optional string verifying_contract = 4;
     */
    verifyingContract?: string;
    /**
     * @generated from field: optional string salt = 5;
     */
    salt?: string;
    constructor(data?: PartialMessage<TypedDataDomain>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.TypedDataDomain";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TypedDataDomain;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TypedDataDomain;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TypedDataDomain;
    static equals(a: TypedDataDomain | PlainMessage<TypedDataDomain> | undefined, b: TypedDataDomain | PlainMessage<TypedDataDomain> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.NFTPermitValues
 */
export declare class NFTPermitValues extends Message<NFTPermitValues> {
    /**
     * @generated from field: string spender = 1;
     */
    spender: string;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: string deadline = 3;
     */
    deadline: string;
    /**
     * @generated from field: string nonce = 4;
     */
    nonce: string;
    constructor(data?: PartialMessage<NFTPermitValues>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.NFTPermitValues";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NFTPermitValues;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NFTPermitValues;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NFTPermitValues;
    static equals(a: NFTPermitValues | PlainMessage<NFTPermitValues> | undefined, b: NFTPermitValues | PlainMessage<NFTPermitValues> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.NFTPermitData
 */
export declare class NFTPermitData extends Message<NFTPermitData> {
    /**
     * @generated from field: uniswap.liquidity.v1.TypedDataDomain domain = 1;
     */
    domain?: TypedDataDomain;
    /**
     * @generated from field: map<string, uniswap.liquidity.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: uniswap.liquidity.v1.NFTPermitValues values = 3;
     */
    values?: NFTPermitValues;
    constructor(data?: PartialMessage<NFTPermitData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.NFTPermitData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NFTPermitData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NFTPermitData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NFTPermitData;
    static equals(a: NFTPermitData | PlainMessage<NFTPermitData> | undefined, b: NFTPermitData | PlainMessage<NFTPermitData> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PermitTransferFromData
 */
export declare class PermitTransferFromData extends Message<PermitTransferFromData> {
    /**
     * @generated from field: uniswap.liquidity.v1.Domain domain = 1;
     */
    domain?: Domain;
    /**
     * @generated from field: map<string, uniswap.liquidity.v1.TypeFieldArray> types = 2;
     */
    types: {
        [key: string]: TypeFieldArray;
    };
    /**
     * @generated from field: uniswap.liquidity.v1.PermitTransferFrom values = 3;
     */
    values?: PermitTransferFrom;
    constructor(data?: PartialMessage<PermitTransferFromData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.PermitTransferFromData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitTransferFromData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitTransferFromData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitTransferFromData;
    static equals(a: PermitTransferFromData | PlainMessage<PermitTransferFromData> | undefined, b: PermitTransferFromData | PlainMessage<PermitTransferFromData> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.TypeFieldArray
 */
export declare class TypeFieldArray extends Message<TypeFieldArray> {
    /**
     * @generated from field: repeated uniswap.liquidity.v1.TypeField fields = 1;
     */
    fields: TypeField[];
    constructor(data?: PartialMessage<TypeFieldArray>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.TypeFieldArray";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TypeFieldArray;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TypeFieldArray;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TypeFieldArray;
    static equals(a: TypeFieldArray | PlainMessage<TypeFieldArray> | undefined, b: TypeFieldArray | PlainMessage<TypeFieldArray> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PermitTransferFrom
 */
export declare class PermitTransferFrom extends Message<PermitTransferFrom> {
    /**
     * @generated from field: uniswap.liquidity.v1.TokenPermissions permitted = 1;
     */
    permitted?: TokenPermissions;
    /**
     * @generated from field: string spender = 2;
     */
    spender: string;
    /**
     * @generated from field: string nonce = 3;
     */
    nonce: string;
    /**
     * @generated from field: string deadline = 4;
     */
    deadline: string;
    constructor(data?: PartialMessage<PermitTransferFrom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.PermitTransferFrom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermitTransferFrom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermitTransferFrom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermitTransferFrom;
    static equals(a: PermitTransferFrom | PlainMessage<PermitTransferFrom> | undefined, b: PermitTransferFrom | PlainMessage<PermitTransferFrom> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.TokenPermissions
 */
export declare class TokenPermissions extends Message<TokenPermissions> {
    /**
     * @generated from field: string token = 1;
     */
    token: string;
    /**
     * @generated from field: string amount = 2;
     */
    amount: string;
    constructor(data?: PartialMessage<TokenPermissions>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.TokenPermissions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenPermissions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenPermissions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenPermissions;
    static equals(a: TokenPermissions | PlainMessage<TokenPermissions> | undefined, b: TokenPermissions | PlainMessage<TokenPermissions> | undefined): boolean;
}
/**
 * REQUEST MESSAGE SUPPORTING TYPES
 *
 * @generated from message uniswap.liquidity.v1.V2CreateLPPosition
 */
export declare class V2CreateLPPosition extends Message<V2CreateLPPosition> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: uniswap.liquidity.v1.V2Position position = 2;
     */
    position?: V2Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string amount0 = 5;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 6;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 7;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.IndependentToken independent_token = 8;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string default_dependent_amount = 10;
     */
    defaultDependentAmount?: string;
    /**
     * @generated from field: optional float slippage_tolerance = 11;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 12;
     */
    deadline?: number;
    /**
     * @generated from field: bool simulate_transaction = 13;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V2CreateLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V2CreateLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2CreateLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2CreateLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2CreateLPPosition;
    static equals(a: V2CreateLPPosition | PlainMessage<V2CreateLPPosition> | undefined, b: V2CreateLPPosition | PlainMessage<V2CreateLPPosition> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V3CreateLPPosition
 */
export declare class V3CreateLPPosition extends Message<V3CreateLPPosition> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: uniswap.liquidity.v1.V3Position position = 2;
     */
    position?: V3Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string amount0 = 5;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 6;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 7;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.IndependentToken independent_token = 8;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string initial_dependent_amount = 9;
     */
    initialDependentAmount?: string;
    /**
     * @generated from field: optional string default_dependent_amount = 10;
     */
    defaultDependentAmount?: string;
    /**
     * @generated from field: optional string initial_price = 11;
     */
    initialPrice?: string;
    /**
     * @generated from field: optional string pool_liquidity = 12;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 13;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 14;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional float slippage_tolerance = 15;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 16;
     */
    deadline?: number;
    /**
     * @generated from field: optional string signature = 17;
     */
    signature?: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.PermitBatchData batchPermitData = 18;
     */
    batchPermitData?: PermitBatchData;
    /**
     * @generated from field: bool simulate_transaction = 19;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V3CreateLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V3CreateLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3CreateLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3CreateLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3CreateLPPosition;
    static equals(a: V3CreateLPPosition | PlainMessage<V3CreateLPPosition> | undefined, b: V3CreateLPPosition | PlainMessage<V3CreateLPPosition> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V4CreateLPPosition
 */
export declare class V4CreateLPPosition extends Message<V4CreateLPPosition> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: uniswap.liquidity.v1.V4Position position = 2;
     */
    position?: V4Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string initial_price = 11;
     */
    initialPrice?: string;
    /**
     * @generated from field: optional string amount0 = 5;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 6;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 7;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.IndependentToken independent_token = 8;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string initial_dependent_amount = 9;
     */
    initialDependentAmount?: string;
    /**
     * @generated from field: optional string pool_liquidity = 12;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 13;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 14;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional string signature = 17;
     */
    signature?: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.PermitBatchData batchPermitData = 18;
     */
    batchPermitData?: PermitBatchData;
    /**
     * @generated from field: optional string default_dependent_amount = 10;
     */
    defaultDependentAmount?: string;
    /**
     * @generated from field: optional float slippage_tolerance = 15;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 16;
     */
    deadline?: number;
    /**
     * @generated from field: bool simulate_transaction = 19;
     */
    simulateTransaction: boolean;
    /**
     * @generated from field: optional string native_token_balance = 20;
     */
    nativeTokenBalance?: string;
    constructor(data?: PartialMessage<V4CreateLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V4CreateLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4CreateLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4CreateLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4CreateLPPosition;
    static equals(a: V4CreateLPPosition | PlainMessage<V4CreateLPPosition> | undefined, b: V4CreateLPPosition | PlainMessage<V4CreateLPPosition> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PoolInformation
 */
export declare class PoolInformation extends Message<PoolInformation> {
    /**
     * @generated from field: string pool_reference_identifier = 1;
     */
    poolReferenceIdentifier: string;
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols pool_protocol = 2;
     */
    poolProtocol: Protocols;
    /**
     * @generated from field: string token_address_A = 3;
     */
    tokenAddressA: string;
    /**
     * @generated from field: string token_address_B = 4;
     */
    tokenAddressB: string;
    /**
     * @generated from field: optional int32 tick_spacing = 5;
     */
    tickSpacing?: number;
    /**
     * @generated from field: optional int32 fee = 6;
     */
    fee?: number;
    /**
     * @generated from field: optional string hook_address = 7;
     */
    hookAddress?: string;
    /**
     * @generated from field: int32 chain_id = 8;
     */
    chainId: number;
    /**
     * @generated from field: optional string token_amount_A = 9;
     */
    tokenAmountA?: string;
    /**
     * @generated from field: optional string token_amount_B = 10;
     */
    tokenAmountB?: string;
    /**
     * @generated from field: string token_decimals_A = 11;
     */
    tokenDecimalsA: string;
    /**
     * @generated from field: string token_decimals_B = 12;
     */
    tokenDecimalsB: string;
    /**
     * @generated from field: optional string pool_liquidity = 13;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional string sqrt_ratio_x96 = 14;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional int32 current_tick = 15;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string token_0_reserves = 16;
     */
    token0Reserves?: string;
    /**
     * @generated from field: optional string token_1_reserves = 17;
     */
    token1Reserves?: string;
    constructor(data?: PartialMessage<PoolInformation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.PoolInformation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolInformation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolInformation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolInformation;
    static equals(a: PoolInformation | PlainMessage<PoolInformation> | undefined, b: PoolInformation | PlainMessage<PoolInformation> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PoolReferenceByProtocol
 */
export declare class PoolReferenceByProtocol extends Message<PoolReferenceByProtocol> {
    /**
     * @generated from field: string reference_identifier = 1;
     */
    referenceIdentifier: string;
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 2;
     */
    protocol: Protocols;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 3;
     */
    chainId: ChainId;
    constructor(data?: PartialMessage<PoolReferenceByProtocol>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.PoolReferenceByProtocol";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolReferenceByProtocol;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolReferenceByProtocol;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolReferenceByProtocol;
    static equals(a: PoolReferenceByProtocol | PlainMessage<PoolReferenceByProtocol> | undefined, b: PoolReferenceByProtocol | PlainMessage<PoolReferenceByProtocol> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PoolParameters
 */
export declare class PoolParameters extends Message<PoolParameters> {
    /**
     * @generated from field: string token_address_A = 2;
     */
    tokenAddressA: string;
    /**
     * @generated from field: string token_address_B = 3;
     */
    tokenAddressB: string;
    /**
     * @generated from field: optional int32 tick_spacing = 4;
     */
    tickSpacing?: number;
    /**
     * @generated from field: optional int32 fee = 5;
     */
    fee?: number;
    /**
     * @generated from field: optional string hook_address = 6;
     */
    hookAddress?: string;
    constructor(data?: PartialMessage<PoolParameters>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.PoolParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolParameters;
    static equals(a: PoolParameters | PlainMessage<PoolParameters> | undefined, b: PoolParameters | PlainMessage<PoolParameters> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V2IncreaseLPPosition
 */
export declare class V2IncreaseLPPosition extends Message<V2IncreaseLPPosition> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: uniswap.liquidity.v1.V2Position position = 2;
     */
    position?: V2Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string amount0 = 5;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 6;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 7;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.IndependentToken independent_token = 8;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string default_dependent_amount = 9;
     */
    defaultDependentAmount?: string;
    /**
     * @generated from field: optional float slippage_tolerance = 10;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 11;
     */
    deadline?: number;
    /**
     * @generated from field: bool simulate_transaction = 12;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V2IncreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V2IncreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2IncreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2IncreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2IncreaseLPPosition;
    static equals(a: V2IncreaseLPPosition | PlainMessage<V2IncreaseLPPosition> | undefined, b: V2IncreaseLPPosition | PlainMessage<V2IncreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V3IncreaseLPPosition
 */
export declare class V3IncreaseLPPosition extends Message<V3IncreaseLPPosition> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: uniswap.liquidity.v1.V3Position position = 3;
     */
    position?: V3Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string amount0 = 6;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 7;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 8;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.IndependentToken independent_token = 9;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string pool_liquidity = 10;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 11;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 12;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional float slippage_tolerance = 13;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 14;
     */
    deadline?: number;
    /**
     * @generated from field: bool simulate_transaction = 15;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V3IncreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V3IncreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3IncreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3IncreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3IncreaseLPPosition;
    static equals(a: V3IncreaseLPPosition | PlainMessage<V3IncreaseLPPosition> | undefined, b: V3IncreaseLPPosition | PlainMessage<V3IncreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V4IncreaseLPPosition
 */
export declare class V4IncreaseLPPosition extends Message<V4IncreaseLPPosition> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocols = 1;
     */
    protocols: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: uniswap.liquidity.v1.V4Position position = 3;
     */
    position?: V4Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string amount0 = 6;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 7;
     */
    amount1?: string;
    /**
     * @generated from field: optional string independentAmount = 8;
     */
    independentAmount?: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.IndependentToken independent_token = 9;
     */
    independentToken?: IndependentToken;
    /**
     * @generated from field: optional string pool_liquidity = 10;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional sint32 current_tick = 11;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 12;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: optional float slippage_tolerance = 14;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 15;
     */
    deadline?: number;
    /**
     * @generated from field: bool simulate_transaction = 16;
     */
    simulateTransaction: boolean;
    /**
     * @generated from field: optional string signature = 17;
     */
    signature?: string;
    /**
     * @generated from field: optional uniswap.liquidity.v1.PermitBatchData batchPermitData = 18;
     */
    batchPermitData?: PermitBatchData;
    constructor(data?: PartialMessage<V4IncreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V4IncreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4IncreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4IncreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4IncreaseLPPosition;
    static equals(a: V4IncreaseLPPosition | PlainMessage<V4IncreaseLPPosition> | undefined, b: V4IncreaseLPPosition | PlainMessage<V4IncreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V2DecreaseLPPosition
 */
export declare class V2DecreaseLPPosition extends Message<V2DecreaseLPPosition> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: uniswap.liquidity.v1.V2Position position = 2;
     */
    position?: V2Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: string positionLiquidity = 5;
     */
    positionLiquidity: string;
    /**
     * @generated from field: string liquidityPercentageToDecrease = 6;
     */
    liquidityPercentageToDecrease: string;
    /**
     * @generated from field: string liquidity0 = 7;
     */
    liquidity0: string;
    /**
     * @generated from field: string liquidity1 = 8;
     */
    liquidity1: string;
    /**
     * @generated from field: bool collectAsWETH = 10;
     */
    collectAsWETH: boolean;
    /**
     * @generated from field: optional bool simulate_transaction = 11;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: optional float slippage_tolerance = 12;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 13;
     */
    deadline?: number;
    constructor(data?: PartialMessage<V2DecreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V2DecreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2DecreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2DecreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2DecreaseLPPosition;
    static equals(a: V2DecreaseLPPosition | PlainMessage<V2DecreaseLPPosition> | undefined, b: V2DecreaseLPPosition | PlainMessage<V2DecreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V3DecreaseLPPosition
 */
export declare class V3DecreaseLPPosition extends Message<V3DecreaseLPPosition> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: uniswap.liquidity.v1.V3Position position = 3;
     */
    position?: V3Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: string liquidityPercentageToDecrease = 7;
     */
    liquidityPercentageToDecrease: string;
    /**
     * @generated from field: optional string poolLiquidity = 8;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional int32 current_tick = 9;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 10;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: string positionLiquidity = 11;
     */
    positionLiquidity: string;
    /**
     * @generated from field: string expectedTokenOwed0RawAmount = 12;
     */
    expectedTokenOwed0RawAmount: string;
    /**
     * @generated from field: string expectedTokenOwed1RawAmount = 13;
     */
    expectedTokenOwed1RawAmount: string;
    /**
     * @generated from field: bool collectAsWETH = 14;
     */
    collectAsWETH: boolean;
    /**
     * @generated from field: optional bool simulate_transaction = 15;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: optional float slippage_tolerance = 16;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 17;
     */
    deadline?: number;
    constructor(data?: PartialMessage<V3DecreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V3DecreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3DecreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3DecreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3DecreaseLPPosition;
    static equals(a: V3DecreaseLPPosition | PlainMessage<V3DecreaseLPPosition> | undefined, b: V3DecreaseLPPosition | PlainMessage<V3DecreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V4DecreaseLPPosition
 */
export declare class V4DecreaseLPPosition extends Message<V4DecreaseLPPosition> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: uniswap.liquidity.v1.V4Position position = 3;
     */
    position?: V4Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: string liquidityPercentageToDecrease = 6;
     */
    liquidityPercentageToDecrease: string;
    /**
     * @generated from field: optional string poolLiquidity = 7;
     */
    poolLiquidity?: string;
    /**
     * @generated from field: optional int32 current_tick = 8;
     */
    currentTick?: number;
    /**
     * @generated from field: optional string sqrtRatioX96 = 9;
     */
    sqrtRatioX96?: string;
    /**
     * @generated from field: string positionLiquidity = 10;
     */
    positionLiquidity: string;
    /**
     * @generated from field: optional bool simulate_transaction = 11;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: optional float slippage_tolerance = 12;
     */
    slippageTolerance?: number;
    /**
     * @generated from field: optional int32 deadline = 13;
     */
    deadline?: number;
    constructor(data?: PartialMessage<V4DecreaseLPPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V4DecreaseLPPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4DecreaseLPPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4DecreaseLPPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4DecreaseLPPosition;
    static equals(a: V4DecreaseLPPosition | PlainMessage<V4DecreaseLPPosition> | undefined, b: V4DecreaseLPPosition | PlainMessage<V4DecreaseLPPosition> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V2ClaimLPFeesRequest
 */
export declare class V2ClaimLPFeesRequest extends Message<V2ClaimLPFeesRequest> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: uniswap.liquidity.v1.V2Position position = 2;
     */
    position?: V2Position;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional bool simulate_transaction = 5;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: bool collectAsWETH = 6;
     */
    collectAsWETH: boolean;
    constructor(data?: PartialMessage<V2ClaimLPFeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V2ClaimLPFeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2ClaimLPFeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2ClaimLPFeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2ClaimLPFeesRequest;
    static equals(a: V2ClaimLPFeesRequest | PlainMessage<V2ClaimLPFeesRequest> | undefined, b: V2ClaimLPFeesRequest | PlainMessage<V2ClaimLPFeesRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V3ClaimLPFeesRequest
 */
export declare class V3ClaimLPFeesRequest extends Message<V3ClaimLPFeesRequest> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: uniswap.liquidity.v1.V3Position position = 3;
     */
    position?: V3Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional bool simulate_transaction = 6;
     */
    simulateTransaction?: boolean;
    /**
     * @generated from field: bool collectAsWETH = 7;
     */
    collectAsWETH: boolean;
    /**
     * @generated from field: string expectedTokenOwed0RawAmount = 8;
     */
    expectedTokenOwed0RawAmount: string;
    /**
     * @generated from field: string expectedTokenOwed1RawAmount = 9;
     */
    expectedTokenOwed1RawAmount: string;
    constructor(data?: PartialMessage<V3ClaimLPFeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V3ClaimLPFeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3ClaimLPFeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3ClaimLPFeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3ClaimLPFeesRequest;
    static equals(a: V3ClaimLPFeesRequest | PlainMessage<V3ClaimLPFeesRequest> | undefined, b: V3ClaimLPFeesRequest | PlainMessage<V3ClaimLPFeesRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V4ClaimLPFeesRequest
 */
export declare class V4ClaimLPFeesRequest extends Message<V4ClaimLPFeesRequest> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: int32 tokenId = 2;
     */
    tokenId: number;
    /**
     * @generated from field: uniswap.liquidity.v1.V4Position position = 3;
     */
    position?: V4Position;
    /**
     * @generated from field: string wallet_address = 4;
     */
    walletAddress: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 5;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional bool simulate_transaction = 6;
     */
    simulateTransaction?: boolean;
    constructor(data?: PartialMessage<V4ClaimLPFeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V4ClaimLPFeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4ClaimLPFeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4ClaimLPFeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4ClaimLPFeesRequest;
    static equals(a: V4ClaimLPFeesRequest | PlainMessage<V4ClaimLPFeesRequest> | undefined, b: V4ClaimLPFeesRequest | PlainMessage<V4ClaimLPFeesRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V2CheckApprovalLPRequest
 */
export declare class V2CheckApprovalLPRequest extends Message<V2CheckApprovalLPRequest> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: optional string token0 = 2;
     */
    token0?: string;
    /**
     * @generated from field: optional string token1 = 3;
     */
    token1?: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string position_token = 5;
     */
    positionToken?: string;
    /**
     * @generated from field: string wallet_address = 6;
     */
    walletAddress: string;
    /**
     * @generated from field: optional string amount0 = 7;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 8;
     */
    amount1?: string;
    /**
     * @generated from field: optional string position_amount = 9;
     */
    positionAmount?: string;
    /**
     * @generated from field: optional string spender_address = 10;
     */
    spenderAddress?: string;
    /**
     * @generated from field: bool simulate_transaction = 11;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V2CheckApprovalLPRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V2CheckApprovalLPRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V2CheckApprovalLPRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V2CheckApprovalLPRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V2CheckApprovalLPRequest;
    static equals(a: V2CheckApprovalLPRequest | PlainMessage<V2CheckApprovalLPRequest> | undefined, b: V2CheckApprovalLPRequest | PlainMessage<V2CheckApprovalLPRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V3CheckApprovalLPRequest
 */
export declare class V3CheckApprovalLPRequest extends Message<V3CheckApprovalLPRequest> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: optional string token0 = 2;
     */
    token0?: string;
    /**
     * @generated from field: optional string token1 = 3;
     */
    token1?: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: optional string position_token = 5;
     */
    positionToken?: string;
    /**
     * @generated from field: string wallet_address = 6;
     */
    walletAddress: string;
    /**
     * @generated from field: optional string amount0 = 7;
     */
    amount0?: string;
    /**
     * @generated from field: optional string amount1 = 8;
     */
    amount1?: string;
    /**
     * @generated from field: bool simulate_transaction = 10;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V3CheckApprovalLPRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V3CheckApprovalLPRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V3CheckApprovalLPRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V3CheckApprovalLPRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V3CheckApprovalLPRequest;
    static equals(a: V3CheckApprovalLPRequest | PlainMessage<V3CheckApprovalLPRequest> | undefined, b: V3CheckApprovalLPRequest | PlainMessage<V3CheckApprovalLPRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.V4CheckApprovalLPRequest
 */
export declare class V4CheckApprovalLPRequest extends Message<V4CheckApprovalLPRequest> {
    /**
     * @generated from field: uniswap.liquidity.v1.Protocols protocol = 1;
     */
    protocol: Protocols;
    /**
     * @generated from field: string token0 = 2;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 3;
     */
    token1: string;
    /**
     * @generated from field: uniswap.liquidity.v1.ChainId chain_id = 4;
     */
    chainId: ChainId;
    /**
     * @generated from field: string wallet_address = 6;
     */
    walletAddress: string;
    /**
     * @generated from field: string amount0 = 7;
     */
    amount0: string;
    /**
     * @generated from field: string amount1 = 8;
     */
    amount1: string;
    /**
     * @generated from field: bool generate_permit_as_transaction = 9;
     */
    generatePermitAsTransaction: boolean;
    /**
     * @generated from field: bool simulate_transaction = 10;
     */
    simulateTransaction: boolean;
    constructor(data?: PartialMessage<V4CheckApprovalLPRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.V4CheckApprovalLPRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4CheckApprovalLPRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4CheckApprovalLPRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4CheckApprovalLPRequest;
    static equals(a: V4CheckApprovalLPRequest | PlainMessage<V4CheckApprovalLPRequest> | undefined, b: V4CheckApprovalLPRequest | PlainMessage<V4CheckApprovalLPRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.BidToExit
 */
export declare class BidToExit extends Message<BidToExit> {
    /**
     * @generated from field: string bidId = 1;
     */
    bidId: string;
    /**
     * @generated from field: bool isExited = 2;
     */
    isExited: boolean;
    constructor(data?: PartialMessage<BidToExit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.BidToExit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BidToExit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BidToExit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BidToExit;
    static equals(a: BidToExit | PlainMessage<BidToExit> | undefined, b: BidToExit | PlainMessage<BidToExit> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.PredicateKycVerificationData
 */
export declare class PredicateKycVerificationData extends Message<PredicateKycVerificationData> {
    /**
     * @generated from field: uniswap.liquidity.v1.KycVerificationStatus status = 1;
     */
    status: KycVerificationStatus;
    /**
     * Predicate unsigned URL if not verified
     *
     * @generated from field: optional string redirect_url = 2;
     */
    redirectUrl?: string;
    /**
     * @generated from field: optional string qr_code = 3;
     */
    qrCode?: string;
    constructor(data?: PartialMessage<PredicateKycVerificationData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.PredicateKycVerificationData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PredicateKycVerificationData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PredicateKycVerificationData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PredicateKycVerificationData;
    static equals(a: PredicateKycVerificationData | PlainMessage<PredicateKycVerificationData> | undefined, b: PredicateKycVerificationData | PlainMessage<PredicateKycVerificationData> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.Erc1155GateData
 */
export declare class Erc1155GateData extends Message<Erc1155GateData> {
    /**
     * @generated from field: optional string expiration_block = 1;
     */
    expirationBlock?: string;
    constructor(data?: PartialMessage<Erc1155GateData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.Erc1155GateData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Erc1155GateData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Erc1155GateData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Erc1155GateData;
    static equals(a: Erc1155GateData | PlainMessage<Erc1155GateData> | undefined, b: Erc1155GateData | PlainMessage<Erc1155GateData> | undefined): boolean;
}
/**
 * @generated from message uniswap.liquidity.v1.AuctionValidation
 */
export declare class AuctionValidation extends Message<AuctionValidation> {
    /**
     * @generated from field: uniswap.liquidity.v1.ValidationType validation_type = 1;
     */
    validationType: ValidationType;
    /**
     * @generated from oneof uniswap.liquidity.v1.AuctionValidation.data
     */
    data: {
        /**
         * @generated from field: uniswap.liquidity.v1.PredicateKycVerificationData kyc_verification_data = 2;
         */
        value: PredicateKycVerificationData;
        case: "kycVerificationData";
    } | {
        /**
         * @generated from field: uniswap.liquidity.v1.Erc1155GateData erc_1155_gate_data = 3;
         */
        value: Erc1155GateData;
        case: "erc1155GateData";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: bool validation_passed = 4;
     */
    validationPassed: boolean;
    constructor(data?: PartialMessage<AuctionValidation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.liquidity.v1.AuctionValidation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuctionValidation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuctionValidation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuctionValidation;
    static equals(a: AuctionValidation | PlainMessage<AuctionValidation> | undefined, b: AuctionValidation | PlainMessage<AuctionValidation> | undefined): boolean;
}
