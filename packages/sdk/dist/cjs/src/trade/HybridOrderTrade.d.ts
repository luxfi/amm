import { Currency, CurrencyAmount, Price, TradeType } from "@uniswap/sdk-core";
import { CosignedHybridOrder } from "../order/v4/HybridOrder";
import { CosignedHybridOrderInfo } from "../order/v4/types";
export declare class HybridOrderTrade<TInput extends Currency, TOutput extends Currency, TTradeType extends TradeType> {
    readonly tradeType: TTradeType;
    readonly order: CosignedHybridOrder;
    readonly expectedAmounts: {
        expectedAmountIn: string;
        expectedAmountOut: string;
    } | undefined;
    private _inputAmount;
    private _outputAmounts;
    private _currencyIn;
    private _currenciesOut;
    constructor({ currencyIn, currenciesOut, orderInfo, chainId, resolver, permit2Address, tradeType, expectedAmounts, }: {
        currencyIn: TInput;
        currenciesOut: TOutput[];
        orderInfo: CosignedHybridOrderInfo;
        chainId: number;
        resolver: string;
        permit2Address?: string;
        tradeType: TTradeType;
        expectedAmounts?: {
            expectedAmountIn: string;
            expectedAmountOut: string;
        };
    });
    get inputAmount(): CurrencyAmount<TInput>;
    get outputAmounts(): CurrencyAmount<TOutput>[];
    get outputAmount(): CurrencyAmount<TOutput>;
    /**
     * For exact-in orders: minimum amount out is the minAmount from the order
     * For exact-out orders: minimum amount out is the fixed output amount
     */
    minimumAmountOut(): CurrencyAmount<TOutput>;
    /**
     * For exact-in orders: maximum amount in is the fixed maxAmount
     * For exact-out orders: maximum amount in is the maxAmount (worst case)
     */
    maximumAmountIn(): CurrencyAmount<TInput>;
    private _executionPrice;
    /**
     * The price expressed in terms of output amount/input amount.
     */
    get executionPrice(): Price<TInput, TOutput>;
    /**
     * Return the execution price after accounting for slippage tolerance
     * @returns The worst execution price (max in / min out)
     */
    worstExecutionPrice(): Price<TInput, TOutput>;
    /**
     * Determine if this is an exact-in order based on the scalingFactor
     */
    isExactIn(): boolean;
    /**
     * Determine if this is an exact-out order based on the scalingFactor
     */
    isExactOut(): boolean;
    private getExpectedAmountIn;
    private getExpectedAmountOut;
}
