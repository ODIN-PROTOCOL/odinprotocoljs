import Long from "long";
import _m0 from "protobufjs/minimal";
import { Delegation, Params, Redelegation, UnbondingDelegation, Validator } from "./staking";
export declare const protobufPackage = "cosmos.staking.v1beta1";
/** GenesisState defines the staking module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of related to deposit. */
    params?: Params;
    /**
     * last_total_power tracks the total amounts of bonded tokens recorded during
     * the previous end block.
     */
    lastTotalPower: Uint8Array;
    /**
     * last_validator_powers is a special index that provides a historical list
     * of the last-block's bonded validators.
     */
    lastValidatorPowers: LastValidatorPower[];
    /** delegations defines the validator set at genesis. */
    validators: Validator[];
    /** delegations defines the delegations active at genesis. */
    delegations: Delegation[];
    /** unbonding_delegations defines the unbonding delegations active at genesis. */
    unbondingDelegations: UnbondingDelegation[];
    /** redelegations defines the redelegations active at genesis. */
    redelegations: Redelegation[];
    exported: boolean;
}
/** LastValidatorPower required for validator set update logic. */
export interface LastValidatorPower {
    /** address is the address of the validator. */
    address: string;
    /** power defines the power of the validator. */
    power: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        params?: {
            unbondingTime?: {
                seconds?: string | number | Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxValidators?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            bondDenom?: string | undefined;
            minCommissionRate?: string | undefined;
        } | undefined;
        lastTotalPower?: Uint8Array | undefined;
        lastValidatorPowers?: {
            address?: string | undefined;
            power?: string | number | Long | undefined;
        }[] | undefined;
        validators?: {
            operatorAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegatorShares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbondingHeight?: string | number | Long | undefined;
            unbondingTime?: Date | undefined;
            commission?: {
                commissionRates?: {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } | undefined;
                updateTime?: Date | undefined;
            } | undefined;
            minSelfDelegation?: string | undefined;
        }[] | undefined;
        delegations?: {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            shares?: string | undefined;
        }[] | undefined;
        unbondingDelegations?: {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        redelegations?: {
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        exported?: boolean | undefined;
    } & {
        params?: ({
            unbondingTime?: {
                seconds?: string | number | Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxValidators?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            bondDenom?: string | undefined;
            minCommissionRate?: string | undefined;
        } & {
            unbondingTime?: ({
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
                } & { [K in Exclude<keyof I["params"]["unbondingTime"]["seconds"], keyof Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_1 in Exclude<keyof I["params"]["unbondingTime"], keyof import("../../../google/protobuf/duration").Duration>]: never; }) | undefined;
            maxValidators?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            bondDenom?: string | undefined;
            minCommissionRate?: string | undefined;
        } & { [K_2 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
        lastTotalPower?: Uint8Array | undefined;
        lastValidatorPowers?: ({
            address?: string | undefined;
            power?: string | number | Long | undefined;
        }[] & ({
            address?: string | undefined;
            power?: string | number | Long | undefined;
        } & {
            address?: string | undefined;
            power?: string | number | (Long & {
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
            } & { [K_3 in Exclude<keyof I["lastValidatorPowers"][number]["power"], keyof Long>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["lastValidatorPowers"][number], keyof LastValidatorPower>]: never; })[] & { [K_5 in Exclude<keyof I["lastValidatorPowers"], keyof {
            address?: string | undefined;
            power?: string | number | Long | undefined;
        }[]>]: never; }) | undefined;
        validators?: ({
            operatorAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegatorShares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbondingHeight?: string | number | Long | undefined;
            unbondingTime?: Date | undefined;
            commission?: {
                commissionRates?: {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } | undefined;
                updateTime?: Date | undefined;
            } | undefined;
            minSelfDelegation?: string | undefined;
        }[] & ({
            operatorAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegatorShares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbondingHeight?: string | number | Long | undefined;
            unbondingTime?: Date | undefined;
            commission?: {
                commissionRates?: {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } | undefined;
                updateTime?: Date | undefined;
            } | undefined;
            minSelfDelegation?: string | undefined;
        } & {
            operatorAddress?: string | undefined;
            consensusPubkey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_6 in Exclude<keyof I["validators"][number]["consensusPubkey"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegatorShares?: string | undefined;
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & { [K_7 in Exclude<keyof I["validators"][number]["description"], keyof import("./staking").Description>]: never; }) | undefined;
            unbondingHeight?: string | number | (Long & {
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
            } & { [K_8 in Exclude<keyof I["validators"][number]["unbondingHeight"], keyof Long>]: never; }) | undefined;
            unbondingTime?: Date | undefined;
            commission?: ({
                commissionRates?: {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } | undefined;
                updateTime?: Date | undefined;
            } & {
                commissionRates?: ({
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } & {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } & { [K_9 in Exclude<keyof I["validators"][number]["commission"]["commissionRates"], keyof import("./staking").CommissionRates>]: never; }) | undefined;
                updateTime?: Date | undefined;
            } & { [K_10 in Exclude<keyof I["validators"][number]["commission"], keyof import("./staking").Commission>]: never; }) | undefined;
            minSelfDelegation?: string | undefined;
        } & { [K_11 in Exclude<keyof I["validators"][number], keyof Validator>]: never; })[] & { [K_12 in Exclude<keyof I["validators"], keyof {
            operatorAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegatorShares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbondingHeight?: string | number | Long | undefined;
            unbondingTime?: Date | undefined;
            commission?: {
                commissionRates?: {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } | undefined;
                updateTime?: Date | undefined;
            } | undefined;
            minSelfDelegation?: string | undefined;
        }[]>]: never; }) | undefined;
        delegations?: ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            shares?: string | undefined;
        }[] & ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            shares?: string | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            shares?: string | undefined;
        } & { [K_13 in Exclude<keyof I["delegations"][number], keyof Delegation>]: never; })[] & { [K_14 in Exclude<keyof I["delegations"], keyof {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            shares?: string | undefined;
        }[]>]: never; }) | undefined;
        unbondingDelegations?: ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] & ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            entries?: ({
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[] & ({
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            } & {
                creationHeight?: string | number | (Long & {
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
                } & { [K_15 in Exclude<keyof I["unbondingDelegations"][number]["entries"][number]["creationHeight"], keyof Long>]: never; }) | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            } & { [K_16 in Exclude<keyof I["unbondingDelegations"][number]["entries"][number], keyof import("./staking").UnbondingDelegationEntry>]: never; })[] & { [K_17 in Exclude<keyof I["unbondingDelegations"][number]["entries"], keyof {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_18 in Exclude<keyof I["unbondingDelegations"][number], keyof UnbondingDelegation>]: never; })[] & { [K_19 in Exclude<keyof I["unbondingDelegations"], keyof {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        redelegations?: ({
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[] | undefined;
        }[] & ({
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[] | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            entries?: ({
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[] & ({
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            } & {
                creationHeight?: string | number | (Long & {
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
                } & { [K_20 in Exclude<keyof I["redelegations"][number]["entries"][number]["creationHeight"], keyof Long>]: never; }) | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            } & { [K_21 in Exclude<keyof I["redelegations"][number]["entries"][number], keyof import("./staking").RedelegationEntry>]: never; })[] & { [K_22 in Exclude<keyof I["redelegations"][number]["entries"], keyof {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I["redelegations"][number], keyof Redelegation>]: never; })[] & { [K_24 in Exclude<keyof I["redelegations"], keyof {
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        exported?: boolean | undefined;
    } & { [K_25 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        params?: {
            unbondingTime?: {
                seconds?: string | number | Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxValidators?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            bondDenom?: string | undefined;
            minCommissionRate?: string | undefined;
        } | undefined;
        lastTotalPower?: Uint8Array | undefined;
        lastValidatorPowers?: {
            address?: string | undefined;
            power?: string | number | Long | undefined;
        }[] | undefined;
        validators?: {
            operatorAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegatorShares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbondingHeight?: string | number | Long | undefined;
            unbondingTime?: Date | undefined;
            commission?: {
                commissionRates?: {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } | undefined;
                updateTime?: Date | undefined;
            } | undefined;
            minSelfDelegation?: string | undefined;
        }[] | undefined;
        delegations?: {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            shares?: string | undefined;
        }[] | undefined;
        unbondingDelegations?: {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        redelegations?: {
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        exported?: boolean | undefined;
    } & {
        params?: ({
            unbondingTime?: {
                seconds?: string | number | Long | undefined;
                nanos?: number | undefined;
            } | undefined;
            maxValidators?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            bondDenom?: string | undefined;
            minCommissionRate?: string | undefined;
        } & {
            unbondingTime?: ({
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
                } & { [K_26 in Exclude<keyof I_1["params"]["unbondingTime"]["seconds"], keyof Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_27 in Exclude<keyof I_1["params"]["unbondingTime"], keyof import("../../../google/protobuf/duration").Duration>]: never; }) | undefined;
            maxValidators?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            bondDenom?: string | undefined;
            minCommissionRate?: string | undefined;
        } & { [K_28 in Exclude<keyof I_1["params"], keyof Params>]: never; }) | undefined;
        lastTotalPower?: Uint8Array | undefined;
        lastValidatorPowers?: ({
            address?: string | undefined;
            power?: string | number | Long | undefined;
        }[] & ({
            address?: string | undefined;
            power?: string | number | Long | undefined;
        } & {
            address?: string | undefined;
            power?: string | number | (Long & {
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
            } & { [K_29 in Exclude<keyof I_1["lastValidatorPowers"][number]["power"], keyof Long>]: never; }) | undefined;
        } & { [K_30 in Exclude<keyof I_1["lastValidatorPowers"][number], keyof LastValidatorPower>]: never; })[] & { [K_31 in Exclude<keyof I_1["lastValidatorPowers"], keyof {
            address?: string | undefined;
            power?: string | number | Long | undefined;
        }[]>]: never; }) | undefined;
        validators?: ({
            operatorAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegatorShares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbondingHeight?: string | number | Long | undefined;
            unbondingTime?: Date | undefined;
            commission?: {
                commissionRates?: {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } | undefined;
                updateTime?: Date | undefined;
            } | undefined;
            minSelfDelegation?: string | undefined;
        }[] & ({
            operatorAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegatorShares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbondingHeight?: string | number | Long | undefined;
            unbondingTime?: Date | undefined;
            commission?: {
                commissionRates?: {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } | undefined;
                updateTime?: Date | undefined;
            } | undefined;
            minSelfDelegation?: string | undefined;
        } & {
            operatorAddress?: string | undefined;
            consensusPubkey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_32 in Exclude<keyof I_1["validators"][number]["consensusPubkey"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegatorShares?: string | undefined;
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } & { [K_33 in Exclude<keyof I_1["validators"][number]["description"], keyof import("./staking").Description>]: never; }) | undefined;
            unbondingHeight?: string | number | (Long & {
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
            } & { [K_34 in Exclude<keyof I_1["validators"][number]["unbondingHeight"], keyof Long>]: never; }) | undefined;
            unbondingTime?: Date | undefined;
            commission?: ({
                commissionRates?: {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } | undefined;
                updateTime?: Date | undefined;
            } & {
                commissionRates?: ({
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } & {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } & { [K_35 in Exclude<keyof I_1["validators"][number]["commission"]["commissionRates"], keyof import("./staking").CommissionRates>]: never; }) | undefined;
                updateTime?: Date | undefined;
            } & { [K_36 in Exclude<keyof I_1["validators"][number]["commission"], keyof import("./staking").Commission>]: never; }) | undefined;
            minSelfDelegation?: string | undefined;
        } & { [K_37 in Exclude<keyof I_1["validators"][number], keyof Validator>]: never; })[] & { [K_38 in Exclude<keyof I_1["validators"], keyof {
            operatorAddress?: string | undefined;
            consensusPubkey?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegatorShares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                securityContact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbondingHeight?: string | number | Long | undefined;
            unbondingTime?: Date | undefined;
            commission?: {
                commissionRates?: {
                    rate?: string | undefined;
                    maxRate?: string | undefined;
                    maxChangeRate?: string | undefined;
                } | undefined;
                updateTime?: Date | undefined;
            } | undefined;
            minSelfDelegation?: string | undefined;
        }[]>]: never; }) | undefined;
        delegations?: ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            shares?: string | undefined;
        }[] & ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            shares?: string | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            shares?: string | undefined;
        } & { [K_39 in Exclude<keyof I_1["delegations"][number], keyof Delegation>]: never; })[] & { [K_40 in Exclude<keyof I_1["delegations"], keyof {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            shares?: string | undefined;
        }[]>]: never; }) | undefined;
        unbondingDelegations?: ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] & ({
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            entries?: ({
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[] & ({
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            } & {
                creationHeight?: string | number | (Long & {
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
                } & { [K_41 in Exclude<keyof I_1["unbondingDelegations"][number]["entries"][number]["creationHeight"], keyof Long>]: never; }) | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            } & { [K_42 in Exclude<keyof I_1["unbondingDelegations"][number]["entries"][number], keyof import("./staking").UnbondingDelegationEntry>]: never; })[] & { [K_43 in Exclude<keyof I_1["unbondingDelegations"][number]["entries"], keyof {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_44 in Exclude<keyof I_1["unbondingDelegations"][number], keyof UnbondingDelegation>]: never; })[] & { [K_45 in Exclude<keyof I_1["unbondingDelegations"], keyof {
            delegatorAddress?: string | undefined;
            validatorAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        redelegations?: ({
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[] | undefined;
        }[] & ({
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[] | undefined;
        } & {
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            entries?: ({
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[] & ({
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            } & {
                creationHeight?: string | number | (Long & {
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
                } & { [K_46 in Exclude<keyof I_1["redelegations"][number]["entries"][number]["creationHeight"], keyof Long>]: never; }) | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            } & { [K_47 in Exclude<keyof I_1["redelegations"][number]["entries"][number], keyof import("./staking").RedelegationEntry>]: never; })[] & { [K_48 in Exclude<keyof I_1["redelegations"][number]["entries"], keyof {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_49 in Exclude<keyof I_1["redelegations"][number], keyof Redelegation>]: never; })[] & { [K_50 in Exclude<keyof I_1["redelegations"], keyof {
            delegatorAddress?: string | undefined;
            validatorSrcAddress?: string | undefined;
            validatorDstAddress?: string | undefined;
            entries?: {
                creationHeight?: string | number | Long | undefined;
                completionTime?: Date | undefined;
                initialBalance?: string | undefined;
                sharesDst?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        exported?: boolean | undefined;
    } & { [K_51 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
};
export declare const LastValidatorPower: {
    encode(message: LastValidatorPower, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower;
    fromJSON(object: any): LastValidatorPower;
    toJSON(message: LastValidatorPower): unknown;
    create<I extends {
        address?: string | undefined;
        power?: string | number | Long | undefined;
    } & {
        address?: string | undefined;
        power?: string | number | (Long & {
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
        } & { [K in Exclude<keyof I["power"], keyof Long>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof LastValidatorPower>]: never; }>(base?: I | undefined): LastValidatorPower;
    fromPartial<I_1 extends {
        address?: string | undefined;
        power?: string | number | Long | undefined;
    } & {
        address?: string | undefined;
        power?: string | number | (Long & {
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
        } & { [K_2 in Exclude<keyof I_1["power"], keyof Long>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof LastValidatorPower>]: never; }>(object: I_1): LastValidatorPower;
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
