import { BigNumber } from "ethers";
/**
 * V4 OrderInfo structure with hooks support
 * Mirrors mandatory-hook reactor contract
 */
export type OrderInfoV4 = {
    reactor: string;
    swapper: string;
    nonce: BigNumber;
    deadline: number;
    preExecutionHook: string;
    preExecutionHookData: string;
    postExecutionHook: string;
    postExecutionHookData: string;
    auctionResolver: string;
};
/**
 * Signed order container for V4
 * Encoded as: abi.encode(resolver, abi.encode(resolverSpecificOrder))
 */
export type SignedOrder = {
    order: string;
    sig: string;
};
/**
 * Input token specification
 */
export type InputToken = {
    token: string;
    amount: BigNumber;
    maxAmount: BigNumber;
};
/**
 * Output token specification
 * address(0) for native ETH
 */
export type OutputToken = {
    token: string;
    amount: BigNumber;
    recipient: string;
};
/**
 * Resolved order after resolver processes it
 */
export type ResolvedOrder = {
    info: OrderInfoV4;
    input: InputToken;
    outputs: OutputToken[];
    sig: string;
    hash: string;
    auctionResolver: string;
    witnessTypeString: string;
};
/**
 * Hybrid auction input token definition
 * maxAmount is fixed for exact-in orders
 */
export type HybridInput = {
    token: string;
    maxAmount: BigNumber;
};
/**
 * Hybrid auction output token definition
 * minAmount is scaled up for exact-in orders
 */
export type HybridOutput = {
    token: string;
    minAmount: BigNumber;
    recipient: string;
};
/**
 * Hybrid cosigner data (optional)
 */
export type HybridCosignerData = {
    auctionTargetBlock: BigNumber;
    supplementalPriceCurve: BigNumber[];
    exclusiveFiller: string;
    exclusivityOverrideBps: BigNumber;
    exclusivityEndBlock: BigNumber;
};
/**
 * JSON serialization format for HybridCosignerData
 */
export type HybridCosignerDataJSON = {
    auctionTargetBlock: string;
    supplementalPriceCurve: string[];
    exclusiveFiller: string;
    exclusivityOverrideBps: number;
    exclusivityEndBlock: string;
};
export type UnsignedHybridOrderInfo = OrderInfoV4 & {
    cosigner: string;
    input: HybridInput;
    outputs: HybridOutput[];
    auctionStartBlock: BigNumber;
    baselinePriorityFee: BigNumber;
    scalingFactor: BigNumber;
    priceCurve: BigNumber[];
};
export type CosignedHybridOrderInfo = UnsignedHybridOrderInfo & {
    cosignerData: HybridCosignerData;
    cosignature: string;
};
export type OrderInfoV4JSON = Omit<OrderInfoV4, "nonce"> & {
    nonce: string;
};
export type HybridInputJSON = {
    token: string;
    maxAmount: string;
};
export type HybridOutputJSON = {
    token: string;
    minAmount: string;
    recipient: string;
};
export type UnsignedHybridOrderInfoJSON = Omit<UnsignedHybridOrderInfo, "nonce" | "input" | "outputs" | "auctionStartBlock" | "baselinePriorityFee" | "scalingFactor" | "priceCurve"> & {
    nonce: string;
    input: HybridInputJSON;
    outputs: HybridOutputJSON[];
    auctionStartBlock: string;
    baselinePriorityFee: string;
    scalingFactor: string;
    priceCurve: string[];
};
export type CosignedHybridOrderInfoJSON = UnsignedHybridOrderInfoJSON & {
    cosignerData: HybridCosignerDataJSON;
    cosignature: string;
};
/**
 * DCA Intent structure
 * Signed once by swapper
 */
export type DCAIntent = {
    swapper: string;
    nonce: BigNumber;
    chainId: number;
    hookAddress: string;
    isExactIn: boolean;
    inputToken: string;
    outputToken: string;
    cosigner: string;
    minPeriod: BigNumber;
    maxPeriod: BigNumber;
    minChunkSize: BigNumber;
    maxChunkSize: BigNumber;
    minPrice: BigNumber;
    deadline: BigNumber;
    outputAllocations: OutputAllocation[];
    privateIntent: PrivateIntent;
};
/**
 * Private parameters - Only hash revealed on-chain for privacy
 */
export type PrivateIntent = {
    totalAmount: BigNumber;
    exactFrequency: BigNumber;
    numChunks: BigNumber;
    salt: string;
    oracleFeeds: FeedInfo[];
};
/**
 * Output distribution specification
 */
export type OutputAllocation = {
    recipient: string;
    basisPoints: number;
};
/**
 * Oracle feed information
 */
export type FeedInfo = {
    feedId: string;
    feed_address: string;
    feedType: string;
};
/**
 * Cosigner authorization for single execution
 */
export type DCAOrderCosignerData = {
    swapper: string;
    nonce: BigNumber;
    execAmount: BigNumber;
    orderNonce: BigNumber;
    limitAmount: BigNumber;
};
/**
 * On-chain execution state
 */
export type DCAExecutionState = {
    executedChunks: BigNumber;
    lastExecutionTime: BigNumber;
    cancelled: boolean;
    totalInputExecuted: BigNumber;
    totalOutput: BigNumber;
};
/**
 * Optional Permit2 allowance data
 */
export type PermitData = {
    hasPermit: boolean;
    permitSingle: {
        details: {
            token: string;
            amount: BigNumber;
        };
        spender: string;
        sigDeadline: BigNumber;
        nonce: BigNumber;
    };
    signature: string;
};
/**
 * JSON serialization format for DCAIntent
 */
export type DCAIntentJSON = Omit<DCAIntent, "nonce" | "minPeriod" | "maxPeriod" | "minChunkSize" | "maxChunkSize" | "minPrice" | "deadline" | "privateIntent"> & {
    nonce: string;
    minPeriod: string;
    maxPeriod: string;
    minChunkSize: string;
    maxChunkSize: string;
    minPrice: string;
    deadline: string;
    privateIntent: {
        totalAmount: string;
        exactFrequency: string;
        numChunks: string;
        salt: string;
        oracleFeeds: FeedInfo[];
    };
};
/**
 * Resolution options for a HybridOrder when simulating fills
 */
export type HybridOrderResolutionOptions = {
    currentBlock: BigNumber;
    priorityFeeWei: BigNumber;
    filler?: string;
};
/**
 * Block overrides for quoting
 */
export type BlockOverridesV4 = {
    number?: string;
} | undefined;
