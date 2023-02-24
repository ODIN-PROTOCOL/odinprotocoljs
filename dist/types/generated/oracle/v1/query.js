/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { DataSource, OracleScript, Report, Request, RequestResult, Result, ValidatorStatus } from "./oracle";
import { Params } from "./params";
export const protobufPackage = "oracle.v1";
function createBaseQueryCountsRequest() {
    return {};
}
export const QueryCountsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCountsRequest();
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
        return QueryCountsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryCountsRequest();
        return message;
    },
};
function createBaseQueryCountsResponse() {
    return { dataSourceCount: Long.ZERO, oracleScriptCount: Long.ZERO, requestCount: Long.ZERO };
}
export const QueryCountsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.dataSourceCount.isZero()) {
            writer.uint32(8).int64(message.dataSourceCount);
        }
        if (!message.oracleScriptCount.isZero()) {
            writer.uint32(16).int64(message.oracleScriptCount);
        }
        if (!message.requestCount.isZero()) {
            writer.uint32(24).int64(message.requestCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCountsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSourceCount = reader.int64();
                    break;
                case 2:
                    message.oracleScriptCount = reader.int64();
                    break;
                case 3:
                    message.requestCount = reader.int64();
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
            dataSourceCount: isSet(object.dataSourceCount) ? Long.fromValue(object.dataSourceCount) : Long.ZERO,
            oracleScriptCount: isSet(object.oracleScriptCount) ? Long.fromValue(object.oracleScriptCount) : Long.ZERO,
            requestCount: isSet(object.requestCount) ? Long.fromValue(object.requestCount) : Long.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.dataSourceCount !== undefined && (obj.dataSourceCount = (message.dataSourceCount || Long.ZERO).toString());
        message.oracleScriptCount !== undefined &&
            (obj.oracleScriptCount = (message.oracleScriptCount || Long.ZERO).toString());
        message.requestCount !== undefined && (obj.requestCount = (message.requestCount || Long.ZERO).toString());
        return obj;
    },
    create(base) {
        return QueryCountsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryCountsResponse();
        message.dataSourceCount = (object.dataSourceCount !== undefined && object.dataSourceCount !== null)
            ? Long.fromValue(object.dataSourceCount)
            : Long.ZERO;
        message.oracleScriptCount = (object.oracleScriptCount !== undefined && object.oracleScriptCount !== null)
            ? Long.fromValue(object.oracleScriptCount)
            : Long.ZERO;
        message.requestCount = (object.requestCount !== undefined && object.requestCount !== null)
            ? Long.fromValue(object.requestCount)
            : Long.ZERO;
        return message;
    },
};
function createBaseQueryDataRequest() {
    return { dataHash: "" };
}
export const QueryDataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dataHash !== "") {
            writer.uint32(10).string(message.dataHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { dataHash: isSet(object.dataHash) ? String(object.dataHash) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.dataHash !== undefined && (obj.dataHash = message.dataHash);
        return obj;
    },
    create(base) {
        return QueryDataRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDataRequest();
        message.dataHash = (_a = object.dataHash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDataResponse() {
    return { data: new Uint8Array() };
}
export const QueryDataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    create(base) {
        return QueryDataResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDataResponse();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseQueryDataSourceRequest() {
    return { dataSourceId: Long.ZERO };
}
export const QueryDataSourceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.dataSourceId.isZero()) {
            writer.uint32(8).int64(message.dataSourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataSourceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSourceId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { dataSourceId: isSet(object.dataSourceId) ? Long.fromValue(object.dataSourceId) : Long.ZERO };
    },
    toJSON(message) {
        const obj = {};
        message.dataSourceId !== undefined && (obj.dataSourceId = (message.dataSourceId || Long.ZERO).toString());
        return obj;
    },
    create(base) {
        return QueryDataSourceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDataSourceRequest();
        message.dataSourceId = (object.dataSourceId !== undefined && object.dataSourceId !== null)
            ? Long.fromValue(object.dataSourceId)
            : Long.ZERO;
        return message;
    },
};
function createBaseQueryDataSourceResponse() {
    return { dataSource: undefined };
}
export const QueryDataSourceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dataSource !== undefined) {
            DataSource.encode(message.dataSource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataSourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSource = DataSource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { dataSource: isSet(object.dataSource) ? DataSource.fromJSON(object.dataSource) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.dataSource !== undefined &&
            (obj.dataSource = message.dataSource ? DataSource.toJSON(message.dataSource) : undefined);
        return obj;
    },
    create(base) {
        return QueryDataSourceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDataSourceResponse();
        message.dataSource = (object.dataSource !== undefined && object.dataSource !== null)
            ? DataSource.fromPartial(object.dataSource)
            : undefined;
        return message;
    },
};
function createBaseQueryDataSourcesRequest() {
    return { pagination: undefined };
}
export const QueryDataSourcesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataSourcesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryDataSourcesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryDataSourcesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryDataSourcesResponse() {
    return { dataSources: [], pagination: undefined };
}
export const QueryDataSourcesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.dataSources) {
            DataSource.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataSourcesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataSources.push(DataSource.decode(reader, reader.uint32()));
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
            dataSources: Array.isArray(object === null || object === void 0 ? void 0 : object.dataSources) ? object.dataSources.map((e) => DataSource.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.dataSources) {
            obj.dataSources = message.dataSources.map((e) => e ? DataSource.toJSON(e) : undefined);
        }
        else {
            obj.dataSources = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryDataSourcesResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDataSourcesResponse();
        message.dataSources = ((_a = object.dataSources) === null || _a === void 0 ? void 0 : _a.map((e) => DataSource.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryOracleScriptRequest() {
    return { oracleScriptId: Long.ZERO };
}
export const QueryOracleScriptRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleScriptRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScriptId = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO };
    },
    toJSON(message) {
        const obj = {};
        message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
        return obj;
    },
    create(base) {
        return QueryOracleScriptRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOracleScriptRequest();
        message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
            ? Long.fromValue(object.oracleScriptId)
            : Long.ZERO;
        return message;
    },
};
function createBaseQueryOracleScriptResponse() {
    return { oracleScript: undefined };
}
export const QueryOracleScriptResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.oracleScript !== undefined) {
            OracleScript.encode(message.oracleScript, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleScriptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScript = OracleScript.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { oracleScript: isSet(object.oracleScript) ? OracleScript.fromJSON(object.oracleScript) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.oracleScript !== undefined &&
            (obj.oracleScript = message.oracleScript ? OracleScript.toJSON(message.oracleScript) : undefined);
        return obj;
    },
    create(base) {
        return QueryOracleScriptResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOracleScriptResponse();
        message.oracleScript = (object.oracleScript !== undefined && object.oracleScript !== null)
            ? OracleScript.fromPartial(object.oracleScript)
            : undefined;
        return message;
    },
};
function createBaseQueryOracleScriptsRequest() {
    return { pagination: undefined };
}
export const QueryOracleScriptsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleScriptsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryOracleScriptsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryOracleScriptsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryOracleScriptsResponse() {
    return { oracleScripts: [], pagination: undefined };
}
export const QueryOracleScriptsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.oracleScripts) {
            OracleScript.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryOracleScriptsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.oracleScripts.push(OracleScript.decode(reader, reader.uint32()));
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
            oracleScripts: Array.isArray(object === null || object === void 0 ? void 0 : object.oracleScripts)
                ? object.oracleScripts.map((e) => OracleScript.fromJSON(e))
                : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.oracleScripts) {
            obj.oracleScripts = message.oracleScripts.map((e) => e ? OracleScript.toJSON(e) : undefined);
        }
        else {
            obj.oracleScripts = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryOracleScriptsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryOracleScriptsResponse();
        message.oracleScripts = ((_a = object.oracleScripts) === null || _a === void 0 ? void 0 : _a.map((e) => OracleScript.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryRequestReportsRequest() {
    return { requestId: Long.ZERO, pagination: undefined };
}
export const QueryRequestReportsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestReportsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.int64();
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
            requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.ZERO,
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.requestId !== undefined && (obj.requestId = (message.requestId || Long.ZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryRequestReportsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryRequestReportsRequest();
        message.requestId = (object.requestId !== undefined && object.requestId !== null)
            ? Long.fromValue(object.requestId)
            : Long.ZERO;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryRequestReportsResponse() {
    return { reports: [], pagination: undefined };
}
export const QueryRequestReportsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.reports) {
            Report.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestReportsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reports.push(Report.decode(reader, reader.uint32()));
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
            reports: Array.isArray(object === null || object === void 0 ? void 0 : object.reports) ? object.reports.map((e) => Report.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.reports) {
            obj.reports = message.reports.map((e) => e ? Report.toJSON(e) : undefined);
        }
        else {
            obj.reports = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryRequestReportsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRequestReportsResponse();
        message.reports = ((_a = object.reports) === null || _a === void 0 ? void 0 : _a.map((e) => Report.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryRequestRequest() {
    return { requestId: Long.ZERO };
}
export const QueryRequestRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.requestId.isZero()) {
            writer.uint32(8).int64(message.requestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestRequest();
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
        return QueryRequestRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryRequestRequest();
        message.requestId = (object.requestId !== undefined && object.requestId !== null)
            ? Long.fromValue(object.requestId)
            : Long.ZERO;
        return message;
    },
};
function createBaseQueryRequestResponse() {
    return { request: undefined, result: undefined, reports: [] };
}
export const QueryRequestResponse = {
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
        const message = createBaseQueryRequestResponse();
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
        return QueryRequestResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRequestResponse();
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
function createBaseQueryRequestsRequest() {
    return { pagination: undefined };
}
export const QueryRequestsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryRequestsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryRequestsRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryRequestsResponse() {
    return { requests: [], pagination: undefined };
}
export const QueryRequestsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.requests) {
            RequestResult.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.requests.push(RequestResult.decode(reader, reader.uint32()));
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
            requests: Array.isArray(object === null || object === void 0 ? void 0 : object.requests) ? object.requests.map((e) => RequestResult.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.requests) {
            obj.requests = message.requests.map((e) => e ? RequestResult.toJSON(e) : undefined);
        }
        else {
            obj.requests = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryRequestsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRequestsResponse();
        message.requests = ((_a = object.requests) === null || _a === void 0 ? void 0 : _a.map((e) => RequestResult.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        return QueryParamsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return QueryParamsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        return message;
    },
};
function createBaseQueryValidatorRequest() {
    return { validatorAddress: "" };
}
export const QueryValidatorRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    create(base) {
        return QueryValidatorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorRequest();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryValidatorResponse() {
    return { status: undefined };
}
export const QueryValidatorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== undefined) {
            ValidatorStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = ValidatorStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? ValidatorStatus.fromJSON(object.status) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status ? ValidatorStatus.toJSON(message.status) : undefined);
        return obj;
    },
    create(base) {
        return QueryValidatorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorResponse();
        message.status = (object.status !== undefined && object.status !== null)
            ? ValidatorStatus.fromPartial(object.status)
            : undefined;
        return message;
    },
};
function createBaseQueryIsReporterRequest() {
    return { validatorAddress: "", reporterAddress: "" };
}
export const QueryIsReporterRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        if (message.reporterAddress !== "") {
            writer.uint32(18).string(message.reporterAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIsReporterRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                case 2:
                    message.reporterAddress = reader.string();
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
            reporterAddress: isSet(object.reporterAddress) ? String(object.reporterAddress) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.reporterAddress !== undefined && (obj.reporterAddress = message.reporterAddress);
        return obj;
    },
    create(base) {
        return QueryIsReporterRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryIsReporterRequest();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        message.reporterAddress = (_b = object.reporterAddress) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryIsReporterResponse() {
    return { isReporter: false };
}
export const QueryIsReporterResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isReporter === true) {
            writer.uint32(8).bool(message.isReporter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIsReporterResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.isReporter = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { isReporter: isSet(object.isReporter) ? Boolean(object.isReporter) : false };
    },
    toJSON(message) {
        const obj = {};
        message.isReporter !== undefined && (obj.isReporter = message.isReporter);
        return obj;
    },
    create(base) {
        return QueryIsReporterResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryIsReporterResponse();
        message.isReporter = (_a = object.isReporter) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseQueryReportersRequest() {
    return { validatorAddress: "" };
}
export const QueryReportersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryReportersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    create(base) {
        return QueryReportersRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryReportersRequest();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryReportersResponse() {
    return { reporter: [] };
}
export const QueryReportersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.reporter) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryReportersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reporter.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { reporter: Array.isArray(object === null || object === void 0 ? void 0 : object.reporter) ? object.reporter.map((e) => String(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.reporter) {
            obj.reporter = message.reporter.map((e) => e);
        }
        else {
            obj.reporter = [];
        }
        return obj;
    },
    create(base) {
        return QueryReportersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryReportersResponse();
        message.reporter = ((_a = object.reporter) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryActiveValidatorsRequest() {
    return {};
}
export const QueryActiveValidatorsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryActiveValidatorsRequest();
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
        return QueryActiveValidatorsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryActiveValidatorsRequest();
        return message;
    },
};
function createBaseQueryActiveValidatorsResponse() {
    return { count: Long.ZERO };
}
export const QueryActiveValidatorsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.count.isZero()) {
            writer.uint32(8).int64(message.count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryActiveValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.count = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { count: isSet(object.count) ? Long.fromValue(object.count) : Long.ZERO };
    },
    toJSON(message) {
        const obj = {};
        message.count !== undefined && (obj.count = (message.count || Long.ZERO).toString());
        return obj;
    },
    create(base) {
        return QueryActiveValidatorsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseQueryActiveValidatorsResponse();
        message.count = (object.count !== undefined && object.count !== null) ? Long.fromValue(object.count) : Long.ZERO;
        return message;
    },
};
function createBaseQueryRequestSearchRequest() {
    return { oracleScriptId: Long.ZERO, calldata: new Uint8Array(), askCount: Long.ZERO, minCount: Long.ZERO };
}
export const QueryRequestSearchRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(18).bytes(message.calldata);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(24).int64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(32).int64(message.minCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestSearchRequest();
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
                    message.askCount = reader.int64();
                    break;
                case 4:
                    message.minCount = reader.int64();
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
            askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.ZERO,
            minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        message.askCount !== undefined && (obj.askCount = (message.askCount || Long.ZERO).toString());
        message.minCount !== undefined && (obj.minCount = (message.minCount || Long.ZERO).toString());
        return obj;
    },
    create(base) {
        return QueryRequestSearchRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRequestSearchRequest();
        message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
            ? Long.fromValue(object.oracleScriptId)
            : Long.ZERO;
        message.calldata = (_a = object.calldata) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.askCount = (object.askCount !== undefined && object.askCount !== null)
            ? Long.fromValue(object.askCount)
            : Long.ZERO;
        message.minCount = (object.minCount !== undefined && object.minCount !== null)
            ? Long.fromValue(object.minCount)
            : Long.ZERO;
        return message;
    },
};
function createBaseQueryRequestSearchResponse() {
    return { request: undefined, result: undefined, reports: [] };
}
export const QueryRequestSearchResponse = {
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
        const message = createBaseQueryRequestSearchResponse();
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
        return QueryRequestSearchResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRequestSearchResponse();
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
function createBaseQueryRequestPriceRequest() {
    return { symbol: "", askCount: Long.ZERO, minCount: Long.ZERO };
}
export const QueryRequestPriceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(16).int64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(24).int64(message.minCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestPriceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.symbol = reader.string();
                    break;
                case 2:
                    message.askCount = reader.int64();
                    break;
                case 3:
                    message.minCount = reader.int64();
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
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.ZERO,
            minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.askCount !== undefined && (obj.askCount = (message.askCount || Long.ZERO).toString());
        message.minCount !== undefined && (obj.minCount = (message.minCount || Long.ZERO).toString());
        return obj;
    },
    create(base) {
        return QueryRequestPriceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRequestPriceRequest();
        message.symbol = (_a = object.symbol) !== null && _a !== void 0 ? _a : "";
        message.askCount = (object.askCount !== undefined && object.askCount !== null)
            ? Long.fromValue(object.askCount)
            : Long.ZERO;
        message.minCount = (object.minCount !== undefined && object.minCount !== null)
            ? Long.fromValue(object.minCount)
            : Long.ZERO;
        return message;
    },
};
function createBaseQueryRequestPriceResponse() {
    return { oracleScriptId: Long.ZERO, calldata: new Uint8Array(), askCount: Long.ZERO, minCount: Long.ZERO };
}
export const QueryRequestPriceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.oracleScriptId.isZero()) {
            writer.uint32(8).int64(message.oracleScriptId);
        }
        if (message.calldata.length !== 0) {
            writer.uint32(18).bytes(message.calldata);
        }
        if (!message.askCount.isZero()) {
            writer.uint32(24).int64(message.askCount);
        }
        if (!message.minCount.isZero()) {
            writer.uint32(32).int64(message.minCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestPriceResponse();
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
                    message.askCount = reader.int64();
                    break;
                case 4:
                    message.minCount = reader.int64();
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
            askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.ZERO,
            minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.ZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
        message.calldata !== undefined &&
            (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
        message.askCount !== undefined && (obj.askCount = (message.askCount || Long.ZERO).toString());
        message.minCount !== undefined && (obj.minCount = (message.minCount || Long.ZERO).toString());
        return obj;
    },
    create(base) {
        return QueryRequestPriceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRequestPriceResponse();
        message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
            ? Long.fromValue(object.oracleScriptId)
            : Long.ZERO;
        message.calldata = (_a = object.calldata) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.askCount = (object.askCount !== undefined && object.askCount !== null)
            ? Long.fromValue(object.askCount)
            : Long.ZERO;
        message.minCount = (object.minCount !== undefined && object.minCount !== null)
            ? Long.fromValue(object.minCount)
            : Long.ZERO;
        return message;
    },
};
function createBaseQueryDataProvidersPoolRequest() {
    return {};
}
export const QueryDataProvidersPoolRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataProvidersPoolRequest();
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
        return QueryDataProvidersPoolRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryDataProvidersPoolRequest();
        return message;
    },
};
function createBaseQueryDataProvidersPoolResponse() {
    return { pool: [] };
}
export const QueryDataProvidersPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pool) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataProvidersPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { pool: Array.isArray(object === null || object === void 0 ? void 0 : object.pool) ? object.pool.map((e) => Coin.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.pool) {
            obj.pool = message.pool.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.pool = [];
        }
        return obj;
    },
    create(base) {
        return QueryDataProvidersPoolResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDataProvidersPoolResponse();
        message.pool = ((_a = object.pool) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryRequestIDs() {
    return { requestIds: [] };
}
export const QueryRequestIDs = {
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
        const message = createBaseQueryRequestIDs();
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
        return QueryRequestIDs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRequestIDs();
        message.requestIds = ((_a = object.requestIds) === null || _a === void 0 ? void 0 : _a.map((e) => Long.fromValue(e))) || [];
        return message;
    },
};
function createBaseQueryDataProviderRewardRequest() {
    return {};
}
export const QueryDataProviderRewardRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataProviderRewardRequest();
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
        return QueryDataProviderRewardRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseQueryDataProviderRewardRequest();
        return message;
    },
};
function createBaseQueryDataProviderRewardResponse() {
    return { rewardPerByte: [] };
}
export const QueryDataProviderRewardResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewardPerByte) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataProviderRewardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewardPerByte.push(Coin.decode(reader, reader.uint32()));
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
            rewardPerByte: Array.isArray(object === null || object === void 0 ? void 0 : object.rewardPerByte) ? object.rewardPerByte.map((e) => Coin.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewardPerByte) {
            obj.rewardPerByte = message.rewardPerByte.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.rewardPerByte = [];
        }
        return obj;
    },
    create(base) {
        return QueryDataProviderRewardResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDataProviderRewardResponse();
        message.rewardPerByte = ((_a = object.rewardPerByte) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPendingRequestsRequest() {
    return { validatorAddress: "" };
}
export const QueryPendingRequestsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPendingRequestsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validatorAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    create(base) {
        return QueryPendingRequestsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPendingRequestsRequest();
        message.validatorAddress = (_a = object.validatorAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryPendingRequestsResponse() {
    return { requestIds: [] };
}
export const QueryPendingRequestsResponse = {
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
        const message = createBaseQueryPendingRequestsResponse();
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
        return QueryPendingRequestsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPendingRequestsResponse();
        message.requestIds = ((_a = object.requestIds) === null || _a === void 0 ? void 0 : _a.map((e) => Long.fromValue(e))) || [];
        return message;
    },
};
function createBaseQueryRequestVerificationRequest() {
    return {
        chainId: "",
        validator: "",
        requestId: Long.UZERO,
        externalId: Long.UZERO,
        reporter: "",
        signature: new Uint8Array(),
    };
}
export const QueryRequestVerificationRequest = {
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
        if (message.reporter !== "") {
            writer.uint32(42).string(message.reporter);
        }
        if (message.signature.length !== 0) {
            writer.uint32(50).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestVerificationRequest();
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
                case 5:
                    message.reporter = reader.string();
                    break;
                case 6:
                    message.signature = reader.bytes();
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
            reporter: isSet(object.reporter) ? String(object.reporter) : "",
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.validator !== undefined && (obj.validator = message.validator);
        message.requestId !== undefined && (obj.requestId = (message.requestId || Long.UZERO).toString());
        message.externalId !== undefined && (obj.externalId = (message.externalId || Long.UZERO).toString());
        message.reporter !== undefined && (obj.reporter = message.reporter);
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    create(base) {
        return QueryRequestVerificationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryRequestVerificationRequest();
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.validator = (_b = object.validator) !== null && _b !== void 0 ? _b : "";
        message.requestId = (object.requestId !== undefined && object.requestId !== null)
            ? Long.fromValue(object.requestId)
            : Long.UZERO;
        message.externalId = (object.externalId !== undefined && object.externalId !== null)
            ? Long.fromValue(object.externalId)
            : Long.UZERO;
        message.reporter = (_c = object.reporter) !== null && _c !== void 0 ? _c : "";
        message.signature = (_d = object.signature) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseQueryRequestVerificationResponse() {
    return { chainId: "", validator: "", requestId: Long.UZERO, externalId: Long.UZERO, dataSourceId: Long.UZERO };
}
export const QueryRequestVerificationResponse = {
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
        if (!message.dataSourceId.isZero()) {
            writer.uint32(40).uint64(message.dataSourceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestVerificationResponse();
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
                case 5:
                    message.dataSourceId = reader.uint64();
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
            dataSourceId: isSet(object.dataSourceId) ? Long.fromValue(object.dataSourceId) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.validator !== undefined && (obj.validator = message.validator);
        message.requestId !== undefined && (obj.requestId = (message.requestId || Long.UZERO).toString());
        message.externalId !== undefined && (obj.externalId = (message.externalId || Long.UZERO).toString());
        message.dataSourceId !== undefined && (obj.dataSourceId = (message.dataSourceId || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return QueryRequestVerificationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryRequestVerificationResponse();
        message.chainId = (_a = object.chainId) !== null && _a !== void 0 ? _a : "";
        message.validator = (_b = object.validator) !== null && _b !== void 0 ? _b : "";
        message.requestId = (object.requestId !== undefined && object.requestId !== null)
            ? Long.fromValue(object.requestId)
            : Long.UZERO;
        message.externalId = (object.externalId !== undefined && object.externalId !== null)
            ? Long.fromValue(object.externalId)
            : Long.UZERO;
        message.dataSourceId = (object.dataSourceId !== undefined && object.dataSourceId !== null)
            ? Long.fromValue(object.dataSourceId)
            : Long.UZERO;
        return message;
    },
};
function createBaseQueryDataProviderAccumulatedRewardRequest() {
    return { dataProviderAddress: "" };
}
export const QueryDataProviderAccumulatedRewardRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.dataProviderAddress !== "") {
            writer.uint32(10).string(message.dataProviderAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataProviderAccumulatedRewardRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.dataProviderAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { dataProviderAddress: isSet(object.dataProviderAddress) ? String(object.dataProviderAddress) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.dataProviderAddress !== undefined && (obj.dataProviderAddress = message.dataProviderAddress);
        return obj;
    },
    create(base) {
        return QueryDataProviderAccumulatedRewardRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDataProviderAccumulatedRewardRequest();
        message.dataProviderAddress = (_a = object.dataProviderAddress) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryDataProviderAccumulatedRewardResponse() {
    return { accumulatedReward: [] };
}
export const QueryDataProviderAccumulatedRewardResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.accumulatedReward) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDataProviderAccumulatedRewardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accumulatedReward.push(Coin.decode(reader, reader.uint32()));
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
            accumulatedReward: Array.isArray(object === null || object === void 0 ? void 0 : object.accumulatedReward)
                ? object.accumulatedReward.map((e) => Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.accumulatedReward) {
            obj.accumulatedReward = message.accumulatedReward.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.accumulatedReward = [];
        }
        return obj;
    },
    create(base) {
        return QueryDataProviderAccumulatedRewardResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDataProviderAccumulatedRewardResponse();
        message.accumulatedReward = ((_a = object.accumulatedReward) === null || _a === void 0 ? void 0 : _a.map((e) => Coin.fromPartial(e))) || [];
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "oracle.v1.Query";
        this.rpc = rpc;
        this.Counts = this.Counts.bind(this);
        this.Data = this.Data.bind(this);
        this.DataSource = this.DataSource.bind(this);
        this.DataSources = this.DataSources.bind(this);
        this.OracleScript = this.OracleScript.bind(this);
        this.OracleScripts = this.OracleScripts.bind(this);
        this.Request = this.Request.bind(this);
        this.Requests = this.Requests.bind(this);
        this.Validator = this.Validator.bind(this);
        this.IsReporter = this.IsReporter.bind(this);
        this.Reporters = this.Reporters.bind(this);
        this.ActiveValidators = this.ActiveValidators.bind(this);
        this.Params = this.Params.bind(this);
        this.RequestSearch = this.RequestSearch.bind(this);
        this.RequestPrice = this.RequestPrice.bind(this);
        this.DataProvidersPool = this.DataProvidersPool.bind(this);
        this.RequestReports = this.RequestReports.bind(this);
        this.DataProviderReward = this.DataProviderReward.bind(this);
        this.PendingRequests = this.PendingRequests.bind(this);
        this.RequestVerification = this.RequestVerification.bind(this);
        this.DataProviderAccumulatedReward = this.DataProviderAccumulatedReward.bind(this);
    }
    Counts(request) {
        const data = QueryCountsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Counts", data);
        return promise.then((data) => QueryCountsResponse.decode(new _m0.Reader(data)));
    }
    Data(request) {
        const data = QueryDataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Data", data);
        return promise.then((data) => QueryDataResponse.decode(new _m0.Reader(data)));
    }
    DataSource(request) {
        const data = QueryDataSourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DataSource", data);
        return promise.then((data) => QueryDataSourceResponse.decode(new _m0.Reader(data)));
    }
    DataSources(request) {
        const data = QueryDataSourcesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DataSources", data);
        return promise.then((data) => QueryDataSourcesResponse.decode(new _m0.Reader(data)));
    }
    OracleScript(request) {
        const data = QueryOracleScriptRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "OracleScript", data);
        return promise.then((data) => QueryOracleScriptResponse.decode(new _m0.Reader(data)));
    }
    OracleScripts(request) {
        const data = QueryOracleScriptsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "OracleScripts", data);
        return promise.then((data) => QueryOracleScriptsResponse.decode(new _m0.Reader(data)));
    }
    Request(request) {
        const data = QueryRequestRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Request", data);
        return promise.then((data) => QueryRequestResponse.decode(new _m0.Reader(data)));
    }
    Requests(request) {
        const data = QueryRequestsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Requests", data);
        return promise.then((data) => QueryRequestsResponse.decode(new _m0.Reader(data)));
    }
    Validator(request) {
        const data = QueryValidatorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Validator", data);
        return promise.then((data) => QueryValidatorResponse.decode(new _m0.Reader(data)));
    }
    IsReporter(request) {
        const data = QueryIsReporterRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "IsReporter", data);
        return promise.then((data) => QueryIsReporterResponse.decode(new _m0.Reader(data)));
    }
    Reporters(request) {
        const data = QueryReportersRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Reporters", data);
        return promise.then((data) => QueryReportersResponse.decode(new _m0.Reader(data)));
    }
    ActiveValidators(request) {
        const data = QueryActiveValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ActiveValidators", data);
        return promise.then((data) => QueryActiveValidatorsResponse.decode(new _m0.Reader(data)));
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    RequestSearch(request) {
        const data = QueryRequestSearchRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "RequestSearch", data);
        return promise.then((data) => QueryRequestSearchResponse.decode(new _m0.Reader(data)));
    }
    RequestPrice(request) {
        const data = QueryRequestPriceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "RequestPrice", data);
        return promise.then((data) => QueryRequestPriceResponse.decode(new _m0.Reader(data)));
    }
    DataProvidersPool(request) {
        const data = QueryDataProvidersPoolRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DataProvidersPool", data);
        return promise.then((data) => QueryDataProvidersPoolResponse.decode(new _m0.Reader(data)));
    }
    RequestReports(request) {
        const data = QueryRequestReportsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "RequestReports", data);
        return promise.then((data) => QueryRequestReportsResponse.decode(new _m0.Reader(data)));
    }
    DataProviderReward(request) {
        const data = QueryDataProviderRewardRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DataProviderReward", data);
        return promise.then((data) => QueryDataProviderRewardResponse.decode(new _m0.Reader(data)));
    }
    PendingRequests(request) {
        const data = QueryPendingRequestsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "PendingRequests", data);
        return promise.then((data) => QueryPendingRequestsResponse.decode(new _m0.Reader(data)));
    }
    RequestVerification(request) {
        const data = QueryRequestVerificationRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "RequestVerification", data);
        return promise.then((data) => QueryRequestVerificationResponse.decode(new _m0.Reader(data)));
    }
    DataProviderAccumulatedReward(request) {
        const data = QueryDataProviderAccumulatedRewardRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DataProviderAccumulatedReward", data);
        return promise.then((data) => QueryDataProviderAccumulatedRewardResponse.decode(new _m0.Reader(data)));
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
//# sourceMappingURL=query.js.map