/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.base.reflection.v1beta1";
function createBaseListAllInterfacesRequest() {
    return {};
}
export const ListAllInterfacesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesRequest();
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
        return ListAllInterfacesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseListAllInterfacesRequest();
        return message;
    },
};
function createBaseListAllInterfacesResponse() {
    return { interfaceNames: [] };
}
export const ListAllInterfacesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.interfaceNames) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceNames.push(reader.string());
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
            interfaceNames: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaceNames) ? object.interfaceNames.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.interfaceNames) {
            obj.interfaceNames = message.interfaceNames.map((e) => e);
        }
        else {
            obj.interfaceNames = [];
        }
        return obj;
    },
    create(base) {
        return ListAllInterfacesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListAllInterfacesResponse();
        message.interfaceNames = ((_a = object.interfaceNames) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseListImplementationsRequest() {
    return { interfaceName: "" };
}
export const ListImplementationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.interfaceName !== "") {
            writer.uint32(10).string(message.interfaceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { interfaceName: isSet(object.interfaceName) ? String(object.interfaceName) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
        return obj;
    },
    create(base) {
        return ListImplementationsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListImplementationsRequest();
        message.interfaceName = (_a = object.interfaceName) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListImplementationsResponse() {
    return { implementationMessageNames: [] };
}
export const ListImplementationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.implementationMessageNames) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.implementationMessageNames.push(reader.string());
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
            implementationMessageNames: Array.isArray(object === null || object === void 0 ? void 0 : object.implementationMessageNames)
                ? object.implementationMessageNames.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.implementationMessageNames) {
            obj.implementationMessageNames = message.implementationMessageNames.map((e) => e);
        }
        else {
            obj.implementationMessageNames = [];
        }
        return obj;
    },
    create(base) {
        return ListImplementationsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListImplementationsResponse();
        message.implementationMessageNames = ((_a = object.implementationMessageNames) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
export class ReflectionServiceClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.base.reflection.v1beta1.ReflectionService";
        this.rpc = rpc;
        this.ListAllInterfaces = this.ListAllInterfaces.bind(this);
        this.ListImplementations = this.ListImplementations.bind(this);
    }
    ListAllInterfaces(request) {
        const data = ListAllInterfacesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ListAllInterfaces", data);
        return promise.then((data) => ListAllInterfacesResponse.decode(new _m0.Reader(data)));
    }
    ListImplementations(request) {
        const data = ListImplementationsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ListImplementations", data);
        return promise.then((data) => ListImplementationsResponse.decode(new _m0.Reader(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=reflection.js.map