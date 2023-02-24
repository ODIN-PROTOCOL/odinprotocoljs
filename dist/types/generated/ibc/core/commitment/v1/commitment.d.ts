import Long from "long";
import _m0 from "protobufjs/minimal";
import { CommitmentProof } from "../../../../confio/proofs";
export declare const protobufPackage = "ibc.core.commitment.v1";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
    hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
    keyPrefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
    keyPath: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
    proofs: CommitmentProof[];
}
export declare const MerkleRoot: {
    encode(message: MerkleRoot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerkleRoot;
    fromJSON(object: any): MerkleRoot;
    toJSON(message: MerkleRoot): unknown;
    create<I extends {
        hash?: Uint8Array | undefined;
    } & {
        hash?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "hash">]: never; }>(base?: I | undefined): MerkleRoot;
    fromPartial<I_1 extends {
        hash?: Uint8Array | undefined;
    } & {
        hash?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, "hash">]: never; }>(object: I_1): MerkleRoot;
};
export declare const MerklePrefix: {
    encode(message: MerklePrefix, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerklePrefix;
    fromJSON(object: any): MerklePrefix;
    toJSON(message: MerklePrefix): unknown;
    create<I extends {
        keyPrefix?: Uint8Array | undefined;
    } & {
        keyPrefix?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "keyPrefix">]: never; }>(base?: I | undefined): MerklePrefix;
    fromPartial<I_1 extends {
        keyPrefix?: Uint8Array | undefined;
    } & {
        keyPrefix?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, "keyPrefix">]: never; }>(object: I_1): MerklePrefix;
};
export declare const MerklePath: {
    encode(message: MerklePath, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerklePath;
    fromJSON(object: any): MerklePath;
    toJSON(message: MerklePath): unknown;
    create<I extends {
        keyPath?: string[] | undefined;
    } & {
        keyPath?: (string[] & string[] & { [K in Exclude<keyof I["keyPath"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "keyPath">]: never; }>(base?: I | undefined): MerklePath;
    fromPartial<I_1 extends {
        keyPath?: string[] | undefined;
    } & {
        keyPath?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["keyPath"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "keyPath">]: never; }>(object: I_1): MerklePath;
};
export declare const MerkleProof: {
    encode(message: MerkleProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MerkleProof;
    fromJSON(object: any): MerkleProof;
    toJSON(message: MerkleProof): unknown;
    create<I extends {
        proofs?: {
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        proofs?: ({
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            exist?: ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } & { [K in Exclude<keyof I["proofs"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                path?: ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] & ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & { [K_1 in Exclude<keyof I["proofs"][number]["exist"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_2 in Exclude<keyof I["proofs"][number]["exist"]["path"], keyof {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["proofs"][number]["exist"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
            nonexist?: ({
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                key?: Uint8Array | undefined;
                left?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & { [K_4 in Exclude<keyof I["proofs"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                    path?: ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] & ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & { [K_5 in Exclude<keyof I["proofs"][number]["nonexist"]["left"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_6 in Exclude<keyof I["proofs"][number]["nonexist"]["left"]["path"], keyof {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["proofs"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
                right?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & { [K_8 in Exclude<keyof I["proofs"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                    path?: ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] & ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & { [K_9 in Exclude<keyof I["proofs"][number]["nonexist"]["right"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_10 in Exclude<keyof I["proofs"][number]["nonexist"]["right"]["path"], keyof {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I["proofs"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["proofs"][number]["nonexist"], keyof import("../../../../confio/proofs").NonExistenceProof>]: never; }) | undefined;
            batch?: ({
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                entries?: ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    exist?: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: ({
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & { [K_13 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                        path?: ({
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] & ({
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        } & { [K_14 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_15 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["path"], keyof {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_16 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
                    nonexist?: ({
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        left?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & { [K_17 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                            path?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] & ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & { [K_18 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_19 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_20 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
                        right?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & { [K_21 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                            path?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] & ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & { [K_22 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_23 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_24 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
                    } & { [K_25 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"], keyof import("../../../../confio/proofs").NonExistenceProof>]: never; }) | undefined;
                } & { [K_26 in Exclude<keyof I["proofs"][number]["batch"]["entries"][number], keyof import("../../../../confio/proofs").BatchEntry>]: never; })[] & { [K_27 in Exclude<keyof I["proofs"][number]["batch"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_28 in Exclude<keyof I["proofs"][number]["batch"], "entries">]: never; }) | undefined;
            compressed?: ({
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                entries?: ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    exist?: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: ({
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & { [K_29 in Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                        path?: (number[] & number[] & { [K_30 in Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"]["path"], keyof number[]>]: never; }) | undefined;
                    } & { [K_31 in Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"], keyof import("../../../../confio/proofs").CompressedExistenceProof>]: never; }) | undefined;
                    nonexist?: ({
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        left?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & { [K_32 in Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                            path?: (number[] & number[] & { [K_33 in Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>]: never; }) | undefined;
                        } & { [K_34 in Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").CompressedExistenceProof>]: never; }) | undefined;
                        right?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & { [K_35 in Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                            path?: (number[] & number[] & { [K_36 in Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>]: never; }) | undefined;
                        } & { [K_37 in Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").CompressedExistenceProof>]: never; }) | undefined;
                    } & { [K_38 in Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"], keyof import("../../../../confio/proofs").CompressedNonExistenceProof>]: never; }) | undefined;
                } & { [K_39 in Exclude<keyof I["proofs"][number]["compressed"]["entries"][number], keyof import("../../../../confio/proofs").CompressedBatchEntry>]: never; })[] & { [K_40 in Exclude<keyof I["proofs"][number]["compressed"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                lookupInners?: ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] & ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & { [K_41 in Exclude<keyof I["proofs"][number]["compressed"]["lookupInners"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_42 in Exclude<keyof I["proofs"][number]["compressed"]["lookupInners"], keyof {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_43 in Exclude<keyof I["proofs"][number]["compressed"], keyof import("../../../../confio/proofs").CompressedBatchProof>]: never; }) | undefined;
        } & { [K_44 in Exclude<keyof I["proofs"][number], keyof CommitmentProof>]: never; })[] & { [K_45 in Exclude<keyof I["proofs"], keyof {
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_46 in Exclude<keyof I, "proofs">]: never; }>(base?: I | undefined): MerkleProof;
    fromPartial<I_1 extends {
        proofs?: {
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        proofs?: ({
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            exist?: ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } & { [K_47 in Exclude<keyof I_1["proofs"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                path?: ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] & ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & { [K_48 in Exclude<keyof I_1["proofs"][number]["exist"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_49 in Exclude<keyof I_1["proofs"][number]["exist"]["path"], keyof {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_50 in Exclude<keyof I_1["proofs"][number]["exist"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
            nonexist?: ({
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                key?: Uint8Array | undefined;
                left?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & { [K_51 in Exclude<keyof I_1["proofs"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                    path?: ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] & ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & { [K_52 in Exclude<keyof I_1["proofs"][number]["nonexist"]["left"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_53 in Exclude<keyof I_1["proofs"][number]["nonexist"]["left"]["path"], keyof {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_54 in Exclude<keyof I_1["proofs"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
                right?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } & { [K_55 in Exclude<keyof I_1["proofs"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                    path?: ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] & ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & { [K_56 in Exclude<keyof I_1["proofs"][number]["nonexist"]["right"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_57 in Exclude<keyof I_1["proofs"][number]["nonexist"]["right"]["path"], keyof {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_58 in Exclude<keyof I_1["proofs"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
            } & { [K_59 in Exclude<keyof I_1["proofs"][number]["nonexist"], keyof import("../../../../confio/proofs").NonExistenceProof>]: never; }) | undefined;
            batch?: ({
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                entries?: ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    exist?: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: ({
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & { [K_60 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                        path?: ({
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] & ({
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        } & { [K_61 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["exist"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_62 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["exist"]["path"], keyof {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_63 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["exist"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
                    nonexist?: ({
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        left?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & { [K_64 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                            path?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] & ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & { [K_65 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_66 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_67 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
                        right?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & { [K_68 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                            path?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] & ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & { [K_69 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_70 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_71 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").ExistenceProof>]: never; }) | undefined;
                    } & { [K_72 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number]["nonexist"], keyof import("../../../../confio/proofs").NonExistenceProof>]: never; }) | undefined;
                } & { [K_73 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"][number], keyof import("../../../../confio/proofs").BatchEntry>]: never; })[] & { [K_74 in Exclude<keyof I_1["proofs"][number]["batch"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_75 in Exclude<keyof I_1["proofs"][number]["batch"], "entries">]: never; }) | undefined;
            compressed?: ({
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                entries?: ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    exist?: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: ({
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } & { [K_76 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                        path?: (number[] & number[] & { [K_77 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"][number]["exist"]["path"], keyof number[]>]: never; }) | undefined;
                    } & { [K_78 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"][number]["exist"], keyof import("../../../../confio/proofs").CompressedExistenceProof>]: never; }) | undefined;
                    nonexist?: ({
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        left?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & { [K_79 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                            path?: (number[] & number[] & { [K_80 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>]: never; }) | undefined;
                        } & { [K_81 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").CompressedExistenceProof>]: never; }) | undefined;
                        right?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } & { [K_82 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>]: never; }) | undefined;
                            path?: (number[] & number[] & { [K_83 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>]: never; }) | undefined;
                        } & { [K_84 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").CompressedExistenceProof>]: never; }) | undefined;
                    } & { [K_85 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"][number]["nonexist"], keyof import("../../../../confio/proofs").CompressedNonExistenceProof>]: never; }) | undefined;
                } & { [K_86 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"][number], keyof import("../../../../confio/proofs").CompressedBatchEntry>]: never; })[] & { [K_87 in Exclude<keyof I_1["proofs"][number]["compressed"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                lookupInners?: ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] & ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & { [K_88 in Exclude<keyof I_1["proofs"][number]["compressed"]["lookupInners"][number], keyof import("../../../../confio/proofs").InnerOp>]: never; })[] & { [K_89 in Exclude<keyof I_1["proofs"][number]["compressed"]["lookupInners"], keyof {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_90 in Exclude<keyof I_1["proofs"][number]["compressed"], keyof import("../../../../confio/proofs").CompressedBatchProof>]: never; }) | undefined;
        } & { [K_91 in Exclude<keyof I_1["proofs"][number], keyof CommitmentProof>]: never; })[] & { [K_92 in Exclude<keyof I_1["proofs"], keyof {
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                    prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                        prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                            prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashKey?: import("../../../../confio/proofs").HashOp | undefined;
                                prehashValue?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookupInners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_93 in Exclude<keyof I_1, "proofs">]: never; }>(object: I_1): MerkleProof;
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
