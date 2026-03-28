import { SignatureLike } from "@ethersproject/bytes";
import { PermitTransferFrom, PermitTransferFromData, Witness } from "@uniswap/permit2-sdk";
import { BigNumber } from "ethers";
import { ResolvedUniswapXOrder } from "../../utils/OrderQuoter";
import { BlockOverridesV4, CosignedHybridOrderInfo, CosignedHybridOrderInfoJSON, HybridCosignerData, HybridOrderResolutionOptions, UnsignedHybridOrderInfo, UnsignedHybridOrderInfoJSON } from "./types";
export declare class OrderResolutionError extends Error {
    constructor(message: string);
}
export declare class HybridOrderPriceCurveError extends Error {
    constructor(message: string);
}
export declare class HybridOrderCosignatureError extends Error {
    constructor(message: string);
}
/**
 * Unsigned HybridOrder - base class without cosigner data
 */
export declare class UnsignedHybridOrder {
    readonly info: UnsignedHybridOrderInfo;
    readonly chainId: number;
    readonly resolver: string;
    readonly permit2Address: string;
    constructor(info: UnsignedHybridOrderInfo, chainId: number, resolver: string, _permit2Address?: string);
    /**
     * Parse a serialized HybridOrder into an UnsignedHybridOrder
     */
    static parse(encoded: string, chainId: number, permit2?: string): UnsignedHybridOrder;
    static fromJSON(json: UnsignedHybridOrderInfoJSON, chainId: number, resolver: string, _permit2Address?: string): UnsignedHybridOrder;
    /**
     * Encode a price curve element from duration and scaling factor
     */
    static encodePriceCurveElement(duration: number, scalingFactor: BigNumber): BigNumber;
    /**
     * Decode a price curve element into duration and scaling factor
     */
    static decodePriceCurveElement(value: BigNumber): {
        duration: number;
        scalingFactor: BigNumber;
    };
    hash(): string;
    serialize(): string;
    permitData(): PermitTransferFromData;
    getSigner(signature: SignatureLike): string;
    protected toPermit(): PermitTransferFrom;
    protected witness(): Witness;
    get blockOverrides(): BlockOverridesV4;
    resolve(_options: HybridOrderResolutionOptions): ResolvedUniswapXOrder;
    cosignatureHash(cosignerData: HybridCosignerData): string;
    toJSON(): UnsignedHybridOrderInfoJSON & {
        chainId: number;
        resolver: string;
        permit2Address: string;
    };
}
/**
 * Cosigned HybridOrder - includes cosigner data and signature
 */
export declare class CosignedHybridOrder extends UnsignedHybridOrder {
    readonly info: CosignedHybridOrderInfo;
    readonly chainId: number;
    readonly resolver: string;
    constructor(info: CosignedHybridOrderInfo, chainId: number, resolver: string, _permit2Address?: string);
    /**
     * Parse a serialized HybridOrder into a CosignedHybridOrder
     */
    static parse(encoded: string, chainId: number, permit2?: string): CosignedHybridOrder;
    /**
     * Create a CosignedHybridOrder from an UnsignedHybridOrder
     */
    static fromUnsignedOrder(order: UnsignedHybridOrder, cosignerData: HybridCosignerData, cosignature: string): CosignedHybridOrder;
    static fromJSON(json: CosignedHybridOrderInfoJSON, chainId: number, resolver: string, _permit2Address?: string): CosignedHybridOrder;
    hash(): string;
    serialize(): string;
    get blockOverrides(): BlockOverridesV4;
    resolve(options: HybridOrderResolutionOptions): ResolvedUniswapXOrder;
    toJSON(): CosignedHybridOrderInfoJSON & {
        chainId: number;
        resolver: string;
        permit2Address: string;
    };
    cosignatureHash(): string;
    recoverCosigner(): string;
}
