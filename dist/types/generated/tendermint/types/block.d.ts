import Long from "long";
import _m0 from "protobufjs/minimal";
import { EvidenceList } from "./evidence";
import { Commit, Data, Header } from "./types";
export declare const protobufPackage = "tendermint.types";
export interface Block {
    header?: Header;
    data?: Data;
    evidence?: EvidenceList;
    lastCommit?: Commit;
}
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
    create<I extends {
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                } & { [K in Exclude<keyof I["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
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
                } & { [K_1 in Exclude<keyof I["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["header"]["version"], keyof import("../version/types").Consensus>]: never; }) | undefined;
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
            } & { [K_3 in Exclude<keyof I["header"]["height"], keyof Long>]: never; }) | undefined;
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
                } & { [K_4 in Exclude<keyof I["header"]["lastBlockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["header"]["lastBlockId"], keyof import("./types").BlockID>]: never; }) | undefined;
            lastCommitHash?: Uint8Array | undefined;
            dataHash?: Uint8Array | undefined;
            validatorsHash?: Uint8Array | undefined;
            nextValidatorsHash?: Uint8Array | undefined;
            consensusHash?: Uint8Array | undefined;
            appHash?: Uint8Array | undefined;
            lastResultsHash?: Uint8Array | undefined;
            evidenceHash?: Uint8Array | undefined;
            proposerAddress?: Uint8Array | undefined;
        } & { [K_6 in Exclude<keyof I["header"], keyof Header>]: never; }) | undefined;
        data?: ({
            txs?: Uint8Array[] | undefined;
        } & {
            txs?: (Uint8Array[] & Uint8Array[] & { [K_7 in Exclude<keyof I["data"]["txs"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["data"], "txs">]: never; }) | undefined;
        evidence?: ({
            evidence?: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        } & { [K_9 in Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["height"], keyof Long>]: never; }) | undefined;
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
                            } & { [K_10 in Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                        } & { [K_11 in Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof import("./types").BlockID>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & { [K_12 in Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof import("./types").Vote>]: never; }) | undefined;
                    voteB?: ({
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        } & { [K_13 in Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["height"], keyof Long>]: never; }) | undefined;
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
                            } & { [K_14 in Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                        } & { [K_15 in Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof import("./types").BlockID>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & { [K_16 in Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof import("./types").Vote>]: never; }) | undefined;
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
                    } & { [K_17 in Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
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
                    } & { [K_18 in Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"]["validatorPower"], keyof Long>]: never; }) | undefined;
                    timestamp?: Date | undefined;
                } & { [K_19 in Exclude<keyof I["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof import("./evidence").DuplicateVoteEvidence>]: never; }) | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                                    } & { [K_20 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
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
                                    } & { [K_21 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
                                } & { [K_22 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../version/types").Consensus>]: never; }) | undefined;
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
                                } & { [K_23 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long>]: never; }) | undefined;
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
                                    } & { [K_24 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                                } & { [K_25 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof import("./types").BlockID>]: never; }) | undefined;
                                lastCommitHash?: Uint8Array | undefined;
                                dataHash?: Uint8Array | undefined;
                                validatorsHash?: Uint8Array | undefined;
                                nextValidatorsHash?: Uint8Array | undefined;
                                consensusHash?: Uint8Array | undefined;
                                appHash?: Uint8Array | undefined;
                                lastResultsHash?: Uint8Array | undefined;
                                evidenceHash?: Uint8Array | undefined;
                                proposerAddress?: Uint8Array | undefined;
                            } & { [K_26 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof Header>]: never; }) | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                                } & { [K_27 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long>]: never; }) | undefined;
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
                                    } & { [K_28 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                                } & { [K_29 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof import("./types").BlockID>]: never; }) | undefined;
                                signatures?: ({
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] & ({
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                } & {
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                } & { [K_30 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("./types").CommitSig>]: never; })[] & { [K_31 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                }[]>]: never; }) | undefined;
                            } & { [K_32 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof Commit>]: never; }) | undefined;
                        } & { [K_33 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("./types").SignedHeader>]: never; }) | undefined;
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
                                } & { [K_34 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
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
                                } & { [K_35 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
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
                                } & { [K_36 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                            } & { [K_37 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof import("./validator").Validator>]: never; })[] & { [K_38 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
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
                                } & { [K_39 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
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
                                } & { [K_40 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long>]: never; }) | undefined;
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
                                } & { [K_41 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long>]: never; }) | undefined;
                            } & { [K_42 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof import("./validator").Validator>]: never; }) | undefined;
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
                            } & { [K_43 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                        } & { [K_44 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("./validator").ValidatorSet>]: never; }) | undefined;
                    } & { [K_45 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof import("./types").LightBlock>]: never; }) | undefined;
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
                    } & { [K_46 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["commonHeight"], keyof Long>]: never; }) | undefined;
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
                        } & { [K_47 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
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
                        } & { [K_48 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
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
                        } & { [K_49 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                    } & { [K_50 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof import("./validator").Validator>]: never; })[] & { [K_51 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
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
                    } & { [K_52 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                    timestamp?: Date | undefined;
                } & { [K_53 in Exclude<keyof I["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof import("./evidence").LightClientAttackEvidence>]: never; }) | undefined;
            } & { [K_54 in Exclude<keyof I["evidence"]["evidence"][number], keyof import("./evidence").Evidence>]: never; })[] & { [K_55 in Exclude<keyof I["evidence"]["evidence"], keyof {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
        } & { [K_56 in Exclude<keyof I["evidence"], "evidence">]: never; }) | undefined;
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
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
            } & { [K_57 in Exclude<keyof I["lastCommit"]["height"], keyof Long>]: never; }) | undefined;
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
                } & { [K_58 in Exclude<keyof I["lastCommit"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
            } & { [K_59 in Exclude<keyof I["lastCommit"]["blockId"], keyof import("./types").BlockID>]: never; }) | undefined;
            signatures?: ({
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            }[] & ({
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } & {
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } & { [K_60 in Exclude<keyof I["lastCommit"]["signatures"][number], keyof import("./types").CommitSig>]: never; })[] & { [K_61 in Exclude<keyof I["lastCommit"]["signatures"], keyof {
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_62 in Exclude<keyof I["lastCommit"], keyof Commit>]: never; }) | undefined;
    } & { [K_63 in Exclude<keyof I, keyof Block>]: never; }>(base?: I | undefined): Block;
    fromPartial<I_1 extends {
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                } & { [K_64 in Exclude<keyof I_1["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
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
                } & { [K_65 in Exclude<keyof I_1["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
            } & { [K_66 in Exclude<keyof I_1["header"]["version"], keyof import("../version/types").Consensus>]: never; }) | undefined;
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
            } & { [K_67 in Exclude<keyof I_1["header"]["height"], keyof Long>]: never; }) | undefined;
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
                } & { [K_68 in Exclude<keyof I_1["header"]["lastBlockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
            } & { [K_69 in Exclude<keyof I_1["header"]["lastBlockId"], keyof import("./types").BlockID>]: never; }) | undefined;
            lastCommitHash?: Uint8Array | undefined;
            dataHash?: Uint8Array | undefined;
            validatorsHash?: Uint8Array | undefined;
            nextValidatorsHash?: Uint8Array | undefined;
            consensusHash?: Uint8Array | undefined;
            appHash?: Uint8Array | undefined;
            lastResultsHash?: Uint8Array | undefined;
            evidenceHash?: Uint8Array | undefined;
            proposerAddress?: Uint8Array | undefined;
        } & { [K_70 in Exclude<keyof I_1["header"], keyof Header>]: never; }) | undefined;
        data?: ({
            txs?: Uint8Array[] | undefined;
        } & {
            txs?: (Uint8Array[] & Uint8Array[] & { [K_71 in Exclude<keyof I_1["data"]["txs"], keyof Uint8Array[]>]: never; }) | undefined;
        } & { [K_72 in Exclude<keyof I_1["data"], "txs">]: never; }) | undefined;
        evidence?: ({
            evidence?: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        } & { [K_73 in Exclude<keyof I_1["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["height"], keyof Long>]: never; }) | undefined;
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
                            } & { [K_74 in Exclude<keyof I_1["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                        } & { [K_75 in Exclude<keyof I_1["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"]["blockId"], keyof import("./types").BlockID>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & { [K_76 in Exclude<keyof I_1["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteA"], keyof import("./types").Vote>]: never; }) | undefined;
                    voteB?: ({
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                        } & { [K_77 in Exclude<keyof I_1["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["height"], keyof Long>]: never; }) | undefined;
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
                            } & { [K_78 in Exclude<keyof I_1["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                        } & { [K_79 in Exclude<keyof I_1["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"]["blockId"], keyof import("./types").BlockID>]: never; }) | undefined;
                        timestamp?: Date | undefined;
                        validatorAddress?: Uint8Array | undefined;
                        validatorIndex?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & { [K_80 in Exclude<keyof I_1["evidence"]["evidence"][number]["duplicateVoteEvidence"]["voteB"], keyof import("./types").Vote>]: never; }) | undefined;
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
                    } & { [K_81 in Exclude<keyof I_1["evidence"]["evidence"][number]["duplicateVoteEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
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
                    } & { [K_82 in Exclude<keyof I_1["evidence"]["evidence"][number]["duplicateVoteEvidence"]["validatorPower"], keyof Long>]: never; }) | undefined;
                    timestamp?: Date | undefined;
                } & { [K_83 in Exclude<keyof I_1["evidence"]["evidence"][number]["duplicateVoteEvidence"], keyof import("./evidence").DuplicateVoteEvidence>]: never; }) | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                                    } & { [K_84 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
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
                                    } & { [K_85 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
                                } & { [K_86 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["version"], keyof import("../version/types").Consensus>]: never; }) | undefined;
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
                                } & { [K_87 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["height"], keyof Long>]: never; }) | undefined;
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
                                    } & { [K_88 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                                } & { [K_89 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"]["lastBlockId"], keyof import("./types").BlockID>]: never; }) | undefined;
                                lastCommitHash?: Uint8Array | undefined;
                                dataHash?: Uint8Array | undefined;
                                validatorsHash?: Uint8Array | undefined;
                                nextValidatorsHash?: Uint8Array | undefined;
                                consensusHash?: Uint8Array | undefined;
                                appHash?: Uint8Array | undefined;
                                lastResultsHash?: Uint8Array | undefined;
                                evidenceHash?: Uint8Array | undefined;
                                proposerAddress?: Uint8Array | undefined;
                            } & { [K_90 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["header"], keyof Header>]: never; }) | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
                                } & { [K_91 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["height"], keyof Long>]: never; }) | undefined;
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
                                    } & { [K_92 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
                                } & { [K_93 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["blockId"], keyof import("./types").BlockID>]: never; }) | undefined;
                                signatures?: ({
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] & ({
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                } & {
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                } & { [K_94 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"][number], keyof import("./types").CommitSig>]: never; })[] & { [K_95 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"]["signatures"], keyof {
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
                                    validatorAddress?: Uint8Array | undefined;
                                    timestamp?: Date | undefined;
                                    signature?: Uint8Array | undefined;
                                }[]>]: never; }) | undefined;
                            } & { [K_96 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"]["commit"], keyof Commit>]: never; }) | undefined;
                        } & { [K_97 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["signedHeader"], keyof import("./types").SignedHeader>]: never; }) | undefined;
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
                                } & { [K_98 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
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
                                } & { [K_99 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
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
                                } & { [K_100 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                            } & { [K_101 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"][number], keyof import("./validator").Validator>]: never; })[] & { [K_102 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["validators"], keyof {
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
                                } & { [K_103 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["pubKey"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
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
                                } & { [K_104 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["votingPower"], keyof Long>]: never; }) | undefined;
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
                                } & { [K_105 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"]["proposerPriority"], keyof Long>]: never; }) | undefined;
                            } & { [K_106 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["proposer"], keyof import("./validator").Validator>]: never; }) | undefined;
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
                            } & { [K_107 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                        } & { [K_108 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"]["validatorSet"], keyof import("./validator").ValidatorSet>]: never; }) | undefined;
                    } & { [K_109 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["conflictingBlock"], keyof import("./types").LightBlock>]: never; }) | undefined;
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
                    } & { [K_110 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["commonHeight"], keyof Long>]: never; }) | undefined;
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
                        } & { [K_111 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["pubKey"], keyof import("../crypto/keys").PublicKey>]: never; }) | undefined;
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
                        } & { [K_112 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["votingPower"], keyof Long>]: never; }) | undefined;
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
                        } & { [K_113 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number]["proposerPriority"], keyof Long>]: never; }) | undefined;
                    } & { [K_114 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"][number], keyof import("./validator").Validator>]: never; })[] & { [K_115 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["byzantineValidators"], keyof {
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
                    } & { [K_116 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"]["totalVotingPower"], keyof Long>]: never; }) | undefined;
                    timestamp?: Date | undefined;
                } & { [K_117 in Exclude<keyof I_1["evidence"]["evidence"][number]["lightClientAttackEvidence"], keyof import("./evidence").LightClientAttackEvidence>]: never; }) | undefined;
            } & { [K_118 in Exclude<keyof I_1["evidence"]["evidence"][number], keyof import("./evidence").Evidence>]: never; })[] & { [K_119 in Exclude<keyof I_1["evidence"]["evidence"], keyof {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: import("./types").SignedMsgType | undefined;
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
                        type?: import("./types").SignedMsgType | undefined;
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
                                    blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
        } & { [K_120 in Exclude<keyof I_1["evidence"], "evidence">]: never; }) | undefined;
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
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
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
            } & { [K_121 in Exclude<keyof I_1["lastCommit"]["height"], keyof Long>]: never; }) | undefined;
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
                } & { [K_122 in Exclude<keyof I_1["lastCommit"]["blockId"]["partSetHeader"], keyof import("./types").PartSetHeader>]: never; }) | undefined;
            } & { [K_123 in Exclude<keyof I_1["lastCommit"]["blockId"], keyof import("./types").BlockID>]: never; }) | undefined;
            signatures?: ({
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            }[] & ({
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } & {
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            } & { [K_124 in Exclude<keyof I_1["lastCommit"]["signatures"][number], keyof import("./types").CommitSig>]: never; })[] & { [K_125 in Exclude<keyof I_1["lastCommit"]["signatures"], keyof {
                blockIdFlag?: import("./types").BlockIDFlag | undefined;
                validatorAddress?: Uint8Array | undefined;
                timestamp?: Date | undefined;
                signature?: Uint8Array | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_126 in Exclude<keyof I_1["lastCommit"], keyof Commit>]: never; }) | undefined;
    } & { [K_127 in Exclude<keyof I_1, keyof Block>]: never; }>(object: I_1): Block;
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
