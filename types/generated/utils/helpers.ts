import { Uint64 } from "@cosmjs/math";

import Long from "long";
import { PageRequest } from "../cosmos/base/query/v1beta1/pagination";

export type Id = string | number | Long | Uint64;

export function longify(value: string | number | Long | Uint64): Long {
    const checkedValue = Uint64.fromString(value.toString());
    return Long.fromBytesBE([...checkedValue.toBytesBigEndian()], true);
}

export function createPagination(paginationKey?: Uint8Array): PageRequest | undefined {
    return paginationKey? {
        key: paginationKey,
        offset: Long.fromNumber(0, true),
        limit: Long.fromNumber(0, true),
        countTotal: false,
        reverse: true,
    }: undefined;
}