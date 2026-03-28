"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_SCALING_FACTOR = exports.PERMIT2_DOMAIN_NAME = exports.DCA_HOOK_DOMAIN_VERSION = exports.DCA_HOOK_DOMAIN_NAME = exports.DCA_COSIGNER_DATA_TYPE_HASH = exports.ORDER_INFO_V4_TYPE_STRING = exports.ORDER_INFO_V4_TYPE_HASH = exports.TOKEN_PERMISSIONS_TYPE_HASH = exports.PERMIT_WITNESS_TRANSFER_FROM_TYPE_HASH = exports.DCA_HOOK_DOMAIN_TYPE_HASH = exports.PERMIT2_DOMAIN_TYPE_HASH = void 0;
const ethers_1 = require("ethers");
/**
 * V4-specific type hashes and constants
 */
/**
 * EIP-712 Domain type hash for Permit2
 */
exports.PERMIT2_DOMAIN_TYPE_HASH = ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.toUtf8Bytes("EIP712Domain(string name,uint256 chainId,address verifyingContract)"));
/**
 * EIP-712 Domain type hash for DCAHook
 */
exports.DCA_HOOK_DOMAIN_TYPE_HASH = ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.toUtf8Bytes("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"));
/**
 * Permit2 Witness Transfer From type hash
 */
exports.PERMIT_WITNESS_TRANSFER_FROM_TYPE_HASH = ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.toUtf8Bytes("PermitWitnessTransferFrom(" +
    "TokenPermissions permitted," +
    "address spender," +
    "uint256 nonce," +
    "uint256 deadline," +
    "GenericOrder witness)" +
    "GenericOrder(address resolver,bytes32 orderHash)" +
    "TokenPermissions(address token,uint256 amount)"));
/**
 * TokenPermissions type hash
 */
exports.TOKEN_PERMISSIONS_TYPE_HASH = ethers_1.ethers.utils.keccak256(ethers_1.ethers.utils.toUtf8Bytes("TokenPermissions(address token,uint256 amount)"));
/**
 * OrderInfoV4 type hash (exported from hashing.ts)
 */
var hashing_1 = require("../order/v4/hashing");
Object.defineProperty(exports, "ORDER_INFO_V4_TYPE_HASH", { enumerable: true, get: function () { return hashing_1.ORDER_INFO_V4_TYPE_HASH; } });
Object.defineProperty(exports, "ORDER_INFO_V4_TYPE_STRING", { enumerable: true, get: function () { return hashing_1.ORDER_INFO_V4_TYPE_STRING; } });
/**
 * DCA Intent type hash (exported from hashing.ts)
 */
var hashing_2 = require("../order/v4/hashing");
Object.defineProperty(exports, "DCA_COSIGNER_DATA_TYPE_HASH", { enumerable: true, get: function () { return hashing_2.DCA_COSIGNER_DATA_TYPE_HASH; } });
/**
 * DCAHook domain name
 */
exports.DCA_HOOK_DOMAIN_NAME = "DCAHook";
/**
 * DCAHook domain version
 */
exports.DCA_HOOK_DOMAIN_VERSION = "1";
/**
 * Permit2 domain name
 */
exports.PERMIT2_DOMAIN_NAME = "Permit2";
/**
 * Neutral scaling factor (1e18) for hybrid auction; based on Tribunal's implementation
 */
exports.BASE_SCALING_FACTOR = ethers_1.ethers.constants.WeiPerEther;
//# sourceMappingURL=v4.js.map