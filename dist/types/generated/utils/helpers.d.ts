import { Uint64 } from "@cosmjs/math";
import Long from "long";
import { PageRequest } from "../cosmos/base/query/v1beta1/pagination";
export type Id = string | number | Long | Uint64;
export declare function longify(value: string | number | Long | Uint64): Long;
export declare function createPagination(paginationKey?: Uint8Array): PageRequest | undefined;
