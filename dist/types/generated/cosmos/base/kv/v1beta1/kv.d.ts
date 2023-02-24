import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.kv.v1beta1";
/** Pairs defines a repeated slice of Pair objects. */
export interface Pairs {
    pairs: Pair[];
}
/** Pair defines a key/value bytes tuple. */
export interface Pair {
    key: Uint8Array;
    value: Uint8Array;
}
export declare const Pairs: {
    encode(message: Pairs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pairs;
    fromJSON(object: any): Pairs;
    toJSON(message: Pairs): unknown;
    create<I extends {
        pairs?: {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        pairs?: ({
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        } & {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["pairs"][number], keyof Pair>]: never; })[] & { [K_1 in Exclude<keyof I["pairs"], keyof {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "pairs">]: never; }>(base?: I | undefined): Pairs;
    fromPartial<I_1 extends {
        pairs?: {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        pairs?: ({
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        } & {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        } & { [K_3 in Exclude<keyof I_1["pairs"][number], keyof Pair>]: never; })[] & { [K_4 in Exclude<keyof I_1["pairs"], keyof {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "pairs">]: never; }>(object: I_1): Pairs;
};
export declare const Pair: {
    encode(message: Pair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pair;
    fromJSON(object: any): Pair;
    toJSON(message: Pair): unknown;
    create<I extends {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof Pair>]: never; }>(base?: I | undefined): Pair;
    fromPartial<I_1 extends {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Pair>]: never; }>(object: I_1): Pair;
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
