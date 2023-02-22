/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "oracle.v1";

/** ResolveStatus encodes the status of an oracle request. */
export enum ResolveStatus {
  /** RESOLVE_STATUS_OPEN_UNSPECIFIED - Open - the request is not yet resolved. */
  RESOLVE_STATUS_OPEN_UNSPECIFIED = 0,
  /** RESOLVE_STATUS_SUCCESS - Success - the request has been resolved successfully with no errors. */
  RESOLVE_STATUS_SUCCESS = 1,
  /** RESOLVE_STATUS_FAILURE - Failure - an error occured during the request's resolve call. */
  RESOLVE_STATUS_FAILURE = 2,
  /**
   * RESOLVE_STATUS_EXPIRED - Expired - the request does not get enough reports from validator within the
   * timeframe.
   */
  RESOLVE_STATUS_EXPIRED = 3,
  UNRECOGNIZED = -1,
}

export function resolveStatusFromJSON(object: any): ResolveStatus {
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

export function resolveStatusToJSON(object: ResolveStatus): string {
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

/** DataSource is the data structure for storing data sources in the storage. */
export interface DataSource {
  id: Long;
  owner: string;
  name: string;
  description: string;
  filename: string;
  fee: Coin[];
}

/** OracleScript is the data structure for storing oracle scripts in the storage. */
export interface OracleScript {
  id: Long;
  owner: string;
  name: string;
  description: string;
  filename: string;
  schema: string;
  sourceCodeUrl: string;
}

/** RawRequest is the data structure for storing raw requests in the storage. */
export interface RawRequest {
  externalId: Long;
  dataSourceId: Long;
  calldata: Uint8Array;
}

/** RawRequest is the data structure for storing raw reporter in the storage. */
export interface RawReport {
  externalId: Long;
  exitCode: number;
  data: Uint8Array;
}

/** Request is the data structure for storing requests in the storage. */
export interface Request {
  id: Long;
  oracleScriptId: Long;
  calldata: Uint8Array;
  requestedValidators: string[];
  minCount: Long;
  requestHeight: Long;
  requestTime: Long;
  clientId: string;
  rawRequests: RawRequest[];
  ibcSource?: IBCSource;
  executeGas: Long;
}

/** Report is the data structure for storing reports in the storage. */
export interface Report {
  validator: string;
  inBeforeResolve: boolean;
  rawReports: RawReport[];
}

/**
 * OracleRequestPacketData encodes an oracle request sent from other blockchains
 * to BandChain.
 */
export interface OracleRequestPacketData {
  /**
   * ClientID is the unique identifier of this oracle request, as specified by
   * the client. This same unique ID will be sent back to the requester with the
   * oracle response.
   */
  clientId: string;
  /**
   * OracleScriptID is the unique identifier of the oracle script to be
   * executed.
   */
  oracleScriptId: Long;
  /** Calldata is the calldata bytes available for oracle executor to read. */
  calldata: Uint8Array;
  /**
   * AskCount is the number of validators that are requested to respond to this
   * oracle request. Higher value means more security, at a higher gas cost.
   */
  askCount: Long;
  /**
   * MinCount is the minimum number of validators necessary for the request to
   * proceed to the execution phase. Higher value means more security, at the
   * cost of liveness.
   */
  minCount: Long;
  /**
   * FeeLimit is the maximum tokens that will be paid to all data source
   * providers.
   */
  feeLimit: Coin[];
  /**
   * RequestKey is the key from request chain to match data source fee payer on
   * Bandchain
   */
  requestKey: string;
  /** PrepareGas is amount of gas to pay to prepare raw requests */
  prepareGas: Long;
  /** ExecuteGas is amount of gas to reserve for executing */
  executeGas: Long;
}

/**
 * OracleRequestPacketAcknowledgement encodes an oracle request acknowledgement
 * send back to requester chain.
 */
export interface OracleRequestPacketAcknowledgement {
  /** RequestID is BandChain's unique identifier for this oracle request. */
  requestId: Long;
}

/**
 * OracleResponsePacketData encodes an oracle response from BandChain to the
 * requester.
 */
export interface OracleResponsePacketData {
  /**
   * ClientID is the unique identifier matched with that of the oracle request
   * packet.
   */
  clientId: string;
  /** RequestID is BandChain's unique identifier for this oracle request. */
  requestId: Long;
  /**
   * AnsCount is the number of validators among to the asked validators that
   * actually responded to this oracle request prior to this oracle request
   * being resolved.
   */
  ansCount: Long;
  /**
   * RequestTime is the UNIX epoch time at which the request was sent to
   * BandChain.
   */
  requestTime: Long;
  /**
   * ResolveTime is the UNIX epoch time at which the request was resolved to the
   * final result.
   */
  resolveTime: Long;
  /**
   * ResolveStatus is the status of this oracle request, which can be OK,
   * FAILURE, or EXPIRED.
   */
  resolveStatus: ResolveStatus;
  /** Result is the final aggregated value only available if status if OK. */
  result: Uint8Array;
}

export interface RequestResult {
  request?: Request;
  result?: Result;
  reports: Report[];
}

/** Result encodes a result of request and store in chain */
export interface Result {
  /**
   * ClientID is the unique identifier of this oracle request, as specified by
   * the client. This same unique ID will be sent back to the requester with the
   * oracle response.
   */
  clientId: string;
  /**
   * OracleScriptID is the unique identifier of the oracle script to be
   * executed.
   */
  oracleScriptId: Long;
  /** Calldata is the calldata bytes available for oracle executor to read. */
  calldata: Uint8Array;
  /**
   * AskCount is the number of validators that are requested to respond to this
   * oracle request. Higher value means more security, at a higher gas cost.
   */
  askCount: Long;
  /**
   * MinCount is the minimum number of validators necessary for the request to
   * proceed to the execution phase. Higher value means more security, at the
   * cost of liveness.
   */
  minCount: Long;
  /** RequestID is BandChain's unique identifier for this oracle request. */
  requestId: Long;
  /**
   * AnsCount is the number of validators among to the asked validators that
   * actually responded to this oracle request prior to this oracle request
   * being resolved.
   */
  ansCount: Long;
  /**
   * RequestTime is the UNIX epoch time at which the request was sent to
   * BandChain.
   */
  requestTime: Long;
  /**
   * ResolveTime is the UNIX epoch time at which the request was resolved to the
   * final result.
   */
  resolveTime: Long;
  /**
   * ResolveStatus is the status of this oracle request, which can be OK,
   * FAILURE, or EXPIRED.
   */
  resolveStatus: ResolveStatus;
  /** Result is the final aggregated value only available if status if OK. */
  result: Uint8Array;
}

/** ValidatorStatus maintains whether a validator is an active oracle provider. */
export interface ValidatorStatus {
  isActive: boolean;
  since?: Date;
}

/** PendingResolveList */
export interface PendingResolveList {
  requestIds: Long[];
}

/** IBCSource */
export interface IBCSource {
  /** SourceChannel */
  sourceChannel: string;
  /** SourcePort */
  sourcePort: string;
}

export interface OraclePool {
  dataProvidersPool: Coin[];
}

export interface DataProviderAccumulatedReward {
  dataProvider: string;
  dataProviderReward: Coin[];
}

export interface DataProvidersAccumulatedRewards {
  currentRewardPerByte: Coin[];
  accumulatedAmount: Coin[];
}

export interface AccumulatedPaymentsForData {
  accumulatedAmount: Coin[];
}

/**
 * RequestVerification is a message that is constructed and signed by a reporter
 * to be used as a part of verification of oracle request.
 */
export interface RequestVerification {
  /** ChainID is the ID of targeted chain */
  chainId: string;
  /** Validator is an validator address */
  validator: string;
  /** RequestID is the targeted request ID */
  requestId: Long;
  /** ExternalID is the oracle's external ID of data source */
  externalId: Long;
}

/**
 * IBCChannel is information of IBC protocol to allow communicating with other
 * chain
 */
export interface IBCChannel {
  /**
   * PortID is port ID used for sending response packet when request is
   * resolved.
   */
  portId: string;
  /**
   * ChannelID is channel ID used for sending response packet when request is
   * resolved.
   */
  channelId: string;
}

function createBaseDataSource(): DataSource {
  return { id: Long.ZERO, owner: "", name: "", description: "", filename: "", fee: [] };
}

export const DataSource = {
  encode(message: DataSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64() as Long;
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

  fromJSON(object: any): DataSource {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      filename: isSet(object.filename) ? String(object.filename) : "",
      fee: Array.isArray(object?.fee) ? object.fee.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: DataSource): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.filename !== undefined && (obj.filename = message.filename);
    if (message.fee) {
      obj.fee = message.fee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fee = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataSource>, I>>(base?: I): DataSource {
    return DataSource.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataSource>, I>>(object: I): DataSource {
    const message = createBaseDataSource();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.filename = object.filename ?? "";
    message.fee = object.fee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOracleScript(): OracleScript {
  return { id: Long.ZERO, owner: "", name: "", description: "", filename: "", schema: "", sourceCodeUrl: "" };
}

export const OracleScript = {
  encode(message: OracleScript, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleScript {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64() as Long;
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

  fromJSON(object: any): OracleScript {
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

  toJSON(message: OracleScript): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.filename !== undefined && (obj.filename = message.filename);
    message.schema !== undefined && (obj.schema = message.schema);
    message.sourceCodeUrl !== undefined && (obj.sourceCodeUrl = message.sourceCodeUrl);
    return obj;
  },

  create<I extends Exact<DeepPartial<OracleScript>, I>>(base?: I): OracleScript {
    return OracleScript.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OracleScript>, I>>(object: I): OracleScript {
    const message = createBaseOracleScript();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.filename = object.filename ?? "";
    message.schema = object.schema ?? "";
    message.sourceCodeUrl = object.sourceCodeUrl ?? "";
    return message;
  },
};

function createBaseRawRequest(): RawRequest {
  return { externalId: Long.ZERO, dataSourceId: Long.ZERO, calldata: new Uint8Array() };
}

export const RawRequest = {
  encode(message: RawRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RawRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRawRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalId = reader.int64() as Long;
          break;
        case 2:
          message.dataSourceId = reader.int64() as Long;
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

  fromJSON(object: any): RawRequest {
    return {
      externalId: isSet(object.externalId) ? Long.fromValue(object.externalId) : Long.ZERO,
      dataSourceId: isSet(object.dataSourceId) ? Long.fromValue(object.dataSourceId) : Long.ZERO,
      calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
    };
  },

  toJSON(message: RawRequest): unknown {
    const obj: any = {};
    message.externalId !== undefined && (obj.externalId = (message.externalId || Long.ZERO).toString());
    message.dataSourceId !== undefined && (obj.dataSourceId = (message.dataSourceId || Long.ZERO).toString());
    message.calldata !== undefined &&
      (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<RawRequest>, I>>(base?: I): RawRequest {
    return RawRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RawRequest>, I>>(object: I): RawRequest {
    const message = createBaseRawRequest();
    message.externalId = (object.externalId !== undefined && object.externalId !== null)
      ? Long.fromValue(object.externalId)
      : Long.ZERO;
    message.dataSourceId = (object.dataSourceId !== undefined && object.dataSourceId !== null)
      ? Long.fromValue(object.dataSourceId)
      : Long.ZERO;
    message.calldata = object.calldata ?? new Uint8Array();
    return message;
  },
};

function createBaseRawReport(): RawReport {
  return { externalId: Long.ZERO, exitCode: 0, data: new Uint8Array() };
}

export const RawReport = {
  encode(message: RawReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RawReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRawReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.externalId = reader.int64() as Long;
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

  fromJSON(object: any): RawReport {
    return {
      externalId: isSet(object.externalId) ? Long.fromValue(object.externalId) : Long.ZERO,
      exitCode: isSet(object.exitCode) ? Number(object.exitCode) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
    };
  },

  toJSON(message: RawReport): unknown {
    const obj: any = {};
    message.externalId !== undefined && (obj.externalId = (message.externalId || Long.ZERO).toString());
    message.exitCode !== undefined && (obj.exitCode = Math.round(message.exitCode));
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  create<I extends Exact<DeepPartial<RawReport>, I>>(base?: I): RawReport {
    return RawReport.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RawReport>, I>>(object: I): RawReport {
    const message = createBaseRawReport();
    message.externalId = (object.externalId !== undefined && object.externalId !== null)
      ? Long.fromValue(object.externalId)
      : Long.ZERO;
    message.exitCode = object.exitCode ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseRequest(): Request {
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
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(34).string(v!);
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
      RawRequest.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.ibcSource !== undefined) {
      IBCSource.encode(message.ibcSource, writer.uint32(82).fork()).ldelim();
    }
    if (!message.executeGas.isZero()) {
      writer.uint32(88).uint64(message.executeGas);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64() as Long;
          break;
        case 2:
          message.oracleScriptId = reader.int64() as Long;
          break;
        case 3:
          message.calldata = reader.bytes();
          break;
        case 4:
          message.requestedValidators.push(reader.string());
          break;
        case 5:
          message.minCount = reader.uint64() as Long;
          break;
        case 6:
          message.requestHeight = reader.int64() as Long;
          break;
        case 7:
          message.requestTime = reader.uint64() as Long;
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
          message.executeGas = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.ZERO,
      oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO,
      calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
      requestedValidators: Array.isArray(object?.requestedValidators)
        ? object.requestedValidators.map((e: any) => String(e))
        : [],
      minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.UZERO,
      requestHeight: isSet(object.requestHeight) ? Long.fromValue(object.requestHeight) : Long.ZERO,
      requestTime: isSet(object.requestTime) ? Long.fromValue(object.requestTime) : Long.UZERO,
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      rawRequests: Array.isArray(object?.rawRequests) ? object.rawRequests.map((e: any) => RawRequest.fromJSON(e)) : [],
      ibcSource: isSet(object.ibcSource) ? IBCSource.fromJSON(object.ibcSource) : undefined,
      executeGas: isSet(object.executeGas) ? Long.fromValue(object.executeGas) : Long.UZERO,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
    message.calldata !== undefined &&
      (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
    if (message.requestedValidators) {
      obj.requestedValidators = message.requestedValidators.map((e) => e);
    } else {
      obj.requestedValidators = [];
    }
    message.minCount !== undefined && (obj.minCount = (message.minCount || Long.UZERO).toString());
    message.requestHeight !== undefined && (obj.requestHeight = (message.requestHeight || Long.ZERO).toString());
    message.requestTime !== undefined && (obj.requestTime = (message.requestTime || Long.UZERO).toString());
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.rawRequests) {
      obj.rawRequests = message.rawRequests.map((e) => e ? RawRequest.toJSON(e) : undefined);
    } else {
      obj.rawRequests = [];
    }
    message.ibcSource !== undefined &&
      (obj.ibcSource = message.ibcSource ? IBCSource.toJSON(message.ibcSource) : undefined);
    message.executeGas !== undefined && (obj.executeGas = (message.executeGas || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<Request>, I>>(base?: I): Request {
    return Request.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : Long.ZERO;
    message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
      ? Long.fromValue(object.oracleScriptId)
      : Long.ZERO;
    message.calldata = object.calldata ?? new Uint8Array();
    message.requestedValidators = object.requestedValidators?.map((e) => e) || [];
    message.minCount = (object.minCount !== undefined && object.minCount !== null)
      ? Long.fromValue(object.minCount)
      : Long.UZERO;
    message.requestHeight = (object.requestHeight !== undefined && object.requestHeight !== null)
      ? Long.fromValue(object.requestHeight)
      : Long.ZERO;
    message.requestTime = (object.requestTime !== undefined && object.requestTime !== null)
      ? Long.fromValue(object.requestTime)
      : Long.UZERO;
    message.clientId = object.clientId ?? "";
    message.rawRequests = object.rawRequests?.map((e) => RawRequest.fromPartial(e)) || [];
    message.ibcSource = (object.ibcSource !== undefined && object.ibcSource !== null)
      ? IBCSource.fromPartial(object.ibcSource)
      : undefined;
    message.executeGas = (object.executeGas !== undefined && object.executeGas !== null)
      ? Long.fromValue(object.executeGas)
      : Long.UZERO;
    return message;
  },
};

function createBaseReport(): Report {
  return { validator: "", inBeforeResolve: false, rawReports: [] };
}

export const Report = {
  encode(message: Report, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.inBeforeResolve === true) {
      writer.uint32(16).bool(message.inBeforeResolve);
    }
    for (const v of message.rawReports) {
      RawReport.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Report {
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

  fromJSON(object: any): Report {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      inBeforeResolve: isSet(object.inBeforeResolve) ? Boolean(object.inBeforeResolve) : false,
      rawReports: Array.isArray(object?.rawReports) ? object.rawReports.map((e: any) => RawReport.fromJSON(e)) : [],
    };
  },

  toJSON(message: Report): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.inBeforeResolve !== undefined && (obj.inBeforeResolve = message.inBeforeResolve);
    if (message.rawReports) {
      obj.rawReports = message.rawReports.map((e) => e ? RawReport.toJSON(e) : undefined);
    } else {
      obj.rawReports = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Report>, I>>(base?: I): Report {
    return Report.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Report>, I>>(object: I): Report {
    const message = createBaseReport();
    message.validator = object.validator ?? "";
    message.inBeforeResolve = object.inBeforeResolve ?? false;
    message.rawReports = object.rawReports?.map((e) => RawReport.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOracleRequestPacketData(): OracleRequestPacketData {
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
  encode(message: OracleRequestPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleRequestPacketData {
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
          message.oracleScriptId = reader.int64() as Long;
          break;
        case 3:
          message.calldata = reader.bytes();
          break;
        case 4:
          message.askCount = reader.uint64() as Long;
          break;
        case 5:
          message.minCount = reader.uint64() as Long;
          break;
        case 6:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.requestKey = reader.string();
          break;
        case 8:
          message.prepareGas = reader.uint64() as Long;
          break;
        case 9:
          message.executeGas = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OracleRequestPacketData {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO,
      calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
      askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.UZERO,
      minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.UZERO,
      feeLimit: Array.isArray(object?.feeLimit) ? object.feeLimit.map((e: any) => Coin.fromJSON(e)) : [],
      requestKey: isSet(object.requestKey) ? String(object.requestKey) : "",
      prepareGas: isSet(object.prepareGas) ? Long.fromValue(object.prepareGas) : Long.UZERO,
      executeGas: isSet(object.executeGas) ? Long.fromValue(object.executeGas) : Long.UZERO,
    };
  },

  toJSON(message: OracleRequestPacketData): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
    message.calldata !== undefined &&
      (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
    message.askCount !== undefined && (obj.askCount = (message.askCount || Long.UZERO).toString());
    message.minCount !== undefined && (obj.minCount = (message.minCount || Long.UZERO).toString());
    if (message.feeLimit) {
      obj.feeLimit = message.feeLimit.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeLimit = [];
    }
    message.requestKey !== undefined && (obj.requestKey = message.requestKey);
    message.prepareGas !== undefined && (obj.prepareGas = (message.prepareGas || Long.UZERO).toString());
    message.executeGas !== undefined && (obj.executeGas = (message.executeGas || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<OracleRequestPacketData>, I>>(base?: I): OracleRequestPacketData {
    return OracleRequestPacketData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OracleRequestPacketData>, I>>(object: I): OracleRequestPacketData {
    const message = createBaseOracleRequestPacketData();
    message.clientId = object.clientId ?? "";
    message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
      ? Long.fromValue(object.oracleScriptId)
      : Long.ZERO;
    message.calldata = object.calldata ?? new Uint8Array();
    message.askCount = (object.askCount !== undefined && object.askCount !== null)
      ? Long.fromValue(object.askCount)
      : Long.UZERO;
    message.minCount = (object.minCount !== undefined && object.minCount !== null)
      ? Long.fromValue(object.minCount)
      : Long.UZERO;
    message.feeLimit = object.feeLimit?.map((e) => Coin.fromPartial(e)) || [];
    message.requestKey = object.requestKey ?? "";
    message.prepareGas = (object.prepareGas !== undefined && object.prepareGas !== null)
      ? Long.fromValue(object.prepareGas)
      : Long.UZERO;
    message.executeGas = (object.executeGas !== undefined && object.executeGas !== null)
      ? Long.fromValue(object.executeGas)
      : Long.UZERO;
    return message;
  },
};

function createBaseOracleRequestPacketAcknowledgement(): OracleRequestPacketAcknowledgement {
  return { requestId: Long.ZERO };
}

export const OracleRequestPacketAcknowledgement = {
  encode(message: OracleRequestPacketAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleRequestPacketAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOracleRequestPacketAcknowledgement();
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

  fromJSON(object: any): OracleRequestPacketAcknowledgement {
    return { requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.ZERO };
  },

  toJSON(message: OracleRequestPacketAcknowledgement): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = (message.requestId || Long.ZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<OracleRequestPacketAcknowledgement>, I>>(
    base?: I,
  ): OracleRequestPacketAcknowledgement {
    return OracleRequestPacketAcknowledgement.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OracleRequestPacketAcknowledgement>, I>>(
    object: I,
  ): OracleRequestPacketAcknowledgement {
    const message = createBaseOracleRequestPacketAcknowledgement();
    message.requestId = (object.requestId !== undefined && object.requestId !== null)
      ? Long.fromValue(object.requestId)
      : Long.ZERO;
    return message;
  },
};

function createBaseOracleResponsePacketData(): OracleResponsePacketData {
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
  encode(message: OracleResponsePacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): OracleResponsePacketData {
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
          message.requestId = reader.int64() as Long;
          break;
        case 3:
          message.ansCount = reader.uint64() as Long;
          break;
        case 4:
          message.requestTime = reader.int64() as Long;
          break;
        case 5:
          message.resolveTime = reader.int64() as Long;
          break;
        case 6:
          message.resolveStatus = reader.int32() as any;
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

  fromJSON(object: any): OracleResponsePacketData {
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

  toJSON(message: OracleResponsePacketData): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<OracleResponsePacketData>, I>>(base?: I): OracleResponsePacketData {
    return OracleResponsePacketData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OracleResponsePacketData>, I>>(object: I): OracleResponsePacketData {
    const message = createBaseOracleResponsePacketData();
    message.clientId = object.clientId ?? "";
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
    message.resolveStatus = object.resolveStatus ?? 0;
    message.result = object.result ?? new Uint8Array();
    return message;
  },
};

function createBaseRequestResult(): RequestResult {
  return { request: undefined, result: undefined, reports: [] };
}

export const RequestResult = {
  encode(message: RequestResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestResult {
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

  fromJSON(object: any): RequestResult {
    return {
      request: isSet(object.request) ? Request.fromJSON(object.request) : undefined,
      result: isSet(object.result) ? Result.fromJSON(object.result) : undefined,
      reports: Array.isArray(object?.reports) ? object.reports.map((e: any) => Report.fromJSON(e)) : [],
    };
  },

  toJSON(message: RequestResult): unknown {
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

  create<I extends Exact<DeepPartial<RequestResult>, I>>(base?: I): RequestResult {
    return RequestResult.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RequestResult>, I>>(object: I): RequestResult {
    const message = createBaseRequestResult();
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

function createBaseResult(): Result {
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
  encode(message: Result, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Result {
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
          message.oracleScriptId = reader.int64() as Long;
          break;
        case 3:
          message.calldata = reader.bytes();
          break;
        case 4:
          message.askCount = reader.uint64() as Long;
          break;
        case 5:
          message.minCount = reader.uint64() as Long;
          break;
        case 6:
          message.requestId = reader.int64() as Long;
          break;
        case 7:
          message.ansCount = reader.uint64() as Long;
          break;
        case 8:
          message.requestTime = reader.int64() as Long;
          break;
        case 9:
          message.resolveTime = reader.int64() as Long;
          break;
        case 11:
          message.resolveStatus = reader.int32() as any;
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

  fromJSON(object: any): Result {
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

  toJSON(message: Result): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<Result>, I>>(base?: I): Result {
    return Result.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Result>, I>>(object: I): Result {
    const message = createBaseResult();
    message.clientId = object.clientId ?? "";
    message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
      ? Long.fromValue(object.oracleScriptId)
      : Long.ZERO;
    message.calldata = object.calldata ?? new Uint8Array();
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
    message.resolveStatus = object.resolveStatus ?? 0;
    message.result = object.result ?? new Uint8Array();
    return message;
  },
};

function createBaseValidatorStatus(): ValidatorStatus {
  return { isActive: false, since: undefined };
}

export const ValidatorStatus = {
  encode(message: ValidatorStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isActive === true) {
      writer.uint32(8).bool(message.isActive);
    }
    if (message.since !== undefined) {
      Timestamp.encode(toTimestamp(message.since), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorStatus {
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

  fromJSON(object: any): ValidatorStatus {
    return {
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      since: isSet(object.since) ? fromJsonTimestamp(object.since) : undefined,
    };
  },

  toJSON(message: ValidatorStatus): unknown {
    const obj: any = {};
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.since !== undefined && (obj.since = message.since.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<ValidatorStatus>, I>>(base?: I): ValidatorStatus {
    return ValidatorStatus.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorStatus>, I>>(object: I): ValidatorStatus {
    const message = createBaseValidatorStatus();
    message.isActive = object.isActive ?? false;
    message.since = object.since ?? undefined;
    return message;
  },
};

function createBasePendingResolveList(): PendingResolveList {
  return { requestIds: [] };
}

export const PendingResolveList = {
  encode(message: PendingResolveList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.requestIds) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PendingResolveList {
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

  fromJSON(object: any): PendingResolveList {
    return {
      requestIds: Array.isArray(object?.requestIds) ? object.requestIds.map((e: any) => Long.fromValue(e)) : [],
    };
  },

  toJSON(message: PendingResolveList): unknown {
    const obj: any = {};
    if (message.requestIds) {
      obj.requestIds = message.requestIds.map((e) => (e || Long.ZERO).toString());
    } else {
      obj.requestIds = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PendingResolveList>, I>>(base?: I): PendingResolveList {
    return PendingResolveList.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PendingResolveList>, I>>(object: I): PendingResolveList {
    const message = createBasePendingResolveList();
    message.requestIds = object.requestIds?.map((e) => Long.fromValue(e)) || [];
    return message;
  },
};

function createBaseIBCSource(): IBCSource {
  return { sourceChannel: "", sourcePort: "" };
}

export const IBCSource = {
  encode(message: IBCSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sourceChannel !== "") {
      writer.uint32(10).string(message.sourceChannel);
    }
    if (message.sourcePort !== "") {
      writer.uint32(18).string(message.sourcePort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCSource {
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

  fromJSON(object: any): IBCSource {
    return {
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
    };
  },

  toJSON(message: IBCSource): unknown {
    const obj: any = {};
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    return obj;
  },

  create<I extends Exact<DeepPartial<IBCSource>, I>>(base?: I): IBCSource {
    return IBCSource.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IBCSource>, I>>(object: I): IBCSource {
    const message = createBaseIBCSource();
    message.sourceChannel = object.sourceChannel ?? "";
    message.sourcePort = object.sourcePort ?? "";
    return message;
  },
};

function createBaseOraclePool(): OraclePool {
  return { dataProvidersPool: [] };
}

export const OraclePool = {
  encode(message: OraclePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dataProvidersPool) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OraclePool {
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

  fromJSON(object: any): OraclePool {
    return {
      dataProvidersPool: Array.isArray(object?.dataProvidersPool)
        ? object.dataProvidersPool.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OraclePool): unknown {
    const obj: any = {};
    if (message.dataProvidersPool) {
      obj.dataProvidersPool = message.dataProvidersPool.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.dataProvidersPool = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OraclePool>, I>>(base?: I): OraclePool {
    return OraclePool.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<OraclePool>, I>>(object: I): OraclePool {
    const message = createBaseOraclePool();
    message.dataProvidersPool = object.dataProvidersPool?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDataProviderAccumulatedReward(): DataProviderAccumulatedReward {
  return { dataProvider: "", dataProviderReward: [] };
}

export const DataProviderAccumulatedReward = {
  encode(message: DataProviderAccumulatedReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dataProvider !== "") {
      writer.uint32(10).string(message.dataProvider);
    }
    for (const v of message.dataProviderReward) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataProviderAccumulatedReward {
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

  fromJSON(object: any): DataProviderAccumulatedReward {
    return {
      dataProvider: isSet(object.dataProvider) ? String(object.dataProvider) : "",
      dataProviderReward: Array.isArray(object?.dataProviderReward)
        ? object.dataProviderReward.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DataProviderAccumulatedReward): unknown {
    const obj: any = {};
    message.dataProvider !== undefined && (obj.dataProvider = message.dataProvider);
    if (message.dataProviderReward) {
      obj.dataProviderReward = message.dataProviderReward.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.dataProviderReward = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataProviderAccumulatedReward>, I>>(base?: I): DataProviderAccumulatedReward {
    return DataProviderAccumulatedReward.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataProviderAccumulatedReward>, I>>(
    object: I,
  ): DataProviderAccumulatedReward {
    const message = createBaseDataProviderAccumulatedReward();
    message.dataProvider = object.dataProvider ?? "";
    message.dataProviderReward = object.dataProviderReward?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDataProvidersAccumulatedRewards(): DataProvidersAccumulatedRewards {
  return { currentRewardPerByte: [], accumulatedAmount: [] };
}

export const DataProvidersAccumulatedRewards = {
  encode(message: DataProvidersAccumulatedRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.currentRewardPerByte) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.accumulatedAmount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataProvidersAccumulatedRewards {
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

  fromJSON(object: any): DataProvidersAccumulatedRewards {
    return {
      currentRewardPerByte: Array.isArray(object?.currentRewardPerByte)
        ? object.currentRewardPerByte.map((e: any) => Coin.fromJSON(e))
        : [],
      accumulatedAmount: Array.isArray(object?.accumulatedAmount)
        ? object.accumulatedAmount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DataProvidersAccumulatedRewards): unknown {
    const obj: any = {};
    if (message.currentRewardPerByte) {
      obj.currentRewardPerByte = message.currentRewardPerByte.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.currentRewardPerByte = [];
    }
    if (message.accumulatedAmount) {
      obj.accumulatedAmount = message.accumulatedAmount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.accumulatedAmount = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DataProvidersAccumulatedRewards>, I>>(base?: I): DataProvidersAccumulatedRewards {
    return DataProvidersAccumulatedRewards.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DataProvidersAccumulatedRewards>, I>>(
    object: I,
  ): DataProvidersAccumulatedRewards {
    const message = createBaseDataProvidersAccumulatedRewards();
    message.currentRewardPerByte = object.currentRewardPerByte?.map((e) => Coin.fromPartial(e)) || [];
    message.accumulatedAmount = object.accumulatedAmount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccumulatedPaymentsForData(): AccumulatedPaymentsForData {
  return { accumulatedAmount: [] };
}

export const AccumulatedPaymentsForData = {
  encode(message: AccumulatedPaymentsForData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accumulatedAmount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccumulatedPaymentsForData {
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

  fromJSON(object: any): AccumulatedPaymentsForData {
    return {
      accumulatedAmount: Array.isArray(object?.accumulatedAmount)
        ? object.accumulatedAmount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccumulatedPaymentsForData): unknown {
    const obj: any = {};
    if (message.accumulatedAmount) {
      obj.accumulatedAmount = message.accumulatedAmount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.accumulatedAmount = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccumulatedPaymentsForData>, I>>(base?: I): AccumulatedPaymentsForData {
    return AccumulatedPaymentsForData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AccumulatedPaymentsForData>, I>>(object: I): AccumulatedPaymentsForData {
    const message = createBaseAccumulatedPaymentsForData();
    message.accumulatedAmount = object.accumulatedAmount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRequestVerification(): RequestVerification {
  return { chainId: "", validator: "", requestId: Long.UZERO, externalId: Long.UZERO };
}

export const RequestVerification = {
  encode(message: RequestVerification, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestVerification {
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
          message.requestId = reader.uint64() as Long;
          break;
        case 4:
          message.externalId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestVerification {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.UZERO,
      externalId: isSet(object.externalId) ? Long.fromValue(object.externalId) : Long.UZERO,
    };
  },

  toJSON(message: RequestVerification): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.validator !== undefined && (obj.validator = message.validator);
    message.requestId !== undefined && (obj.requestId = (message.requestId || Long.UZERO).toString());
    message.externalId !== undefined && (obj.externalId = (message.externalId || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<RequestVerification>, I>>(base?: I): RequestVerification {
    return RequestVerification.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RequestVerification>, I>>(object: I): RequestVerification {
    const message = createBaseRequestVerification();
    message.chainId = object.chainId ?? "";
    message.validator = object.validator ?? "";
    message.requestId = (object.requestId !== undefined && object.requestId !== null)
      ? Long.fromValue(object.requestId)
      : Long.UZERO;
    message.externalId = (object.externalId !== undefined && object.externalId !== null)
      ? Long.fromValue(object.externalId)
      : Long.UZERO;
    return message;
  },
};

function createBaseIBCChannel(): IBCChannel {
  return { portId: "", channelId: "" };
}

export const IBCChannel = {
  encode(message: IBCChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IBCChannel {
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

  fromJSON(object: any): IBCChannel {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
    };
  },

  toJSON(message: IBCChannel): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  create<I extends Exact<DeepPartial<IBCChannel>, I>>(base?: I): IBCChannel {
    return IBCChannel.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<IBCChannel>, I>>(object: I): IBCChannel {
    const message = createBaseIBCChannel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
};

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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
