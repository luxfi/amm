import { RoutePlanner } from '../../utils/routerCommands';
import { URVersion } from '@luxamm/v4-sdk';
import { Trade as RouterTrade, SwapOptions as RouterSwapOptions } from '@luxamm/router-sdk';
import { Permit2Permit } from '../../utils/inputTokens';
import { Currency, TradeType } from '@luxamm/sdk-core';
import { Command, RouterActionType, TradeConfig } from '../Command';
import { BigNumber, BigNumberish } from 'ethers';
export declare type FlatFeeOptions = {
    amount: BigNumberish;
    recipient: string;
};
export declare type SwapOptions = Omit<RouterSwapOptions, 'inputTokenPermit'> & {
    useRouterBalance?: boolean;
    inputTokenPermit?: Permit2Permit;
    flatFee?: FlatFeeOptions;
    safeMode?: boolean;
    maxHopSlippage?: BigNumber[];
    urVersion?: URVersion;
};
export declare class UniswapTrade implements Command {
    trade: RouterTrade<Currency, Currency, TradeType>;
    options: SwapOptions;
    readonly tradeType: RouterActionType;
    readonly payerIsUser: boolean;
    constructor(trade: RouterTrade<Currency, Currency, TradeType>, options: SwapOptions);
    get isAllV4(): boolean;
    get inputRequiresWrap(): boolean;
    get inputRequiresUnwrap(): boolean;
    get outputRequiresWrap(): boolean;
    get outputRequiresUnwrap(): boolean;
    get outputRequiresTransition(): boolean;
    encode(planner: RoutePlanner, _config: TradeConfig): void;
}
