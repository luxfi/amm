import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message data.v1.ReorgedBlock
 */
export declare class ReorgedBlock extends Message<ReorgedBlock> {
    /**
     * @generated from field: uint64 chain_id = 1;
     */
    chainId: bigint;
    /**
     * @generated from field: uint64 block_num = 2;
     */
    blockNum: bigint;
    /**
     * @generated from field: string block_hash = 3;
     */
    blockHash: string;
    /**
     * @generated from field: uint64 created_at = 4;
     */
    createdAt: bigint;
    constructor(data?: PartialMessage<ReorgedBlock>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "data.v1.ReorgedBlock";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReorgedBlock;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReorgedBlock;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReorgedBlock;
    static equals(a: ReorgedBlock | PlainMessage<ReorgedBlock> | undefined, b: ReorgedBlock | PlainMessage<ReorgedBlock> | undefined): boolean;
}
