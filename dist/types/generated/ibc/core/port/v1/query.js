/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Counterparty, orderFromJSON, orderToJSON } from "../../channel/v1/channel";
export const protobufPackage = "ibc.core.port.v1";
function createBaseQueryAppVersionRequest() {
    return { portId: "", connectionId: "", ordering: 0, counterparty: undefined, proposedVersion: "" };
}
export const QueryAppVersionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.connectionId !== "") {
            writer.uint32(18).string(message.connectionId);
        }
        if (message.ordering !== 0) {
            writer.uint32(24).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.proposedVersion !== "") {
            writer.uint32(42).string(message.proposedVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppVersionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.connectionId = reader.string();
                    break;
                case 3:
                    message.ordering = reader.int32();
                    break;
                case 4:
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proposedVersion = reader.string();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            connectionId: isSet(object.connectionId) ? String(object.connectionId) : "",
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : 0,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            proposedVersion: isSet(object.proposedVersion) ? String(object.proposedVersion) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.connectionId !== undefined && (obj.connectionId = message.connectionId);
        message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
        message.proposedVersion !== undefined && (obj.proposedVersion = message.proposedVersion);
        return obj;
    },
    create(base) {
        return QueryAppVersionRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryAppVersionRequest();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.connectionId = (_b = object.connectionId) !== null && _b !== void 0 ? _b : "";
        message.ordering = (_c = object.ordering) !== null && _c !== void 0 ? _c : 0;
        message.counterparty = (object.counterparty !== undefined && object.counterparty !== null)
            ? Counterparty.fromPartial(object.counterparty)
            : undefined;
        message.proposedVersion = (_d = object.proposedVersion) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseQueryAppVersionResponse() {
    return { portId: "", version: "" };
}
export const QueryAppVersionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppVersionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            version: isSet(object.version) ? String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    create(base) {
        return QueryAppVersionResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryAppVersionResponse();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "ibc.core.port.v1.Query";
        this.rpc = rpc;
        this.AppVersion = this.AppVersion.bind(this);
    }
    AppVersion(request) {
        const data = QueryAppVersionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AppVersion", data);
        return promise.then((data) => QueryAppVersionResponse.decode(new _m0.Reader(data)));
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