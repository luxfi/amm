import { BigNumber } from "ethers";
import { OrderType } from "../constants";
import { Order, RelayOrder, UniswapXOrder } from "../order";
declare abstract class OrderParser {
    abstract orderInfoOffset: number;
    abstract parseOrder(order: string, chainId: number): Order;
    /**
     * Parses a serialized order based on the order shape
     * @dev called by derived classes which set the offset
     */
    protected _parseOrder(order: string): OrderType;
    /**
     * Determines the OrderType from an Order object
     * @return OrderType
     */
    getOrderType(order: Order): OrderType;
    /**
     * Helper function to determine the OrderType from a serialized order
     */
    getOrderTypeFromEncoded(order: string, chainId: number): OrderType;
}
export declare class UniswapXOrderParser extends OrderParser {
    orderInfoOffset: number;
    /**
     * Parses a serialized order
     */
    parseOrder(order: string, chainId: number): UniswapXOrder;
    /**
     * Detects V4 order type by checking if the first address is a known resolver
     * V4 orders are serialized as: (resolver, orderData)
     */
    private detectV4OrderType;
    /**
     * Parses a V4 order based on its resolver
     */
    private parseV4Order;
    /**
     * Determine the order type of a UniswapX order
     * @dev Special cases limit orders which are dutch orders with no output decay
     * @dev V4 orders (like HybridOrder) are detected by instance check since they use resolver-based lookup
     */
    getOrderType(order: Order): OrderType;
}
export declare class RelayOrderParser extends OrderParser {
    orderInfoOffset: number;
    /**
     * Parses a serialized order
     */
    parseOrder(order: string, chainId: number): RelayOrder;
}
export declare function originalIfZero(value: BigNumber, original: BigNumber): BigNumber;
export {};
