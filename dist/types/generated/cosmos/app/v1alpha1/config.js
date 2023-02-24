/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export const protobufPackage = "cosmos.app.v1alpha1";
function createBaseConfig() {
    return { modules: [] };
}
export const Config = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.modules) {
            ModuleConfig.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.modules.push(ModuleConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { modules: Array.isArray(object === null || object === void 0 ? void 0 : object.modules) ? object.modules.map((e) => ModuleConfig.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.modules) {
            obj.modules = message.modules.map((e) => e ? ModuleConfig.toJSON(e) : undefined);
        }
        else {
            obj.modules = [];
        }
        return obj;
    },
    create(base) {
        return Config.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConfig();
        message.modules = ((_a = object.modules) === null || _a === void 0 ? void 0 : _a.map((e) => ModuleConfig.fromPartial(e))) || [];
        return message;
    },
};
function createBaseModuleConfig() {
    return { name: "", config: undefined };
}
export const ModuleConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.config !== undefined) {
            Any.encode(message.config, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.config = Any.decode(reader, reader.uint32());
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
            config: isSet(object.config) ? Any.fromJSON(object.config) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.config !== undefined && (obj.config = message.config ? Any.toJSON(message.config) : undefined);
        return obj;
    },
    create(base) {
        return ModuleConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseModuleConfig();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.config = (object.config !== undefined && object.config !== null)
            ? Any.fromPartial(object.config)
            : undefined;
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=config.js.map