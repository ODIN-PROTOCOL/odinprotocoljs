/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.orm.v1alpha1";
/** StorageType */
export var StorageType;
(function (StorageType) {
    /**
     * STORAGE_TYPE_DEFAULT_UNSPECIFIED - STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent
     * KV-storage where primary key entries are stored in merkle-tree
     * backed commitment storage and indexes and seqs are stored in
     * fast index storage. Note that the Cosmos SDK before store/v2alpha1
     * does not support this.
     */
    StorageType[StorageType["STORAGE_TYPE_DEFAULT_UNSPECIFIED"] = 0] = "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
    /**
     * STORAGE_TYPE_MEMORY - STORAGE_TYPE_MEMORY indicates in-memory storage that will be
     * reloaded every time an app restarts. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    StorageType[StorageType["STORAGE_TYPE_MEMORY"] = 1] = "STORAGE_TYPE_MEMORY";
    /**
     * STORAGE_TYPE_TRANSIENT - STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
     * at the end of every block. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    StorageType[StorageType["STORAGE_TYPE_TRANSIENT"] = 2] = "STORAGE_TYPE_TRANSIENT";
    /**
     * STORAGE_TYPE_INDEX - STORAGE_TYPE_INDEX indicates persistent storage which is not backed
     * by a merkle-tree and won't affect the app hash. Note that the Cosmos SDK
     * before store/v2alpha1 does not support this.
     */
    StorageType[StorageType["STORAGE_TYPE_INDEX"] = 3] = "STORAGE_TYPE_INDEX";
    /**
     * STORAGE_TYPE_COMMITMENT - STORAGE_TYPE_INDEX indicates persistent storage which is backed by
     * a merkle-tree. With this type of storage, both primary and index keys
     * will affect the app hash and this is generally less efficient
     * than using STORAGE_TYPE_DEFAULT_UNSPECIFIED which separates index
     * keys into index storage. Note that modules built with the
     * Cosmos SDK before store/v2alpha1 must specify STORAGE_TYPE_COMMITMENT
     * instead of STORAGE_TYPE_DEFAULT_UNSPECIFIED or STORAGE_TYPE_INDEX
     * because this is the only type of persistent storage available.
     */
    StorageType[StorageType["STORAGE_TYPE_COMMITMENT"] = 4] = "STORAGE_TYPE_COMMITMENT";
    StorageType[StorageType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StorageType || (StorageType = {}));
export function storageTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STORAGE_TYPE_DEFAULT_UNSPECIFIED":
            return StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED;
        case 1:
        case "STORAGE_TYPE_MEMORY":
            return StorageType.STORAGE_TYPE_MEMORY;
        case 2:
        case "STORAGE_TYPE_TRANSIENT":
            return StorageType.STORAGE_TYPE_TRANSIENT;
        case 3:
        case "STORAGE_TYPE_INDEX":
            return StorageType.STORAGE_TYPE_INDEX;
        case 4:
        case "STORAGE_TYPE_COMMITMENT":
            return StorageType.STORAGE_TYPE_COMMITMENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StorageType.UNRECOGNIZED;
    }
}
export function storageTypeToJSON(object) {
    switch (object) {
        case StorageType.STORAGE_TYPE_DEFAULT_UNSPECIFIED:
            return "STORAGE_TYPE_DEFAULT_UNSPECIFIED";
        case StorageType.STORAGE_TYPE_MEMORY:
            return "STORAGE_TYPE_MEMORY";
        case StorageType.STORAGE_TYPE_TRANSIENT:
            return "STORAGE_TYPE_TRANSIENT";
        case StorageType.STORAGE_TYPE_INDEX:
            return "STORAGE_TYPE_INDEX";
        case StorageType.STORAGE_TYPE_COMMITMENT:
            return "STORAGE_TYPE_COMMITMENT";
        case StorageType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseModuleSchemaDescriptor() {
    return { schemaFile: [], prefix: new Uint8Array() };
}
export const ModuleSchemaDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.schemaFile) {
            ModuleSchemaDescriptor_FileEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleSchemaDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schemaFile.push(ModuleSchemaDescriptor_FileEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.prefix = reader.bytes();
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
            schemaFile: Array.isArray(object === null || object === void 0 ? void 0 : object.schemaFile)
                ? object.schemaFile.map((e) => ModuleSchemaDescriptor_FileEntry.fromJSON(e))
                : [],
            prefix: isSet(object.prefix) ? bytesFromBase64(object.prefix) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.schemaFile) {
            obj.schemaFile = message.schemaFile.map((e) => e ? ModuleSchemaDescriptor_FileEntry.toJSON(e) : undefined);
        }
        else {
            obj.schemaFile = [];
        }
        message.prefix !== undefined &&
            (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        return obj;
    },
    create(base) {
        return ModuleSchemaDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseModuleSchemaDescriptor();
        message.schemaFile = ((_a = object.schemaFile) === null || _a === void 0 ? void 0 : _a.map((e) => ModuleSchemaDescriptor_FileEntry.fromPartial(e))) || [];
        message.prefix = (_b = object.prefix) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseModuleSchemaDescriptor_FileEntry() {
    return { id: 0, protoFileName: "", storageType: 0 };
}
export const ModuleSchemaDescriptor_FileEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.protoFileName !== "") {
            writer.uint32(18).string(message.protoFileName);
        }
        if (message.storageType !== 0) {
            writer.uint32(24).int32(message.storageType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleSchemaDescriptor_FileEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.protoFileName = reader.string();
                    break;
                case 3:
                    message.storageType = reader.int32();
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
            id: isSet(object.id) ? Number(object.id) : 0,
            protoFileName: isSet(object.protoFileName) ? String(object.protoFileName) : "",
            storageType: isSet(object.storageType) ? storageTypeFromJSON(object.storageType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.protoFileName !== undefined && (obj.protoFileName = message.protoFileName);
        message.storageType !== undefined && (obj.storageType = storageTypeToJSON(message.storageType));
        return obj;
    },
    create(base) {
        return ModuleSchemaDescriptor_FileEntry.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseModuleSchemaDescriptor_FileEntry();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.protoFileName = (_b = object.protoFileName) !== null && _b !== void 0 ? _b : "";
        message.storageType = (_c = object.storageType) !== null && _c !== void 0 ? _c : 0;
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
//# sourceMappingURL=schema.js.map