import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum pools.v1.ProtocolVersion
 */
export declare enum ProtocolVersion {
    /**
     * @generated from enum value: PROTOCOL_VERSION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PROTOCOL_VERSION_V2 = 1;
     */
    V2 = 1,
    /**
     * @generated from enum value: PROTOCOL_VERSION_V3 = 2;
     */
    V3 = 2,
    /**
     * @generated from enum value: PROTOCOL_VERSION_V4 = 3;
     */
    V4 = 3
}
/**
 * @generated from enum pools.v1.PositionStatus
 */
export declare enum PositionStatus {
    /**
     * @generated from enum value: POSITION_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: POSITION_STATUS_IN_RANGE = 1;
     */
    IN_RANGE = 1,
    /**
     * @generated from enum value: POSITION_STATUS_OUT_OF_RANGE = 2;
     */
    OUT_OF_RANGE = 2,
    /**
     * @generated from enum value: POSITION_STATUS_CLOSED = 3;
     */
    CLOSED = 3
}
/**
 * @generated from message pools.v1.Token
 */
export declare class Token extends Message<Token> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: string symbol = 3;
     */
    symbol: string;
    /**
     * @generated from field: uint32 decimals = 4;
     */
    decimals: number;
    /**
     * @generated from field: string name = 5;
     */
    name: string;
    /**
     * @generated from field: optional string logo = 6;
     */
    logo?: string;
    /**
     * @generated from field: bool is_native = 7;
     */
    isNative: boolean;
    constructor(data?: PartialMessage<Token>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "pools.v1.Token";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Token;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Token;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Token;
    static equals(a: Token | PlainMessage<Token> | undefined, b: Token | PlainMessage<Token> | undefined): boolean;
}
/**
 * @generated from message pools.v1.PoolPosition
 */
export declare class PoolPosition extends Message<PoolPosition> {
    /**
     * @generated from field: string token_id = 1;
     */
    tokenId: string;
    /**
     * @generated from field: string tick_lower = 2;
     */
    tickLower: string;
    /**
     * @generated from field: string tick_upper = 3;
     */
    tickUpper: string;
    /**
     * @generated from field: string liquidity = 4;
     */
    liquidity: string;
    /**
     * @generated from field: pools.v1.Token token0 = 5;
     */
    token0?: Token;
    /**
     * @generated from field: pools.v1.Token token1 = 6;
     */
    token1?: Token;
    /**
     * @generated from field: string fee_tier = 7;
     */
    feeTier: string;
    /**
     * @generated from field: string current_tick = 8;
     */
    currentTick: string;
    /**
     * @generated from field: string current_price = 9;
     */
    currentPrice: string;
    /**
     * @generated from field: string tick_spacing = 10;
     */
    tickSpacing: string;
    /**
     * @generated from field: string token0_uncollected_fees = 11;
     */
    token0UncollectedFees: string;
    /**
     * @generated from field: string token1_uncollected_fees = 12;
     */
    token1UncollectedFees: string;
    /**
     * @generated from field: string amount0 = 13;
     */
    amount0: string;
    /**
     * @generated from field: string amount1 = 14;
     */
    amount1: string;
    /**
     * @generated from field: string pool_id = 15;
     */
    poolId: string;
    /**
     * @generated from field: bool is_dynamic_fee = 16;
     */
    isDynamicFee: boolean;
    /**
     * @generated from field: string total_liquidity_usd = 17;
     */
    totalLiquidityUsd: string;
    /**
     * @generated from field: string current_liquidity = 18;
     */
    currentLiquidity: string;
    /**
     * @generated from field: float apr = 19;
     */
    apr: number;
    /**
     * @generated from field: string owner = 20;
     */
    owner: string;
    /**
     * @generated from field: float boosted_apr = 21;
     */
    boostedApr: number;
    /**
     * @generated from field: float total_apr = 22;
     */
    totalApr: number;
    /**
     * @generated from field: string unclaimed_rewards_amount_uni = 23;
     */
    unclaimedRewardsAmountUni: string;
    constructor(data?: PartialMessage<PoolPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "pools.v1.PoolPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolPosition;
    static equals(a: PoolPosition | PlainMessage<PoolPosition> | undefined, b: PoolPosition | PlainMessage<PoolPosition> | undefined): boolean;
}
/**
 * @generated from message pools.v1.PairPosition
 */
export declare class PairPosition extends Message<PairPosition> {
    /**
     * @generated from field: pools.v1.Token token0 = 1;
     */
    token0?: Token;
    /**
     * @generated from field: pools.v1.Token token1 = 2;
     */
    token1?: Token;
    /**
     * @generated from field: pools.v1.Token liquidity_token = 3;
     */
    liquidityToken?: Token;
    /**
     * @generated from field: string reserve0 = 4;
     */
    reserve0: string;
    /**
     * @generated from field: string reserve1 = 5;
     */
    reserve1: string;
    /**
     * @generated from field: string liquidity = 6;
     */
    liquidity: string;
    /**
     * @generated from field: string liquidity0 = 7;
     */
    liquidity0: string;
    /**
     * @generated from field: string liquidity1 = 8;
     */
    liquidity1: string;
    /**
     * @generated from field: string total_supply = 9;
     */
    totalSupply: string;
    /**
     * @generated from field: float apr = 10;
     */
    apr: number;
    constructor(data?: PartialMessage<PairPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "pools.v1.PairPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PairPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PairPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PairPosition;
    static equals(a: PairPosition | PlainMessage<PairPosition> | undefined, b: PairPosition | PlainMessage<PairPosition> | undefined): boolean;
}
/**
 * @generated from message pools.v1.Position
 */
export declare class Position extends Message<Position> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: pools.v1.ProtocolVersion protocol_version = 2;
     */
    protocolVersion: ProtocolVersion;
    /**
     * @generated from oneof pools.v1.Position.position
     */
    position: {
        /**
         * @generated from field: pools.v1.PairPosition v2_pair = 3;
         */
        value: PairPosition;
        case: "v2Pair";
    } | {
        /**
         * @generated from field: pools.v1.PoolPosition v3_position = 4;
         */
        value: PoolPosition;
        case: "v3Position";
    } | {
        /**
         * @generated from field: pools.v1.V4Position v4_position = 5;
         */
        value: V4Position;
        case: "v4Position";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: pools.v1.PositionStatus status = 6;
     */
    status: PositionStatus;
    /**
     * @generated from field: uint32 timestamp = 7;
     */
    timestamp: number;
    /**
     * @generated from field: bool is_hidden = 8;
     */
    isHidden: boolean;
    constructor(data?: PartialMessage<Position>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "pools.v1.Position";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Position;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Position;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Position;
    static equals(a: Position | PlainMessage<Position> | undefined, b: Position | PlainMessage<Position> | undefined): boolean;
}
/**
 * @generated from message pools.v1.Hook
 */
export declare class Hook extends Message<Hook> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<Hook>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "pools.v1.Hook";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hook;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hook;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hook;
    static equals(a: Hook | PlainMessage<Hook> | undefined, b: Hook | PlainMessage<Hook> | undefined): boolean;
}
/**
 * @generated from message pools.v1.V4Position
 */
export declare class V4Position extends Message<V4Position> {
    /**
     * @generated from field: pools.v1.PoolPosition pool_position = 1;
     */
    poolPosition?: PoolPosition;
    /**
     * @generated from field: repeated pools.v1.Hook hooks = 2;
     */
    hooks: Hook[];
    constructor(data?: PartialMessage<V4Position>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "pools.v1.V4Position";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): V4Position;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): V4Position;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): V4Position;
    static equals(a: V4Position | PlainMessage<V4Position> | undefined, b: V4Position | PlainMessage<V4Position> | undefined): boolean;
}
/**
 * @generated from message pools.v1.Pool
 */
export declare class Pool extends Message<Pool> {
    /**
     * @generated from field: string pool_id = 1;
     */
    poolId: string;
    /**
     * @generated from field: string token0 = 2;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 3;
     */
    token1: string;
    /**
     * @generated from field: int32 tick = 4;
     */
    tick: number;
    /**
     * @generated from field: string liquidity = 5;
     */
    liquidity: string;
    /**
     * @generated from field: string sqrt_price_x96 = 6;
     */
    sqrtPriceX96: string;
    /**
     * @generated from field: uint32 fee = 7;
     */
    fee: number;
    /**
     * @generated from field: int32 tick_spacing = 8;
     */
    tickSpacing: number;
    /**
     * @generated from field: optional pools.v1.Hook hooks = 9;
     */
    hooks?: Hook;
    /**
     * @generated from field: pools.v1.ProtocolVersion protocol_version = 10;
     */
    protocolVersion: ProtocolVersion;
    /**
     * @generated from field: uint32 chain_id = 11;
     */
    chainId: number;
    /**
     * @generated from field: bool is_dynamic_fee = 12;
     */
    isDynamicFee: boolean;
    /**
     * @generated from field: string total_liquidity_usd = 13;
     */
    totalLiquidityUsd: string;
    /**
     * @generated from field: float apr = 14;
     */
    apr: number;
    /**
     * @generated from field: float boosted_apr = 15;
     */
    boostedApr: number;
    /**
     * @generated from field: float total_apr = 16;
     */
    totalApr: number;
    constructor(data?: PartialMessage<Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "pools.v1.Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pool;
    static equals(a: Pool | PlainMessage<Pool> | undefined, b: Pool | PlainMessage<Pool> | undefined): boolean;
}
/**
 * @generated from message pools.v1.Pair
 */
export declare class Pair extends Message<Pair> {
    /**
     * @generated from field: string pair_address = 1;
     */
    pairAddress: string;
    /**
     * @generated from field: string token0 = 2;
     */
    token0: string;
    /**
     * @generated from field: string token1 = 3;
     */
    token1: string;
    /**
     * @generated from field: string reserve0 = 4;
     */
    reserve0: string;
    /**
     * @generated from field: string reserve1 = 5;
     */
    reserve1: string;
    /**
     * @generated from field: string total_supply = 6;
     */
    totalSupply: string;
    /**
     * @generated from field: float apr = 7;
     */
    apr: number;
    constructor(data?: PartialMessage<Pair>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "pools.v1.Pair";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pair;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pair;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pair;
    static equals(a: Pair | PlainMessage<Pair> | undefined, b: Pair | PlainMessage<Pair> | undefined): boolean;
}
