import Long from "long";
import _m0 from "protobufjs/minimal";
import { MerklePrefix } from "../../commitment/v1/commitment";
export declare const protobufPackage = "ibc.core.connection.v1";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export declare enum State {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    STATE_UNINITIALIZED_UNSPECIFIED = 0,
    /** STATE_INIT - A connection end has just started the opening handshake. */
    STATE_INIT = 1,
    /**
     * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
     * chain.
     */
    STATE_TRYOPEN = 2,
    /** STATE_OPEN - A connection end has completed the handshake. */
    STATE_OPEN = 3,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 */
export interface ConnectionEnd {
    /** client associated with this connection. */
    clientId: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection.
     */
    versions: Version[];
    /** current state of the connection end. */
    state: State;
    /** counterparty chain associated with this connection. */
    counterparty?: Counterparty;
    /**
     * delay period that must pass before a consensus state can be used for
     * packet-verification NOTE: delay period logic is only implemented by some
     * clients.
     */
    delayPeriod: Long;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 */
export interface IdentifiedConnection {
    /** connection identifier. */
    id: string;
    /** client associated with this connection. */
    clientId: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection
     */
    versions: Version[];
    /** current state of the connection end. */
    state: State;
    /** counterparty chain associated with this connection. */
    counterparty?: Counterparty;
    /** delay period associated with this connection. */
    delayPeriod: Long;
}
/** Counterparty defines the counterparty chain associated with a connection end. */
export interface Counterparty {
    /**
     * identifies the client on the counterparty chain associated with a given
     * connection.
     */
    clientId: string;
    /**
     * identifies the connection end on the counterparty chain associated with a
     * given connection.
     */
    connectionId: string;
    /** commitment merkle prefix of the counterparty chain. */
    prefix?: MerklePrefix;
}
/** ClientPaths define all the connection paths for a client state. */
export interface ClientPaths {
    /** list of connection paths */
    paths: string[];
}
/** ConnectionPaths define all the connection paths for a given client state. */
export interface ConnectionPaths {
    /** client state unique identifier */
    clientId: string;
    /** list of connection paths */
    paths: string[];
}
/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 */
export interface Version {
    /** unique version identifier */
    identifier: string;
    /** list of features compatible with the specified identifier */
    features: string[];
}
/** Params defines the set of Connection parameters. */
export interface Params {
    /**
     * maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the
     * largest amount of time that the chain might reasonably take to produce the next block under normal operating
     * conditions. A safe choice is 3-5x the expected time per block.
     */
    maxExpectedTimePerBlock: Long;
}
export declare const ConnectionEnd: {
    encode(message: ConnectionEnd, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionEnd;
    fromJSON(object: any): ConnectionEnd;
    toJSON(message: ConnectionEnd): unknown;
    create<I extends {
        clientId?: string | undefined;
        versions?: {
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[] | undefined;
        state?: State | undefined;
        counterparty?: {
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: {
                keyPrefix?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        delayPeriod?: string | number | Long | undefined;
    } & {
        clientId?: string | undefined;
        versions?: ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[] & ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        } & {
            identifier?: string | undefined;
            features?: (string[] & string[] & { [K in Exclude<keyof I["versions"][number]["features"], keyof string[]>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["versions"][number], keyof Version>]: never; })[] & { [K_2 in Exclude<keyof I["versions"], keyof {
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[]>]: never; }) | undefined;
        state?: State | undefined;
        counterparty?: ({
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: {
                keyPrefix?: Uint8Array | undefined;
            } | undefined;
        } & {
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: ({
                keyPrefix?: Uint8Array | undefined;
            } & {
                keyPrefix?: Uint8Array | undefined;
            } & { [K_3 in Exclude<keyof I["counterparty"]["prefix"], "keyPrefix">]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["counterparty"], keyof Counterparty>]: never; }) | undefined;
        delayPeriod?: string | number | (Long & {
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
        } & { [K_5 in Exclude<keyof I["delayPeriod"], keyof Long>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof ConnectionEnd>]: never; }>(base?: I | undefined): ConnectionEnd;
    fromPartial<I_1 extends {
        clientId?: string | undefined;
        versions?: {
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[] | undefined;
        state?: State | undefined;
        counterparty?: {
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: {
                keyPrefix?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        delayPeriod?: string | number | Long | undefined;
    } & {
        clientId?: string | undefined;
        versions?: ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[] & ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        } & {
            identifier?: string | undefined;
            features?: (string[] & string[] & { [K_7 in Exclude<keyof I_1["versions"][number]["features"], keyof string[]>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I_1["versions"][number], keyof Version>]: never; })[] & { [K_9 in Exclude<keyof I_1["versions"], keyof {
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[]>]: never; }) | undefined;
        state?: State | undefined;
        counterparty?: ({
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: {
                keyPrefix?: Uint8Array | undefined;
            } | undefined;
        } & {
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: ({
                keyPrefix?: Uint8Array | undefined;
            } & {
                keyPrefix?: Uint8Array | undefined;
            } & { [K_10 in Exclude<keyof I_1["counterparty"]["prefix"], "keyPrefix">]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I_1["counterparty"], keyof Counterparty>]: never; }) | undefined;
        delayPeriod?: string | number | (Long & {
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
        } & { [K_12 in Exclude<keyof I_1["delayPeriod"], keyof Long>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof ConnectionEnd>]: never; }>(object: I_1): ConnectionEnd;
};
export declare const IdentifiedConnection: {
    encode(message: IdentifiedConnection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedConnection;
    fromJSON(object: any): IdentifiedConnection;
    toJSON(message: IdentifiedConnection): unknown;
    create<I extends {
        id?: string | undefined;
        clientId?: string | undefined;
        versions?: {
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[] | undefined;
        state?: State | undefined;
        counterparty?: {
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: {
                keyPrefix?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        delayPeriod?: string | number | Long | undefined;
    } & {
        id?: string | undefined;
        clientId?: string | undefined;
        versions?: ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[] & ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        } & {
            identifier?: string | undefined;
            features?: (string[] & string[] & { [K in Exclude<keyof I["versions"][number]["features"], keyof string[]>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["versions"][number], keyof Version>]: never; })[] & { [K_2 in Exclude<keyof I["versions"], keyof {
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[]>]: never; }) | undefined;
        state?: State | undefined;
        counterparty?: ({
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: {
                keyPrefix?: Uint8Array | undefined;
            } | undefined;
        } & {
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: ({
                keyPrefix?: Uint8Array | undefined;
            } & {
                keyPrefix?: Uint8Array | undefined;
            } & { [K_3 in Exclude<keyof I["counterparty"]["prefix"], "keyPrefix">]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["counterparty"], keyof Counterparty>]: never; }) | undefined;
        delayPeriod?: string | number | (Long & {
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
        } & { [K_5 in Exclude<keyof I["delayPeriod"], keyof Long>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof IdentifiedConnection>]: never; }>(base?: I | undefined): IdentifiedConnection;
    fromPartial<I_1 extends {
        id?: string | undefined;
        clientId?: string | undefined;
        versions?: {
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[] | undefined;
        state?: State | undefined;
        counterparty?: {
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: {
                keyPrefix?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        delayPeriod?: string | number | Long | undefined;
    } & {
        id?: string | undefined;
        clientId?: string | undefined;
        versions?: ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[] & ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        } & {
            identifier?: string | undefined;
            features?: (string[] & string[] & { [K_7 in Exclude<keyof I_1["versions"][number]["features"], keyof string[]>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I_1["versions"][number], keyof Version>]: never; })[] & { [K_9 in Exclude<keyof I_1["versions"], keyof {
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[]>]: never; }) | undefined;
        state?: State | undefined;
        counterparty?: ({
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: {
                keyPrefix?: Uint8Array | undefined;
            } | undefined;
        } & {
            clientId?: string | undefined;
            connectionId?: string | undefined;
            prefix?: ({
                keyPrefix?: Uint8Array | undefined;
            } & {
                keyPrefix?: Uint8Array | undefined;
            } & { [K_10 in Exclude<keyof I_1["counterparty"]["prefix"], "keyPrefix">]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I_1["counterparty"], keyof Counterparty>]: never; }) | undefined;
        delayPeriod?: string | number | (Long & {
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
        } & { [K_12 in Exclude<keyof I_1["delayPeriod"], keyof Long>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof IdentifiedConnection>]: never; }>(object: I_1): IdentifiedConnection;
};
export declare const Counterparty: {
    encode(message: Counterparty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Counterparty;
    fromJSON(object: any): Counterparty;
    toJSON(message: Counterparty): unknown;
    create<I extends {
        clientId?: string | undefined;
        connectionId?: string | undefined;
        prefix?: {
            keyPrefix?: Uint8Array | undefined;
        } | undefined;
    } & {
        clientId?: string | undefined;
        connectionId?: string | undefined;
        prefix?: ({
            keyPrefix?: Uint8Array | undefined;
        } & {
            keyPrefix?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["prefix"], "keyPrefix">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Counterparty>]: never; }>(base?: I | undefined): Counterparty;
    fromPartial<I_1 extends {
        clientId?: string | undefined;
        connectionId?: string | undefined;
        prefix?: {
            keyPrefix?: Uint8Array | undefined;
        } | undefined;
    } & {
        clientId?: string | undefined;
        connectionId?: string | undefined;
        prefix?: ({
            keyPrefix?: Uint8Array | undefined;
        } & {
            keyPrefix?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I_1["prefix"], "keyPrefix">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Counterparty>]: never; }>(object: I_1): Counterparty;
};
export declare const ClientPaths: {
    encode(message: ClientPaths, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientPaths;
    fromJSON(object: any): ClientPaths;
    toJSON(message: ClientPaths): unknown;
    create<I extends {
        paths?: string[] | undefined;
    } & {
        paths?: (string[] & string[] & { [K in Exclude<keyof I["paths"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "paths">]: never; }>(base?: I | undefined): ClientPaths;
    fromPartial<I_1 extends {
        paths?: string[] | undefined;
    } & {
        paths?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["paths"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "paths">]: never; }>(object: I_1): ClientPaths;
};
export declare const ConnectionPaths: {
    encode(message: ConnectionPaths, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionPaths;
    fromJSON(object: any): ConnectionPaths;
    toJSON(message: ConnectionPaths): unknown;
    create<I extends {
        clientId?: string | undefined;
        paths?: string[] | undefined;
    } & {
        clientId?: string | undefined;
        paths?: (string[] & string[] & { [K in Exclude<keyof I["paths"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ConnectionPaths>]: never; }>(base?: I | undefined): ConnectionPaths;
    fromPartial<I_1 extends {
        clientId?: string | undefined;
        paths?: string[] | undefined;
    } & {
        clientId?: string | undefined;
        paths?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["paths"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof ConnectionPaths>]: never; }>(object: I_1): ConnectionPaths;
};
export declare const Version: {
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    create<I extends {
        identifier?: string | undefined;
        features?: string[] | undefined;
    } & {
        identifier?: string | undefined;
        features?: (string[] & string[] & { [K in Exclude<keyof I["features"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Version>]: never; }>(base?: I | undefined): Version;
    fromPartial<I_1 extends {
        identifier?: string | undefined;
        features?: string[] | undefined;
    } & {
        identifier?: string | undefined;
        features?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["features"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Version>]: never; }>(object: I_1): Version;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    create<I extends {
        maxExpectedTimePerBlock?: string | number | Long | undefined;
    } & {
        maxExpectedTimePerBlock?: string | number | (Long & {
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
        } & { [K in Exclude<keyof I["maxExpectedTimePerBlock"], keyof Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "maxExpectedTimePerBlock">]: never; }>(base?: I | undefined): Params;
    fromPartial<I_1 extends {
        maxExpectedTimePerBlock?: string | number | Long | undefined;
    } & {
        maxExpectedTimePerBlock?: string | number | (Long & {
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
        } & { [K_2 in Exclude<keyof I_1["maxExpectedTimePerBlock"], keyof Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "maxExpectedTimePerBlock">]: never; }>(object: I_1): Params;
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
