import { Currency, CurrencyAmount } from '@luxamm/sdk-core';
import { Pool } from '../entities/pool';
export declare function amountWithPathCurrency(amount: CurrencyAmount<Currency>, pool: Pool): CurrencyAmount<Currency>;
export declare function getPathCurrency(currency: Currency, pool: Pool): Currency;
