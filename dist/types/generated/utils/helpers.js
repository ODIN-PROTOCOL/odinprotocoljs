import { Uint64 } from "@cosmjs/math";
import Long from "long";
export { Long };
export function longify(value) {
    const checkedValue = Uint64.fromString(value.toString());
    return Long.fromBytesBE([...checkedValue.toBytesBigEndian()], true);
}
export function createPagination(paginationKey) {
    return paginationKey ? {
        key: paginationKey,
        offset: Long.fromNumber(0, true),
        limit: Long.fromNumber(0, true),
        countTotal: false,
        reverse: true,
    } : undefined;
}
//# sourceMappingURL=helpers.js.map