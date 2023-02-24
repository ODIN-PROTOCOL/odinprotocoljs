/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.base.store.v1beta1";
function createBaseCommitInfo() {
    return { version: Long.ZERO, storeInfos: [] };
}
export const CommitInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.version.isZero()) {
            writer.uint32(8).int64(message.version);
        }
        for (const v of message.storeInfos) {
            StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()));
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
            version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
            storeInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.storeInfos) ? object.storeInfos.map((e) => StoreInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
        if (message.storeInfos) {
            obj.storeInfos = message.storeInfos.map((e) => e ? StoreInfo.toJSON(e) : undefined);
        }
        else {
            obj.storeInfos = [];
        }
        return obj;
    },
    create(base) {
        return CommitInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCommitInfo();
        message.version = (object.version !== undefined && object.version !== null)
            ? Long.fromValue(object.version)
            : Long.ZERO;
        message.storeInfos = ((_a = object.storeInfos) === null || _a === void 0 ? void 0 : _a.map((e) => StoreInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseStoreInfo() {
    return { name: "", commitId: undefined };
}
export const StoreInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.commitId !== undefined) {
            CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.commitId = CommitID.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            commitId: isSet(object.commitId) ? CommitID.fromJSON(object.commitId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.commitId !== undefined && (obj.commitId = message.commitId ? CommitID.toJSON(message.commitId) : undefined);
        return obj;
    },
    create(base) {
        return StoreInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStoreInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.commitId = (object.commitId !== undefined && object.commitId !== null)
            ? CommitID.fromPartial(object.commitId)
            : undefined;
        return message;
    },
};
function createBaseCommitID() {
    return { version: Long.ZERO, hash: new Uint8Array() };
}
export const CommitID = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.version.isZero()) {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.int64();
                    break;
                case 2:
                    message.hash = reader.bytes();
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
            version: isSet(object.version) ? Long.fromValue(object.version) : Long.ZERO,
            hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = (message.version || Long.ZERO).toString());
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    create(base) {
        return CommitID.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCommitID();
        message.version = (object.version !== undefined && object.version !== null)
            ? Long.fromValue(object.version)
            : Long.ZERO;
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
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
//# sourceMappingURL=commit_info.js.map