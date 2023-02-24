import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { BIP44Params } from "../../hd/v1/hd";
export declare const protobufPackage = "cosmos.crypto.keyring.v1";
/** Record is used for representing a key in the keyring. */
export interface Record {
    /** name represents a name of Record */
    name: string;
    /** pub_key represents a public key in any format */
    pubKey?: Any;
    /** local stores the public information about a locally stored key */
    local?: Record_Local | undefined;
    /** ledger stores the public information about a Ledger key */
    ledger?: Record_Ledger | undefined;
    /** Multi does not store any information. */
    multi?: Record_Multi | undefined;
    /** Offline does not store any information. */
    offline?: Record_Offline | undefined;
}
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 */
export interface Record_Local {
    privKey?: Any;
    privKeyType: string;
}
/** Ledger item */
export interface Record_Ledger {
    path?: BIP44Params;
}
/** Multi item */
export interface Record_Multi {
}
/** Offline item */
export interface Record_Offline {
}
export declare const Record: {
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record;
    fromJSON(object: any): Record;
    toJSON(message: Record): unknown;
    create<I extends {
        name?: string | undefined;
        pubKey?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        local?: {
            privKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            privKeyType?: string | undefined;
        } | undefined;
        ledger?: {
            path?: {
                purpose?: number | undefined;
                coinType?: number | undefined;
                account?: number | undefined;
                change?: boolean | undefined;
                addressIndex?: number | undefined;
            } | undefined;
        } | undefined;
        multi?: {} | undefined;
        offline?: {} | undefined;
    } & {
        name?: string | undefined;
        pubKey?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["pubKey"], keyof Any>]: never; }) | undefined;
        local?: ({
            privKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            privKeyType?: string | undefined;
        } & {
            privKey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_1 in Exclude<keyof I["local"]["privKey"], keyof Any>]: never; }) | undefined;
            privKeyType?: string | undefined;
        } & { [K_2 in Exclude<keyof I["local"], keyof Record_Local>]: never; }) | undefined;
        ledger?: ({
            path?: {
                purpose?: number | undefined;
                coinType?: number | undefined;
                account?: number | undefined;
                change?: boolean | undefined;
                addressIndex?: number | undefined;
            } | undefined;
        } & {
            path?: ({
                purpose?: number | undefined;
                coinType?: number | undefined;
                account?: number | undefined;
                change?: boolean | undefined;
                addressIndex?: number | undefined;
            } & {
                purpose?: number | undefined;
                coinType?: number | undefined;
                account?: number | undefined;
                change?: boolean | undefined;
                addressIndex?: number | undefined;
            } & { [K_3 in Exclude<keyof I["ledger"]["path"], keyof BIP44Params>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["ledger"], "path">]: never; }) | undefined;
        multi?: ({} & {} & { [K_5 in Exclude<keyof I["multi"], never>]: never; }) | undefined;
        offline?: ({} & {} & { [K_6 in Exclude<keyof I["offline"], never>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, keyof Record>]: never; }>(base?: I | undefined): Record;
    fromPartial<I_1 extends {
        name?: string | undefined;
        pubKey?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        local?: {
            privKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            privKeyType?: string | undefined;
        } | undefined;
        ledger?: {
            path?: {
                purpose?: number | undefined;
                coinType?: number | undefined;
                account?: number | undefined;
                change?: boolean | undefined;
                addressIndex?: number | undefined;
            } | undefined;
        } | undefined;
        multi?: {} | undefined;
        offline?: {} | undefined;
    } & {
        name?: string | undefined;
        pubKey?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_8 in Exclude<keyof I_1["pubKey"], keyof Any>]: never; }) | undefined;
        local?: ({
            privKey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            privKeyType?: string | undefined;
        } & {
            privKey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_9 in Exclude<keyof I_1["local"]["privKey"], keyof Any>]: never; }) | undefined;
            privKeyType?: string | undefined;
        } & { [K_10 in Exclude<keyof I_1["local"], keyof Record_Local>]: never; }) | undefined;
        ledger?: ({
            path?: {
                purpose?: number | undefined;
                coinType?: number | undefined;
                account?: number | undefined;
                change?: boolean | undefined;
                addressIndex?: number | undefined;
            } | undefined;
        } & {
            path?: ({
                purpose?: number | undefined;
                coinType?: number | undefined;
                account?: number | undefined;
                change?: boolean | undefined;
                addressIndex?: number | undefined;
            } & {
                purpose?: number | undefined;
                coinType?: number | undefined;
                account?: number | undefined;
                change?: boolean | undefined;
                addressIndex?: number | undefined;
            } & { [K_11 in Exclude<keyof I_1["ledger"]["path"], keyof BIP44Params>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I_1["ledger"], "path">]: never; }) | undefined;
        multi?: ({} & {} & { [K_13 in Exclude<keyof I_1["multi"], never>]: never; }) | undefined;
        offline?: ({} & {} & { [K_14 in Exclude<keyof I_1["offline"], never>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof Record>]: never; }>(object: I_1): Record;
};
export declare const Record_Local: {
    encode(message: Record_Local, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Local;
    fromJSON(object: any): Record_Local;
    toJSON(message: Record_Local): unknown;
    create<I extends {
        privKey?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        privKeyType?: string | undefined;
    } & {
        privKey?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["privKey"], keyof Any>]: never; }) | undefined;
        privKeyType?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Record_Local>]: never; }>(base?: I | undefined): Record_Local;
    fromPartial<I_1 extends {
        privKey?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        privKeyType?: string | undefined;
    } & {
        privKey?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I_1["privKey"], keyof Any>]: never; }) | undefined;
        privKeyType?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Record_Local>]: never; }>(object: I_1): Record_Local;
};
export declare const Record_Ledger: {
    encode(message: Record_Ledger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Ledger;
    fromJSON(object: any): Record_Ledger;
    toJSON(message: Record_Ledger): unknown;
    create<I extends {
        path?: {
            purpose?: number | undefined;
            coinType?: number | undefined;
            account?: number | undefined;
            change?: boolean | undefined;
            addressIndex?: number | undefined;
        } | undefined;
    } & {
        path?: ({
            purpose?: number | undefined;
            coinType?: number | undefined;
            account?: number | undefined;
            change?: boolean | undefined;
            addressIndex?: number | undefined;
        } & {
            purpose?: number | undefined;
            coinType?: number | undefined;
            account?: number | undefined;
            change?: boolean | undefined;
            addressIndex?: number | undefined;
        } & { [K in Exclude<keyof I["path"], keyof BIP44Params>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "path">]: never; }>(base?: I | undefined): Record_Ledger;
    fromPartial<I_1 extends {
        path?: {
            purpose?: number | undefined;
            coinType?: number | undefined;
            account?: number | undefined;
            change?: boolean | undefined;
            addressIndex?: number | undefined;
        } | undefined;
    } & {
        path?: ({
            purpose?: number | undefined;
            coinType?: number | undefined;
            account?: number | undefined;
            change?: boolean | undefined;
            addressIndex?: number | undefined;
        } & {
            purpose?: number | undefined;
            coinType?: number | undefined;
            account?: number | undefined;
            change?: boolean | undefined;
            addressIndex?: number | undefined;
        } & { [K_2 in Exclude<keyof I_1["path"], keyof BIP44Params>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "path">]: never; }>(object: I_1): Record_Ledger;
};
export declare const Record_Multi: {
    encode(_: Record_Multi, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Multi;
    fromJSON(_: any): Record_Multi;
    toJSON(_: Record_Multi): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): Record_Multi;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): Record_Multi;
};
export declare const Record_Offline: {
    encode(_: Record_Offline, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record_Offline;
    fromJSON(_: any): Record_Offline;
    toJSON(_: Record_Offline): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): Record_Offline;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): Record_Offline;
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
