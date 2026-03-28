"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionedTokenValidator = void 0;
const tslib_1 = require("tslib");
const constants_1 = require("../constants");
const constants_2 = require("../constants");
const contracts_1 = require("../contracts");
class PermissionedTokenValidator {
    /**
     * Checks if a token is a permissioned token
     * @param tokenAddress The address of the token
     * @returns True if the token is a permissioned token, false otherwise
     */
    static isPermissionedToken(tokenAddress, chainId, permissionedTokens = constants_1.PERMISSIONED_TOKENS) {
        return permissionedTokens.some(token => token.address.toLowerCase() === tokenAddress.toLowerCase() && token.chainId === chainId);
    }
    /**
     * Checks if a transfer would be allowed for a permissioned token
     * @param provider The provider to use for the view call
     * @param tokenAddress The address of the permissioned token
     * @param from The sender's address
     * @param to The recipient's address
     * @param value The amount to transfer (in base units)
     * @returns True if the token is not a permissioned token or the transfer is
     * allowed, false otherwise
     * @throws Will throw an exception if there is an error with the provider
     */
    static preTransferCheck(provider, tokenAddress, from, to, value, permissionedTokens = constants_1.PERMISSIONED_TOKENS) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = permissionedTokens.find(token => token.address.toLowerCase() === tokenAddress.toLowerCase());
            // If the token is not in the list, we don't need to check anything
            if (!token) {
                return true;
            }
            // Get the resolved token contract
            let resolvedTokenAddress = tokenAddress;
            if (token.proxyType === constants_2.PermissionedTokenProxyType.Standard) {
                const proxyContract = contracts_1.Proxy__factory.connect(tokenAddress, provider);
                resolvedTokenAddress = yield proxyContract.target();
            }
            else if (token.proxyType === constants_2.PermissionedTokenProxyType.ERC1967) {
                // EIP-1967 implementation slot: bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1)
                // https://eips.ethereum.org/EIPS/eip-1967
                const implSlot = '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc';
                const implStorage = yield provider.getStorageAt(tokenAddress, implSlot);
                resolvedTokenAddress = '0x' + implStorage.slice(26);
            }
            // Use the appropriate interface to perform the approval check
            if (token.interface === constants_1.PermissionedTokenInterface.DSTokenInterface) {
                const tokenContract = contracts_1.DSTokenInterface__factory.connect(resolvedTokenAddress, provider);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const [code, _reason] = yield tokenContract.preTransferCheck(from, to, value);
                return code.toNumber() === 0;
            }
            else if (token.interface === constants_1.PermissionedTokenInterface.ISuperstateTokenV4) {
                const tokenContract = contracts_1.ISuperstateTokenV4__factory.connect(resolvedTokenAddress, provider);
                const [fromAllowed, toAllowed] = yield Promise.all([
                    tokenContract.isAllowed(from),
                    tokenContract.isAllowed(to),
                ]);
                return fromAllowed && toAllowed;
            }
            else {
                throw new Error("Unknown token interface: " + token.interface);
            }
        });
    }
}
exports.PermissionedTokenValidator = PermissionedTokenValidator;
//# sourceMappingURL=PermissionedTokenValidator.js.map