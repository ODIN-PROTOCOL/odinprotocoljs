/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { RawReport } from "./oracle";

export const protobufPackage = "oracle.v1";

/** MsgRequestData is a message for sending a data oracle request. */
export interface MsgRequestData {
  /** OracleScriptID is the identifier of the oracle script to call. */
  oracleScriptId: Long;
  /** Calldata is the OBI encoded call parameters to the oracle script. */
  calldata: Uint8Array;
  /** AskCount is the number of validators to perform the oracle task. */
  askCount: Long;
  /**
   * MinCount is the minimum number of validators sufficient to resolve the
   * tasks.
   */
  minCount: Long;
  /** ClientID is the client-provided unique identifier to tracking the request. */
  clientId: string;
  /**
   * FeeLimit is the maximum tokens that will be paid to all data source
   * providers.
   */
  feeLimit: Coin[];
  /** PrepareGas is amount of gas to pay to prepare raw requests */
  prepareGas: Long;
  /** ExecuteGas is amount of gas to reserve for executing */
  executeGas: Long;
  /** Sender is the sender of this message. */
  sender: string;
}

/** MsgRequestDataResponse */
export interface MsgRequestDataResponse {
}

/** MsgReportData is a message for reporting to a data request by a validator. */
export interface MsgReportData {
  /** RequestID is the identifier of the request to report to. */
  requestId: Long;
  /**
   * RawReports is the list of report information for each of the request's
   * external ID.
   */
  rawReports: RawReport[];
  /** Validator is the address of the validator that owns this report. */
  validator: string;
  /**
   * Reporter is the message signer who submits this report transaction for the
   * validator.
   */
  reporter: string;
}

/** MsgReportDataResponse */
export interface MsgReportDataResponse {
}

/** MsgCreateDataSource is a message for creating a new data source. */
export interface MsgCreateDataSource {
  /** Name is the name of this data source (optional). */
  name: string;
  /** Description is the description of this data source (optional). */
  description: string;
  /**
   * Executable is the executable script or binary to be run by validators upon
   * execution.
   */
  executable: Uint8Array;
  /**
   * Fee is the data source fee per ask_count that data provider will receive
   * from requester.
   */
  fee: Coin[];
  /**
   * Owner is the address who is allowed to make further changes to the data
   * source.
   */
  owner: string;
  /** Sender is the signer of this message. */
  sender: string;
}

/** MsgCreateDataSourceResponse */
export interface MsgCreateDataSourceResponse {
}

/** MsgEditDataSource is a message for editing an existing data source. */
export interface MsgEditDataSource {
  /** DataSourceID is the unique identifier of the data source to be edited. */
  dataSourceId: Long;
  /** Name is the name of this data source (optional). */
  name: string;
  /** Description is the description of this data source (optional). */
  description: string;
  /**
   * Executable is the executable script or binary to be run by validators upon
   * execution.
   */
  executable: Uint8Array;
  /**
   * Fee is the data source fee per ask_count that data provider will receive
   * from requester.
   */
  fee: Coin[];
  /**
   * Owner is the address who is allowed to make further changes to the data
   * source.
   */
  owner: string;
  /**
   * Sender is the signer of this message. Must be the current data source's
   * owner.
   */
  sender: string;
}

/** MsgEditDataSourceResponse */
export interface MsgEditDataSourceResponse {
}

/** MsgCreateOracleScript is a message for creating an oracle script. */
export interface MsgCreateOracleScript {
  /** Name is the name of this oracle script (optional). */
  name: string;
  /** Description is the description of this oracle script (optional). */
  description: string;
  /** Schema is the OBI schema of this oracle script (optional). */
  schema: string;
  /** SourceCodeURL is the absolute URI to the script's source code (optional). */
  sourceCodeUrl: string;
  /** Code is the oracle WebAssembly binary code. Can be raw of gzip compressed. */
  code: Uint8Array;
  /**
   * Owner is the address who is allowed to make further changes to the oracle
   * script.
   */
  owner: string;
  /** Sender is the signer of this message. */
  sender: string;
}

/** MsgCreateOracleScriptResponse */
export interface MsgCreateOracleScriptResponse {
}

/** MsgEditOracleScript is a message for editing an existing oracle script. */
export interface MsgEditOracleScript {
  /** OracleScriptID is the unique identifier of the oracle script to be edited. */
  oracleScriptId: Long;
  /** Name is the name of this oracle script (optional). */
  name: string;
  /** Description is the description of this oracle script (optional). */
  description: string;
  /** Schema is the OBI schema of this oracle script (optional). */
  schema: string;
  /** SourceCodeURL is the absolute URI to the script's source code (optional). */
  sourceCodeUrl: string;
  /** Code is the oracle WebAssembly binary code. Can be raw of gzip compressed. */
  code: Uint8Array;
  /**
   * Owner is new the address who is allowed to make further changes to the
   * oracle script.
   */
  owner: string;
  /**
   * Sender is the signer of this message. Must be the current oracle script's
   * owner.
   */
  sender: string;
}

/** MsgEditOracleScriptResponse */
export interface MsgEditOracleScriptResponse {
}

/**
 * MsgEditOracleScript is a message for activating a validator to become an
 * oracle provider.
 */
export interface MsgActivate {
  /** Validator is the signer of this message and the validator to be activated. */
  validator: string;
}

/** MsgActivateResponse */
export interface MsgActivateResponse {
}

/** MsgAddReporter is a message for adding a new reporter for a validator. */
export interface MsgAddReporter {
  /**
   * Validator is the validator that wishes to add a new reporter. This is the
   * signer.
   */
  validator: string;
  /** Reporter is the address to be added as a reporter to the validator. */
  reporter: string;
}

/** MsgAddReporterResponse */
export interface MsgAddReporterResponse {
}

/**
 * MsgAddReporter is a message for removing an existing reporter from a
 * validator.
 */
export interface MsgRemoveReporter {
  /**
   * Validator is the validator that wishes to remove an existing reporter. This
   * is the signer.
   */
  validator: string;
  /** Reporter is the address to be removed from being the validators' reporter. */
  reporter: string;
}

/** MsgRemoveReporterResponse */
export interface MsgRemoveReporterResponse {
}

function createBaseMsgRequestData(): MsgRequestData {
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
  encode(message: MsgRequestData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestData();
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
          message.askCount = reader.uint64() as Long;
          break;
        case 4:
          message.minCount = reader.uint64() as Long;
          break;
        case 5:
          message.clientId = reader.string();
          break;
        case 6:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 7:
          message.prepareGas = reader.uint64() as Long;
          break;
        case 8:
          message.executeGas = reader.uint64() as Long;
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

  fromJSON(object: any): MsgRequestData {
    return {
      oracleScriptId: isSet(object.oracleScriptId) ? Long.fromValue(object.oracleScriptId) : Long.ZERO,
      calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array(),
      askCount: isSet(object.askCount) ? Long.fromValue(object.askCount) : Long.UZERO,
      minCount: isSet(object.minCount) ? Long.fromValue(object.minCount) : Long.UZERO,
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      feeLimit: Array.isArray(object?.feeLimit) ? object.feeLimit.map((e: any) => Coin.fromJSON(e)) : [],
      prepareGas: isSet(object.prepareGas) ? Long.fromValue(object.prepareGas) : Long.UZERO,
      executeGas: isSet(object.executeGas) ? Long.fromValue(object.executeGas) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgRequestData): unknown {
    const obj: any = {};
    message.oracleScriptId !== undefined && (obj.oracleScriptId = (message.oracleScriptId || Long.ZERO).toString());
    message.calldata !== undefined &&
      (obj.calldata = base64FromBytes(message.calldata !== undefined ? message.calldata : new Uint8Array()));
    message.askCount !== undefined && (obj.askCount = (message.askCount || Long.UZERO).toString());
    message.minCount !== undefined && (obj.minCount = (message.minCount || Long.UZERO).toString());
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.feeLimit) {
      obj.feeLimit = message.feeLimit.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeLimit = [];
    }
    message.prepareGas !== undefined && (obj.prepareGas = (message.prepareGas || Long.UZERO).toString());
    message.executeGas !== undefined && (obj.executeGas = (message.executeGas || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestData>, I>>(base?: I): MsgRequestData {
    return MsgRequestData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestData>, I>>(object: I): MsgRequestData {
    const message = createBaseMsgRequestData();
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
    message.clientId = object.clientId ?? "";
    message.feeLimit = object.feeLimit?.map((e) => Coin.fromPartial(e)) || [];
    message.prepareGas = (object.prepareGas !== undefined && object.prepareGas !== null)
      ? Long.fromValue(object.prepareGas)
      : Long.UZERO;
    message.executeGas = (object.executeGas !== undefined && object.executeGas !== null)
      ? Long.fromValue(object.executeGas)
      : Long.UZERO;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgRequestDataResponse(): MsgRequestDataResponse {
  return {};
}

export const MsgRequestDataResponse = {
  encode(_: MsgRequestDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestDataResponse {
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

  fromJSON(_: any): MsgRequestDataResponse {
    return {};
  },

  toJSON(_: MsgRequestDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRequestDataResponse>, I>>(base?: I): MsgRequestDataResponse {
    return MsgRequestDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestDataResponse>, I>>(_: I): MsgRequestDataResponse {
    const message = createBaseMsgRequestDataResponse();
    return message;
  },
};

function createBaseMsgReportData(): MsgReportData {
  return { requestId: Long.ZERO, rawReports: [], validator: "", reporter: "" };
}

export const MsgReportData = {
  encode(message: MsgReportData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.requestId.isZero()) {
      writer.uint32(8).int64(message.requestId);
    }
    for (const v of message.rawReports) {
      RawReport.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    if (message.reporter !== "") {
      writer.uint32(34).string(message.reporter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReportData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReportData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requestId = reader.int64() as Long;
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

  fromJSON(object: any): MsgReportData {
    return {
      requestId: isSet(object.requestId) ? Long.fromValue(object.requestId) : Long.ZERO,
      rawReports: Array.isArray(object?.rawReports) ? object.rawReports.map((e: any) => RawReport.fromJSON(e)) : [],
      validator: isSet(object.validator) ? String(object.validator) : "",
      reporter: isSet(object.reporter) ? String(object.reporter) : "",
    };
  },

  toJSON(message: MsgReportData): unknown {
    const obj: any = {};
    message.requestId !== undefined && (obj.requestId = (message.requestId || Long.ZERO).toString());
    if (message.rawReports) {
      obj.rawReports = message.rawReports.map((e) => e ? RawReport.toJSON(e) : undefined);
    } else {
      obj.rawReports = [];
    }
    message.validator !== undefined && (obj.validator = message.validator);
    message.reporter !== undefined && (obj.reporter = message.reporter);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgReportData>, I>>(base?: I): MsgReportData {
    return MsgReportData.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgReportData>, I>>(object: I): MsgReportData {
    const message = createBaseMsgReportData();
    message.requestId = (object.requestId !== undefined && object.requestId !== null)
      ? Long.fromValue(object.requestId)
      : Long.ZERO;
    message.rawReports = object.rawReports?.map((e) => RawReport.fromPartial(e)) || [];
    message.validator = object.validator ?? "";
    message.reporter = object.reporter ?? "";
    return message;
  },
};

function createBaseMsgReportDataResponse(): MsgReportDataResponse {
  return {};
}

export const MsgReportDataResponse = {
  encode(_: MsgReportDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReportDataResponse {
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

  fromJSON(_: any): MsgReportDataResponse {
    return {};
  },

  toJSON(_: MsgReportDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgReportDataResponse>, I>>(base?: I): MsgReportDataResponse {
    return MsgReportDataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgReportDataResponse>, I>>(_: I): MsgReportDataResponse {
    const message = createBaseMsgReportDataResponse();
    return message;
  },
};

function createBaseMsgCreateDataSource(): MsgCreateDataSource {
  return { name: "", description: "", executable: new Uint8Array(), fee: [], owner: "", sender: "" };
}

export const MsgCreateDataSource = {
  encode(message: MsgCreateDataSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDataSource {
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

  fromJSON(object: any): MsgCreateDataSource {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      executable: isSet(object.executable) ? bytesFromBase64(object.executable) : new Uint8Array(),
      fee: Array.isArray(object?.fee) ? object.fee.map((e: any) => Coin.fromJSON(e)) : [],
      owner: isSet(object.owner) ? String(object.owner) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgCreateDataSource): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.executable !== undefined &&
      (obj.executable = base64FromBytes(message.executable !== undefined ? message.executable : new Uint8Array()));
    if (message.fee) {
      obj.fee = message.fee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fee = [];
    }
    message.owner !== undefined && (obj.owner = message.owner);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDataSource>, I>>(base?: I): MsgCreateDataSource {
    return MsgCreateDataSource.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDataSource>, I>>(object: I): MsgCreateDataSource {
    const message = createBaseMsgCreateDataSource();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.executable = object.executable ?? new Uint8Array();
    message.fee = object.fee?.map((e) => Coin.fromPartial(e)) || [];
    message.owner = object.owner ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgCreateDataSourceResponse(): MsgCreateDataSourceResponse {
  return {};
}

export const MsgCreateDataSourceResponse = {
  encode(_: MsgCreateDataSourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDataSourceResponse {
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

  fromJSON(_: any): MsgCreateDataSourceResponse {
    return {};
  },

  toJSON(_: MsgCreateDataSourceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDataSourceResponse>, I>>(base?: I): MsgCreateDataSourceResponse {
    return MsgCreateDataSourceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDataSourceResponse>, I>>(_: I): MsgCreateDataSourceResponse {
    const message = createBaseMsgCreateDataSourceResponse();
    return message;
  },
};

function createBaseMsgEditDataSource(): MsgEditDataSource {
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
  encode(message: MsgEditDataSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    if (message.sender !== "") {
      writer.uint32(58).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditDataSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditDataSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataSourceId = reader.int64() as Long;
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

  fromJSON(object: any): MsgEditDataSource {
    return {
      dataSourceId: isSet(object.dataSourceId) ? Long.fromValue(object.dataSourceId) : Long.ZERO,
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      executable: isSet(object.executable) ? bytesFromBase64(object.executable) : new Uint8Array(),
      fee: Array.isArray(object?.fee) ? object.fee.map((e: any) => Coin.fromJSON(e)) : [],
      owner: isSet(object.owner) ? String(object.owner) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: MsgEditDataSource): unknown {
    const obj: any = {};
    message.dataSourceId !== undefined && (obj.dataSourceId = (message.dataSourceId || Long.ZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.executable !== undefined &&
      (obj.executable = base64FromBytes(message.executable !== undefined ? message.executable : new Uint8Array()));
    if (message.fee) {
      obj.fee = message.fee.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.fee = [];
    }
    message.owner !== undefined && (obj.owner = message.owner);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditDataSource>, I>>(base?: I): MsgEditDataSource {
    return MsgEditDataSource.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditDataSource>, I>>(object: I): MsgEditDataSource {
    const message = createBaseMsgEditDataSource();
    message.dataSourceId = (object.dataSourceId !== undefined && object.dataSourceId !== null)
      ? Long.fromValue(object.dataSourceId)
      : Long.ZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.executable = object.executable ?? new Uint8Array();
    message.fee = object.fee?.map((e) => Coin.fromPartial(e)) || [];
    message.owner = object.owner ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgEditDataSourceResponse(): MsgEditDataSourceResponse {
  return {};
}

export const MsgEditDataSourceResponse = {
  encode(_: MsgEditDataSourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditDataSourceResponse {
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

  fromJSON(_: any): MsgEditDataSourceResponse {
    return {};
  },

  toJSON(_: MsgEditDataSourceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditDataSourceResponse>, I>>(base?: I): MsgEditDataSourceResponse {
    return MsgEditDataSourceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditDataSourceResponse>, I>>(_: I): MsgEditDataSourceResponse {
    const message = createBaseMsgEditDataSourceResponse();
    return message;
  },
};

function createBaseMsgCreateOracleScript(): MsgCreateOracleScript {
  return { name: "", description: "", schema: "", sourceCodeUrl: "", code: new Uint8Array(), owner: "", sender: "" };
}

export const MsgCreateOracleScript = {
  encode(message: MsgCreateOracleScript, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOracleScript {
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

  fromJSON(object: any): MsgCreateOracleScript {
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

  toJSON(message: MsgCreateOracleScript): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<MsgCreateOracleScript>, I>>(base?: I): MsgCreateOracleScript {
    return MsgCreateOracleScript.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateOracleScript>, I>>(object: I): MsgCreateOracleScript {
    const message = createBaseMsgCreateOracleScript();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.schema = object.schema ?? "";
    message.sourceCodeUrl = object.sourceCodeUrl ?? "";
    message.code = object.code ?? new Uint8Array();
    message.owner = object.owner ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgCreateOracleScriptResponse(): MsgCreateOracleScriptResponse {
  return {};
}

export const MsgCreateOracleScriptResponse = {
  encode(_: MsgCreateOracleScriptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateOracleScriptResponse {
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

  fromJSON(_: any): MsgCreateOracleScriptResponse {
    return {};
  },

  toJSON(_: MsgCreateOracleScriptResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateOracleScriptResponse>, I>>(base?: I): MsgCreateOracleScriptResponse {
    return MsgCreateOracleScriptResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateOracleScriptResponse>, I>>(_: I): MsgCreateOracleScriptResponse {
    const message = createBaseMsgCreateOracleScriptResponse();
    return message;
  },
};

function createBaseMsgEditOracleScript(): MsgEditOracleScript {
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
  encode(message: MsgEditOracleScript, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOracleScript {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditOracleScript();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleScriptId = reader.int64() as Long;
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

  fromJSON(object: any): MsgEditOracleScript {
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

  toJSON(message: MsgEditOracleScript): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<MsgEditOracleScript>, I>>(base?: I): MsgEditOracleScript {
    return MsgEditOracleScript.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditOracleScript>, I>>(object: I): MsgEditOracleScript {
    const message = createBaseMsgEditOracleScript();
    message.oracleScriptId = (object.oracleScriptId !== undefined && object.oracleScriptId !== null)
      ? Long.fromValue(object.oracleScriptId)
      : Long.ZERO;
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.schema = object.schema ?? "";
    message.sourceCodeUrl = object.sourceCodeUrl ?? "";
    message.code = object.code ?? new Uint8Array();
    message.owner = object.owner ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseMsgEditOracleScriptResponse(): MsgEditOracleScriptResponse {
  return {};
}

export const MsgEditOracleScriptResponse = {
  encode(_: MsgEditOracleScriptResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditOracleScriptResponse {
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

  fromJSON(_: any): MsgEditOracleScriptResponse {
    return {};
  },

  toJSON(_: MsgEditOracleScriptResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgEditOracleScriptResponse>, I>>(base?: I): MsgEditOracleScriptResponse {
    return MsgEditOracleScriptResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditOracleScriptResponse>, I>>(_: I): MsgEditOracleScriptResponse {
    const message = createBaseMsgEditOracleScriptResponse();
    return message;
  },
};

function createBaseMsgActivate(): MsgActivate {
  return { validator: "" };
}

export const MsgActivate = {
  encode(message: MsgActivate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivate {
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

  fromJSON(object: any): MsgActivate {
    return { validator: isSet(object.validator) ? String(object.validator) : "" };
  },

  toJSON(message: MsgActivate): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgActivate>, I>>(base?: I): MsgActivate {
    return MsgActivate.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgActivate>, I>>(object: I): MsgActivate {
    const message = createBaseMsgActivate();
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseMsgActivateResponse(): MsgActivateResponse {
  return {};
}

export const MsgActivateResponse = {
  encode(_: MsgActivateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateResponse {
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

  fromJSON(_: any): MsgActivateResponse {
    return {};
  },

  toJSON(_: MsgActivateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgActivateResponse>, I>>(base?: I): MsgActivateResponse {
    return MsgActivateResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgActivateResponse>, I>>(_: I): MsgActivateResponse {
    const message = createBaseMsgActivateResponse();
    return message;
  },
};

function createBaseMsgAddReporter(): MsgAddReporter {
  return { validator: "", reporter: "" };
}

export const MsgAddReporter = {
  encode(message: MsgAddReporter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.reporter !== "") {
      writer.uint32(18).string(message.reporter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddReporter {
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

  fromJSON(object: any): MsgAddReporter {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      reporter: isSet(object.reporter) ? String(object.reporter) : "",
    };
  },

  toJSON(message: MsgAddReporter): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.reporter !== undefined && (obj.reporter = message.reporter);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddReporter>, I>>(base?: I): MsgAddReporter {
    return MsgAddReporter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddReporter>, I>>(object: I): MsgAddReporter {
    const message = createBaseMsgAddReporter();
    message.validator = object.validator ?? "";
    message.reporter = object.reporter ?? "";
    return message;
  },
};

function createBaseMsgAddReporterResponse(): MsgAddReporterResponse {
  return {};
}

export const MsgAddReporterResponse = {
  encode(_: MsgAddReporterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddReporterResponse {
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

  fromJSON(_: any): MsgAddReporterResponse {
    return {};
  },

  toJSON(_: MsgAddReporterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgAddReporterResponse>, I>>(base?: I): MsgAddReporterResponse {
    return MsgAddReporterResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddReporterResponse>, I>>(_: I): MsgAddReporterResponse {
    const message = createBaseMsgAddReporterResponse();
    return message;
  },
};

function createBaseMsgRemoveReporter(): MsgRemoveReporter {
  return { validator: "", reporter: "" };
}

export const MsgRemoveReporter = {
  encode(message: MsgRemoveReporter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.reporter !== "") {
      writer.uint32(18).string(message.reporter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveReporter {
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

  fromJSON(object: any): MsgRemoveReporter {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      reporter: isSet(object.reporter) ? String(object.reporter) : "",
    };
  },

  toJSON(message: MsgRemoveReporter): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.reporter !== undefined && (obj.reporter = message.reporter);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveReporter>, I>>(base?: I): MsgRemoveReporter {
    return MsgRemoveReporter.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveReporter>, I>>(object: I): MsgRemoveReporter {
    const message = createBaseMsgRemoveReporter();
    message.validator = object.validator ?? "";
    message.reporter = object.reporter ?? "";
    return message;
  },
};

function createBaseMsgRemoveReporterResponse(): MsgRemoveReporterResponse {
  return {};
}

export const MsgRemoveReporterResponse = {
  encode(_: MsgRemoveReporterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveReporterResponse {
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

  fromJSON(_: any): MsgRemoveReporterResponse {
    return {};
  },

  toJSON(_: MsgRemoveReporterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRemoveReporterResponse>, I>>(base?: I): MsgRemoveReporterResponse {
    return MsgRemoveReporterResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveReporterResponse>, I>>(_: I): MsgRemoveReporterResponse {
    const message = createBaseMsgRemoveReporterResponse();
    return message;
  },
};

/** Msg defines the oracle Msg service. */
export interface Msg {
  /** RequestData defines a method for requesting a new request. */
  RequestData(request: MsgRequestData): Promise<MsgRequestDataResponse>;
  /** ReportData defines a method for reporting a data to resolving the request. */
  ReportData(request: MsgReportData): Promise<MsgReportDataResponse>;
  /** CreateDataSource defines a method for creating a new data source. */
  CreateDataSource(request: MsgCreateDataSource): Promise<MsgCreateDataSourceResponse>;
  /** EditDataSource defines a method for editing an existing data source. */
  EditDataSource(request: MsgEditDataSource): Promise<MsgEditDataSourceResponse>;
  /** CreateOracleScript defines a method for creating a new oracle script. */
  CreateOracleScript(request: MsgCreateOracleScript): Promise<MsgCreateOracleScriptResponse>;
  /** EditOracleScript defines a method for editing an existing oracle script. */
  EditOracleScript(request: MsgEditOracleScript): Promise<MsgEditOracleScriptResponse>;
  /** Activate defines a method for applying to be an oracle validator. */
  Activate(request: MsgActivate): Promise<MsgActivateResponse>;
  /** AddReporter defines a method for adding a new reporter for a validator. */
  AddReporter(request: MsgAddReporter): Promise<MsgAddReporterResponse>;
  /** RemoveReporter defines a method for TODO */
  RemoveReporter(request: MsgRemoveReporter): Promise<MsgRemoveReporterResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "oracle.v1.Msg";
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
  RequestData(request: MsgRequestData): Promise<MsgRequestDataResponse> {
    const data = MsgRequestData.encode(request).finish();
    const promise = this.rpc.request(this.service, "RequestData", data);
    return promise.then((data) => MsgRequestDataResponse.decode(new _m0.Reader(data)));
  }

  ReportData(request: MsgReportData): Promise<MsgReportDataResponse> {
    const data = MsgReportData.encode(request).finish();
    const promise = this.rpc.request(this.service, "ReportData", data);
    return promise.then((data) => MsgReportDataResponse.decode(new _m0.Reader(data)));
  }

  CreateDataSource(request: MsgCreateDataSource): Promise<MsgCreateDataSourceResponse> {
    const data = MsgCreateDataSource.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateDataSource", data);
    return promise.then((data) => MsgCreateDataSourceResponse.decode(new _m0.Reader(data)));
  }

  EditDataSource(request: MsgEditDataSource): Promise<MsgEditDataSourceResponse> {
    const data = MsgEditDataSource.encode(request).finish();
    const promise = this.rpc.request(this.service, "EditDataSource", data);
    return promise.then((data) => MsgEditDataSourceResponse.decode(new _m0.Reader(data)));
  }

  CreateOracleScript(request: MsgCreateOracleScript): Promise<MsgCreateOracleScriptResponse> {
    const data = MsgCreateOracleScript.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateOracleScript", data);
    return promise.then((data) => MsgCreateOracleScriptResponse.decode(new _m0.Reader(data)));
  }

  EditOracleScript(request: MsgEditOracleScript): Promise<MsgEditOracleScriptResponse> {
    const data = MsgEditOracleScript.encode(request).finish();
    const promise = this.rpc.request(this.service, "EditOracleScript", data);
    return promise.then((data) => MsgEditOracleScriptResponse.decode(new _m0.Reader(data)));
  }

  Activate(request: MsgActivate): Promise<MsgActivateResponse> {
    const data = MsgActivate.encode(request).finish();
    const promise = this.rpc.request(this.service, "Activate", data);
    return promise.then((data) => MsgActivateResponse.decode(new _m0.Reader(data)));
  }

  AddReporter(request: MsgAddReporter): Promise<MsgAddReporterResponse> {
    const data = MsgAddReporter.encode(request).finish();
    const promise = this.rpc.request(this.service, "AddReporter", data);
    return promise.then((data) => MsgAddReporterResponse.decode(new _m0.Reader(data)));
  }

  RemoveReporter(request: MsgRemoveReporter): Promise<MsgRemoveReporterResponse> {
    const data = MsgRemoveReporter.encode(request).finish();
    const promise = this.rpc.request(this.service, "RemoveReporter", data);
    return promise.then((data) => MsgRemoveReporterResponse.decode(new _m0.Reader(data)));
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
