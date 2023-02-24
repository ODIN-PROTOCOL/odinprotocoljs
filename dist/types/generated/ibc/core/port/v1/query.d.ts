import Long from "long";
import _m0 from "protobufjs/minimal";
import { Counterparty, Order } from "../../channel/v1/channel";
export declare const protobufPackage = "ibc.core.port.v1";
/** QueryAppVersionRequest is the request type for the Query/AppVersion RPC method */
export interface QueryAppVersionRequest {
    /** port unique identifier */
    portId: string;
    /** connection unique identifier */
    connectionId: string;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty?: Counterparty;
    /** proposed version */
    proposedVersion: string;
}
/** QueryAppVersionResponse is the response type for the Query/AppVersion RPC method. */
export interface QueryAppVersionResponse {
    /** port id associated with the request identifiers */
    portId: string;
    /** supported app version */
    version: string;
}
export declare const QueryAppVersionRequest: {
    encode(message: QueryAppVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppVersionRequest;
    fromJSON(object: any): QueryAppVersionRequest;
    toJSON(message: QueryAppVersionRequest): unknown;
    create<I extends {
        portId?: string | undefined;
        connectionId?: string | undefined;
        ordering?: Order | undefined;
        counterparty?: {
            portId?: string | undefined;
            channelId?: string | undefined;
        } | undefined;
        proposedVersion?: string | undefined;
    } & {
        portId?: string | undefined;
        connectionId?: string | undefined;
        ordering?: Order | undefined;
        counterparty?: ({
            portId?: string | undefined;
            channelId?: string | undefined;
        } & {
            portId?: string | undefined;
            channelId?: string | undefined;
        } & { [K in Exclude<keyof I["counterparty"], keyof Counterparty>]: never; }) | undefined;
        proposedVersion?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryAppVersionRequest>]: never; }>(base?: I | undefined): QueryAppVersionRequest;
    fromPartial<I_1 extends {
        portId?: string | undefined;
        connectionId?: string | undefined;
        ordering?: Order | undefined;
        counterparty?: {
            portId?: string | undefined;
            channelId?: string | undefined;
        } | undefined;
        proposedVersion?: string | undefined;
    } & {
        portId?: string | undefined;
        connectionId?: string | undefined;
        ordering?: Order | undefined;
        counterparty?: ({
            portId?: string | undefined;
            channelId?: string | undefined;
        } & {
            portId?: string | undefined;
            channelId?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["counterparty"], keyof Counterparty>]: never; }) | undefined;
        proposedVersion?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof QueryAppVersionRequest>]: never; }>(object: I_1): QueryAppVersionRequest;
};
export declare const QueryAppVersionResponse: {
    encode(message: QueryAppVersionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppVersionResponse;
    fromJSON(object: any): QueryAppVersionResponse;
    toJSON(message: QueryAppVersionResponse): unknown;
    create<I extends {
        portId?: string | undefined;
        version?: string | undefined;
    } & {
        portId?: string | undefined;
        version?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryAppVersionResponse>]: never; }>(base?: I | undefined): QueryAppVersionResponse;
    fromPartial<I_1 extends {
        portId?: string | undefined;
        version?: string | undefined;
    } & {
        portId?: string | undefined;
        version?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryAppVersionResponse>]: never; }>(object: I_1): QueryAppVersionResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** AppVersion queries an IBC Port and determines the appropriate application version to be used */
    AppVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    AppVersion(request: QueryAppVersionRequest): Promise<QueryAppVersionResponse>;
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
