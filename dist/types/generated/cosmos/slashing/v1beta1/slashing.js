/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
export const protobufPackage = "cosmos.slashing.v1beta1";
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        startHeight: Long.ZERO,
        indexOffset: Long.ZERO,
        jailedUntil: undefined,
        tombstoned: false,
        missedBlocksCounter: Long.ZERO,
    };
}
export const ValidatorSigningInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.startHeight.isZero()) {
            writer.uint32(16).int64(message.startHeight);
        }
        if (!message.indexOffset.isZero()) {
            writer.uint32(24).int64(message.indexOffset);
        }
        if (message.jailedUntil !== undefined) {
            Timestamp.encode(toTimestamp(message.jailedUntil), writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (!message.missedBlocksCounter.isZero()) {
            writer.uint32(48).int64(message.missedBlocksCounter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.startHeight = reader.int64();
                    break;
                case 3:
                    message.indexOffset = reader.int64();
                    break;
                case 4:
                    message.jailedUntil = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tombstoned = reader.bool();
                    break;
                case 6:
                    message.missedBlocksCounter = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? String(object.address) : "",
            startHeight: isSet(object.startHeight) ? Long.fromValue(object.startHeight) : Long.ZERO,
            indexOffset: isSet(object.indexOffset) ? Long.fromValue(object.indexOffset) : Long.ZERO,
            jailedUntil: isSet(object.jailedUntil) ? fromJsonTimestamp(object.jailedUntil) : undefined,
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            missedBlocksCounter: isSet(object.missedBlocksCounter) ? Long.fromValue(object.missedBlocksCounter) : Long.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.startHeight !== undefined && (obj.startHeight = (message.startHeight || Long.ZERO).toString());
        message.indexOffset !== undefined && (obj.indexOffset = (message.indexOffset || Long.ZERO).toString());
        message.jailedUntil !== undefined && (obj.jailedUntil = message.jailedUntil.toISOString());
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.missedBlocksCounter !== undefined &&
            (obj.missedBlocksCounter = (message.missedBlocksCounter || Long.ZERO).toString());
        return obj;
    },
    create(base) {
        return ValidatorSigningInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseValidatorSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.startHeight = (object.startHeight !== undefined && object.startHeight !== null)
            ? Long.fromValue(object.startHeight)
            : Long.ZERO;
        message.indexOffset = (object.indexOffset !== undefined && object.indexOffset !== null)
            ? Long.fromValue(object.indexOffset)
            : Long.ZERO;
        message.jailedUntil = (_b = object.jailedUntil) !== null && _b !== void 0 ? _b : undefined;
        message.tombstoned = (_c = object.tombstoned) !== null && _c !== void 0 ? _c : false;
        message.missedBlocksCounter = (object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null)
            ? Long.fromValue(object.missedBlocksCounter)
            : Long.ZERO;
        return message;
    },
};
function createBaseParams() {
    return {
        signedBlocksWindow: Long.ZERO,
        minSignedPerWindow: new Uint8Array(),
        downtimeJailDuration: undefined,
        slashFractionDoubleSign: new Uint8Array(),
        slashFractionDowntime: new Uint8Array(),
    };
}
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.signedBlocksWindow.isZero()) {
            writer.uint32(8).int64(message.signedBlocksWindow);
        }
        if (message.minSignedPerWindow.length !== 0) {
            writer.uint32(18).bytes(message.minSignedPerWindow);
        }
        if (message.downtimeJailDuration !== undefined) {
            Duration.encode(message.downtimeJailDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slashFractionDoubleSign.length !== 0) {
            writer.uint32(34).bytes(message.slashFractionDoubleSign);
        }
        if (message.slashFractionDowntime.length !== 0) {
            writer.uint32(42).bytes(message.slashFractionDowntime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signedBlocksWindow = reader.int64();
                    break;
                case 2:
                    message.minSignedPerWindow = reader.bytes();
                    break;
                case 3:
                    message.downtimeJailDuration = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.slashFractionDoubleSign = reader.bytes();
                    break;
                case 5:
                    message.slashFractionDowntime = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            signedBlocksWindow: isSet(object.signedBlocksWindow) ? Long.fromValue(object.signedBlocksWindow) : Long.ZERO,
            minSignedPerWindow: isSet(object.minSignedPerWindow)
                ? bytesFromBase64(object.minSignedPerWindow)
                : new Uint8Array(),
            downtimeJailDuration: isSet(object.downtimeJailDuration)
                ? Duration.fromJSON(object.downtimeJailDuration)
                : undefined,
            slashFractionDoubleSign: isSet(object.slashFractionDoubleSign)
                ? bytesFromBase64(object.slashFractionDoubleSign)
                : new Uint8Array(),
            slashFractionDowntime: isSet(object.slashFractionDowntime)
                ? bytesFromBase64(object.slashFractionDowntime)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.signedBlocksWindow !== undefined &&
            (obj.signedBlocksWindow = (message.signedBlocksWindow || Long.ZERO).toString());
        message.minSignedPerWindow !== undefined &&
            (obj.minSignedPerWindow = base64FromBytes(message.minSignedPerWindow !== undefined ? message.minSignedPerWindow : new Uint8Array()));
        message.downtimeJailDuration !== undefined && (obj.downtimeJailDuration = message.downtimeJailDuration
            ? Duration.toJSON(message.downtimeJailDuration)
            : undefined);
        message.slashFractionDoubleSign !== undefined &&
            (obj.slashFractionDoubleSign = base64FromBytes(message.slashFractionDoubleSign !== undefined ? message.slashFractionDoubleSign : new Uint8Array()));
        message.slashFractionDowntime !== undefined &&
            (obj.slashFractionDowntime = base64FromBytes(message.slashFractionDowntime !== undefined ? message.slashFractionDowntime : new Uint8Array()));
        return obj;
    },
    create(base) {
        return Params.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseParams();
        message.signedBlocksWindow = (object.signedBlocksWindow !== undefined && object.signedBlocksWindow !== null)
            ? Long.fromValue(object.signedBlocksWindow)
            : Long.ZERO;
        message.minSignedPerWindow = (_a = object.minSignedPerWindow) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.downtimeJailDuration = (object.downtimeJailDuration !== undefined && object.downtimeJailDuration !== null)
            ? Duration.fromPartial(object.downtimeJailDuration)
            : undefined;
        message.slashFractionDoubleSign = (_b = object.slashFractionDoubleSign) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.slashFractionDowntime = (_c = object.slashFractionDowntime) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return Long.fromNumber(number);
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=slashing.js.map