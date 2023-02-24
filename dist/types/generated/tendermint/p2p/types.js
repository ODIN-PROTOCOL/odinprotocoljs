/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";
export const protobufPackage = "tendermint.p2p";
function createBaseProtocolVersion() {
    return { p2p: Long.UZERO, block: Long.UZERO, app: Long.UZERO };
}
export const ProtocolVersion = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.p2p.isZero()) {
            writer.uint32(8).uint64(message.p2p);
        }
        if (!message.block.isZero()) {
            writer.uint32(16).uint64(message.block);
        }
        if (!message.app.isZero()) {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtocolVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = reader.uint64();
                    break;
                case 2:
                    message.block = reader.uint64();
                    break;
                case 3:
                    message.app = reader.uint64();
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
            p2p: isSet(object.p2p) ? Long.fromValue(object.p2p) : Long.UZERO,
            block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO,
            app: isSet(object.app) ? Long.fromValue(object.app) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.p2p !== undefined && (obj.p2p = (message.p2p || Long.UZERO).toString());
        message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
        message.app !== undefined && (obj.app = (message.app || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return ProtocolVersion.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseProtocolVersion();
        message.p2p = (object.p2p !== undefined && object.p2p !== null) ? Long.fromValue(object.p2p) : Long.UZERO;
        message.block = (object.block !== undefined && object.block !== null) ? Long.fromValue(object.block) : Long.UZERO;
        message.app = (object.app !== undefined && object.app !== null) ? Long.fromValue(object.app) : Long.UZERO;
        return message;
    },
};
function createBaseNodeInfo() {
    return {
        protocolVersion: undefined,
        nodeId: "",
        listenAddr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: undefined,
    };
}
export const NodeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.protocolVersion !== undefined) {
            ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
        }
        if (message.nodeId !== "") {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.listenAddr !== "") {
            writer.uint32(26).string(message.listenAddr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocolVersion = ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nodeId = reader.string();
                    break;
                case 3:
                    message.listenAddr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = NodeInfoOther.decode(reader, reader.uint32());
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
            protocolVersion: isSet(object.protocolVersion) ? ProtocolVersion.fromJSON(object.protocolVersion) : undefined,
            nodeId: isSet(object.nodeId) ? String(object.nodeId) : "",
            listenAddr: isSet(object.listenAddr) ? String(object.listenAddr) : "",
            network: isSet(object.network) ? String(object.network) : "",
            version: isSet(object.version) ? String(object.version) : "",
            channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(),
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            other: isSet(object.other) ? NodeInfoOther.fromJSON(object.other) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocolVersion !== undefined &&
            (obj.protocolVersion = message.protocolVersion ? ProtocolVersion.toJSON(message.protocolVersion) : undefined);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.listenAddr !== undefined && (obj.listenAddr = message.listenAddr);
        message.network !== undefined && (obj.network = message.network);
        message.version !== undefined && (obj.version = message.version);
        message.channels !== undefined &&
            (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.other !== undefined && (obj.other = message.other ? NodeInfoOther.toJSON(message.other) : undefined);
        return obj;
    },
    create(base) {
        return NodeInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseNodeInfo();
        message.protocolVersion = (object.protocolVersion !== undefined && object.protocolVersion !== null)
            ? ProtocolVersion.fromPartial(object.protocolVersion)
            : undefined;
        message.nodeId = (_a = object.nodeId) !== null && _a !== void 0 ? _a : "";
        message.listenAddr = (_b = object.listenAddr) !== null && _b !== void 0 ? _b : "";
        message.network = (_c = object.network) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        message.channels = (_e = object.channels) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.moniker = (_f = object.moniker) !== null && _f !== void 0 ? _f : "";
        message.other = (object.other !== undefined && object.other !== null)
            ? NodeInfoOther.fromPartial(object.other)
            : undefined;
        return message;
    },
};
function createBaseNodeInfoOther() {
    return { txIndex: "", rpcAddress: "" };
}
export const NodeInfoOther = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.txIndex !== "") {
            writer.uint32(10).string(message.txIndex);
        }
        if (message.rpcAddress !== "") {
            writer.uint32(18).string(message.rpcAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeInfoOther();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txIndex = reader.string();
                    break;
                case 2:
                    message.rpcAddress = reader.string();
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
            txIndex: isSet(object.txIndex) ? String(object.txIndex) : "",
            rpcAddress: isSet(object.rpcAddress) ? String(object.rpcAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.txIndex !== undefined && (obj.txIndex = message.txIndex);
        message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
        return obj;
    },
    create(base) {
        return NodeInfoOther.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseNodeInfoOther();
        message.txIndex = (_a = object.txIndex) !== null && _a !== void 0 ? _a : "";
        message.rpcAddress = (_b = object.rpcAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePeerInfo() {
    return { id: "", addressInfo: [], lastConnected: undefined };
}
export const PeerInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.addressInfo) {
            PeerAddressInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastConnected !== undefined) {
            Timestamp.encode(toTimestamp(message.lastConnected), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.addressInfo.push(PeerAddressInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastConnected = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            id: isSet(object.id) ? String(object.id) : "",
            addressInfo: Array.isArray(object === null || object === void 0 ? void 0 : object.addressInfo)
                ? object.addressInfo.map((e) => PeerAddressInfo.fromJSON(e))
                : [],
            lastConnected: isSet(object.lastConnected) ? fromJsonTimestamp(object.lastConnected) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.addressInfo) {
            obj.addressInfo = message.addressInfo.map((e) => e ? PeerAddressInfo.toJSON(e) : undefined);
        }
        else {
            obj.addressInfo = [];
        }
        message.lastConnected !== undefined && (obj.lastConnected = message.lastConnected.toISOString());
        return obj;
    },
    create(base) {
        return PeerInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePeerInfo();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.addressInfo = ((_b = object.addressInfo) === null || _b === void 0 ? void 0 : _b.map((e) => PeerAddressInfo.fromPartial(e))) || [];
        message.lastConnected = (_c = object.lastConnected) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBasePeerAddressInfo() {
    return { address: "", lastDialSuccess: undefined, lastDialFailure: undefined, dialFailures: 0 };
}
export const PeerAddressInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.lastDialSuccess !== undefined) {
            Timestamp.encode(toTimestamp(message.lastDialSuccess), writer.uint32(18).fork()).ldelim();
        }
        if (message.lastDialFailure !== undefined) {
            Timestamp.encode(toTimestamp(message.lastDialFailure), writer.uint32(26).fork()).ldelim();
        }
        if (message.dialFailures !== 0) {
            writer.uint32(32).uint32(message.dialFailures);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeerAddressInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.lastDialSuccess = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastDialFailure = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.dialFailures = reader.uint32();
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
            lastDialSuccess: isSet(object.lastDialSuccess) ? fromJsonTimestamp(object.lastDialSuccess) : undefined,
            lastDialFailure: isSet(object.lastDialFailure) ? fromJsonTimestamp(object.lastDialFailure) : undefined,
            dialFailures: isSet(object.dialFailures) ? Number(object.dialFailures) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.lastDialSuccess !== undefined && (obj.lastDialSuccess = message.lastDialSuccess.toISOString());
        message.lastDialFailure !== undefined && (obj.lastDialFailure = message.lastDialFailure.toISOString());
        message.dialFailures !== undefined && (obj.dialFailures = Math.round(message.dialFailures));
        return obj;
    },
    create(base) {
        return PeerAddressInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePeerAddressInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.lastDialSuccess = (_b = object.lastDialSuccess) !== null && _b !== void 0 ? _b : undefined;
        message.lastDialFailure = (_c = object.lastDialFailure) !== null && _c !== void 0 ? _c : undefined;
        message.dialFailures = (_d = object.dialFailures) !== null && _d !== void 0 ? _d : 0;
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
//# sourceMappingURL=types.js.map