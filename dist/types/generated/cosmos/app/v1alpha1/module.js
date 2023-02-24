/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.app.v1alpha1";
function createBaseModuleDescriptor() {
    return { goImport: "", usePackage: [], canMigrateFrom: [] };
}
export const ModuleDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.goImport !== "") {
            writer.uint32(10).string(message.goImport);
        }
        for (const v of message.usePackage) {
            PackageReference.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.canMigrateFrom) {
            MigrateFromInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.goImport = reader.string();
                    break;
                case 2:
                    message.usePackage.push(PackageReference.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.canMigrateFrom.push(MigrateFromInfo.decode(reader, reader.uint32()));
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
            goImport: isSet(object.goImport) ? String(object.goImport) : "",
            usePackage: Array.isArray(object === null || object === void 0 ? void 0 : object.usePackage)
                ? object.usePackage.map((e) => PackageReference.fromJSON(e))
                : [],
            canMigrateFrom: Array.isArray(object === null || object === void 0 ? void 0 : object.canMigrateFrom)
                ? object.canMigrateFrom.map((e) => MigrateFromInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.goImport !== undefined && (obj.goImport = message.goImport);
        if (message.usePackage) {
            obj.usePackage = message.usePackage.map((e) => e ? PackageReference.toJSON(e) : undefined);
        }
        else {
            obj.usePackage = [];
        }
        if (message.canMigrateFrom) {
            obj.canMigrateFrom = message.canMigrateFrom.map((e) => e ? MigrateFromInfo.toJSON(e) : undefined);
        }
        else {
            obj.canMigrateFrom = [];
        }
        return obj;
    },
    create(base) {
        return ModuleDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseModuleDescriptor();
        message.goImport = (_a = object.goImport) !== null && _a !== void 0 ? _a : "";
        message.usePackage = ((_b = object.usePackage) === null || _b === void 0 ? void 0 : _b.map((e) => PackageReference.fromPartial(e))) || [];
        message.canMigrateFrom = ((_c = object.canMigrateFrom) === null || _c === void 0 ? void 0 : _c.map((e) => MigrateFromInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBasePackageReference() {
    return { name: "", revision: 0 };
}
export const PackageReference = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.revision !== 0) {
            writer.uint32(16).uint32(message.revision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePackageReference();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.revision = reader.uint32();
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
            revision: isSet(object.revision) ? Number(object.revision) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.revision !== undefined && (obj.revision = Math.round(message.revision));
        return obj;
    },
    create(base) {
        return PackageReference.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePackageReference();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.revision = (_b = object.revision) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseMigrateFromInfo() {
    return { module: "" };
}
export const MigrateFromInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module !== "") {
            writer.uint32(10).string(message.module);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrateFromInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { module: isSet(object.module) ? String(object.module) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.module !== undefined && (obj.module = message.module);
        return obj;
    },
    create(base) {
        return MigrateFromInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMigrateFromInfo();
        message.module = (_a = object.module) !== null && _a !== void 0 ? _a : "";
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
//# sourceMappingURL=module.js.map