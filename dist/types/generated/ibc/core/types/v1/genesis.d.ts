import Long from "long";
import _m0 from "protobufjs/minimal";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
export declare const protobufPackage = "ibc.core.types.v1";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
    /** ICS002 - Clients genesis state */
    clientGenesis?: GenesisState1;
    /** ICS003 - Connections genesis state */
    connectionGenesis?: GenesisState2;
    /** ICS004 - Channel genesis state */
    channelGenesis?: GenesisState3;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        clientGenesis?: {
            clients?: {
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            clientsConsensus?: {
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
            clientsMetadata?: {
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] | undefined;
            params?: {
                allowedClients?: string[] | undefined;
            } | undefined;
            createLocalhost?: boolean | undefined;
            nextClientSequence?: string | number | Long | undefined;
        } | undefined;
        connectionGenesis?: {
            connections?: {
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long | undefined;
            }[] | undefined;
            clientConnectionPaths?: {
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[] | undefined;
            nextConnectionSequence?: string | number | Long | undefined;
            params?: {
                maxExpectedTimePerBlock?: string | number | Long | undefined;
            } | undefined;
        } | undefined;
        channelGenesis?: {
            channels?: {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            acknowledgements?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            commitments?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            receipts?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            sendSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            recvSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            ackSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            nextChannelSequence?: string | number | Long | undefined;
        } | undefined;
    } & {
        clientGenesis?: ({
            clients?: {
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            clientsConsensus?: {
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
            clientsMetadata?: {
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] | undefined;
            params?: {
                allowedClients?: string[] | undefined;
            } | undefined;
            createLocalhost?: boolean | undefined;
            nextClientSequence?: string | number | Long | undefined;
        } & {
            clients?: ({
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] & ({
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                clientId?: string | undefined;
                clientState?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K in Exclude<keyof I["clientGenesis"]["clients"][number]["clientState"], keyof import("../../../../google/protobuf/any").Any>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["clientGenesis"]["clients"][number], keyof import("../../client/v1/client").IdentifiedClientState>]: never; })[] & { [K_2 in Exclude<keyof I["clientGenesis"]["clients"], keyof {
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            clientsConsensus?: ({
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                clientId?: string | undefined;
                consensusStates?: ({
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] & ({
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    height?: ({
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } & {
                        revisionNumber?: string | number | (Long & {
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
                        } & { [K_3 in Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"]["revisionNumber"], keyof Long>]: never; }) | undefined;
                        revisionHeight?: string | number | (Long & {
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
                        } & { [K_4 in Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"]["revisionHeight"], keyof Long>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"], keyof import("../../client/v1/client").Height>]: never; }) | undefined;
                    consensusState?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_6 in Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../../../../google/protobuf/any").Any>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number], keyof import("../../client/v1/client").ConsensusStateWithHeight>]: never; })[] & { [K_8 in Exclude<keyof I["clientGenesis"]["clientsConsensus"][number]["consensusStates"], keyof {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I["clientGenesis"]["clientsConsensus"][number], keyof import("../../client/v1/client").ClientConsensusStates>]: never; })[] & { [K_10 in Exclude<keyof I["clientGenesis"]["clientsConsensus"], keyof {
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            clientsMetadata?: ({
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] & ({
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                clientId?: string | undefined;
                clientMetadata?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_11 in Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"][number], keyof import("../../client/v1/genesis").GenesisMetadata>]: never; })[] & { [K_12 in Exclude<keyof I["clientGenesis"]["clientsMetadata"][number]["clientMetadata"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I["clientGenesis"]["clientsMetadata"][number], keyof import("../../client/v1/genesis").IdentifiedGenesisMetadata>]: never; })[] & { [K_14 in Exclude<keyof I["clientGenesis"]["clientsMetadata"], keyof {
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            params?: ({
                allowedClients?: string[] | undefined;
            } & {
                allowedClients?: (string[] & string[] & { [K_15 in Exclude<keyof I["clientGenesis"]["params"]["allowedClients"], keyof string[]>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["clientGenesis"]["params"], "allowedClients">]: never; }) | undefined;
            createLocalhost?: boolean | undefined;
            nextClientSequence?: string | number | (Long & {
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
            } & { [K_17 in Exclude<keyof I["clientGenesis"]["nextClientSequence"], keyof Long>]: never; }) | undefined;
        } & { [K_18 in Exclude<keyof I["clientGenesis"], keyof GenesisState1>]: never; }) | undefined;
        connectionGenesis?: ({
            connections?: {
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long | undefined;
            }[] | undefined;
            clientConnectionPaths?: {
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[] | undefined;
            nextConnectionSequence?: string | number | Long | undefined;
            params?: {
                maxExpectedTimePerBlock?: string | number | Long | undefined;
            } | undefined;
        } & {
            connections?: ({
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long | undefined;
            }[] & ({
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
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
                    features?: (string[] & string[] & { [K_19 in Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number]["features"], keyof string[]>]: never; }) | undefined;
                } & { [K_20 in Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"][number], keyof import("../../connection/v1/connection").Version>]: never; })[] & { [K_21 in Exclude<keyof I["connectionGenesis"]["connections"][number]["versions"], keyof {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[]>]: never; }) | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
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
                    } & { [K_22 in Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"]["prefix"], "keyPrefix">]: never; }) | undefined;
                } & { [K_23 in Exclude<keyof I["connectionGenesis"]["connections"][number]["counterparty"], keyof import("../../connection/v1/connection").Counterparty>]: never; }) | undefined;
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
                } & { [K_24 in Exclude<keyof I["connectionGenesis"]["connections"][number]["delayPeriod"], keyof Long>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I["connectionGenesis"]["connections"][number], keyof import("../../connection/v1/connection").IdentifiedConnection>]: never; })[] & { [K_26 in Exclude<keyof I["connectionGenesis"]["connections"], keyof {
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long | undefined;
            }[]>]: never; }) | undefined;
            clientConnectionPaths?: ({
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[] & ({
                clientId?: string | undefined;
                paths?: string[] | undefined;
            } & {
                clientId?: string | undefined;
                paths?: (string[] & string[] & { [K_27 in Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number]["paths"], keyof string[]>]: never; }) | undefined;
            } & { [K_28 in Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"][number], keyof import("../../connection/v1/connection").ConnectionPaths>]: never; })[] & { [K_29 in Exclude<keyof I["connectionGenesis"]["clientConnectionPaths"], keyof {
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[]>]: never; }) | undefined;
            nextConnectionSequence?: string | number | (Long & {
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
            } & { [K_30 in Exclude<keyof I["connectionGenesis"]["nextConnectionSequence"], keyof Long>]: never; }) | undefined;
            params?: ({
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
                } & { [K_31 in Exclude<keyof I["connectionGenesis"]["params"]["maxExpectedTimePerBlock"], keyof Long>]: never; }) | undefined;
            } & { [K_32 in Exclude<keyof I["connectionGenesis"]["params"], "maxExpectedTimePerBlock">]: never; }) | undefined;
        } & { [K_33 in Exclude<keyof I["connectionGenesis"], keyof GenesisState2>]: never; }) | undefined;
        channelGenesis?: ({
            channels?: {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            acknowledgements?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            commitments?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            receipts?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            sendSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            recvSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            ackSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            nextChannelSequence?: string | number | Long | undefined;
        } & {
            channels?: ({
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] & ({
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: ({
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } & {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } & { [K_34 in Exclude<keyof I["channelGenesis"]["channels"][number]["counterparty"], keyof import("../../channel/v1/channel").Counterparty>]: never; }) | undefined;
                connectionHops?: (string[] & string[] & { [K_35 in Exclude<keyof I["channelGenesis"]["channels"][number]["connectionHops"], keyof string[]>]: never; }) | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & { [K_36 in Exclude<keyof I["channelGenesis"]["channels"][number], keyof import("../../channel/v1/channel").IdentifiedChannel>]: never; })[] & { [K_37 in Exclude<keyof I["channelGenesis"]["channels"], keyof {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[]>]: never; }) | undefined;
            acknowledgements?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_38 in Exclude<keyof I["channelGenesis"]["acknowledgements"][number]["sequence"], keyof Long>]: never; }) | undefined;
                data?: Uint8Array | undefined;
            } & { [K_39 in Exclude<keyof I["channelGenesis"]["acknowledgements"][number], keyof import("../../channel/v1/channel").PacketState>]: never; })[] & { [K_40 in Exclude<keyof I["channelGenesis"]["acknowledgements"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
            commitments?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_41 in Exclude<keyof I["channelGenesis"]["commitments"][number]["sequence"], keyof Long>]: never; }) | undefined;
                data?: Uint8Array | undefined;
            } & { [K_42 in Exclude<keyof I["channelGenesis"]["commitments"][number], keyof import("../../channel/v1/channel").PacketState>]: never; })[] & { [K_43 in Exclude<keyof I["channelGenesis"]["commitments"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
            receipts?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_44 in Exclude<keyof I["channelGenesis"]["receipts"][number]["sequence"], keyof Long>]: never; }) | undefined;
                data?: Uint8Array | undefined;
            } & { [K_45 in Exclude<keyof I["channelGenesis"]["receipts"][number], keyof import("../../channel/v1/channel").PacketState>]: never; })[] & { [K_46 in Exclude<keyof I["channelGenesis"]["receipts"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
            sendSequences?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_47 in Exclude<keyof I["channelGenesis"]["sendSequences"][number]["sequence"], keyof Long>]: never; }) | undefined;
            } & { [K_48 in Exclude<keyof I["channelGenesis"]["sendSequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>]: never; })[] & { [K_49 in Exclude<keyof I["channelGenesis"]["sendSequences"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[]>]: never; }) | undefined;
            recvSequences?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_50 in Exclude<keyof I["channelGenesis"]["recvSequences"][number]["sequence"], keyof Long>]: never; }) | undefined;
            } & { [K_51 in Exclude<keyof I["channelGenesis"]["recvSequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>]: never; })[] & { [K_52 in Exclude<keyof I["channelGenesis"]["recvSequences"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[]>]: never; }) | undefined;
            ackSequences?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_53 in Exclude<keyof I["channelGenesis"]["ackSequences"][number]["sequence"], keyof Long>]: never; }) | undefined;
            } & { [K_54 in Exclude<keyof I["channelGenesis"]["ackSequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>]: never; })[] & { [K_55 in Exclude<keyof I["channelGenesis"]["ackSequences"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[]>]: never; }) | undefined;
            nextChannelSequence?: string | number | (Long & {
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
            } & { [K_56 in Exclude<keyof I["channelGenesis"]["nextChannelSequence"], keyof Long>]: never; }) | undefined;
        } & { [K_57 in Exclude<keyof I["channelGenesis"], keyof GenesisState3>]: never; }) | undefined;
    } & { [K_58 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        clientGenesis?: {
            clients?: {
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            clientsConsensus?: {
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
            clientsMetadata?: {
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] | undefined;
            params?: {
                allowedClients?: string[] | undefined;
            } | undefined;
            createLocalhost?: boolean | undefined;
            nextClientSequence?: string | number | Long | undefined;
        } | undefined;
        connectionGenesis?: {
            connections?: {
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long | undefined;
            }[] | undefined;
            clientConnectionPaths?: {
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[] | undefined;
            nextConnectionSequence?: string | number | Long | undefined;
            params?: {
                maxExpectedTimePerBlock?: string | number | Long | undefined;
            } | undefined;
        } | undefined;
        channelGenesis?: {
            channels?: {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            acknowledgements?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            commitments?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            receipts?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            sendSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            recvSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            ackSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            nextChannelSequence?: string | number | Long | undefined;
        } | undefined;
    } & {
        clientGenesis?: ({
            clients?: {
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            clientsConsensus?: {
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
            clientsMetadata?: {
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] | undefined;
            params?: {
                allowedClients?: string[] | undefined;
            } | undefined;
            createLocalhost?: boolean | undefined;
            nextClientSequence?: string | number | Long | undefined;
        } & {
            clients?: ({
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] & ({
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                clientId?: string | undefined;
                clientState?: ({
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_59 in Exclude<keyof I_1["clientGenesis"]["clients"][number]["clientState"], keyof import("../../../../google/protobuf/any").Any>]: never; }) | undefined;
            } & { [K_60 in Exclude<keyof I_1["clientGenesis"]["clients"][number], keyof import("../../client/v1/client").IdentifiedClientState>]: never; })[] & { [K_61 in Exclude<keyof I_1["clientGenesis"]["clients"], keyof {
                clientId?: string | undefined;
                clientState?: {
                    typeUrl?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            clientsConsensus?: ({
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                clientId?: string | undefined;
                consensusStates?: ({
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] & ({
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    height?: ({
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } & {
                        revisionNumber?: string | number | (Long & {
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
                        } & { [K_62 in Exclude<keyof I_1["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"]["revisionNumber"], keyof Long>]: never; }) | undefined;
                        revisionHeight?: string | number | (Long & {
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
                        } & { [K_63 in Exclude<keyof I_1["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"]["revisionHeight"], keyof Long>]: never; }) | undefined;
                    } & { [K_64 in Exclude<keyof I_1["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["height"], keyof import("../../client/v1/client").Height>]: never; }) | undefined;
                    consensusState?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & { [K_65 in Exclude<keyof I_1["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number]["consensusState"], keyof import("../../../../google/protobuf/any").Any>]: never; }) | undefined;
                } & { [K_66 in Exclude<keyof I_1["clientGenesis"]["clientsConsensus"][number]["consensusStates"][number], keyof import("../../client/v1/client").ConsensusStateWithHeight>]: never; })[] & { [K_67 in Exclude<keyof I_1["clientGenesis"]["clientsConsensus"][number]["consensusStates"], keyof {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_68 in Exclude<keyof I_1["clientGenesis"]["clientsConsensus"][number], keyof import("../../client/v1/client").ClientConsensusStates>]: never; })[] & { [K_69 in Exclude<keyof I_1["clientGenesis"]["clientsConsensus"], keyof {
                clientId?: string | undefined;
                consensusStates?: {
                    height?: {
                        revisionNumber?: string | number | Long | undefined;
                        revisionHeight?: string | number | Long | undefined;
                    } | undefined;
                    consensusState?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            clientsMetadata?: ({
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] & ({
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                clientId?: string | undefined;
                clientMetadata?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & { [K_70 in Exclude<keyof I_1["clientGenesis"]["clientsMetadata"][number]["clientMetadata"][number], keyof import("../../client/v1/genesis").GenesisMetadata>]: never; })[] & { [K_71 in Exclude<keyof I_1["clientGenesis"]["clientsMetadata"][number]["clientMetadata"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_72 in Exclude<keyof I_1["clientGenesis"]["clientsMetadata"][number], keyof import("../../client/v1/genesis").IdentifiedGenesisMetadata>]: never; })[] & { [K_73 in Exclude<keyof I_1["clientGenesis"]["clientsMetadata"], keyof {
                clientId?: string | undefined;
                clientMetadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            params?: ({
                allowedClients?: string[] | undefined;
            } & {
                allowedClients?: (string[] & string[] & { [K_74 in Exclude<keyof I_1["clientGenesis"]["params"]["allowedClients"], keyof string[]>]: never; }) | undefined;
            } & { [K_75 in Exclude<keyof I_1["clientGenesis"]["params"], "allowedClients">]: never; }) | undefined;
            createLocalhost?: boolean | undefined;
            nextClientSequence?: string | number | (Long & {
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
            } & { [K_76 in Exclude<keyof I_1["clientGenesis"]["nextClientSequence"], keyof Long>]: never; }) | undefined;
        } & { [K_77 in Exclude<keyof I_1["clientGenesis"], keyof GenesisState1>]: never; }) | undefined;
        connectionGenesis?: ({
            connections?: {
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long | undefined;
            }[] | undefined;
            clientConnectionPaths?: {
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[] | undefined;
            nextConnectionSequence?: string | number | Long | undefined;
            params?: {
                maxExpectedTimePerBlock?: string | number | Long | undefined;
            } | undefined;
        } & {
            connections?: ({
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long | undefined;
            }[] & ({
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
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
                    features?: (string[] & string[] & { [K_78 in Exclude<keyof I_1["connectionGenesis"]["connections"][number]["versions"][number]["features"], keyof string[]>]: never; }) | undefined;
                } & { [K_79 in Exclude<keyof I_1["connectionGenesis"]["connections"][number]["versions"][number], keyof import("../../connection/v1/connection").Version>]: never; })[] & { [K_80 in Exclude<keyof I_1["connectionGenesis"]["connections"][number]["versions"], keyof {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[]>]: never; }) | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
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
                    } & { [K_81 in Exclude<keyof I_1["connectionGenesis"]["connections"][number]["counterparty"]["prefix"], "keyPrefix">]: never; }) | undefined;
                } & { [K_82 in Exclude<keyof I_1["connectionGenesis"]["connections"][number]["counterparty"], keyof import("../../connection/v1/connection").Counterparty>]: never; }) | undefined;
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
                } & { [K_83 in Exclude<keyof I_1["connectionGenesis"]["connections"][number]["delayPeriod"], keyof Long>]: never; }) | undefined;
            } & { [K_84 in Exclude<keyof I_1["connectionGenesis"]["connections"][number], keyof import("../../connection/v1/connection").IdentifiedConnection>]: never; })[] & { [K_85 in Exclude<keyof I_1["connectionGenesis"]["connections"], keyof {
                id?: string | undefined;
                clientId?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    clientId?: string | undefined;
                    connectionId?: string | undefined;
                    prefix?: {
                        keyPrefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delayPeriod?: string | number | Long | undefined;
            }[]>]: never; }) | undefined;
            clientConnectionPaths?: ({
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[] & ({
                clientId?: string | undefined;
                paths?: string[] | undefined;
            } & {
                clientId?: string | undefined;
                paths?: (string[] & string[] & { [K_86 in Exclude<keyof I_1["connectionGenesis"]["clientConnectionPaths"][number]["paths"], keyof string[]>]: never; }) | undefined;
            } & { [K_87 in Exclude<keyof I_1["connectionGenesis"]["clientConnectionPaths"][number], keyof import("../../connection/v1/connection").ConnectionPaths>]: never; })[] & { [K_88 in Exclude<keyof I_1["connectionGenesis"]["clientConnectionPaths"], keyof {
                clientId?: string | undefined;
                paths?: string[] | undefined;
            }[]>]: never; }) | undefined;
            nextConnectionSequence?: string | number | (Long & {
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
            } & { [K_89 in Exclude<keyof I_1["connectionGenesis"]["nextConnectionSequence"], keyof Long>]: never; }) | undefined;
            params?: ({
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
                } & { [K_90 in Exclude<keyof I_1["connectionGenesis"]["params"]["maxExpectedTimePerBlock"], keyof Long>]: never; }) | undefined;
            } & { [K_91 in Exclude<keyof I_1["connectionGenesis"]["params"], "maxExpectedTimePerBlock">]: never; }) | undefined;
        } & { [K_92 in Exclude<keyof I_1["connectionGenesis"], keyof GenesisState2>]: never; }) | undefined;
        channelGenesis?: ({
            channels?: {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] | undefined;
            acknowledgements?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            commitments?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            receipts?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] | undefined;
            sendSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            recvSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            ackSequences?: {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] | undefined;
            nextChannelSequence?: string | number | Long | undefined;
        } & {
            channels?: ({
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[] & ({
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: ({
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } & {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } & { [K_93 in Exclude<keyof I_1["channelGenesis"]["channels"][number]["counterparty"], keyof import("../../channel/v1/channel").Counterparty>]: never; }) | undefined;
                connectionHops?: (string[] & string[] & { [K_94 in Exclude<keyof I_1["channelGenesis"]["channels"][number]["connectionHops"], keyof string[]>]: never; }) | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            } & { [K_95 in Exclude<keyof I_1["channelGenesis"]["channels"][number], keyof import("../../channel/v1/channel").IdentifiedChannel>]: never; })[] & { [K_96 in Exclude<keyof I_1["channelGenesis"]["channels"], keyof {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    portId?: string | undefined;
                    channelId?: string | undefined;
                } | undefined;
                connectionHops?: string[] | undefined;
                version?: string | undefined;
                portId?: string | undefined;
                channelId?: string | undefined;
            }[]>]: never; }) | undefined;
            acknowledgements?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_97 in Exclude<keyof I_1["channelGenesis"]["acknowledgements"][number]["sequence"], keyof Long>]: never; }) | undefined;
                data?: Uint8Array | undefined;
            } & { [K_98 in Exclude<keyof I_1["channelGenesis"]["acknowledgements"][number], keyof import("../../channel/v1/channel").PacketState>]: never; })[] & { [K_99 in Exclude<keyof I_1["channelGenesis"]["acknowledgements"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
            commitments?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_100 in Exclude<keyof I_1["channelGenesis"]["commitments"][number]["sequence"], keyof Long>]: never; }) | undefined;
                data?: Uint8Array | undefined;
            } & { [K_101 in Exclude<keyof I_1["channelGenesis"]["commitments"][number], keyof import("../../channel/v1/channel").PacketState>]: never; })[] & { [K_102 in Exclude<keyof I_1["channelGenesis"]["commitments"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
            receipts?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_103 in Exclude<keyof I_1["channelGenesis"]["receipts"][number]["sequence"], keyof Long>]: never; }) | undefined;
                data?: Uint8Array | undefined;
            } & { [K_104 in Exclude<keyof I_1["channelGenesis"]["receipts"][number], keyof import("../../channel/v1/channel").PacketState>]: never; })[] & { [K_105 in Exclude<keyof I_1["channelGenesis"]["receipts"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
                data?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
            sendSequences?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_106 in Exclude<keyof I_1["channelGenesis"]["sendSequences"][number]["sequence"], keyof Long>]: never; }) | undefined;
            } & { [K_107 in Exclude<keyof I_1["channelGenesis"]["sendSequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>]: never; })[] & { [K_108 in Exclude<keyof I_1["channelGenesis"]["sendSequences"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[]>]: never; }) | undefined;
            recvSequences?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_109 in Exclude<keyof I_1["channelGenesis"]["recvSequences"][number]["sequence"], keyof Long>]: never; }) | undefined;
            } & { [K_110 in Exclude<keyof I_1["channelGenesis"]["recvSequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>]: never; })[] & { [K_111 in Exclude<keyof I_1["channelGenesis"]["recvSequences"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[]>]: never; }) | undefined;
            ackSequences?: ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[] & ({
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            } & {
                portId?: string | undefined;
                channelId?: string | undefined;
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
                } & { [K_112 in Exclude<keyof I_1["channelGenesis"]["ackSequences"][number]["sequence"], keyof Long>]: never; }) | undefined;
            } & { [K_113 in Exclude<keyof I_1["channelGenesis"]["ackSequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>]: never; })[] & { [K_114 in Exclude<keyof I_1["channelGenesis"]["ackSequences"], keyof {
                portId?: string | undefined;
                channelId?: string | undefined;
                sequence?: string | number | Long | undefined;
            }[]>]: never; }) | undefined;
            nextChannelSequence?: string | number | (Long & {
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
            } & { [K_115 in Exclude<keyof I_1["channelGenesis"]["nextChannelSequence"], keyof Long>]: never; }) | undefined;
        } & { [K_116 in Exclude<keyof I_1["channelGenesis"], keyof GenesisState3>]: never; }) | undefined;
    } & { [K_117 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
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
