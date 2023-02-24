/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
export const protobufPackage = "cosmos.evidence.v1beta1";
function createBaseEquivocation() {
    return { height: Long.ZERO, time: undefined, power: Long.ZERO, consensusAddress: "" };
}
export const Equivocation = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (!message.power.isZero()) {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensusAddress !== "") {
            writer.uint32(34).string(message.consensusAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEquivocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.power = reader.int64();
                    break;
                case 4:
                    message.consensusAddress = reader.string();
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
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            power: isSet(object.power) ? Long.fromValue(object.power) : Long.ZERO,
            consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.power !== undefined && (obj.power = (message.power || Long.ZERO).toString());
        message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
        return obj;
    },
    create(base) {
        return Equivocation.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEquivocation();
        message.height = (object.height !== undefined && object.height !== null)
            ? Long.fromValue(object.height)
            : Long.ZERO;
        message.time = (_a = object.time) !== null && _a !== void 0 ? _a : undefined;
        message.power = (object.power !== undefined && object.power !== null) ? Long.fromValue(object.power) : Long.ZERO;
        message.consensusAddress = (_b = object.consensusAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
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
//# sourceMappingURL=evidence.js.map