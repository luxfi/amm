import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ProtectionInfo } from "./types_pb.js";
/**
 * Request to fetch all bids by a wallet.
 *
 * @generated from message data.v1.GetBidsByWalletRequest
 */
export declare class GetBidsByWalletRequest extends Message<GetBidsByWalletRequest> {
    /**
     * Wallet address (lowercased, hex with 0x prefix).
     *
     * @generated from field: string wallet_id = 1;
     */
    walletId: string;
    /**
     * Optional: filter by auction id if desired.
     *
     * @generated from field: string auction_address = 2;
     */
    auctionAddress: string;
    /**
     * @generated from field: int32 chain_id = 3;
     */
    chainId: number;
    constructor(data?: PartialMessage<GetBidsByWalletRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetBidsByWalletRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBidsByWalletRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBidsByWalletRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBidsByWalletRequest;
    static equals(a: GetBidsByWalletRequest | PlainMessage<GetBidsByWalletRequest> | undefined, b: GetBidsByWalletRequest | PlainMessage<GetBidsByWalletRequest> | undefined): boolean;
}
/**
 * A single bid resource.
 *
 * @generated from message data.v1.Bid
 */
export declare class Bid extends Message<Bid> {
    /**
     * @generated from field: string bid_id = 1;
     */
    bidId: string;
    /**
     * @generated from field: string auction_id = 2;
     */
    auctionId: string;
    /**
     * @generated from field: string wallet_id = 3;
     */
    walletId: string;
    /**
     * @generated from field: string tx_hash = 4;
     */
    txHash: string;
    /**
     * raw integer (string to avoid uint256 overflow)
     *
     * @generated from field: string amount = 5;
     */
    amount: string;
    /**
     * raw integer (X96 or other format)
     *
     * @generated from field: string max_price = 6;
     */
    maxPrice: string;
    /**
     * ISO 8601 / RFC 3339
     *
     * @generated from field: string created_at = 7;
     */
    createdAt: string;
    /**
     * e.g. "active", "withdrawn", "claimed"
     *
     * @generated from field: string status = 8;
     */
    status: string;
    /**
     * @generated from field: string base_token_initial = 9;
     */
    baseTokenInitial: string;
    /**
     * @generated from field: string currency_spent = 10;
     */
    currencySpent: string;
    constructor(data?: PartialMessage<Bid>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Bid";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Bid;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Bid;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Bid;
    static equals(a: Bid | PlainMessage<Bid> | undefined, b: Bid | PlainMessage<Bid> | undefined): boolean;
}
/**
 * Response containing all bids for a wallet.
 *
 * @generated from message data.v1.GetBidsByWalletResponse
 */
export declare class GetBidsByWalletResponse extends Message<GetBidsByWalletResponse> {
    /**
     * @generated from field: repeated data.v1.Bid bids = 1;
     */
    bids: Bid[];
    /**
     * Pagination token for next page.
     *
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<GetBidsByWalletResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetBidsByWalletResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBidsByWalletResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBidsByWalletResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBidsByWalletResponse;
    static equals(a: GetBidsByWalletResponse | PlainMessage<GetBidsByWalletResponse> | undefined, b: GetBidsByWalletResponse | PlainMessage<GetBidsByWalletResponse> | undefined): boolean;
}
/**
 * Request to fetch bids by auction ID.
 *
 * @generated from message data.v1.GetBidsRequest
 */
export declare class GetBidsRequest extends Message<GetBidsRequest> {
    /**
     * @generated from field: int32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<GetBidsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetBidsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBidsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBidsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBidsRequest;
    static equals(a: GetBidsRequest | PlainMessage<GetBidsRequest> | undefined, b: GetBidsRequest | PlainMessage<GetBidsRequest> | undefined): boolean;
}
/**
 * A single bid concentration point.
 *
 * @generated from message data.v1.BidConcentrationPoint
 */
export declare class BidConcentrationPoint extends Message<BidConcentrationPoint> {
    /**
     * cumulative volume (numeric as string)
     *
     * @generated from field: string volume = 1;
     */
    volume: string;
    /**
     * ISO 8601 timestamp string
     *
     * @generated from field: string updated_at = 2;
     */
    updatedAt: string;
    constructor(data?: PartialMessage<BidConcentrationPoint>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.BidConcentrationPoint";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BidConcentrationPoint;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BidConcentrationPoint;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BidConcentrationPoint;
    static equals(a: BidConcentrationPoint | PlainMessage<BidConcentrationPoint> | undefined, b: BidConcentrationPoint | PlainMessage<BidConcentrationPoint> | undefined): boolean;
}
/**
 * Response containing bids for an auction.
 *
 * @generated from message data.v1.GetBidsResponse
 */
export declare class GetBidsResponse extends Message<GetBidsResponse> {
    /**
     * Map of max_price to bid concentration data
     *
     * @generated from field: map<string, data.v1.BidConcentrationPoint> concentration = 1;
     */
    concentration: {
        [key: string]: BidConcentrationPoint;
    };
    constructor(data?: PartialMessage<GetBidsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetBidsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBidsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBidsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBidsResponse;
    static equals(a: GetBidsResponse | PlainMessage<GetBidsResponse> | undefined, b: GetBidsResponse | PlainMessage<GetBidsResponse> | undefined): boolean;
}
/**
 * Request to fetch auctions.
 *
 * @generated from message data.v1.GetAuctionRequest
 */
export declare class GetAuctionRequest extends Message<GetAuctionRequest> {
    /**
     * @generated from field: int32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<GetAuctionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetAuctionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuctionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuctionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuctionRequest;
    static equals(a: GetAuctionRequest | PlainMessage<GetAuctionRequest> | undefined, b: GetAuctionRequest | PlainMessage<GetAuctionRequest> | undefined): boolean;
}
/**
 * A single auction resource.
 *
 * @generated from message data.v1.Auction
 */
export declare class Auction extends Message<Auction> {
    /**
     * @generated from field: string auction_id = 1;
     */
    auctionId: string;
    /**
     * @generated from field: int32 chain_id = 2;
     */
    chainId: number;
    /**
     * @generated from field: string token_symbol = 3;
     */
    tokenSymbol: string;
    /**
     * @generated from field: string token_address = 4;
     */
    tokenAddress: string;
    /**
     * @generated from field: string creator_address = 5;
     */
    creatorAddress: string;
    /**
     * @generated from field: string start_block = 6;
     */
    startBlock: string;
    /**
     * @generated from field: string end_block = 7;
     */
    endBlock: string;
    /**
     * @generated from field: string total_supply = 8;
     */
    totalSupply: string;
    /**
     * @generated from field: string tick_size = 9;
     */
    tickSize: string;
    /**
     * @generated from field: string creation_block = 10;
     */
    creationBlock: string;
    /**
     * @generated from field: string created_at = 11;
     */
    createdAt: string;
    /**
     * @generated from field: string updated_at = 12;
     */
    updatedAt: string;
    /**
     * @generated from field: string clearing_price = 13;
     */
    clearingPrice: string;
    /**
     * @generated from field: string address = 14;
     */
    address: string;
    /**
     * @generated from field: string amount = 15;
     */
    amount: string;
    /**
     * @generated from field: string currency = 16;
     */
    currency: string;
    /**
     * @generated from field: string tokens_recipient = 17;
     */
    tokensRecipient: string;
    /**
     * @generated from field: string funds_recipient = 18;
     */
    fundsRecipient: string;
    /**
     * @generated from field: string claim_block = 19;
     */
    claimBlock: string;
    /**
     * @generated from field: string validation_hook = 20;
     */
    validationHook: string;
    /**
     * @generated from field: string floor_price = 21;
     */
    floorPrice: string;
    /**
     * @generated from field: string required_currency_raised = 22;
     */
    requiredCurrencyRaised: string;
    /**
     * @generated from field: string auction_steps_data = 23;
     */
    auctionStepsData: string;
    /**
     * null if error on rpc call
     *
     * @generated from field: optional string token_total_supply = 24;
     */
    tokenTotalSupply?: string;
    /**
     * Parsed auction steps
     *
     * @generated from field: repeated data.v1.AuctionStep parsed_auction_steps = 25;
     */
    parsedAuctionSteps: AuctionStep[];
    /**
     * @generated from field: optional string total_bid_volume = 26;
     */
    totalBidVolume?: string;
    /**
     * Blockaid protection info for the auction's underlying token
     *
     * @generated from field: data.v1.ProtectionInfo token_protection_info = 27;
     */
    tokenProtectionInfo?: ProtectionInfo;
    /**
     * USD price of the currency token (for calculating auction USD value)
     *
     * @generated from field: optional string currency_price_usd = 28;
     */
    currencyPriceUsd?: string;
    /**
     * Computed: total_bid_volume * currency_price_usd (convenience field for clients)
     *
     * @generated from field: optional string total_bid_volume_usd = 29;
     */
    totalBidVolumeUsd?: string;
    /**
     * ERC-20 metadata for the auctioned token (fetched via on-chain RPC)
     *
     * @generated from field: optional string token_name = 30;
     */
    tokenName?: string;
    /**
     * @generated from field: optional int32 token_decimals = 31;
     */
    tokenDecimals?: number;
    /**
     * ERC-20 metadata for the currency token (fetched via on-chain RPC, or native defaults for zero address)
     *
     * @generated from field: optional string currency_token_name = 32;
     */
    currencyTokenName?: string;
    /**
     * @generated from field: optional string currency_token_symbol = 33;
     */
    currencyTokenSymbol?: string;
    /**
     * @generated from field: optional int32 currency_token_decimals = 34;
     */
    currencyTokenDecimals?: number;
    /**
     * Whether the auction's token name or symbol contains inappropriate language
     *
     * @generated from field: optional bool is_flagged = 35;
     */
    isFlagged?: boolean;
    /**
     * LBP strategy fields (nullable - only set for auctions created via LBP strategy)
     *
     * @generated from field: optional string lbp_strategy_address = 36;
     */
    lbpStrategyAddress?: string;
    /**
     * @generated from field: optional string pool_key_hash = 37;
     */
    poolKeyHash?: string;
    /**
     * @generated from field: optional string initial_sqrt_price_x96 = 38;
     */
    initialSqrtPriceX96?: string;
    /**
     * LBP migration fields (nullable - only set after post-auction V4 pool migration)
     *
     * @generated from field: optional string lbp_migration_tx_hash = 39;
     */
    lbpMigrationTxHash?: string;
    constructor(data?: PartialMessage<Auction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Auction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Auction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Auction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Auction;
    static equals(a: Auction | PlainMessage<Auction> | undefined, b: Auction | PlainMessage<Auction> | undefined): boolean;
}
/**
 * Response containing auctions.
 *
 * @generated from message data.v1.GetAuctionResponse
 */
export declare class GetAuctionResponse extends Message<GetAuctionResponse> {
    /**
     * @generated from field: repeated data.v1.Auction auctions = 1;
     */
    auctions: Auction[];
    constructor(data?: PartialMessage<GetAuctionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetAuctionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuctionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuctionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuctionResponse;
    static equals(a: GetAuctionResponse | PlainMessage<GetAuctionResponse> | undefined, b: GetAuctionResponse | PlainMessage<GetAuctionResponse> | undefined): boolean;
}
/**
 * Request to fetch the latest checkpoint for an auction.
 *
 * @generated from message data.v1.GetLatestCheckpointRequest
 */
export declare class GetLatestCheckpointRequest extends Message<GetLatestCheckpointRequest> {
    /**
     * @generated from field: int32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<GetLatestCheckpointRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetLatestCheckpointRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestCheckpointRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestCheckpointRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestCheckpointRequest;
    static equals(a: GetLatestCheckpointRequest | PlainMessage<GetLatestCheckpointRequest> | undefined, b: GetLatestCheckpointRequest | PlainMessage<GetLatestCheckpointRequest> | undefined): boolean;
}
/**
 * A single step in the auction's time-weighted pricing curve.
 *
 * @generated from message data.v1.AuctionStep
 */
export declare class AuctionStep extends Message<AuctionStep> {
    /**
     * @generated from field: uint32 mps = 1;
     */
    mps: number;
    /**
     * Block number when this step begins (inclusive)
     *
     * @generated from field: string start_block = 2;
     */
    startBlock: string;
    /**
     * Block number when this step ends (exclusive)
     *
     * @generated from field: string end_block = 3;
     */
    endBlock: string;
    constructor(data?: PartialMessage<AuctionStep>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.AuctionStep";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuctionStep;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuctionStep;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuctionStep;
    static equals(a: AuctionStep | PlainMessage<AuctionStep> | undefined, b: AuctionStep | PlainMessage<AuctionStep> | undefined): boolean;
}
/**
 * A checkpoint for an auction.
 *
 * @generated from message data.v1.Checkpoint
 */
export declare class Checkpoint extends Message<Checkpoint> {
    /**
     * @generated from field: string clearing_price = 1;
     */
    clearingPrice: string;
    /**
     * @generated from field: string currency_raised_at_clearing_price_q96_x7 = 2;
     */
    currencyRaisedAtClearingPriceQ96X7: string;
    /**
     * @generated from field: string cumulative_mps_per_price = 3;
     */
    cumulativeMpsPerPrice: string;
    /**
     * @generated from field: int32 cumulative_mps = 4;
     */
    cumulativeMps: number;
    /**
     * @generated from field: int32 total_bid_count = 5 [deprecated = true];
     * @deprecated
     */
    totalBidCount: number;
    /**
     * @generated from field: string currency_raised = 6 [deprecated = true];
     * @deprecated
     */
    currencyRaised: string;
    /**
     * @generated from field: optional string auction_id = 7;
     */
    auctionId?: string;
    /**
     * @generated from field: optional int32 chain_id = 8;
     */
    chainId?: number;
    /**
     * bigint as string
     *
     * @generated from field: optional string seg_id = 9;
     */
    segId?: string;
    /**
     * bigint as string
     *
     * @generated from field: optional string start_block = 10;
     */
    startBlock?: string;
    /**
     * bigint as string (nullable)
     *
     * @generated from field: optional string end_block = 11;
     */
    endBlock?: string;
    /**
     * ISO 8601 timestamp
     *
     * @generated from field: optional string created_at = 12;
     */
    createdAt?: string;
    /**
     * bigint as string - total tokens cleared
     *
     * @generated from field: string total_cleared = 13 [deprecated = true];
     * @deprecated
     */
    totalCleared: string;
    constructor(data?: PartialMessage<Checkpoint>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Checkpoint";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Checkpoint;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Checkpoint;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Checkpoint;
    static equals(a: Checkpoint | PlainMessage<Checkpoint> | undefined, b: Checkpoint | PlainMessage<Checkpoint> | undefined): boolean;
}
/**
 * Response containing the latest checkpoint.
 *
 * @generated from message data.v1.GetLatestCheckpointResponse
 */
export declare class GetLatestCheckpointResponse extends Message<GetLatestCheckpointResponse> {
    /**
     * @generated from field: data.v1.Checkpoint checkpoint = 1;
     */
    checkpoint?: Checkpoint;
    /**
     * @generated from field: data.v1.Checkpoint simulated_checkpoint = 2;
     */
    simulatedCheckpoint?: Checkpoint;
    /**
     * @generated from field: int32 total_bid_count = 3;
     */
    totalBidCount: number;
    /**
     * @generated from field: string currency_raised = 4;
     */
    currencyRaised: string;
    /**
     * @generated from field: string total_cleared = 5;
     */
    totalCleared: string;
    constructor(data?: PartialMessage<GetLatestCheckpointResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetLatestCheckpointResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestCheckpointResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestCheckpointResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestCheckpointResponse;
    static equals(a: GetLatestCheckpointResponse | PlainMessage<GetLatestCheckpointResponse> | undefined, b: GetLatestCheckpointResponse | PlainMessage<GetLatestCheckpointResponse> | undefined): boolean;
}
/**
 * Request to fetch clearing price history for an auction.
 *
 * @generated from message data.v1.GetClearingPriceHistoryRequest
 */
export declare class GetClearingPriceHistoryRequest extends Message<GetClearingPriceHistoryRequest> {
    /**
     * @generated from field: int32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<GetClearingPriceHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetClearingPriceHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetClearingPriceHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetClearingPriceHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetClearingPriceHistoryRequest;
    static equals(a: GetClearingPriceHistoryRequest | PlainMessage<GetClearingPriceHistoryRequest> | undefined, b: GetClearingPriceHistoryRequest | PlainMessage<GetClearingPriceHistoryRequest> | undefined): boolean;
}
/**
 * A single clearing price change point.
 *
 * @generated from message data.v1.ClearingPriceChange
 */
export declare class ClearingPriceChange extends Message<ClearingPriceChange> {
    /**
     * @generated from field: string clearing_price = 1;
     */
    clearingPrice: string;
    /**
     * ISO 8601 timestamp
     *
     * @generated from field: string created_at = 2;
     */
    createdAt: string;
    /**
     * @generated from field: string start_block = 3;
     */
    startBlock: string;
    constructor(data?: PartialMessage<ClearingPriceChange>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ClearingPriceChange";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearingPriceChange;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearingPriceChange;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearingPriceChange;
    static equals(a: ClearingPriceChange | PlainMessage<ClearingPriceChange> | undefined, b: ClearingPriceChange | PlainMessage<ClearingPriceChange> | undefined): boolean;
}
/**
 * Response containing clearing price history.
 *
 * @generated from message data.v1.GetClearingPriceHistoryResponse
 */
export declare class GetClearingPriceHistoryResponse extends Message<GetClearingPriceHistoryResponse> {
    /**
     * @generated from field: repeated data.v1.ClearingPriceChange changes = 1;
     */
    changes: ClearingPriceChange[];
    constructor(data?: PartialMessage<GetClearingPriceHistoryResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetClearingPriceHistoryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetClearingPriceHistoryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetClearingPriceHistoryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetClearingPriceHistoryResponse;
    static equals(a: GetClearingPriceHistoryResponse | PlainMessage<GetClearingPriceHistoryResponse> | undefined, b: GetClearingPriceHistoryResponse | PlainMessage<GetClearingPriceHistoryResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetAuctionActivityRequest
 */
export declare class GetAuctionActivityRequest extends Message<GetAuctionActivityRequest> {
    /**
     * @generated from field: int32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<GetAuctionActivityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetAuctionActivityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuctionActivityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuctionActivityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuctionActivityRequest;
    static equals(a: GetAuctionActivityRequest | PlainMessage<GetAuctionActivityRequest> | undefined, b: GetAuctionActivityRequest | PlainMessage<GetAuctionActivityRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.AuctionActivityEntry
 */
export declare class AuctionActivityEntry extends Message<AuctionActivityEntry> {
    /**
     * @generated from field: string bid_id = 1;
     */
    bidId: string;
    /**
     * @generated from field: string wallet = 2;
     */
    wallet: string;
    /**
     * @generated from field: string price = 3;
     */
    price: string;
    /**
     * @generated from field: string base_token_initial = 4;
     */
    baseTokenInitial: string;
    /**
     * ISO 8601 timestamp
     *
     * @generated from field: string created_at = 5;
     */
    createdAt: string;
    /**
     * @generated from field: string status = 6;
     */
    status: string;
    constructor(data?: PartialMessage<AuctionActivityEntry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.AuctionActivityEntry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuctionActivityEntry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuctionActivityEntry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuctionActivityEntry;
    static equals(a: AuctionActivityEntry | PlainMessage<AuctionActivityEntry> | undefined, b: AuctionActivityEntry | PlainMessage<AuctionActivityEntry> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetAuctionActivityResponse
 */
export declare class GetAuctionActivityResponse extends Message<GetAuctionActivityResponse> {
    /**
     * @generated from field: repeated data.v1.AuctionActivityEntry activity = 1;
     */
    activity: AuctionActivityEntry[];
    constructor(data?: PartialMessage<GetAuctionActivityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetAuctionActivityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuctionActivityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuctionActivityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuctionActivityResponse;
    static equals(a: GetAuctionActivityResponse | PlainMessage<GetAuctionActivityResponse> | undefined, b: GetAuctionActivityResponse | PlainMessage<GetAuctionActivityResponse> | undefined): boolean;
}
/**
 * Request to fetch checkpoints for an auction
 *
 * @generated from message data.v1.GetCheckpointsRequest
 */
export declare class GetCheckpointsRequest extends Message<GetCheckpointsRequest> {
    /**
     * @generated from field: int32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * Optional: cursor for pagination (clearing_price as string)
     *
     * @generated from field: string price_cursor = 3;
     */
    priceCursor: string;
    constructor(data?: PartialMessage<GetCheckpointsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetCheckpointsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCheckpointsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCheckpointsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCheckpointsRequest;
    static equals(a: GetCheckpointsRequest | PlainMessage<GetCheckpointsRequest> | undefined, b: GetCheckpointsRequest | PlainMessage<GetCheckpointsRequest> | undefined): boolean;
}
/**
 * Response containing checkpoints for an auction
 *
 * @generated from message data.v1.GetCheckpointsResponse
 */
export declare class GetCheckpointsResponse extends Message<GetCheckpointsResponse> {
    /**
     * @generated from field: repeated data.v1.Checkpoint checkpoints = 1;
     */
    checkpoints: Checkpoint[];
    /**
     * Next page token for pagination (next clearing_price)
     *
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<GetCheckpointsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetCheckpointsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCheckpointsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCheckpointsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCheckpointsResponse;
    static equals(a: GetCheckpointsResponse | PlainMessage<GetCheckpointsResponse> | undefined, b: GetCheckpointsResponse | PlainMessage<GetCheckpointsResponse> | undefined): boolean;
}
/**
 * Request to list top auctions by total bid volume.
 *
 * @generated from message data.v1.ListTopAuctionsRequest
 */
export declare class ListTopAuctionsRequest extends Message<ListTopAuctionsRequest> {
    /**
     * Number of auctions to return (default/max TBD)
     *
     * @generated from field: int32 page_size = 1;
     */
    pageSize: number;
    /**
     * Optional filter by chain IDs
     *
     * @generated from field: repeated int32 chain_ids = 2;
     */
    chainIds: number[];
    constructor(data?: PartialMessage<ListTopAuctionsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListTopAuctionsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTopAuctionsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTopAuctionsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTopAuctionsRequest;
    static equals(a: ListTopAuctionsRequest | PlainMessage<ListTopAuctionsRequest> | undefined, b: ListTopAuctionsRequest | PlainMessage<ListTopAuctionsRequest> | undefined): boolean;
}
/**
 * An auction with its total bid volume stats.
 *
 * @generated from message data.v1.AuctionWithStats
 */
export declare class AuctionWithStats extends Message<AuctionWithStats> {
    /**
     * @generated from field: data.v1.Auction auction = 1;
     */
    auction?: Auction;
    /**
     * DEPRECATED: Use auction.total_bid_volume instead. This field is maintained for backwards compatibility only.
     *
     * @generated from field: string total_bid_volume = 2 [deprecated = true];
     * @deprecated
     */
    totalBidVolume: string;
    constructor(data?: PartialMessage<AuctionWithStats>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.AuctionWithStats";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuctionWithStats;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuctionWithStats;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuctionWithStats;
    static equals(a: AuctionWithStats | PlainMessage<AuctionWithStats> | undefined, b: AuctionWithStats | PlainMessage<AuctionWithStats> | undefined): boolean;
}
/**
 * Response containing top auctions ordered by total bid volume.
 *
 * @generated from message data.v1.ListTopAuctionsResponse
 */
export declare class ListTopAuctionsResponse extends Message<ListTopAuctionsResponse> {
    /**
     * @generated from field: repeated data.v1.AuctionWithStats auctions = 1;
     */
    auctions: AuctionWithStats[];
    constructor(data?: PartialMessage<ListTopAuctionsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ListTopAuctionsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListTopAuctionsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListTopAuctionsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListTopAuctionsResponse;
    static equals(a: ListTopAuctionsResponse | PlainMessage<ListTopAuctionsResponse> | undefined, b: ListTopAuctionsResponse | PlainMessage<ListTopAuctionsResponse> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetCheckpointsForBidRequest
 */
export declare class GetCheckpointsForBidRequest extends Message<GetCheckpointsForBidRequest> {
    /**
     * @generated from field: string bid_id = 1;
     */
    bidId: string;
    /**
     * @generated from field: int32 chain_id = 2;
     */
    chainId: number;
    /**
     * @generated from field: string auction_address = 3;
     */
    auctionAddress: string;
    /**
     * @generated from field: string bid_price = 4;
     */
    bidPrice: string;
    constructor(data?: PartialMessage<GetCheckpointsForBidRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetCheckpointsForBidRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCheckpointsForBidRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCheckpointsForBidRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCheckpointsForBidRequest;
    static equals(a: GetCheckpointsForBidRequest | PlainMessage<GetCheckpointsForBidRequest> | undefined, b: GetCheckpointsForBidRequest | PlainMessage<GetCheckpointsForBidRequest> | undefined): boolean;
}
/**
 * @generated from message data.v1.GetCheckpointsForBidResponse
 */
export declare class GetCheckpointsForBidResponse extends Message<GetCheckpointsForBidResponse> {
    /**
     * @generated from field: data.v1.Checkpoint checkpoint_A = 1;
     */
    checkpointA?: Checkpoint;
    /**
     * @generated from field: optional data.v1.Checkpoint checkpoint_B = 2;
     */
    checkpointB?: Checkpoint;
    constructor(data?: PartialMessage<GetCheckpointsForBidResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.GetCheckpointsForBidResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCheckpointsForBidResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCheckpointsForBidResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCheckpointsForBidResponse;
    static equals(a: GetCheckpointsForBidResponse | PlainMessage<GetCheckpointsForBidResponse> | undefined, b: GetCheckpointsForBidResponse | PlainMessage<GetCheckpointsForBidResponse> | undefined): boolean;
}
