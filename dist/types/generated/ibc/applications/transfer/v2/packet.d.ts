import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.transfer.v2";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
    /** the token denomination to be transferred */
    denom: string;
    /** the token amount to be transferred */
    amount: string;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
}
export declare const FungibleTokenPacketData: {
    encode(message: FungibleTokenPacketData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FungibleTokenPacketData;
    fromJSON(object: any): FungibleTokenPacketData;
    toJSON(message: FungibleTokenPacketData): unknown;
    create<I extends {
        denom?: string | undefined;
        amount?: string | undefined;
        sender?: string | undefined;
        receiver?: string | undefined;
    } & {
        denom?: string | undefined;
        amount?: string | undefined;
        sender?: string | undefined;
        receiver?: string | undefined;
    } & { [K in Exclude<keyof I, keyof FungibleTokenPacketData>]: never; }>(base?: I | undefined): FungibleTokenPacketData;
    fromPartial<I_1 extends {
        denom?: string | undefined;
        amount?: string | undefined;
        sender?: string | undefined;
        receiver?: string | undefined;
    } & {
        denom?: string | undefined;
        amount?: string | undefined;
        sender?: string | undefined;
        receiver?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof FungibleTokenPacketData>]: never; }>(object: I_1): FungibleTokenPacketData;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
