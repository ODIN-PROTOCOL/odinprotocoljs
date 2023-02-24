/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Member, voteOptionFromJSON, voteOptionToJSON } from "./types";
export const protobufPackage = "cosmos.group.v1";
/** Exec defines modes of execution of a proposal on creation or on new vote. */
export var Exec;
(function (Exec) {
    /**
     * EXEC_UNSPECIFIED - An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     */
    Exec[Exec["EXEC_UNSPECIFIED"] = 0] = "EXEC_UNSPECIFIED";
    /**
     * EXEC_TRY - Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     */
    Exec[Exec["EXEC_TRY"] = 1] = "EXEC_TRY";
    Exec[Exec["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Exec || (Exec = {}));
export function execFromJSON(object) {
    switch (object) {
        case 0:
        case "EXEC_UNSPECIFIED":
            return Exec.EXEC_UNSPECIFIED;
        case 1:
        case "EXEC_TRY":
            return Exec.EXEC_TRY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Exec.UNRECOGNIZED;
    }
}
export function execToJSON(object) {
    switch (object) {
        case Exec.EXEC_UNSPECIFIED:
            return "EXEC_UNSPECIFIED";
        case Exec.EXEC_TRY:
            return "EXEC_TRY";
        case Exec.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMsgCreateGroup() {
    return { admin: "", members: [], metadata: "" };
}
export const MsgCreateGroup = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(Member.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => Member.fromJSON(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map((e) => e ? Member.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    create(base) {
        return MsgCreateGroup.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreateGroup();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.members = ((_b = object.members) === null || _b === void 0 ? void 0 : _b.map((e) => Member.fromPartial(e))) || [];
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgCreateGroupResponse() {
    return { groupId: Long.UZERO };
}
export const MsgCreateGroupResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return MsgCreateGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateGroupResponse();
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        return message;
    },
};
function createBaseMsgUpdateGroupMembers() {
    return { admin: "", groupId: Long.UZERO, memberUpdates: [] };
}
export const MsgUpdateGroupMembers = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        for (const v of message.memberUpdates) {
            Member.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.memberUpdates.push(Member.decode(reader, reader.uint32()));
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            memberUpdates: Array.isArray(object === null || object === void 0 ? void 0 : object.memberUpdates)
                ? object.memberUpdates.map((e) => Member.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        if (message.memberUpdates) {
            obj.memberUpdates = message.memberUpdates.map((e) => e ? Member.toJSON(e) : undefined);
        }
        else {
            obj.memberUpdates = [];
        }
        return obj;
    },
    create(base) {
        return MsgUpdateGroupMembers.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateGroupMembers();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        message.memberUpdates = ((_b = object.memberUpdates) === null || _b === void 0 ? void 0 : _b.map((e) => Member.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgUpdateGroupMembersResponse() {
    return {};
}
export const MsgUpdateGroupMembersResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMembersResponse();
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
        return MsgUpdateGroupMembersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMembersResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupAdmin() {
    return { admin: "", groupId: Long.UZERO, newAdmin: "" };
}
export const MsgUpdateGroupAdmin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.newAdmin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        return obj;
    },
    create(base) {
        return MsgUpdateGroupAdmin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateGroupAdmin();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        message.newAdmin = (_b = object.newAdmin) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdateGroupAdminResponse() {
    return {};
}
export const MsgUpdateGroupAdminResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupAdminResponse();
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
        return MsgUpdateGroupAdminResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupAdminResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupMetadata() {
    return { admin: "", groupId: Long.UZERO, metadata: "" };
}
export const MsgUpdateGroupMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    create(base) {
        return MsgUpdateGroupMetadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateGroupMetadata();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        message.metadata = (_b = object.metadata) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdateGroupMetadataResponse() {
    return {};
}
export const MsgUpdateGroupMetadataResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupMetadataResponse();
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
        return MsgUpdateGroupMetadataResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupMetadataResponse();
        return message;
    },
};
function createBaseMsgCreateGroupPolicy() {
    return { admin: "", groupId: Long.UZERO, metadata: "", decisionPolicy: undefined };
}
export const MsgCreateGroupPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.decisionPolicy !== undefined &&
            (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateGroupPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgCreateGroupPolicy();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        message.metadata = (_b = object.metadata) !== null && _b !== void 0 ? _b : "";
        message.decisionPolicy = (object.decisionPolicy !== undefined && object.decisionPolicy !== null)
            ? Any.fromPartial(object.decisionPolicy)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateGroupPolicyResponse() {
    return { address: "" };
}
export const MsgCreateGroupPolicyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { address: isSet(object.address) ? String(object.address) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    create(base) {
        return MsgCreateGroupPolicyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateGroupPolicyResponse();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyAdmin() {
    return { admin: "", address: "", newAdmin: "" };
}
export const MsgUpdateGroupPolicyAdmin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.newAdmin !== "") {
            writer.uint32(26).string(message.newAdmin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.newAdmin = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            address: isSet(object.address) ? String(object.address) : "",
            newAdmin: isSet(object.newAdmin) ? String(object.newAdmin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
        return obj;
    },
    create(base) {
        return MsgUpdateGroupPolicyAdmin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUpdateGroupPolicyAdmin();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.newAdmin = (_c = object.newAdmin) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgCreateGroupWithPolicy() {
    return {
        admin: "",
        members: [],
        groupMetadata: "",
        groupPolicyMetadata: "",
        groupPolicyAsAdmin: false,
        decisionPolicy: undefined,
    };
}
export const MsgCreateGroupWithPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        for (const v of message.members) {
            Member.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.groupMetadata !== "") {
            writer.uint32(26).string(message.groupMetadata);
        }
        if (message.groupPolicyMetadata !== "") {
            writer.uint32(34).string(message.groupPolicyMetadata);
        }
        if (message.groupPolicyAsAdmin === true) {
            writer.uint32(40).bool(message.groupPolicyAsAdmin);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.members.push(Member.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.groupMetadata = reader.string();
                    break;
                case 4:
                    message.groupPolicyMetadata = reader.string();
                    break;
                case 5:
                    message.groupPolicyAsAdmin = reader.bool();
                    break;
                case 6:
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => Member.fromJSON(e)) : [],
            groupMetadata: isSet(object.groupMetadata) ? String(object.groupMetadata) : "",
            groupPolicyMetadata: isSet(object.groupPolicyMetadata) ? String(object.groupPolicyMetadata) : "",
            groupPolicyAsAdmin: isSet(object.groupPolicyAsAdmin) ? Boolean(object.groupPolicyAsAdmin) : false,
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        if (message.members) {
            obj.members = message.members.map((e) => e ? Member.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.groupMetadata !== undefined && (obj.groupMetadata = message.groupMetadata);
        message.groupPolicyMetadata !== undefined && (obj.groupPolicyMetadata = message.groupPolicyMetadata);
        message.groupPolicyAsAdmin !== undefined && (obj.groupPolicyAsAdmin = message.groupPolicyAsAdmin);
        message.decisionPolicy !== undefined &&
            (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateGroupWithPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgCreateGroupWithPolicy();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.members = ((_b = object.members) === null || _b === void 0 ? void 0 : _b.map((e) => Member.fromPartial(e))) || [];
        message.groupMetadata = (_c = object.groupMetadata) !== null && _c !== void 0 ? _c : "";
        message.groupPolicyMetadata = (_d = object.groupPolicyMetadata) !== null && _d !== void 0 ? _d : "";
        message.groupPolicyAsAdmin = (_e = object.groupPolicyAsAdmin) !== null && _e !== void 0 ? _e : false;
        message.decisionPolicy = (object.decisionPolicy !== undefined && object.decisionPolicy !== null)
            ? Any.fromPartial(object.decisionPolicy)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateGroupWithPolicyResponse() {
    return { groupId: Long.UZERO, groupPolicyAddress: "" };
}
export const MsgCreateGroupWithPolicyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.groupPolicyAddress !== "") {
            writer.uint32(18).string(message.groupPolicyAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.groupPolicyAddress = reader.string();
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
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            groupPolicyAddress: isSet(object.groupPolicyAddress) ? String(object.groupPolicyAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.groupPolicyAddress !== undefined && (obj.groupPolicyAddress = message.groupPolicyAddress);
        return obj;
    },
    create(base) {
        return MsgCreateGroupWithPolicyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateGroupWithPolicyResponse();
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        message.groupPolicyAddress = (_a = object.groupPolicyAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyAdminResponse() {
    return {};
}
export const MsgUpdateGroupPolicyAdminResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
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
        return MsgUpdateGroupPolicyAdminResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyAdminResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyDecisionPolicy() {
    return { admin: "", address: "", decisionPolicy: undefined };
}
export const MsgUpdateGroupPolicyDecisionPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            address: isSet(object.address) ? String(object.address) : "",
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.decisionPolicy !== undefined &&
            (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        return obj;
    },
    create(base) {
        return MsgUpdateGroupPolicyDecisionPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicy();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.decisionPolicy = (object.decisionPolicy !== undefined && object.decisionPolicy !== null)
            ? Any.fromPartial(object.decisionPolicy)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyDecisionPolicyResponse() {
    return {};
}
export const MsgUpdateGroupPolicyDecisionPolicyResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
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
        return MsgUpdateGroupPolicyDecisionPolicyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyDecisionPolicyResponse();
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyMetadata() {
    return { admin: "", address: "", metadata: "" };
}
export const MsgUpdateGroupPolicyMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            address: isSet(object.address) ? String(object.address) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.address !== undefined && (obj.address = message.address);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        return obj;
    },
    create(base) {
        return MsgUpdateGroupPolicyMetadata.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUpdateGroupPolicyMetadata();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgUpdateGroupPolicyMetadataResponse() {
    return {};
}
export const MsgUpdateGroupPolicyMetadataResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
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
        return MsgUpdateGroupPolicyMetadataResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgUpdateGroupPolicyMetadataResponse();
        return message;
    },
};
function createBaseMsgSubmitProposal() {
    return { address: "", proposers: [], metadata: "", messages: [], exec: 0 };
}
export const MsgSubmitProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.proposers) {
            writer.uint32(18).string(v);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.proposers.push(reader.string());
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.messages.push(Any.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.exec = reader.int32();
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
            address: isSet(object.address) ? String(object.address) : "",
            proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map((e) => String(e)) : [],
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
            exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.proposers) {
            obj.proposers = message.proposers.map((e) => e);
        }
        else {
            obj.proposers = [];
        }
        message.metadata !== undefined && (obj.metadata = message.metadata);
        if (message.messages) {
            obj.messages = message.messages.map((e) => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        return obj;
    },
    create(base) {
        return MsgSubmitProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgSubmitProposal();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.proposers = ((_b = object.proposers) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.messages = ((_d = object.messages) === null || _d === void 0 ? void 0 : _d.map((e) => Any.fromPartial(e))) || [];
        message.exec = (_e = object.exec) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseMsgSubmitProposalResponse() {
    return { proposalId: Long.UZERO };
}
export const MsgSubmitProposalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return MsgSubmitProposalResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
            ? Long.fromValue(object.proposalId)
            : Long.UZERO;
        return message;
    },
};
function createBaseMsgWithdrawProposal() {
    return { proposalId: Long.UZERO, address: "" };
}
export const MsgWithdrawProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            address: isSet(object.address) ? String(object.address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    create(base) {
        return MsgWithdrawProposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgWithdrawProposal();
        message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
            ? Long.fromValue(object.proposalId)
            : Long.UZERO;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgWithdrawProposalResponse() {
    return {};
}
export const MsgWithdrawProposalResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawProposalResponse();
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
        return MsgWithdrawProposalResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgWithdrawProposalResponse();
        return message;
    },
};
function createBaseMsgVote() {
    return { proposalId: Long.UZERO, voter: "", option: 0, metadata: "", exec: 0 };
}
export const MsgVote = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (message.exec !== 0) {
            writer.uint32(40).int32(message.exec);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.exec = reader.int32();
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            voter: isSet(object.voter) ? String(object.voter) : "",
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            exec: isSet(object.exec) ? execFromJSON(object.exec) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.exec !== undefined && (obj.exec = execToJSON(message.exec));
        return obj;
    },
    create(base) {
        return MsgVote.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgVote();
        message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
            ? Long.fromValue(object.proposalId)
            : Long.UZERO;
        message.voter = (_a = object.voter) !== null && _a !== void 0 ? _a : "";
        message.option = (_b = object.option) !== null && _b !== void 0 ? _b : 0;
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.exec = (_d = object.exec) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseMsgVoteResponse() {
    return {};
}
export const MsgVoteResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVoteResponse();
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
        return MsgVoteResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
};
function createBaseMsgExec() {
    return { proposalId: Long.UZERO, signer: "" };
}
export const MsgExec = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.signer !== "") {
            writer.uint32(18).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.signer = reader.string();
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
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    create(base) {
        return MsgExec.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgExec();
        message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
            ? Long.fromValue(object.proposalId)
            : Long.UZERO;
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgExecResponse() {
    return {};
}
export const MsgExecResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
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
        return MsgExecResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgExecResponse();
        return message;
    },
};
function createBaseMsgLeaveGroup() {
    return { address: "", groupId: Long.UZERO };
}
export const MsgLeaveGroup = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroup();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
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
            address: isSet(object.address) ? String(object.address) : "",
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return MsgLeaveGroup.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgLeaveGroup();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        return message;
    },
};
function createBaseMsgLeaveGroupResponse() {
    return {};
}
export const MsgLeaveGroupResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgLeaveGroupResponse();
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
        return MsgLeaveGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgLeaveGroupResponse();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.group.v1.Msg";
        this.rpc = rpc;
        this.CreateGroup = this.CreateGroup.bind(this);
        this.UpdateGroupMembers = this.UpdateGroupMembers.bind(this);
        this.UpdateGroupAdmin = this.UpdateGroupAdmin.bind(this);
        this.UpdateGroupMetadata = this.UpdateGroupMetadata.bind(this);
        this.CreateGroupPolicy = this.CreateGroupPolicy.bind(this);
        this.CreateGroupWithPolicy = this.CreateGroupWithPolicy.bind(this);
        this.UpdateGroupPolicyAdmin = this.UpdateGroupPolicyAdmin.bind(this);
        this.UpdateGroupPolicyDecisionPolicy = this.UpdateGroupPolicyDecisionPolicy.bind(this);
        this.UpdateGroupPolicyMetadata = this.UpdateGroupPolicyMetadata.bind(this);
        this.SubmitProposal = this.SubmitProposal.bind(this);
        this.WithdrawProposal = this.WithdrawProposal.bind(this);
        this.Vote = this.Vote.bind(this);
        this.Exec = this.Exec.bind(this);
        this.LeaveGroup = this.LeaveGroup.bind(this);
    }
    CreateGroup(request) {
        const data = MsgCreateGroup.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateGroup", data);
        return promise.then((data) => MsgCreateGroupResponse.decode(new _m0.Reader(data)));
    }
    UpdateGroupMembers(request) {
        const data = MsgUpdateGroupMembers.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupMembers", data);
        return promise.then((data) => MsgUpdateGroupMembersResponse.decode(new _m0.Reader(data)));
    }
    UpdateGroupAdmin(request) {
        const data = MsgUpdateGroupAdmin.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupAdmin", data);
        return promise.then((data) => MsgUpdateGroupAdminResponse.decode(new _m0.Reader(data)));
    }
    UpdateGroupMetadata(request) {
        const data = MsgUpdateGroupMetadata.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupMetadata", data);
        return promise.then((data) => MsgUpdateGroupMetadataResponse.decode(new _m0.Reader(data)));
    }
    CreateGroupPolicy(request) {
        const data = MsgCreateGroupPolicy.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateGroupPolicy", data);
        return promise.then((data) => MsgCreateGroupPolicyResponse.decode(new _m0.Reader(data)));
    }
    CreateGroupWithPolicy(request) {
        const data = MsgCreateGroupWithPolicy.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateGroupWithPolicy", data);
        return promise.then((data) => MsgCreateGroupWithPolicyResponse.decode(new _m0.Reader(data)));
    }
    UpdateGroupPolicyAdmin(request) {
        const data = MsgUpdateGroupPolicyAdmin.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupPolicyAdmin", data);
        return promise.then((data) => MsgUpdateGroupPolicyAdminResponse.decode(new _m0.Reader(data)));
    }
    UpdateGroupPolicyDecisionPolicy(request) {
        const data = MsgUpdateGroupPolicyDecisionPolicy.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupPolicyDecisionPolicy", data);
        return promise.then((data) => MsgUpdateGroupPolicyDecisionPolicyResponse.decode(new _m0.Reader(data)));
    }
    UpdateGroupPolicyMetadata(request) {
        const data = MsgUpdateGroupPolicyMetadata.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateGroupPolicyMetadata", data);
        return promise.then((data) => MsgUpdateGroupPolicyMetadataResponse.decode(new _m0.Reader(data)));
    }
    SubmitProposal(request) {
        const data = MsgSubmitProposal.encode(request).finish();
        const promise = this.rpc.request(this.service, "SubmitProposal", data);
        return promise.then((data) => MsgSubmitProposalResponse.decode(new _m0.Reader(data)));
    }
    WithdrawProposal(request) {
        const data = MsgWithdrawProposal.encode(request).finish();
        const promise = this.rpc.request(this.service, "WithdrawProposal", data);
        return promise.then((data) => MsgWithdrawProposalResponse.decode(new _m0.Reader(data)));
    }
    Vote(request) {
        const data = MsgVote.encode(request).finish();
        const promise = this.rpc.request(this.service, "Vote", data);
        return promise.then((data) => MsgVoteResponse.decode(new _m0.Reader(data)));
    }
    Exec(request) {
        const data = MsgExec.encode(request).finish();
        const promise = this.rpc.request(this.service, "Exec", data);
        return promise.then((data) => MsgExecResponse.decode(new _m0.Reader(data)));
    }
    LeaveGroup(request) {
        const data = MsgLeaveGroup.encode(request).finish();
        const promise = this.rpc.request(this.service, "LeaveGroup", data);
        return promise.then((data) => MsgLeaveGroupResponse.decode(new _m0.Reader(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map