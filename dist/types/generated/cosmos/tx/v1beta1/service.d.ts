import Long from "long";
import _m0 from "protobufjs/minimal";
import { Block } from "../../../tendermint/types/block";
import { BlockID } from "../../../tendermint/types/types";
import { GasInfo, Result, TxResponse } from "../../base/abci/v1beta1/abci";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Tx } from "./tx";
export declare const protobufPackage = "cosmos.tx.v1beta1";
/** OrderBy defines the sorting order */
export declare enum OrderBy {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    ORDER_BY_UNSPECIFIED = 0,
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    ORDER_BY_ASC = 1,
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    ORDER_BY_DESC = 2,
    UNRECOGNIZED = -1
}
export declare function orderByFromJSON(object: any): OrderBy;
export declare function orderByToJSON(object: OrderBy): string;
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
export declare enum BroadcastMode {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BROADCAST_MODE_UNSPECIFIED = 0,
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BROADCAST_MODE_BLOCK = 1,
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BROADCAST_MODE_SYNC = 2,
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BROADCAST_MODE_ASYNC = 3,
    UNRECOGNIZED = -1
}
export declare function broadcastModeFromJSON(object: any): BroadcastMode;
export declare function broadcastModeToJSON(object: BroadcastMode): string;
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventRequest {
    /** events is the list of transaction event type. */
    events: string[];
    /** pagination defines a pagination for the request. */
    pagination?: PageRequest;
    orderBy: OrderBy;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 */
export interface GetTxsEventResponse {
    /** txs is the list of queried transactions. */
    txs: Tx[];
    /** tx_responses is the list of queried TxResponses. */
    txResponses: TxResponse[];
    /** pagination defines a pagination for the response. */
    pagination?: PageResponse;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 */
export interface BroadcastTxRequest {
    /** tx_bytes is the raw transaction. */
    txBytes: Uint8Array;
    mode: BroadcastMode;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 */
export interface BroadcastTxResponse {
    /** tx_response is the queried TxResponses. */
    txResponse?: TxResponse;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 */
export interface SimulateRequest {
    /**
     * tx is the transaction to simulate.
     * Deprecated. Send raw tx bytes instead.
     *
     * @deprecated
     */
    tx?: Tx;
    /**
     * tx_bytes is the raw transaction.
     *
     * Since: cosmos-sdk 0.43
     */
    txBytes: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 */
export interface SimulateResponse {
    /** gas_info is the information about gas used in the simulation. */
    gasInfo?: GasInfo;
    /** result is the result of the simulation. */
    result?: Result;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 */
export interface GetTxRequest {
    /** hash is the tx hash to query, encoded as a hex string. */
    hash: string;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxResponse {
    /** tx is the queried transaction. */
    tx?: Tx;
    /** tx_response is the queried TxResponses. */
    txResponse?: TxResponse;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsRequest {
    /** height is the height of the block to query. */
    height: Long;
    /** pagination defines a pagination for the request. */
    pagination?: PageRequest;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs method.
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GetBlockWithTxsResponse {
    /** txs are the transactions in the block. */
    txs: Tx[];
    blockId?: BlockID;
    block?: Block;
    /** pagination defines a pagination for the response. */
    pagination?: PageResponse;
}
export declare const GetTxsEventRequest: {
    encode(message: GetTxsEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventRequest;
    fromJSON(object: any): GetTxsEventRequest;
    toJSON(message: GetTxsEventRequest): unknown;
    create<I extends {
        events?: string[] | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        orderBy?: OrderBy | undefined;
    } & {
        events?: (string[] & string[] & { [K in Exclude<keyof I["events"], keyof string[]>]: never; }) | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_1 in Exclude<keyof I["pagination"]["offset"], keyof Long>]: never; }) | undefined;
            limit?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_2 in Exclude<keyof I["pagination"]["limit"], keyof Long>]: never; }) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
        orderBy?: OrderBy | undefined;
    } & { [K_4 in Exclude<keyof I, keyof GetTxsEventRequest>]: never; }>(base?: I | undefined): GetTxsEventRequest;
    fromPartial<I_1 extends {
        events?: string[] | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        orderBy?: OrderBy | undefined;
    } & {
        events?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["events"], keyof string[]>]: never; }) | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_6 in Exclude<keyof I_1["pagination"]["offset"], keyof Long>]: never; }) | undefined;
            limit?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_7 in Exclude<keyof I_1["pagination"]["limit"], keyof Long>]: never; }) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K_8 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; }) | undefined;
        orderBy?: OrderBy | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof GetTxsEventRequest>]: never; }>(object: I_1): GetTxsEventRequest;
};
export declare const GetTxsEventResponse: {
    encode(message: GetTxsEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxsEventResponse;
    fromJSON(object: any): GetTxsEventResponse;
    toJSON(message: GetTxsEventResponse): unknown;
    create<I extends {
        txs?: {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] | undefined;
        txResponses?: {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } | undefined;
    } & {
        txs?: ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] & ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                messages?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K in Exclude<keyof I["txs"][number]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_1 in Exclude<keyof I["txs"][number]["body"]["messages"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_2 in Exclude<keyof I["txs"][number]["body"]["timeoutHeight"], keyof Long>]: never; }) | undefined;
                extensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_3 in Exclude<keyof I["txs"][number]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_4 in Exclude<keyof I["txs"][number]["body"]["extensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                nonCriticalExtensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_5 in Exclude<keyof I["txs"][number]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_6 in Exclude<keyof I["txs"][number]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["txs"][number]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            authInfo?: ({
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signerInfos?: ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                } & {
                    publicKey?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_8 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    modeInfo?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_9 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_10 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            modeInfos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_11 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_12 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    modeInfos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_13 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_14 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            modeInfos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_15 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } & any & { [K_16 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_17 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_18 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_19 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_20 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_21 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_22 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_23 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_24 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_25 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_26 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_27 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["sequence"], keyof Long>]: never; }) | undefined;
                } & { [K_28 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_29 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_30 in Exclude<keyof I["txs"][number]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_31 in Exclude<keyof I["txs"][number]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gasLimit?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_32 in Exclude<keyof I["txs"][number]["authInfo"]["fee"]["gasLimit"], keyof Long>]: never; }) | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_33 in Exclude<keyof I["txs"][number]["authInfo"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_34 in Exclude<keyof I["txs"][number]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_35 in Exclude<keyof I["txs"][number]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_36 in Exclude<keyof I["txs"][number]["authInfo"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_37 in Exclude<keyof I["txs"][number]["authInfo"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_38 in Exclude<keyof I["txs"][number]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_39 in Exclude<keyof I["txs"][number], keyof Tx>]: never; })[] & { [K_40 in Exclude<keyof I["txs"], keyof {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[]>]: never; }) | undefined;
        txResponses?: ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_41 in Exclude<keyof I["txResponses"][number]["height"], keyof Long>]: never; }) | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & { [K_42 in Exclude<keyof I["txResponses"][number]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>]: never; })[] & { [K_43 in Exclude<keyof I["txResponses"][number]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_44 in Exclude<keyof I["txResponses"][number]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>]: never; })[] & { [K_45 in Exclude<keyof I["txResponses"][number]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_46 in Exclude<keyof I["txResponses"][number]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>]: never; })[] & { [K_47 in Exclude<keyof I["txResponses"][number]["logs"], keyof {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            info?: string | undefined;
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_48 in Exclude<keyof I["txResponses"][number]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_49 in Exclude<keyof I["txResponses"][number]["gasUsed"], keyof Long>]: never; }) | undefined;
            tx?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_50 in Exclude<keyof I["txResponses"][number]["tx"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_51 in Exclude<keyof I["txResponses"][number]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_52 in Exclude<keyof I["txResponses"][number]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_53 in Exclude<keyof I["txResponses"][number]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_54 in Exclude<keyof I["txResponses"][number]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_55 in Exclude<keyof I["txResponses"][number], keyof TxResponse>]: never; })[] & { [K_56 in Exclude<keyof I["txResponses"], keyof {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_57 in Exclude<keyof I["pagination"]["total"], keyof Long>]: never; }) | undefined;
        } & { [K_58 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_59 in Exclude<keyof I, keyof GetTxsEventResponse>]: never; }>(base?: I | undefined): GetTxsEventResponse;
    fromPartial<I_1 extends {
        txs?: {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] | undefined;
        txResponses?: {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } | undefined;
    } & {
        txs?: ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] & ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                messages?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_60 in Exclude<keyof I_1["txs"][number]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_61 in Exclude<keyof I_1["txs"][number]["body"]["messages"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_62 in Exclude<keyof I_1["txs"][number]["body"]["timeoutHeight"], keyof Long>]: never; }) | undefined;
                extensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_63 in Exclude<keyof I_1["txs"][number]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_64 in Exclude<keyof I_1["txs"][number]["body"]["extensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                nonCriticalExtensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_65 in Exclude<keyof I_1["txs"][number]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_66 in Exclude<keyof I_1["txs"][number]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_67 in Exclude<keyof I_1["txs"][number]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            authInfo?: ({
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signerInfos?: ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                } & {
                    publicKey?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_68 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    modeInfo?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_69 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_70 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            modeInfos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_71 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_72 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    modeInfos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_73 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_74 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            modeInfos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_75 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } & any & { [K_76 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_77 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_78 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_79 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_80 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_81 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_82 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_83 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_84 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_85 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_86 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_87 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["sequence"], keyof Long>]: never; }) | undefined;
                } & { [K_88 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_89 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_90 in Exclude<keyof I_1["txs"][number]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_91 in Exclude<keyof I_1["txs"][number]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gasLimit?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_92 in Exclude<keyof I_1["txs"][number]["authInfo"]["fee"]["gasLimit"], keyof Long>]: never; }) | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_93 in Exclude<keyof I_1["txs"][number]["authInfo"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_94 in Exclude<keyof I_1["txs"][number]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_95 in Exclude<keyof I_1["txs"][number]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_96 in Exclude<keyof I_1["txs"][number]["authInfo"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_97 in Exclude<keyof I_1["txs"][number]["authInfo"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_98 in Exclude<keyof I_1["txs"][number]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_99 in Exclude<keyof I_1["txs"][number], keyof Tx>]: never; })[] & { [K_100 in Exclude<keyof I_1["txs"], keyof {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[]>]: never; }) | undefined;
        txResponses?: ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_101 in Exclude<keyof I_1["txResponses"][number]["height"], keyof Long>]: never; }) | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & { [K_102 in Exclude<keyof I_1["txResponses"][number]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>]: never; })[] & { [K_103 in Exclude<keyof I_1["txResponses"][number]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_104 in Exclude<keyof I_1["txResponses"][number]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>]: never; })[] & { [K_105 in Exclude<keyof I_1["txResponses"][number]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_106 in Exclude<keyof I_1["txResponses"][number]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>]: never; })[] & { [K_107 in Exclude<keyof I_1["txResponses"][number]["logs"], keyof {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            info?: string | undefined;
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_108 in Exclude<keyof I_1["txResponses"][number]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_109 in Exclude<keyof I_1["txResponses"][number]["gasUsed"], keyof Long>]: never; }) | undefined;
            tx?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_110 in Exclude<keyof I_1["txResponses"][number]["tx"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_111 in Exclude<keyof I_1["txResponses"][number]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_112 in Exclude<keyof I_1["txResponses"][number]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_113 in Exclude<keyof I_1["txResponses"][number]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_114 in Exclude<keyof I_1["txResponses"][number]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_115 in Exclude<keyof I_1["txResponses"][number], keyof TxResponse>]: never; })[] & { [K_116 in Exclude<keyof I_1["txResponses"], keyof {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_117 in Exclude<keyof I_1["pagination"]["total"], keyof Long>]: never; }) | undefined;
        } & { [K_118 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_119 in Exclude<keyof I_1, keyof GetTxsEventResponse>]: never; }>(object: I_1): GetTxsEventResponse;
};
export declare const BroadcastTxRequest: {
    encode(message: BroadcastTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxRequest;
    fromJSON(object: any): BroadcastTxRequest;
    toJSON(message: BroadcastTxRequest): unknown;
    create<I extends {
        txBytes?: Uint8Array | undefined;
        mode?: BroadcastMode | undefined;
    } & {
        txBytes?: Uint8Array | undefined;
        mode?: BroadcastMode | undefined;
    } & { [K in Exclude<keyof I, keyof BroadcastTxRequest>]: never; }>(base?: I | undefined): BroadcastTxRequest;
    fromPartial<I_1 extends {
        txBytes?: Uint8Array | undefined;
        mode?: BroadcastMode | undefined;
    } & {
        txBytes?: Uint8Array | undefined;
        mode?: BroadcastMode | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof BroadcastTxRequest>]: never; }>(object: I_1): BroadcastTxRequest;
};
export declare const BroadcastTxResponse: {
    encode(message: BroadcastTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BroadcastTxResponse;
    fromJSON(object: any): BroadcastTxResponse;
    toJSON(message: BroadcastTxResponse): unknown;
    create<I extends {
        txResponse?: {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        txResponse?: ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K in Exclude<keyof I["txResponse"]["height"], keyof Long>]: never; }) | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["txResponse"]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>]: never; })[] & { [K_2 in Exclude<keyof I["txResponse"]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_3 in Exclude<keyof I["txResponse"]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>]: never; })[] & { [K_4 in Exclude<keyof I["txResponse"]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["txResponse"]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>]: never; })[] & { [K_6 in Exclude<keyof I["txResponse"]["logs"], keyof {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            info?: string | undefined;
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_7 in Exclude<keyof I["txResponse"]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_8 in Exclude<keyof I["txResponse"]["gasUsed"], keyof Long>]: never; }) | undefined;
            tx?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_9 in Exclude<keyof I["txResponse"]["tx"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_10 in Exclude<keyof I["txResponse"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_11 in Exclude<keyof I["txResponse"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["txResponse"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_13 in Exclude<keyof I["txResponse"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["txResponse"], keyof TxResponse>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I, "txResponse">]: never; }>(base?: I | undefined): BroadcastTxResponse;
    fromPartial<I_1 extends {
        txResponse?: {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        txResponse?: ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_16 in Exclude<keyof I_1["txResponse"]["height"], keyof Long>]: never; }) | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & { [K_17 in Exclude<keyof I_1["txResponse"]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>]: never; })[] & { [K_18 in Exclude<keyof I_1["txResponse"]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_19 in Exclude<keyof I_1["txResponse"]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>]: never; })[] & { [K_20 in Exclude<keyof I_1["txResponse"]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I_1["txResponse"]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>]: never; })[] & { [K_22 in Exclude<keyof I_1["txResponse"]["logs"], keyof {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            info?: string | undefined;
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_23 in Exclude<keyof I_1["txResponse"]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_24 in Exclude<keyof I_1["txResponse"]["gasUsed"], keyof Long>]: never; }) | undefined;
            tx?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_25 in Exclude<keyof I_1["txResponse"]["tx"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_26 in Exclude<keyof I_1["txResponse"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_27 in Exclude<keyof I_1["txResponse"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_28 in Exclude<keyof I_1["txResponse"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_29 in Exclude<keyof I_1["txResponse"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_30 in Exclude<keyof I_1["txResponse"], keyof TxResponse>]: never; }) | undefined;
    } & { [K_31 in Exclude<keyof I_1, "txResponse">]: never; }>(object: I_1): BroadcastTxResponse;
};
export declare const SimulateRequest: {
    encode(message: SimulateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulateRequest;
    fromJSON(object: any): SimulateRequest;
    toJSON(message: SimulateRequest): unknown;
    create<I extends {
        tx?: {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } | undefined;
        txBytes?: Uint8Array | undefined;
    } & {
        tx?: ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                messages?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K in Exclude<keyof I["tx"]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_1 in Exclude<keyof I["tx"]["body"]["messages"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_2 in Exclude<keyof I["tx"]["body"]["timeoutHeight"], keyof Long>]: never; }) | undefined;
                extensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_3 in Exclude<keyof I["tx"]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_4 in Exclude<keyof I["tx"]["body"]["extensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                nonCriticalExtensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_5 in Exclude<keyof I["tx"]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_6 in Exclude<keyof I["tx"]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["tx"]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            authInfo?: ({
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signerInfos?: ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                } & {
                    publicKey?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_8 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    modeInfo?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_9 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_10 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            modeInfos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_11 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_12 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    modeInfos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_13 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_14 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            modeInfos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_15 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } & any & { [K_16 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_17 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_18 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_19 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_20 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_21 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_22 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_23 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_24 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_25 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_26 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_27 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["sequence"], keyof Long>]: never; }) | undefined;
                } & { [K_28 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_29 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_30 in Exclude<keyof I["tx"]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_31 in Exclude<keyof I["tx"]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gasLimit?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_32 in Exclude<keyof I["tx"]["authInfo"]["fee"]["gasLimit"], keyof Long>]: never; }) | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_33 in Exclude<keyof I["tx"]["authInfo"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_34 in Exclude<keyof I["tx"]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_35 in Exclude<keyof I["tx"]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_36 in Exclude<keyof I["tx"]["authInfo"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_37 in Exclude<keyof I["tx"]["authInfo"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_38 in Exclude<keyof I["tx"]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_39 in Exclude<keyof I["tx"], keyof Tx>]: never; }) | undefined;
        txBytes?: Uint8Array | undefined;
    } & { [K_40 in Exclude<keyof I, keyof SimulateRequest>]: never; }>(base?: I | undefined): SimulateRequest;
    fromPartial<I_1 extends {
        tx?: {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } | undefined;
        txBytes?: Uint8Array | undefined;
    } & {
        tx?: ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                messages?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_41 in Exclude<keyof I_1["tx"]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_42 in Exclude<keyof I_1["tx"]["body"]["messages"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_43 in Exclude<keyof I_1["tx"]["body"]["timeoutHeight"], keyof Long>]: never; }) | undefined;
                extensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_44 in Exclude<keyof I_1["tx"]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_45 in Exclude<keyof I_1["tx"]["body"]["extensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                nonCriticalExtensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_46 in Exclude<keyof I_1["tx"]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_47 in Exclude<keyof I_1["tx"]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_48 in Exclude<keyof I_1["tx"]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            authInfo?: ({
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signerInfos?: ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                } & {
                    publicKey?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_49 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    modeInfo?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_50 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_51 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            modeInfos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_52 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_53 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    modeInfos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_54 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_55 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            modeInfos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_56 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } & any & { [K_57 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_58 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_59 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_60 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_61 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_62 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_63 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_64 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_65 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_66 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_67 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_68 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["sequence"], keyof Long>]: never; }) | undefined;
                } & { [K_69 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_70 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_71 in Exclude<keyof I_1["tx"]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_72 in Exclude<keyof I_1["tx"]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gasLimit?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_73 in Exclude<keyof I_1["tx"]["authInfo"]["fee"]["gasLimit"], keyof Long>]: never; }) | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_74 in Exclude<keyof I_1["tx"]["authInfo"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_75 in Exclude<keyof I_1["tx"]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_76 in Exclude<keyof I_1["tx"]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_77 in Exclude<keyof I_1["tx"]["authInfo"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_78 in Exclude<keyof I_1["tx"]["authInfo"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_79 in Exclude<keyof I_1["tx"]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_80 in Exclude<keyof I_1["tx"], keyof Tx>]: never; }) | undefined;
        txBytes?: Uint8Array | undefined;
    } & { [K_81 in Exclude<keyof I_1, keyof SimulateRequest>]: never; }>(object: I_1): SimulateRequest;
};
export declare const SimulateResponse: {
    encode(message: SimulateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SimulateResponse;
    fromJSON(object: any): SimulateResponse;
    toJSON(message: SimulateResponse): unknown;
    create<I extends {
        gasInfo?: {
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
        } | undefined;
        result?: {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        gasInfo?: ({
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
        } & {
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K in Exclude<keyof I["gasInfo"]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_1 in Exclude<keyof I["gasInfo"]["gasUsed"], keyof Long>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["gasInfo"], keyof GasInfo>]: never; }) | undefined;
        result?: ({
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_3 in Exclude<keyof I["result"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_4 in Exclude<keyof I["result"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["result"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_6 in Exclude<keyof I["result"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            msgResponses?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_7 in Exclude<keyof I["result"]["msgResponses"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_8 in Exclude<keyof I["result"]["msgResponses"], keyof {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I["result"], keyof Result>]: never; }) | undefined;
    } & { [K_10 in Exclude<keyof I, keyof SimulateResponse>]: never; }>(base?: I | undefined): SimulateResponse;
    fromPartial<I_1 extends {
        gasInfo?: {
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
        } | undefined;
        result?: {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        gasInfo?: ({
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
        } & {
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_11 in Exclude<keyof I_1["gasInfo"]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_12 in Exclude<keyof I_1["gasInfo"]["gasUsed"], keyof Long>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I_1["gasInfo"], keyof GasInfo>]: never; }) | undefined;
        result?: ({
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            msgResponses?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            data?: Uint8Array | undefined;
            log?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_14 in Exclude<keyof I_1["result"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_15 in Exclude<keyof I_1["result"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I_1["result"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_17 in Exclude<keyof I_1["result"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            msgResponses?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_18 in Exclude<keyof I_1["result"]["msgResponses"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_19 in Exclude<keyof I_1["result"]["msgResponses"], keyof {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_20 in Exclude<keyof I_1["result"], keyof Result>]: never; }) | undefined;
    } & { [K_21 in Exclude<keyof I_1, keyof SimulateResponse>]: never; }>(object: I_1): SimulateResponse;
};
export declare const GetTxRequest: {
    encode(message: GetTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxRequest;
    fromJSON(object: any): GetTxRequest;
    toJSON(message: GetTxRequest): unknown;
    create<I extends {
        hash?: string | undefined;
    } & {
        hash?: string | undefined;
    } & { [K in Exclude<keyof I, "hash">]: never; }>(base?: I | undefined): GetTxRequest;
    fromPartial<I_1 extends {
        hash?: string | undefined;
    } & {
        hash?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "hash">]: never; }>(object: I_1): GetTxRequest;
};
export declare const GetTxResponse: {
    encode(message: GetTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxResponse;
    fromJSON(object: any): GetTxResponse;
    toJSON(message: GetTxResponse): unknown;
    create<I extends {
        tx?: {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } | undefined;
        txResponse?: {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        tx?: ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                messages?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K in Exclude<keyof I["tx"]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_1 in Exclude<keyof I["tx"]["body"]["messages"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_2 in Exclude<keyof I["tx"]["body"]["timeoutHeight"], keyof Long>]: never; }) | undefined;
                extensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_3 in Exclude<keyof I["tx"]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_4 in Exclude<keyof I["tx"]["body"]["extensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                nonCriticalExtensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_5 in Exclude<keyof I["tx"]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_6 in Exclude<keyof I["tx"]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["tx"]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            authInfo?: ({
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signerInfos?: ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                } & {
                    publicKey?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_8 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    modeInfo?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_9 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_10 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            modeInfos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_11 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_12 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    modeInfos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_13 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_14 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            modeInfos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_15 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } & any & { [K_16 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_17 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_18 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_19 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_20 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_21 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_22 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_23 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_24 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_25 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_26 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_27 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number]["sequence"], keyof Long>]: never; }) | undefined;
                } & { [K_28 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_29 in Exclude<keyof I["tx"]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_30 in Exclude<keyof I["tx"]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_31 in Exclude<keyof I["tx"]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gasLimit?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_32 in Exclude<keyof I["tx"]["authInfo"]["fee"]["gasLimit"], keyof Long>]: never; }) | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_33 in Exclude<keyof I["tx"]["authInfo"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_34 in Exclude<keyof I["tx"]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_35 in Exclude<keyof I["tx"]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_36 in Exclude<keyof I["tx"]["authInfo"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_37 in Exclude<keyof I["tx"]["authInfo"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_38 in Exclude<keyof I["tx"]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_39 in Exclude<keyof I["tx"], keyof Tx>]: never; }) | undefined;
        txResponse?: ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_40 in Exclude<keyof I["txResponse"]["height"], keyof Long>]: never; }) | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & { [K_41 in Exclude<keyof I["txResponse"]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>]: never; })[] & { [K_42 in Exclude<keyof I["txResponse"]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_43 in Exclude<keyof I["txResponse"]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>]: never; })[] & { [K_44 in Exclude<keyof I["txResponse"]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_45 in Exclude<keyof I["txResponse"]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>]: never; })[] & { [K_46 in Exclude<keyof I["txResponse"]["logs"], keyof {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            info?: string | undefined;
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_47 in Exclude<keyof I["txResponse"]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_48 in Exclude<keyof I["txResponse"]["gasUsed"], keyof Long>]: never; }) | undefined;
            tx?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_49 in Exclude<keyof I["txResponse"]["tx"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_50 in Exclude<keyof I["txResponse"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_51 in Exclude<keyof I["txResponse"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_52 in Exclude<keyof I["txResponse"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_53 in Exclude<keyof I["txResponse"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_54 in Exclude<keyof I["txResponse"], keyof TxResponse>]: never; }) | undefined;
    } & { [K_55 in Exclude<keyof I, keyof GetTxResponse>]: never; }>(base?: I | undefined): GetTxResponse;
    fromPartial<I_1 extends {
        tx?: {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } | undefined;
        txResponse?: {
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        tx?: ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                messages?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_56 in Exclude<keyof I_1["tx"]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_57 in Exclude<keyof I_1["tx"]["body"]["messages"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_58 in Exclude<keyof I_1["tx"]["body"]["timeoutHeight"], keyof Long>]: never; }) | undefined;
                extensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_59 in Exclude<keyof I_1["tx"]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_60 in Exclude<keyof I_1["tx"]["body"]["extensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                nonCriticalExtensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_61 in Exclude<keyof I_1["tx"]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_62 in Exclude<keyof I_1["tx"]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_63 in Exclude<keyof I_1["tx"]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            authInfo?: ({
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signerInfos?: ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                } & {
                    publicKey?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_64 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    modeInfo?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_65 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_66 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            modeInfos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_67 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_68 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    modeInfos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_69 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_70 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            modeInfos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_71 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } & any & { [K_72 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_73 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_74 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_75 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_76 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_77 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_78 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_79 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_80 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_81 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_82 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_83 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number]["sequence"], keyof Long>]: never; }) | undefined;
                } & { [K_84 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_85 in Exclude<keyof I_1["tx"]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_86 in Exclude<keyof I_1["tx"]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_87 in Exclude<keyof I_1["tx"]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gasLimit?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_88 in Exclude<keyof I_1["tx"]["authInfo"]["fee"]["gasLimit"], keyof Long>]: never; }) | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_89 in Exclude<keyof I_1["tx"]["authInfo"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_90 in Exclude<keyof I_1["tx"]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_91 in Exclude<keyof I_1["tx"]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_92 in Exclude<keyof I_1["tx"]["authInfo"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_93 in Exclude<keyof I_1["tx"]["authInfo"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_94 in Exclude<keyof I_1["tx"]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_95 in Exclude<keyof I_1["tx"], keyof Tx>]: never; }) | undefined;
        txResponse?: ({
            height?: string | number | Long | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] | undefined;
            info?: string | undefined;
            gasWanted?: string | number | Long | undefined;
            gasUsed?: string | number | Long | undefined;
            tx?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            timestamp?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            height?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_96 in Exclude<keyof I_1["txResponse"]["height"], keyof Long>]: never; }) | undefined;
            txhash?: string | undefined;
            codespace?: string | undefined;
            code?: number | undefined;
            data?: string | undefined;
            rawLog?: string | undefined;
            logs?: ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[] & ({
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            } & {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    type?: string | undefined;
                    attributes?: ({
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        key?: string | undefined;
                        value?: string | undefined;
                    } & { [K_97 in Exclude<keyof I_1["txResponse"]["logs"][number]["events"][number]["attributes"][number], keyof import("../../base/abci/v1beta1/abci").Attribute>]: never; })[] & { [K_98 in Exclude<keyof I_1["txResponse"]["logs"][number]["events"][number]["attributes"], keyof {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_99 in Exclude<keyof I_1["txResponse"]["logs"][number]["events"][number], keyof import("../../base/abci/v1beta1/abci").StringEvent>]: never; })[] & { [K_100 in Exclude<keyof I_1["txResponse"]["logs"][number]["events"], keyof {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_101 in Exclude<keyof I_1["txResponse"]["logs"][number], keyof import("../../base/abci/v1beta1/abci").ABCIMessageLog>]: never; })[] & { [K_102 in Exclude<keyof I_1["txResponse"]["logs"], keyof {
                msgIndex?: number | undefined;
                log?: string | undefined;
                events?: {
                    type?: string | undefined;
                    attributes?: {
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            info?: string | undefined;
            gasWanted?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_103 in Exclude<keyof I_1["txResponse"]["gasWanted"], keyof Long>]: never; }) | undefined;
            gasUsed?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_104 in Exclude<keyof I_1["txResponse"]["gasUsed"], keyof Long>]: never; }) | undefined;
            tx?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_105 in Exclude<keyof I_1["txResponse"]["tx"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            timestamp?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & { [K_106 in Exclude<keyof I_1["txResponse"]["events"][number]["attributes"][number], keyof import("../../../tendermint/abci/types").EventAttribute>]: never; })[] & { [K_107 in Exclude<keyof I_1["txResponse"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_108 in Exclude<keyof I_1["txResponse"]["events"][number], keyof import("../../../tendermint/abci/types").Event>]: never; })[] & { [K_109 in Exclude<keyof I_1["txResponse"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_110 in Exclude<keyof I_1["txResponse"], keyof TxResponse>]: never; }) | undefined;
    } & { [K_111 in Exclude<keyof I_1, keyof GetTxResponse>]: never; }>(object: I_1): GetTxResponse;
};
export declare const GetBlockWithTxsRequest: {
    encode(message: GetBlockWithTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsRequest;
    fromJSON(object: any): GetBlockWithTxsRequest;
    toJSON(message: GetBlockWithTxsRequest): unknown;
    create<I extends {
        height?: string | number | Long | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        height?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K in Exclude<keyof I["height"], keyof Long>]: never; }) | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_1 in Exclude<keyof I["pagination"]["offset"], keyof Long>]: never; }) | undefined;
            limit?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_2 in Exclude<keyof I["pagination"]["limit"], keyof Long>]: never; }) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof GetBlockWithTxsRequest>]: never; }>(base?: I | undefined): GetBlockWithTxsRequest;
    fromPartial<I_1 extends {
        height?: string | number | Long | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        height?: string | number | (Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long) => Long;
            and: (other: string | number | Long) => Long;
            compare: (other: string | number | Long) => number;
            comp: (other: string | number | Long) => number;
            divide: (divisor: string | number | Long) => Long;
            div: (divisor: string | number | Long) => Long;
            equals: (other: string | number | Long) => boolean;
            eq: (other: string | number | Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long) => boolean;
            gt: (other: string | number | Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long) => boolean;
            gte: (other: string | number | Long) => boolean;
            ge: (other: string | number | Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            eqz: () => boolean;
            lessThan: (other: string | number | Long) => boolean;
            lt: (other: string | number | Long) => boolean;
            lessThanOrEqual: (other: string | number | Long) => boolean;
            lte: (other: string | number | Long) => boolean;
            le: (other: string | number | Long) => boolean;
            modulo: (other: string | number | Long) => Long;
            mod: (other: string | number | Long) => Long;
            rem: (other: string | number | Long) => Long;
            multiply: (multiplier: string | number | Long) => Long;
            mul: (multiplier: string | number | Long) => Long;
            negate: () => Long;
            neg: () => Long;
            not: () => Long;
            countLeadingZeros: () => number;
            clz: () => number;
            countTrailingZeros: () => number;
            ctz: () => number;
            notEquals: (other: string | number | Long) => boolean;
            neq: (other: string | number | Long) => boolean;
            ne: (other: string | number | Long) => boolean;
            or: (other: string | number | Long) => Long;
            shiftLeft: (numBits: number | Long) => Long;
            shl: (numBits: number | Long) => Long;
            shiftRight: (numBits: number | Long) => Long;
            shr: (numBits: number | Long) => Long;
            shiftRightUnsigned: (numBits: number | Long) => Long;
            shru: (numBits: number | Long) => Long;
            shr_u: (numBits: number | Long) => Long;
            rotateLeft: (numBits: number | Long) => Long;
            rotl: (numBits: number | Long) => Long;
            rotateRight: (numBits: number | Long) => Long;
            rotr: (numBits: number | Long) => Long;
            subtract: (subtrahend: string | number | Long) => Long;
            sub: (subtrahend: string | number | Long) => Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long;
            xor: (other: string | number | Long) => Long;
        } & { [K_5 in Exclude<keyof I_1["height"], keyof Long>]: never; }) | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_6 in Exclude<keyof I_1["pagination"]["offset"], keyof Long>]: never; }) | undefined;
            limit?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_7 in Exclude<keyof I_1["pagination"]["limit"], keyof Long>]: never; }) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K_8 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof GetBlockWithTxsRequest>]: never; }>(object: I_1): GetBlockWithTxsRequest;
};
export declare const GetBlockWithTxsResponse: {
    encode(message: GetBlockWithTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockWithTxsResponse;
    fromJSON(object: any): GetBlockWithTxsResponse;
    toJSON(message: GetBlockWithTxsResponse): unknown;
    create<I extends {
        txs?: {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] | undefined;
        blockId?: {
            hash?: Uint8Array | undefined;
            partSetHeader?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        block?: {
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } | undefined;
    } & {
        txs?: ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] & ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                messages?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K in Exclude<keyof I["txs"][number]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_1 in Exclude<keyof I["txs"][number]["body"]["messages"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_2 in Exclude<keyof I["txs"][number]["body"]["timeoutHeight"], keyof Long>]: never; }) | undefined;
                extensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_3 in Exclude<keyof I["txs"][number]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_4 in Exclude<keyof I["txs"][number]["body"]["extensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                nonCriticalExtensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_5 in Exclude<keyof I["txs"][number]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_6 in Exclude<keyof I["txs"][number]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["txs"][number]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            authInfo?: ({
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signerInfos?: ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                } & {
                    publicKey?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_8 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    modeInfo?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_9 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_10 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            modeInfos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_11 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_12 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    modeInfos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_13 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_14 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            modeInfos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_15 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } & any & { [K_16 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_17 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_18 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_19 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_20 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_21 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_22 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_23 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_24 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_25 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_26 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_27 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number]["sequence"], keyof Long>]: never; }) | undefined;
                } & { [K_28 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_29 in Exclude<keyof I["txs"][number]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_30 in Exclude<keyof I["txs"][number]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_31 in Exclude<keyof I["txs"][number]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gasLimit?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_32 in Exclude<keyof I["txs"][number]["authInfo"]["fee"]["gasLimit"], keyof Long>]: never; }) | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_33 in Exclude<keyof I["txs"][number]["authInfo"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_34 in Exclude<keyof I["txs"][number]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_35 in Exclude<keyof I["txs"][number]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_36 in Exclude<keyof I["txs"][number]["authInfo"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_37 in Exclude<keyof I["txs"][number]["authInfo"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_38 in Exclude<keyof I["txs"][number]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_39 in Exclude<keyof I["txs"][number], keyof Tx>]: never; })[] & { [K_40 in Exclude<keyof I["txs"], keyof {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[]>]: never; }) | undefined;
        blockId?: ({
            hash?: Uint8Array | undefined;
            partSetHeader?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } & {
            hash?: Uint8Array | undefined;
            partSetHeader?: ({
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } & {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } & { [K_41 in Exclude<keyof I["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
        } & { [K_42 in Exclude<keyof I["blockId"], keyof BlockID>]: never; }) | undefined;
        block?: ({
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            header?: ({
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & {
                version?: ({
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } & {
                    block?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_43 in Exclude<keyof I["block"]["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
                    app?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_44 in Exclude<keyof I["block"]["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
                } & { [K_45 in Exclude<keyof I["block"]["header"]["version"], keyof import("../../../tendermint/version/types").Consensus>]: never; }) | undefined;
                chainId?: string | undefined;
                height?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_46 in Exclude<keyof I["block"]["header"]["height"], keyof Long>]: never; }) | undefined;
                time?: Date | undefined;
                lastBlockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & { [K_47 in Exclude<keyof I["block"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_48 in Exclude<keyof I["block"]["header"]["lastBlockId"], keyof BlockID>]: never; }) | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & { [K_49 in Exclude<keyof I["block"]["header"], keyof import("../../../tendermint/types/types").Header>]: never; }) | undefined;
            data?: ({
                txs?: Uint8Array[] | undefined;
            } & {
                txs?: (Uint8Array[] & Uint8Array[] & { [K_50 in Exclude<keyof I["block"]["data"]["txs"], keyof Uint8Array[]>]: never; }) | undefined;
            } & { [K_51 in Exclude<keyof I["block"]["data"], "txs">]: never; }) | undefined;
            evidence?: ({
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                evidence?: ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] & ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                } & {
                    duplicateVoteEvidence?: ({
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        voteA?: ({
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_52 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["height"], keyof Long>]: never; }) | undefined;
                            round?: number | undefined;
                            blockId?: ({
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & { [K_53 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_54 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof BlockID>]: never; }) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_55 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof import("../../../tendermint/types/types").Vote>]: never; }) | undefined;
                        voteB?: ({
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_56 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["height"], keyof Long>]: never; }) | undefined;
                            round?: number | undefined;
                            blockId?: ({
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & { [K_57 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_58 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof BlockID>]: never; }) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_59 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof import("../../../tendermint/types/types").Vote>]: never; }) | undefined;
                        totalVotingPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_60 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                        validatorPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_61 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["validatorPower"], keyof Long>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                    } & { [K_62 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof import("../../../tendermint/types/evidence").DuplicateVoteEvidence>]: never; }) | undefined;
                    lightClientAttackEvidence?: ({
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        conflictingBlock?: ({
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } & {
                            signedHeader?: ({
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } & {
                                header?: ({
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & {
                                    version?: ({
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } & {
                                        block?: string | number | (Long & {
                                            high: number;
                                            low: number;
                                            unsigned: boolean;
                                            add: (addend: string | number | Long) => Long;
                                            and: (other: string | number | Long) => Long;
                                            compare: (other: string | number | Long) => number;
                                            comp: (other: string | number | Long) => number;
                                            divide: (divisor: string | number | Long) => Long;
                                            div: (divisor: string | number | Long) => Long;
                                            equals: (other: string | number | Long) => boolean;
                                            eq: (other: string | number | Long) => boolean;
                                            getHighBits: () => number;
                                            getHighBitsUnsigned: () => number;
                                            getLowBits: () => number;
                                            getLowBitsUnsigned: () => number;
                                            getNumBitsAbs: () => number;
                                            greaterThan: (other: string | number | Long) => boolean;
                                            gt: (other: string | number | Long) => boolean;
                                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                                            gte: (other: string | number | Long) => boolean;
                                            ge: (other: string | number | Long) => boolean;
                                            isEven: () => boolean;
                                            isNegative: () => boolean;
                                            isOdd: () => boolean;
                                            isPositive: () => boolean;
                                            isZero: () => boolean;
                                            eqz: () => boolean;
                                            lessThan: (other: string | number | Long) => boolean;
                                            lt: (other: string | number | Long) => boolean;
                                            lessThanOrEqual: (other: string | number | Long) => boolean;
                                            lte: (other: string | number | Long) => boolean;
                                            le: (other: string | number | Long) => boolean;
                                            modulo: (other: string | number | Long) => Long;
                                            mod: (other: string | number | Long) => Long;
                                            rem: (other: string | number | Long) => Long;
                                            multiply: (multiplier: string | number | Long) => Long;
                                            mul: (multiplier: string | number | Long) => Long;
                                            negate: () => Long;
                                            neg: () => Long;
                                            not: () => Long;
                                            countLeadingZeros: () => number;
                                            clz: () => number;
                                            countTrailingZeros: () => number;
                                            ctz: () => number;
                                            notEquals: (other: string | number | Long) => boolean;
                                            neq: (other: string | number | Long) => boolean;
                                            ne: (other: string | number | Long) => boolean;
                                            or: (other: string | number | Long) => Long;
                                            shiftLeft: (numBits: number | Long) => Long;
                                            shl: (numBits: number | Long) => Long;
                                            shiftRight: (numBits: number | Long) => Long;
                                            shr: (numBits: number | Long) => Long;
                                            shiftRightUnsigned: (numBits: number | Long) => Long;
                                            shru: (numBits: number | Long) => Long;
                                            shr_u: (numBits: number | Long) => Long;
                                            rotateLeft: (numBits: number | Long) => Long;
                                            rotl: (numBits: number | Long) => Long;
                                            rotateRight: (numBits: number | Long) => Long;
                                            rotr: (numBits: number | Long) => Long;
                                            subtract: (subtrahend: string | number | Long) => Long;
                                            sub: (subtrahend: string | number | Long) => Long;
                                            toInt: () => number;
                                            toNumber: () => number;
                                            toBytes: (le?: boolean | undefined) => number[];
                                            toBytesLE: () => number[];
                                            toBytesBE: () => number[];
                                            toSigned: () => Long;
                                            toString: (radix?: number | undefined) => string;
                                            toUnsigned: () => Long;
                                            xor: (other: string | number | Long) => Long;
                                        } & { [K_63 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
                                        app?: string | number | (Long & {
                                            high: number;
                                            low: number;
                                            unsigned: boolean;
                                            add: (addend: string | number | Long) => Long;
                                            and: (other: string | number | Long) => Long;
                                            compare: (other: string | number | Long) => number;
                                            comp: (other: string | number | Long) => number;
                                            divide: (divisor: string | number | Long) => Long;
                                            div: (divisor: string | number | Long) => Long;
                                            equals: (other: string | number | Long) => boolean;
                                            eq: (other: string | number | Long) => boolean;
                                            getHighBits: () => number;
                                            getHighBitsUnsigned: () => number;
                                            getLowBits: () => number;
                                            getLowBitsUnsigned: () => number;
                                            getNumBitsAbs: () => number;
                                            greaterThan: (other: string | number | Long) => boolean;
                                            gt: (other: string | number | Long) => boolean;
                                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                                            gte: (other: string | number | Long) => boolean;
                                            ge: (other: string | number | Long) => boolean;
                                            isEven: () => boolean;
                                            isNegative: () => boolean;
                                            isOdd: () => boolean;
                                            isPositive: () => boolean;
                                            isZero: () => boolean;
                                            eqz: () => boolean;
                                            lessThan: (other: string | number | Long) => boolean;
                                            lt: (other: string | number | Long) => boolean;
                                            lessThanOrEqual: (other: string | number | Long) => boolean;
                                            lte: (other: string | number | Long) => boolean;
                                            le: (other: string | number | Long) => boolean;
                                            modulo: (other: string | number | Long) => Long;
                                            mod: (other: string | number | Long) => Long;
                                            rem: (other: string | number | Long) => Long;
                                            multiply: (multiplier: string | number | Long) => Long;
                                            mul: (multiplier: string | number | Long) => Long;
                                            negate: () => Long;
                                            neg: () => Long;
                                            not: () => Long;
                                            countLeadingZeros: () => number;
                                            clz: () => number;
                                            countTrailingZeros: () => number;
                                            ctz: () => number;
                                            notEquals: (other: string | number | Long) => boolean;
                                            neq: (other: string | number | Long) => boolean;
                                            ne: (other: string | number | Long) => boolean;
                                            or: (other: string | number | Long) => Long;
                                            shiftLeft: (numBits: number | Long) => Long;
                                            shl: (numBits: number | Long) => Long;
                                            shiftRight: (numBits: number | Long) => Long;
                                            shr: (numBits: number | Long) => Long;
                                            shiftRightUnsigned: (numBits: number | Long) => Long;
                                            shru: (numBits: number | Long) => Long;
                                            shr_u: (numBits: number | Long) => Long;
                                            rotateLeft: (numBits: number | Long) => Long;
                                            rotl: (numBits: number | Long) => Long;
                                            rotateRight: (numBits: number | Long) => Long;
                                            rotr: (numBits: number | Long) => Long;
                                            subtract: (subtrahend: string | number | Long) => Long;
                                            sub: (subtrahend: string | number | Long) => Long;
                                            toInt: () => number;
                                            toNumber: () => number;
                                            toBytes: (le?: boolean | undefined) => number[];
                                            toBytesLE: () => number[];
                                            toBytesBE: () => number[];
                                            toSigned: () => Long;
                                            toString: (radix?: number | undefined) => string;
                                            toUnsigned: () => Long;
                                            xor: (other: string | number | Long) => Long;
                                        } & { [K_64 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
                                    } & { [K_65 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../../../tendermint/version/types").Consensus>]: never; }) | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_66 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long>]: never; }) | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: ({
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } & {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: ({
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & { [K_67 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                                    } & { [K_68 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof BlockID>]: never; }) | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & { [K_69 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof import("../../../tendermint/types/types").Header>]: never; }) | undefined;
                                commit?: ({
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } & {
                                    height?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_70 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long>]: never; }) | undefined;
                                    round?: number | undefined;
                                    blockId?: ({
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } & {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: ({
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & { [K_71 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                                    } & { [K_72 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof BlockID>]: never; }) | undefined;
                                    signatures?: ({
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] & ({
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & { [K_73 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("../../../tendermint/types/types").CommitSig>]: never; })[] & { [K_74 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[]>]: never; }) | undefined;
                                } & { [K_75 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof import("../../../tendermint/types/types").Commit>]: never; }) | undefined;
                            } & { [K_76 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("../../../tendermint/types/types").SignedHeader>]: never; }) | undefined;
                            validatorSet?: ({
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } & {
                                validators?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] & ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & { [K_77 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                                    votingPower?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_78 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
                                    proposerPriority?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_79 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                                } & { [K_80 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof import("../../../tendermint/types/validator").Validator>]: never; })[] & { [K_81 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[]>]: never; }) | undefined;
                                proposer?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & { [K_82 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                                    votingPower?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_83 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long>]: never; }) | undefined;
                                    proposerPriority?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_84 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long>]: never; }) | undefined;
                                } & { [K_85 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof import("../../../tendermint/types/validator").Validator>]: never; }) | undefined;
                                totalVotingPower?: string | number | (Long & {
                                    high: number;
                                    low: number;
                                    unsigned: boolean;
                                    add: (addend: string | number | Long) => Long;
                                    and: (other: string | number | Long) => Long;
                                    compare: (other: string | number | Long) => number;
                                    comp: (other: string | number | Long) => number;
                                    divide: (divisor: string | number | Long) => Long;
                                    div: (divisor: string | number | Long) => Long;
                                    equals: (other: string | number | Long) => boolean;
                                    eq: (other: string | number | Long) => boolean;
                                    getHighBits: () => number;
                                    getHighBitsUnsigned: () => number;
                                    getLowBits: () => number;
                                    getLowBitsUnsigned: () => number;
                                    getNumBitsAbs: () => number;
                                    greaterThan: (other: string | number | Long) => boolean;
                                    gt: (other: string | number | Long) => boolean;
                                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                                    gte: (other: string | number | Long) => boolean;
                                    ge: (other: string | number | Long) => boolean;
                                    isEven: () => boolean;
                                    isNegative: () => boolean;
                                    isOdd: () => boolean;
                                    isPositive: () => boolean;
                                    isZero: () => boolean;
                                    eqz: () => boolean;
                                    lessThan: (other: string | number | Long) => boolean;
                                    lt: (other: string | number | Long) => boolean;
                                    lessThanOrEqual: (other: string | number | Long) => boolean;
                                    lte: (other: string | number | Long) => boolean;
                                    le: (other: string | number | Long) => boolean;
                                    modulo: (other: string | number | Long) => Long;
                                    mod: (other: string | number | Long) => Long;
                                    rem: (other: string | number | Long) => Long;
                                    multiply: (multiplier: string | number | Long) => Long;
                                    mul: (multiplier: string | number | Long) => Long;
                                    negate: () => Long;
                                    neg: () => Long;
                                    not: () => Long;
                                    countLeadingZeros: () => number;
                                    clz: () => number;
                                    countTrailingZeros: () => number;
                                    ctz: () => number;
                                    notEquals: (other: string | number | Long) => boolean;
                                    neq: (other: string | number | Long) => boolean;
                                    ne: (other: string | number | Long) => boolean;
                                    or: (other: string | number | Long) => Long;
                                    shiftLeft: (numBits: number | Long) => Long;
                                    shl: (numBits: number | Long) => Long;
                                    shiftRight: (numBits: number | Long) => Long;
                                    shr: (numBits: number | Long) => Long;
                                    shiftRightUnsigned: (numBits: number | Long) => Long;
                                    shru: (numBits: number | Long) => Long;
                                    shr_u: (numBits: number | Long) => Long;
                                    rotateLeft: (numBits: number | Long) => Long;
                                    rotl: (numBits: number | Long) => Long;
                                    rotateRight: (numBits: number | Long) => Long;
                                    rotr: (numBits: number | Long) => Long;
                                    subtract: (subtrahend: string | number | Long) => Long;
                                    sub: (subtrahend: string | number | Long) => Long;
                                    toInt: () => number;
                                    toNumber: () => number;
                                    toBytes: (le?: boolean | undefined) => number[];
                                    toBytesLE: () => number[];
                                    toBytesBE: () => number[];
                                    toSigned: () => Long;
                                    toString: (radix?: number | undefined) => string;
                                    toUnsigned: () => Long;
                                    xor: (other: string | number | Long) => Long;
                                } & { [K_86 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                            } & { [K_87 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("../../../tendermint/types/validator").ValidatorSet>]: never; }) | undefined;
                        } & { [K_88 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof import("../../../tendermint/types/types").LightBlock>]: never; }) | undefined;
                        commonHeight?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_89 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["commonHeight"], keyof Long>]: never; }) | undefined;
                        byzantineValidators?: ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] & ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } & {
                            address?: Uint8Array | undefined;
                            pubKey?: ({
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & { [K_90 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                            votingPower?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_91 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
                            proposerPriority?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_92 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                        } & { [K_93 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof import("../../../tendermint/types/validator").Validator>]: never; })[] & { [K_94 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[]>]: never; }) | undefined;
                        totalVotingPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_95 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                    } & { [K_96 in Exclude<keyof I["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof import("../../../tendermint/types/evidence").LightClientAttackEvidence>]: never; }) | undefined;
                } & { [K_97 in Exclude<keyof I["block"]["evidence"]["evidence"][number], keyof import("../../../tendermint/types/evidence").Evidence>]: never; })[] & { [K_98 in Exclude<keyof I["block"]["evidence"]["evidence"], keyof {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_99 in Exclude<keyof I["block"]["evidence"], "evidence">]: never; }) | undefined;
            lastCommit?: ({
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                height?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_100 in Exclude<keyof I["block"]["lastCommit"]["height"], keyof Long>]: never; }) | undefined;
                round?: number | undefined;
                blockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & { [K_101 in Exclude<keyof I["block"]["lastCommit"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_102 in Exclude<keyof I["block"]["lastCommit"]["blockId"], keyof BlockID>]: never; }) | undefined;
                signatures?: ({
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] & ({
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_103 in Exclude<keyof I["block"]["lastCommit"]["signatures"][number], keyof import("../../../tendermint/types/types").CommitSig>]: never; })[] & { [K_104 in Exclude<keyof I["block"]["lastCommit"]["signatures"], keyof {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_105 in Exclude<keyof I["block"]["lastCommit"], keyof import("../../../tendermint/types/types").Commit>]: never; }) | undefined;
        } & { [K_106 in Exclude<keyof I["block"], keyof Block>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_107 in Exclude<keyof I["pagination"]["total"], keyof Long>]: never; }) | undefined;
        } & { [K_108 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_109 in Exclude<keyof I, keyof GetBlockWithTxsResponse>]: never; }>(base?: I | undefined): GetBlockWithTxsResponse;
    fromPartial<I_1 extends {
        txs?: {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] | undefined;
        blockId?: {
            hash?: Uint8Array | undefined;
            partSetHeader?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        block?: {
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } | undefined;
    } & {
        txs?: ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[] & ({
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        } & {
            body?: ({
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                messages?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_110 in Exclude<keyof I_1["txs"][number]["body"]["messages"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_111 in Exclude<keyof I_1["txs"][number]["body"]["messages"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_112 in Exclude<keyof I_1["txs"][number]["body"]["timeoutHeight"], keyof Long>]: never; }) | undefined;
                extensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_113 in Exclude<keyof I_1["txs"][number]["body"]["extensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_114 in Exclude<keyof I_1["txs"][number]["body"]["extensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
                nonCriticalExtensionOptions?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_115 in Exclude<keyof I_1["txs"][number]["body"]["nonCriticalExtensionOptions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_116 in Exclude<keyof I_1["txs"][number]["body"]["nonCriticalExtensionOptions"], keyof {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_117 in Exclude<keyof I_1["txs"][number]["body"], keyof import("./tx").TxBody>]: never; }) | undefined;
            authInfo?: ({
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } & {
                signerInfos?: ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] & ({
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                } & {
                    publicKey?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_118 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["publicKey"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
                    modeInfo?: ({
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } & {
                        single?: ({
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } & { [K_119 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["single"], "mode">]: never; }) | undefined;
                        multi?: ({
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } & {
                            bitarray?: ({
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } & { [K_120 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                            modeInfos?: (any[] & ({
                                single?: {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } | undefined;
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } | undefined;
                            } & {
                                single?: ({
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & {
                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                } & { [K_121 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                multi?: ({
                                    bitarray?: {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } | undefined;
                                    modeInfos?: any[] | undefined;
                                } & {
                                    bitarray?: ({
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & {
                                        extraBitsStored?: number | undefined;
                                        elems?: Uint8Array | undefined;
                                    } & { [K_122 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                    modeInfos?: (any[] & ({
                                        single?: {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } | undefined;
                                        multi?: {
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } | undefined;
                                    } & {
                                        single?: ({
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & {
                                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                        } & { [K_123 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                        multi?: ({
                                            bitarray?: {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } | undefined;
                                            modeInfos?: any[] | undefined;
                                        } & {
                                            bitarray?: ({
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & {
                                                extraBitsStored?: number | undefined;
                                                elems?: Uint8Array | undefined;
                                            } & { [K_124 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["bitarray"], keyof import("../../crypto/multisig/v1beta1/multisig").CompactBitArray>]: never; }) | undefined;
                                            modeInfos?: (any[] & ({
                                                single?: {
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } | undefined;
                                                multi?: {
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } | undefined;
                                            } & {
                                                single?: ({
                                                    mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                                                } & any & { [K_125 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["single"], "mode">]: never; }) | undefined;
                                                multi?: ({
                                                    bitarray?: {
                                                        extraBitsStored?: number | undefined;
                                                        elems?: Uint8Array | undefined;
                                                    } | undefined;
                                                    modeInfos?: any[] | undefined;
                                                } & any & { [K_126 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                            } & { [K_127 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_128 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                        } & { [K_129 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                                    } & { [K_130 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_131 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                                } & { [K_132 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                            } & { [K_133 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"][number], keyof import("./tx").ModeInfo>]: never; })[] & { [K_134 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"]["modeInfos"], keyof any[]>]: never; }) | undefined;
                        } & { [K_135 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"]["multi"], keyof import("./tx").ModeInfo_Multi>]: never; }) | undefined;
                    } & { [K_136 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["modeInfo"], keyof import("./tx").ModeInfo>]: never; }) | undefined;
                    sequence?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_137 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number]["sequence"], keyof Long>]: never; }) | undefined;
                } & { [K_138 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"][number], keyof import("./tx").SignerInfo>]: never; })[] & { [K_139 in Exclude<keyof I_1["txs"][number]["authInfo"]["signerInfos"], keyof {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[]>]: never; }) | undefined;
                fee?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_140 in Exclude<keyof I_1["txs"][number]["authInfo"]["fee"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_141 in Exclude<keyof I_1["txs"][number]["authInfo"]["fee"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    gasLimit?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_142 in Exclude<keyof I_1["txs"][number]["authInfo"]["fee"]["gasLimit"], keyof Long>]: never; }) | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } & { [K_143 in Exclude<keyof I_1["txs"][number]["authInfo"]["fee"], keyof import("./tx").Fee>]: never; }) | undefined;
                tip?: ({
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } & {
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_144 in Exclude<keyof I_1["txs"][number]["authInfo"]["tip"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>]: never; })[] & { [K_145 in Exclude<keyof I_1["txs"][number]["authInfo"]["tip"]["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>]: never; }) | undefined;
                    tipper?: string | undefined;
                } & { [K_146 in Exclude<keyof I_1["txs"][number]["authInfo"]["tip"], keyof import("./tx").Tip>]: never; }) | undefined;
            } & { [K_147 in Exclude<keyof I_1["txs"][number]["authInfo"], keyof import("./tx").AuthInfo>]: never; }) | undefined;
            signatures?: (Uint8Array[] & Uint8Array[] & { [K_148 in Exclude<keyof I_1["txs"][number]["signatures"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_149 in Exclude<keyof I_1["txs"][number], keyof Tx>]: never; })[] & { [K_150 in Exclude<keyof I_1["txs"], keyof {
            body?: {
                messages?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                memo?: string | undefined;
                timeoutHeight?: string | number | Long | undefined;
                extensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
                nonCriticalExtensionOptions?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            authInfo?: {
                signerInfos?: {
                    publicKey?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    modeInfo?: {
                        single?: {
                            mode?: import("../signing/v1beta1/signing").SignMode | undefined;
                        } | undefined;
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number | undefined;
                                elems?: Uint8Array | undefined;
                            } | undefined;
                            modeInfos?: any[] | undefined;
                        } | undefined;
                    } | undefined;
                    sequence?: string | number | Long | undefined;
                }[] | undefined;
                fee?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    gasLimit?: string | number | Long | undefined;
                    payer?: string | undefined;
                    granter?: string | undefined;
                } | undefined;
                tip?: {
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    tipper?: string | undefined;
                } | undefined;
            } | undefined;
            signatures?: Uint8Array[] | undefined;
        }[]>]: never; }) | undefined;
        blockId?: ({
            hash?: Uint8Array | undefined;
            partSetHeader?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } & {
            hash?: Uint8Array | undefined;
            partSetHeader?: ({
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } & {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } & { [K_151 in Exclude<keyof I_1["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
        } & { [K_152 in Exclude<keyof I_1["blockId"], keyof BlockID>]: never; }) | undefined;
        block?: ({
            header?: {
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } | undefined;
            data?: {
                txs?: Uint8Array[] | undefined;
            } | undefined;
            evidence?: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            lastCommit?: {
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            header?: ({
                version?: {
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } | undefined;
                chainId?: string | undefined;
                height?: string | number | Long | undefined;
                time?: Date | undefined;
                lastBlockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & {
                version?: ({
                    block?: string | number | Long | undefined;
                    app?: string | number | Long | undefined;
                } & {
                    block?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_153 in Exclude<keyof I_1["block"]["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
                    app?: string | number | (Long & {
                        high: number;
                        low: number;
                        unsigned: boolean;
                        add: (addend: string | number | Long) => Long;
                        and: (other: string | number | Long) => Long;
                        compare: (other: string | number | Long) => number;
                        comp: (other: string | number | Long) => number;
                        divide: (divisor: string | number | Long) => Long;
                        div: (divisor: string | number | Long) => Long;
                        equals: (other: string | number | Long) => boolean;
                        eq: (other: string | number | Long) => boolean;
                        getHighBits: () => number;
                        getHighBitsUnsigned: () => number;
                        getLowBits: () => number;
                        getLowBitsUnsigned: () => number;
                        getNumBitsAbs: () => number;
                        greaterThan: (other: string | number | Long) => boolean;
                        gt: (other: string | number | Long) => boolean;
                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                        gte: (other: string | number | Long) => boolean;
                        ge: (other: string | number | Long) => boolean;
                        isEven: () => boolean;
                        isNegative: () => boolean;
                        isOdd: () => boolean;
                        isPositive: () => boolean;
                        isZero: () => boolean;
                        eqz: () => boolean;
                        lessThan: (other: string | number | Long) => boolean;
                        lt: (other: string | number | Long) => boolean;
                        lessThanOrEqual: (other: string | number | Long) => boolean;
                        lte: (other: string | number | Long) => boolean;
                        le: (other: string | number | Long) => boolean;
                        modulo: (other: string | number | Long) => Long;
                        mod: (other: string | number | Long) => Long;
                        rem: (other: string | number | Long) => Long;
                        multiply: (multiplier: string | number | Long) => Long;
                        mul: (multiplier: string | number | Long) => Long;
                        negate: () => Long;
                        neg: () => Long;
                        not: () => Long;
                        countLeadingZeros: () => number;
                        clz: () => number;
                        countTrailingZeros: () => number;
                        ctz: () => number;
                        notEquals: (other: string | number | Long) => boolean;
                        neq: (other: string | number | Long) => boolean;
                        ne: (other: string | number | Long) => boolean;
                        or: (other: string | number | Long) => Long;
                        shiftLeft: (numBits: number | Long) => Long;
                        shl: (numBits: number | Long) => Long;
                        shiftRight: (numBits: number | Long) => Long;
                        shr: (numBits: number | Long) => Long;
                        shiftRightUnsigned: (numBits: number | Long) => Long;
                        shru: (numBits: number | Long) => Long;
                        shr_u: (numBits: number | Long) => Long;
                        rotateLeft: (numBits: number | Long) => Long;
                        rotl: (numBits: number | Long) => Long;
                        rotateRight: (numBits: number | Long) => Long;
                        rotr: (numBits: number | Long) => Long;
                        subtract: (subtrahend: string | number | Long) => Long;
                        sub: (subtrahend: string | number | Long) => Long;
                        toInt: () => number;
                        toNumber: () => number;
                        toBytes: (le?: boolean | undefined) => number[];
                        toBytesLE: () => number[];
                        toBytesBE: () => number[];
                        toSigned: () => Long;
                        toString: (radix?: number | undefined) => string;
                        toUnsigned: () => Long;
                        xor: (other: string | number | Long) => Long;
                    } & { [K_154 in Exclude<keyof I_1["block"]["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
                } & { [K_155 in Exclude<keyof I_1["block"]["header"]["version"], keyof import("../../../tendermint/version/types").Consensus>]: never; }) | undefined;
                chainId?: string | undefined;
                height?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_156 in Exclude<keyof I_1["block"]["header"]["height"], keyof Long>]: never; }) | undefined;
                time?: Date | undefined;
                lastBlockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & { [K_157 in Exclude<keyof I_1["block"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_158 in Exclude<keyof I_1["block"]["header"]["lastBlockId"], keyof BlockID>]: never; }) | undefined;
                lastCommitHash?: Uint8Array | undefined;
                dataHash?: Uint8Array | undefined;
                validatorsHash?: Uint8Array | undefined;
                nextValidatorsHash?: Uint8Array | undefined;
                consensusHash?: Uint8Array | undefined;
                appHash?: Uint8Array | undefined;
                lastResultsHash?: Uint8Array | undefined;
                evidenceHash?: Uint8Array | undefined;
                proposerAddress?: Uint8Array | undefined;
            } & { [K_159 in Exclude<keyof I_1["block"]["header"], keyof import("../../../tendermint/types/types").Header>]: never; }) | undefined;
            data?: ({
                txs?: Uint8Array[] | undefined;
            } & {
                txs?: (Uint8Array[] & Uint8Array[] & { [K_160 in Exclude<keyof I_1["block"]["data"]["txs"], keyof Uint8Array[]>]: never; }) | undefined;
            } & { [K_161 in Exclude<keyof I_1["block"]["data"], "txs">]: never; }) | undefined;
            evidence?: ({
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                evidence?: ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[] & ({
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                } & {
                    duplicateVoteEvidence?: ({
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        voteA?: ({
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_162 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["height"], keyof Long>]: never; }) | undefined;
                            round?: number | undefined;
                            blockId?: ({
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & { [K_163 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_164 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof BlockID>]: never; }) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_165 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof import("../../../tendermint/types/types").Vote>]: never; }) | undefined;
                        voteB?: ({
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_166 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["height"], keyof Long>]: never; }) | undefined;
                            round?: number | undefined;
                            blockId?: ({
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } & {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: ({
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } & { [K_167 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                            } & { [K_168 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof BlockID>]: never; }) | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & { [K_169 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof import("../../../tendermint/types/types").Vote>]: never; }) | undefined;
                        totalVotingPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_170 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                        validatorPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_171 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"]["validatorPower"], keyof Long>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                    } & { [K_172 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof import("../../../tendermint/types/evidence").DuplicateVoteEvidence>]: never; }) | undefined;
                    lightClientAttackEvidence?: ({
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } & {
                        conflictingBlock?: ({
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } & {
                            signedHeader?: ({
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } & {
                                header?: ({
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & {
                                    version?: ({
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } & {
                                        block?: string | number | (Long & {
                                            high: number;
                                            low: number;
                                            unsigned: boolean;
                                            add: (addend: string | number | Long) => Long;
                                            and: (other: string | number | Long) => Long;
                                            compare: (other: string | number | Long) => number;
                                            comp: (other: string | number | Long) => number;
                                            divide: (divisor: string | number | Long) => Long;
                                            div: (divisor: string | number | Long) => Long;
                                            equals: (other: string | number | Long) => boolean;
                                            eq: (other: string | number | Long) => boolean;
                                            getHighBits: () => number;
                                            getHighBitsUnsigned: () => number;
                                            getLowBits: () => number;
                                            getLowBitsUnsigned: () => number;
                                            getNumBitsAbs: () => number;
                                            greaterThan: (other: string | number | Long) => boolean;
                                            gt: (other: string | number | Long) => boolean;
                                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                                            gte: (other: string | number | Long) => boolean;
                                            ge: (other: string | number | Long) => boolean;
                                            isEven: () => boolean;
                                            isNegative: () => boolean;
                                            isOdd: () => boolean;
                                            isPositive: () => boolean;
                                            isZero: () => boolean;
                                            eqz: () => boolean;
                                            lessThan: (other: string | number | Long) => boolean;
                                            lt: (other: string | number | Long) => boolean;
                                            lessThanOrEqual: (other: string | number | Long) => boolean;
                                            lte: (other: string | number | Long) => boolean;
                                            le: (other: string | number | Long) => boolean;
                                            modulo: (other: string | number | Long) => Long;
                                            mod: (other: string | number | Long) => Long;
                                            rem: (other: string | number | Long) => Long;
                                            multiply: (multiplier: string | number | Long) => Long;
                                            mul: (multiplier: string | number | Long) => Long;
                                            negate: () => Long;
                                            neg: () => Long;
                                            not: () => Long;
                                            countLeadingZeros: () => number;
                                            clz: () => number;
                                            countTrailingZeros: () => number;
                                            ctz: () => number;
                                            notEquals: (other: string | number | Long) => boolean;
                                            neq: (other: string | number | Long) => boolean;
                                            ne: (other: string | number | Long) => boolean;
                                            or: (other: string | number | Long) => Long;
                                            shiftLeft: (numBits: number | Long) => Long;
                                            shl: (numBits: number | Long) => Long;
                                            shiftRight: (numBits: number | Long) => Long;
                                            shr: (numBits: number | Long) => Long;
                                            shiftRightUnsigned: (numBits: number | Long) => Long;
                                            shru: (numBits: number | Long) => Long;
                                            shr_u: (numBits: number | Long) => Long;
                                            rotateLeft: (numBits: number | Long) => Long;
                                            rotl: (numBits: number | Long) => Long;
                                            rotateRight: (numBits: number | Long) => Long;
                                            rotr: (numBits: number | Long) => Long;
                                            subtract: (subtrahend: string | number | Long) => Long;
                                            sub: (subtrahend: string | number | Long) => Long;
                                            toInt: () => number;
                                            toNumber: () => number;
                                            toBytes: (le?: boolean | undefined) => number[];
                                            toBytesLE: () => number[];
                                            toBytesBE: () => number[];
                                            toSigned: () => Long;
                                            toString: (radix?: number | undefined) => string;
                                            toUnsigned: () => Long;
                                            xor: (other: string | number | Long) => Long;
                                        } & { [K_173 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
                                        app?: string | number | (Long & {
                                            high: number;
                                            low: number;
                                            unsigned: boolean;
                                            add: (addend: string | number | Long) => Long;
                                            and: (other: string | number | Long) => Long;
                                            compare: (other: string | number | Long) => number;
                                            comp: (other: string | number | Long) => number;
                                            divide: (divisor: string | number | Long) => Long;
                                            div: (divisor: string | number | Long) => Long;
                                            equals: (other: string | number | Long) => boolean;
                                            eq: (other: string | number | Long) => boolean;
                                            getHighBits: () => number;
                                            getHighBitsUnsigned: () => number;
                                            getLowBits: () => number;
                                            getLowBitsUnsigned: () => number;
                                            getNumBitsAbs: () => number;
                                            greaterThan: (other: string | number | Long) => boolean;
                                            gt: (other: string | number | Long) => boolean;
                                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                                            gte: (other: string | number | Long) => boolean;
                                            ge: (other: string | number | Long) => boolean;
                                            isEven: () => boolean;
                                            isNegative: () => boolean;
                                            isOdd: () => boolean;
                                            isPositive: () => boolean;
                                            isZero: () => boolean;
                                            eqz: () => boolean;
                                            lessThan: (other: string | number | Long) => boolean;
                                            lt: (other: string | number | Long) => boolean;
                                            lessThanOrEqual: (other: string | number | Long) => boolean;
                                            lte: (other: string | number | Long) => boolean;
                                            le: (other: string | number | Long) => boolean;
                                            modulo: (other: string | number | Long) => Long;
                                            mod: (other: string | number | Long) => Long;
                                            rem: (other: string | number | Long) => Long;
                                            multiply: (multiplier: string | number | Long) => Long;
                                            mul: (multiplier: string | number | Long) => Long;
                                            negate: () => Long;
                                            neg: () => Long;
                                            not: () => Long;
                                            countLeadingZeros: () => number;
                                            clz: () => number;
                                            countTrailingZeros: () => number;
                                            ctz: () => number;
                                            notEquals: (other: string | number | Long) => boolean;
                                            neq: (other: string | number | Long) => boolean;
                                            ne: (other: string | number | Long) => boolean;
                                            or: (other: string | number | Long) => Long;
                                            shiftLeft: (numBits: number | Long) => Long;
                                            shl: (numBits: number | Long) => Long;
                                            shiftRight: (numBits: number | Long) => Long;
                                            shr: (numBits: number | Long) => Long;
                                            shiftRightUnsigned: (numBits: number | Long) => Long;
                                            shru: (numBits: number | Long) => Long;
                                            shr_u: (numBits: number | Long) => Long;
                                            rotateLeft: (numBits: number | Long) => Long;
                                            rotl: (numBits: number | Long) => Long;
                                            rotateRight: (numBits: number | Long) => Long;
                                            rotr: (numBits: number | Long) => Long;
                                            subtract: (subtrahend: string | number | Long) => Long;
                                            sub: (subtrahend: string | number | Long) => Long;
                                            toInt: () => number;
                                            toNumber: () => number;
                                            toBytes: (le?: boolean | undefined) => number[];
                                            toBytesLE: () => number[];
                                            toBytesBE: () => number[];
                                            toSigned: () => Long;
                                            toString: (radix?: number | undefined) => string;
                                            toUnsigned: () => Long;
                                            xor: (other: string | number | Long) => Long;
                                        } & { [K_174 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
                                    } & { [K_175 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../../../tendermint/version/types").Consensus>]: never; }) | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_176 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long>]: never; }) | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: ({
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } & {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: ({
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & { [K_177 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                                    } & { [K_178 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof BlockID>]: never; }) | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } & { [K_179 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof import("../../../tendermint/types/types").Header>]: never; }) | undefined;
                                commit?: ({
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } & {
                                    height?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_180 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long>]: never; }) | undefined;
                                    round?: number | undefined;
                                    blockId?: ({
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } & {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: ({
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } & { [K_181 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                                    } & { [K_182 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof BlockID>]: never; }) | undefined;
                                    signatures?: ({
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] & ({
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & { [K_183 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("../../../tendermint/types/types").CommitSig>]: never; })[] & { [K_184 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[]>]: never; }) | undefined;
                                } & { [K_185 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof import("../../../tendermint/types/types").Commit>]: never; }) | undefined;
                            } & { [K_186 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("../../../tendermint/types/types").SignedHeader>]: never; }) | undefined;
                            validatorSet?: ({
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } & {
                                validators?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] & ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & { [K_187 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                                    votingPower?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_188 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
                                    proposerPriority?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_189 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                                } & { [K_190 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof import("../../../tendermint/types/validator").Validator>]: never; })[] & { [K_191 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[]>]: never; }) | undefined;
                                proposer?: ({
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } & {
                                    address?: Uint8Array | undefined;
                                    pubKey?: ({
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } & { [K_192 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                                    votingPower?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_193 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long>]: never; }) | undefined;
                                    proposerPriority?: string | number | (Long & {
                                        high: number;
                                        low: number;
                                        unsigned: boolean;
                                        add: (addend: string | number | Long) => Long;
                                        and: (other: string | number | Long) => Long;
                                        compare: (other: string | number | Long) => number;
                                        comp: (other: string | number | Long) => number;
                                        divide: (divisor: string | number | Long) => Long;
                                        div: (divisor: string | number | Long) => Long;
                                        equals: (other: string | number | Long) => boolean;
                                        eq: (other: string | number | Long) => boolean;
                                        getHighBits: () => number;
                                        getHighBitsUnsigned: () => number;
                                        getLowBits: () => number;
                                        getLowBitsUnsigned: () => number;
                                        getNumBitsAbs: () => number;
                                        greaterThan: (other: string | number | Long) => boolean;
                                        gt: (other: string | number | Long) => boolean;
                                        greaterThanOrEqual: (other: string | number | Long) => boolean;
                                        gte: (other: string | number | Long) => boolean;
                                        ge: (other: string | number | Long) => boolean;
                                        isEven: () => boolean;
                                        isNegative: () => boolean;
                                        isOdd: () => boolean;
                                        isPositive: () => boolean;
                                        isZero: () => boolean;
                                        eqz: () => boolean;
                                        lessThan: (other: string | number | Long) => boolean;
                                        lt: (other: string | number | Long) => boolean;
                                        lessThanOrEqual: (other: string | number | Long) => boolean;
                                        lte: (other: string | number | Long) => boolean;
                                        le: (other: string | number | Long) => boolean;
                                        modulo: (other: string | number | Long) => Long;
                                        mod: (other: string | number | Long) => Long;
                                        rem: (other: string | number | Long) => Long;
                                        multiply: (multiplier: string | number | Long) => Long;
                                        mul: (multiplier: string | number | Long) => Long;
                                        negate: () => Long;
                                        neg: () => Long;
                                        not: () => Long;
                                        countLeadingZeros: () => number;
                                        clz: () => number;
                                        countTrailingZeros: () => number;
                                        ctz: () => number;
                                        notEquals: (other: string | number | Long) => boolean;
                                        neq: (other: string | number | Long) => boolean;
                                        ne: (other: string | number | Long) => boolean;
                                        or: (other: string | number | Long) => Long;
                                        shiftLeft: (numBits: number | Long) => Long;
                                        shl: (numBits: number | Long) => Long;
                                        shiftRight: (numBits: number | Long) => Long;
                                        shr: (numBits: number | Long) => Long;
                                        shiftRightUnsigned: (numBits: number | Long) => Long;
                                        shru: (numBits: number | Long) => Long;
                                        shr_u: (numBits: number | Long) => Long;
                                        rotateLeft: (numBits: number | Long) => Long;
                                        rotl: (numBits: number | Long) => Long;
                                        rotateRight: (numBits: number | Long) => Long;
                                        rotr: (numBits: number | Long) => Long;
                                        subtract: (subtrahend: string | number | Long) => Long;
                                        sub: (subtrahend: string | number | Long) => Long;
                                        toInt: () => number;
                                        toNumber: () => number;
                                        toBytes: (le?: boolean | undefined) => number[];
                                        toBytesLE: () => number[];
                                        toBytesBE: () => number[];
                                        toSigned: () => Long;
                                        toString: (radix?: number | undefined) => string;
                                        toUnsigned: () => Long;
                                        xor: (other: string | number | Long) => Long;
                                    } & { [K_194 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long>]: never; }) | undefined;
                                } & { [K_195 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof import("../../../tendermint/types/validator").Validator>]: never; }) | undefined;
                                totalVotingPower?: string | number | (Long & {
                                    high: number;
                                    low: number;
                                    unsigned: boolean;
                                    add: (addend: string | number | Long) => Long;
                                    and: (other: string | number | Long) => Long;
                                    compare: (other: string | number | Long) => number;
                                    comp: (other: string | number | Long) => number;
                                    divide: (divisor: string | number | Long) => Long;
                                    div: (divisor: string | number | Long) => Long;
                                    equals: (other: string | number | Long) => boolean;
                                    eq: (other: string | number | Long) => boolean;
                                    getHighBits: () => number;
                                    getHighBitsUnsigned: () => number;
                                    getLowBits: () => number;
                                    getLowBitsUnsigned: () => number;
                                    getNumBitsAbs: () => number;
                                    greaterThan: (other: string | number | Long) => boolean;
                                    gt: (other: string | number | Long) => boolean;
                                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                                    gte: (other: string | number | Long) => boolean;
                                    ge: (other: string | number | Long) => boolean;
                                    isEven: () => boolean;
                                    isNegative: () => boolean;
                                    isOdd: () => boolean;
                                    isPositive: () => boolean;
                                    isZero: () => boolean;
                                    eqz: () => boolean;
                                    lessThan: (other: string | number | Long) => boolean;
                                    lt: (other: string | number | Long) => boolean;
                                    lessThanOrEqual: (other: string | number | Long) => boolean;
                                    lte: (other: string | number | Long) => boolean;
                                    le: (other: string | number | Long) => boolean;
                                    modulo: (other: string | number | Long) => Long;
                                    mod: (other: string | number | Long) => Long;
                                    rem: (other: string | number | Long) => Long;
                                    multiply: (multiplier: string | number | Long) => Long;
                                    mul: (multiplier: string | number | Long) => Long;
                                    negate: () => Long;
                                    neg: () => Long;
                                    not: () => Long;
                                    countLeadingZeros: () => number;
                                    clz: () => number;
                                    countTrailingZeros: () => number;
                                    ctz: () => number;
                                    notEquals: (other: string | number | Long) => boolean;
                                    neq: (other: string | number | Long) => boolean;
                                    ne: (other: string | number | Long) => boolean;
                                    or: (other: string | number | Long) => Long;
                                    shiftLeft: (numBits: number | Long) => Long;
                                    shl: (numBits: number | Long) => Long;
                                    shiftRight: (numBits: number | Long) => Long;
                                    shr: (numBits: number | Long) => Long;
                                    shiftRightUnsigned: (numBits: number | Long) => Long;
                                    shru: (numBits: number | Long) => Long;
                                    shr_u: (numBits: number | Long) => Long;
                                    rotateLeft: (numBits: number | Long) => Long;
                                    rotl: (numBits: number | Long) => Long;
                                    rotateRight: (numBits: number | Long) => Long;
                                    rotr: (numBits: number | Long) => Long;
                                    subtract: (subtrahend: string | number | Long) => Long;
                                    sub: (subtrahend: string | number | Long) => Long;
                                    toInt: () => number;
                                    toNumber: () => number;
                                    toBytes: (le?: boolean | undefined) => number[];
                                    toBytesLE: () => number[];
                                    toBytesBE: () => number[];
                                    toSigned: () => Long;
                                    toString: (radix?: number | undefined) => string;
                                    toUnsigned: () => Long;
                                    xor: (other: string | number | Long) => Long;
                                } & { [K_196 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                            } & { [K_197 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("../../../tendermint/types/validator").ValidatorSet>]: never; }) | undefined;
                        } & { [K_198 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof import("../../../tendermint/types/types").LightBlock>]: never; }) | undefined;
                        commonHeight?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_199 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["commonHeight"], keyof Long>]: never; }) | undefined;
                        byzantineValidators?: ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] & ({
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        } & {
                            address?: Uint8Array | undefined;
                            pubKey?: ({
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } & { [K_200 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../../../tendermint/crypto/keys").PublicKey>]: never; }) | undefined;
                            votingPower?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_201 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
                            proposerPriority?: string | number | (Long & {
                                high: number;
                                low: number;
                                unsigned: boolean;
                                add: (addend: string | number | Long) => Long;
                                and: (other: string | number | Long) => Long;
                                compare: (other: string | number | Long) => number;
                                comp: (other: string | number | Long) => number;
                                divide: (divisor: string | number | Long) => Long;
                                div: (divisor: string | number | Long) => Long;
                                equals: (other: string | number | Long) => boolean;
                                eq: (other: string | number | Long) => boolean;
                                getHighBits: () => number;
                                getHighBitsUnsigned: () => number;
                                getLowBits: () => number;
                                getLowBitsUnsigned: () => number;
                                getNumBitsAbs: () => number;
                                greaterThan: (other: string | number | Long) => boolean;
                                gt: (other: string | number | Long) => boolean;
                                greaterThanOrEqual: (other: string | number | Long) => boolean;
                                gte: (other: string | number | Long) => boolean;
                                ge: (other: string | number | Long) => boolean;
                                isEven: () => boolean;
                                isNegative: () => boolean;
                                isOdd: () => boolean;
                                isPositive: () => boolean;
                                isZero: () => boolean;
                                eqz: () => boolean;
                                lessThan: (other: string | number | Long) => boolean;
                                lt: (other: string | number | Long) => boolean;
                                lessThanOrEqual: (other: string | number | Long) => boolean;
                                lte: (other: string | number | Long) => boolean;
                                le: (other: string | number | Long) => boolean;
                                modulo: (other: string | number | Long) => Long;
                                mod: (other: string | number | Long) => Long;
                                rem: (other: string | number | Long) => Long;
                                multiply: (multiplier: string | number | Long) => Long;
                                mul: (multiplier: string | number | Long) => Long;
                                negate: () => Long;
                                neg: () => Long;
                                not: () => Long;
                                countLeadingZeros: () => number;
                                clz: () => number;
                                countTrailingZeros: () => number;
                                ctz: () => number;
                                notEquals: (other: string | number | Long) => boolean;
                                neq: (other: string | number | Long) => boolean;
                                ne: (other: string | number | Long) => boolean;
                                or: (other: string | number | Long) => Long;
                                shiftLeft: (numBits: number | Long) => Long;
                                shl: (numBits: number | Long) => Long;
                                shiftRight: (numBits: number | Long) => Long;
                                shr: (numBits: number | Long) => Long;
                                shiftRightUnsigned: (numBits: number | Long) => Long;
                                shru: (numBits: number | Long) => Long;
                                shr_u: (numBits: number | Long) => Long;
                                rotateLeft: (numBits: number | Long) => Long;
                                rotl: (numBits: number | Long) => Long;
                                rotateRight: (numBits: number | Long) => Long;
                                rotr: (numBits: number | Long) => Long;
                                subtract: (subtrahend: string | number | Long) => Long;
                                sub: (subtrahend: string | number | Long) => Long;
                                toInt: () => number;
                                toNumber: () => number;
                                toBytes: (le?: boolean | undefined) => number[];
                                toBytesLE: () => number[];
                                toBytesBE: () => number[];
                                toSigned: () => Long;
                                toString: (radix?: number | undefined) => string;
                                toUnsigned: () => Long;
                                xor: (other: string | number | Long) => Long;
                            } & { [K_202 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                        } & { [K_203 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof import("../../../tendermint/types/validator").Validator>]: never; })[] & { [K_204 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[]>]: never; }) | undefined;
                        totalVotingPower?: string | number | (Long & {
                            high: number;
                            low: number;
                            unsigned: boolean;
                            add: (addend: string | number | Long) => Long;
                            and: (other: string | number | Long) => Long;
                            compare: (other: string | number | Long) => number;
                            comp: (other: string | number | Long) => number;
                            divide: (divisor: string | number | Long) => Long;
                            div: (divisor: string | number | Long) => Long;
                            equals: (other: string | number | Long) => boolean;
                            eq: (other: string | number | Long) => boolean;
                            getHighBits: () => number;
                            getHighBitsUnsigned: () => number;
                            getLowBits: () => number;
                            getLowBitsUnsigned: () => number;
                            getNumBitsAbs: () => number;
                            greaterThan: (other: string | number | Long) => boolean;
                            gt: (other: string | number | Long) => boolean;
                            greaterThanOrEqual: (other: string | number | Long) => boolean;
                            gte: (other: string | number | Long) => boolean;
                            ge: (other: string | number | Long) => boolean;
                            isEven: () => boolean;
                            isNegative: () => boolean;
                            isOdd: () => boolean;
                            isPositive: () => boolean;
                            isZero: () => boolean;
                            eqz: () => boolean;
                            lessThan: (other: string | number | Long) => boolean;
                            lt: (other: string | number | Long) => boolean;
                            lessThanOrEqual: (other: string | number | Long) => boolean;
                            lte: (other: string | number | Long) => boolean;
                            le: (other: string | number | Long) => boolean;
                            modulo: (other: string | number | Long) => Long;
                            mod: (other: string | number | Long) => Long;
                            rem: (other: string | number | Long) => Long;
                            multiply: (multiplier: string | number | Long) => Long;
                            mul: (multiplier: string | number | Long) => Long;
                            negate: () => Long;
                            neg: () => Long;
                            not: () => Long;
                            countLeadingZeros: () => number;
                            clz: () => number;
                            countTrailingZeros: () => number;
                            ctz: () => number;
                            notEquals: (other: string | number | Long) => boolean;
                            neq: (other: string | number | Long) => boolean;
                            ne: (other: string | number | Long) => boolean;
                            or: (other: string | number | Long) => Long;
                            shiftLeft: (numBits: number | Long) => Long;
                            shl: (numBits: number | Long) => Long;
                            shiftRight: (numBits: number | Long) => Long;
                            shr: (numBits: number | Long) => Long;
                            shiftRightUnsigned: (numBits: number | Long) => Long;
                            shru: (numBits: number | Long) => Long;
                            shr_u: (numBits: number | Long) => Long;
                            rotateLeft: (numBits: number | Long) => Long;
                            rotl: (numBits: number | Long) => Long;
                            rotateRight: (numBits: number | Long) => Long;
                            rotr: (numBits: number | Long) => Long;
                            subtract: (subtrahend: string | number | Long) => Long;
                            sub: (subtrahend: string | number | Long) => Long;
                            toInt: () => number;
                            toNumber: () => number;
                            toBytes: (le?: boolean | undefined) => number[];
                            toBytesLE: () => number[];
                            toBytesBE: () => number[];
                            toSigned: () => Long;
                            toString: (radix?: number | undefined) => string;
                            toUnsigned: () => Long;
                            xor: (other: string | number | Long) => Long;
                        } & { [K_205 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                    } & { [K_206 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof import("../../../tendermint/types/evidence").LightClientAttackEvidence>]: never; }) | undefined;
                } & { [K_207 in Exclude<keyof I_1["block"]["evidence"]["evidence"][number], keyof import("../../../tendermint/types/evidence").Evidence>]: never; })[] & { [K_208 in Exclude<keyof I_1["block"]["evidence"]["evidence"], keyof {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        voteB?: {
                            type?: import("../../../tendermint/types/types").SignedMsgType | undefined;
                            height?: string | number | Long | undefined;
                            round?: number | undefined;
                            blockId?: {
                                hash?: Uint8Array | undefined;
                                partSetHeader?: {
                                    total?: number | undefined;
                                    hash?: Uint8Array | undefined;
                                } | undefined;
                            } | undefined;
                            timestamp?: Date | undefined;
                            validatorAddress?: Uint8Array | undefined;
                            validatorIndex?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        validatorPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | Long | undefined;
                                        app?: string | number | Long | undefined;
                                    } | undefined;
                                    chainId?: string | undefined;
                                    height?: string | number | Long | undefined;
                                    time?: Date | undefined;
                                    lastBlockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    lastCommitHash?: Uint8Array | undefined;
                                    dataHash?: Uint8Array | undefined;
                                    validatorsHash?: Uint8Array | undefined;
                                    nextValidatorsHash?: Uint8Array | undefined;
                                    consensusHash?: Uint8Array | undefined;
                                    appHash?: Uint8Array | undefined;
                                    lastResultsHash?: Uint8Array | undefined;
                                    evidenceHash?: Uint8Array | undefined;
                                    proposerAddress?: Uint8Array | undefined;
                                } | undefined;
                                commit?: {
                                    height?: string | number | Long | undefined;
                                    round?: number | undefined;
                                    blockId?: {
                                        hash?: Uint8Array | undefined;
                                        partSetHeader?: {
                                            total?: number | undefined;
                                            hash?: Uint8Array | undefined;
                                        } | undefined;
                                    } | undefined;
                                    signatures?: {
                                        blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validatorAddress?: Uint8Array | undefined;
                                        timestamp?: Date | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[] | undefined;
                                } | undefined;
                            } | undefined;
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                }[] | undefined;
                                proposer?: {
                                    address?: Uint8Array | undefined;
                                    pubKey?: {
                                        ed25519?: Uint8Array | undefined;
                                        secp256k1?: Uint8Array | undefined;
                                    } | undefined;
                                    votingPower?: string | number | Long | undefined;
                                    proposerPriority?: string | number | Long | undefined;
                                } | undefined;
                                totalVotingPower?: string | number | Long | undefined;
                            } | undefined;
                        } | undefined;
                        commonHeight?: string | number | Long | undefined;
                        byzantineValidators?: {
                            address?: Uint8Array | undefined;
                            pubKey?: {
                                ed25519?: Uint8Array | undefined;
                                secp256k1?: Uint8Array | undefined;
                            } | undefined;
                            votingPower?: string | number | Long | undefined;
                            proposerPriority?: string | number | Long | undefined;
                        }[] | undefined;
                        totalVotingPower?: string | number | Long | undefined;
                        timestamp?: Date | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_209 in Exclude<keyof I_1["block"]["evidence"], "evidence">]: never; }) | undefined;
            lastCommit?: ({
                height?: string | number | Long | undefined;
                round?: number | undefined;
                blockId?: {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                height?: string | number | (Long & {
                    high: number;
                    low: number;
                    unsigned: boolean;
                    add: (addend: string | number | Long) => Long;
                    and: (other: string | number | Long) => Long;
                    compare: (other: string | number | Long) => number;
                    comp: (other: string | number | Long) => number;
                    divide: (divisor: string | number | Long) => Long;
                    div: (divisor: string | number | Long) => Long;
                    equals: (other: string | number | Long) => boolean;
                    eq: (other: string | number | Long) => boolean;
                    getHighBits: () => number;
                    getHighBitsUnsigned: () => number;
                    getLowBits: () => number;
                    getLowBitsUnsigned: () => number;
                    getNumBitsAbs: () => number;
                    greaterThan: (other: string | number | Long) => boolean;
                    gt: (other: string | number | Long) => boolean;
                    greaterThanOrEqual: (other: string | number | Long) => boolean;
                    gte: (other: string | number | Long) => boolean;
                    ge: (other: string | number | Long) => boolean;
                    isEven: () => boolean;
                    isNegative: () => boolean;
                    isOdd: () => boolean;
                    isPositive: () => boolean;
                    isZero: () => boolean;
                    eqz: () => boolean;
                    lessThan: (other: string | number | Long) => boolean;
                    lt: (other: string | number | Long) => boolean;
                    lessThanOrEqual: (other: string | number | Long) => boolean;
                    lte: (other: string | number | Long) => boolean;
                    le: (other: string | number | Long) => boolean;
                    modulo: (other: string | number | Long) => Long;
                    mod: (other: string | number | Long) => Long;
                    rem: (other: string | number | Long) => Long;
                    multiply: (multiplier: string | number | Long) => Long;
                    mul: (multiplier: string | number | Long) => Long;
                    negate: () => Long;
                    neg: () => Long;
                    not: () => Long;
                    countLeadingZeros: () => number;
                    clz: () => number;
                    countTrailingZeros: () => number;
                    ctz: () => number;
                    notEquals: (other: string | number | Long) => boolean;
                    neq: (other: string | number | Long) => boolean;
                    ne: (other: string | number | Long) => boolean;
                    or: (other: string | number | Long) => Long;
                    shiftLeft: (numBits: number | Long) => Long;
                    shl: (numBits: number | Long) => Long;
                    shiftRight: (numBits: number | Long) => Long;
                    shr: (numBits: number | Long) => Long;
                    shiftRightUnsigned: (numBits: number | Long) => Long;
                    shru: (numBits: number | Long) => Long;
                    shr_u: (numBits: number | Long) => Long;
                    rotateLeft: (numBits: number | Long) => Long;
                    rotl: (numBits: number | Long) => Long;
                    rotateRight: (numBits: number | Long) => Long;
                    rotr: (numBits: number | Long) => Long;
                    subtract: (subtrahend: string | number | Long) => Long;
                    sub: (subtrahend: string | number | Long) => Long;
                    toInt: () => number;
                    toNumber: () => number;
                    toBytes: (le?: boolean | undefined) => number[];
                    toBytesLE: () => number[];
                    toBytesBE: () => number[];
                    toSigned: () => Long;
                    toString: (radix?: number | undefined) => string;
                    toUnsigned: () => Long;
                    xor: (other: string | number | Long) => Long;
                } & { [K_210 in Exclude<keyof I_1["block"]["lastCommit"]["height"], keyof Long>]: never; }) | undefined;
                round?: number | undefined;
                blockId?: ({
                    hash?: Uint8Array | undefined;
                    partSetHeader?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    partSetHeader?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & { [K_211 in Exclude<keyof I_1["block"]["lastCommit"]["blockId"]["partSetHeader"], keyof import("../../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
                } & { [K_212 in Exclude<keyof I_1["block"]["lastCommit"]["blockId"], keyof BlockID>]: never; }) | undefined;
                signatures?: ({
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[] & ({
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                } & { [K_213 in Exclude<keyof I_1["block"]["lastCommit"]["signatures"][number], keyof import("../../../tendermint/types/types").CommitSig>]: never; })[] & { [K_214 in Exclude<keyof I_1["block"]["lastCommit"]["signatures"], keyof {
                    blockIdFlag?: import("../../../tendermint/types/types").BlockIDFlag | undefined;
                    validatorAddress?: Uint8Array | undefined;
                    timestamp?: Date | undefined;
                    signature?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_215 in Exclude<keyof I_1["block"]["lastCommit"], keyof import("../../../tendermint/types/types").Commit>]: never; }) | undefined;
        } & { [K_216 in Exclude<keyof I_1["block"], keyof Block>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_217 in Exclude<keyof I_1["pagination"]["total"], keyof Long>]: never; }) | undefined;
        } & { [K_218 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_219 in Exclude<keyof I_1, keyof GetBlockWithTxsResponse>]: never; }>(object: I_1): GetBlockWithTxsResponse;
};
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
    /** Simulate simulates executing a transaction for estimating gas usage. */
    Simulate(request: SimulateRequest): Promise<SimulateResponse>;
    /** GetTx fetches a tx by hash. */
    GetTx(request: GetTxRequest): Promise<GetTxResponse>;
    /** BroadcastTx broadcast transaction. */
    BroadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    /** GetTxsEvent fetches txs by event. */
    GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    /**
     * GetBlockWithTxs fetches a block with decoded txs.
     *
     * Since: cosmos-sdk 0.45.2
     */
    GetBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Simulate(request: SimulateRequest): Promise<SimulateResponse>;
    GetTx(request: GetTxRequest): Promise<GetTxResponse>;
    BroadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponse>;
    GetTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponse>;
    GetBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponse>;
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
