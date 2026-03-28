import { ethers } from "ethers";
/**
 * V4-specific type hashes and constants
 */
/**
 * EIP-712 Domain type hash for Permit2
 */
export declare const PERMIT2_DOMAIN_TYPE_HASH: string;
/**
 * EIP-712 Domain type hash for DCAHook
 */
export declare const DCA_HOOK_DOMAIN_TYPE_HASH: string;
/**
 * Permit2 Witness Transfer From type hash
 */
export declare const PERMIT_WITNESS_TRANSFER_FROM_TYPE_HASH: string;
/**
 * TokenPermissions type hash
 */
export declare const TOKEN_PERMISSIONS_TYPE_HASH: string;
/**
 * OrderInfoV4 type hash (exported from hashing.ts)
 */
export { ORDER_INFO_V4_TYPE_HASH, ORDER_INFO_V4_TYPE_STRING, } from "../order/v4/hashing";
/**
 * DCA Intent type hash (exported from hashing.ts)
 */
export { DCA_COSIGNER_DATA_TYPE_HASH } from "../order/v4/hashing";
/**
 * DCAHook domain name
 */
export declare const DCA_HOOK_DOMAIN_NAME = "DCAHook";
/**
 * DCAHook domain version
 */
export declare const DCA_HOOK_DOMAIN_VERSION = "1";
/**
 * Permit2 domain name
 */
export declare const PERMIT2_DOMAIN_NAME = "Permit2";
/**
 * Neutral scaling factor (1e18) for hybrid auction; based on Tribunal's implementation
 */
export declare const BASE_SCALING_FACTOR: ethers.BigNumber;
