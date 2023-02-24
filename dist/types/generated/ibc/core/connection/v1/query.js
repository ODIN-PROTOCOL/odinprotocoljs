/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { ConnectionEnd, IdentifiedConnection } from "./connection";
export const protobufPackage = "ibc.core.connection.v1";
function createBaseQueryConnectionRequest() {
    return { connectionId: "" };
}
export const QueryConnectionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { connectionId: isSet(object.connectionId) ? String(object.connectionId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },
    create(base) {
        return QueryConnectionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionRequest();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryConnectionResponse() {
    return { connection: undefined, proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryConnectionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection !== undefined) {
            ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = ConnectionEnd.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection ? ConnectionEnd.toJSON(message.connection) : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryConnectionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionResponse();
        message.connection = (object.connection !== undefined && object.connection !== null)
            ? ConnectionEnd.fromPartial(object.connection)
            : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryConnectionsRequest() {
    return { pagination: undefined };
}
export const QueryConnectionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryConnectionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryConnectionsResponse() {
    return { connections: [], pagination: undefined, height: undefined };
}
export const QueryConnectionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.connections) {
            IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = Height.decode(reader, reader.uint32());
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
            connections: Array.isArray(object === null || object === void 0 ? void 0 : object.connections)
                ? object.connections.map((e) => IdentifiedConnection.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map((e) => e ? IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    create(base) {
        return QueryConnectionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionsResponse();
        message.connections = ((_a = object.connections) === null || _a === void 0 ? void 0 : _a.map((e) => IdentifiedConnection.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        message.height = (object.height !== undefined && object.height !== null)
            ? Height.fromPartial(object.height)
            : undefined;
        return message;
    },
};
function createBaseQueryClientConnectionsRequest() {
    return { clientId: "" };
}
export const QueryClientConnectionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { clientId: isSet(object.clientId) ? String(object.clientId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        return obj;
    },
    create(base) {
        return QueryClientConnectionsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClientConnectionsRequest();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClientConnectionsResponse() {
    return { connectionPaths: [], proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryClientConnectionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.connectionPaths) {
            writer.uint32(10).string(v);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionPaths.push(reader.string());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            connectionPaths: Array.isArray(object === null || object === void 0 ? void 0 : object.connectionPaths) ? object.connectionPaths.map((e) => String(e)) : [],
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connectionPaths) {
            obj.connectionPaths = message.connectionPaths.map((e) => e);
        }
        else {
            obj.connectionPaths = [];
        }
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryClientConnectionsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryClientConnectionsResponse();
        message.connectionPaths = ((_a = object.connectionPaths) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryConnectionClientStateRequest() {
    return { connectionId: "" };
}
export const QueryConnectionClientStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { connectionId: isSet(object.connectionId) ? String(object.connectionId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        return obj;
    },
    create(base) {
        return QueryConnectionClientStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionClientStateRequest();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryConnectionClientStateResponse() {
    return { identifiedClientState: undefined, proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryConnectionClientStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.identifiedClientState !== undefined) {
            IdentifiedClientState.encode(message.identifiedClientState, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifiedClientState = IdentifiedClientState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            identifiedClientState: isSet(object.identifiedClientState)
                ? IdentifiedClientState.fromJSON(object.identifiedClientState)
                : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifiedClientState !== undefined && (obj.identifiedClientState = message.identifiedClientState
            ? IdentifiedClientState.toJSON(message.identifiedClientState)
            : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryConnectionClientStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionClientStateResponse();
        message.identifiedClientState =
            (object.identifiedClientState !== undefined && object.identifiedClientState !== null)
                ? IdentifiedClientState.fromPartial(object.identifiedClientState)
                : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
function createBaseQueryConnectionConsensusStateRequest() {
    return { connectionId: "", revisionNumber: Long.UZERO, revisionHeight: Long.UZERO };
}
export const QueryConnectionConsensusStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connectionId !== "") {
            writer.uint32(10).string(message.connectionId);
        }
        if (!message.revisionNumber.isZero()) {
            writer.uint32(16).uint64(message.revisionNumber);
        }
        if (!message.revisionHeight.isZero()) {
            writer.uint32(24).uint64(message.revisionHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connectionId = reader.string();
                    break;
                case 2:
                    message.revisionNumber = reader.uint64();
                    break;
                case 3:
                    message.revisionHeight = reader.uint64();
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
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            revisionNumber: isSet(object.revisionNumber) ? Long.fromValue(object.revisionNumber) : Long.UZERO,
            revisionHeight: isSet(object.revisionHeight) ? Long.fromValue(object.revisionHeight) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || Long.UZERO).toString());
        message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return QueryConnectionConsensusStateRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionConsensusStateRequest();
        message.connectionId = (_a = object.connectionId) !== null && _a !== void 0 ? _a : "";
        message.revisionNumber = (object.revisionNumber !== undefined && object.revisionNumber !== null)
            ? Long.fromValue(object.revisionNumber)
            : Long.UZERO;
        message.revisionHeight = (object.revisionHeight !== undefined && object.revisionHeight !== null)
            ? Long.fromValue(object.revisionHeight)
            : Long.UZERO;
        return message;
    },
};
function createBaseQueryConnectionConsensusStateResponse() {
    return { consensusState: undefined, clientId: "", proof: new Uint8Array(), proofHeight: undefined };
}
export const QueryConnectionConsensusStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensusState !== undefined) {
            Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proofHeight !== undefined) {
            Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensusState = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.clientId = reader.string();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proofHeight = Height.decode(reader, reader.uint32());
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
            consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensusState !== undefined &&
            (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proofHeight !== undefined &&
            (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
        return obj;
    },
    create(base) {
        return QueryConnectionConsensusStateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryConnectionConsensusStateResponse();
        message.consensusState = (object.consensusState !== undefined && object.consensusState !== null)
            ? Any.fromPartial(object.consensusState)
            : undefined;
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proofHeight = (object.proofHeight !== undefined && object.proofHeight !== null)
            ? Height.fromPartial(object.proofHeight)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "ibc.core.connection.v1.Query";
        this.rpc = rpc;
        this.Connection = this.Connection.bind(this);
        this.Connections = this.Connections.bind(this);
        this.ClientConnections = this.ClientConnections.bind(this);
        this.ConnectionClientState = this.ConnectionClientState.bind(this);
        this.ConnectionConsensusState = this.ConnectionConsensusState.bind(this);
    }
    Connection(request) {
        const data = QueryConnectionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Connection", data);
        return promise.then((data) => QueryConnectionResponse.decode(new _m0.Reader(data)));
    }
    Connections(request) {
        const data = QueryConnectionsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Connections", data);
        return promise.then((data) => QueryConnectionsResponse.decode(new _m0.Reader(data)));
    }
    ClientConnections(request) {
        const data = QueryClientConnectionsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ClientConnections", data);
        return promise.then((data) => QueryClientConnectionsResponse.decode(new _m0.Reader(data)));
    }
    ConnectionClientState(request) {
        const data = QueryConnectionClientStateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ConnectionClientState", data);
        return promise.then((data) => QueryConnectionClientStateResponse.decode(new _m0.Reader(data)));
    }
    ConnectionConsensusState(request) {
        const data = QueryConnectionConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ConnectionConsensusState", data);
        return promise.then((data) => QueryConnectionConsensusStateResponse.decode(new _m0.Reader(data)));
    }
}
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
//# sourceMappingURL=query.js.map