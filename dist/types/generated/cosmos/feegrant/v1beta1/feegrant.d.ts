import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
export declare const protobufPackage = "cosmos.feegrant.v1beta1";
/** Since: cosmos-sdk 0.43 */
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
    /**
     * spend_limit specifies the maximum amount of tokens that can be spent
     * by this allowance and will be updated as tokens are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spendLimit: Coin[];
    /** expiration specifies an optional time when this allowance expires */
    expiration?: Date;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
    /** basic specifies a struct of `BasicAllowance` */
    basic?: BasicAllowance;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period?: Duration;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    periodSpendLimit: Coin[];
    /** period_can_spend is the number of coins left to be spent before the period_reset time */
    periodCanSpend: Coin[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    periodReset?: Date;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
    /** allowance can be any of basic and periodic fee allowance. */
    allowance?: Any;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowedMessages: string[];
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: Any;
}
export declare const BasicAllowance: {
    encode(message: BasicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasicAllowance;
    fromJSON(object: any): BasicAllowance;
    toJSON(message: BasicAllowance): unknown;
    create<I extends {
        spendLimit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        expiration?: Date | undefined;
    } & {
        spendLimit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["spendLimit"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["spendLimit"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        expiration?: Date | undefined;
    } & { [K_2 in Exclude<keyof I, keyof BasicAllowance>]: never; }>(base?: I | undefined): BasicAllowance;
    fromPartial<I_1 extends {
        spendLimit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        expiration?: Date | undefined;
    } & {
        spendLimit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["spendLimit"][number], keyof Coin>]: never; })[] & { [K_4 in Exclude<keyof I_1["spendLimit"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        expiration?: Date | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof BasicAllowance>]: never; }>(object: I_1): BasicAllowance;
};
export declare const PeriodicAllowance: {
    encode(message: PeriodicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicAllowance;
    fromJSON(object: any): PeriodicAllowance;
    toJSON(message: PeriodicAllowance): unknown;
    create<I extends {
        basic?: {
            spendLimit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            expiration?: Date | undefined;
        } | undefined;
        period?: {
            seconds?: string | number | Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        periodSpendLimit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        periodCanSpend?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        periodReset?: Date | undefined;
    } & {
        basic?: ({
            spendLimit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            expiration?: Date | undefined;
        } & {
            spendLimit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["basic"]["spendLimit"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["basic"]["spendLimit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            expiration?: Date | undefined;
        } & { [K_2 in Exclude<keyof I["basic"], keyof BasicAllowance>]: never; }) | undefined;
        period?: ({
            seconds?: string | number | Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long & {
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
            } & { [K_3 in Exclude<keyof I["period"]["seconds"], keyof Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_4 in Exclude<keyof I["period"], keyof Duration>]: never; }) | undefined;
        periodSpendLimit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_5 in Exclude<keyof I["periodSpendLimit"][number], keyof Coin>]: never; })[] & { [K_6 in Exclude<keyof I["periodSpendLimit"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        periodCanSpend?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_7 in Exclude<keyof I["periodCanSpend"][number], keyof Coin>]: never; })[] & { [K_8 in Exclude<keyof I["periodCanSpend"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        periodReset?: Date | undefined;
    } & { [K_9 in Exclude<keyof I, keyof PeriodicAllowance>]: never; }>(base?: I | undefined): PeriodicAllowance;
    fromPartial<I_1 extends {
        basic?: {
            spendLimit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            expiration?: Date | undefined;
        } | undefined;
        period?: {
            seconds?: string | number | Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        periodSpendLimit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        periodCanSpend?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        periodReset?: Date | undefined;
    } & {
        basic?: ({
            spendLimit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            expiration?: Date | undefined;
        } & {
            spendLimit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_10 in Exclude<keyof I_1["basic"]["spendLimit"][number], keyof Coin>]: never; })[] & { [K_11 in Exclude<keyof I_1["basic"]["spendLimit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            expiration?: Date | undefined;
        } & { [K_12 in Exclude<keyof I_1["basic"], keyof BasicAllowance>]: never; }) | undefined;
        period?: ({
            seconds?: string | number | Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long & {
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
            } & { [K_13 in Exclude<keyof I_1["period"]["seconds"], keyof Long>]: never; }) | undefined;
            nanos?: number | undefined;
        } & { [K_14 in Exclude<keyof I_1["period"], keyof Duration>]: never; }) | undefined;
        periodSpendLimit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_15 in Exclude<keyof I_1["periodSpendLimit"][number], keyof Coin>]: never; })[] & { [K_16 in Exclude<keyof I_1["periodSpendLimit"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        periodCanSpend?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_17 in Exclude<keyof I_1["periodCanSpend"][number], keyof Coin>]: never; })[] & { [K_18 in Exclude<keyof I_1["periodCanSpend"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        periodReset?: Date | undefined;
    } & { [K_19 in Exclude<keyof I_1, keyof PeriodicAllowance>]: never; }>(object: I_1): PeriodicAllowance;
};
export declare const AllowedMsgAllowance: {
    encode(message: AllowedMsgAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedMsgAllowance;
    fromJSON(object: any): AllowedMsgAllowance;
    toJSON(message: AllowedMsgAllowance): unknown;
    create<I extends {
        allowance?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        allowedMessages?: string[] | undefined;
    } & {
        allowance?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["allowance"], keyof Any>]: never; }) | undefined;
        allowedMessages?: (string[] & string[] & { [K_1 in Exclude<keyof I["allowedMessages"], keyof string[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof AllowedMsgAllowance>]: never; }>(base?: I | undefined): AllowedMsgAllowance;
    fromPartial<I_1 extends {
        allowance?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        allowedMessages?: string[] | undefined;
    } & {
        allowance?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_3 in Exclude<keyof I_1["allowance"], keyof Any>]: never; }) | undefined;
        allowedMessages?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["allowedMessages"], keyof string[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof AllowedMsgAllowance>]: never; }>(object: I_1): AllowedMsgAllowance;
};
export declare const Grant: {
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Grant;
    fromJSON(object: any): Grant;
    toJSON(message: Grant): unknown;
    create<I extends {
        granter?: string | undefined;
        grantee?: string | undefined;
        allowance?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        granter?: string | undefined;
        grantee?: string | undefined;
        allowance?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["allowance"], keyof Any>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Grant>]: never; }>(base?: I | undefined): Grant;
    fromPartial<I_1 extends {
        granter?: string | undefined;
        grantee?: string | undefined;
        allowance?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        granter?: string | undefined;
        grantee?: string | undefined;
        allowance?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I_1["allowance"], keyof Any>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Grant>]: never; }>(object: I_1): Grant;
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
