import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { OrderQuoter as OrderQuoterContract, OrderQuoterV4 as OrderQuoterV4Contract, RelayOrderReactor } from "../contracts";
import { CosignedPriorityOrderInfo, CosignedV2DutchOrderInfo, CosignedV3DutchOrderInfo, DutchOrderInfo, Order, RelayOrder, ResolvedRelayFee, TokenAmount, UniswapXOrder, UnsignedPriorityOrderInfo, UnsignedV2DutchOrderInfo, UnsignedV3DutchOrderInfo } from "../order";
export declare enum OrderValidation {
    Expired = 0,
    NonceUsed = 1,
    InsufficientFunds = 2,
    InvalidSignature = 3,
    InvalidOrderFields = 4,
    UnknownError = 5,
    ValidationFailed = 6,
    ExclusivityPeriod = 7,
    OrderNotFillableYet = 8,
    InvalidGasPrice = 9,
    InvalidCosignature = 10,
    OK = 11
}
export interface ResolvedUniswapXOrder {
    input: TokenAmount;
    outputs: TokenAmount[];
}
export interface UniswapXOrderQuote {
    validation: OrderValidation;
    quote: ResolvedUniswapXOrder | undefined;
}
export interface ResolvedRelayOrder {
    fee: ResolvedRelayFee;
}
export interface RelayOrderQuote {
    validation: OrderValidation;
    quote: ResolvedRelayOrder | undefined;
}
export type LegacyOrderInfoTypes = DutchOrderInfo | UnsignedV2DutchOrderInfo | CosignedV2DutchOrderInfo | UnsignedV3DutchOrderInfo | CosignedV3DutchOrderInfo | UnsignedPriorityOrderInfo | CosignedPriorityOrderInfo;
export interface SignedUniswapXOrder {
    order: UniswapXOrder;
    signature: string;
}
export interface SignedRelayOrder {
    order: RelayOrder;
    signature: string;
}
export interface SignedOrder {
    order: Order;
    signature: string;
}
interface OrderQuoter<TOrder, TQuote> {
    quote(order: TOrder): Promise<TQuote>;
    quoteBatch(orders: TOrder[]): Promise<TQuote[]>;
    orderQuoterAddress: string;
}
/**
 * UniswapX order quoter
 */
export declare class UniswapXOrderQuoter implements OrderQuoter<SignedUniswapXOrder, UniswapXOrderQuote> {
    protected provider: StaticJsonRpcProvider;
    protected chainId: number;
    protected quoter: OrderQuoterContract;
    constructor(provider: StaticJsonRpcProvider, chainId: number, orderQuoterAddress?: string);
    quote(order: SignedUniswapXOrder): Promise<UniswapXOrderQuote>;
    quoteBatch(orders: SignedUniswapXOrder[]): Promise<UniswapXOrderQuote[]>;
    private getValidations;
    private getMulticallResults;
    get orderQuoterAddress(): string;
}
/**
 * Relay order quoter
 */
export declare class RelayOrderQuoter implements OrderQuoter<SignedRelayOrder, RelayOrderQuote> {
    protected provider: StaticJsonRpcProvider;
    protected chainId: number;
    protected quoter: RelayOrderReactor;
    private quoteFunctionSelector;
    constructor(provider: StaticJsonRpcProvider, chainId: number, reactorAddress?: string);
    quote(order: SignedRelayOrder): Promise<RelayOrderQuote>;
    quoteBatch(orders: SignedRelayOrder[]): Promise<RelayOrderQuote[]>;
    private getMulticallResults;
    private getValidations;
    get orderQuoterAddress(): string;
}
/**
 * V4 resolved order from quoter
 */
export interface ResolvedV4Order {
    input: TokenAmount;
    outputs: TokenAmount[];
    auctionResolver: string;
    witnessTypeString: string;
}
/**
 * V4 order quote result
 */
export interface V4OrderQuote {
    validation: OrderValidation;
    quote: ResolvedV4Order | undefined;
    /**
     * Debug info when `validation !== OK`.
     * This is the raw revert data returned by multicall (hex string, usually starting with `0x`).
     */
    validationErrorData?: string;
    /**
     * Best-effort decoded error text (e.g. `Error(string)` / `Panic(uint256)` / custom error selector).
     */
    validationErrorText?: string;
    /**
     * Optional debug trace of the underlying `eth_call` performed by the quoter.
     * Captures the JSON-RPC method + params (payload), and the raw RPC result/error (when available).
     * Present only when `validation !== OK`.
     */
    rpcCalls?: V4RpcCallTrace[];
}
/**
 * Signed V4 order (Hybrid orders)
 */
export interface SignedV4Order {
    order: UniswapXOrder;
    signature: string;
}
export type V4RpcCallTrace = {
    method: string;
    params: unknown[];
    result?: unknown;
    error?: {
        message?: string;
        code?: unknown;
        data?: unknown;
        body?: unknown;
        error?: unknown;
    };
};
/**
 * V4 order quoter for Hybrid orders
 */
export declare class V4OrderQuoter implements OrderQuoter<SignedV4Order, V4OrderQuote> {
    protected provider: StaticJsonRpcProvider;
    protected chainId: number;
    protected quoter: OrderQuoterV4Contract;
    constructor(provider: StaticJsonRpcProvider, chainId: number, orderQuoterAddress?: string);
    quote(order: SignedV4Order): Promise<V4OrderQuote>;
    quoteBatch(orders: SignedV4Order[]): Promise<V4OrderQuote[]>;
    private getValidations;
    private getMulticallResults;
    get orderQuoterAddress(): string;
}
export {};
