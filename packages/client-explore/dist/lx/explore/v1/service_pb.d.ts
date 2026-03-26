import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message uniswap.explore.v1.ExploreStatsRequest
 */
export declare class ExploreStatsRequest extends Message<ExploreStatsRequest> {
    /**
     * @generated from field: string chain_id = 1;
     */
    chainId: string;
    /**
     * @generated from field: optional uint32 page_size = 2;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 3;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<ExploreStatsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.ExploreStatsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExploreStatsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExploreStatsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExploreStatsRequest;
    static equals(a: ExploreStatsRequest | PlainMessage<ExploreStatsRequest> | undefined, b: ExploreStatsRequest | PlainMessage<ExploreStatsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.ProtocolStatsRequest
 */
export declare class ProtocolStatsRequest extends Message<ProtocolStatsRequest> {
    /**
     * @generated from field: string chain_id = 1;
     */
    chainId: string;
    constructor(data?: PartialMessage<ProtocolStatsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.ProtocolStatsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtocolStatsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtocolStatsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtocolStatsRequest;
    static equals(a: ProtocolStatsRequest | PlainMessage<ProtocolStatsRequest> | undefined, b: ProtocolStatsRequest | PlainMessage<ProtocolStatsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.ExploreStatsResponse
 */
export declare class ExploreStatsResponse extends Message<ExploreStatsResponse> {
    /**
     * @generated from field: uniswap.explore.v1.ExplorerStats stats = 1;
     */
    stats?: ExplorerStats;
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    constructor(data?: PartialMessage<ExploreStatsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.ExploreStatsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExploreStatsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExploreStatsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExploreStatsResponse;
    static equals(a: ExploreStatsResponse | PlainMessage<ExploreStatsResponse> | undefined, b: ExploreStatsResponse | PlainMessage<ExploreStatsResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.ProtocolStatsResponse
 */
export declare class ProtocolStatsResponse extends Message<ProtocolStatsResponse> {
    /**
     * @generated from field: uniswap.explore.v1.DailyProtocolTvl daily_protocol_tvl = 1;
     */
    dailyProtocolTvl?: DailyProtocolTvl;
    /**
     * @generated from field: uniswap.explore.v1.HistoricalProtocolVolume historical_protocol_volume = 2;
     */
    historicalProtocolVolume?: HistoricalProtocolVolume;
    constructor(data?: PartialMessage<ProtocolStatsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.ProtocolStatsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtocolStatsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtocolStatsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtocolStatsResponse;
    static equals(a: ProtocolStatsResponse | PlainMessage<ProtocolStatsResponse> | undefined, b: ProtocolStatsResponse | PlainMessage<ProtocolStatsResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.Amount
 */
export declare class Amount extends Message<Amount> {
    /**
     * @generated from field: optional string currency = 1;
     */
    currency?: string;
    /**
     * @generated from field: double value = 2;
     */
    value: number;
    constructor(data?: PartialMessage<Amount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.Amount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Amount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Amount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Amount;
    static equals(a: Amount | PlainMessage<Amount> | undefined, b: Amount | PlainMessage<Amount> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.ProtectionInfo
 */
export declare class ProtectionInfo extends Message<ProtectionInfo> {
    /**
     * @generated from field: string result = 1;
     */
    result: string;
    /**
     * @generated from field: repeated string attack_types = 2;
     */
    attackTypes: string[];
    constructor(data?: PartialMessage<ProtectionInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.ProtectionInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtectionInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtectionInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtectionInfo;
    static equals(a: ProtectionInfo | PlainMessage<ProtectionInfo> | undefined, b: ProtectionInfo | PlainMessage<ProtectionInfo> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.FeeData
 */
export declare class FeeData extends Message<FeeData> {
    /**
     * @generated from field: string sell_fee_bps = 1;
     */
    sellFeeBps: string;
    /**
     * @generated from field: string buy_fee_bps = 2;
     */
    buyFeeBps: string;
    /**
     * @generated from field: bool fee_taken_on_transfer = 3;
     */
    feeTakenOnTransfer: boolean;
    /**
     * @generated from field: bool external_transfer_failed = 4;
     */
    externalTransferFailed: boolean;
    /**
     * @generated from field: bool sell_reverted = 5;
     */
    sellReverted: boolean;
    constructor(data?: PartialMessage<FeeData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.FeeData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeData;
    static equals(a: FeeData | PlainMessage<FeeData> | undefined, b: FeeData | PlainMessage<FeeData> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.TokenStats
 */
export declare class TokenStats extends Message<TokenStats> {
    /**
     * @generated from field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: optional string name = 3;
     */
    name?: string;
    /**
     * @generated from field: optional string symbol = 4;
     */
    symbol?: string;
    /**
     * @generated from field: optional string logo = 5;
     */
    logo?: string;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount price = 6;
     */
    price?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount fully_diluted_valuation = 7;
     */
    fullyDilutedValuation?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount price_percent_change1_hour = 8;
     */
    pricePercentChange1Hour?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount price_percent_change1_day = 9;
     */
    pricePercentChange1Day?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount price_percent_change1_week = 10;
     */
    pricePercentChange1Week?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount price_percent_change1_month = 11;
     */
    pricePercentChange1Month?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount price_percent_change1_year = 12;
     */
    pricePercentChange1Year?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount volume_1_hour = 13;
     */
    volume1Hour?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount volume_1_day = 14;
     */
    volume1Day?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount volume_1_week = 15;
     */
    volume1Week?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount volume_1_month = 16;
     */
    volume1Month?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount volume_1_year = 17;
     */
    volume1Year?: Amount;
    /**
     * @generated from field: optional int32 decimals = 18;
     */
    decimals?: number;
    /**
     * @generated from field: optional uniswap.explore.v1.TokenProject project = 19;
     */
    project?: TokenProject;
    /**
     * @generated from field: optional string standard = 20;
     */
    standard?: string;
    /**
     * @generated from field: optional uniswap.explore.v1.PriceHistory price_history_hour = 21;
     */
    priceHistoryHour?: PriceHistory;
    /**
     * @generated from field: optional uniswap.explore.v1.PriceHistory price_history_day = 22;
     */
    priceHistoryDay?: PriceHistory;
    /**
     * @generated from field: optional uniswap.explore.v1.PriceHistory price_history_week = 23;
     */
    priceHistoryWeek?: PriceHistory;
    /**
     * @generated from field: optional uniswap.explore.v1.PriceHistory price_history_month = 24;
     */
    priceHistoryMonth?: PriceHistory;
    /**
     * @generated from field: optional uniswap.explore.v1.PriceHistory price_history_year = 25;
     */
    priceHistoryYear?: PriceHistory;
    constructor(data?: PartialMessage<TokenStats>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.TokenStats";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenStats;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenStats;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenStats;
    static equals(a: TokenStats | PlainMessage<TokenStats> | undefined, b: TokenStats | PlainMessage<TokenStats> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.PriceHistory
 */
export declare class PriceHistory extends Message<PriceHistory> {
    /**
     * @generated from field: int32 start = 1;
     */
    start: number;
    /**
     * @generated from field: int32 end = 2;
     */
    end: number;
    /**
     * @generated from field: int32 step = 3;
     */
    step: number;
    /**
     * @generated from field: repeated double values = 4;
     */
    values: number[];
    constructor(data?: PartialMessage<PriceHistory>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.PriceHistory";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PriceHistory;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PriceHistory;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PriceHistory;
    static equals(a: PriceHistory | PlainMessage<PriceHistory> | undefined, b: PriceHistory | PlainMessage<PriceHistory> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.PoolStats
 */
export declare class PoolStats extends Message<PoolStats> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount total_liquidity = 3;
     */
    totalLiquidity?: Amount;
    /**
     * @generated from field: optional uint32 tx_count = 4;
     */
    txCount?: number;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount volume_1_day = 5;
     */
    volume1Day?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount volume_1_week = 6;
     */
    volume1Week?: Amount;
    /**
     * @generated from field: optional uint32 fee_tier = 7;
     */
    feeTier?: number;
    /**
     * @generated from field: optional uniswap.explore.v1.TokenStats token0 = 8;
     */
    token0?: TokenStats;
    /**
     * @generated from field: optional uniswap.explore.v1.TokenStats token1 = 9;
     */
    token1?: TokenStats;
    /**
     * @generated from field: optional string protocol_version = 10;
     */
    protocolVersion?: string;
    /**
     * @generated from field: optional uniswap.explore.v1.Hook hook = 11;
     */
    hook?: Hook;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount volume_30_day = 12;
     */
    volume30Day?: Amount;
    /**
     * @generated from field: optional float boosted_apr = 13;
     */
    boostedApr?: number;
    constructor(data?: PartialMessage<PoolStats>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.PoolStats";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolStats;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolStats;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolStats;
    static equals(a: PoolStats | PlainMessage<PoolStats> | undefined, b: PoolStats | PlainMessage<PoolStats> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.Hook
 */
export declare class Hook extends Message<Hook> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<Hook>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.Hook";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hook;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hook;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hook;
    static equals(a: Hook | PlainMessage<Hook> | undefined, b: Hook | PlainMessage<Hook> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.TransactionStats
 */
export declare class TransactionStats extends Message<TransactionStats> {
    /**
     * @generated from field: string hash = 1;
     */
    hash: string;
    /**
     * @generated from field: string chain = 2;
     */
    chain: string;
    /**
     * @generated from field: int32 timestamp = 3;
     */
    timestamp: number;
    /**
     * @generated from field: string account = 4;
     */
    account: string;
    /**
     * @generated from field: uniswap.explore.v1.Amount usd_value = 5;
     */
    usdValue?: Amount;
    /**
     * @generated from field: uniswap.explore.v1.TokenStats token0 = 6;
     */
    token0?: TokenStats;
    /**
     * @generated from field: string token_0_quantity = 7;
     */
    token0Quantity: string;
    /**
     * @generated from field: uniswap.explore.v1.TokenStats token1 = 8;
     */
    token1?: TokenStats;
    /**
     * @generated from field: string token_1_quantity = 9;
     */
    token1Quantity: string;
    /**
     * @generated from field: string type = 10;
     */
    type: string;
    /**
     * @generated from field: string protocol_version = 11;
     */
    protocolVersion: string;
    constructor(data?: PartialMessage<TransactionStats>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.TransactionStats";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionStats;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionStats;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionStats;
    static equals(a: TransactionStats | PlainMessage<TransactionStats> | undefined, b: TransactionStats | PlainMessage<TransactionStats> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.TimestampedAmount
 */
export declare class TimestampedAmount extends Message<TimestampedAmount> {
    /**
     * @generated from field: optional string currency = 1;
     */
    currency?: string;
    /**
     * @generated from field: int32 timestamp = 2;
     */
    timestamp: number;
    /**
     * @generated from field: double value = 3;
     */
    value: number;
    constructor(data?: PartialMessage<TimestampedAmount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.TimestampedAmount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimestampedAmount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimestampedAmount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimestampedAmount;
    static equals(a: TimestampedAmount | PlainMessage<TimestampedAmount> | undefined, b: TimestampedAmount | PlainMessage<TimestampedAmount> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.DailyProtocolTvl
 */
export declare class DailyProtocolTvl extends Message<DailyProtocolTvl> {
    /**
     * @generated from field: repeated uniswap.explore.v1.TimestampedAmount v2 = 1;
     */
    v2: TimestampedAmount[];
    /**
     * @generated from field: repeated uniswap.explore.v1.TimestampedAmount v3 = 2;
     */
    v3: TimestampedAmount[];
    /**
     * @generated from field: repeated uniswap.explore.v1.TimestampedAmount v4 = 3;
     */
    v4: TimestampedAmount[];
    constructor(data?: PartialMessage<DailyProtocolTvl>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.DailyProtocolTvl";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DailyProtocolTvl;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DailyProtocolTvl;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DailyProtocolTvl;
    static equals(a: DailyProtocolTvl | PlainMessage<DailyProtocolTvl> | undefined, b: DailyProtocolTvl | PlainMessage<DailyProtocolTvl> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.VolumeSplit
 */
export declare class VolumeSplit extends Message<VolumeSplit> {
    /**
     * @generated from field: repeated uniswap.explore.v1.TimestampedAmount v2 = 1;
     */
    v2: TimestampedAmount[];
    /**
     * @generated from field: repeated uniswap.explore.v1.TimestampedAmount v3 = 2;
     */
    v3: TimestampedAmount[];
    /**
     * @generated from field: repeated uniswap.explore.v1.TimestampedAmount v4 = 3;
     */
    v4: TimestampedAmount[];
    constructor(data?: PartialMessage<VolumeSplit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.VolumeSplit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VolumeSplit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VolumeSplit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VolumeSplit;
    static equals(a: VolumeSplit | PlainMessage<VolumeSplit> | undefined, b: VolumeSplit | PlainMessage<VolumeSplit> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.HistoricalProtocolVolume
 */
export declare class HistoricalProtocolVolume extends Message<HistoricalProtocolVolume> {
    /**
     * @generated from field: uniswap.explore.v1.VolumeSplit Month = 1;
     */
    Month?: VolumeSplit;
    /**
     * @generated from field: uniswap.explore.v1.VolumeSplit Year = 2;
     */
    Year?: VolumeSplit;
    /**
     * @generated from field: uniswap.explore.v1.VolumeSplit Max = 3;
     */
    Max?: VolumeSplit;
    constructor(data?: PartialMessage<HistoricalProtocolVolume>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.HistoricalProtocolVolume";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoricalProtocolVolume;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoricalProtocolVolume;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoricalProtocolVolume;
    static equals(a: HistoricalProtocolVolume | PlainMessage<HistoricalProtocolVolume> | undefined, b: HistoricalProtocolVolume | PlainMessage<HistoricalProtocolVolume> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.TopTokens
 */
export declare class TopTokens extends Message<TopTokens> {
    /**
     * @generated from field: repeated uniswap.explore.v1.TokenStats hourly = 1;
     */
    hourly: TokenStats[];
    /**
     * @generated from field: repeated uniswap.explore.v1.TokenStats daily = 2;
     */
    daily: TokenStats[];
    /**
     * @generated from field: repeated uniswap.explore.v1.TokenStats weekly = 3;
     */
    weekly: TokenStats[];
    /**
     * @generated from field: repeated uniswap.explore.v1.TokenStats monthly = 4;
     */
    monthly: TokenStats[];
    /**
     * @generated from field: repeated uniswap.explore.v1.TokenStats yearly = 5;
     */
    yearly: TokenStats[];
    constructor(data?: PartialMessage<TopTokens>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.TopTokens";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TopTokens;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TopTokens;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TopTokens;
    static equals(a: TopTokens | PlainMessage<TopTokens> | undefined, b: TopTokens | PlainMessage<TopTokens> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.ExplorerStats
 */
export declare class ExplorerStats extends Message<ExplorerStats> {
    /**
     * @generated from field: uniswap.explore.v1.DailyProtocolTvl daily_protocol_tvl = 1;
     */
    dailyProtocolTvl?: DailyProtocolTvl;
    /**
     * @generated from field: uniswap.explore.v1.HistoricalProtocolVolume historical_protocol_volume = 2;
     */
    historicalProtocolVolume?: HistoricalProtocolVolume;
    /**
     * @generated from field: uniswap.explore.v1.TopTokens top_tokens = 3;
     */
    topTokens?: TopTokens;
    /**
     * @generated from field: repeated uniswap.explore.v1.TokenStats token_stats = 4;
     */
    tokenStats: TokenStats[];
    /**
     * @generated from field: repeated uniswap.explore.v1.PoolStats pool_stats = 5;
     */
    poolStats: PoolStats[];
    /**
     * @generated from field: repeated uniswap.explore.v1.TransactionStats transaction_stats = 6;
     */
    transactionStats: TransactionStats[];
    /**
     * @generated from field: repeated uniswap.explore.v1.PoolStats pool_stats_v2 = 7;
     */
    poolStatsV2: PoolStats[];
    /**
     * @generated from field: repeated uniswap.explore.v1.PoolStats pool_stats_v3 = 8;
     */
    poolStatsV3: PoolStats[];
    /**
     * @generated from field: repeated uniswap.explore.v1.PoolStats pool_stats_v4 = 9;
     */
    poolStatsV4: PoolStats[];
    constructor(data?: PartialMessage<ExplorerStats>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.ExplorerStats";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExplorerStats;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExplorerStats;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExplorerStats;
    static equals(a: ExplorerStats | PlainMessage<ExplorerStats> | undefined, b: ExplorerStats | PlainMessage<ExplorerStats> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.TokenRankingsRequest
 */
export declare class TokenRankingsRequest extends Message<TokenRankingsRequest> {
    /**
     * @generated from field: string chain_id = 1;
     */
    chainId: string;
    /**
     * @generated from field: optional uint32 page_size = 2;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 3;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<TokenRankingsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.TokenRankingsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenRankingsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenRankingsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenRankingsRequest;
    static equals(a: TokenRankingsRequest | PlainMessage<TokenRankingsRequest> | undefined, b: TokenRankingsRequest | PlainMessage<TokenRankingsRequest> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.TokenRankingsResponse
 */
export declare class TokenRankingsResponse extends Message<TokenRankingsResponse> {
    /**
     * @generated from field: map<string, uniswap.explore.v1.TokenRankingsList> token_rankings = 1;
     */
    tokenRankings: {
        [key: string]: TokenRankingsList;
    };
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    constructor(data?: PartialMessage<TokenRankingsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.TokenRankingsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenRankingsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenRankingsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenRankingsResponse;
    static equals(a: TokenRankingsResponse | PlainMessage<TokenRankingsResponse> | undefined, b: TokenRankingsResponse | PlainMessage<TokenRankingsResponse> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.TokenRankingsList
 */
export declare class TokenRankingsList extends Message<TokenRankingsList> {
    /**
     * @generated from field: repeated uniswap.explore.v1.TokenRankingsStat tokens = 1;
     */
    tokens: TokenRankingsStat[];
    constructor(data?: PartialMessage<TokenRankingsList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.TokenRankingsList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenRankingsList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenRankingsList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenRankingsList;
    static equals(a: TokenRankingsList | PlainMessage<TokenRankingsList> | undefined, b: TokenRankingsList | PlainMessage<TokenRankingsList> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.TokenRankingsStat
 */
export declare class TokenRankingsStat extends Message<TokenRankingsStat> {
    /**
     * @generated from field: string chain = 1;
     */
    chain: string;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: optional string name = 3;
     */
    name?: string;
    /**
     * @generated from field: optional string symbol = 4;
     */
    symbol?: string;
    /**
     * @generated from field: optional string logo = 5;
     */
    logo?: string;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount price = 6;
     */
    price?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount fully_diluted_valuation = 7;
     */
    fullyDilutedValuation?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount price_percent_change1_day = 8;
     */
    pricePercentChange1Day?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount volume_1_day = 9;
     */
    volume1Day?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.Amount total_value_locked = 10;
     */
    totalValueLocked?: Amount;
    /**
     * @generated from field: optional uniswap.explore.v1.ProtectionInfo protection_info = 11;
     */
    protectionInfo?: ProtectionInfo;
    /**
     * @generated from field: optional uniswap.explore.v1.FeeData fee_data = 12;
     */
    feeData?: FeeData;
    /**
     * @generated from field: optional int32 decimals = 14;
     */
    decimals?: number;
    /**
     * @generated from field: optional string safety_level = 15;
     */
    safetyLevel?: string;
    constructor(data?: PartialMessage<TokenRankingsStat>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.TokenRankingsStat";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenRankingsStat;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenRankingsStat;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenRankingsStat;
    static equals(a: TokenRankingsStat | PlainMessage<TokenRankingsStat> | undefined, b: TokenRankingsStat | PlainMessage<TokenRankingsStat> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.TokenProject
 */
export declare class TokenProject extends Message<TokenProject> {
    /**
     * @generated from field: optional uniswap.explore.v1.Image logo = 1;
     */
    logo?: Image;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
    /**
     * @generated from field: optional string url = 3;
     */
    url?: string;
    /**
     * @generated from field: optional bool isSpam = 4;
     */
    isSpam?: boolean;
    /**
     * @generated from field: optional string safetyLevel = 5;
     */
    safetyLevel?: string;
    constructor(data?: PartialMessage<TokenProject>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.TokenProject";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenProject;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenProject;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenProject;
    static equals(a: TokenProject | PlainMessage<TokenProject> | undefined, b: TokenProject | PlainMessage<TokenProject> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.Image
 */
export declare class Image extends Message<Image> {
    /**
     * @generated from field: optional string url = 1;
     */
    url?: string;
    constructor(data?: PartialMessage<Image>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.Image";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Image;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Image;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Image;
    static equals(a: Image | PlainMessage<Image> | undefined, b: Image | PlainMessage<Image> | undefined): boolean;
}
/**
 * @generated from message uniswap.explore.v1.UpdateStatsRequest
 */
export declare class UpdateStatsRequest extends Message<UpdateStatsRequest> {
    /**
     * @generated from field: string chain_id = 1;
     */
    chainId: string;
    constructor(data?: PartialMessage<UpdateStatsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "uniswap.explore.v1.UpdateStatsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateStatsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateStatsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateStatsRequest;
    static equals(a: UpdateStatsRequest | PlainMessage<UpdateStatsRequest> | undefined, b: UpdateStatsRequest | PlainMessage<UpdateStatsRequest> | undefined): boolean;
}
