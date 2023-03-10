import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.store.v1beta1";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
    /** the store key for the KVStore this pair originates from */
    storeKey: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
export declare const StoreKVPair: {
    encode(message: StoreKVPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StoreKVPair;
    fromJSON(object: any): StoreKVPair;
    toJSON(message: StoreKVPair): unknown;
    create<I extends {
        storeKey?: string | undefined;
        delete?: boolean | undefined;
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & {
        storeKey?: string | undefined;
        delete?: boolean | undefined;
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof StoreKVPair>]: never; }>(base?: I | undefined): StoreKVPair;
    fromPartial<I_1 extends {
        storeKey?: string | undefined;
        delete?: boolean | undefined;
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & {
        storeKey?: string | undefined;
        delete?: boolean | undefined;
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof StoreKVPair>]: never; }>(object: I_1): StoreKVPair;
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
