/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { DataSource, OracleScript, Report, Request, RequestResult, Result, ValidatorStatus } from "./oracle";
import { Params } from "./params";

export const protobufPackage = "oracle.v1";

/** QueryCountsRequest is request type for the Query/Count RPC method. */
export interface QueryCountsRequest {
}

/** QueryCountsResponse is response type for the Query/Count RPC method. */
export interface QueryCountsResponse {
  dataSourceCount: Long;
  oracleScriptCount: Long;
  requestCount: Long;
}

/** QueryDataRequest is request type for the Query/Data RPC method. */
export interface QueryDataRequest {
  dataHash: string;
}

/** QueryDataResponse is response type for the Query/Data RPC method. */
export interface QueryDataResponse {
  data: Uint8Array;
}

/** QueryDataSourceRequest is request type for the Query/DataSource RPC method. */
export interface QueryDataSourceRequest {
  dataSourceId: Long;
}

/** QueryDataSourceResponse is response type for the Query/DataSource RPC method. */
export interface QueryDataSourceResponse {
  dataSource?: DataSource;
}

/** QueryDataSourcesRequest is request type for the Query/DataSources RPC method. */
export interface QueryDataSourcesRequest {
  pagination?: PageRequest;
}

/** QueryDataSourcesResponse is response type for the Query/DataSources RPC method. */
export interface QueryDataSourcesResponse {
  dataSources: DataSource[];
  pagination?: PageResponse;
}

/** QueryOracleScriptRequest is request type for the Query/OracleScript RPC method. */
export interface QueryOracleScriptRequest {
  oracleScriptId: Long;
}

/** QueryOracleScriptResponse is response type for the Query/OracleScript RPC method. */
export interface QueryOracleScriptResponse {
  oracleScript?: OracleScript;
}

/** QueryOracleScriptsRequest is request type for the Query/OracleScripts RPC method. */
export interface QueryOracleScriptsRequest {
  pagination?: PageRequest;
}

/** QueryOracleScriptsResponse is response type for the Query/OracleScripts RPC method. */
export interface QueryOracleScriptsResponse {
  oracleScripts: OracleScript[];
  pagination?: PageResponse;
}

/** QueryRequestReportsRequest is request type for the Query/RequestReports RPC method. */
export interface QueryRequestReportsRequest {
  requestId: Long;
  pagination?: PageRequest;
}

/** QueryRequestReportsResponse is response type for the Query/RequestReports RPC method. */
export interface QueryRequestReportsResponse {
  reports: Report[];
  pagination?: PageResponse;
}

/** QueryRequestRequest is request type for the Query/Request RPC method. */
export interface QueryRequestRequest {
  requestId: Long;
}

/** QueryRequestResponse is response type for the Query/Request RPC method. */
export interface QueryRequestResponse {
  /** Request is an oracle request */
  request?: Request;
  /** Result is a final form of result data */
  result?: Result;
  /**
   * Reports is list of result data as raw reports that are fulfilled by
   * assigned validators
   */
  reports: Report[];
}

/** QueryRequestsRequest is request type for the Query/Requests RPC method. */
export interface QueryRequestsRequest {
  pagination?: PageRequest;
}

/** QueryRequestsResponse is response type for the Query/Requests RPC method. */
export interface QueryRequestsResponse {
  requests: RequestResult[];
  pagination?: PageResponse;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** pagination defines an optional pagination for the request. */
  params?: Params;
}

/** QueryValidatorRequest is request type for the Query/Validator RPC method. */
export interface QueryValidatorRequest {
  validatorAddress: string;
}

/** QueryValidatorResponse is response type for the Query/Validator RPC method. */
export interface QueryValidatorResponse {
  status?: ValidatorStatus;
}

/** QueryIsReporterRequest is request type for the Query/Reporter RPC method. */
export interface QueryIsReporterRequest {
  /** ValidatorAddress is a validator address */
  validatorAddress: string;
  /** ReporterAddress is a candidate account */
  reporterAddress: string;
}

/** QueryIsReporterResponse is response type for the Query/Reporter RPC method. */
export interface QueryIsReporterResponse {
  /** IsReporter is true if this account has been granted by validator */
  isReporter: boolean;
}

/** QueryReportersRequest is request type for the Query/Reporters RPC method. */
export interface QueryReportersRequest {
  validatorAddress: string;
}

/** QueryReportersResponse is response type for the Query/Reporters RPC method. */
export interface QueryReportersResponse {
  reporter: string[];
}

/** QueryActiveValidatorsRequest is request type for the Query/ActiveValidators RPC method. */
export interface QueryActiveValidatorsRequest {
}

/** QueryActiveValidatorsResponse is response type for the Query/ActiveValidators RPC method. */
export interface QueryActiveValidatorsResponse {
  count: Long;
}

/** QueryRequestSearchRequest is request type for the Query/RequestSearch RPC method. */
export interface QueryRequestSearchRequest {
  oracleScriptId: Long;
  calldata: Uint8Array;
  askCount: Long;
  minCount: Long;
}

/** QueryRequestSearchResponse is response type for the Query/RequestSearch RPC method. */
export interface QueryRequestSearchResponse {
  request?: Request;
  result?: Result;
  reports: Report[];
}

/** QueryRequestPriceRequest is request type for the Query/RequestPrice RPC method. */
export interface QueryRequestPriceRequest {
  symbol: string;
  askCount: Long;
  minCount: Long;
}

/** QueryRequestPriceResponse is response type for the Query/RequestPrice RPC method. */
export interface QueryRequestPriceResponse {
  oracleScriptId: Long;
  calldata: Uint8Array;
  askCount: Long;
  minCount: Long;
}

export interface QueryDataProvidersPoolRequest {
}

/** QueryRequestPriceResponse is response type for the Query/RequestPrice RPC method. */
export interface QueryDataProvidersPoolResponse {
  pool: Coin[];
}

export interface QueryRequestIDs {
  requestIds: Long[];
}

/** QueryDataProviderRewardRequest is request type for the Query/DataProviderReward RPC method. */
export interface QueryDataProviderRewardRequest {
}

/** QueryDataProviderRewardResponse is response type for the Query/DataProviderReward RPC method. */
export interface QueryDataProviderRewardResponse {
  rewardPerByte: Coin[];
}

/** QueryPendingRequestRequest is request type for the Query/PendingRequests RPC method. */
export interface QueryPendingRequestsRequest {
  /** ValidatorAddress is address of a validator */
  validatorAddress: string;
}

/** QueryPendingRequestResponse is response type for the Query/PendingRequests RPC method. */
export interface QueryPendingRequestsResponse {
  /** RequestIDs is a list of pending request IDs assigned to the given validator */
  requestIds: Long[];
}

/**
 * QueryRequestVerificationRequest is request type for the
 * Query/RequestVerification RPC
 */
export interface QueryRequestVerificationRequest {
  /**
   * ChainID is the chain ID to identify which chain ID is used for the
   * verification
   */
  chainId: string;
  /** Validator is a validator address */
  validator: string;
  /** RequestID is oracle request ID */
  requestId: Long;
  /** ExternalID is an oracle's external ID */
  externalId: Long;
  /**
   * Reporter is an bech32-encoded public key of the reporter authorized by the
   * validator
   */
  reporter: string;
  /**
   * Signature is a signature signed by the reporter using reporter's private
   * key
   */
  signature: Uint8Array;
}

/**
 * QueryRequestVerificationResponse is response type for the
 * Query/RequestVerification RPC
 */
export interface QueryRequestVerificationResponse {
  /** ChainID is the targeted chain ID */
  chainId: string;
  /** Validator is the targeted validator address */
  validator: string;
  /** RequestID is the ID of targeted request */
  requestId: Long;
  /** ExternalID is the ID of targeted oracle's external data source */
  externalId: Long;
  /**
   * DataSourceID is the ID of a data source that relates to the targeted
   * external ID
   */
  dataSourceId: Long;
}

/** QueryDataProviderAccumulatedRewardRequest is request type for the Query/DataProviderAccumulatedReward RPC method. */
export interface QueryDataProviderAccumulatedRewardRequest {
  dataProviderAddress: string;
}

/** QueryDataProviderAccumulatedRewardResponse is response type for the Query/DataProviderAccumulatedReward RPC method. */
export interface QueryDataProviderAccumulatedRewardResponse {
  accumulatedReward: Coin[];
}

function createBaseQueryCountsRequest(): QueryCountsRequest {
  return {};
}

export const QueryCountsRequest = {
  encode(_: QueryCountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCountsRequest {
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

  fromJSON(_: any): QueryCountsRequest {
    return {};
  },

  toJSON(_: QueryCountsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCountsRequest>, I>>(base?: I): QueryCountsRequest {
    return QueryCountsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCountsRequest>, I>>(_: I): QueryCountsRequest {
    const message = createBaseQueryCountsRequest();
    return message;
  },
};

function createBaseQueryCountsResponse(): QueryCountsResponse {
  return { dataSourceCount: Long.ZERO, oracleScriptCount: Long.ZERO, requestCount: Long.ZERO };
}

export const QueryCountsResponse = {
  encode(message: QueryCountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataSourceCount = reader.int64() as Long;
          break;
        case 2:
          message.oracleScriptCount = reader.int64() as Long;
          break;
        case 3:
          message.requestCount = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCountsResponse {
    return {
      dataSourceCount: isSet(object.dataSourceCount) ? Long.fromValue(object.dataSourceCount) : Long.ZERO,
      oracleScriptCount: isSet(object.oracleScriptCount) ? Long.fromValue(object.oracleScriptCount) : Long.ZERO,
      requestCount: isSet(object.requestCount) ? Long.fromValue(object.requestCount) : Long.ZERO,
    };
  },

  toJSON(message: QueryCountsResponse): unknown {
    const obj: any = {};
    message.dataSourceCount !== undefined && (obj.dataSourceCount = (message.dataSourceCount || Long.ZERO).toString());
    message.oracleScriptCount !== undefined &&
      (obj.oracleScriptCount = (message.oracleScriptCount || Long.ZERO).toString());
    message.requestCount !== undefined && (obj.requestCount = (message.requestCount || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCountsResponse>, I>>(base?: I): QueryCountsResponse {
    return QueryCountsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCountsResponse>, I>>(object: I): QueryCountsResponse {
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

function createBaseQueryDataRequest(): QueryDataRequest {
  return { dataHash: "" };
}

export const QueryDataRequest = {
  encode(message: QueryDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataHash !== "") {
      writer.uint32(10).string(message.dataHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataRequest {
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

  fromJSON(object: any): QueryDataRequest {
    return { dataHash: isSet(object.dataHash) ? String(object.dataHash) : "" };
  },

  toJSON(message: QueryDataRequest): unknown {
    const obj: any = {};
    message.dataHash !== undefined && (obj.dataHash = message.dataHash);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataRequest>, I>>(base?: I): QueryDataRequest {
    return QueryDataRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataRequest>, I>>(object: I): QueryDataRequest {
    const message = createBaseQueryDataRequest();
    message.dataHash = object.dataHash ?? "";
    return message;
  },
};

function createBaseQueryDataResponse(): QueryDataResponse {
  return { data: new Uint8Array() };
}

export const QueryDataResponse = {
  encode(message: QueryDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataResponse {
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

  fromJSON(object: any): QueryDataResponse {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array() };
  },

  toJSON(message: QueryDataResponse): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataResponse>, I>>(base?: I): QueryDataResponse {
    return QueryDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataResponse>, I>>(object: I): QueryDataResponse {
    const message = createBaseQueryDataResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryDataSourceRequest(): QueryDataSourceRequest {
  return { dataSourceId: Long.ZERO };
}

export const QueryDataSourceRequest = {
  encode(message: QueryDataSourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.dataSourceId.isZero()) {
      writer.uint32(8).int64(message.dataSourceId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataSourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDataSourceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataSourceId = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDataSourceRequest {
    return { dataSourceId: isSet(object.dataSourceId) ? Long.fromValue(object.dataSourceId) : Long.ZERO };
  },

  toJSON(message: QueryDataSourceRequest): unknown {
    const obj: any = {};
    message.dataSourceId !== undefined && (obj.dataSourceId = (message.dataSourceId || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataSourceRequest>, I>>(base?: I): QueryDataSourceRequest {
    return QueryDataSourceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataSourceRequest>, I>>(object: I): QueryDataSourceRequest {
    const message = createBaseQueryDataSourceRequest();
    message.dataSourceId = (object.dataSourceId !== undefined && object.dataSourceId !== null)
      ? Long.fromValue(object.dataSourceId)
      : Long.ZERO;
    return message;
  },
};

function createBaseQueryDataSourceResponse(): QueryDataSourceResponse {
  return { dataSource: undefined };
}

export const QueryDataSourceResponse = {
  encode(message: QueryDataSourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataSource !== undefined) {
      DataSource.encode(message.dataSource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataSourceResponse {
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

  fromJSON(object: any): QueryDataSourceResponse {
    return { dataSource: isSet(object.dataSource) ? DataSource.fromJSON(object.dataSource) : undefined };
  },

  toJSON(message: QueryDataSourceResponse): unknown {
    const obj: any = {};
    message.dataSource !== undefined &&
      (obj.dataSource = message.dataSource ? DataSource.toJSON(message.dataSource) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataSourceResponse>, I>>(base?: I): QueryDataSourceResponse {
    return QueryDataSourceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataSourceResponse>, I>>(object: I): QueryDataSourceResponse {
    const message = createBaseQueryDataSourceResponse();
    message.dataSource = (object.dataSource !== undefined && object.dataSource !== null)
      ? DataSource.fromPartial(object.dataSource)
      : undefined;
    return message;
  },
};

function createBaseQueryDataSourcesRequest(): QueryDataSourcesRequest {
  return { pagination: undefined };
}

export const QueryDataSourcesRequest = {
  encode(message: QueryDataSourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataSourcesRequest {
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

  fromJSON(object: any): QueryDataSourcesRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryDataSourcesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataSourcesRequest>, I>>(base?: I): QueryDataSourcesRequest {
    return QueryDataSourcesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataSourcesRequest>, I>>(object: I): QueryDataSourcesRequest {
    const message = createBaseQueryDataSourcesRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDataSourcesResponse(): QueryDataSourcesResponse {
  return { dataSources: [], pagination: undefined };
}

export const QueryDataSourcesResponse = {
  encode(message: QueryDataSourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dataSources) {
      DataSource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataSourcesResponse {
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

  fromJSON(object: any): QueryDataSourcesResponse {
    return {
      dataSources: Array.isArray(object?.dataSources) ? object.dataSources.map((e: any) => DataSource.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDataSourcesResponse): unknown {
    const obj: any = {};
    if (message.dataSources) {
      obj.dataSources = message.dataSources.map((e) => e ? DataSource.toJSON(e) : undefined);
    } else {
      obj.dataSources = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataSourcesResponse>, I>>(base?: I): QueryDataSourcesResponse {
    return QueryDataSourcesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataSourcesResponse>, I>>(object: I): QueryDataSourcesResponse {
    const message = createBaseQueryDataSourcesResponse();
    message.dataSources = object.dataSources?.map((e) => DataSource.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryOracleScriptRequest(): QueryOracleScriptRequest {
  return { oracleScriptId: Long.ZERO };
}

export const QueryOracleScriptRequest = {
  encode(message: QueryOracleScriptRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.oracleScriptId.isZero()) {
      writer.uint32(8).int64(message.oracleScriptId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleScriptRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOracleScriptRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleScriptId = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOracleScriptRequest {
    return { oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO };
  },

  toJSON(message: QueryOracleScriptRequest): unknown {
    const obj: any = {};
    message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleScriptRequest>, I>>(base?: I): QueryOracleScriptRequest {
    return QueryOracleScriptRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleScriptRequest>, I>>(object: I): QueryOracleScriptRequest {
    const message = createBaseQueryOracleScriptRequest();
    message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
      ? Long.fromValue(object.oracleScriptId)
      : Long.ZERO;
    return message;
  },
};

function createBaseQueryOracleScriptResponse(): QueryOracleScriptResponse {
  return { oracleScript: undefined };
}

export const QueryOracleScriptResponse = {
  encode(message: QueryOracleScriptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracleScript !== undefined) {
      OracleScript.encode(message.oracleScript, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleScriptResponse {
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

  fromJSON(object: any): QueryOracleScriptResponse {
    return { oracleScript: isSet(object.oracleScript) ? OracleScript.fromJSON(object.oracleScript) : undefined };
  },

  toJSON(message: QueryOracleScriptResponse): unknown {
    const obj: any = {};
    message.oracleScript !== undefined &&
      (obj.oracleScript = message.oracleScript ? OracleScript.toJSON(message.oracleScript) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleScriptResponse>, I>>(base?: I): QueryOracleScriptResponse {
    return QueryOracleScriptResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleScriptResponse>, I>>(object: I): QueryOracleScriptResponse {
    const message = createBaseQueryOracleScriptResponse();
    message.oracleScript = (object.oracleScript !== undefined && object.oracleScript !== null)
      ? OracleScript.fromPartial(object.oracleScript)
      : undefined;
    return message;
  },
};

function createBaseQueryOracleScriptsRequest(): QueryOracleScriptsRequest {
  return { pagination: undefined };
}

export const QueryOracleScriptsRequest = {
  encode(message: QueryOracleScriptsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleScriptsRequest {
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

  fromJSON(object: any): QueryOracleScriptsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryOracleScriptsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleScriptsRequest>, I>>(base?: I): QueryOracleScriptsRequest {
    return QueryOracleScriptsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleScriptsRequest>, I>>(object: I): QueryOracleScriptsRequest {
    const message = createBaseQueryOracleScriptsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryOracleScriptsResponse(): QueryOracleScriptsResponse {
  return { oracleScripts: [], pagination: undefined };
}

export const QueryOracleScriptsResponse = {
  encode(message: QueryOracleScriptsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.oracleScripts) {
      OracleScript.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOracleScriptsResponse {
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

  fromJSON(object: any): QueryOracleScriptsResponse {
    return {
      oracleScripts: Array.isArray(object?.oracleScripts)
        ? object.oracleScripts.map((e: any) => OracleScript.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryOracleScriptsResponse): unknown {
    const obj: any = {};
    if (message.oracleScripts) {
      obj.oracleScripts = message.oracleScripts.map((e) => e ? OracleScript.toJSON(e) : undefined);
    } else {
      obj.oracleScripts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOracleScriptsResponse>, I>>(base?: I): QueryOracleScriptsResponse {
    return QueryOracleScriptsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryOracleScriptsResponse>, I>>(object: I): QueryOracleScriptsResponse {
    const message = createBaseQueryOracleScriptsResponse();
    message.oracleScripts = object.oracleScripts?.map((e) => OracleScript.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRequestReportsRequest(): QueryRequestReportsRequest {
  return { requestId: Long.ZERO, pagination: undefined };
}

export const QueryRequestReportsRequest = {
  encode(message: QueryRequestReportsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestReportsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestReportsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.int64() as Long;
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

  fromJSON(object: any): QueryRequestReportsRequest {
    return {
      requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRequestReportsRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = (message.requestId || Long.ZERO).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestReportsRequest>, I>>(base?: I): QueryRequestReportsRequest {
    return QueryRequestReportsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestReportsRequest>, I>>(object: I): QueryRequestReportsRequest {
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

function createBaseQueryRequestReportsResponse(): QueryRequestReportsResponse {
  return { reports: [], pagination: undefined };
}

export const QueryRequestReportsResponse = {
  encode(message: QueryRequestReportsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestReportsResponse {
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

  fromJSON(object: any): QueryRequestReportsResponse {
    return {
      reports: Array.isArray(object?.reports) ? object.reports.map((e: any) => Report.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRequestReportsResponse): unknown {
    const obj: any = {};
    if (message.reports) {
      obj.reports = message.reports.map((e) => e ? Report.toJSON(e) : undefined);
    } else {
      obj.reports = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestReportsResponse>, I>>(base?: I): QueryRequestReportsResponse {
    return QueryRequestReportsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestReportsResponse>, I>>(object: I): QueryRequestReportsResponse {
    const message = createBaseQueryRequestReportsResponse();
    message.reports = object.reports?.map((e) => Report.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRequestRequest(): QueryRequestRequest {
  return { requestId: Long.ZERO };
}

export const QueryRequestRequest = {
  encode(message: QueryRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestRequest {
    return { requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.ZERO };
  },

  toJSON(message: QueryRequestRequest): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = (message.requestId || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestRequest>, I>>(base?: I): QueryRequestRequest {
    return QueryRequestRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestRequest>, I>>(object: I): QueryRequestRequest {
    const message = createBaseQueryRequestRequest();
    message.requestId = (object.requestId !== undefined && object.requestId !== null)
      ? Long.fromValue(object.requestId)
      : Long.ZERO;
    return message;
  },
};

function createBaseQueryRequestResponse(): QueryRequestResponse {
  return { request: undefined, result: undefined, reports: [] };
}

export const QueryRequestResponse = {
  encode(message: QueryRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestResponse {
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

  fromJSON(object: any): QueryRequestResponse {
    return {
      request: isSet(object.request) ? Request.fromJSON(object.request) : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
      reports: Array.isArray(object?.reports) ? object.reports.map((e: any) => Report.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryRequestResponse): unknown {
    const obj: any = {};
    message.request !== undefined && (obj.request = message.request ? Request.toJSON(message.request) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    if (message.reports) {
      obj.reports = message.reports.map((e) => e ? Report.toJSON(e) : undefined);
    } else {
      obj.reports = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestResponse>, I>>(base?: I): QueryRequestResponse {
    return QueryRequestResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestResponse>, I>>(object: I): QueryRequestResponse {
    const message = createBaseQueryRequestResponse();
    message.request = (object.request !== undefined && object.request !== null)
      ? Request.fromPartial(object.request)
      : undefined;
    message.result = (object.result !== undefined && object.result !== null)
      ? Result.fromPartial(object.result)
      : undefined;
    message.reports = object.reports?.map((e) => Report.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryRequestsRequest(): QueryRequestsRequest {
  return { pagination: undefined };
}

export const QueryRequestsRequest = {
  encode(message: QueryRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestsRequest {
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

  fromJSON(object: any): QueryRequestsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryRequestsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestsRequest>, I>>(base?: I): QueryRequestsRequest {
    return QueryRequestsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestsRequest>, I>>(object: I): QueryRequestsRequest {
    const message = createBaseQueryRequestsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRequestsResponse(): QueryRequestsResponse {
  return { requests: [], pagination: undefined };
}

export const QueryRequestsResponse = {
  encode(message: QueryRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requests) {
      RequestResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestsResponse {
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

  fromJSON(object: any): QueryRequestsResponse {
    return {
      requests: Array.isArray(object?.requests) ? object.requests.map((e: any) => RequestResult.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRequestsResponse): unknown {
    const obj: any = {};
    if (message.requests) {
      obj.requests = message.requests.map((e) => e ? RequestResult.toJSON(e) : undefined);
    } else {
      obj.requests = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestsResponse>, I>>(base?: I): QueryRequestsResponse {
    return QueryRequestsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestsResponse>, I>>(object: I): QueryRequestsResponse {
    const message = createBaseQueryRequestsResponse();
    message.requests = object.requests?.map((e) => RequestResult.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(base?: I): QueryParamsRequest {
    return QueryParamsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
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

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(base?: I): QueryParamsResponse {
    return QueryParamsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryValidatorRequest(): QueryValidatorRequest {
  return { validatorAddress: "" };
}

export const QueryValidatorRequest = {
  encode(message: QueryValidatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorRequest {
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

  fromJSON(object: any): QueryValidatorRequest {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: QueryValidatorRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorRequest>, I>>(base?: I): QueryValidatorRequest {
    return QueryValidatorRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorRequest>, I>>(object: I): QueryValidatorRequest {
    const message = createBaseQueryValidatorRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryValidatorResponse(): QueryValidatorResponse {
  return { status: undefined };
}

export const QueryValidatorResponse = {
  encode(message: QueryValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      ValidatorStatus.encode(message.status, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorResponse {
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

  fromJSON(object: any): QueryValidatorResponse {
    return { status: isSet(object.status) ? ValidatorStatus.fromJSON(object.status) : undefined };
  },

  toJSON(message: QueryValidatorResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status ? ValidatorStatus.toJSON(message.status) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryValidatorResponse>, I>>(base?: I): QueryValidatorResponse {
    return QueryValidatorResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryValidatorResponse>, I>>(object: I): QueryValidatorResponse {
    const message = createBaseQueryValidatorResponse();
    message.status = (object.status !== undefined && object.status !== null)
      ? ValidatorStatus.fromPartial(object.status)
      : undefined;
    return message;
  },
};

function createBaseQueryIsReporterRequest(): QueryIsReporterRequest {
  return { validatorAddress: "", reporterAddress: "" };
}

export const QueryIsReporterRequest = {
  encode(message: QueryIsReporterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.reporterAddress !== "") {
      writer.uint32(18).string(message.reporterAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsReporterRequest {
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

  fromJSON(object: any): QueryIsReporterRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      reporterAddress: isSet(object.reporterAddress) ? String(object.reporterAddress) : "",
    };
  },

  toJSON(message: QueryIsReporterRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.reporterAddress !== undefined && (obj.reporterAddress = message.reporterAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryIsReporterRequest>, I>>(base?: I): QueryIsReporterRequest {
    return QueryIsReporterRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryIsReporterRequest>, I>>(object: I): QueryIsReporterRequest {
    const message = createBaseQueryIsReporterRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    message.reporterAddress = object.reporterAddress ?? "";
    return message;
  },
};

function createBaseQueryIsReporterResponse(): QueryIsReporterResponse {
  return { isReporter: false };
}

export const QueryIsReporterResponse = {
  encode(message: QueryIsReporterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isReporter === true) {
      writer.uint32(8).bool(message.isReporter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIsReporterResponse {
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

  fromJSON(object: any): QueryIsReporterResponse {
    return { isReporter: isSet(object.isReporter) ? Boolean(object.isReporter) : false };
  },

  toJSON(message: QueryIsReporterResponse): unknown {
    const obj: any = {};
    message.isReporter !== undefined && (obj.isReporter = message.isReporter);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryIsReporterResponse>, I>>(base?: I): QueryIsReporterResponse {
    return QueryIsReporterResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryIsReporterResponse>, I>>(object: I): QueryIsReporterResponse {
    const message = createBaseQueryIsReporterResponse();
    message.isReporter = object.isReporter ?? false;
    return message;
  },
};

function createBaseQueryReportersRequest(): QueryReportersRequest {
  return { validatorAddress: "" };
}

export const QueryReportersRequest = {
  encode(message: QueryReportersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReportersRequest {
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

  fromJSON(object: any): QueryReportersRequest {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: QueryReportersRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryReportersRequest>, I>>(base?: I): QueryReportersRequest {
    return QueryReportersRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryReportersRequest>, I>>(object: I): QueryReportersRequest {
    const message = createBaseQueryReportersRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryReportersResponse(): QueryReportersResponse {
  return { reporter: [] };
}

export const QueryReportersResponse = {
  encode(message: QueryReportersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.reporter) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReportersResponse {
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

  fromJSON(object: any): QueryReportersResponse {
    return { reporter: Array.isArray(object?.reporter) ? object.reporter.map((e: any) => String(e)) : [] };
  },

  toJSON(message: QueryReportersResponse): unknown {
    const obj: any = {};
    if (message.reporter) {
      obj.reporter = message.reporter.map((e) => e);
    } else {
      obj.reporter = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryReportersResponse>, I>>(base?: I): QueryReportersResponse {
    return QueryReportersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryReportersResponse>, I>>(object: I): QueryReportersResponse {
    const message = createBaseQueryReportersResponse();
    message.reporter = object.reporter?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryActiveValidatorsRequest(): QueryActiveValidatorsRequest {
  return {};
}

export const QueryActiveValidatorsRequest = {
  encode(_: QueryActiveValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveValidatorsRequest {
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

  fromJSON(_: any): QueryActiveValidatorsRequest {
    return {};
  },

  toJSON(_: QueryActiveValidatorsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryActiveValidatorsRequest>, I>>(base?: I): QueryActiveValidatorsRequest {
    return QueryActiveValidatorsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryActiveValidatorsRequest>, I>>(_: I): QueryActiveValidatorsRequest {
    const message = createBaseQueryActiveValidatorsRequest();
    return message;
  },
};

function createBaseQueryActiveValidatorsResponse(): QueryActiveValidatorsResponse {
  return { count: Long.ZERO };
}

export const QueryActiveValidatorsResponse = {
  encode(message: QueryActiveValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.count.isZero()) {
      writer.uint32(8).int64(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActiveValidatorsResponse {
    return { count: isSet(object.count) ? Long.fromValue(object.count) : Long.ZERO };
  },

  toJSON(message: QueryActiveValidatorsResponse): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = (message.count || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryActiveValidatorsResponse>, I>>(base?: I): QueryActiveValidatorsResponse {
    return QueryActiveValidatorsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryActiveValidatorsResponse>, I>>(
    object: I,
  ): QueryActiveValidatorsResponse {
    const message = createBaseQueryActiveValidatorsResponse();
    message.count = (object.count !== undefined && object.count !== null) ? Long.fromValue(object.count) : Long.ZERO;
    return message;
  },
};

function createBaseQueryRequestSearchRequest(): QueryRequestSearchRequest {
  return { oracleScriptId: Long.ZERO, calldata: new Uint8Array(), askCount: Long.ZERO, minCount: Long.ZERO };
}

export const QueryRequestSearchRequest = {
  encode(message: QueryRequestSearchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestSearchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestSearchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleScriptId = reader.int64() as Long;
          break;
        case 2:
          message.calldata = reader.bytes();
          break;
        case 3:
          message.askCount = reader.int64() as Long;
          break;
        case 4:
          message.minCount = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestSearchRequest {
    return {
      oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO,
      calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
      askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.ZERO,
      minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.ZERO,
    };
  },

  toJSON(message: QueryRequestSearchRequest): unknown {
    const obj: any = {};
    message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
    message.calldata !== undefined &&
      (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
    message.askCount !== undefined && (obj.askCount = (message.askCount || Long.ZERO).toString());
    message.minCount !== undefined && (obj.minCount = (message.minCount || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestSearchRequest>, I>>(base?: I): QueryRequestSearchRequest {
    return QueryRequestSearchRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestSearchRequest>, I>>(object: I): QueryRequestSearchRequest {
    const message = createBaseQueryRequestSearchRequest();
    message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
      ? Long.fromValue(object.oracleScriptId)
      : Long.ZERO;
    message.calldata = object.calldata ?? new Uint8Array();
    message.askCount = (object.askCount !== undefined && object.askCount !== null)
      ? Long.fromValue(object.askCount)
      : Long.ZERO;
    message.minCount = (object.minCount !== undefined && object.minCount !== null)
      ? Long.fromValue(object.minCount)
      : Long.ZERO;
    return message;
  },
};

function createBaseQueryRequestSearchResponse(): QueryRequestSearchResponse {
  return { request: undefined, result: undefined, reports: [] };
}

export const QueryRequestSearchResponse = {
  encode(message: QueryRequestSearchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      Request.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestSearchResponse {
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

  fromJSON(object: any): QueryRequestSearchResponse {
    return {
      request: isSet(object.request) ? Request.fromJSON(object.request) : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
      reports: Array.isArray(object?.reports) ? object.reports.map((e: any) => Report.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryRequestSearchResponse): unknown {
    const obj: any = {};
    message.request !== undefined && (obj.request = message.request ? Request.toJSON(message.request) : undefined);
    message.result !== undefined && (obj.result = message.result ? Result.toJSON(message.result) : undefined);
    if (message.reports) {
      obj.reports = message.reports.map((e) => e ? Report.toJSON(e) : undefined);
    } else {
      obj.reports = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestSearchResponse>, I>>(base?: I): QueryRequestSearchResponse {
    return QueryRequestSearchResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestSearchResponse>, I>>(object: I): QueryRequestSearchResponse {
    const message = createBaseQueryRequestSearchResponse();
    message.request = (object.request !== undefined && object.request !== null)
      ? Request.fromPartial(object.request)
      : undefined;
    message.result = (object.result !== undefined && object.result !== null)
      ? Result.fromPartial(object.result)
      : undefined;
    message.reports = object.reports?.map((e) => Report.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryRequestPriceRequest(): QueryRequestPriceRequest {
  return { symbol: "", askCount: Long.ZERO, minCount: Long.ZERO };
}

export const QueryRequestPriceRequest = {
  encode(message: QueryRequestPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestPriceRequest {
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
          message.askCount = reader.int64() as Long;
          break;
        case 3:
          message.minCount = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestPriceRequest {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.ZERO,
      minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.ZERO,
    };
  },

  toJSON(message: QueryRequestPriceRequest): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.askCount !== undefined && (obj.askCount = (message.askCount || Long.ZERO).toString());
    message.minCount !== undefined && (obj.minCount = (message.minCount || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestPriceRequest>, I>>(base?: I): QueryRequestPriceRequest {
    return QueryRequestPriceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestPriceRequest>, I>>(object: I): QueryRequestPriceRequest {
    const message = createBaseQueryRequestPriceRequest();
    message.symbol = object.symbol ?? "";
    message.askCount = (object.askCount !== undefined && object.askCount !== null)
      ? Long.fromValue(object.askCount)
      : Long.ZERO;
    message.minCount = (object.minCount !== undefined && object.minCount !== null)
      ? Long.fromValue(object.minCount)
      : Long.ZERO;
    return message;
  },
};

function createBaseQueryRequestPriceResponse(): QueryRequestPriceResponse {
  return { oracleScriptId: Long.ZERO, calldata: new Uint8Array(), askCount: Long.ZERO, minCount: Long.ZERO };
}

export const QueryRequestPriceResponse = {
  encode(message: QueryRequestPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequestPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleScriptId = reader.int64() as Long;
          break;
        case 2:
          message.calldata = reader.bytes();
          break;
        case 3:
          message.askCount = reader.int64() as Long;
          break;
        case 4:
          message.minCount = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestPriceResponse {
    return {
      oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO,
      calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
      askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.ZERO,
      minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.ZERO,
    };
  },

  toJSON(message: QueryRequestPriceResponse): unknown {
    const obj: any = {};
    message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
    message.calldata !== undefined &&
      (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
    message.askCount !== undefined && (obj.askCount = (message.askCount || Long.ZERO).toString());
    message.minCount !== undefined && (obj.minCount = (message.minCount || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestPriceResponse>, I>>(base?: I): QueryRequestPriceResponse {
    return QueryRequestPriceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestPriceResponse>, I>>(object: I): QueryRequestPriceResponse {
    const message = createBaseQueryRequestPriceResponse();
    message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
      ? Long.fromValue(object.oracleScriptId)
      : Long.ZERO;
    message.calldata = object.calldata ?? new Uint8Array();
    message.askCount = (object.askCount !== undefined && object.askCount !== null)
      ? Long.fromValue(object.askCount)
      : Long.ZERO;
    message.minCount = (object.minCount !== undefined && object.minCount !== null)
      ? Long.fromValue(object.minCount)
      : Long.ZERO;
    return message;
  },
};

function createBaseQueryDataProvidersPoolRequest(): QueryDataProvidersPoolRequest {
  return {};
}

export const QueryDataProvidersPoolRequest = {
  encode(_: QueryDataProvidersPoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataProvidersPoolRequest {
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

  fromJSON(_: any): QueryDataProvidersPoolRequest {
    return {};
  },

  toJSON(_: QueryDataProvidersPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataProvidersPoolRequest>, I>>(base?: I): QueryDataProvidersPoolRequest {
    return QueryDataProvidersPoolRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataProvidersPoolRequest>, I>>(_: I): QueryDataProvidersPoolRequest {
    const message = createBaseQueryDataProvidersPoolRequest();
    return message;
  },
};

function createBaseQueryDataProvidersPoolResponse(): QueryDataProvidersPoolResponse {
  return { pool: [] };
}

export const QueryDataProvidersPoolResponse = {
  encode(message: QueryDataProvidersPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pool) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataProvidersPoolResponse {
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

  fromJSON(object: any): QueryDataProvidersPoolResponse {
    return { pool: Array.isArray(object?.pool) ? object.pool.map((e: any) => Coin.fromJSON(e)) : [] };
  },

  toJSON(message: QueryDataProvidersPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.pool = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataProvidersPoolResponse>, I>>(base?: I): QueryDataProvidersPoolResponse {
    return QueryDataProvidersPoolResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataProvidersPoolResponse>, I>>(
    object: I,
  ): QueryDataProvidersPoolResponse {
    const message = createBaseQueryDataProvidersPoolResponse();
    message.pool = object.pool?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryRequestIDs(): QueryRequestIDs {
  return { requestIds: [] };
}

export const QueryRequestIDs = {
  encode(message: QueryRequestIDs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.requestIds) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestIDs {
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
              message.requestIds.push(reader.int64() as Long);
            }
          } else {
            message.requestIds.push(reader.int64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestIDs {
    return {
      requestIds: Array.isArray(object?.requestIds) ? object.requestIds.map((e: any) => Long.fromValue(e)) : [],
    };
  },

  toJSON(message: QueryRequestIDs): unknown {
    const obj: any = {};
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => (e || Long.ZERO).toString());
    } else {
      obj.requestIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestIDs>, I>>(base?: I): QueryRequestIDs {
    return QueryRequestIDs.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestIDs>, I>>(object: I): QueryRequestIDs {
    const message = createBaseQueryRequestIDs();
    message.requestIds = object.requestIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseQueryDataProviderRewardRequest(): QueryDataProviderRewardRequest {
  return {};
}

export const QueryDataProviderRewardRequest = {
  encode(_: QueryDataProviderRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataProviderRewardRequest {
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

  fromJSON(_: any): QueryDataProviderRewardRequest {
    return {};
  },

  toJSON(_: QueryDataProviderRewardRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataProviderRewardRequest>, I>>(base?: I): QueryDataProviderRewardRequest {
    return QueryDataProviderRewardRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataProviderRewardRequest>, I>>(_: I): QueryDataProviderRewardRequest {
    const message = createBaseQueryDataProviderRewardRequest();
    return message;
  },
};

function createBaseQueryDataProviderRewardResponse(): QueryDataProviderRewardResponse {
  return { rewardPerByte: [] };
}

export const QueryDataProviderRewardResponse = {
  encode(message: QueryDataProviderRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewardPerByte) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataProviderRewardResponse {
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

  fromJSON(object: any): QueryDataProviderRewardResponse {
    return {
      rewardPerByte: Array.isArray(object?.rewardPerByte) ? object.rewardPerByte.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryDataProviderRewardResponse): unknown {
    const obj: any = {};
    if (message.rewardPerByte) {
      obj.rewardPerByte = message.rewardPerByte.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewardPerByte = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataProviderRewardResponse>, I>>(base?: I): QueryDataProviderRewardResponse {
    return QueryDataProviderRewardResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataProviderRewardResponse>, I>>(
    object: I,
  ): QueryDataProviderRewardResponse {
    const message = createBaseQueryDataProviderRewardResponse();
    message.rewardPerByte = object.rewardPerByte?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPendingRequestsRequest(): QueryPendingRequestsRequest {
  return { validatorAddress: "" };
}

export const QueryPendingRequestsRequest = {
  encode(message: QueryPendingRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingRequestsRequest {
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

  fromJSON(object: any): QueryPendingRequestsRequest {
    return { validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "" };
  },

  toJSON(message: QueryPendingRequestsRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPendingRequestsRequest>, I>>(base?: I): QueryPendingRequestsRequest {
    return QueryPendingRequestsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPendingRequestsRequest>, I>>(object: I): QueryPendingRequestsRequest {
    const message = createBaseQueryPendingRequestsRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};

function createBaseQueryPendingRequestsResponse(): QueryPendingRequestsResponse {
  return { requestIds: [] };
}

export const QueryPendingRequestsResponse = {
  encode(message: QueryPendingRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.requestIds) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingRequestsResponse {
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
              message.requestIds.push(reader.int64() as Long);
            }
          } else {
            message.requestIds.push(reader.int64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPendingRequestsResponse {
    return {
      requestIds: Array.isArray(object?.requestIds) ? object.requestIds.map((e: any) => Long.fromValue(e)) : [],
    };
  },

  toJSON(message: QueryPendingRequestsResponse): unknown {
    const obj: any = {};
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => (e || Long.ZERO).toString());
    } else {
      obj.requestIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPendingRequestsResponse>, I>>(base?: I): QueryPendingRequestsResponse {
    return QueryPendingRequestsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryPendingRequestsResponse>, I>>(object: I): QueryPendingRequestsResponse {
    const message = createBaseQueryPendingRequestsResponse();
    message.requestIds = object.requestIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseQueryRequestVerificationRequest(): QueryRequestVerificationRequest {
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
  encode(message: QueryRequestVerificationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestVerificationRequest {
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
          message.requestId = reader.uint64() as Long;
          break;
        case 4:
          message.externalId = reader.uint64() as Long;
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

  fromJSON(object: any): QueryRequestVerificationRequest {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.UZERO,
      externalId: isSet(object.externalId) ? Long.fromValue(object.externalId) : Long.UZERO,
      reporter: isSet(object.reporter) ? String(object.reporter) : "",
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: QueryRequestVerificationRequest): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.validator !== undefined && (obj.validator = message.validator);
    message.requestId !== undefined && (obj.requestId = (message.requestId || Long.UZERO).toString());
    message.externalId !== undefined && (obj.externalId = (message.externalId || Long.UZERO).toString());
    message.reporter !== undefined && (obj.reporter = message.reporter);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestVerificationRequest>, I>>(base?: I): QueryRequestVerificationRequest {
    return QueryRequestVerificationRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestVerificationRequest>, I>>(
    object: I,
  ): QueryRequestVerificationRequest {
    const message = createBaseQueryRequestVerificationRequest();
    message.chainId = object.chainId ?? "";
    message.validator = object.validator ?? "";
    message.requestId = (object.requestId !== undefined && object.requestId !== null)
      ? Long.fromValue(object.requestId)
      : Long.UZERO;
    message.externalId = (object.externalId !== undefined && object.externalId !== null)
      ? Long.fromValue(object.externalId)
      : Long.UZERO;
    message.reporter = object.reporter ?? "";
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryRequestVerificationResponse(): QueryRequestVerificationResponse {
  return { chainId: "", validator: "", requestId: Long.UZERO, externalId: Long.UZERO, dataSourceId: Long.UZERO };
}

export const QueryRequestVerificationResponse = {
  encode(message: QueryRequestVerificationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestVerificationResponse {
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
          message.requestId = reader.uint64() as Long;
          break;
        case 4:
          message.externalId = reader.uint64() as Long;
          break;
        case 5:
          message.dataSourceId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRequestVerificationResponse {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.UZERO,
      externalId: isSet(object.externalId) ? Long.fromValue(object.externalId) : Long.UZERO,
      dataSourceId: isSet(object.dataSourceId) ? Long.fromValue(object.dataSourceId) : Long.UZERO,
    };
  },

  toJSON(message: QueryRequestVerificationResponse): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.validator !== undefined && (obj.validator = message.validator);
    message.requestId !== undefined && (obj.requestId = (message.requestId || Long.UZERO).toString());
    message.externalId !== undefined && (obj.externalId = (message.externalId || Long.UZERO).toString());
    message.dataSourceId !== undefined && (obj.dataSourceId = (message.dataSourceId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryRequestVerificationResponse>, I>>(
    base?: I,
  ): QueryRequestVerificationResponse {
    return QueryRequestVerificationResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryRequestVerificationResponse>, I>>(
    object: I,
  ): QueryRequestVerificationResponse {
    const message = createBaseQueryRequestVerificationResponse();
    message.chainId = object.chainId ?? "";
    message.validator = object.validator ?? "";
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

function createBaseQueryDataProviderAccumulatedRewardRequest(): QueryDataProviderAccumulatedRewardRequest {
  return { dataProviderAddress: "" };
}

export const QueryDataProviderAccumulatedRewardRequest = {
  encode(message: QueryDataProviderAccumulatedRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataProviderAddress !== "") {
      writer.uint32(10).string(message.dataProviderAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataProviderAccumulatedRewardRequest {
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

  fromJSON(object: any): QueryDataProviderAccumulatedRewardRequest {
    return { dataProviderAddress: isSet(object.dataProviderAddress) ? String(object.dataProviderAddress) : "" };
  },

  toJSON(message: QueryDataProviderAccumulatedRewardRequest): unknown {
    const obj: any = {};
    message.dataProviderAddress !== undefined && (obj.dataProviderAddress = message.dataProviderAddress);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataProviderAccumulatedRewardRequest>, I>>(
    base?: I,
  ): QueryDataProviderAccumulatedRewardRequest {
    return QueryDataProviderAccumulatedRewardRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataProviderAccumulatedRewardRequest>, I>>(
    object: I,
  ): QueryDataProviderAccumulatedRewardRequest {
    const message = createBaseQueryDataProviderAccumulatedRewardRequest();
    message.dataProviderAddress = object.dataProviderAddress ?? "";
    return message;
  },
};

function createBaseQueryDataProviderAccumulatedRewardResponse(): QueryDataProviderAccumulatedRewardResponse {
  return { accumulatedReward: [] };
}

export const QueryDataProviderAccumulatedRewardResponse = {
  encode(message: QueryDataProviderAccumulatedRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accumulatedReward) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDataProviderAccumulatedRewardResponse {
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

  fromJSON(object: any): QueryDataProviderAccumulatedRewardResponse {
    return {
      accumulatedReward: Array.isArray(object?.accumulatedReward)
        ? object.accumulatedReward.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryDataProviderAccumulatedRewardResponse): unknown {
    const obj: any = {};
    if (message.accumulatedReward) {
      obj.accumulatedReward = message.accumulatedReward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.accumulatedReward = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDataProviderAccumulatedRewardResponse>, I>>(
    base?: I,
  ): QueryDataProviderAccumulatedRewardResponse {
    return QueryDataProviderAccumulatedRewardResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDataProviderAccumulatedRewardResponse>, I>>(
    object: I,
  ): QueryDataProviderAccumulatedRewardResponse {
    const message = createBaseQueryDataProviderAccumulatedRewardResponse();
    message.accumulatedReward = object.accumulatedReward?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Counts queries the number of data sources, oracle scripts, and requests. */
  Counts(request: QueryCountsRequest): Promise<QueryCountsResponse>;
  /** Data queries the data source or oracle script script for given file hash. */
  Data(request: QueryDataRequest): Promise<QueryDataResponse>;
  /** DataSource queries data source info for given data source id. */
  DataSource(request: QueryDataSourceRequest): Promise<QueryDataSourceResponse>;
  /** DataSources queries data sources info. */
  DataSources(request: QueryDataSourcesRequest): Promise<QueryDataSourcesResponse>;
  /** OracleScript queries oracle script info for given oracle script id. */
  OracleScript(request: QueryOracleScriptRequest): Promise<QueryOracleScriptResponse>;
  /** OracleScripts queries all oracle scripts with pagination. */
  OracleScripts(request: QueryOracleScriptsRequest): Promise<QueryOracleScriptsResponse>;
  /** Request queries request info for given request id. */
  Request(request: QueryRequestRequest): Promise<QueryRequestResponse>;
  /** Requests queries all requests with pagination. */
  Requests(request: QueryRequestsRequest): Promise<QueryRequestsResponse>;
  /** Validator queries oracle info of validator for given validator address. */
  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
  /** IsReporter queries grant of account on this validator. */
  IsReporter(request: QueryIsReporterRequest): Promise<QueryIsReporterResponse>;
  /** Reporters queries all reporters of a given validator address. */
  Reporters(request: QueryReportersRequest): Promise<QueryReportersResponse>;
  /** ActiveValidators queries all active oracle validators. */
  ActiveValidators(request: QueryActiveValidatorsRequest): Promise<QueryActiveValidatorsResponse>;
  /** Params queries the oracle parameters. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** RequestSearch queries the latest request that match the given input. */
  RequestSearch(request: QueryRequestSearchRequest): Promise<QueryRequestSearchResponse>;
  /** RequestPrice queries the latest price on standard price reference oracle script. */
  RequestPrice(request: QueryRequestPriceRequest): Promise<QueryRequestPriceResponse>;
  DataProvidersPool(request: QueryDataProvidersPoolRequest): Promise<QueryDataProvidersPoolResponse>;
  RequestReports(request: QueryRequestReportsRequest): Promise<QueryRequestReportsResponse>;
  DataProviderReward(request: QueryDataProviderRewardRequest): Promise<QueryDataProviderRewardResponse>;
  /** PendingRequests queries list of pending request IDs assigned to given validator. */
  PendingRequests(request: QueryPendingRequestsRequest): Promise<QueryPendingRequestsResponse>;
  /**
   * RequestVerification verifies a request to make sure that
   * all information that will be used to report the data is valid
   */
  RequestVerification(request: QueryRequestVerificationRequest): Promise<QueryRequestVerificationResponse>;
  /** DataProviderAccumulatedReward queries oracle info of reporter rewards for given reporter address. */
  DataProviderAccumulatedReward(
    request: QueryDataProviderAccumulatedRewardRequest,
  ): Promise<QueryDataProviderAccumulatedRewardResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "oracle.v1.Query";
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
  Counts(request: QueryCountsRequest): Promise<QueryCountsResponse> {
    const data = QueryCountsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Counts", data);
    return promise.then((data) => QueryCountsResponse.decode(new _m0.Reader(data)));
  }

  Data(request: QueryDataRequest): Promise<QueryDataResponse> {
    const data = QueryDataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Data", data);
    return promise.then((data) => QueryDataResponse.decode(new _m0.Reader(data)));
  }

  DataSource(request: QueryDataSourceRequest): Promise<QueryDataSourceResponse> {
    const data = QueryDataSourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DataSource", data);
    return promise.then((data) => QueryDataSourceResponse.decode(new _m0.Reader(data)));
  }

  DataSources(request: QueryDataSourcesRequest): Promise<QueryDataSourcesResponse> {
    const data = QueryDataSourcesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DataSources", data);
    return promise.then((data) => QueryDataSourcesResponse.decode(new _m0.Reader(data)));
  }

  OracleScript(request: QueryOracleScriptRequest): Promise<QueryOracleScriptResponse> {
    const data = QueryOracleScriptRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleScript", data);
    return promise.then((data) => QueryOracleScriptResponse.decode(new _m0.Reader(data)));
  }

  OracleScripts(request: QueryOracleScriptsRequest): Promise<QueryOracleScriptsResponse> {
    const data = QueryOracleScriptsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "OracleScripts", data);
    return promise.then((data) => QueryOracleScriptsResponse.decode(new _m0.Reader(data)));
  }

  Request(request: QueryRequestRequest): Promise<QueryRequestResponse> {
    const data = QueryRequestRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Request", data);
    return promise.then((data) => QueryRequestResponse.decode(new _m0.Reader(data)));
  }

  Requests(request: QueryRequestsRequest): Promise<QueryRequestsResponse> {
    const data = QueryRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Requests", data);
    return promise.then((data) => QueryRequestsResponse.decode(new _m0.Reader(data)));
  }

  Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Validator", data);
    return promise.then((data) => QueryValidatorResponse.decode(new _m0.Reader(data)));
  }

  IsReporter(request: QueryIsReporterRequest): Promise<QueryIsReporterResponse> {
    const data = QueryIsReporterRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "IsReporter", data);
    return promise.then((data) => QueryIsReporterResponse.decode(new _m0.Reader(data)));
  }

  Reporters(request: QueryReportersRequest): Promise<QueryReportersResponse> {
    const data = QueryReportersRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Reporters", data);
    return promise.then((data) => QueryReportersResponse.decode(new _m0.Reader(data)));
  }

  ActiveValidators(request: QueryActiveValidatorsRequest): Promise<QueryActiveValidatorsResponse> {
    const data = QueryActiveValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ActiveValidators", data);
    return promise.then((data) => QueryActiveValidatorsResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  RequestSearch(request: QueryRequestSearchRequest): Promise<QueryRequestSearchResponse> {
    const data = QueryRequestSearchRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestSearch", data);
    return promise.then((data) => QueryRequestSearchResponse.decode(new _m0.Reader(data)));
  }

  RequestPrice(request: QueryRequestPriceRequest): Promise<QueryRequestPriceResponse> {
    const data = QueryRequestPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestPrice", data);
    return promise.then((data) => QueryRequestPriceResponse.decode(new _m0.Reader(data)));
  }

  DataProvidersPool(request: QueryDataProvidersPoolRequest): Promise<QueryDataProvidersPoolResponse> {
    const data = QueryDataProvidersPoolRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DataProvidersPool", data);
    return promise.then((data) => QueryDataProvidersPoolResponse.decode(new _m0.Reader(data)));
  }

  RequestReports(request: QueryRequestReportsRequest): Promise<QueryRequestReportsResponse> {
    const data = QueryRequestReportsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestReports", data);
    return promise.then((data) => QueryRequestReportsResponse.decode(new _m0.Reader(data)));
  }

  DataProviderReward(request: QueryDataProviderRewardRequest): Promise<QueryDataProviderRewardResponse> {
    const data = QueryDataProviderRewardRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DataProviderReward", data);
    return promise.then((data) => QueryDataProviderRewardResponse.decode(new _m0.Reader(data)));
  }

  PendingRequests(request: QueryPendingRequestsRequest): Promise<QueryPendingRequestsResponse> {
    const data = QueryPendingRequestsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "PendingRequests", data);
    return promise.then((data) => QueryPendingRequestsResponse.decode(new _m0.Reader(data)));
  }

  RequestVerification(request: QueryRequestVerificationRequest): Promise<QueryRequestVerificationResponse> {
    const data = QueryRequestVerificationRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestVerification", data);
    return promise.then((data) => QueryRequestVerificationResponse.decode(new _m0.Reader(data)));
  }

  DataProviderAccumulatedReward(
    request: QueryDataProviderAccumulatedRewardRequest,
  ): Promise<QueryDataProviderAccumulatedRewardResponse> {
    const data = QueryDataProviderAccumulatedRewardRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DataProviderAccumulatedReward", data);
    return promise.then((data) => QueryDataProviderAccumulatedRewardResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
