/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ClientConsensusStates, IdentifiedClientState, Params } from "./client";
export const protobufPackage = "ibc.core.client.v1";
function createBaseGenesisState() {
    return {
        clients: [],
        clientsConsensus: [],
        clientsMetadata: [],
        params: undefined,
        createLocalhost: false,
        nextClientSequence: Long.UZERO,
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.clients) {
            IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clientsConsensus) {
            ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.clientsMetadata) {
            IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (message.createLocalhost === true) {
            writer.uint32(40).bool(message.createLocalhost);
        }
        if (!message.nextClientSequence.isZero()) {
            writer.uint32(48).uint64(message.nextClientSequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clientsConsensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.clientsMetadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.createLocalhost = reader.bool();
                    break;
                case 6:
                    message.nextClientSequence = reader.uint64();
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
            clients: Array.isArray(object === null || object === void 0 ? void 0 : object.clients) ? object.clients.map((e) => IdentifiedClientState.fromJSON(e)) : [],
            clientsConsensus: Array.isArray(object === null || object === void 0 ? void 0 : object.clientsConsensus)
                ? object.clientsConsensus.map((e) => ClientConsensusStates.fromJSON(e))
                : [],
            clientsMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.clientsMetadata)
                ? object.clientsMetadata.map((e) => IdentifiedGenesisMetadata.fromJSON(e))
                : [],
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            createLocalhost: isSet(object.createLocalhost) ? Boolean(object.createLocalhost) : false,
            nextClientSequence: isSet(object.nextClientSequence) ? Long.fromValue(object.nextClientSequence) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clients) {
            obj.clients = message.clients.map((e) => e ? IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.clients = [];
        }
        if (message.clientsConsensus) {
            obj.clientsConsensus = message.clientsConsensus.map((e) => e ? ClientConsensusStates.toJSON(e) : undefined);
        }
        else {
            obj.clientsConsensus = [];
        }
        if (message.clientsMetadata) {
            obj.clientsMetadata = message.clientsMetadata.map((e) => e ? IdentifiedGenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.clientsMetadata = [];
        }
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.createLocalhost !== undefined && (obj.createLocalhost = message.createLocalhost);
        message.nextClientSequence !== undefined &&
            (obj.nextClientSequence = (message.nextClientSequence || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.clients = ((_a = object.clients) === null || _a === void 0 ? void 0 : _a.map((e) => IdentifiedClientState.fromPartial(e))) || [];
        message.clientsConsensus = ((_b = object.clientsConsensus) === null || _b === void 0 ? void 0 : _b.map((e) => ClientConsensusStates.fromPartial(e))) || [];
        message.clientsMetadata = ((_c = object.clientsMetadata) === null || _c === void 0 ? void 0 : _c.map((e) => IdentifiedGenesisMetadata.fromPartial(e))) || [];
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.createLocalhost = (_d = object.createLocalhost) !== null && _d !== void 0 ? _d : false;
        message.nextClientSequence = (object.nextClientSequence !== undefined && object.nextClientSequence !== null)
            ? Long.fromValue(object.nextClientSequence)
            : Long.UZERO;
        return message;
    },
};
function createBaseGenesisMetadata() {
    return { key: new Uint8Array(), value: new Uint8Array() };
}
export const GenesisMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    create(base) {
        return GenesisMetadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisMetadata();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseIdentifiedGenesisMetadata() {
    return { clientId: "", clientMetadata: [] };
}
export const IdentifiedGenesisMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.clientMetadata) {
            GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedGenesisMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.clientMetadata.push(GenesisMetadata.decode(reader, reader.uint32()));
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            clientMetadata: Array.isArray(object === null || object === void 0 ? void 0 : object.clientMetadata)
                ? object.clientMetadata.map((e) => GenesisMetadata.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.clientMetadata) {
            obj.clientMetadata = message.clientMetadata.map((e) => e ? GenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.clientMetadata = [];
        }
        return obj;
    },
    create(base) {
        return IdentifiedGenesisMetadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIdentifiedGenesisMetadata();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.clientMetadata = ((_b = object.clientMetadata) === null || _b === void 0 ? void 0 : _b.map((e) => GenesisMetadata.fromPartial(e))) || [];
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
//# sourceMappingURL=genesis.js.map