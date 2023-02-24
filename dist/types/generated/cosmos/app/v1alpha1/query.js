/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Config } from "./config";
export const protobufPackage = "cosmos.app.v1alpha1";
function createBaseQueryConfigRequest() {
    return {};
}
export const QueryConfigRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConfigRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return QueryConfigRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryConfigRequest();
        return message;
    },
};
function createBaseQueryConfigResponse() {
    return { config: undefined };
}
export const QueryConfigResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            Config.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = Config.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { config: isSet(object.config) ? Config.fromJSON(object.config) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
        return obj;
    },
    create(base) {
        return QueryConfigResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryConfigResponse();
        message.config = (object.config !== undefined && object.config !== null)
            ? Config.fromPartial(object.config)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.app.v1alpha1.Query";
        this.rpc = rpc;
        this.Config = this.Config.bind(this);
    }
    Config(request) {
        const data = QueryConfigRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Config", data);
        return promise.then((data) => QueryConfigResponse.decode(new _m0.Reader(data)));
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