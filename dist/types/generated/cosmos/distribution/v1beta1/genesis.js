/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DecCoin } from "../../base/v1beta1/coin";
import { DelegatorStartingInfo, FeePool, Params, ValidatorAccumulatedCommission, ValidatorCurrentRewards, ValidatorHistoricalRewards, ValidatorSlashEvent, } from "./distribution";
export const protobufPackage = "cosmos.distribution.v1beta1";
function createBaseDelegatorWithdrawInfo() {
    return { delegatorAddress: "", withdrawAddress: "" };
}
export const DelegatorWithdrawInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorWithdrawInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.withdrawAddress = reader.string();
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
        return obj;
    },
    create(base) {
        return DelegatorWithdrawInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDelegatorWithdrawInfo();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.withdrawAddress = (_b = object.withdrawAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseValidatorOutstandingRewardsRecord() {
    return { validatorAddress: "", outstandingRewards: [] };
}
export const ValidatorOutstandingRewardsRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        for (const v of message.outstandingRewards) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.outstandingRewards.push(DecCoin.decode(reader, reader.uint32()));
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            outstandingRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstandingRewards)
                ? object.outstandingRewards.map((e) => DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map((e) => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.outstandingRewards = [];
        }
        return obj;
    },
    create(base) {
        return ValidatorOutstandingRewardsRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorOutstandingRewardsRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.outstandingRewards = ((_b = object.outstandingRewards) === null || _b === void 0 ? void 0 : _b.map((e) => DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseValidatorAccumulatedCommissionRecord() {
    return { validatorAddress: "", accumulated: undefined };
}
export const ValidatorAccumulatedCommissionRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.accumulated !== undefined) {
            ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommissionRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.accumulated = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            accumulated: isSet(object.accumulated) ? ValidatorAccumulatedCommission.fromJSON(object.accumulated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.accumulated !== undefined &&
            (obj.accumulated = message.accumulated ? ValidatorAccumulatedCommission.toJSON(message.accumulated) : undefined);
        return obj;
    },
    create(base) {
        return ValidatorAccumulatedCommissionRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorAccumulatedCommissionRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.accumulated = (object.accumulated !== undefined && object.accumulated !== null)
            ? ValidatorAccumulatedCommission.fromPartial(object.accumulated)
            : undefined;
        return message;
    },
};
function createBaseValidatorHistoricalRewardsRecord() {
    return { validatorAddress: "", period: Long.UZERO, rewards: undefined };
}
export const ValidatorHistoricalRewardsRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (!message.period.isZero()) {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.period = reader.uint64();
                    break;
                case 3:
                    message.rewards = ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
            rewards: isSet(object.rewards) ? ValidatorHistoricalRewards.fromJSON(object.rewards) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
        message.rewards !== undefined &&
            (obj.rewards = message.rewards ? ValidatorHistoricalRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    create(base) {
        return ValidatorHistoricalRewardsRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorHistoricalRewardsRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.period = (object.period !== undefined && object.period !== null)
            ? Long.fromValue(object.period)
            : Long.UZERO;
        message.rewards = (object.rewards !== undefined && object.rewards !== null)
            ? ValidatorHistoricalRewards.fromPartial(object.rewards)
            : undefined;
        return message;
    },
};
function createBaseValidatorCurrentRewardsRecord() {
    return { validatorAddress: "", rewards: undefined };
}
export const ValidatorCurrentRewardsRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.rewards !== undefined) {
            ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.rewards = ValidatorCurrentRewards.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            rewards: isSet(object.rewards) ? ValidatorCurrentRewards.fromJSON(object.rewards) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.rewards !== undefined &&
            (obj.rewards = message.rewards ? ValidatorCurrentRewards.toJSON(message.rewards) : undefined);
        return obj;
    },
    create(base) {
        return ValidatorCurrentRewardsRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorCurrentRewardsRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.rewards = (object.rewards !== undefined && object.rewards !== null)
            ? ValidatorCurrentRewards.fromPartial(object.rewards)
            : undefined;
        return message;
    },
};
function createBaseDelegatorStartingInfoRecord() {
    return { delegatorAddress: "", validatorAddress: "", startingInfo: undefined };
}
export const DelegatorStartingInfoRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.startingInfo !== undefined) {
            DelegatorStartingInfo.encode(message.startingInfo, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfoRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.startingInfo = DelegatorStartingInfo.decode(reader, reader.uint32());
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
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            startingInfo: isSet(object.startingInfo) ? DelegatorStartingInfo.fromJSON(object.startingInfo) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.startingInfo !== undefined &&
            (obj.startingInfo = message.startingInfo ? DelegatorStartingInfo.toJSON(message.startingInfo) : undefined);
        return obj;
    },
    create(base) {
        return DelegatorStartingInfoRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDelegatorStartingInfoRecord();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        message.startingInfo = (object.startingInfo !== undefined && object.startingInfo !== null)
            ? DelegatorStartingInfo.fromPartial(object.startingInfo)
            : undefined;
        return message;
    },
};
function createBaseValidatorSlashEventRecord() {
    return { validatorAddress: "", height: Long.UZERO, period: Long.UZERO, validatorSlashEvent: undefined };
}
export const ValidatorSlashEventRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).uint64(message.height);
        }
        if (!message.period.isZero()) {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validatorSlashEvent !== undefined) {
            ValidatorSlashEvent.encode(message.validatorSlashEvent, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEventRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.height = reader.uint64();
                    break;
                case 3:
                    message.period = reader.uint64();
                    break;
                case 4:
                    message.validatorSlashEvent = ValidatorSlashEvent.decode(reader, reader.uint32());
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
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO,
            period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
            validatorSlashEvent: isSet(object.validatorSlashEvent)
                ? ValidatorSlashEvent.fromJSON(object.validatorSlashEvent)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
        message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
        message.validatorSlashEvent !== undefined && (obj.validatorSlashEvent = message.validatorSlashEvent
            ? ValidatorSlashEvent.toJSON(message.validatorSlashEvent)
            : undefined);
        return obj;
    },
    create(base) {
        return ValidatorSlashEventRecord.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorSlashEventRecord();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.height = (object.height !== undefined && object.height !== null)
            ? Long.fromValue(object.height)
            : Long.UZERO;
        message.period = (object.period !== undefined && object.period !== null)
            ? Long.fromValue(object.period)
            : Long.UZERO;
        message.validatorSlashEvent = (object.validatorSlashEvent !== undefined && object.validatorSlashEvent !== null)
            ? ValidatorSlashEvent.fromPartial(object.validatorSlashEvent)
            : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: undefined,
        feePool: undefined,
        delegatorWithdrawInfos: [],
        previousProposer: "",
        outstandingRewards: [],
        validatorAccumulatedCommissions: [],
        validatorHistoricalRewards: [],
        validatorCurrentRewards: [],
        delegatorStartingInfos: [],
        validatorSlashEvents: [],
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.feePool !== undefined) {
            FeePool.encode(message.feePool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatorWithdrawInfos) {
            DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previousProposer !== "") {
            writer.uint32(34).string(message.previousProposer);
        }
        for (const v of message.outstandingRewards) {
            ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validatorAccumulatedCommissions) {
            ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validatorHistoricalRewards) {
            ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validatorCurrentRewards) {
            ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegatorStartingInfos) {
            DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validatorSlashEvents) {
            ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.feePool = FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegatorWithdrawInfos.push(DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previousProposer = reader.string();
                    break;
                case 5:
                    message.outstandingRewards.push(ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validatorAccumulatedCommissions.push(ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validatorHistoricalRewards.push(ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validatorCurrentRewards.push(ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegatorStartingInfos.push(DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validatorSlashEvents.push(ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            feePool: isSet(object.feePool) ? FeePool.fromJSON(object.feePool) : undefined,
            delegatorWithdrawInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatorWithdrawInfos)
                ? object.delegatorWithdrawInfos.map((e) => DelegatorWithdrawInfo.fromJSON(e))
                : [],
            previousProposer: isSet(object.previousProposer) ? String(object.previousProposer) : "",
            outstandingRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstandingRewards)
                ? object.outstandingRewards.map((e) => ValidatorOutstandingRewardsRecord.fromJSON(e))
                : [],
            validatorAccumulatedCommissions: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorAccumulatedCommissions)
                ? object.validatorAccumulatedCommissions.map((e) => ValidatorAccumulatedCommissionRecord.fromJSON(e))
                : [],
            validatorHistoricalRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorHistoricalRewards)
                ? object.validatorHistoricalRewards.map((e) => ValidatorHistoricalRewardsRecord.fromJSON(e))
                : [],
            validatorCurrentRewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorCurrentRewards)
                ? object.validatorCurrentRewards.map((e) => ValidatorCurrentRewardsRecord.fromJSON(e))
                : [],
            delegatorStartingInfos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatorStartingInfos)
                ? object.delegatorStartingInfos.map((e) => DelegatorStartingInfoRecord.fromJSON(e))
                : [],
            validatorSlashEvents: Array.isArray(object === null || object === void 0 ? void 0 : object.validatorSlashEvents)
                ? object.validatorSlashEvents.map((e) => ValidatorSlashEventRecord.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.feePool !== undefined && (obj.feePool = message.feePool ? FeePool.toJSON(message.feePool) : undefined);
        if (message.delegatorWithdrawInfos) {
            obj.delegatorWithdrawInfos = message.delegatorWithdrawInfos.map((e) => e ? DelegatorWithdrawInfo.toJSON(e) : undefined);
        }
        else {
            obj.delegatorWithdrawInfos = [];
        }
        message.previousProposer !== undefined && (obj.previousProposer = message.previousProposer);
        if (message.outstandingRewards) {
            obj.outstandingRewards = message.outstandingRewards.map((e) => e ? ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.outstandingRewards = [];
        }
        if (message.validatorAccumulatedCommissions) {
            obj.validatorAccumulatedCommissions = message.validatorAccumulatedCommissions.map((e) => e ? ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorAccumulatedCommissions = [];
        }
        if (message.validatorHistoricalRewards) {
            obj.validatorHistoricalRewards = message.validatorHistoricalRewards.map((e) => e ? ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorHistoricalRewards = [];
        }
        if (message.validatorCurrentRewards) {
            obj.validatorCurrentRewards = message.validatorCurrentRewards.map((e) => e ? ValidatorCurrentRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorCurrentRewards = [];
        }
        if (message.delegatorStartingInfos) {
            obj.delegatorStartingInfos = message.delegatorStartingInfos.map((e) => e ? DelegatorStartingInfoRecord.toJSON(e) : undefined);
        }
        else {
            obj.delegatorStartingInfos = [];
        }
        if (message.validatorSlashEvents) {
            obj.validatorSlashEvents = message.validatorSlashEvents.map((e) => e ? ValidatorSlashEventRecord.toJSON(e) : undefined);
        }
        else {
            obj.validatorSlashEvents = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.feePool = (object.feePool !== undefined && object.feePool !== null)
            ? FeePool.fromPartial(object.feePool)
            : undefined;
        message.delegatorWithdrawInfos = ((_a = object.delegatorWithdrawInfos) === null || _a === void 0 ? void 0 : _a.map((e) => DelegatorWithdrawInfo.fromPartial(e))) ||
            [];
        message.previousProposer = (_b = object.previousProposer) !== null && _b !== void 0 ? _b : "";
        message.outstandingRewards =
            ((_c = object.outstandingRewards) === null || _c === void 0 ? void 0 : _c.map((e) => ValidatorOutstandingRewardsRecord.fromPartial(e))) || [];
        message.validatorAccumulatedCommissions =
            ((_d = object.validatorAccumulatedCommissions) === null || _d === void 0 ? void 0 : _d.map((e) => ValidatorAccumulatedCommissionRecord.fromPartial(e))) || [];
        message.validatorHistoricalRewards =
            ((_e = object.validatorHistoricalRewards) === null || _e === void 0 ? void 0 : _e.map((e) => ValidatorHistoricalRewardsRecord.fromPartial(e))) || [];
        message.validatorCurrentRewards =
            ((_f = object.validatorCurrentRewards) === null || _f === void 0 ? void 0 : _f.map((e) => ValidatorCurrentRewardsRecord.fromPartial(e))) || [];
        message.delegatorStartingInfos =
            ((_g = object.delegatorStartingInfos) === null || _g === void 0 ? void 0 : _g.map((e) => DelegatorStartingInfoRecord.fromPartial(e))) || [];
        message.validatorSlashEvents = ((_h = object.validatorSlashEvents) === null || _h === void 0 ? void 0 : _h.map((e) => ValidatorSlashEventRecord.fromPartial(e))) ||
            [];
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
//# sourceMappingURL=genesis.js.map