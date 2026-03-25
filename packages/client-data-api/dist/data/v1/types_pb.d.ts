import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PlanStatus, PlanStepStatus, SwapType } from "./plan_pb.js";
import { ProtocolVersion } from "./poolTypes_pb.js";
/**
 * @generated from enum data.v1.TokenType
 */
export declare enum TokenType {
    /**
     * @generated from enum value: TOKEN_TYPE_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: TOKEN_TYPE_NATIVE = 1;
     */
    NATIVE = 1,
    /**
     * @generated from enum value: TOKEN_TYPE_ERC20 = 2;
     */
    ERC20 = 2,
    /**
     * @generated from enum value: TOKEN_TYPE_ERC721 = 3;
     */
    ERC721 = 3,
    /**
     * @generated from enum value: TOKEN_TYPE_ERC1155 = 4;
     */
    ERC1155 = 4,
    /**
     * @generated from enum value: TOKEN_TYPE_SPL = 5;
     */
    SPL = 5
}
/**
 * @generated from enum data.v1.SpamCode
 */
export declare enum SpamCode {
    /**
     * @generated from enum value: SPAM_CODE_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: SPAM_CODE_NOT_SPAM = 1;
     */
    NOT_SPAM = 1,
    /**
     * @generated from enum value: SPAM_CODE_SPAM = 2;
     */
    SPAM = 2,
    /**
     * @generated from enum value: SPAM_CODE_SPAM_URL = 3;
     */
    SPAM_URL = 3
}
/**
 * @generated from enum data.v1.SafetyLevel
 */
export declare enum SafetyLevel {
    /**
     * @generated from enum value: SAFETY_LEVEL_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: SAFETY_LEVEL_VERIFIED = 1;
     */
    VERIFIED = 1,
    /**
     * @generated from enum value: SAFETY_LEVEL_MEDIUM_WARNING = 2;
     */
    MEDIUM_WARNING = 2,
    /**
     * @generated from enum value: SAFETY_LEVEL_STRONG_WARNING = 3;
     */
    STRONG_WARNING = 3,
    /**
     * @generated from enum value: SAFETY_LEVEL_BLOCKED = 4;
     */
    BLOCKED = 4
}
/**
 * @generated from enum data.v1.TokenReportEventType
 */
export declare enum TokenReportEventType {
    /**
     * @generated from enum value: TOKEN_REPORT_EVENT_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: TOKEN_REPORT_EVENT_TYPE_FALSE_POSITIVE = 1;
     */
    FALSE_POSITIVE = 1,
    /**
     * @generated from enum value: TOKEN_REPORT_EVENT_TYPE_FALSE_NEGATIVE = 2;
     */
    FALSE_NEGATIVE = 2
}
/**
 * @generated from enum data.v1.Direction
 */
export declare enum Direction {
    /**
     * @generated from enum value: DIRECTION_SELF = 0;
     */
    SELF = 0,
    /**
     * @generated from enum value: DIRECTION_RECEIVE = 1;
     */
    RECEIVE = 1,
    /**
     * @generated from enum value: DIRECTION_SEND = 2;
     */
    SEND = 2
}
/**
 * @generated from enum data.v1.OnChainTransactionLabel
 */
export declare enum OnChainTransactionLabel {
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_APPROVE = 1;
     */
    APPROVE = 1,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_BORROW = 2;
     */
    BORROW = 2,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_BRIDGE = 3;
     */
    BRIDGE = 3,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_CANCEL = 4;
     */
    CANCEL = 4,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_CLAIM = 5;
     */
    CLAIM = 5,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_DEPLOY = 6;
     */
    DEPLOY = 6,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_EXECUTE = 7;
     */
    EXECUTE = 7,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_LEND = 8;
     */
    LEND = 8,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_MINT = 9;
     */
    MINT = 9,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_FIAT_ON_RAMP = 10;
     */
    FIAT_ON_RAMP = 10,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_RECEIVE = 11;
     */
    RECEIVE = 11,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_REPAY = 12;
     */
    REPAY = 12,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_SEND = 13;
     */
    SEND = 13,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_STAKE = 14;
     */
    STAKE = 14,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_SWAP = 15;
     */
    SWAP = 15,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_UNISWAP_X = 16;
     */
    UNISWAP_X = 16,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_TRANSFER = 17;
     */
    TRANSFER = 17,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_UNSTAKE = 18;
     */
    UNSTAKE = 18,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_WITHDRAW = 19;
     */
    WITHDRAW = 19,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_WRAP = 20;
     */
    WRAP = 20,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_UNWRAP = 21;
     */
    UNWRAP = 21,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_DEPOSIT = 22;
     */
    DEPOSIT = 22,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_CREATE_PAIR = 23;
     */
    CREATE_PAIR = 23,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_CREATE_POOL = 24;
     */
    CREATE_POOL = 24,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_INCREASE_LIQUIDITY = 25;
     */
    INCREASE_LIQUIDITY = 25,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_DECREASE_LIQUIDITY = 26;
     */
    DECREASE_LIQUIDITY = 26,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_AUCTION_SUBMIT_BID = 27;
     */
    AUCTION_SUBMIT_BID = 27,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_AUCTION_CLAIM_TOKENS = 28;
     */
    AUCTION_CLAIM_TOKENS = 28,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_AUCTION_EXIT_BID = 29;
     */
    AUCTION_EXIT_BID = 29,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_AUCTION_EXIT_PARTIALLY_FILLED_BID = 30;
     */
    AUCTION_EXIT_PARTIALLY_FILLED_BID = 30,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_LABEL_AUCTION_CLAIM_TOKENS_BATCHED = 31;
     */
    AUCTION_CLAIM_TOKENS_BATCHED = 31
}
/**
 * @generated from enum data.v1.TransactionTypeFilter
 */
export declare enum TransactionTypeFilter {
    /**
     * All types (no filter)
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Swaps (includes UniswapX, excludes wrap/unwrap)
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_SWAP = 1;
     */
    SWAP = 1,
    /**
     * Sends
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_SEND = 2;
     */
    SEND = 2,
    /**
     * Receives
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_RECEIVE = 3;
     */
    RECEIVE = 3,
    /**
     * Wraps (includes both wrap and unwrap)
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_WRAP = 4;
     */
    WRAP = 4,
    /**
     * Approvals
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_APPROVE = 5;
     */
    APPROVE = 5,
    /**
     * Added liquidity (Uniswap deposits)
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_INCREASE_LIQUIDITY = 6;
     */
    INCREASE_LIQUIDITY = 6,
    /**
     * Removed liquidity (Uniswap withdrawals)
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_DECREASE_LIQUIDITY = 7;
     */
    DECREASE_LIQUIDITY = 7,
    /**
     * Claimed fees/rewards
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_CLAIM = 8;
     */
    CLAIM = 8,
    /**
     * Mints
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_MINT = 9;
     */
    MINT = 9,
    /**
     * Pool creations (includes CREATE_PAIR and CREATE_POOL)
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_CREATE_POOL = 10;
     */
    CREATE_POOL = 10,
    /**
     * Limit orders (UniswapX only)
     *
     * @generated from enum value: TRANSACTION_TYPE_FILTER_LIMIT_ORDER = 11;
     */
    LIMIT_ORDER = 11
}
/**
 * @generated from enum data.v1.OnChainTransactionStatus
 */
export declare enum OnChainTransactionStatus {
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_STATUS_PENDING = 0;
     */
    PENDING = 0,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_STATUS_CONFIRMED = 1;
     */
    CONFIRMED = 1,
    /**
     * @generated from enum value: ON_CHAIN_TRANSACTION_STATUS_FAILED = 2;
     */
    FAILED = 2
}
/**
 * @generated from enum data.v1.UniswapXOrderType
 */
export declare enum UniswapXOrderType {
    /**
     * @generated from enum value: UNISWAP_X_ORDER_TYPE_DUTCH = 0;
     */
    DUTCH = 0,
    /**
     * @generated from enum value: UNISWAP_X_ORDER_TYPE_LIMIT = 1;
     */
    LIMIT = 1,
    /**
     * @generated from enum value: UNISWAP_X_ORDER_TYPE_DUTCH_V2 = 2;
     */
    DUTCH_V2 = 2,
    /**
     * @generated from enum value: UNISWAP_X_ORDER_TYPE_PRIORITY = 3;
     */
    PRIORITY = 3
}
/**
 * @generated from enum data.v1.UniswapXTransactionStatus
 */
export declare enum UniswapXTransactionStatus {
    /**
     * @generated from enum value: UNISWAP_X_TRANSACTION_STATUS_OPEN = 0;
     */
    OPEN = 0,
    /**
     * @generated from enum value: UNISWAP_X_TRANSACTION_STATUS_EXPIRED = 1;
     */
    EXPIRED = 1,
    /**
     * @generated from enum value: UNISWAP_X_TRANSACTION_STATUS_ERROR = 2;
     */
    ERROR = 2,
    /**
     * @generated from enum value: UNISWAP_X_TRANSACTION_STATUS_INSUFFICIENT_FUNDS = 3;
     */
    INSUFFICIENT_FUNDS = 3,
    /**
     * @generated from enum value: UNISWAP_X_TRANSACTION_STATUS_FILLED = 4;
     */
    FILLED = 4,
    /**
     * @generated from enum value: UNISWAP_X_TRANSACTION_STATUS_CANCELLED = 5;
     */
    CANCELLED = 5
}
/**
 * @generated from enum data.v1.FiatOnRampTransactionStatus
 */
export declare enum FiatOnRampTransactionStatus {
    /**
     * @generated from enum value: FIAT_ON_RAMP_TRANSACTION_STATUS_FAILED = 0;
     */
    FAILED = 0,
    /**
     * @generated from enum value: FIAT_ON_RAMP_TRANSACTION_STATUS_SETTLED = 1;
     */
    SETTLED = 1,
    /**
     * @generated from enum value: FIAT_ON_RAMP_TRANSACTION_STATUS_PENDING = 2;
     */
    PENDING = 2
}
/**
 * @generated from enum data.v1.ProtectionResult
 */
export declare enum ProtectionResult {
    /**
     * @generated from enum value: PROTECTION_RESULT_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: PROTECTION_RESULT_BENIGN = 1;
     */
    BENIGN = 1,
    /**
     * @generated from enum value: PROTECTION_RESULT_MALICIOUS = 2;
     */
    MALICIOUS = 2,
    /**
     * @generated from enum value: PROTECTION_RESULT_SPAM = 3;
     */
    SPAM = 3,
    /**
     * @generated from enum value: PROTECTION_RESULT_WARNING = 4;
     */
    WARNING = 4
}
/**
 * @generated from enum data.v1.AttackType
 */
export declare enum AttackType {
    /**
     * @generated from enum value: ATTACK_TYPE_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: ATTACK_TYPE_AIRDROP_PATTERN = 1;
     */
    AIRDROP_PATTERN = 1,
    /**
     * @generated from enum value: ATTACK_TYPE_DYNAMIC_ANALYSIS = 2;
     */
    DYNAMIC_ANALYSIS = 2,
    /**
     * @generated from enum value: ATTACK_TYPE_HIGH_FEES = 3;
     */
    HIGH_FEES = 3,
    /**
     * @generated from enum value: ATTACK_TYPE_IMPERSONATOR = 4;
     */
    IMPERSONATOR = 4,
    /**
     * @generated from enum value: ATTACK_TYPE_INORGANIC_VOLUME = 5;
     */
    INORGANIC_VOLUME = 5,
    /**
     * @generated from enum value: ATTACK_TYPE_KNOWN_MALICIOUS = 6;
     */
    KNOWN_MALICIOUS = 6,
    /**
     * @generated from enum value: ATTACK_TYPE_METADATA = 7;
     */
    METADATA = 7,
    /**
     * @generated from enum value: ATTACK_TYPE_RUGPULL = 8;
     */
    RUGPULL = 8,
    /**
     * @generated from enum value: ATTACK_TYPE_HONEYPOT = 9;
     */
    HONEYPOT = 9,
    /**
     * @generated from enum value: ATTACK_TYPE_SPAM_TEXT = 10;
     */
    SPAM_TEXT = 10,
    /**
     * @generated from enum value: ATTACK_TYPE_STATIC_CODE_SIGNATURE = 11;
     */
    STATIC_CODE_SIGNATURE = 11,
    /**
     * @generated from enum value: ATTACK_TYPE_UNSTABLE_TOKEN_PRICE = 12;
     */
    UNSTABLE_TOKEN_PRICE = 12
}
/**
 * @generated from message data.v1.Token
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
     * @generated from field: data.v1.TokenType type = 6;
     */
    type: TokenType;
    /**
     * @generated from field: data.v1.TokenMetadata metadata = 7;
     */
    metadata?: TokenMetadata;
    /**
     * @generated from field: data.v1.TokenStats stats = 8;
     */
    stats?: TokenStats;
    constructor(data?: PartialMessage<Token>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Token";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Token;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Token;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Token;
    static equals(a: Token | PlainMessage<Token> | undefined, b: Token | PlainMessage<Token> | undefined): boolean;
}
/**
 * @generated from message data.v1.TokenMetadata
 */
export declare class TokenMetadata extends Message<TokenMetadata> {
    /**
     * @generated from field: string project_name = 1;
     */
    projectName: string;
    /**
     * @generated from field: string logo_url = 2;
     */
    logoUrl: string;
    /**
     * @generated from field: data.v1.ProtectionInfo protection_info = 3;
     */
    protectionInfo?: ProtectionInfo;
    /**
     * @generated from field: data.v1.FeeData fee_data = 4;
     */
    feeData?: FeeData;
    /**
     * @generated from field: data.v1.SafetyLevel safety_level = 5;
     */
    safetyLevel: SafetyLevel;
    /**
     * @generated from field: data.v1.SpamCode spam_code = 6;
     */
    spamCode: SpamCode;
    /**
     * @generated from field: bool is_bridged = 7;
     */
    isBridged: boolean;
    constructor(data?: PartialMessage<TokenMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.TokenMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenMetadata;
    static equals(a: TokenMetadata | PlainMessage<TokenMetadata> | undefined, b: TokenMetadata | PlainMessage<TokenMetadata> | undefined): boolean;
}
/**
 * @generated from message data.v1.ProtectionInfo
 */
export declare class ProtectionInfo extends Message<ProtectionInfo> {
    /**
     * @generated from field: data.v1.ProtectionResult result = 1;
     */
    result: ProtectionResult;
    /**
     * @generated from field: repeated data.v1.AttackType attack_types = 2;
     */
    attackTypes: AttackType[];
    constructor(data?: PartialMessage<ProtectionInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ProtectionInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtectionInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtectionInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtectionInfo;
    static equals(a: ProtectionInfo | PlainMessage<ProtectionInfo> | undefined, b: ProtectionInfo | PlainMessage<ProtectionInfo> | undefined): boolean;
}
/**
 * TODO(DAT-1081): dedupe these for the frontend potentially
 *
 * @generated from message data.v1.FeeData
 */
export declare class FeeData extends Message<FeeData> {
    /**
     * @generated from field: data.v1.Blockaid blockaid = 1;
     */
    blockaid?: Blockaid;
    /**
     * @generated from field: data.v1.FeeDetector fee_detector = 2;
     */
    feeDetector?: FeeDetector;
    constructor(data?: PartialMessage<FeeData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.FeeData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeData;
    static equals(a: FeeData | PlainMessage<FeeData> | undefined, b: FeeData | PlainMessage<FeeData> | undefined): boolean;
}
/**
 * @generated from message data.v1.Blockaid
 */
export declare class Blockaid extends Message<Blockaid> {
    /**
     * @generated from field: double buy = 1;
     */
    buy: number;
    /**
     * @generated from field: double sell = 2;
     */
    sell: number;
    /**
     * @generated from field: double transfer = 3;
     */
    transfer: number;
    constructor(data?: PartialMessage<Blockaid>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Blockaid";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Blockaid;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Blockaid;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Blockaid;
    static equals(a: Blockaid | PlainMessage<Blockaid> | undefined, b: Blockaid | PlainMessage<Blockaid> | undefined): boolean;
}
/**
 * @generated from message data.v1.FeeDetector
 */
export declare class FeeDetector extends Message<FeeDetector> {
    /**
     * @generated from field: string buy_fee_bps = 1;
     */
    buyFeeBps: string;
    /**
     * @generated from field: string sell_fee_bps = 2;
     */
    sellFeeBps: string;
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
    constructor(data?: PartialMessage<FeeDetector>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.FeeDetector";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeDetector;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeDetector;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeDetector;
    static equals(a: FeeDetector | PlainMessage<FeeDetector> | undefined, b: FeeDetector | PlainMessage<FeeDetector> | undefined): boolean;
}
/**
 * @generated from message data.v1.PortfolioValueModifier
 */
export declare class PortfolioValueModifier extends Message<PortfolioValueModifier> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: repeated data.v1.Contract include_overrides = 2;
     */
    includeOverrides: Contract[];
    /**
     * @generated from field: repeated data.v1.Contract exclude_overrides = 3;
     */
    excludeOverrides: Contract[];
    /**
     * @generated from field: bool include_small_balances = 4;
     */
    includeSmallBalances: boolean;
    /**
     * @generated from field: bool include_spam_tokens = 5;
     */
    includeSpamTokens: boolean;
    /**
     * @generated from field: uint32 balance_limit = 6;
     */
    balanceLimit: number;
    constructor(data?: PartialMessage<PortfolioValueModifier>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.PortfolioValueModifier";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PortfolioValueModifier;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PortfolioValueModifier;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PortfolioValueModifier;
    static equals(a: PortfolioValueModifier | PlainMessage<PortfolioValueModifier> | undefined, b: PortfolioValueModifier | PlainMessage<PortfolioValueModifier> | undefined): boolean;
}
/**
 * @generated from message data.v1.Portfolio
 */
export declare class Portfolio extends Message<Portfolio> {
    /**
     * @generated from field: repeated data.v1.Balance balances = 1;
     */
    balances: Balance[];
    /**
     * @generated from field: double total_value_usd = 2;
     */
    totalValueUsd: number;
    /**
     * @generated from field: double total_value_absolute_change_1d = 3;
     */
    totalValueAbsoluteChange1d: number;
    /**
     * @generated from field: double total_value_percent_change_1d = 4;
     */
    totalValuePercentChange1d: number;
    /**
     * Populated instead of `balances` when multichain=true in GetPortfolioRequest
     *
     * @generated from field: repeated data.v1.MultichainBalance multichain_balances = 5;
     */
    multichainBalances: MultichainBalance[];
    constructor(data?: PartialMessage<Portfolio>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Portfolio";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Portfolio;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Portfolio;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Portfolio;
    static equals(a: Portfolio | PlainMessage<Portfolio> | undefined, b: Portfolio | PlainMessage<Portfolio> | undefined): boolean;
}
/**
 * @generated from message data.v1.Balance
 */
export declare class Balance extends Message<Balance> {
    /**
     * @generated from field: data.v1.Token token = 1;
     */
    token?: Token;
    /**
     * @generated from field: data.v1.Amount amount = 2;
     */
    amount?: Amount;
    /**
     * @generated from field: double price_usd = 3;
     */
    priceUsd: number;
    /**
     * @generated from field: double price_percent_change_1d = 4;
     */
    pricePercentChange1d: number;
    /**
     * @generated from field: double value_usd = 5;
     */
    valueUsd: number;
    /**
     * @generated from field: bool is_hidden = 6;
     */
    isHidden: boolean;
    constructor(data?: PartialMessage<Balance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Balance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Balance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Balance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Balance;
    static equals(a: Balance | PlainMessage<Balance> | undefined, b: Balance | PlainMessage<Balance> | undefined): boolean;
}
/**
 * Chain-specific balance within a multichain token group
 *
 * @generated from message data.v1.ChainBalance
 */
export declare class ChainBalance extends Message<ChainBalance> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: uint32 decimals = 3;
     */
    decimals: number;
    /**
     * @generated from field: data.v1.Amount amount = 4;
     */
    amount?: Amount;
    /**
     * @generated from field: double value_usd = 5;
     */
    valueUsd: number;
    constructor(data?: PartialMessage<ChainBalance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ChainBalance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainBalance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainBalance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainBalance;
    static equals(a: ChainBalance | PlainMessage<ChainBalance> | undefined, b: ChainBalance | PlainMessage<ChainBalance> | undefined): boolean;
}
/**
 * A token aggregated across multiple chains
 *
 * @generated from message data.v1.MultichainBalance
 */
export declare class MultichainBalance extends Message<MultichainBalance> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string symbol = 2;
     */
    symbol: string;
    /**
     * @generated from field: data.v1.TokenType type = 3;
     */
    type: TokenType;
    /**
     * @generated from field: string project_name = 4;
     */
    projectName: string;
    /**
     * @generated from field: string logo_url = 5;
     */
    logoUrl: string;
    /**
     * @generated from field: data.v1.ProtectionInfo protection_info = 6;
     */
    protectionInfo?: ProtectionInfo;
    /**
     * @generated from field: data.v1.FeeData fee_data = 7;
     */
    feeData?: FeeData;
    /**
     * @generated from field: data.v1.SafetyLevel safety_level = 8;
     */
    safetyLevel: SafetyLevel;
    /**
     * @generated from field: data.v1.SpamCode spam_code = 9;
     */
    spamCode: SpamCode;
    /**
     * @generated from field: data.v1.Amount total_amount = 10;
     */
    totalAmount?: Amount;
    /**
     * @generated from field: double price_usd = 11;
     */
    priceUsd: number;
    /**
     * @generated from field: double price_percent_change_1d = 12;
     */
    pricePercentChange1d: number;
    /**
     * @generated from field: double total_value_usd = 13;
     */
    totalValueUsd: number;
    /**
     * @generated from field: bool is_hidden = 14;
     */
    isHidden: boolean;
    /**
     * @generated from field: repeated data.v1.ChainBalance chain_balances = 15;
     */
    chainBalances: ChainBalance[];
    constructor(data?: PartialMessage<MultichainBalance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.MultichainBalance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MultichainBalance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MultichainBalance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MultichainBalance;
    static equals(a: MultichainBalance | PlainMessage<MultichainBalance> | undefined, b: MultichainBalance | PlainMessage<MultichainBalance> | undefined): boolean;
}
/**
 * @generated from message data.v1.Amount
 */
export declare class Amount extends Message<Amount> {
    /**
     * @generated from field: string raw = 1;
     */
    raw: string;
    /**
     * @generated from field: double amount = 2;
     */
    amount: number;
    constructor(data?: PartialMessage<Amount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Amount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Amount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Amount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Amount;
    static equals(a: Amount | PlainMessage<Amount> | undefined, b: Amount | PlainMessage<Amount> | undefined): boolean;
}
/**
 * Chain-specific token info within a multichain token group
 *
 * @generated from message data.v1.ChainToken
 */
export declare class ChainToken extends Message<ChainToken> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: uint32 decimals = 3;
     */
    decimals: number;
    /**
     * @generated from field: bool is_bridged = 4;
     */
    isBridged: boolean;
    /**
     * @generated from field: data.v1.ChainTokenStats stats = 5;
     */
    stats?: ChainTokenStats;
    constructor(data?: PartialMessage<ChainToken>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ChainToken";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainToken;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainToken;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainToken;
    static equals(a: ChainToken | PlainMessage<ChainToken> | undefined, b: ChainToken | PlainMessage<ChainToken> | undefined): boolean;
}
/**
 * @generated from message data.v1.ChainTokenStats
 */
export declare class ChainTokenStats extends Message<ChainTokenStats> {
    /**
     * @generated from field: optional double volume_1h = 1;
     */
    volume1h?: number;
    /**
     * @generated from field: optional double volume_1d = 2;
     */
    volume1d?: number;
    /**
     * @generated from field: optional double volume_7d = 3;
     */
    volume7d?: number;
    /**
     * @generated from field: optional double volume_30d = 4;
     */
    volume30d?: number;
    /**
     * @generated from field: optional double volume_1y = 5;
     */
    volume1y?: number;
    constructor(data?: PartialMessage<ChainTokenStats>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ChainTokenStats";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainTokenStats;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainTokenStats;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainTokenStats;
    static equals(a: ChainTokenStats | PlainMessage<ChainTokenStats> | undefined, b: ChainTokenStats | PlainMessage<ChainTokenStats> | undefined): boolean;
}
/**
 * A token aggregated across multiple chains
 *
 * @generated from message data.v1.MultichainToken
 */
export declare class MultichainToken extends Message<MultichainToken> {
    /**
     * @generated from field: string multichain_id = 1;
     */
    multichainId: string;
    /**
     * @generated from field: string symbol = 2;
     */
    symbol: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: data.v1.TokenType type = 4;
     */
    type: TokenType;
    /**
     * @generated from field: string project_name = 5;
     */
    projectName: string;
    /**
     * @generated from field: string logo_url = 6;
     */
    logoUrl: string;
    /**
     * @generated from field: data.v1.ProtectionInfo protection_info = 7;
     */
    protectionInfo?: ProtectionInfo;
    /**
     * @generated from field: data.v1.FeeData fee_data = 8;
     */
    feeData?: FeeData;
    /**
     * @generated from field: data.v1.SafetyLevel safety_level = 9;
     */
    safetyLevel: SafetyLevel;
    /**
     * @generated from field: data.v1.SpamCode spam_code = 10;
     */
    spamCode: SpamCode;
    /**
     * @generated from field: data.v1.TokenStats stats = 11;
     */
    stats?: TokenStats;
    /**
     * @generated from field: repeated data.v1.ChainToken chain_tokens = 12;
     */
    chainTokens: ChainToken[];
    constructor(data?: PartialMessage<MultichainToken>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.MultichainToken";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MultichainToken;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MultichainToken;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MultichainToken;
    static equals(a: MultichainToken | PlainMessage<MultichainToken> | undefined, b: MultichainToken | PlainMessage<MultichainToken> | undefined): boolean;
}
/**
 * @generated from message data.v1.Contract
 */
export declare class Contract extends Message<Contract> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    constructor(data?: PartialMessage<Contract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Contract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Contract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Contract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Contract;
    static equals(a: Contract | PlainMessage<Contract> | undefined, b: Contract | PlainMessage<Contract> | undefined): boolean;
}
/**
 * @generated from message data.v1.Nft
 */
export declare class Nft extends Message<Nft> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: string token_id = 3;
     */
    tokenId: string;
    /**
     * @generated from field: string name = 4;
     */
    name: string;
    /**
     * @generated from field: string collection_name = 5;
     */
    collectionName: string;
    /**
     * @generated from field: data.v1.TokenType type = 6;
     */
    type: TokenType;
    /**
     * @generated from field: string image_url = 7;
     */
    imageUrl: string;
    /**
     * @generated from field: bool is_spam = 8;
     */
    isSpam: boolean;
    constructor(data?: PartialMessage<Nft>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Nft";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Nft;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Nft;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Nft;
    static equals(a: Nft | PlainMessage<Nft> | undefined, b: Nft | PlainMessage<Nft> | undefined): boolean;
}
/**
 * @generated from message data.v1.Transaction
 */
export declare class Transaction extends Message<Transaction> {
    /**
     * @generated from oneof data.v1.Transaction.transaction
     */
    transaction: {
        /**
         * @generated from field: data.v1.OnChainTransaction on_chain = 1;
         */
        value: OnChainTransaction;
        case: "onChain";
    } | {
        /**
         * @generated from field: data.v1.UniswapXTransaction uniswap_x = 2;
         */
        value: UniswapXTransaction;
        case: "uniswapX";
    } | {
        /**
         * @generated from field: data.v1.FiatOnRampTransaction fiat_on_ramp = 3;
         */
        value: FiatOnRampTransaction;
        case: "fiatOnRamp";
    } | {
        /**
         * @generated from field: data.v1.PlanTransaction plan = 4;
         */
        value: PlanTransaction;
        case: "plan";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<Transaction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Transaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transaction;
    static equals(a: Transaction | PlainMessage<Transaction> | undefined, b: Transaction | PlainMessage<Transaction> | undefined): boolean;
}
/**
 * @generated from message data.v1.OnChainTransaction
 */
export declare class OnChainTransaction extends Message<OnChainTransaction> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: uint32 block_number = 2;
     */
    blockNumber: number;
    /**
     * @generated from field: uint64 timestamp_millis = 3;
     */
    timestampMillis: bigint;
    /**
     * @generated from field: string transaction_hash = 4;
     */
    transactionHash: string;
    /**
     * @generated from field: string from = 5;
     */
    from: string;
    /**
     * @generated from field: string to = 6;
     */
    to: string;
    /**
     * @generated from field: repeated data.v1.Transfer transfers = 7;
     */
    transfers: Transfer[];
    /**
     * @generated from field: repeated data.v1.Approval approvals = 8;
     */
    approvals: Approval[];
    /**
     * @generated from field: data.v1.OnChainTransactionLabel label = 9;
     */
    label: OnChainTransactionLabel;
    /**
     * @generated from field: data.v1.OnChainTransactionStatus status = 10;
     */
    status: OnChainTransactionStatus;
    /**
     * @generated from field: optional data.v1.ProtocolMetadata protocol = 11;
     */
    protocol?: ProtocolMetadata;
    /**
     * @generated from field: data.v1.TransactionFee fee = 12;
     */
    fee?: TransactionFee;
    /**
     * @generated from field: optional data.v1.Paymaster paymaster = 13;
     */
    paymaster?: Paymaster;
    constructor(data?: PartialMessage<OnChainTransaction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.OnChainTransaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnChainTransaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnChainTransaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnChainTransaction;
    static equals(a: OnChainTransaction | PlainMessage<OnChainTransaction> | undefined, b: OnChainTransaction | PlainMessage<OnChainTransaction> | undefined): boolean;
}
/**
 * @generated from message data.v1.Transfer
 */
export declare class Transfer extends Message<Transfer> {
    /**
     * @generated from field: data.v1.Direction direction = 1;
     */
    direction: Direction;
    /**
     * @generated from field: string from = 2;
     */
    from: string;
    /**
     * @generated from field: string to = 3;
     */
    to: string;
    /**
     * @generated from oneof data.v1.Transfer.asset
     */
    asset: {
        /**
         * @generated from field: data.v1.Token token = 4;
         */
        value: Token;
        case: "token";
    } | {
        /**
         * @generated from field: data.v1.Nft nft = 5;
         */
        value: Nft;
        case: "nft";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: data.v1.Amount amount = 6;
     */
    amount?: Amount;
    constructor(data?: PartialMessage<Transfer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Transfer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transfer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transfer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transfer;
    static equals(a: Transfer | PlainMessage<Transfer> | undefined, b: Transfer | PlainMessage<Transfer> | undefined): boolean;
}
/**
 * @generated from message data.v1.Approval
 */
export declare class Approval extends Message<Approval> {
    /**
     * @generated from field: string approved_address = 1;
     */
    approvedAddress: string;
    /**
     * @generated from oneof data.v1.Approval.asset
     */
    asset: {
        /**
         * @generated from field: data.v1.Token token = 2;
         */
        value: Token;
        case: "token";
    } | {
        /**
         * @generated from field: data.v1.Nft nft = 3;
         */
        value: Nft;
        case: "nft";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: data.v1.Amount amount = 4;
     */
    amount?: Amount;
    constructor(data?: PartialMessage<Approval>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Approval";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Approval;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Approval;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Approval;
    static equals(a: Approval | PlainMessage<Approval> | undefined, b: Approval | PlainMessage<Approval> | undefined): boolean;
}
/**
 * @generated from message data.v1.ProtocolMetadata
 */
export declare class ProtocolMetadata extends Message<ProtocolMetadata> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string logo_url = 2;
     */
    logoUrl: string;
    constructor(data?: PartialMessage<ProtocolMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ProtocolMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProtocolMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProtocolMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProtocolMetadata;
    static equals(a: ProtocolMetadata | PlainMessage<ProtocolMetadata> | undefined, b: ProtocolMetadata | PlainMessage<ProtocolMetadata> | undefined): boolean;
}
/**
 * @generated from message data.v1.UniswapXTransaction
 */
export declare class UniswapXTransaction extends Message<UniswapXTransaction> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: uint64 timestamp_millis = 2;
     */
    timestampMillis: bigint;
    /**
     * @generated from field: string offerer = 3;
     */
    offerer: string;
    /**
     * @generated from field: string order_hash = 4;
     */
    orderHash: string;
    /**
     * @generated from field: data.v1.Token input_token = 5;
     */
    inputToken?: Token;
    /**
     * @generated from field: data.v1.Amount input_token_amount = 6;
     */
    inputTokenAmount?: Amount;
    /**
     * @generated from field: data.v1.Token output_token = 7;
     */
    outputToken?: Token;
    /**
     * @generated from field: data.v1.Amount output_token_amount = 8;
     */
    outputTokenAmount?: Amount;
    /**
     * @generated from field: uint64 expiry_millis = 9;
     */
    expiryMillis: bigint;
    /**
     * @generated from field: string encoded_order = 10;
     */
    encodedOrder: string;
    /**
     * @generated from field: data.v1.UniswapXOrderType order_type = 11;
     */
    orderType: UniswapXOrderType;
    /**
     * @generated from field: data.v1.UniswapXTransactionStatus status = 12;
     */
    status: UniswapXTransactionStatus;
    constructor(data?: PartialMessage<UniswapXTransaction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.UniswapXTransaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UniswapXTransaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UniswapXTransaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UniswapXTransaction;
    static equals(a: UniswapXTransaction | PlainMessage<UniswapXTransaction> | undefined, b: UniswapXTransaction | PlainMessage<UniswapXTransaction> | undefined): boolean;
}
/**
 * @generated from message data.v1.FiatOnRampTransaction
 */
export declare class FiatOnRampTransaction extends Message<FiatOnRampTransaction> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: uint64 timestamp_millis = 2;
     */
    timestampMillis: bigint;
    /**
     * @generated from field: string wallet_address = 3;
     */
    walletAddress: string;
    /**
     * @generated from field: data.v1.Token token = 4;
     */
    token?: Token;
    /**
     * @generated from field: data.v1.Amount token_amount = 5;
     */
    tokenAmount?: Amount;
    /**
     * @generated from field: string fiat_currency = 6;
     */
    fiatCurrency: string;
    /**
     * @generated from field: double fiat_amount = 7;
     */
    fiatAmount: number;
    /**
     * @generated from field: data.v1.OnRampServiceProvider service_provider = 8;
     */
    serviceProvider?: OnRampServiceProvider;
    /**
     * @generated from field: string transaction_reference_id = 9;
     */
    transactionReferenceId: string;
    /**
     * @generated from field: string external_session_id = 10;
     */
    externalSessionId: string;
    /**
     * @generated from field: double provider_fee = 11;
     */
    providerFee: number;
    /**
     * @generated from field: double total_fee = 12;
     */
    totalFee: number;
    /**
     * @generated from field: data.v1.FiatOnRampTransactionStatus status = 13;
     */
    status: FiatOnRampTransactionStatus;
    /**
     * @generated from field: string transaction_hash = 14;
     */
    transactionHash: string;
    /**
     * @generated from field: data.v1.TransactionFee transaction_fee = 15;
     */
    transactionFee?: TransactionFee;
    constructor(data?: PartialMessage<FiatOnRampTransaction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.FiatOnRampTransaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FiatOnRampTransaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FiatOnRampTransaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FiatOnRampTransaction;
    static equals(a: FiatOnRampTransaction | PlainMessage<FiatOnRampTransaction> | undefined, b: FiatOnRampTransaction | PlainMessage<FiatOnRampTransaction> | undefined): boolean;
}
/**
 * @generated from message data.v1.OnRampServiceProvider
 */
export declare class OnRampServiceProvider extends Message<OnRampServiceProvider> {
    /**
     * @generated from field: string service_provider = 1;
     */
    serviceProvider: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string url = 3;
     */
    url: string;
    /**
     * @generated from field: string logo_light_url = 4;
     */
    logoLightUrl: string;
    /**
     * @generated from field: string logo_dark_url = 5;
     */
    logoDarkUrl: string;
    /**
     * @generated from field: string support_url = 6;
     */
    supportUrl: string;
    constructor(data?: PartialMessage<OnRampServiceProvider>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.OnRampServiceProvider";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OnRampServiceProvider;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OnRampServiceProvider;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OnRampServiceProvider;
    static equals(a: OnRampServiceProvider | PlainMessage<OnRampServiceProvider> | undefined, b: OnRampServiceProvider | PlainMessage<OnRampServiceProvider> | undefined): boolean;
}
/**
 * @generated from message data.v1.PlanTransaction
 */
export declare class PlanTransaction extends Message<PlanTransaction> {
    /**
     * @generated from field: string plan_id = 1;
     */
    planId: string;
    /**
     * @generated from field: uint64 timestamp_millis = 2;
     */
    timestampMillis: bigint;
    /**
     * @generated from field: data.v1.PlanStatus status = 3;
     */
    status: PlanStatus;
    /**
     * @generated from field: repeated data.v1.PlanActivity activities = 4;
     */
    activities: PlanActivity[];
    /**
     * @generated from field: repeated data.v1.TokenAmount assets_in = 5;
     */
    assetsIn: TokenAmount[];
    /**
     * @generated from field: repeated data.v1.TokenAmount assets_out = 6;
     */
    assetsOut: TokenAmount[];
    /**
     * @generated from field: uint64 created_at_millis = 7;
     */
    createdAtMillis: bigint;
    /**
     * @generated from field: optional uint64 updated_at_millis = 8;
     */
    updatedAtMillis?: bigint;
    /**
     * @generated from field: optional uint64 completed_at_millis = 9;
     */
    completedAtMillis?: bigint;
    /**
     * @generated from field: optional uint64 duration_millis = 10;
     */
    durationMillis?: bigint;
    /**
     * @generated from field: string swapper = 11;
     */
    swapper: string;
    /**
     * @generated from field: string recipient = 12;
     */
    recipient: string;
    /**
     * @generated from field: repeated string transaction_hashes = 13;
     */
    transactionHashes: string[];
    /**
     * @generated from field: optional string gas_fee = 14;
     */
    gasFee?: string;
    /**
     * @generated from field: optional uint64 last_user_action_at_millis = 15;
     */
    lastUserActionAtMillis?: bigint;
    constructor(data?: PartialMessage<PlanTransaction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.PlanTransaction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlanTransaction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlanTransaction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlanTransaction;
    static equals(a: PlanTransaction | PlainMessage<PlanTransaction> | undefined, b: PlanTransaction | PlainMessage<PlanTransaction> | undefined): boolean;
}
/**
 * @generated from message data.v1.PlanActivity
 */
export declare class PlanActivity extends Message<PlanActivity> {
    /**
     * @generated from field: uint32 step_index = 1;
     */
    stepIndex: number;
    /**
     * @generated from field: data.v1.SwapType swap_type = 2;
     */
    swapType: SwapType;
    /**
     * @generated from field: optional data.v1.Token token_in = 3;
     */
    tokenIn?: Token;
    /**
     * @generated from field: optional data.v1.Amount token_in_amount = 4;
     */
    tokenInAmount?: Amount;
    /**
     * @generated from field: optional data.v1.Token token_out = 5;
     */
    tokenOut?: Token;
    /**
     * @generated from field: optional data.v1.Amount token_out_amount = 6;
     */
    tokenOutAmount?: Amount;
    /**
     * @generated from field: data.v1.PlanStepStatus status = 7;
     */
    status: PlanStepStatus;
    /**
     * @generated from field: optional string transaction_hash = 8;
     */
    transactionHash?: string;
    /**
     * @generated from field: optional uint32 chain_id = 9;
     */
    chainId?: number;
    /**
     * @generated from field: optional string gas_fee = 10;
     */
    gasFee?: string;
    constructor(data?: PartialMessage<PlanActivity>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.PlanActivity";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlanActivity;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlanActivity;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlanActivity;
    static equals(a: PlanActivity | PlainMessage<PlanActivity> | undefined, b: PlanActivity | PlainMessage<PlanActivity> | undefined): boolean;
}
/**
 * @generated from message data.v1.TokenAmount
 */
export declare class TokenAmount extends Message<TokenAmount> {
    /**
     * @generated from field: data.v1.Token token = 1;
     */
    token?: Token;
    /**
     * @generated from field: data.v1.Amount amount = 2;
     */
    amount?: Amount;
    constructor(data?: PartialMessage<TokenAmount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.TokenAmount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenAmount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenAmount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenAmount;
    static equals(a: TokenAmount | PlainMessage<TokenAmount> | undefined, b: TokenAmount | PlainMessage<TokenAmount> | undefined): boolean;
}
/**
 * @generated from message data.v1.TransactionFee
 */
export declare class TransactionFee extends Message<TransactionFee> {
    /**
     * @generated from field: data.v1.Amount amount = 1;
     */
    amount?: Amount;
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
    constructor(data?: PartialMessage<TransactionFee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.TransactionFee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransactionFee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransactionFee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransactionFee;
    static equals(a: TransactionFee | PlainMessage<TransactionFee> | undefined, b: TransactionFee | PlainMessage<TransactionFee> | undefined): boolean;
}
/**
 * @generated from message data.v1.PoolStats
 */
export declare class PoolStats extends Message<PoolStats> {
    /**
     * @generated from field: optional double tvl = 1;
     */
    tvl?: number;
    /**
     * @generated from field: optional double volume_1d = 2;
     */
    volume1d?: number;
    /**
     * @generated from field: optional double volume_30d = 3;
     */
    volume30d?: number;
    /**
     * @generated from field: optional float apr = 4;
     */
    apr?: number;
    /**
     * @generated from field: optional float reward_apr = 5;
     */
    rewardApr?: number;
    /**
     * @generated from field: optional float total_apr = 6;
     */
    totalApr?: number;
    constructor(data?: PartialMessage<PoolStats>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.PoolStats";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PoolStats;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PoolStats;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PoolStats;
    static equals(a: PoolStats | PlainMessage<PoolStats> | undefined, b: PoolStats | PlainMessage<PoolStats> | undefined): boolean;
}
/**
 * @generated from message data.v1.Pool
 */
export declare class Pool extends Message<Pool> {
    /**
     * @generated from field: uint32 chain_id = 1;
     */
    chainId: number;
    /**
     * @generated from field: string pool_id = 2;
     */
    poolId: string;
    /**
     * @generated from field: data.v1.Token token0 = 3;
     */
    token0?: Token;
    /**
     * @generated from field: data.v1.Token token1 = 4;
     */
    token1?: Token;
    /**
     * @generated from field: pools.v1.ProtocolVersion protocol_version = 5;
     */
    protocolVersion: ProtocolVersion;
    /**
     * @generated from field: uint32 fee_tier = 6;
     */
    feeTier: number;
    /**
     * @generated from field: bool is_dynamic_fee = 7;
     */
    isDynamicFee: boolean;
    /**
     * @generated from field: optional string hook_address = 8;
     */
    hookAddress?: string;
    /**
     * @generated from field: data.v1.PoolStats stats = 9;
     */
    stats?: PoolStats;
    constructor(data?: PartialMessage<Pool>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Pool";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pool;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pool;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pool;
    static equals(a: Pool | PlainMessage<Pool> | undefined, b: Pool | PlainMessage<Pool> | undefined): boolean;
}
/**
 * @generated from message data.v1.TimestampedValue
 */
export declare class TimestampedValue extends Message<TimestampedValue> {
    /**
     * @generated from field: uint64 timestamp = 1;
     */
    timestamp: bigint;
    /**
     * @generated from field: double value = 2;
     */
    value: number;
    constructor(data?: PartialMessage<TimestampedValue>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.TimestampedValue";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TimestampedValue;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TimestampedValue;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TimestampedValue;
    static equals(a: TimestampedValue | PlainMessage<TimestampedValue> | undefined, b: TimestampedValue | PlainMessage<TimestampedValue> | undefined): boolean;
}
/**
 * @generated from message data.v1.TokenStats
 */
export declare class TokenStats extends Message<TokenStats> {
    /**
     * @generated from field: optional double fdv = 1;
     */
    fdv?: number;
    /**
     * @generated from field: optional double volume_1h = 2;
     */
    volume1h?: number;
    /**
     * @generated from field: optional double volume_1d = 3;
     */
    volume1d?: number;
    /**
     * @generated from field: optional double volume_7d = 4;
     */
    volume7d?: number;
    /**
     * @generated from field: optional double volume_30d = 5;
     */
    volume30d?: number;
    /**
     * @generated from field: optional double volume_1y = 6;
     */
    volume1y?: number;
    /**
     * @generated from field: optional float price = 7;
     */
    price?: number;
    /**
     * @generated from field: optional float price_change_1h = 8;
     */
    priceChange1h?: number;
    /**
     * @generated from field: optional float price_change_1d = 9;
     */
    priceChange1d?: number;
    /**
     * @generated from field: repeated data.v1.TimestampedValue price_history_1d = 10;
     */
    priceHistory1d: TimestampedValue[];
    constructor(data?: PartialMessage<TokenStats>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.TokenStats";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenStats;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenStats;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenStats;
    static equals(a: TokenStats | PlainMessage<TokenStats> | undefined, b: TokenStats | PlainMessage<TokenStats> | undefined): boolean;
}
/**
 * @generated from message data.v1.Paymaster
 */
export declare class Paymaster extends Message<Paymaster> {
    /**
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: optional string name = 2;
     */
    name?: string;
    constructor(data?: PartialMessage<Paymaster>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.Paymaster";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Paymaster;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Paymaster;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Paymaster;
    static equals(a: Paymaster | PlainMessage<Paymaster> | undefined, b: Paymaster | PlainMessage<Paymaster> | undefined): boolean;
}
/**
 * @generated from message data.v1.WalletProfitLoss
 */
export declare class WalletProfitLoss extends Message<WalletProfitLoss> {
    /**
     * @generated from field: double net_invested_usd = 1;
     */
    netInvestedUsd: number;
    /**
     * @generated from field: double unrealized_return_usd = 2;
     */
    unrealizedReturnUsd: number;
    /**
     * @generated from field: double unrealized_return_percent = 3;
     */
    unrealizedReturnPercent: number;
    /**
     * @generated from field: double realized_return_usd = 4;
     */
    realizedReturnUsd: number;
    /**
     * @generated from field: double total_return_usd = 5;
     */
    totalReturnUsd: number;
    /**
     * @generated from field: double total_fee_usd = 6;
     */
    totalFeeUsd: number;
    constructor(data?: PartialMessage<WalletProfitLoss>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.WalletProfitLoss";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): WalletProfitLoss;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): WalletProfitLoss;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): WalletProfitLoss;
    static equals(a: WalletProfitLoss | PlainMessage<WalletProfitLoss> | undefined, b: WalletProfitLoss | PlainMessage<WalletProfitLoss> | undefined): boolean;
}
/**
 * @generated from message data.v1.TokenProfitLoss
 */
export declare class TokenProfitLoss extends Message<TokenProfitLoss> {
    /**
     * @generated from field: data.v1.Token token = 1;
     */
    token?: Token;
    /**
     * @generated from field: double average_cost_usd = 2;
     */
    averageCostUsd: number;
    /**
     * @generated from field: double unrealized_return_usd = 3;
     */
    unrealizedReturnUsd: number;
    /**
     * @generated from field: double unrealized_return_percent = 4;
     */
    unrealizedReturnPercent: number;
    constructor(data?: PartialMessage<TokenProfitLoss>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.TokenProfitLoss";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenProfitLoss;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenProfitLoss;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenProfitLoss;
    static equals(a: TokenProfitLoss | PlainMessage<TokenProfitLoss> | undefined, b: TokenProfitLoss | PlainMessage<TokenProfitLoss> | undefined): boolean;
}
/**
 * @generated from message data.v1.TokenDetailProfitLoss
 */
export declare class TokenDetailProfitLoss extends Message<TokenDetailProfitLoss> {
    /**
     * @generated from field: double average_cost_usd = 1;
     */
    averageCostUsd: number;
    /**
     * @generated from field: double one_day_return_usd = 2;
     */
    oneDayReturnUsd: number;
    /**
     * @generated from field: double one_day_return_percent = 3;
     */
    oneDayReturnPercent: number;
    /**
     * @generated from field: double unrealized_return_usd = 4;
     */
    unrealizedReturnUsd: number;
    /**
     * @generated from field: double unrealized_return_percent = 5;
     */
    unrealizedReturnPercent: number;
    /**
     * @generated from field: double realized_return_usd = 6;
     */
    realizedReturnUsd: number;
    /**
     * @generated from field: double realized_return_percent = 7;
     */
    realizedReturnPercent: number;
    constructor(data?: PartialMessage<TokenDetailProfitLoss>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.TokenDetailProfitLoss";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TokenDetailProfitLoss;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TokenDetailProfitLoss;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TokenDetailProfitLoss;
    static equals(a: TokenDetailProfitLoss | PlainMessage<TokenDetailProfitLoss> | undefined, b: TokenDetailProfitLoss | PlainMessage<TokenDetailProfitLoss> | undefined): boolean;
}
