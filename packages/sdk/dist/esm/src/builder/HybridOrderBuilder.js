import { BigNumber, constants } from "ethers";
import invariant from "tiny-invariant";
import { BASE_SCALING_FACTOR } from "../constants/v4";
import { CosignedHybridOrder, UnsignedHybridOrder, } from "../order/v4/HybridOrder";
const ZERO_ADDRESS = constants.AddressZero;
export class HybridOrderBuilder {
    static fromOrder(order, resolver) {
        const builder = new HybridOrderBuilder(order.chainId, order.info.reactor, resolver || order.resolver, order.permit2Address);
        builder
            .cosigner(order.info.cosigner)
            .input(order.info.input)
            .deadline(order.info.deadline)
            .nonce(order.info.nonce)
            .swapper(order.info.swapper)
            .auctionStartBlock(order.info.auctionStartBlock)
            .baselinePriorityFee(order.info.baselinePriorityFee)
            .scalingFactor(order.info.scalingFactor)
            .priceCurve(order.info.priceCurve)
            .preExecutionHook(order.info.preExecutionHook, order.info.preExecutionHookData)
            .postExecutionHook(order.info.postExecutionHook, order.info.postExecutionHookData)
            .auctionResolver(order.info.auctionResolver);
        order.info.outputs.forEach((output) => {
            builder.output(output);
        });
        // Copy cosigner data and signature if it's a cosigned order
        if ("cosignerData" in order.info && "cosignature" in order.info) {
            const cosignedInfo = order.info;
            builder.cosignerData(cosignedInfo.cosignerData);
            if (cosignedInfo.cosignature && cosignedInfo.cosignature !== "0x") {
                builder.cosignature(cosignedInfo.cosignature);
            }
        }
        return builder;
    }
    constructor(chainId, reactor, resolver, permit2Address) {
        this.chainId = chainId;
        this.resolver = resolver;
        this.permit2Address = permit2Address;
        this.info = {
            reactor,
            preExecutionHook: ZERO_ADDRESS,
            preExecutionHookData: "0x",
            postExecutionHook: ZERO_ADDRESS,
            postExecutionHookData: "0x",
            auctionResolver: resolver,
        };
        this.orderData = {
            outputs: [],
        };
        this.initializeCosignerData({});
    }
    initializeCosignerData(data) {
        this.orderData.cosignerData = Object.assign({ auctionTargetBlock: BigNumber.from(0), supplementalPriceCurve: [], exclusiveFiller: ZERO_ADDRESS, exclusivityOverrideBps: BigNumber.from(0), exclusivityEndBlock: BigNumber.from(0) }, data);
    }
    validatePriceCurve(curve, prefix) {
        curve.forEach((elem, i) => {
            if (elem.lt(0)) {
                throw new Error(`${prefix} curve element ${i} must be non-negative`);
            }
        });
    }
    reactor(reactor) {
        this.info.reactor = reactor;
        return this;
    }
    swapper(swapper) {
        this.info.swapper = swapper;
        return this;
    }
    nonce(nonce) {
        this.info.nonce = nonce;
        return this;
    }
    deadline(deadline) {
        this.info.deadline = deadline;
        return this;
    }
    preExecutionHook(hook, hookData) {
        this.info.preExecutionHook = hook;
        if (hookData !== undefined) {
            this.info.preExecutionHookData = hookData;
        }
        return this;
    }
    postExecutionHook(hook, hookData) {
        this.info.postExecutionHook = hook;
        if (hookData !== undefined) {
            this.info.postExecutionHookData = hookData;
        }
        return this;
    }
    auctionResolver(resolver) {
        this.info.auctionResolver = resolver;
        return this;
    }
    cosigner(cosigner) {
        this.orderData.cosigner = cosigner;
        return this;
    }
    cosignature(cosignature) {
        this.orderData.cosignature = cosignature;
        return this;
    }
    input(input) {
        this.orderData.input = input;
        return this;
    }
    output(output) {
        this.orderData.outputs.push(output);
        return this;
    }
    auctionStartBlock(block) {
        this.orderData.auctionStartBlock =
            typeof block === "number" ? BigNumber.from(block) : block;
        return this;
    }
    baselinePriorityFee(fee) {
        this.orderData.baselinePriorityFee =
            typeof fee === "number" ? BigNumber.from(fee) : fee;
        return this;
    }
    scalingFactor(factor) {
        this.orderData.scalingFactor = factor;
        return this;
    }
    priceCurve(curve) {
        // Validate each price curve element
        this.validatePriceCurve(curve, "Price");
        this.orderData.priceCurve = curve;
        return this;
    }
    cosignerData(data) {
        this.orderData.cosignerData = data;
        return this;
    }
    auctionTargetBlock(block) {
        if (!this.orderData.cosignerData) {
            this.initializeCosignerData({
                auctionTargetBlock: typeof block === "number" ? BigNumber.from(block) : block,
            });
        }
        else {
            this.orderData.cosignerData.auctionTargetBlock =
                typeof block === "number" ? BigNumber.from(block) : block;
        }
        return this;
    }
    supplementalPriceCurve(curve) {
        // Validate each supplemental price curve element
        this.validatePriceCurve(curve, "Supplemental price");
        if (!this.orderData.cosignerData) {
            this.initializeCosignerData({ supplementalPriceCurve: curve });
        }
        else {
            this.orderData.cosignerData.supplementalPriceCurve = curve;
        }
        return this;
    }
    exclusiveFiller(exclusiveFiller) {
        if (!this.orderData.cosignerData) {
            this.initializeCosignerData({ exclusiveFiller });
        }
        else {
            this.orderData.cosignerData.exclusiveFiller = exclusiveFiller;
        }
        return this;
    }
    exclusivityOverrideBps(exclusivityOverrideBps) {
        if (!this.orderData.cosignerData) {
            this.initializeCosignerData({ exclusivityOverrideBps });
        }
        else {
            this.orderData.cosignerData.exclusivityOverrideBps = exclusivityOverrideBps;
        }
        return this;
    }
    exclusivityEndBlock(block) {
        const value = typeof block === "number" ? BigNumber.from(block) : block;
        if (!this.orderData.cosignerData) {
            this.initializeCosignerData({ exclusivityEndBlock: value });
        }
        else {
            this.orderData.cosignerData.exclusivityEndBlock = value;
        }
        return this;
    }
    checkUnsignedInvariants() {
        invariant(this.info.reactor !== undefined, "reactor not set");
        invariant(this.info.swapper !== undefined, "swapper not set");
        invariant(this.info.nonce !== undefined, "nonce not set");
        invariant(this.info.deadline !== undefined, "deadline not set");
        invariant(this.info.deadline > Math.floor(Date.now() / 1000), `Deadline must be in the future: ${this.info.deadline}`);
        invariant(this.info.preExecutionHook !== undefined, "preExecutionHook not set");
        invariant(this.info.auctionResolver !== undefined, "auctionResolver not set");
        invariant(this.orderData.input !== undefined, "input not set");
        invariant(this.orderData.outputs && this.orderData.outputs.length > 0, "outputs not set");
        invariant(this.orderData.auctionStartBlock !== undefined, "auctionStartBlock not set");
        invariant(this.orderData.baselinePriorityFee !== undefined, "baselinePriorityFee not set");
        invariant(this.orderData.scalingFactor !== undefined, "scalingFactor not set");
        invariant(this.orderData.priceCurve !== undefined, "priceCurve not set");
        // Validate price curve consistency
        if (this.orderData.priceCurve && this.orderData.priceCurve.length > 0) {
            // All scaling factors must share direction
            // Compare each pair of adjacent elements
            for (let i = 1; i < this.orderData.priceCurve.length; i++) {
                const prevScaling = this.extractScalingFactor(this.orderData.priceCurve[i - 1]);
                const scaling = this.extractScalingFactor(this.orderData.priceCurve[i]);
                // Either value is 1e18 (neutral), or both on same side of 1e18
                const sharesDirection = prevScaling.eq(BASE_SCALING_FACTOR) ||
                    scaling.eq(BASE_SCALING_FACTOR) ||
                    prevScaling.gt(BASE_SCALING_FACTOR) === scaling.gt(BASE_SCALING_FACTOR);
                invariant(sharesDirection, `Price curve scaling factors must share direction. Element ${i} violates this.`);
            }
        }
        // Validate input amounts
        invariant(this.orderData.input.maxAmount.gt(0), "input maxAmount must be greater than 0");
        // Validate output amounts
        this.orderData.outputs.forEach((output, i) => {
            invariant(output.minAmount.gt(0), `output ${i} minAmount must be greater than 0`);
        });
        // Validate baseline priority fee is non-negative
        invariant(this.orderData.baselinePriorityFee.gte(0), "baselinePriorityFee must be non-negative");
    }
    extractScalingFactor(curveElement) {
        // Price curve element format: (duration << 240) | scalingFactor
        // Extract lower 240 bits for scaling factor
        const mask = BigNumber.from(2).pow(240).sub(1);
        return curveElement.and(mask);
    }
    checkCosignedInvariants() {
        invariant(this.orderData.cosignature !== undefined &&
            this.orderData.cosignature !== "0x", "cosignature not set");
        invariant(this.orderData.cosignerData !== undefined, "cosignerData not set");
        invariant(this.orderData.cosignerData.auctionTargetBlock !== undefined, "auctionTargetBlock not set");
        invariant(this.orderData.cosignerData.supplementalPriceCurve !== undefined, "supplementalPriceCurve not set");
        invariant(this.orderData.cosignerData.exclusiveFiller !== undefined, "exclusiveFiller not set");
        invariant(this.orderData.cosignerData.exclusivityOverrideBps !== undefined, "exclusivityOverrideBps not set");
        invariant(this.orderData.cosignerData.exclusivityEndBlock !== undefined, "exclusivityEndBlock not set");
    }
    buildPartial() {
        this.checkUnsignedInvariants();
        const orderInfo = Object.assign(Object.assign({}, this.info), { cosigner: this.orderData.cosigner || ZERO_ADDRESS, input: this.orderData.input, outputs: this.orderData.outputs, auctionStartBlock: this.orderData.auctionStartBlock, baselinePriorityFee: this.orderData.baselinePriorityFee, scalingFactor: this.orderData.scalingFactor, priceCurve: this.orderData.priceCurve });
        return new UnsignedHybridOrder(orderInfo, this.chainId, this.resolver, this.permit2Address);
    }
    build() {
        this.checkUnsignedInvariants();
        this.checkCosignedInvariants();
        const orderInfo = Object.assign(Object.assign({}, this.info), { cosigner: this.orderData.cosigner, input: this.orderData.input, outputs: this.orderData.outputs, auctionStartBlock: this.orderData.auctionStartBlock, baselinePriorityFee: this.orderData.baselinePriorityFee, scalingFactor: this.orderData.scalingFactor, priceCurve: this.orderData.priceCurve, cosignerData: this.orderData.cosignerData, cosignature: this.orderData.cosignature });
        return new CosignedHybridOrder(orderInfo, this.chainId, this.resolver, this.permit2Address);
    }
}
//# sourceMappingURL=HybridOrderBuilder.js.map