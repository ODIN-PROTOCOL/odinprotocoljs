/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
export const protobufPackage = "cosmos.group.v1";
/** VoteOption enumerates the valid vote options for a given proposal. */
export var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption || (VoteOption = {}));
export function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_OPTION_UNSPECIFIED":
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case "VOTE_OPTION_YES":
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case "VOTE_OPTION_ABSTAIN":
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case "VOTE_OPTION_NO":
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case "VOTE_OPTION_NO_WITH_VETO":
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
export function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return "VOTE_OPTION_UNSPECIFIED";
        case VoteOption.VOTE_OPTION_YES:
            return "VOTE_OPTION_YES";
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return "VOTE_OPTION_ABSTAIN";
        case VoteOption.VOTE_OPTION_NO:
            return "VOTE_OPTION_NO";
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return "VOTE_OPTION_NO_WITH_VETO";
        case VoteOption.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ProposalStatus defines proposal statuses. */
export var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when persisted. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_SUBMITTED"] = 1] = "PROPOSAL_STATUS_SUBMITTED";
    /** PROPOSAL_STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_CLOSED"] = 2] = "PROPOSAL_STATUS_CLOSED";
    /** PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group was modified before the final tally. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_ABORTED"] = 3] = "PROPOSAL_STATUS_ABORTED";
    /**
     * PROPOSAL_STATUS_WITHDRAWN - A proposal can be deleted before the voting start time by the owner. When this happens the final status
     * is Withdrawn.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_WITHDRAWN"] = 4] = "PROPOSAL_STATUS_WITHDRAWN";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus || (ProposalStatus = {}));
export function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_STATUS_UNSPECIFIED":
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case "PROPOSAL_STATUS_SUBMITTED":
            return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
        case 2:
        case "PROPOSAL_STATUS_CLOSED":
            return ProposalStatus.PROPOSAL_STATUS_CLOSED;
        case 3:
        case "PROPOSAL_STATUS_ABORTED":
            return ProposalStatus.PROPOSAL_STATUS_ABORTED;
        case 4:
        case "PROPOSAL_STATUS_WITHDRAWN":
            return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
export function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return "PROPOSAL_STATUS_UNSPECIFIED";
        case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
            return "PROPOSAL_STATUS_SUBMITTED";
        case ProposalStatus.PROPOSAL_STATUS_CLOSED:
            return "PROPOSAL_STATUS_CLOSED";
        case ProposalStatus.PROPOSAL_STATUS_ABORTED:
            return "PROPOSAL_STATUS_ABORTED";
        case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
            return "PROPOSAL_STATUS_WITHDRAWN";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ProposalResult defines types of proposal results. */
export var ProposalResult;
(function (ProposalResult) {
    /** PROPOSAL_RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_RESULT_UNSPECIFIED";
    /** PROPOSAL_RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_UNFINALIZED"] = 1] = "PROPOSAL_RESULT_UNFINALIZED";
    /** PROPOSAL_RESULT_ACCEPTED - Final result of the tally */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_ACCEPTED"] = 2] = "PROPOSAL_RESULT_ACCEPTED";
    /** PROPOSAL_RESULT_REJECTED - Final result of the tally */
    ProposalResult[ProposalResult["PROPOSAL_RESULT_REJECTED"] = 3] = "PROPOSAL_RESULT_REJECTED";
    ProposalResult[ProposalResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalResult || (ProposalResult = {}));
export function proposalResultFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_RESULT_UNSPECIFIED":
            return ProposalResult.PROPOSAL_RESULT_UNSPECIFIED;
        case 1:
        case "PROPOSAL_RESULT_UNFINALIZED":
            return ProposalResult.PROPOSAL_RESULT_UNFINALIZED;
        case 2:
        case "PROPOSAL_RESULT_ACCEPTED":
            return ProposalResult.PROPOSAL_RESULT_ACCEPTED;
        case 3:
        case "PROPOSAL_RESULT_REJECTED":
            return ProposalResult.PROPOSAL_RESULT_REJECTED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalResult.UNRECOGNIZED;
    }
}
export function proposalResultToJSON(object) {
    switch (object) {
        case ProposalResult.PROPOSAL_RESULT_UNSPECIFIED:
            return "PROPOSAL_RESULT_UNSPECIFIED";
        case ProposalResult.PROPOSAL_RESULT_UNFINALIZED:
            return "PROPOSAL_RESULT_UNFINALIZED";
        case ProposalResult.PROPOSAL_RESULT_ACCEPTED:
            return "PROPOSAL_RESULT_ACCEPTED";
        case ProposalResult.PROPOSAL_RESULT_REJECTED:
            return "PROPOSAL_RESULT_REJECTED";
        case ProposalResult.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** ProposalExecutorResult defines types of proposal executor results. */
export var ProposalExecutorResult;
(function (ProposalExecutorResult) {
    /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED"] = 0] = "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_NOT_RUN"] = 1] = "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_SUCCESS"] = 2] = "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    ProposalExecutorResult[ProposalExecutorResult["PROPOSAL_EXECUTOR_RESULT_FAILURE"] = 3] = "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    ProposalExecutorResult[ProposalExecutorResult["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalExecutorResult || (ProposalExecutorResult = {}));
export function proposalExecutorResultFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
        case 1:
        case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
        case 2:
        case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
        case 3:
        case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
            return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalExecutorResult.UNRECOGNIZED;
    }
}
export function proposalExecutorResultToJSON(object) {
    switch (object) {
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
            return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
            return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
            return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
        case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
            return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
        case ProposalExecutorResult.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseMember() {
    return { address: "", weight: "", metadata: "", addedAt: undefined };
}
export const Member = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (message.addedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.addedAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.addedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            weight: isSet(object.weight) ? String(object.weight) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            addedAt: isSet(object.addedAt) ? fromJsonTimestamp(object.addedAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.weight !== undefined && (obj.weight = message.weight);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.addedAt !== undefined && (obj.addedAt = message.addedAt.toISOString());
        return obj;
    },
    create(base) {
        return Member.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMember();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.weight = (_b = object.weight) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.addedAt = (_d = object.addedAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseMembers() {
    return { members: [] };
}
export const Members = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.members) {
            Member.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMembers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.members.push(Member.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => Member.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.members) {
            obj.members = message.members.map((e) => e ? Member.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        return obj;
    },
    create(base) {
        return Members.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMembers();
        message.members = ((_a = object.members) === null || _a === void 0 ? void 0 : _a.map((e) => Member.fromPartial(e))) || [];
        return message;
    },
};
function createBaseThresholdDecisionPolicy() {
    return { threshold: "", windows: undefined };
}
export const ThresholdDecisionPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.threshold !== "") {
            writer.uint32(10).string(message.threshold);
        }
        if (message.windows !== undefined) {
            DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseThresholdDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.string();
                    break;
                case 2:
                    message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
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
            threshold: isSet(object.threshold) ? String(object.threshold) : "",
            windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.threshold !== undefined && (obj.threshold = message.threshold);
        message.windows !== undefined &&
            (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
        return obj;
    },
    create(base) {
        return ThresholdDecisionPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseThresholdDecisionPolicy();
        message.threshold = (_a = object.threshold) !== null && _a !== void 0 ? _a : "";
        message.windows = (object.windows !== undefined && object.windows !== null)
            ? DecisionPolicyWindows.fromPartial(object.windows)
            : undefined;
        return message;
    },
};
function createBasePercentageDecisionPolicy() {
    return { percentage: "", windows: undefined };
}
export const PercentageDecisionPolicy = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.percentage !== "") {
            writer.uint32(10).string(message.percentage);
        }
        if (message.windows !== undefined) {
            DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePercentageDecisionPolicy();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.percentage = reader.string();
                    break;
                case 2:
                    message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
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
            percentage: isSet(object.percentage) ? String(object.percentage) : "",
            windows: isSet(object.windows) ? DecisionPolicyWindows.fromJSON(object.windows) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.percentage !== undefined && (obj.percentage = message.percentage);
        message.windows !== undefined &&
            (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
        return obj;
    },
    create(base) {
        return PercentageDecisionPolicy.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePercentageDecisionPolicy();
        message.percentage = (_a = object.percentage) !== null && _a !== void 0 ? _a : "";
        message.windows = (object.windows !== undefined && object.windows !== null)
            ? DecisionPolicyWindows.fromPartial(object.windows)
            : undefined;
        return message;
    },
};
function createBaseDecisionPolicyWindows() {
    return { votingPeriod: undefined, minExecutionPeriod: undefined };
}
export const DecisionPolicyWindows = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.votingPeriod !== undefined) {
            Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
        }
        if (message.minExecutionPeriod !== undefined) {
            Duration.encode(message.minExecutionPeriod, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecisionPolicyWindows();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.votingPeriod = Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.minExecutionPeriod = Duration.decode(reader, reader.uint32());
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
            votingPeriod: isSet(object.votingPeriod) ? Duration.fromJSON(object.votingPeriod) : undefined,
            minExecutionPeriod: isSet(object.minExecutionPeriod) ? Duration.fromJSON(object.minExecutionPeriod) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.votingPeriod !== undefined &&
            (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : undefined);
        message.minExecutionPeriod !== undefined &&
            (obj.minExecutionPeriod = message.minExecutionPeriod ? Duration.toJSON(message.minExecutionPeriod) : undefined);
        return obj;
    },
    create(base) {
        return DecisionPolicyWindows.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseDecisionPolicyWindows();
        message.votingPeriod = (object.votingPeriod !== undefined && object.votingPeriod !== null)
            ? Duration.fromPartial(object.votingPeriod)
            : undefined;
        message.minExecutionPeriod = (object.minExecutionPeriod !== undefined && object.minExecutionPeriod !== null)
            ? Duration.fromPartial(object.minExecutionPeriod)
            : undefined;
        return message;
    },
};
function createBaseGroupInfo() {
    return { id: Long.UZERO, admin: "", metadata: "", version: Long.UZERO, totalWeight: "", createdAt: undefined };
}
export const GroupInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.admin !== "") {
            writer.uint32(18).string(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        if (!message.version.isZero()) {
            writer.uint32(32).uint64(message.version);
        }
        if (message.totalWeight !== "") {
            writer.uint32(42).string(message.totalWeight);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.admin = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.version = reader.uint64();
                    break;
                case 5:
                    message.totalWeight = reader.string();
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
            admin: isSet(object.admin) ? String(object.admin) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
            totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
        message.admin !== undefined && (obj.admin = message.admin);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
        message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    create(base) {
        return GroupInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGroupInfo();
        message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
        message.admin = (_a = object.admin) !== null && _a !== void 0 ? _a : "";
        message.metadata = (_b = object.metadata) !== null && _b !== void 0 ? _b : "";
        message.version = (object.version !== undefined && object.version !== null)
            ? Long.fromValue(object.version)
            : Long.UZERO;
        message.totalWeight = (_c = object.totalWeight) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseGroupMember() {
    return { groupId: Long.UZERO, member: undefined };
}
export const GroupMember = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.groupId.isZero()) {
            writer.uint32(8).uint64(message.groupId);
        }
        if (message.member !== undefined) {
            Member.encode(message.member, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint64();
                    break;
                case 2:
                    message.member = Member.decode(reader, reader.uint32());
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
            member: isSet(object.member) ? Member.fromJSON(object.member) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.member !== undefined && (obj.member = message.member ? Member.toJSON(message.member) : undefined);
        return obj;
    },
    create(base) {
        return GroupMember.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGroupMember();
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        message.member = (object.member !== undefined && object.member !== null)
            ? Member.fromPartial(object.member)
            : undefined;
        return message;
    },
};
function createBaseGroupPolicyInfo() {
    return {
        address: "",
        groupId: Long.UZERO,
        admin: "",
        metadata: "",
        version: Long.UZERO,
        decisionPolicy: undefined,
        createdAt: undefined,
    };
}
export const GroupPolicyInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.groupId.isZero()) {
            writer.uint32(16).uint64(message.groupId);
        }
        if (message.admin !== "") {
            writer.uint32(26).string(message.admin);
        }
        if (message.metadata !== "") {
            writer.uint32(34).string(message.metadata);
        }
        if (!message.version.isZero()) {
            writer.uint32(40).uint64(message.version);
        }
        if (message.decisionPolicy !== undefined) {
            Any.encode(message.decisionPolicy, writer.uint32(50).fork()).ldelim();
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGroupPolicyInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.groupId = reader.uint64();
                    break;
                case 3:
                    message.admin = reader.string();
                    break;
                case 4:
                    message.metadata = reader.string();
                    break;
                case 5:
                    message.version = reader.uint64();
                    break;
                case 6:
                    message.decisionPolicy = Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            admin: isSet(object.admin) ? String(object.admin) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            version: isSet(object.version) ? Long.fromValue(object.version) : Long.UZERO,
            decisionPolicy: isSet(object.decisionPolicy) ? Any.fromJSON(object.decisionPolicy) : undefined,
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
        message.admin !== undefined && (obj.admin = message.admin);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.version !== undefined && (obj.version = (message.version || Long.UZERO).toString());
        message.decisionPolicy !== undefined &&
            (obj.decisionPolicy = message.decisionPolicy ? Any.toJSON(message.decisionPolicy) : undefined);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    create(base) {
        return GroupPolicyInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGroupPolicyInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.groupId = (object.groupId !== undefined && object.groupId !== null)
            ? Long.fromValue(object.groupId)
            : Long.UZERO;
        message.admin = (_b = object.admin) !== null && _b !== void 0 ? _b : "";
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.version = (object.version !== undefined && object.version !== null)
            ? Long.fromValue(object.version)
            : Long.UZERO;
        message.decisionPolicy = (object.decisionPolicy !== undefined && object.decisionPolicy !== null)
            ? Any.fromPartial(object.decisionPolicy)
            : undefined;
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseProposal() {
    return {
        id: Long.UZERO,
        address: "",
        metadata: "",
        proposers: [],
        submitTime: undefined,
        groupVersion: Long.UZERO,
        groupPolicyVersion: Long.UZERO,
        status: 0,
        result: 0,
        finalTallyResult: undefined,
        votingPeriodEnd: undefined,
        executorResult: 0,
        messages: [],
    };
}
export const Proposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.metadata !== "") {
            writer.uint32(26).string(message.metadata);
        }
        for (const v of message.proposers) {
            writer.uint32(34).string(v);
        }
        if (message.submitTime !== undefined) {
            Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
        }
        if (!message.groupVersion.isZero()) {
            writer.uint32(48).uint64(message.groupVersion);
        }
        if (!message.groupPolicyVersion.isZero()) {
            writer.uint32(56).uint64(message.groupPolicyVersion);
        }
        if (message.status !== 0) {
            writer.uint32(64).int32(message.status);
        }
        if (message.result !== 0) {
            writer.uint32(72).int32(message.result);
        }
        if (message.finalTallyResult !== undefined) {
            TallyResult.encode(message.finalTallyResult, writer.uint32(82).fork()).ldelim();
        }
        if (message.votingPeriodEnd !== undefined) {
            Timestamp.encode(toTimestamp(message.votingPeriodEnd), writer.uint32(90).fork()).ldelim();
        }
        if (message.executorResult !== 0) {
            writer.uint32(96).int32(message.executorResult);
        }
        for (const v of message.messages) {
            Any.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.metadata = reader.string();
                    break;
                case 4:
                    message.proposers.push(reader.string());
                    break;
                case 5:
                    message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.groupVersion = reader.uint64();
                    break;
                case 7:
                    message.groupPolicyVersion = reader.uint64();
                    break;
                case 8:
                    message.status = reader.int32();
                    break;
                case 9:
                    message.result = reader.int32();
                    break;
                case 10:
                    message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.votingPeriodEnd = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.executorResult = reader.int32();
                    break;
                case 13:
                    message.messages.push(Any.decode(reader, reader.uint32()));
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
            id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
            address: isSet(object.address) ? String(object.address) : "",
            metadata: isSet(object.metadata) ? String(object.metadata) : "",
            proposers: Array.isArray(object === null || object === void 0 ? void 0 : object.proposers) ? object.proposers.map((e) => String(e)) : [],
            submitTime: isSet(object.submitTime) ? fromJsonTimestamp(object.submitTime) : undefined,
            groupVersion: isSet(object.groupVersion) ? Long.fromValue(object.groupVersion) : Long.UZERO,
            groupPolicyVersion: isSet(object.groupPolicyVersion) ? Long.fromValue(object.groupPolicyVersion) : Long.UZERO,
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
            result: isSet(object.result) ? proposalResultFromJSON(object.result) : 0,
            finalTallyResult: isSet(object.finalTallyResult) ? TallyResult.fromJSON(object.finalTallyResult) : undefined,
            votingPeriodEnd: isSet(object.votingPeriodEnd) ? fromJsonTimestamp(object.votingPeriodEnd) : undefined,
            executorResult: isSet(object.executorResult) ? proposalExecutorResultFromJSON(object.executorResult) : 0,
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages) ? object.messages.map((e) => Any.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
        message.address !== undefined && (obj.address = message.address);
        message.metadata !== undefined && (obj.metadata = message.metadata);
        if (message.proposers) {
            obj.proposers = message.proposers.map((e) => e);
        }
        else {
            obj.proposers = [];
        }
        message.submitTime !== undefined && (obj.submitTime = message.submitTime.toISOString());
        message.groupVersion !== undefined && (obj.groupVersion = (message.groupVersion || Long.UZERO).toString());
        message.groupPolicyVersion !== undefined &&
            (obj.groupPolicyVersion = (message.groupPolicyVersion || Long.UZERO).toString());
        message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
        message.result !== undefined && (obj.result = proposalResultToJSON(message.result));
        message.finalTallyResult !== undefined &&
            (obj.finalTallyResult = message.finalTallyResult ? TallyResult.toJSON(message.finalTallyResult) : undefined);
        message.votingPeriodEnd !== undefined && (obj.votingPeriodEnd = message.votingPeriodEnd.toISOString());
        message.executorResult !== undefined && (obj.executorResult = proposalExecutorResultToJSON(message.executorResult));
        if (message.messages) {
            obj.messages = message.messages.map((e) => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        return obj;
    },
    create(base) {
        return Proposal.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseProposal();
        message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.UZERO;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.metadata = (_b = object.metadata) !== null && _b !== void 0 ? _b : "";
        message.proposers = ((_c = object.proposers) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.submitTime = (_d = object.submitTime) !== null && _d !== void 0 ? _d : undefined;
        message.groupVersion = (object.groupVersion !== undefined && object.groupVersion !== null)
            ? Long.fromValue(object.groupVersion)
            : Long.UZERO;
        message.groupPolicyVersion = (object.groupPolicyVersion !== undefined && object.groupPolicyVersion !== null)
            ? Long.fromValue(object.groupPolicyVersion)
            : Long.UZERO;
        message.status = (_e = object.status) !== null && _e !== void 0 ? _e : 0;
        message.result = (_f = object.result) !== null && _f !== void 0 ? _f : 0;
        message.finalTallyResult = (object.finalTallyResult !== undefined && object.finalTallyResult !== null)
            ? TallyResult.fromPartial(object.finalTallyResult)
            : undefined;
        message.votingPeriodEnd = (_g = object.votingPeriodEnd) !== null && _g !== void 0 ? _g : undefined;
        message.executorResult = (_h = object.executorResult) !== null && _h !== void 0 ? _h : 0;
        message.messages = ((_j = object.messages) === null || _j === void 0 ? void 0 : _j.map((e) => Any.fromPartial(e))) || [];
        return message;
    },
};
function createBaseTallyResult() {
    return { yesCount: "", abstainCount: "", noCount: "", noWithVetoCount: "" };
}
export const TallyResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.yesCount !== "") {
            writer.uint32(10).string(message.yesCount);
        }
        if (message.abstainCount !== "") {
            writer.uint32(18).string(message.abstainCount);
        }
        if (message.noCount !== "") {
            writer.uint32(26).string(message.noCount);
        }
        if (message.noWithVetoCount !== "") {
            writer.uint32(34).string(message.noWithVetoCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTallyResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yesCount = reader.string();
                    break;
                case 2:
                    message.abstainCount = reader.string();
                    break;
                case 3:
                    message.noCount = reader.string();
                    break;
                case 4:
                    message.noWithVetoCount = reader.string();
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
            yesCount: isSet(object.yesCount) ? String(object.yesCount) : "",
            abstainCount: isSet(object.abstainCount) ? String(object.abstainCount) : "",
            noCount: isSet(object.noCount) ? String(object.noCount) : "",
            noWithVetoCount: isSet(object.noWithVetoCount) ? String(object.noWithVetoCount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.yesCount !== undefined && (obj.yesCount = message.yesCount);
        message.abstainCount !== undefined && (obj.abstainCount = message.abstainCount);
        message.noCount !== undefined && (obj.noCount = message.noCount);
        message.noWithVetoCount !== undefined && (obj.noWithVetoCount = message.noWithVetoCount);
        return obj;
    },
    create(base) {
        return TallyResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseTallyResult();
        message.yesCount = (_a = object.yesCount) !== null && _a !== void 0 ? _a : "";
        message.abstainCount = (_b = object.abstainCount) !== null && _b !== void 0 ? _b : "";
        message.noCount = (_c = object.noCount) !== null && _c !== void 0 ? _c : "";
        message.noWithVetoCount = (_d = object.noWithVetoCount) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseVote() {
    return { proposalId: Long.UZERO, voter: "", option: 0, metadata: "", submitTime: undefined };
}
export const Vote = {
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
        if (message.submitTime !== undefined) {
            Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
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
                    message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            submitTime: isSet(object.submitTime) ? fromJsonTimestamp(object.submitTime) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.submitTime !== undefined && (obj.submitTime = message.submitTime.toISOString());
        return obj;
    },
    create(base) {
        return Vote.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseVote();
        message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
            ? Long.fromValue(object.proposalId)
            : Long.UZERO;
        message.voter = (_a = object.voter) !== null && _a !== void 0 ? _a : "";
        message.option = (_b = object.option) !== null && _b !== void 0 ? _b : 0;
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : "";
        message.submitTime = (_d = object.submitTime) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return Long.fromNumber(number);
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=types.js.map