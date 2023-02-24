/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmwasm.wasm.v1";
function createBaseMsgIBCSend() {
    return { channel: "", timeoutHeight: Long.UZERO, timeoutTimestamp: Long.UZERO, data: new Uint8Array() };
}
export const MsgIBCSend = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        if (!message.timeoutHeight.isZero()) {
            writer.uint32(32).uint64(message.timeoutHeight);
        }
        if (!message.timeoutTimestamp.isZero()) {
            writer.uint32(40).uint64(message.timeoutTimestamp);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.channel = reader.string();
                    break;
                case 4:
                    message.timeoutHeight = reader.uint64();
                    break;
                case 5:
                    message.timeoutTimestamp = reader.uint64();
                    break;
                case 6:
                    message.data = reader.bytes();
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
            channel: isSet(object.channel) ? String(object.channel) : "",
            timeoutHeight: isSet(object.timeoutHeight) ? Long.fromValue(object.timeoutHeight) : Long.UZERO,
            timeoutTimestamp: isSet(object.timeoutTimestamp) ? Long.fromValue(object.timeoutTimestamp) : Long.UZERO,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel);
        message.timeoutHeight !== undefined && (obj.timeoutHeight = (message.timeoutHeight || Long.UZERO).toString());
        message.timeoutTimestamp !== undefined &&
            (obj.timeoutTimestamp = (message.timeoutTimestamp || Long.UZERO).toString());
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    create(base) {
        return MsgIBCSend.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgIBCSend();
        message.channel = (_a = object.channel) !== null && _a !== void 0 ? _a : "";
        message.timeoutHeight = (object.timeoutHeight !== undefined && object.timeoutHeight !== null)
            ? Long.fromValue(object.timeoutHeight)
            : Long.UZERO;
        message.timeoutTimestamp = (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null)
            ? Long.fromValue(object.timeoutTimestamp)
            : Long.UZERO;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseMsgIBCCloseChannel() {
    return { channel: "" };
}
export const MsgIBCCloseChannel = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel !== "") {
            writer.uint32(18).string(message.channel);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgIBCCloseChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.channel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { channel: isSet(object.channel) ? String(object.channel) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel);
        return obj;
    },
    create(base) {
        return MsgIBCCloseChannel.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgIBCCloseChannel();
        message.channel = (_a = object.channel) !== null && _a !== void 0 ? _a : "";
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=ibc.js.map