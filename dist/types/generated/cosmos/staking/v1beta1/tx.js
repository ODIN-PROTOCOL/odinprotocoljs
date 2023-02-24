/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Coin } from "../../base/v1beta1/coin";
import { CommissionRates, Description } from "./staking";
export const protobufPackage = "cosmos.staking.v1beta1";
function createBaseMsgCreateValidator() {
    return {
        description: undefined,
        commission: undefined,
        minSelfDelegation: "",
        delegatorAddress: "",
        validatorAddress: "",
        pubkey: undefined,
        value: undefined,
    };
}
export const MsgCreateValidator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(26).string(message.minSelfDelegation);
        }
        if (message.delegatorAddress !== "") {
            writer.uint32(34).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(42).string(message.validatorAddress);
        }
        if (message.pubkey !== undefined) {
            Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commission = CommissionRates.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.minSelfDelegation = reader.string();
                    break;
                case 4:
                    message.delegatorAddress = reader.string();
                    break;
                case 5:
                    message.validatorAddress = reader.string();
                    break;
                case 6:
                    message.pubkey = Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.value = Coin.decode(reader, reader.uint32());
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
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            commission: isSet(object.commission) ? CommissionRates.fromJSON(object.commission) : undefined,
            minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
            delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
            value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description ? Description.toJSON(message.description) : undefined);
        message.commission !== undefined &&
            (obj.commission = message.commission ? CommissionRates.toJSON(message.commission) : undefined);
        message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
        message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateValidator.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreateValidator();
        message.description = (object.description !== undefined && object.description !== null)
            ? Description.fromPartial(object.description)
            : undefined;
        message.commission = (object.commission !== undefined && object.commission !== null)
            ? CommissionRates.fromPartial(object.commission)
            : undefined;
        message.minSelfDelegation = (_a = object.minSelfDelegation) !== null && _a !== void 0 ? _a : "";
        message.delegatorAddress = (_b = object.delegatorAddress) !== null && _b !== void 0 ? _b : "";
        message.validatorAddress = (_c = object.validatorAddress) !== null && _c !== void 0 ? _c : "";
        message.pubkey = (object.pubkey !== undefined && object.pubkey !== null)
            ? Any.fromPartial(object.pubkey)
            : undefined;
        message.value = (object.value !== undefined && object.value !== null) ? Coin.fromPartial(object.value) : undefined;
        return message;
    },
};
function createBaseMsgCreateValidatorResponse() {
    return {};
}
export const MsgCreateValidatorResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateValidatorResponse();
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
        return MsgCreateValidatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateValidatorResponse();
        return message;
    },
};
function createBaseMsgEditValidator() {
    return { description: undefined, validatorAddress: "", commissionRate: "", minSelfDelegation: "" };
}
export const MsgEditValidator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.commissionRate !== "") {
            writer.uint32(26).string(message.commissionRate);
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(34).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.commissionRate = reader.string();
                    break;
                case 4:
                    message.minSelfDelegation = reader.string();
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
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
            commissionRate: isSet(object.commissionRate) ? String(object.commissionRate) : "",
            minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description ? Description.toJSON(message.description) : undefined);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.commissionRate !== undefined && (obj.commissionRate = message.commissionRate);
        message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
        return obj;
    },
    create(base) {
        return MsgEditValidator.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgEditValidator();
        message.description = (object.description !== undefined && object.description !== null)
            ? Description.fromPartial(object.description)
            : undefined;
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.commissionRate = (_b = object.commissionRate) !== null && _b !== void 0 ? _b : "";
        message.minSelfDelegation = (_c = object.minSelfDelegation) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgEditValidatorResponse() {
    return {};
}
export const MsgEditValidatorResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditValidatorResponse();
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
        return MsgEditValidatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgEditValidatorResponse();
        return message;
    },
};
function createBaseMsgDelegate() {
    return { delegatorAddress: "", validatorAddress: "", amount: undefined };
}
export const MsgDelegate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegate();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return MsgDelegate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDelegate();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgDelegateResponse() {
    return {};
}
export const MsgDelegateResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateResponse();
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
        return MsgDelegateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgDelegateResponse();
        return message;
    },
};
function createBaseMsgBeginRedelegate() {
    return { delegatorAddress: "", validatorSrcAddress: "", validatorDstAddress: "", amount: undefined };
}
export const MsgBeginRedelegate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginRedelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case 4:
                    message.amount = Coin.decode(reader, reader.uint32());
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
            validatorSrcAddress: isSet(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
            validatorDstAddress: isSet(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
        message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return MsgBeginRedelegate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgBeginRedelegate();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorSrcAddress = (_b = object.validatorSrcAddress) !== null && _b !== void 0 ? _b : "";
        message.validatorDstAddress = (_c = object.validatorDstAddress) !== null && _c !== void 0 ? _c : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgBeginRedelegateResponse() {
    return { completionTime: undefined };
}
export const MsgBeginRedelegateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginRedelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        return obj;
    },
    create(base) {
        return MsgBeginRedelegateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgBeginRedelegateResponse();
        message.completionTime = (_a = object.completionTime) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseMsgUndelegate() {
    return { delegatorAddress: "", validatorAddress: "", amount: undefined };
}
export const MsgUndelegate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegate();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    create(base) {
        return MsgUndelegate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUndelegate();
        message.delegatorAddress = (_a = object.delegatorAddress) !== null && _a !== void 0 ? _a : "";
        message.validatorAddress = (_b = object.validatorAddress) !== null && _b !== void 0 ? _b : "";
        message.amount = (object.amount !== undefined && object.amount !== null)
            ? Coin.fromPartial(object.amount)
            : undefined;
        return message;
    },
};
function createBaseMsgUndelegateResponse() {
    return { completionTime: undefined };
}
export const MsgUndelegateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.completionTime !== undefined) {
            Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        return obj;
    },
    create(base) {
        return MsgUndelegateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUndelegateResponse();
        message.completionTime = (_a = object.completionTime) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.staking.v1beta1.Msg";
        this.rpc = rpc;
        this.CreateValidator = this.CreateValidator.bind(this);
        this.EditValidator = this.EditValidator.bind(this);
        this.Delegate = this.Delegate.bind(this);
        this.BeginRedelegate = this.BeginRedelegate.bind(this);
        this.Undelegate = this.Undelegate.bind(this);
    }
    CreateValidator(request) {
        const data = MsgCreateValidator.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateValidator", data);
        return promise.then((data) => MsgCreateValidatorResponse.decode(new _m0.Reader(data)));
    }
    EditValidator(request) {
        const data = MsgEditValidator.encode(request).finish();
        const promise = this.rpc.request(this.service, "EditValidator", data);
        return promise.then((data) => MsgEditValidatorResponse.decode(new _m0.Reader(data)));
    }
    Delegate(request) {
        const data = MsgDelegate.encode(request).finish();
        const promise = this.rpc.request(this.service, "Delegate", data);
        return promise.then((data) => MsgDelegateResponse.decode(new _m0.Reader(data)));
    }
    BeginRedelegate(request) {
        const data = MsgBeginRedelegate.encode(request).finish();
        const promise = this.rpc.request(this.service, "BeginRedelegate", data);
        return promise.then((data) => MsgBeginRedelegateResponse.decode(new _m0.Reader(data)));
    }
    Undelegate(request) {
        const data = MsgUndelegate.encode(request).finish();
        const promise = this.rpc.request(this.service, "Undelegate", data);
        return promise.then((data) => MsgUndelegateResponse.decode(new _m0.Reader(data)));
    }
}
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
//# sourceMappingURL=tx.js.map