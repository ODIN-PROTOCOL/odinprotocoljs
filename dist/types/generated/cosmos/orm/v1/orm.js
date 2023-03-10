/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.orm.v1";
function createBaseTableDescriptor() {
    return { primaryKey: undefined, index: [], id: 0 };
}
export const TableDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.primaryKey !== undefined) {
            PrimaryKeyDescriptor.encode(message.primaryKey, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.index) {
            SecondaryIndexDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.id !== 0) {
            writer.uint32(24).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTableDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.primaryKey = PrimaryKeyDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.index.push(SecondaryIndexDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.id = reader.uint32();
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
            primaryKey: isSet(object.primaryKey) ? PrimaryKeyDescriptor.fromJSON(object.primaryKey) : undefined,
            index: Array.isArray(object === null || object === void 0 ? void 0 : object.index) ? object.index.map((e) => SecondaryIndexDescriptor.fromJSON(e)) : [],
            id: isSet(object.id) ? Number(object.id) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.primaryKey !== undefined &&
            (obj.primaryKey = message.primaryKey ? PrimaryKeyDescriptor.toJSON(message.primaryKey) : undefined);
        if (message.index) {
            obj.index = message.index.map((e) => e ? SecondaryIndexDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.index = [];
        }
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create(base) {
        return TableDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTableDescriptor();
        message.primaryKey = (object.primaryKey !== undefined && object.primaryKey !== null)
            ? PrimaryKeyDescriptor.fromPartial(object.primaryKey)
            : undefined;
        message.index = ((_a = object.index) === null || _a === void 0 ? void 0 : _a.map((e) => SecondaryIndexDescriptor.fromPartial(e))) || [];
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBasePrimaryKeyDescriptor() {
    return { fields: "", autoIncrement: false };
}
export const PrimaryKeyDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.autoIncrement === true) {
            writer.uint32(16).bool(message.autoIncrement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrimaryKeyDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.autoIncrement = reader.bool();
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
            fields: isSet(object.fields) ? String(object.fields) : "",
            autoIncrement: isSet(object.autoIncrement) ? Boolean(object.autoIncrement) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fields !== undefined && (obj.fields = message.fields);
        message.autoIncrement !== undefined && (obj.autoIncrement = message.autoIncrement);
        return obj;
    },
    create(base) {
        return PrimaryKeyDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePrimaryKeyDescriptor();
        message.fields = (_a = object.fields) !== null && _a !== void 0 ? _a : "";
        message.autoIncrement = (_b = object.autoIncrement) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseSecondaryIndexDescriptor() {
    return { fields: "", id: 0, unique: false };
}
export const SecondaryIndexDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fields !== "") {
            writer.uint32(10).string(message.fields);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint32(message.id);
        }
        if (message.unique === true) {
            writer.uint32(24).bool(message.unique);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSecondaryIndexDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fields = reader.string();
                    break;
                case 2:
                    message.id = reader.uint32();
                    break;
                case 3:
                    message.unique = reader.bool();
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
            fields: isSet(object.fields) ? String(object.fields) : "",
            id: isSet(object.id) ? Number(object.id) : 0,
            unique: isSet(object.unique) ? Boolean(object.unique) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fields !== undefined && (obj.fields = message.fields);
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.unique !== undefined && (obj.unique = message.unique);
        return obj;
    },
    create(base) {
        return SecondaryIndexDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSecondaryIndexDescriptor();
        message.fields = (_a = object.fields) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : 0;
        message.unique = (_c = object.unique) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseSingletonDescriptor() {
    return { id: 0 };
}
export const SingletonDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSingletonDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create(base) {
        return SingletonDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSingletonDescriptor();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
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
//# sourceMappingURL=orm.js.map