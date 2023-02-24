import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.slashing.v1beta1";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
    validatorAddr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {
}
export declare const MsgUnjail: {
    encode(message: MsgUnjail, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjail;
    fromJSON(object: any): MsgUnjail;
    toJSON(message: MsgUnjail): unknown;
    create<I extends {
        validatorAddr?: string | undefined;
    } & {
        validatorAddr?: string | undefined;
    } & { [K in Exclude<keyof I, "validatorAddr">]: never; }>(base?: I | undefined): MsgUnjail;
    fromPartial<I_1 extends {
        validatorAddr?: string | undefined;
    } & {
        validatorAddr?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "validatorAddr">]: never; }>(object: I_1): MsgUnjail;
};
export declare const MsgUnjailResponse: {
    encode(_: MsgUnjailResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjailResponse;
    fromJSON(_: any): MsgUnjailResponse;
    toJSON(_: MsgUnjailResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): MsgUnjailResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgUnjailResponse;
};
/** Msg defines the slashing Msg service. */
export interface Msg {
    /**
     * Unjail defines a method for unjailing a jailed validator, thus returning
     * them into the bonded validator set, so they can begin receiving provisions
     * and rewards again.
     */
    Unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
