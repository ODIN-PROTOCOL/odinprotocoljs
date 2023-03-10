import Long from "long";
import _m0 from "protobufjs/minimal";
import { DenomTrace, Params } from "./transfer";
export declare const protobufPackage = "ibc.applications.transfer.v1";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
    portId: string;
    denomTraces: DenomTrace[];
    params?: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        portId?: string | undefined;
        denomTraces?: {
            path?: string | undefined;
            baseDenom?: string | undefined;
        }[] | undefined;
        params?: {
            sendEnabled?: boolean | undefined;
            receiveEnabled?: boolean | undefined;
        } | undefined;
    } & {
        portId?: string | undefined;
        denomTraces?: ({
            path?: string | undefined;
            baseDenom?: string | undefined;
        }[] & ({
            path?: string | undefined;
            baseDenom?: string | undefined;
        } & {
            path?: string | undefined;
            baseDenom?: string | undefined;
        } & { [K in Exclude<keyof I["denomTraces"][number], keyof DenomTrace>]: never; })[] & { [K_1 in Exclude<keyof I["denomTraces"], keyof {
            path?: string | undefined;
            baseDenom?: string | undefined;
        }[]>]: never; }) | undefined;
        params?: ({
            sendEnabled?: boolean | undefined;
            receiveEnabled?: boolean | undefined;
        } & {
            sendEnabled?: boolean | undefined;
            receiveEnabled?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        portId?: string | undefined;
        denomTraces?: {
            path?: string | undefined;
            baseDenom?: string | undefined;
        }[] | undefined;
        params?: {
            sendEnabled?: boolean | undefined;
            receiveEnabled?: boolean | undefined;
        } | undefined;
    } & {
        portId?: string | undefined;
        denomTraces?: ({
            path?: string | undefined;
            baseDenom?: string | undefined;
        }[] & ({
            path?: string | undefined;
            baseDenom?: string | undefined;
        } & {
            path?: string | undefined;
            baseDenom?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["denomTraces"][number], keyof DenomTrace>]: never; })[] & { [K_5 in Exclude<keyof I_1["denomTraces"], keyof {
            path?: string | undefined;
            baseDenom?: string | undefined;
        }[]>]: never; }) | undefined;
        params?: ({
            sendEnabled?: boolean | undefined;
            receiveEnabled?: boolean | undefined;
        } & {
            sendEnabled?: boolean | undefined;
            receiveEnabled?: boolean | undefined;
        } & { [K_6 in Exclude<keyof I_1["params"], keyof Params>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
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
