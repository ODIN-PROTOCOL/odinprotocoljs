import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.crisis.v1beta1";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
    sender: string;
    invariantModuleName: string;
    invariantRoute: string;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {
}
export declare const MsgVerifyInvariant: {
    encode(message: MsgVerifyInvariant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariant;
    fromJSON(object: any): MsgVerifyInvariant;
    toJSON(message: MsgVerifyInvariant): unknown;
    create<I extends {
        sender?: string | undefined;
        invariantModuleName?: string | undefined;
        invariantRoute?: string | undefined;
    } & {
        sender?: string | undefined;
        invariantModuleName?: string | undefined;
        invariantRoute?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgVerifyInvariant>]: never; }>(base?: I | undefined): MsgVerifyInvariant;
    fromPartial<I_1 extends {
        sender?: string | undefined;
        invariantModuleName?: string | undefined;
        invariantRoute?: string | undefined;
    } & {
        sender?: string | undefined;
        invariantModuleName?: string | undefined;
        invariantRoute?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgVerifyInvariant>]: never; }>(object: I_1): MsgVerifyInvariant;
};
export declare const MsgVerifyInvariantResponse: {
    encode(_: MsgVerifyInvariantResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVerifyInvariantResponse;
    fromJSON(_: any): MsgVerifyInvariantResponse;
    toJSON(_: MsgVerifyInvariantResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): MsgVerifyInvariantResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgVerifyInvariantResponse;
};
/** Msg defines the bank Msg service. */
export interface Msg {
    /** VerifyInvariant defines a method to verify a particular invariance. */
    VerifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    VerifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
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
