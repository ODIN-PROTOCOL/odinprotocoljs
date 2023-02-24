/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, TallyResult, Vote } from "./types";
export const protobufPackage = "cosmos.group.v1";
function createBaseQueryGroupInfoRequest() {
    return { groupId: Long.UZERO };
}
export const QueryGroupInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoRequest();
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
        return QueryGroupInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryGroupInfoRequest();
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        return message;
    },
};
function createBaseQueryGroupInfoResponse() {
    return { info: undefined };
}
export const QueryGroupInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.info !== undefined) {
            GroupInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = GroupInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { info: isSet(object.info) ? GroupInfo.fromJSON(object.info) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? GroupInfo.toJSON(message.info) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryGroupInfoResponse();
        message.info = (object.info !== undefined && object.info !== null) ? GroupInfo.fromPartial(object.info) : undefined;
        return message;
    },
};
function createBaseQueryGroupPolicyInfoRequest() {
    return { address: "" };
}
export const QueryGroupPolicyInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPolicyInfoRequest();
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
        return QueryGroupPolicyInfoRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryGroupPolicyInfoRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryGroupPolicyInfoResponse() {
    return { info: undefined };
}
export const QueryGroupPolicyInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.info !== undefined) {
            GroupPolicyInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPolicyInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info = GroupPolicyInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { info: isSet(object.info) ? GroupPolicyInfo.fromJSON(object.info) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.info !== undefined && (obj.info = message.info ? GroupPolicyInfo.toJSON(message.info) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupPolicyInfoResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPolicyInfoResponse();
        message.info = (object.info !== undefined && object.info !== null)
            ? GroupPolicyInfo.fromPartial(object.info)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupMembersRequest() {
    return { groupId: Long.UZERO, pagination: undefined };
}
export const QueryGroupMembersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
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
        return {
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupMembersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryGroupMembersRequest();
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupMembersResponse() {
    return { members: [], pagination: undefined };
}
export const QueryGroupMembersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.members) {
            GroupMember.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupMembersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(GroupMember.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => GroupMember.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map((e) => e ? GroupMember.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupMembersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryGroupMembersResponse();
        message.members = ((_a = object.members) === null || _a === void 0 ? void 0 : _a.map((e) => GroupMember.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupsByAdminRequest() {
    return { admin: "", pagination: undefined };
}
export const QueryGroupsByAdminRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
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
        return {
            admin: isSet(object.admin) ? String(object.admin) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupsByAdminRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryGroupsByAdminRequest();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupsByAdminResponse() {
    return { groups: [], pagination: undefined };
}
export const QueryGroupsByAdminResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.groups) {
            GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map((e) => GroupInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map((e) => e ? GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupsByAdminResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryGroupsByAdminResponse();
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => GroupInfo.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupPoliciesByGroupRequest() {
    return { groupId: Long.UZERO, pagination: undefined };
}
export const QueryGroupPoliciesByGroupRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
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
        return {
            groupId: isSet(object.groupId) ? Long.fromValue(object.groupId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupPoliciesByGroupRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryGroupPoliciesByGroupRequest();
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupPoliciesByGroupResponse() {
    return { groupPolicies: [], pagination: undefined };
}
export const QueryGroupPoliciesByGroupResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.groupPolicies) {
            GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            groupPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.groupPolicies)
                ? object.groupPolicies.map((e) => GroupPolicyInfo.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupPolicies) {
            obj.groupPolicies = message.groupPolicies.map((e) => e ? GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.groupPolicies = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupPoliciesByGroupResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryGroupPoliciesByGroupResponse();
        message.groupPolicies = ((_a = object.groupPolicies) === null || _a === void 0 ? void 0 : _a.map((e) => GroupPolicyInfo.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupPoliciesByAdminRequest() {
    return { admin: "", pagination: undefined };
}
export const QueryGroupPoliciesByAdminRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByAdminRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                case 2:
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
        return {
            admin: isSet(object.admin) ? String(object.admin) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.admin !== undefined && (obj.admin = message.admin);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupPoliciesByAdminRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryGroupPoliciesByAdminRequest();
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupPoliciesByAdminResponse() {
    return { groupPolicies: [], pagination: undefined };
}
export const QueryGroupPoliciesByAdminResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.groupPolicies) {
            GroupPolicyInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupPolicies.push(GroupPolicyInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            groupPolicies: Array.isArray(object === null || object === void 0 ? void 0 : object.groupPolicies)
                ? object.groupPolicies.map((e) => GroupPolicyInfo.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groupPolicies) {
            obj.groupPolicies = message.groupPolicies.map((e) => e ? GroupPolicyInfo.toJSON(e) : undefined);
        }
        else {
            obj.groupPolicies = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupPoliciesByAdminResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryGroupPoliciesByAdminResponse();
        message.groupPolicies = ((_a = object.groupPolicies) === null || _a === void 0 ? void 0 : _a.map((e) => GroupPolicyInfo.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryProposalRequest() {
    return { proposalId: Long.UZERO };
}
export const QueryProposalRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalRequest();
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
        return QueryProposalRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryProposalRequest();
        message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
            ? Long.fromValue(object.proposalId)
            : Long.UZERO;
        return message;
    },
};
function createBaseQueryProposalResponse() {
    return { proposal: undefined };
}
export const QueryProposalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposal !== undefined) {
            Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = Proposal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
        return obj;
    },
    create(base) {
        return QueryProposalResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryProposalResponse();
        message.proposal = (object.proposal !== undefined && object.proposal !== null)
            ? Proposal.fromPartial(object.proposal)
            : undefined;
        return message;
    },
};
function createBaseQueryProposalsByGroupPolicyRequest() {
    return { address: "", pagination: undefined };
}
export const QueryProposalsByGroupPolicyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupPolicyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
        return {
            address: isSet(object.address) ? String(object.address) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryProposalsByGroupPolicyRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryProposalsByGroupPolicyRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryProposalsByGroupPolicyResponse() {
    return { proposals: [], pagination: undefined };
}
export const QueryProposalsByGroupPolicyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals) ? object.proposals.map((e) => Proposal.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map((e) => e ? Proposal.toJSON(e) : undefined);
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryProposalsByGroupPolicyResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryProposalsByGroupPolicyResponse();
        message.proposals = ((_a = object.proposals) === null || _a === void 0 ? void 0 : _a.map((e) => Proposal.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryVoteByProposalVoterRequest() {
    return { proposalId: Long.UZERO, voter: "" };
}
export const QueryVoteByProposalVoterRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
                    message.voter = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        return obj;
    },
    create(base) {
        return QueryVoteByProposalVoterRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVoteByProposalVoterRequest();
        message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
            ? Long.fromValue(object.proposalId)
            : Long.UZERO;
        message.voter = (_a = object.voter) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryVoteByProposalVoterResponse() {
    return { vote: undefined };
}
export const QueryVoteByProposalVoterResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote !== undefined) {
            Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVoteByProposalVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = Vote.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    create(base) {
        return QueryVoteByProposalVoterResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryVoteByProposalVoterResponse();
        message.vote = (object.vote !== undefined && object.vote !== null) ? Vote.fromPartial(object.vote) : undefined;
        return message;
    },
};
function createBaseQueryVotesByProposalRequest() {
    return { proposalId: Long.UZERO, pagination: undefined };
}
export const QueryVotesByProposalRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposalId = reader.uint64();
                    break;
                case 2:
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
        return {
            proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryVotesByProposalRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryVotesByProposalRequest();
        message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
            ? Long.fromValue(object.proposalId)
            : Long.UZERO;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryVotesByProposalResponse() {
    return { votes: [], pagination: undefined };
}
export const QueryVotesByProposalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map((e) => e ? Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryVotesByProposalResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVotesByProposalResponse();
        message.votes = ((_a = object.votes) === null || _a === void 0 ? void 0 : _a.map((e) => Vote.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryVotesByVoterRequest() {
    return { voter: "", pagination: undefined };
}
export const QueryVotesByVoterRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.voter !== "") {
            writer.uint32(10).string(message.voter);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voter = reader.string();
                    break;
                case 2:
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
        return {
            voter: isSet(object.voter) ? String(object.voter) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.voter !== undefined && (obj.voter = message.voter);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryVotesByVoterRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVotesByVoterRequest();
        message.voter = (_a = object.voter) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryVotesByVoterResponse() {
    return { votes: [], pagination: undefined };
}
export const QueryVotesByVoterResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryVotesByVoterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            votes: Array.isArray(object === null || object === void 0 ? void 0 : object.votes) ? object.votes.map((e) => Vote.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.votes) {
            obj.votes = message.votes.map((e) => e ? Vote.toJSON(e) : undefined);
        }
        else {
            obj.votes = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryVotesByVoterResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryVotesByVoterResponse();
        message.votes = ((_a = object.votes) === null || _a === void 0 ? void 0 : _a.map((e) => Vote.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupsByMemberRequest() {
    return { address: "", pagination: undefined };
}
export const QueryGroupsByMemberRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
        return {
            address: isSet(object.address) ? String(object.address) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupsByMemberRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryGroupsByMemberRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryGroupsByMemberResponse() {
    return { groups: [], pagination: undefined };
}
export const QueryGroupsByMemberResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.groups) {
            GroupInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGroupsByMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groups.push(GroupInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            groups: Array.isArray(object === null || object === void 0 ? void 0 : object.groups) ? object.groups.map((e) => GroupInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.groups) {
            obj.groups = message.groups.map((e) => e ? GroupInfo.toJSON(e) : undefined);
        }
        else {
            obj.groups = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryGroupsByMemberResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryGroupsByMemberResponse();
        message.groups = ((_a = object.groups) === null || _a === void 0 ? void 0 : _a.map((e) => GroupInfo.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryTallyResultRequest() {
    return { proposalId: Long.UZERO };
}
export const QueryTallyResultRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.proposalId.isZero()) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultRequest();
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
        return QueryTallyResultRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultRequest();
        message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
            ? Long.fromValue(object.proposalId)
            : Long.UZERO;
        return message;
    },
};
function createBaseQueryTallyResultResponse() {
    return { tally: undefined };
}
export const QueryTallyResultResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tally !== undefined) {
            TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTallyResultResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tally = TallyResult.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { tally: isSet(object.tally) ? TallyResult.fromJSON(object.tally) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : undefined);
        return obj;
    },
    create(base) {
        return QueryTallyResultResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryTallyResultResponse();
        message.tally = (object.tally !== undefined && object.tally !== null)
            ? TallyResult.fromPartial(object.tally)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.group.v1.Query";
        this.rpc = rpc;
        this.GroupInfo = this.GroupInfo.bind(this);
        this.GroupPolicyInfo = this.GroupPolicyInfo.bind(this);
        this.GroupMembers = this.GroupMembers.bind(this);
        this.GroupsByAdmin = this.GroupsByAdmin.bind(this);
        this.GroupPoliciesByGroup = this.GroupPoliciesByGroup.bind(this);
        this.GroupPoliciesByAdmin = this.GroupPoliciesByAdmin.bind(this);
        this.Proposal = this.Proposal.bind(this);
        this.ProposalsByGroupPolicy = this.ProposalsByGroupPolicy.bind(this);
        this.VoteByProposalVoter = this.VoteByProposalVoter.bind(this);
        this.VotesByProposal = this.VotesByProposal.bind(this);
        this.VotesByVoter = this.VotesByVoter.bind(this);
        this.GroupsByMember = this.GroupsByMember.bind(this);
        this.TallyResult = this.TallyResult.bind(this);
    }
    GroupInfo(request) {
        const data = QueryGroupInfoRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GroupInfo", data);
        return promise.then((data) => QueryGroupInfoResponse.decode(new _m0.Reader(data)));
    }
    GroupPolicyInfo(request) {
        const data = QueryGroupPolicyInfoRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GroupPolicyInfo", data);
        return promise.then((data) => QueryGroupPolicyInfoResponse.decode(new _m0.Reader(data)));
    }
    GroupMembers(request) {
        const data = QueryGroupMembersRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GroupMembers", data);
        return promise.then((data) => QueryGroupMembersResponse.decode(new _m0.Reader(data)));
    }
    GroupsByAdmin(request) {
        const data = QueryGroupsByAdminRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GroupsByAdmin", data);
        return promise.then((data) => QueryGroupsByAdminResponse.decode(new _m0.Reader(data)));
    }
    GroupPoliciesByGroup(request) {
        const data = QueryGroupPoliciesByGroupRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GroupPoliciesByGroup", data);
        return promise.then((data) => QueryGroupPoliciesByGroupResponse.decode(new _m0.Reader(data)));
    }
    GroupPoliciesByAdmin(request) {
        const data = QueryGroupPoliciesByAdminRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GroupPoliciesByAdmin", data);
        return promise.then((data) => QueryGroupPoliciesByAdminResponse.decode(new _m0.Reader(data)));
    }
    Proposal(request) {
        const data = QueryProposalRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Proposal", data);
        return promise.then((data) => QueryProposalResponse.decode(new _m0.Reader(data)));
    }
    ProposalsByGroupPolicy(request) {
        const data = QueryProposalsByGroupPolicyRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ProposalsByGroupPolicy", data);
        return promise.then((data) => QueryProposalsByGroupPolicyResponse.decode(new _m0.Reader(data)));
    }
    VoteByProposalVoter(request) {
        const data = QueryVoteByProposalVoterRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "VoteByProposalVoter", data);
        return promise.then((data) => QueryVoteByProposalVoterResponse.decode(new _m0.Reader(data)));
    }
    VotesByProposal(request) {
        const data = QueryVotesByProposalRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "VotesByProposal", data);
        return promise.then((data) => QueryVotesByProposalResponse.decode(new _m0.Reader(data)));
    }
    VotesByVoter(request) {
        const data = QueryVotesByVoterRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "VotesByVoter", data);
        return promise.then((data) => QueryVotesByVoterResponse.decode(new _m0.Reader(data)));
    }
    GroupsByMember(request) {
        const data = QueryGroupsByMemberRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GroupsByMember", data);
        return promise.then((data) => QueryGroupsByMemberResponse.decode(new _m0.Reader(data)));
    }
    TallyResult(request) {
        const data = QueryTallyResultRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "TallyResult", data);
        return promise.then((data) => QueryTallyResultResponse.decode(new _m0.Reader(data)));
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