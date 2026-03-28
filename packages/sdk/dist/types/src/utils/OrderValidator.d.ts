import { OrderValidation, RelayOrderQuoter, SignedRelayOrder, SignedUniswapXOrder, SignedV4Order, UniswapXOrderQuoter, V4OrderQuoter } from "./OrderQuoter";
/**
 * UniswapX order validator
 */
export declare class OrderValidator extends UniswapXOrderQuoter {
    validate(order: SignedUniswapXOrder): Promise<OrderValidation>;
    validateBatch(orders: SignedUniswapXOrder[]): Promise<OrderValidation[]>;
}
export declare class RelayOrderValidator extends RelayOrderQuoter {
    validate(order: SignedRelayOrder): Promise<OrderValidation>;
    validateBatch(orders: SignedRelayOrder[]): Promise<OrderValidation[]>;
}
/**
 * V4 order validator for Hybrid orders
 */
export declare class V4OrderValidator extends V4OrderQuoter {
    validate(order: SignedV4Order): Promise<OrderValidation>;
    validateBatch(orders: SignedV4Order[]): Promise<OrderValidation[]>;
}
