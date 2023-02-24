/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
export const protobufPackage = "oracle.v1";
/** ResolveStatus encodes the status of an oracle request. */
export var ResolveStatus;
(function (ResolveStatus) {
    /** RESOLVE_STATUS_OPEN_UNSPECIFIED - Open - the request is not yet resolved. */
    ResolveStatus[ResolveStatus["RESOLVE_STATUS_OPEN_UNSPECIFIED"] = 0] = "RESOLVE_STATUS_OPEN_UNSPECIFIED";
    /** RESOLVE_STATUS_SUCCESS - Success - the request has been resolved successfully with no errors. */
    ResolveStatus[ResolveStatus["RESOLVE_STATUS_SUCCESS"] = 1] = "RESOLVE_STATUS_SUCCESS";
    /** RESOLVE_STATUS_FAILURE - Failure - an error occured during the request's resolve call. */
    ResolveStatus[ResolveStatus["RESOLVE_STATUS_FAILURE"] = 2] = "RESOLVE_STATUS_FAILURE";
    /**
     * RESOLVE_STATUS_EXPIRED - Expired - the request does not get enough reports from validator within the
     * timeframe.
     */
    ResolveStatus[ResolveStatus["RESOLVE_STATUS_EXPIRED"] = 3] = "RESOLVE_STATUS_EXPIRED";
    ResolveStatus[ResolveStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResolveStatus || (ResolveStatus = {}));
export function resolveStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "RESOLVE_STATUS_OPEN_UNSPECIFIED":
            return ResolveStatus.RESOLVE_STATUS_OPEN_UNSPECIFIED;
        case 1:
        case "RESOLVE_STATUS_SUCCESS":
            return ResolveStatus.RESOLVE_STATUS_SUCCESS;
        case 2:
        case "RESOLVE_STATUS_FAILURE":
            return ResolveStatus.RESOLVE_STATUS_FAILURE;
        case 3:
        case "RESOLVE_STATUS_EXPIRED":
            return ResolveStatus.RESOLVE_STATUS_EXPIRED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResolveStatus.UNRECOGNIZED;
    }
}
export function resolveStatusToJSON(object) {
    switch (object) {
        case ResolveStatus.RESOLVE_STATUS_OPEN_UNSPECIFIED:
            return "RESOLVE_STATUS_OPEN_UNSPECIFIED";
        case ResolveStatus.RESOLVE_STATUS_SUCCESS:
            return "RESOLVE_STATUS_SUCCESS";
        case ResolveStatus.RESOLVE_STATUS_FAILURE:
            return "RESOLVE_STATUS_FAILURE";
        case ResolveStatus.RESOLVE_STATUS_EXPIRED:
            return "RESOLVE_STATUS_EXPIRED";
        case ResolveStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseDataSource() {
    return { id: Long.ZERO, owner: "", name: "", description: "", filename: "", fee: [] };
}
export const DataSource = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).int64(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.filename !== "") {
            writer.uint32(42).string(message.filename);
        }
        for (const v of message.fee) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataSource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.filename = reader.string();
                    break;
                case 6:
                    message.fee.push(Coin.decode(reader, reader.uint32()));
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
            id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            filename: isSet(object.filename) ? String(object.filename) : "",
            fee: Array.isArray(object === null || object === void 0 ? void 0 : object.fee) ? object.fee.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.filename !== undefined && (obj.filename = message.filename);
        if (message.fee) {
            obj.fee = message.fee.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.fee = [];
        }
        return obj;
    },
    create(base) {
        return DataSource.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseDataSource();
        message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.filename = (_d = object.filename) !== null && _d !== void 0 ? _d : "";
        message.fee = ((_e = object.fee) === null || _e === void 0 ? void 0 : _e.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOracleScript() {
    return { id: Long.ZERO, owner: "", name: "", description: "", filename: "", schema: "", sourceCodeUrl: "" };
}
export const OracleScript = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).int64(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description);
        }
        if (message.filename !== "") {
            writer.uint32(42).string(message.filename);
        }
        if (message.schema !== "") {
            writer.uint32(50).string(message.schema);
        }
        if (message.sourceCodeUrl !== "") {
            writer.uint32(58).string(message.sourceCodeUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleScript();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.filename = reader.string();
                    break;
                case 6:
                    message.schema = reader.string();
                    break;
                case 7:
                    message.sourceCodeUrl = reader.string();
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
            id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            name: isSet(object.name) ? String(object.name) : "",
            description: isSet(object.description) ? String(object.description) : "",
            filename: isSet(object.filename) ? String(object.filename) : "",
            schema: isSet(object.schema) ? String(object.schema) : "",
            sourceCodeUrl: isSet(object.sourceCodeUrl) ? String(object.sourceCodeUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined && (obj.description = message.description);
        message.filename !== undefined && (obj.filename = message.filename);
        message.schema !== undefined && (obj.schema = message.schema);
        message.sourceCodeUrl !== undefined && (obj.sourceCodeUrl = message.sourceCodeUrl);
        return obj;
    },
    create(base) {
        return OracleScript.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseOracleScript();
        message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        message.filename = (_d = object.filename) !== null && _d !== void 0 ? _d : "";
        message.schema = (_e = object.schema) !== null && _e !== void 0 ? _e : "";
        message.sourceCodeUrl = (_f = object.sourceCodeUrl) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseRawRequest() {
    return { externalId: Long.ZERO, dataSourceId: Long.ZERO, calldata: new Uint8Array() };
}
export const RawRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.externalId.isZero()) {
            writer.uint32(8).int64(message.externalId);
        }
        if (!message.dataSourceId.isZero()) {
            writer.uint32(16).int64(message.dataSourceId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(26).bytes(message.calldata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRawRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalId = reader.int64();
                    break;
                case 2:
                    message.dataSourceId = reader.int64();
                    break;
                case 3:
                    message.calldata = reader.bytes();
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
            externalId: isSet(object.externalId) ? Long.fromValue(object.externalId) : Long.ZERO,
            dataSourceId: isSet(object.dataSourceId) ? Long.fromValue(object.dataSourceId) : Long.ZERO,
            calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.externalId !== undefined && (obj.externalId = (message.externalId || Long.ZERO).toString());
        message.dataSourceId !== undefined && (obj.dataSourceId = (message.dataSourceId || Long.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        return obj;
    },
    create(base) {
        return RawRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRawRequest();
        message.externalId = (object.externalId !== undefined && object.externalId !== null)
            ? Long.fromValue(object.externalId)
            : Long.ZERO;
        message.dataSourceId = (object.dataSourceId !== undefined && object.dataSourceId !== null)
            ? Long.fromValue(object.dataSourceId)
            : Long.ZERO;
        message.calldata = (_a = object.calldata) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseRawReport() {
    return { externalId: Long.ZERO, exitCode: 0, data: new Uint8Array() };
}
export const RawReport = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.externalId.isZero()) {
            writer.uint32(8).int64(message.externalId);
        }
        if (message.exitCode !== 0) {
            writer.uint32(16).uint32(message.exitCode);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRawReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.externalId = reader.int64();
                    break;
                case 2:
                    message.exitCode = reader.uint32();
                    break;
                case 3:
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
            externalId: isSet(object.externalId) ? Long.fromValue(object.externalId) : Long.ZERO,
            exitCode: isSet(object.exitCode) ? Number(object.exitCode) : 0,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.externalId !== undefined && (obj.externalId = (message.externalId || Long.ZERO).toString());
        message.exitCode !== undefined && (obj.exitCode = Math.round(message.exitCode));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    create(base) {
        return RawReport.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRawReport();
        message.externalId = (object.externalId !== undefined && object.externalId !== null)
            ? Long.fromValue(object.externalId)
            : Long.ZERO;
        message.exitCode = (_a = object.exitCode) !== null && _a !== void 0 ? _a : 0;
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseRequest() {
    return {
        id: Long.ZERO,
        oracleScriptId: Long.ZERO,
        calldata: new Uint8Array(),
        requestedValidators: [],
        minCount: Long.UZERO,
        requestHeight: Long.ZERO,
        requestTime: Long.UZERO,
        clientId: "",
        rawRequests: [],
        ibcSource: undefined,
        executeGas: Long.UZERO,
    };
}
export const Request = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).int64(message.id);
        }
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(16).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(26).bytes(message.calldata);
        }
        for (const v of message.requestedValidators) {
            writer.uint32(34).string(v);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(40).uint64(message.minCount);
        }
        if (!message.requestHeight.isZero()) {
            writer.uint32(48).int64(message.requestHeight);
        }
        if (!message.requestTime.isZero()) {
            writer.uint32(56).uint64(message.requestTime);
        }
        if (message.clientId !== "") {
            writer.uint32(66).string(message.clientId);
        }
        for (const v of message.rawRequests) {
            RawRequest.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.ibcSource !== undefined) {
            IBCSource.encode(message.ibcSource, writer.uint32(82).fork()).ldelim();
        }
        if (!message.executeGas.isZero()) {
            writer.uint32(88).uint64(message.executeGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.oracleScriptId = reader.int64();
                    break;
                case 3:
                    message.calldata = reader.bytes();
                    break;
                case 4:
                    message.requestedValidators.push(reader.string());
                    break;
                case 5:
                    message.minCount = reader.uint64();
                    break;
                case 6:
                    message.requestHeight = reader.int64();
                    break;
                case 7:
                    message.requestTime = reader.uint64();
                    break;
                case 8:
                    message.clientId = reader.string();
                    break;
                case 9:
                    message.rawRequests.push(RawRequest.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.ibcSource = IBCSource.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.executeGas = reader.uint64();
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
            id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
            oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO,
            calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
            requestedValidators: Array.isArray(object === null || object === void 0 ? void 0 : object.requestedValidators)
                ? object.requestedValidators.map((e) => String(e))
                : [],
            minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.UZERO,
            requestHeight: isSet(object.requestHeight) ? Long.fromValue(object.requestHeight) : Long.ZERO,
            requestTime: isSet(object.requestTime) ? Long.fromValue(object.requestTime) : Long.UZERO,
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            rawRequests: Array.isArray(object === null || object === void 0 ? void 0 : object.rawRequests) ? object.rawRequests.map((e) => RawRequest.fromJSON(e)) : [],
            ibcSource: isSet(object.ibcSource) ? IBCSource.fromJSON(object.ibcSource) : undefined,
            executeGas: isSet(object.executeGas) ? Long.fromValue(object.executeGas) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
        message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        if (message.requestedValidators) {
            obj.requestedValidators = message.requestedValidators.map((e) => e);
        }
        else {
            obj.requestedValidators = [];
        }
        message.minCount !== undefined && (obj.minCount = (message.minCount || Long.UZERO).toString());
        message.requestHeight !== undefined && (obj.requestHeight = (message.requestHeight || Long.ZERO).toString());
        message.requestTime !== undefined && (obj.requestTime = (message.requestTime || Long.UZERO).toString());
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.rawRequests) {
            obj.rawRequests = message.rawRequests.map((e) => e ? RawRequest.toJSON(e) : undefined);
        }
        else {
            obj.rawRequests = [];
        }
        message.ibcSource !== undefined &&
            (obj.ibcSource = message.ibcSource ? IBCSource.toJSON(message.ibcSource) : undefined);
        message.executeGas !== undefined && (obj.executeGas = (message.executeGas || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return Request.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseRequest();
        message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
        message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
            ? Long.fromValue(object.oracleScriptId)
            : Long.ZERO;
        message.calldata = (_a = object.calldata) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.requestedValidators = ((_b = object.requestedValidators) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        message.minCount = (object.minCount !== undefined && object.minCount !== null)
            ? Long.fromValue(object.minCount)
            : Long.UZERO;
        message.requestHeight = (object.requestHeight !== undefined && object.requestHeight !== null)
            ? Long.fromValue(object.requestHeight)
            : Long.ZERO;
        message.requestTime = (object.requestTime !== undefined && object.requestTime !== null)
            ? Long.fromValue(object.requestTime)
            : Long.UZERO;
        message.clientId = (_c = object.clientId) !== null && _c !== void 0 ? _c : "";
        message.rawRequests = ((_d = object.rawRequests) === null || _d === void 0 ? void 0 : _d.map((e) => RawRequest.fromPartial(e))) || [];
        message.ibcSource = (object.ibcSource !== undefined && object.ibcSource !== null)
            ? IBCSource.fromPartial(object.ibcSource)
            : undefined;
        message.executeGas = (object.executeGas !== undefined && object.executeGas !== null)
            ? Long.fromValue(object.executeGas)
            : Long.UZERO;
        return message;
    },
};
function createBaseReport() {
    return { validator: "", inBeforeResolve: false, rawReports: [] };
}
export const Report = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator !== "") {
            writer.uint32(10).string(message.validator);
        }
        if (message.inBeforeResolve === true) {
            writer.uint32(16).bool(message.inBeforeResolve);
        }
        for (const v of message.rawReports) {
            RawReport.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = reader.string();
                    break;
                case 2:
                    message.inBeforeResolve = reader.bool();
                    break;
                case 3:
                    message.rawReports.push(RawReport.decode(reader, reader.uint32()));
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
            inBeforeResolve: isSet(object.inBeforeResolve) ? Boolean(object.inBeforeResolve) : false,
            rawReports: Array.isArray(object === null || object === void 0 ? void 0 : object.rawReports) ? object.rawReports.map((e) => RawReport.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined && (obj.validator = message.validator);
        message.inBeforeResolve !== undefined && (obj.inBeforeResolve = message.inBeforeResolve);
        if (message.rawReports) {
            obj.rawReports = message.rawReports.map((e) => e ? RawReport.toJSON(e) : undefined);
        }
        else {
            obj.rawReports = [];
        }
        return obj;
    },
    create(base) {
        return Report.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseReport();
        message.validator = (_a = object.validator) !== null && _a !== void 0 ? _a : "";
        message.inBeforeResolve = (_b = object.inBeforeResolve) !== null && _b !== void 0 ? _b : false;
        message.rawReports = ((_c = object.rawReports) === null || _c === void 0 ? void 0 : _c.map((e) => RawReport.fromPartial(e))) || [];
        return message;
    },
};
function createBaseOracleRequestPacketData() {
    return {
        clientId: "",
        oracleScriptId: Long.ZERO,
        calldata: new Uint8Array(),
        askCount: Long.UZERO,
        minCount: Long.UZERO,
        feeLimit: [],
        requestKey: "",
        prepareGas: Long.UZERO,
        executeGas: Long.UZERO,
    };
}
export const OracleRequestPacketData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(16).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(26).bytes(message.calldata);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(32).uint64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(40).uint64(message.minCount);
        }
        for (const v of message.feeLimit) {
            Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.requestKey !== "") {
            writer.uint32(58).string(message.requestKey);
        }
        if (!message.prepareGas.isZero()) {
            writer.uint32(64).uint64(message.prepareGas);
        }
        if (!message.executeGas.isZero()) {
            writer.uint32(72).uint64(message.executeGas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleRequestPacketData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.oracleScriptId = reader.int64();
                    break;
                case 3:
                    message.calldata = reader.bytes();
                    break;
                case 4:
                    message.askCount = reader.uint64();
                    break;
                case 5:
                    message.minCount = reader.uint64();
                    break;
                case 6:
                    message.feeLimit.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.requestKey = reader.string();
                    break;
                case 8:
                    message.prepareGas = reader.uint64();
                    break;
                case 9:
                    message.executeGas = reader.uint64();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO,
            calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
            askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.UZERO,
            minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.UZERO,
            feeLimit: Array.isArray(object === null || object === void 0 ? void 0 : object.feeLimit) ? object.feeLimit.map((e) => Coin.fromJSON(e)) : [],
            requestKey: isSet(object.requestKey) ? String(object.requestKey) : "",
            prepareGas: isSet(object.prepareGas) ? Long.fromValue(object.prepareGas) : Long.UZERO,
            executeGas: isSet(object.executeGas) ? Long.fromValue(object.executeGas) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        message.askCount !== undefined && (obj.askCount = (message.askCount || Long.UZERO).toString());
        message.minCount !== undefined && (obj.minCount = (message.minCount || Long.UZERO).toString());
        if (message.feeLimit) {
            obj.feeLimit = message.feeLimit.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.feeLimit = [];
        }
        message.requestKey !== undefined && (obj.requestKey = message.requestKey);
        message.prepareGas !== undefined && (obj.prepareGas = (message.prepareGas || Long.UZERO).toString());
        message.executeGas !== undefined && (obj.executeGas = (message.executeGas || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return OracleRequestPacketData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseOracleRequestPacketData();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
            ? Long.fromValue(object.oracleScriptId)
            : Long.ZERO;
        message.calldata = (_b = object.calldata) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.askCount = (object.askCount !== undefined && object.askCount !== null)
            ? Long.fromValue(object.askCount)
            : Long.UZERO;
        message.minCount = (object.minCount !== undefined && object.minCount !== null)
            ? Long.fromValue(object.minCount)
            : Long.UZERO;
        message.feeLimit = ((_c = object.feeLimit) === null || _c === void 0 ? void 0 : _c.map((e) => Coin.fromPartial(e))) || [];
        message.requestKey = (_d = object.requestKey) !== null && _d !== void 0 ? _d : "";
        message.prepareGas = (object.prepareGas !== undefined && object.prepareGas !== null)
            ? Long.fromValue(object.prepareGas)
            : Long.UZERO;
        message.executeGas = (object.executeGas !== undefined && object.executeGas !== null)
            ? Long.fromValue(object.executeGas)
            : Long.UZERO;
        return message;
    },
};
function createBaseOracleRequestPacketAcknowledgement() {
    return { requestId: Long.ZERO };
}
export const OracleRequestPacketAcknowledgement = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleRequestPacketAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.ZERO };
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined && (obj.requestId = (message.requestId || Long.ZERO).toString());
        return obj;
    },
    create(base) {
        return OracleRequestPacketAcknowledgement.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseOracleRequestPacketAcknowledgement();
        message.requestId = (object.requestId !== undefined && object.requestId !== null)
            ? Long.fromValue(object.requestId)
            : Long.ZERO;
        return message;
    },
};
function createBaseOracleResponsePacketData() {
    return {
        clientId: "",
        requestId: Long.ZERO,
        ansCount: Long.UZERO,
        requestTime: Long.ZERO,
        resolveTime: Long.ZERO,
        resolveStatus: 0,
        result: new Uint8Array(),
    };
}
export const OracleResponsePacketData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (!message.requestId.isZero()) {
            writer.uint32(16).int64(message.requestId);
        }
        if (!message.ansCount.isZero()) {
            writer.uint32(24).uint64(message.ansCount);
        }
        if (!message.requestTime.isZero()) {
            writer.uint32(32).int64(message.requestTime);
        }
        if (!message.resolveTime.isZero()) {
            writer.uint32(40).int64(message.resolveTime);
        }
        if (message.resolveStatus !== 0) {
            writer.uint32(48).int32(message.resolveStatus);
        }
        if (message.result.length !== 0) {
            writer.uint32(58).bytes(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOracleResponsePacketData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.requestId = reader.int64();
                    break;
                case 3:
                    message.ansCount = reader.uint64();
                    break;
                case 4:
                    message.requestTime = reader.int64();
                    break;
                case 5:
                    message.resolveTime = reader.int64();
                    break;
                case 6:
                    message.resolveStatus = reader.int32();
                    break;
                case 7:
                    message.result = reader.bytes();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.ZERO,
            ansCount: isSet(object.ansCount) ? Long.fromValue(object.ansCount) : Long.UZERO,
            requestTime: isSet(object.requestTime) ? Long.fromValue(object.requestTime) : Long.ZERO,
            resolveTime: isSet(object.resolveTime) ? Long.fromValue(object.resolveTime) : Long.ZERO,
            resolveStatus: isSet(object.resolveStatus) ? resolveStatusFromJSON(object.resolveStatus) : 0,
            result: isSet(object.result) ? bytesFromBase64(object.result) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.requestId !== undefined && (obj.requestId = (message.requestId || Long.ZERO).toString());
        message.ansCount !== undefined && (obj.ansCount = (message.ansCount || Long.UZERO).toString());
        message.requestTime !== undefined && (obj.requestTime = (message.requestTime || Long.ZERO).toString());
        message.resolveTime !== undefined && (obj.resolveTime = (message.resolveTime || Long.ZERO).toString());
        message.resolveStatus !== undefined && (obj.resolveStatus = resolveStatusToJSON(message.resolveStatus));
        message.result !== undefined &&
            (obj.result = base64FromBytes(message.result !== undefined ? message.result : new Uint8Array()));
        return obj;
    },
    create(base) {
        return OracleResponsePacketData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOracleResponsePacketData();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.requestId = (object.requestId !== undefined && object.requestId !== null)
            ? Long.fromValue(object.requestId)
            : Long.ZERO;
        message.ansCount = (object.ansCount !== undefined && object.ansCount !== null)
            ? Long.fromValue(object.ansCount)
            : Long.UZERO;
        message.requestTime = (object.requestTime !== undefined && object.requestTime !== null)
            ? Long.fromValue(object.requestTime)
            : Long.ZERO;
        message.resolveTime = (object.resolveTime !== undefined && object.resolveTime !== null)
            ? Long.fromValue(object.resolveTime)
            : Long.ZERO;
        message.resolveStatus = (_b = object.resolveStatus) !== null && _b !== void 0 ? _b : 0;
        message.result = (_c = object.result) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseRequestResult() {
    return { request: undefined, result: undefined, reports: [] };
}
export const RequestResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.request !== undefined) {
            Request.encode(message.request, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.reports) {
            Report.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.request = Request.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = Result.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reports.push(Report.decode(reader, reader.uint32()));
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
            request: isSet(object.request) ? Request.fromJSON(object.request) : undefined,
            result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
            reports: Array.isArray(object === null || object === void 0 ? void 0 : object.reports) ? object.reports.map((e) => Report.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.request !== undefined && (obj.request = message.request ? Request.toJSON(message.request) : undefined);
        message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
        if (message.reports) {
            obj.reports = message.reports.map((e) => e ? Report.toJSON(e) : undefined);
        }
        else {
            obj.reports = [];
        }
        return obj;
    },
    create(base) {
        return RequestResult.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRequestResult();
        message.request = (object.request !== undefined && object.request !== null)
            ? Request.fromPartial(object.request)
            : undefined;
        message.result = (object.result !== undefined && object.result !== null)
            ? Result.fromPartial(object.result)
            : undefined;
        message.reports = ((_a = object.reports) === null || _a === void 0 ? void 0 : _a.map((e) => Report.fromPartial(e))) || [];
        return message;
    },
};
function createBaseResult() {
    return {
        clientId: "",
        oracleScriptId: Long.ZERO,
        calldata: new Uint8Array(),
        askCount: Long.UZERO,
        minCount: Long.UZERO,
        requestId: Long.ZERO,
        ansCount: Long.UZERO,
        requestTime: Long.ZERO,
        resolveTime: Long.ZERO,
        resolveStatus: 0,
        result: new Uint8Array(),
    };
}
export const Result = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(16).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(26).bytes(message.calldata);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(32).uint64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(40).uint64(message.minCount);
        }
        if (!message.requestId.isZero()) {
            writer.uint32(48).int64(message.requestId);
        }
        if (!message.ansCount.isZero()) {
            writer.uint32(56).uint64(message.ansCount);
        }
        if (!message.requestTime.isZero()) {
            writer.uint32(64).int64(message.requestTime);
        }
        if (!message.resolveTime.isZero()) {
            writer.uint32(72).int64(message.resolveTime);
        }
        if (message.resolveStatus !== 0) {
            writer.uint32(88).int32(message.resolveStatus);
        }
        if (message.result.length !== 0) {
            writer.uint32(82).bytes(message.result);
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
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.oracleScriptId = reader.int64();
                    break;
                case 3:
                    message.calldata = reader.bytes();
                    break;
                case 4:
                    message.askCount = reader.uint64();
                    break;
                case 5:
                    message.minCount = reader.uint64();
                    break;
                case 6:
                    message.requestId = reader.int64();
                    break;
                case 7:
                    message.ansCount = reader.uint64();
                    break;
                case 8:
                    message.requestTime = reader.int64();
                    break;
                case 9:
                    message.resolveTime = reader.int64();
                    break;
                case 11:
                    message.resolveStatus = reader.int32();
                    break;
                case 10:
                    message.result = reader.bytes();
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO,
            calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
            askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.UZERO,
            minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.UZERO,
            requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.ZERO,
            ansCount: isSet(object.ansCount) ? Long.fromValue(object.ansCount) : Long.UZERO,
            requestTime: isSet(object.requestTime) ? Long.fromValue(object.requestTime) : Long.ZERO,
            resolveTime: isSet(object.resolveTime) ? Long.fromValue(object.resolveTime) : Long.ZERO,
            resolveStatus: isSet(object.resolveStatus) ? resolveStatusFromJSON(object.resolveStatus) : 0,
            result: isSet(object.result) ? bytesFromBase64(object.result) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        message.askCount !== undefined && (obj.askCount = (message.askCount || Long.UZERO).toString());
        message.minCount !== undefined && (obj.minCount = (message.minCount || Long.UZERO).toString());
        message.requestId !== undefined && (obj.requestId = (message.requestId || Long.ZERO).toString());
        message.ansCount !== undefined && (obj.ansCount = (message.ansCount || Long.UZERO).toString());
        message.requestTime !== undefined && (obj.requestTime = (message.requestTime || Long.ZERO).toString());
        message.resolveTime !== undefined && (obj.resolveTime = (message.resolveTime || Long.ZERO).toString());
        message.resolveStatus !== undefined && (obj.resolveStatus = resolveStatusToJSON(message.resolveStatus));
        message.result !== undefined &&
            (obj.result = base64FromBytes(message.result !== undefined ? message.result : new Uint8Array()));
        return obj;
    },
    create(base) {
        return Result.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseResult();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
            ? Long.fromValue(object.oracleScriptId)
            : Long.ZERO;
        message.calldata = (_b = object.calldata) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.askCount = (object.askCount !== undefined && object.askCount !== null)
            ? Long.fromValue(object.askCount)
            : Long.UZERO;
        message.minCount = (object.minCount !== undefined && object.minCount !== null)
            ? Long.fromValue(object.minCount)
            : Long.UZERO;
        message.requestId = (object.requestId !== undefined && object.requestId !== null)
            ? Long.fromValue(object.requestId)
            : Long.ZERO;
        message.ansCount = (object.ansCount !== undefined && object.ansCount !== null)
            ? Long.fromValue(object.ansCount)
            : Long.UZERO;
        message.requestTime = (object.requestTime !== undefined && object.requestTime !== null)
            ? Long.fromValue(object.requestTime)
            : Long.ZERO;
        message.resolveTime = (object.resolveTime !== undefined && object.resolveTime !== null)
            ? Long.fromValue(object.resolveTime)
            : Long.ZERO;
        message.resolveStatus = (_c = object.resolveStatus) !== null && _c !== void 0 ? _c : 0;
        message.result = (_d = object.result) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseValidatorStatus() {
    return { isActive: false, since: undefined };
}
export const ValidatorStatus = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isActive === true) {
            writer.uint32(8).bool(message.isActive);
        }
        if (message.since !== undefined) {
            Timestamp.encode(toTimestamp(message.since), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isActive = reader.bool();
                    break;
                case 2:
                    message.since = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
            since: isSet(object.since) ? fromJsonTimestamp(object.since) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.isActive !== undefined && (obj.isActive = message.isActive);
        message.since !== undefined && (obj.since = message.since.toISOString());
        return obj;
    },
    create(base) {
        return ValidatorStatus.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorStatus();
        message.isActive = (_a = object.isActive) !== null && _a !== void 0 ? _a : false;
        message.since = (_b = object.since) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBasePendingResolveList() {
    return { requestIds: [] };
}
export const PendingResolveList = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.requestIds) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingResolveList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.requestIds.push(reader.int64());
                        }
                    }
                    else {
                        message.requestIds.push(reader.int64());
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
            requestIds: Array.isArray(object === null || object === void 0 ? void 0 : object.requestIds) ? object.requestIds.map((e) => Long.fromValue(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.requestIds) {
            obj.requestIds = message.requestIds.map((e) => (e || Long.ZERO).toString());
        }
        else {
            obj.requestIds = [];
        }
        return obj;
    },
    create(base) {
        return PendingResolveList.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePendingResolveList();
        message.requestIds = ((_a = object.requestIds) === null || _a === void 0 ? void 0 : _a.map((e) => Long.fromValue(e))) || [];
        return message;
    },
};
function createBaseIBCSource() {
    return { sourceChannel: "", sourcePort: "" };
}
export const IBCSource = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sourceChannel !== "") {
            writer.uint32(10).string(message.sourceChannel);
        }
        if (message.sourcePort !== "") {
            writer.uint32(18).string(message.sourcePort);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCSource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sourceChannel = reader.string();
                    break;
                case 2:
                    message.sourcePort = reader.string();
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
            sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
            sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
        message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
        return obj;
    },
    create(base) {
        return IBCSource.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIBCSource();
        message.sourceChannel = (_a = object.sourceChannel) !== null && _a !== void 0 ? _a : "";
        message.sourcePort = (_b = object.sourcePort) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseOraclePool() {
    return { dataProvidersPool: [] };
}
export const OraclePool = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.dataProvidersPool) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOraclePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataProvidersPool.push(Coin.decode(reader, reader.uint32()));
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
            dataProvidersPool: Array.isArray(object === null || object === void 0 ? void 0 : object.dataProvidersPool)
                ? object.dataProvidersPool.map((e) => Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.dataProvidersPool) {
            obj.dataProvidersPool = message.dataProvidersPool.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.dataProvidersPool = [];
        }
        return obj;
    },
    create(base) {
        return OraclePool.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOraclePool();
        message.dataProvidersPool = ((_a = object.dataProvidersPool) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDataProviderAccumulatedReward() {
    return { dataProvider: "", dataProviderReward: [] };
}
export const DataProviderAccumulatedReward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dataProvider !== "") {
            writer.uint32(10).string(message.dataProvider);
        }
        for (const v of message.dataProviderReward) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataProviderAccumulatedReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataProvider = reader.string();
                    break;
                case 2:
                    message.dataProviderReward.push(Coin.decode(reader, reader.uint32()));
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
            dataProvider: isSet(object.dataProvider) ? String(object.dataProvider) : "",
            dataProviderReward: Array.isArray(object === null || object === void 0 ? void 0 : object.dataProviderReward)
                ? object.dataProviderReward.map((e) => Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.dataProvider !== undefined && (obj.dataProvider = message.dataProvider);
        if (message.dataProviderReward) {
            obj.dataProviderReward = message.dataProviderReward.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.dataProviderReward = [];
        }
        return obj;
    },
    create(base) {
        return DataProviderAccumulatedReward.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDataProviderAccumulatedReward();
        message.dataProvider = (_a = object.dataProvider) !== null && _a !== void 0 ? _a : "";
        message.dataProviderReward = ((_b = object.dataProviderReward) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDataProvidersAccumulatedRewards() {
    return { currentRewardPerByte: [], accumulatedAmount: [] };
}
export const DataProvidersAccumulatedRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.currentRewardPerByte) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.accumulatedAmount) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataProvidersAccumulatedRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.currentRewardPerByte.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.accumulatedAmount.push(Coin.decode(reader, reader.uint32()));
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
            currentRewardPerByte: Array.isArray(object === null || object === void 0 ? void 0 : object.currentRewardPerByte)
                ? object.currentRewardPerByte.map((e) => Coin.fromJSON(e))
                : [],
            accumulatedAmount: Array.isArray(object === null || object === void 0 ? void 0 : object.accumulatedAmount)
                ? object.accumulatedAmount.map((e) => Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.currentRewardPerByte) {
            obj.currentRewardPerByte = message.currentRewardPerByte.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.currentRewardPerByte = [];
        }
        if (message.accumulatedAmount) {
            obj.accumulatedAmount = message.accumulatedAmount.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.accumulatedAmount = [];
        }
        return obj;
    },
    create(base) {
        return DataProvidersAccumulatedRewards.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDataProvidersAccumulatedRewards();
        message.currentRewardPerByte = ((_a = object.currentRewardPerByte) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
        message.accumulatedAmount = ((_b = object.accumulatedAmount) === null || _b === void 0 ? void 0 : _b.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAccumulatedPaymentsForData() {
    return { accumulatedAmount: [] };
}
export const AccumulatedPaymentsForData = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accumulatedAmount) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccumulatedPaymentsForData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accumulatedAmount.push(Coin.decode(reader, reader.uint32()));
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
            accumulatedAmount: Array.isArray(object === null || object === void 0 ? void 0 : object.accumulatedAmount)
                ? object.accumulatedAmount.map((e) => Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accumulatedAmount) {
            obj.accumulatedAmount = message.accumulatedAmount.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.accumulatedAmount = [];
        }
        return obj;
    },
    create(base) {
        return AccumulatedPaymentsForData.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAccumulatedPaymentsForData();
        message.accumulatedAmount = ((_a = object.accumulatedAmount) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseRequestVerification() {
    return { chainId: "", validator: "", requestId: Long.UZERO, externalId: Long.UZERO };
}
export const RequestVerification = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.validator !== "") {
            writer.uint32(18).string(message.validator);
        }
        if (!message.requestId.isZero()) {
            writer.uint32(24).uint64(message.requestId);
        }
        if (!message.externalId.isZero()) {
            writer.uint32(32).uint64(message.externalId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestVerification();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.validator = reader.string();
                    break;
                case 3:
                    message.requestId = reader.uint64();
                    break;
                case 4:
                    message.externalId = reader.uint64();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            validator: isSet(object.validator) ? String(object.validator) : "",
            requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.UZERO,
            externalId: isSet(object.externalId) ? Long.fromValue(object.externalId) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.validator !== undefined && (obj.validator = message.validator);
        message.requestId !== undefined && (obj.requestId = (message.requestId || Long.UZERO).toString());
        message.externalId !== undefined && (obj.externalId = (message.externalId || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return RequestVerification.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRequestVerification();
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.validator = (_b = object.validator) !== null && _b !== void 0 ? _b : "";
        message.requestId = (object.requestId !== undefined && object.requestId !== null)
            ? Long.fromValue(object.requestId)
            : Long.UZERO;
        message.externalId = (object.externalId !== undefined && object.externalId !== null)
            ? Long.fromValue(object.externalId)
            : Long.UZERO;
        return message;
    },
};
function createBaseIBCChannel() {
    return { portId: "", channelId: "" };
}
export const IBCChannel = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIBCChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
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
            portId: isSet(object.portId) ? String(object.portId) : "",
            channelId: isSet(object.channelId) ? String(object.channelId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        return obj;
    },
    create(base) {
        return IBCChannel.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIBCChannel();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
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
//# sourceMappingURL=oracle.js.map