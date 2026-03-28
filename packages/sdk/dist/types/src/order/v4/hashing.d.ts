import { CosignedHybridOrderInfo, DCAIntent, DCAOrderCosignerData, HybridCosignerData, OrderInfoV4, PrivateIntent } from "./types";
/**
 * EIP-712 type string for OrderInfoV4
 */
export declare const ORDER_INFO_V4_TYPE_STRING: string;
/**
 * EIP-712 type hash for OrderInfoV4
 */
export declare const ORDER_INFO_V4_TYPE_HASH: string;
/**
 * EIP-712 witness types for HybridOrder (for Permit2 signature)
 * NOTE: Types must be in alphabetical order for EIP-712 spec compliance
 */
export declare const HYBRID_ORDER_TYPES: {
    HybridInput: {
        name: string;
        type: string;
    }[];
    HybridOrder: {
        name: string;
        type: string;
    }[];
    HybridOutput: {
        name: string;
        type: string;
    }[];
    OrderInfo: {
        name: string;
        type: string;
    }[];
};
/**
 * Hash OrderInfoV4 structure
 * @param info The OrderInfoV4 to hash
 * @returns The keccak256 hash
 */
export declare function hashOrderInfoV4(info: OrderInfoV4): string;
export declare function hashHybridOrder(order: CosignedHybridOrderInfo): string;
/**
 * Compute cosigner digest (orderHash || chainId || cosignerData encoding)
 */
export declare function hashHybridCosignerData(orderHash: string, cosignerData: HybridCosignerData, chainId: number): string;
/**
 * Hash PrivateIntent structure
 * @param privateIntent The PrivateIntent to hash
 * @returns The keccak256 hash
 */
export declare function hashPrivateIntent(privateIntent: PrivateIntent): string;
/**
 * Hash DCAIntent structure
 * Note: Intent should have privateIntent zeroed out for signing, with separate privateIntentHash
 * @param intent The DCAIntent to hash (with zeroed privateIntent)
 * @param privateIntentHash The hash of the PrivateIntent
 * @returns The keccak256 hash
 */
export declare function hashDCAIntent(intent: DCAIntent, privateIntentHash: string): string;
/**
 * EIP-712 type hash for DCAOrderCosignerData
 */
export declare const DCA_COSIGNER_DATA_TYPE_HASH: string;
/**
 * Hash DCAOrderCosignerData structure
 * @param cosignerData The DCAOrderCosignerData to hash
 * @returns The keccak256 hash
 */
export declare function hashDCACosignerData(cosignerData: DCAOrderCosignerData): string;
/**
 * EIP-712 type definitions for DCAIntent
 */
export declare const DCA_INTENT_TYPES: {
    DCAIntent: {
        name: string;
        type: string;
    }[];
    OutputAllocation: {
        name: string;
        type: string;
    }[];
    PrivateIntent: {
        name: string;
        type: string;
    }[];
    FeedInfo: {
        name: string;
        type: string;
    }[];
};
