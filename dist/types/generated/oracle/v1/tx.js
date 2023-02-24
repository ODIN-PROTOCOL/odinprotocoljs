/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { RawReport } from "./oracle";
export const protobufPackage = "oracle.v1";
function createBaseMsgRequestData() {
    return {
        oracleScriptId: Long.ZERO,
        calldata: new Uint8Array(),
        askCount: Long.UZERO,
        minCount: Long.UZERO,
        clientId: "",
        feeLimit: [],
        prepareGas: Long.UZERO,
        executeGas: Long.UZERO,
        sender: "",
    };
}
export const MsgRequestData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(18).bytes(message.calldata);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(24).uint64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(32).uint64(message.minCount);
        }
        if (message.clientId !== "") {
            writer.uint32(42).string(message.clientId);
        }
        for (const v of message.feeLimit) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (!message.prepareGas.isZero()) {
            writer.uint32(56).uint64(message.prepareGas);
        }
        if (!message.executeGas.isZero()) {
            writer.uint32(64).uint64(message.executeGas);
        }
        if (message.sender !== "") {
            writer.uint32(74).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScriptId = reader.int64();
                    break;
                case 2:
                    message.calldata = reader.bytes();
                    break;
                case 3:
                    message.askCount = reader.uint64();
                    break;
                case 4:
                    message.minCount = reader.uint64();
                    break;
                case 5:
                    message.clientId = reader.string();
                    break;
                case 6:
                    message.feeLimit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.prepareGas = reader.uint64();
                    break;
                case 8:
                    message.executeGas = reader.uint64();
                    break;
                case 9:
                    message.sender = reader.string();
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
            oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO,
            calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
            askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.UZERO,
            minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.UZERO,
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            feeLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.feeLimit) ? object.feeLimit.map((e) => Coin.fromJSON(e)) : [],
            prepareGas: isSet(object.prepareGas) ? Long.fromValue(object.prepareGas) : Long.UZERO,
            executeGas: isSet(object.executeGas) ? Long.fromValue(object.executeGas) : Long.UZERO,
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        message.askCount !== undefined && (obj.askCount = (message.askCount || Long.UZERO).toString());
        message.minCount !== undefined && (obj.minCount = (message.minCount || Long.UZERO).toString());
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.feeLimit) {
            obj.feeLimit = message.feeLimit.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.feeLimit = [];
        }
        message.prepareGas !== undefined && (obj.prepareGas = (message.prepareGas || Long.UZERO).toString());
        message.executeGas !== undefined && (obj.executeGas = (message.executeGas || Long.UZERO).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    create(base) {
        return MsgRequestData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgRequestData();
        message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
            ? Long.fromValue(object.oracleScriptId)
            : Long.ZERO;
        message.calldata = (_a = object.calldata) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.askCount = (object.askCount !== undefined && object.askCount !== null)
            ? Long.fromValue(object.askCount)
            : Long.UZERO;
        message.minCount = (object.minCount !== undefined && object.minCount !== null)
            ? Long.fromValue(object.minCount)
            : Long.UZERO;
        message.clientId = (_b = object.clientId) !== null && _b !== void 0 ? _b : "";
        message.feeLimit = ((_c = object.feeLimit) === null || _c === void 0 ? void 0 : _c.map((e) => Coin.fromPartial(e))) || [];
        message.prepareGas = (object.prepareGas !== undefined && object.prepareGas !== null)
            ? Long.fromValue(object.prepareGas)
            : Long.UZERO;
        message.executeGas = (object.executeGas !== undefined && object.executeGas !== null)
            ? Long.fromValue(object.executeGas)
            : Long.UZERO;
        message.sender = (_d = object.sender) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgRequestDataResponse() {
    return {};
}
export const MsgRequestDataResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestDataResponse();
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
        return MsgRequestDataResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRequestDataResponse();
        return message;
    },
};
function createBaseMsgReportData() {
    return { requestId: Long.ZERO, rawReports: [], validator: "", reporter: "" };
}
export const MsgReportData = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        for (const v of message.rawReports) {
            RawReport.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== "") {
            writer.uint32(26).string(message.validator);
        }
        if (message.reporter !== "") {
            writer.uint32(34).string(message.reporter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReportData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.int64();
                    break;
                case 2:
                    message.rawReports.push(RawReport.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.validator = reader.string();
                    break;
                case 4:
                    message.reporter = reader.string();
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
            requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.ZERO,
            rawReports: Array.isArray(object === null || object === void 0 ? void 0 : object.rawReports) ? object.rawReports.map((e) => RawReport.fromJSON(e)) : [],
            validator: isSet(object.validator) ? String(object.validator) : "",
            reporter: isSet(object.reporter) ? String(object.reporter) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined && (obj.requestId = (message.requestId || Long.ZERO).toString());
        if (message.rawReports) {
            obj.rawReports = message.rawReports.map((e) => e ? RawReport.toJSON(e) : undefined);
        }
        else {
            obj.rawReports = [];
        }
        message.validator !== undefined && (obj.validator = message.validator);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        return obj;
    },
    create(base) {
        return MsgReportData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgReportData();
        message.requestId = (object.requestId !== undefined && object.requestId !== null)
            ? Long.fromValue(object.requestId)
            : Long.ZERO;
        message.rawReports = ((_a = object.rawReports) === null || _a === void 0 ? void 0 : _a.map((e) => RawReport.fromPartial(e))) || [];
        message.validator = (_b = object.validator) !== null && _b !== void 0 ? _b : "";
        message.reporter = (_c = object.reporter) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgReportDataResponse() {
    return {};
}
export const MsgReportDataResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgReportDataResponse();
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
        return MsgReportDataResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgReportDataResponse();
        return message;
    },
};
function createBaseMsgCreateDataSource() {
    return { name: "", description: "", executable: new Uint8Array(), fee: [], owner: "", sender: "" };
}
export const MsgCreateDataSource = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.executable.length !== 0) {
            writer.uint32(26).bytes(message.executable);
        }
        for (const v of message.fee) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(42).string(message.owner);
        }
        if (message.sender !== "") {
            writer.uint32(50).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDataSource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.executable = reader.bytes();
                    break;
                case 4:
                    message.fee.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.owner = reader.string();
                    break;
                case 6:
                    message.sender = reader.string();
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
            description: isSet(object.description) ? String(object.description) : "",
            executable: isSet(object.executable) ? bytesFromBase64(object.executable) : new Uint8Array(),
            fee: Array.isArray(object === null || object === void 0 ? void 0 : object.fee) ? object.fee.map((e) => Coin.fromJSON(e)) : [],
            owner: isSet(object.owner) ? String(object.owner) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.executable !== undefined &&
            (obj.executable = base64FromBytes(message.executable !== undefined ? message.executable : new Uint8Array()));
        if (message.fee) {
            obj.fee = message.fee.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.fee = [];
        }
        message.owner !== undefined && (obj.owner = message.owner);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    create(base) {
        return MsgCreateDataSource.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgCreateDataSource();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.executable = (_c = object.executable) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.fee = ((_d = object.fee) === null || _d === void 0 ? void 0 : _d.map((e) => Coin.fromPartial(e))) || [];
        message.owner = (_e = object.owner) !== null && _e !== void 0 ? _e : "";
        message.sender = (_f = object.sender) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgCreateDataSourceResponse() {
    return {};
}
export const MsgCreateDataSourceResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDataSourceResponse();
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
        return MsgCreateDataSourceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateDataSourceResponse();
        return message;
    },
};
function createBaseMsgEditDataSource() {
    return {
        dataSourceId: Long.ZERO,
        name: "",
        description: "",
        executable: new Uint8Array(),
        fee: [],
        owner: "",
        sender: "",
    };
}
export const MsgEditDataSource = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.dataSourceId.isZero()) {
            writer.uint32(8).int64(message.dataSourceId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.executable.length !== 0) {
            writer.uint32(34).bytes(message.executable);
        }
        for (const v of message.fee) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.owner !== "") {
            writer.uint32(50).string(message.owner);
        }
        if (message.sender !== "") {
            writer.uint32(58).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditDataSource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSourceId = reader.int64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.executable = reader.bytes();
                    break;
                case 5:
                    message.fee.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.owner = reader.string();
                    break;
                case 7:
                    message.sender = reader.string();
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
            dataSourceId: isSet(object.dataSourceId) ? Long.fromValue(object.dataSourceId) : Long.ZERO,
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            executable: isSet(object.executable) ? bytesFromBase64(object.executable) : new Uint8Array(),
            fee: Array.isArray(object === null || object === void 0 ? void 0 : object.fee) ? object.fee.map((e) => Coin.fromJSON(e)) : [],
            owner: isSet(object.owner) ? String(object.owner) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.dataSourceId !== undefined && (obj.dataSourceId = (message.dataSourceId || Long.ZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.executable !== undefined &&
            (obj.executable = base64FromBytes(message.executable !== undefined ? message.executable : new Uint8Array()));
        if (message.fee) {
            obj.fee = message.fee.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.fee = [];
        }
        message.owner !== undefined && (obj.owner = message.owner);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    create(base) {
        return MsgEditDataSource.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgEditDataSource();
        message.dataSourceId = (object.dataSourceId !== undefined && object.dataSourceId !== null)
            ? Long.fromValue(object.dataSourceId)
            : Long.ZERO;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.executable = (_c = object.executable) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.fee = ((_d = object.fee) === null || _d === void 0 ? void 0 : _d.map((e) => Coin.fromPartial(e))) || [];
        message.owner = (_e = object.owner) !== null && _e !== void 0 ? _e : "";
        message.sender = (_f = object.sender) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgEditDataSourceResponse() {
    return {};
}
export const MsgEditDataSourceResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditDataSourceResponse();
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
        return MsgEditDataSourceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgEditDataSourceResponse();
        return message;
    },
};
function createBaseMsgCreateOracleScript() {
    return { name: "", description: "", schema: "", sourceCodeUrl: "", code: new Uint8Array(), owner: "", sender: "" };
}
export const MsgCreateOracleScript = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.schema !== "") {
            writer.uint32(26).string(message.schema);
        }
        if (message.sourceCodeUrl !== "") {
            writer.uint32(34).string(message.sourceCodeUrl);
        }
        if (message.code.length !== 0) {
            writer.uint32(42).bytes(message.code);
        }
        if (message.owner !== "") {
            writer.uint32(50).string(message.owner);
        }
        if (message.sender !== "") {
            writer.uint32(58).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateOracleScript();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.schema = reader.string();
                    break;
                case 4:
                    message.sourceCodeUrl = reader.string();
                    break;
                case 5:
                    message.code = reader.bytes();
                    break;
                case 6:
                    message.owner = reader.string();
                    break;
                case 7:
                    message.sender = reader.string();
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
            description: isSet(object.description) ? String(object.description) : "",
            schema: isSet(object.schema) ? String(object.schema) : "",
            sourceCodeUrl: isSet(object.sourceCodeUrl) ? String(object.sourceCodeUrl) : "",
            code: isSet(object.code) ? bytesFromBase64(object.code) : new Uint8Array(),
            owner: isSet(object.owner) ? String(object.owner) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.schema !== undefined && (obj.schema = message.schema);
        message.sourceCodeUrl !== undefined && (obj.sourceCodeUrl = message.sourceCodeUrl);
        message.code !== undefined &&
            (obj.code = base64FromBytes(message.code !== undefined ? message.code : new Uint8Array()));
        message.owner !== undefined && (obj.owner = message.owner);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    create(base) {
        return MsgCreateOracleScript.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMsgCreateOracleScript();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.schema = (_c = object.schema) !== null && _c !== void 0 ? _c : "";
        message.sourceCodeUrl = (_d = object.sourceCodeUrl) !== null && _d !== void 0 ? _d : "";
        message.code = (_e = object.code) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.owner = (_f = object.owner) !== null && _f !== void 0 ? _f : "";
        message.sender = (_g = object.sender) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseMsgCreateOracleScriptResponse() {
    return {};
}
export const MsgCreateOracleScriptResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateOracleScriptResponse();
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
        return MsgCreateOracleScriptResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgCreateOracleScriptResponse();
        return message;
    },
};
function createBaseMsgEditOracleScript() {
    return {
        oracleScriptId: Long.ZERO,
        name: "",
        description: "",
        schema: "",
        sourceCodeUrl: "",
        code: new Uint8Array(),
        owner: "",
        sender: "",
    };
}
export const MsgEditOracleScript = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.schema !== "") {
            writer.uint32(34).string(message.schema);
        }
        if (message.sourceCodeUrl !== "") {
            writer.uint32(42).string(message.sourceCodeUrl);
        }
        if (message.code.length !== 0) {
            writer.uint32(50).bytes(message.code);
        }
        if (message.owner !== "") {
            writer.uint32(58).string(message.owner);
        }
        if (message.sender !== "") {
            writer.uint32(66).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditOracleScript();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScriptId = reader.int64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.schema = reader.string();
                    break;
                case 5:
                    message.sourceCodeUrl = reader.string();
                    break;
                case 6:
                    message.code = reader.bytes();
                    break;
                case 7:
                    message.owner = reader.string();
                    break;
                case 8:
                    message.sender = reader.string();
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
            oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO,
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            schema: isSet(object.schema) ? String(object.schema) : "",
            sourceCodeUrl: isSet(object.sourceCodeUrl) ? String(object.sourceCodeUrl) : "",
            code: isSet(object.code) ? bytesFromBase64(object.code) : new Uint8Array(),
            owner: isSet(object.owner) ? String(object.owner) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.schema !== undefined && (obj.schema = message.schema);
        message.sourceCodeUrl !== undefined && (obj.sourceCodeUrl = message.sourceCodeUrl);
        message.code !== undefined &&
            (obj.code = base64FromBytes(message.code !== undefined ? message.code : new Uint8Array()));
        message.owner !== undefined && (obj.owner = message.owner);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    create(base) {
        return MsgEditOracleScript.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseMsgEditOracleScript();
        message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
            ? Long.fromValue(object.oracleScriptId)
            : Long.ZERO;
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.schema = (_c = object.schema) !== null && _c !== void 0 ? _c : "";
        message.sourceCodeUrl = (_d = object.sourceCodeUrl) !== null && _d !== void 0 ? _d : "";
        message.code = (_e = object.code) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.owner = (_f = object.owner) !== null && _f !== void 0 ? _f : "";
        message.sender = (_g = object.sender) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseMsgEditOracleScriptResponse() {
    return {};
}
export const MsgEditOracleScriptResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditOracleScriptResponse();
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
        return MsgEditOracleScriptResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgEditOracleScriptResponse();
        return message;
    },
};
function createBaseMsgActivate() {
    return { validator: "" };
}
export const MsgActivate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgActivate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { validator: isSet(object.validator) ? String(object.validator) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        return obj;
    },
    create(base) {
        return MsgActivate.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgActivate();
        message.validator = (_a = object.validator) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgActivateResponse() {
    return {};
}
export const MsgActivateResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgActivateResponse();
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
        return MsgActivateResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgActivateResponse();
        return message;
    },
};
function createBaseMsgAddReporter() {
    return { validator: "", reporter: "" };
}
export const MsgAddReporter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.reporter !== "") {
            writer.uint32(18).string(message.reporter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddReporter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.string();
                    break;
                case 2:
                    message.reporter = reader.string();
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
            validator: isSet(object.validator) ? String(object.validator) : "",
            reporter: isSet(object.reporter) ? String(object.reporter) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        return obj;
    },
    create(base) {
        return MsgAddReporter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgAddReporter();
        message.validator = (_a = object.validator) !== null && _a !== void 0 ? _a : "";
        message.reporter = (_b = object.reporter) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgAddReporterResponse() {
    return {};
}
export const MsgAddReporterResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAddReporterResponse();
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
        return MsgAddReporterResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgAddReporterResponse();
        return message;
    },
};
function createBaseMsgRemoveReporter() {
    return { validator: "", reporter: "" };
}
export const MsgRemoveReporter = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.reporter !== "") {
            writer.uint32(18).string(message.reporter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveReporter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.string();
                    break;
                case 2:
                    message.reporter = reader.string();
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
            validator: isSet(object.validator) ? String(object.validator) : "",
            reporter: isSet(object.reporter) ? String(object.reporter) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.reporter !== undefined && (obj.reporter = message.reporter);
        return obj;
    },
    create(base) {
        return MsgRemoveReporter.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRemoveReporter();
        message.validator = (_a = object.validator) !== null && _a !== void 0 ? _a : "";
        message.reporter = (_b = object.reporter) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgRemoveReporterResponse() {
    return {};
}
export const MsgRemoveReporterResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRemoveReporterResponse();
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
        return MsgRemoveReporterResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseMsgRemoveReporterResponse();
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "oracle.v1.Msg";
        this.rpc = rpc;
        this.RequestData = this.RequestData.bind(this);
        this.ReportData = this.ReportData.bind(this);
        this.CreateDataSource = this.CreateDataSource.bind(this);
        this.EditDataSource = this.EditDataSource.bind(this);
        this.CreateOracleScript = this.CreateOracleScript.bind(this);
        this.EditOracleScript = this.EditOracleScript.bind(this);
        this.Activate = this.Activate.bind(this);
        this.AddReporter = this.AddReporter.bind(this);
        this.RemoveReporter = this.RemoveReporter.bind(this);
    }
    RequestData(request) {
        const data = MsgRequestData.encode(request).finish();
        const promise = this.rpc.request(this.service, "RequestData", data);
        return promise.then((data) => MsgRequestDataResponse.decode(new _m0.Reader(data)));
    }
    ReportData(request) {
        const data = MsgReportData.encode(request).finish();
        const promise = this.rpc.request(this.service, "ReportData", data);
        return promise.then((data) => MsgReportDataResponse.decode(new _m0.Reader(data)));
    }
    CreateDataSource(request) {
        const data = MsgCreateDataSource.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateDataSource", data);
        return promise.then((data) => MsgCreateDataSourceResponse.decode(new _m0.Reader(data)));
    }
    EditDataSource(request) {
        const data = MsgEditDataSource.encode(request).finish();
        const promise = this.rpc.request(this.service, "EditDataSource", data);
        return promise.then((data) => MsgEditDataSourceResponse.decode(new _m0.Reader(data)));
    }
    CreateOracleScript(request) {
        const data = MsgCreateOracleScript.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateOracleScript", data);
        return promise.then((data) => MsgCreateOracleScriptResponse.decode(new _m0.Reader(data)));
    }
    EditOracleScript(request) {
        const data = MsgEditOracleScript.encode(request).finish();
        const promise = this.rpc.request(this.service, "EditOracleScript", data);
        return promise.then((data) => MsgEditOracleScriptResponse.decode(new _m0.Reader(data)));
    }
    Activate(request) {
        const data = MsgActivate.encode(request).finish();
        const promise = this.rpc.request(this.service, "Activate", data);
        return promise.then((data) => MsgActivateResponse.decode(new _m0.Reader(data)));
    }
    AddReporter(request) {
        const data = MsgAddReporter.encode(request).finish();
        const promise = this.rpc.request(this.service, "AddReporter", data);
        return promise.then((data) => MsgAddReporterResponse.decode(new _m0.Reader(data)));
    }
    RemoveReporter(request) {
        const data = MsgRemoveReporter.encode(request).finish();
        const promise = this.rpc.request(this.service, "RemoveReporter", data);
        return promise.then((data) => MsgRemoveReporterResponse.decode(new _m0.Reader(data)));
    }
}
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
//# sourceMappingURL=tx.js.map