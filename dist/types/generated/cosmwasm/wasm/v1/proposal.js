/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { AccessConfig } from "./types";
export const protobufPackage = "cosmwasm.wasm.v1";
function createBaseStoreCodeProposal() {
    return { title: "", description: "", runAs: "", wasmByteCode: new Uint8Array(), instantiatePermission: undefined };
}
export const StoreCodeProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.wasmByteCode.length !== 0) {
            writer.uint32(34).bytes(message.wasmByteCode);
        }
        if (message.instantiatePermission !== undefined) {
            AccessConfig.encode(message.instantiatePermission, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreCodeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.wasmByteCode = reader.bytes();
                    break;
                case 7:
                    message.instantiatePermission = AccessConfig.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runAs: isSet(object.runAs) ? String(object.runAs) : "",
            wasmByteCode: isSet(object.wasmByteCode) ? bytesFromBase64(object.wasmByteCode) : new Uint8Array(),
            instantiatePermission: isSet(object.instantiatePermission)
                ? AccessConfig.fromJSON(object.instantiatePermission)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.runAs !== undefined && (obj.runAs = message.runAs);
        message.wasmByteCode !== undefined &&
            (obj.wasmByteCode = base64FromBytes(message.wasmByteCode !== undefined ? message.wasmByteCode : new Uint8Array()));
        message.instantiatePermission !== undefined && (obj.instantiatePermission = message.instantiatePermission
            ? AccessConfig.toJSON(message.instantiatePermission)
            : undefined);
        return obj;
    },
    create(base) {
        return StoreCodeProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseStoreCodeProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.runAs = (_c = object.runAs) !== null && _c !== void 0 ? _c : "";
        message.wasmByteCode = (_d = object.wasmByteCode) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.instantiatePermission =
            (object.instantiatePermission !== undefined && object.instantiatePermission !== null)
                ? AccessConfig.fromPartial(object.instantiatePermission)
                : undefined;
        return message;
    },
};
function createBaseInstantiateContractProposal() {
    return {
        title: "",
        description: "",
        runAs: "",
        admin: "",
        codeId: Long.UZERO,
        label: "",
        msg: new Uint8Array(),
        funds: [],
    };
}
export const InstantiateContractProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.admin !== "") {
            writer.uint32(34).string(message.admin);
        }
        if (!message.codeId.isZero()) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.label !== "") {
            writer.uint32(50).string(message.label);
        }
        if (message.msg.length !== 0) {
            writer.uint32(58).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInstantiateContractProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.admin = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
                    message.label = reader.string();
                    break;
                case 7:
                    message.msg = reader.bytes();
                    break;
                case 8:
                    message.funds.push(Coin.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runAs: isSet(object.runAs) ? String(object.runAs) : "",
            admin: isSet(object.admin) ? String(object.admin) : "",
            codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
            label: isSet(object.label) ? String(object.label) : "",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
            funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.runAs !== undefined && (obj.runAs = message.runAs);
        message.admin !== undefined && (obj.admin = message.admin);
        message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
        message.label !== undefined && (obj.label = message.label);
        message.msg !== undefined &&
            (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
        if (message.funds) {
            obj.funds = message.funds.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    create(base) {
        return InstantiateContractProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseInstantiateContractProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.runAs = (_c = object.runAs) !== null && _c !== void 0 ? _c : "";
        message.admin = (_d = object.admin) !== null && _d !== void 0 ? _d : "";
        message.codeId = (object.codeId !== undefined && object.codeId !== null)
            ? Long.fromValue(object.codeId)
            : Long.UZERO;
        message.label = (_e = object.label) !== null && _e !== void 0 ? _e : "";
        message.msg = (_f = object.msg) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.funds = ((_g = object.funds) === null || _g === void 0 ? void 0 : _g.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMigrateContractProposal() {
    return { title: "", description: "", contract: "", codeId: Long.UZERO, msg: new Uint8Array() };
}
export const MigrateContractProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        if (!message.codeId.isZero()) {
            writer.uint32(40).uint64(message.codeId);
        }
        if (message.msg.length !== 0) {
            writer.uint32(50).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMigrateContractProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                case 5:
                    message.codeId = reader.uint64();
                    break;
                case 6:
                    message.msg = reader.bytes();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contract !== undefined && (obj.contract = message.contract);
        message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
        message.msg !== undefined &&
            (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
        return obj;
    },
    create(base) {
        return MigrateContractProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMigrateContractProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.contract = (_c = object.contract) !== null && _c !== void 0 ? _c : "";
        message.codeId = (object.codeId !== undefined && object.codeId !== null)
            ? Long.fromValue(object.codeId)
            : Long.UZERO;
        message.msg = (_d = object.msg) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseSudoContractProposal() {
    return { title: "", description: "", contract: "", msg: new Uint8Array() };
}
export const SudoContractProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSudoContractProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                case 4:
                    message.msg = reader.bytes();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contract !== undefined && (obj.contract = message.contract);
        message.msg !== undefined &&
            (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
        return obj;
    },
    create(base) {
        return SudoContractProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSudoContractProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.contract = (_c = object.contract) !== null && _c !== void 0 ? _c : "";
        message.msg = (_d = object.msg) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseExecuteContractProposal() {
    return { title: "", description: "", runAs: "", contract: "", msg: new Uint8Array(), funds: [] };
}
export const ExecuteContractProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runAs !== "") {
            writer.uint32(26).string(message.runAs);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(42).bytes(message.msg);
        }
        for (const v of message.funds) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecuteContractProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runAs = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
                    break;
                case 5:
                    message.msg = reader.bytes();
                    break;
                case 6:
                    message.funds.push(Coin.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runAs: isSet(object.runAs) ? String(object.runAs) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
            funds: Array.isArray(object === null || object === void 0 ? void 0 : object.funds) ? object.funds.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.runAs !== undefined && (obj.runAs = message.runAs);
        message.contract !== undefined && (obj.contract = message.contract);
        message.msg !== undefined &&
            (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
        if (message.funds) {
            obj.funds = message.funds.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.funds = [];
        }
        return obj;
    },
    create(base) {
        return ExecuteContractProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseExecuteContractProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.runAs = (_c = object.runAs) !== null && _c !== void 0 ? _c : "";
        message.contract = (_d = object.contract) !== null && _d !== void 0 ? _d : "";
        message.msg = (_e = object.msg) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.funds = ((_f = object.funds) === null || _f === void 0 ? void 0 : _f.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUpdateAdminProposal() {
    return { title: "", description: "", newAdmin: "", contract: "" };
}
export const UpdateAdminProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        if (message.contract !== "") {
            writer.uint32(34).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateAdminProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
                    break;
                case 4:
                    message.contract = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    create(base) {
        return UpdateAdminProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseUpdateAdminProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.newAdmin = (_c = object.newAdmin) !== null && _c !== void 0 ? _c : "";
        message.contract = (_d = object.contract) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseClearAdminProposal() {
    return { title: "", description: "", contract: "" };
}
export const ClearAdminProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClearAdminProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.contract !== undefined && (obj.contract = message.contract);
        return obj;
    },
    create(base) {
        return ClearAdminProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseClearAdminProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.contract = (_c = object.contract) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBasePinCodesProposal() {
    return { title: "", description: "", codeIds: [] };
}
export const PinCodesProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePinCodesProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
                    }
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            codeIds: Array.isArray(object === null || object === void 0 ? void 0 : object.codeIds) ? object.codeIds.map((e) => Long.fromValue(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.codeIds) {
            obj.codeIds = message.codeIds.map((e) => (e || Long.UZERO).toString());
        }
        else {
            obj.codeIds = [];
        }
        return obj;
    },
    create(base) {
        return PinCodesProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePinCodesProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.codeIds = ((_c = object.codeIds) === null || _c === void 0 ? void 0 : _c.map((e) => Long.fromValue(e))) || [];
        return message;
    },
};
function createBaseUnpinCodesProposal() {
    return { title: "", description: "", codeIds: [] };
}
export const UnpinCodesProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        writer.uint32(26).fork();
        for (const v of message.codeIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnpinCodesProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.codeIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.codeIds.push(reader.uint64());
                    }
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            codeIds: Array.isArray(object === null || object === void 0 ? void 0 : object.codeIds) ? object.codeIds.map((e) => Long.fromValue(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        if (message.codeIds) {
            obj.codeIds = message.codeIds.map((e) => (e || Long.UZERO).toString());
        }
        else {
            obj.codeIds = [];
        }
        return obj;
    },
    create(base) {
        return UnpinCodesProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUnpinCodesProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.codeIds = ((_c = object.codeIds) === null || _c === void 0 ? void 0 : _c.map((e) => Long.fromValue(e))) || [];
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
//# sourceMappingURL=proposal.js.map