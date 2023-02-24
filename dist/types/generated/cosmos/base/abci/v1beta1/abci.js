/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../../tendermint/abci/types";
export const protobufPackage = "cosmos.base.abci.v1beta1";
function createBaseTxResponse() {
    return {
        height: Long.ZERO,
        txhash: "",
        codespace: "",
        code: 0,
        data: "",
        rawLog: "",
        logs: [],
        info: "",
        gasWanted: Long.ZERO,
        gasUsed: Long.ZERO,
        tx: undefined,
        timestamp: "",
        events: [],
    };
}
export const TxResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.txhash !== "") {
            writer.uint32(18).string(message.txhash);
        }
        if (message.codespace !== "") {
            writer.uint32(26).string(message.codespace);
        }
        if (message.code !== 0) {
            writer.uint32(32).uint32(message.code);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.rawLog !== "") {
            writer.uint32(50).string(message.rawLog);
        }
        for (const v of message.logs) {
            ABCIMessageLog.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.info !== "") {
            writer.uint32(66).string(message.info);
        }
        if (!message.gasWanted.isZero()) {
            writer.uint32(72).int64(message.gasWanted);
        }
        if (!message.gasUsed.isZero()) {
            writer.uint32(80).int64(message.gasUsed);
        }
        if (message.tx !== undefined) {
            Any.encode(message.tx, writer.uint32(90).fork()).ldelim();
        }
        if (message.timestamp !== "") {
            writer.uint32(98).string(message.timestamp);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(106).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.txhash = reader.string();
                    break;
                case 3:
                    message.codespace = reader.string();
                    break;
                case 4:
                    message.code = reader.uint32();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.rawLog = reader.string();
                    break;
                case 7:
                    message.logs.push(ABCIMessageLog.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.info = reader.string();
                    break;
                case 9:
                    message.gasWanted = reader.int64();
                    break;
                case 10:
                    message.gasUsed = reader.int64();
                    break;
                case 11:
                    message.tx = Any.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.timestamp = reader.string();
                    break;
                case 13:
                    message.events.push(Event.decode(reader, reader.uint32()));
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
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
            txhash: isSet(object.txhash) ? String(object.txhash) : "",
            codespace: isSet(object.codespace) ? String(object.codespace) : "",
            code: isSet(object.code) ? Number(object.code) : 0,
            data: isSet(object.data) ? String(object.data) : "",
            rawLog: isSet(object.rawLog) ? String(object.rawLog) : "",
            logs: Array.isArray(object === null || object === void 0 ? void 0 : object.logs) ? object.logs.map((e) => ABCIMessageLog.fromJSON(e)) : [],
            info: isSet(object.info) ? String(object.info) : "",
            gasWanted: isSet(object.gasWanted) ? Long.fromValue(object.gasWanted) : Long.ZERO,
            gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.ZERO,
            tx: isSet(object.tx) ? Any.fromJSON(object.tx) : undefined,
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => Event.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
        message.txhash !== undefined && (obj.txhash = message.txhash);
        message.codespace !== undefined && (obj.codespace = message.codespace);
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.data !== undefined && (obj.data = message.data);
        message.rawLog !== undefined && (obj.rawLog = message.rawLog);
        if (message.logs) {
            obj.logs = message.logs.map((e) => e ? ABCIMessageLog.toJSON(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        message.info !== undefined && (obj.info = message.info);
        message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || Long.ZERO).toString());
        message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.ZERO).toString());
        message.tx !== undefined && (obj.tx = message.tx ? Any.toJSON(message.tx) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        if (message.events) {
            obj.events = message.events.map((e) => e ? Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    create(base) {
        return TxResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseTxResponse();
        message.height = (object.height !== undefined && object.height !== null)
            ? Long.fromValue(object.height)
            : Long.ZERO;
        message.txhash = (_a = object.txhash) !== null && _a !== void 0 ? _a : "";
        message.codespace = (_b = object.codespace) !== null && _b !== void 0 ? _b : "";
        message.code = (_c = object.code) !== null && _c !== void 0 ? _c : 0;
        message.data = (_d = object.data) !== null && _d !== void 0 ? _d : "";
        message.rawLog = (_e = object.rawLog) !== null && _e !== void 0 ? _e : "";
        message.logs = ((_f = object.logs) === null || _f === void 0 ? void 0 : _f.map((e) => ABCIMessageLog.fromPartial(e))) || [];
        message.info = (_g = object.info) !== null && _g !== void 0 ? _g : "";
        message.gasWanted = (object.gasWanted !== undefined && object.gasWanted !== null)
            ? Long.fromValue(object.gasWanted)
            : Long.ZERO;
        message.gasUsed = (object.gasUsed !== undefined && object.gasUsed !== null)
            ? Long.fromValue(object.gasUsed)
            : Long.ZERO;
        message.tx = (object.tx !== undefined && object.tx !== null) ? Any.fromPartial(object.tx) : undefined;
        message.timestamp = (_h = object.timestamp) !== null && _h !== void 0 ? _h : "";
        message.events = ((_j = object.events) === null || _j === void 0 ? void 0 : _j.map((e) => Event.fromPartial(e))) || [];
        return message;
    },
};
function createBaseABCIMessageLog() {
    return { msgIndex: 0, log: "", events: [] };
}
export const ABCIMessageLog = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msgIndex !== 0) {
            writer.uint32(8).uint32(message.msgIndex);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            StringEvent.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIMessageLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgIndex = reader.uint32();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(StringEvent.decode(reader, reader.uint32()));
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
            msgIndex: isSet(object.msgIndex) ? Number(object.msgIndex) : 0,
            log: isSet(object.log) ? String(object.log) : "",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => StringEvent.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgIndex !== undefined && (obj.msgIndex = Math.round(message.msgIndex));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map((e) => e ? StringEvent.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    create(base) {
        return ABCIMessageLog.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseABCIMessageLog();
        message.msgIndex = (_a = object.msgIndex) !== null && _a !== void 0 ? _a : 0;
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.events = ((_c = object.events) === null || _c === void 0 ? void 0 : _c.map((e) => StringEvent.fromPartial(e))) || [];
        return message;
    },
};
function createBaseStringEvent() {
    return { type: "", attributes: [] };
}
export const StringEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        for (const v of message.attributes) {
            Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStringEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.attributes.push(Attribute.decode(reader, reader.uint32()));
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
            type: isSet(object.type) ? String(object.type) : "",
            attributes: Array.isArray(object === null || object === void 0 ? void 0 : object.attributes) ? object.attributes.map((e) => Attribute.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e ? Attribute.toJSON(e) : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    create(base) {
        return StringEvent.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStringEvent();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.attributes = ((_b = object.attributes) === null || _b === void 0 ? void 0 : _b.map((e) => Attribute.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAttribute() {
    return { key: "", value: "" };
}
export const Attribute = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAttribute();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    create(base) {
        return Attribute.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAttribute();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGasInfo() {
    return { gasWanted: Long.UZERO, gasUsed: Long.UZERO };
}
export const GasInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.gasWanted.isZero()) {
            writer.uint32(8).uint64(message.gasWanted);
        }
        if (!message.gasUsed.isZero()) {
            writer.uint32(16).uint64(message.gasUsed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGasInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasWanted = reader.uint64();
                    break;
                case 2:
                    message.gasUsed = reader.uint64();
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
            gasWanted: isSet(object.gasWanted) ? Long.fromValue(object.gasWanted) : Long.UZERO,
            gasUsed: isSet(object.gasUsed) ? Long.fromValue(object.gasUsed) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.gasWanted !== undefined && (obj.gasWanted = (message.gasWanted || Long.UZERO).toString());
        message.gasUsed !== undefined && (obj.gasUsed = (message.gasUsed || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return GasInfo.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGasInfo();
        message.gasWanted = (object.gasWanted !== undefined && object.gasWanted !== null)
            ? Long.fromValue(object.gasWanted)
            : Long.UZERO;
        message.gasUsed = (object.gasUsed !== undefined && object.gasUsed !== null)
            ? Long.fromValue(object.gasUsed)
            : Long.UZERO;
        return message;
    },
};
function createBaseResult() {
    return { data: new Uint8Array(), log: "", events: [], msgResponses: [] };
}
export const Result = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.log !== "") {
            writer.uint32(18).string(message.log);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.msgResponses) {
            Any.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.log = reader.string();
                    break;
                case 3:
                    message.events.push(Event.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.msgResponses.push(Any.decode(reader, reader.uint32()));
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            log: isSet(object.log) ? String(object.log) : "",
            events: Array.isArray(object === null || object === void 0 ? void 0 : object.events) ? object.events.map((e) => Event.fromJSON(e)) : [],
            msgResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.msgResponses) ? object.msgResponses.map((e) => Any.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.log !== undefined && (obj.log = message.log);
        if (message.events) {
            obj.events = message.events.map((e) => e ? Event.toJSON(e) : undefined);
        }
        else {
            obj.events = [];
        }
        if (message.msgResponses) {
            obj.msgResponses = message.msgResponses.map((e) => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.msgResponses = [];
        }
        return obj;
    },
    create(base) {
        return Result.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseResult();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.log = (_b = object.log) !== null && _b !== void 0 ? _b : "";
        message.events = ((_c = object.events) === null || _c === void 0 ? void 0 : _c.map((e) => Event.fromPartial(e))) || [];
        message.msgResponses = ((_d = object.msgResponses) === null || _d === void 0 ? void 0 : _d.map((e) => Any.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSimulationResponse() {
    return { gasInfo: undefined, result: undefined };
}
export const SimulationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.gasInfo !== undefined) {
            GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gasInfo = GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = Result.decode(reader, reader.uint32());
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
            gasInfo: isSet(object.gasInfo) ? GasInfo.fromJSON(object.gasInfo) : undefined,
            result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.gasInfo !== undefined && (obj.gasInfo = message.gasInfo ? GasInfo.toJSON(message.gasInfo) : undefined);
        message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return SimulationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSimulationResponse();
        message.gasInfo = (object.gasInfo !== undefined && object.gasInfo !== null)
            ? GasInfo.fromPartial(object.gasInfo)
            : undefined;
        message.result = (object.result !== undefined && object.result !== null)
            ? Result.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseMsgData() {
    return { msgType: "", data: new Uint8Array() };
}
export const MsgData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msgType !== "") {
            writer.uint32(10).string(message.msgType);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgType = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
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
            msgType: isSet(object.msgType) ? String(object.msgType) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.msgType !== undefined && (obj.msgType = message.msgType);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    create(base) {
        return MsgData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgData();
        message.msgType = (_a = object.msgType) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseTxMsgData() {
    return { data: [], msgResponses: [] };
}
export const TxMsgData = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.data) {
            MsgData.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.msgResponses) {
            Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxMsgData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data.push(MsgData.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.msgResponses.push(Any.decode(reader, reader.uint32()));
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
            data: Array.isArray(object === null || object === void 0 ? void 0 : object.data) ? object.data.map((e) => MsgData.fromJSON(e)) : [],
            msgResponses: Array.isArray(object === null || object === void 0 ? void 0 : object.msgResponses) ? object.msgResponses.map((e) => Any.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data) {
            obj.data = message.data.map((e) => e ? MsgData.toJSON(e) : undefined);
        }
        else {
            obj.data = [];
        }
        if (message.msgResponses) {
            obj.msgResponses = message.msgResponses.map((e) => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.msgResponses = [];
        }
        return obj;
    },
    create(base) {
        return TxMsgData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTxMsgData();
        message.data = ((_a = object.data) === null || _a === void 0 ? void 0 : _a.map((e) => MsgData.fromPartial(e))) || [];
        message.msgResponses = ((_b = object.msgResponses) === null || _b === void 0 ? void 0 : _b.map((e) => Any.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSearchTxsResult() {
    return {
        totalCount: Long.UZERO,
        count: Long.UZERO,
        pageNumber: Long.UZERO,
        pageTotal: Long.UZERO,
        limit: Long.UZERO,
        txs: [],
    };
}
export const SearchTxsResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.totalCount.isZero()) {
            writer.uint32(8).uint64(message.totalCount);
        }
        if (!message.count.isZero()) {
            writer.uint32(16).uint64(message.count);
        }
        if (!message.pageNumber.isZero()) {
            writer.uint32(24).uint64(message.pageNumber);
        }
        if (!message.pageTotal.isZero()) {
            writer.uint32(32).uint64(message.pageTotal);
        }
        if (!message.limit.isZero()) {
            writer.uint32(40).uint64(message.limit);
        }
        for (const v of message.txs) {
            TxResponse.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchTxsResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.totalCount = reader.uint64();
                    break;
                case 2:
                    message.count = reader.uint64();
                    break;
                case 3:
                    message.pageNumber = reader.uint64();
                    break;
                case 4:
                    message.pageTotal = reader.uint64();
                    break;
                case 5:
                    message.limit = reader.uint64();
                    break;
                case 6:
                    message.txs.push(TxResponse.decode(reader, reader.uint32()));
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
            totalCount: isSet(object.totalCount) ? Long.fromValue(object.totalCount) : Long.UZERO,
            count: isSet(object.count) ? Long.fromValue(object.count) : Long.UZERO,
            pageNumber: isSet(object.pageNumber) ? Long.fromValue(object.pageNumber) : Long.UZERO,
            pageTotal: isSet(object.pageTotal) ? Long.fromValue(object.pageTotal) : Long.UZERO,
            limit: isSet(object.limit) ? Long.fromValue(object.limit) : Long.UZERO,
            txs: Array.isArray(object === null || object === void 0 ? void 0 : object.txs) ? object.txs.map((e) => TxResponse.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.totalCount !== undefined && (obj.totalCount = (message.totalCount || Long.UZERO).toString());
        message.count !== undefined && (obj.count = (message.count || Long.UZERO).toString());
        message.pageNumber !== undefined && (obj.pageNumber = (message.pageNumber || Long.UZERO).toString());
        message.pageTotal !== undefined && (obj.pageTotal = (message.pageTotal || Long.UZERO).toString());
        message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
        if (message.txs) {
            obj.txs = message.txs.map((e) => e ? TxResponse.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    create(base) {
        return SearchTxsResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSearchTxsResult();
        message.totalCount = (object.totalCount !== undefined && object.totalCount !== null)
            ? Long.fromValue(object.totalCount)
            : Long.UZERO;
        message.count = (object.count !== undefined && object.count !== null) ? Long.fromValue(object.count) : Long.UZERO;
        message.pageNumber = (object.pageNumber !== undefined && object.pageNumber !== null)
            ? Long.fromValue(object.pageNumber)
            : Long.UZERO;
        message.pageTotal = (object.pageTotal !== undefined && object.pageTotal !== null)
            ? Long.fromValue(object.pageTotal)
            : Long.UZERO;
        message.limit = (object.limit !== undefined && object.limit !== null) ? Long.fromValue(object.limit) : Long.UZERO;
        message.txs = ((_a = object.txs) === null || _a === void 0 ? void 0 : _a.map((e) => TxResponse.fromPartial(e))) || [];
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
//# sourceMappingURL=abci.js.map