import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "cosmos.authz.v1beta1";
/** Since: cosmos-sdk 0.43 */
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
    authorization?: Any;
    /**
     * time when the grant will expire and will be pruned. If null, then the grant
     * doesn't have a time expiration (other conditions  in `authorization`
     * may apply to invalidate the grant)
     */
    expiration?: Date;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 */
export interface GrantAuthorization {
    granter: string;
    grantee: string;
    authorization?: Any;
    expiration?: Date;
}
/** GrantQueueItem contains the list of TypeURL of a sdk.Msg. */
export interface GrantQueueItem {
    /** msg_type_urls contains the list of TypeURL of a sdk.Msg. */
    msgTypeUrls: string[];
}
export declare const GenericAuthorization: {
    encode(message: GenericAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenericAuthorization;
    fromJSON(object: any): GenericAuthorization;
    toJSON(message: GenericAuthorization): unknown;
    create<I extends {
        msg?: string | undefined;
    } & {
        msg?: string | undefined;
    } & { [K in Exclude<keyof I, "msg">]: never; }>(base?: I | undefined): GenericAuthorization;
    fromPartial<I_1 extends {
        msg?: string | undefined;
    } & {
        msg?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "msg">]: never; }>(object: I_1): GenericAuthorization;
};
export declare const Grant: {
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Grant;
    fromJSON(object: any): Grant;
    toJSON(message: Grant): unknown;
    create<I extends {
        authorization?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        expiration?: Date | undefined;
    } & {
        authorization?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["authorization"], keyof Any>]: never; }) | undefined;
        expiration?: Date | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Grant>]: never; }>(base?: I | undefined): Grant;
    fromPartial<I_1 extends {
        authorization?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        expiration?: Date | undefined;
    } & {
        authorization?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I_1["authorization"], keyof Any>]: never; }) | undefined;
        expiration?: Date | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Grant>]: never; }>(object: I_1): Grant;
};
export declare const GrantAuthorization: {
    encode(message: GrantAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantAuthorization;
    fromJSON(object: any): GrantAuthorization;
    toJSON(message: GrantAuthorization): unknown;
    create<I extends {
        granter?: string | undefined;
        grantee?: string | undefined;
        authorization?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        expiration?: Date | undefined;
    } & {
        granter?: string | undefined;
        grantee?: string | undefined;
        authorization?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["authorization"], keyof Any>]: never; }) | undefined;
        expiration?: Date | undefined;
    } & { [K_1 in Exclude<keyof I, keyof GrantAuthorization>]: never; }>(base?: I | undefined): GrantAuthorization;
    fromPartial<I_1 extends {
        granter?: string | undefined;
        grantee?: string | undefined;
        authorization?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        expiration?: Date | undefined;
    } & {
        granter?: string | undefined;
        grantee?: string | undefined;
        authorization?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I_1["authorization"], keyof Any>]: never; }) | undefined;
        expiration?: Date | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof GrantAuthorization>]: never; }>(object: I_1): GrantAuthorization;
};
export declare const GrantQueueItem: {
    encode(message: GrantQueueItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GrantQueueItem;
    fromJSON(object: any): GrantQueueItem;
    toJSON(message: GrantQueueItem): unknown;
    create<I extends {
        msgTypeUrls?: string[] | undefined;
    } & {
        msgTypeUrls?: (string[] & string[] & { [K in Exclude<keyof I["msgTypeUrls"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "msgTypeUrls">]: never; }>(base?: I | undefined): GrantQueueItem;
    fromPartial<I_1 extends {
        msgTypeUrls?: string[] | undefined;
    } & {
        msgTypeUrls?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["msgTypeUrls"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "msgTypeUrls">]: never; }>(object: I_1): GrantQueueItem;
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
