/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "oracle.v1";

/** Params is the data structure that keeps the parameters of the oracle module. */
export interface Params {
  /**
   * MaxRawRequestCount is the maximum number of data source raw requests a
   * request can make.
   */
  maxRawRequestCount: Long;
  /** MaxAskCount is the maximum number of validators a request can target. */
  maxAskCount: Long;
  /**
   * ExpirationBlockCount is the number of blocks a request stays valid before
   * it gets expired due to insufficient reports.
   */
  expirationBlockCount: Long;
  /**
   * BaseOwasmGas is the base amount of Cosmos-SDK gas charged for owasm
   * execution.
   */
  baseOwasmGas: Long;
  /**
   * PerValidatorRequestGas is the amount of Cosmos-SDK gas charged per
   * requested validator.
   */
  perValidatorRequestGas: Long;
  /**
   * SamplingTryCount the number of validator sampling tries to pick the highest
   * voting power subset of validators to perform an oracle task.
   */
  samplingTryCount: Long;
  /**
   * OracleRewardPercentage is the percentage of block rewards allocated to
   * active oracle validators.
   */
  oracleRewardPercentage: Long;
  /**
   * InactivePenaltyDuration is the duration period where a validator cannot
   * activate back after missing an oracle report.
   */
  inactivePenaltyDuration: Long;
  /**
   * MaxDataSize is the maximum number of bytes that can be present in the
   * report as the result
   */
  maxDataSize: Long;
  /**
   * MaxCalldataSize is the maximum number of bytes that can be present in the
   * calldata
   */
  maxCalldataSize: Long;
  /** DataProviderRewardPerByte is the amount of tokens, user gets for the byte of data provided */
  dataProviderRewardPerByte: Coin[];
  /** DataProviderRewardThreshold is the maximum amount of tokens that can be paid for data per time */
  dataProviderRewardThreshold?: RewardThreshold;
  /** RewardDecreasingFraction is the percentage by which the cost of data per byte is reduced when the limit is reached */
  rewardDecreasingFraction: Uint8Array;
  /** Denominations that can be used for withdrawing fee from data requesters */
  dataRequesterFeeDenoms: string[];
}

/** RewardThreshold */
export interface RewardThreshold {
  /** Amount is the maximum amount of tokens that can be paid for data */
  amount: Coin[];
  /** Blocks is the number of blocks during which the sum of the reward should not exceed total_reward_amount */
  blocks: Long;
}

function createBaseParams(): Params {
  return {
    maxRawRequestCount: Long.UZERO,
    maxAskCount: Long.UZERO,
    expirationBlockCount: Long.UZERO,
    baseOwasmGas: Long.UZERO,
    perValidatorRequestGas: Long.UZERO,
    samplingTryCount: Long.UZERO,
    oracleRewardPercentage: Long.UZERO,
    inactivePenaltyDuration: Long.UZERO,
    maxDataSize: Long.UZERO,
    maxCalldataSize: Long.UZERO,
    dataProviderRewardPerByte: [],
    dataProviderRewardThreshold: undefined,
    rewardDecreasingFraction: new Uint8Array(),
    dataRequesterFeeDenoms: [],
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.maxRawRequestCount.isZero()) {
      writer.uint32(8).uint64(message.maxRawRequestCount);
    }
    if (!message.maxAskCount.isZero()) {
      writer.uint32(16).uint64(message.maxAskCount);
    }
    if (!message.expirationBlockCount.isZero()) {
      writer.uint32(24).uint64(message.expirationBlockCount);
    }
    if (!message.baseOwasmGas.isZero()) {
      writer.uint32(32).uint64(message.baseOwasmGas);
    }
    if (!message.perValidatorRequestGas.isZero()) {
      writer.uint32(40).uint64(message.perValidatorRequestGas);
    }
    if (!message.samplingTryCount.isZero()) {
      writer.uint32(48).uint64(message.samplingTryCount);
    }
    if (!message.oracleRewardPercentage.isZero()) {
      writer.uint32(56).uint64(message.oracleRewardPercentage);
    }
    if (!message.inactivePenaltyDuration.isZero()) {
      writer.uint32(64).uint64(message.inactivePenaltyDuration);
    }
    if (!message.maxDataSize.isZero()) {
      writer.uint32(72).uint64(message.maxDataSize);
    }
    if (!message.maxCalldataSize.isZero()) {
      writer.uint32(80).uint64(message.maxCalldataSize);
    }
    for (const v of message.dataProviderRewardPerByte) {
      Coin.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.dataProviderRewardThreshold !== undefined) {
      RewardThreshold.encode(message.dataProviderRewardThreshold, writer.uint32(98).fork()).ldelim();
    }
    if (message.rewardDecreasingFraction.length !== 0) {
      writer.uint32(106).bytes(message.rewardDecreasingFraction);
    }
    for (const v of message.dataRequesterFeeDenoms) {
      writer.uint32(114).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxRawRequestCount = reader.uint64() as Long;
          break;
        case 2:
          message.maxAskCount = reader.uint64() as Long;
          break;
        case 3:
          message.expirationBlockCount = reader.uint64() as Long;
          break;
        case 4:
          message.baseOwasmGas = reader.uint64() as Long;
          break;
        case 5:
          message.perValidatorRequestGas = reader.uint64() as Long;
          break;
        case 6:
          message.samplingTryCount = reader.uint64() as Long;
          break;
        case 7:
          message.oracleRewardPercentage = reader.uint64() as Long;
          break;
        case 8:
          message.inactivePenaltyDuration = reader.uint64() as Long;
          break;
        case 9:
          message.maxDataSize = reader.uint64() as Long;
          break;
        case 10:
          message.maxCalldataSize = reader.uint64() as Long;
          break;
        case 11:
          message.dataProviderRewardPerByte.push(Coin.decode(reader, reader.uint32()));
          break;
        case 12:
          message.dataProviderRewardThreshold = RewardThreshold.decode(reader, reader.uint32());
          break;
        case 13:
          message.rewardDecreasingFraction = reader.bytes();
          break;
        case 14:
          message.dataRequesterFeeDenoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      maxRawRequestCount: isSet(object.maxRawRequestCount) ? Long.fromValue(object.maxRawRequestCount) : Long.UZERO,
      maxAskCount: isSet(object.maxAskCount) ? Long.fromValue(object.maxAskCount) : Long.UZERO,
      expirationBlockCount: isSet(object.expirationBlockCount)
        ? Long.fromValue(object.expirationBlockCount)
        : Long.UZERO,
      baseOwasmGas: isSet(object.baseOwasmGas) ? Long.fromValue(object.baseOwasmGas) : Long.UZERO,
      perValidatorRequestGas: isSet(object.perValidatorRequestGas)
        ? Long.fromValue(object.perValidatorRequestGas)
        : Long.UZERO,
      samplingTryCount: isSet(object.samplingTryCount) ? Long.fromValue(object.samplingTryCount) : Long.UZERO,
      oracleRewardPercentage: isSet(object.oracleRewardPercentage)
        ? Long.fromValue(object.oracleRewardPercentage)
        : Long.UZERO,
      inactivePenaltyDuration: isSet(object.inactivePenaltyDuration)
        ? Long.fromValue(object.inactivePenaltyDuration)
        : Long.UZERO,
      maxDataSize: isSet(object.maxDataSize) ? Long.fromValue(object.maxDataSize) : Long.UZERO,
      maxCalldataSize: isSet(object.maxCalldataSize) ? Long.fromValue(object.maxCalldataSize) : Long.UZERO,
      dataProviderRewardPerByte: Array.isArray(object?.dataProviderRewardPerByte)
        ? object.dataProviderRewardPerByte.map((e: any) => Coin.fromJSON(e))
        : [],
      dataProviderRewardThreshold: isSet(object.dataProviderRewardThreshold)
        ? RewardThreshold.fromJSON(object.dataProviderRewardThreshold)
        : undefined,
      rewardDecreasingFraction: isSet(object.rewardDecreasingFraction)
        ? bytesFromBase64(object.rewardDecreasingFraction)
        : new Uint8Array(),
      dataRequesterFeeDenoms: Array.isArray(object?.dataRequesterFeeDenoms)
        ? object.dataRequesterFeeDenoms.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxRawRequestCount !== undefined &&
      (obj.maxRawRequestCount = (message.maxRawRequestCount || Long.UZERO).toString());
    message.maxAskCount !== undefined && (obj.maxAskCount = (message.maxAskCount || Long.UZERO).toString());
    message.expirationBlockCount !== undefined &&
      (obj.expirationBlockCount = (message.expirationBlockCount || Long.UZERO).toString());
    message.baseOwasmGas !== undefined && (obj.baseOwasmGas = (message.baseOwasmGas || Long.UZERO).toString());
    message.perValidatorRequestGas !== undefined &&
      (obj.perValidatorRequestGas = (message.perValidatorRequestGas || Long.UZERO).toString());
    message.samplingTryCount !== undefined &&
      (obj.samplingTryCount = (message.samplingTryCount || Long.UZERO).toString());
    message.oracleRewardPercentage !== undefined &&
      (obj.oracleRewardPercentage = (message.oracleRewardPercentage || Long.UZERO).toString());
    message.inactivePenaltyDuration !== undefined &&
      (obj.inactivePenaltyDuration = (message.inactivePenaltyDuration || Long.UZERO).toString());
    message.maxDataSize !== undefined && (obj.maxDataSize = (message.maxDataSize || Long.UZERO).toString());
    message.maxCalldataSize !== undefined && (obj.maxCalldataSize = (message.maxCalldataSize || Long.UZERO).toString());
    if (message.dataProviderRewardPerByte) {
      obj.dataProviderRewardPerByte = message.dataProviderRewardPerByte.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.dataProviderRewardPerByte = [];
    }
    message.dataProviderRewardThreshold !== undefined &&
      (obj.dataProviderRewardThreshold = message.dataProviderRewardThreshold
        ? RewardThreshold.toJSON(message.dataProviderRewardThreshold)
        : undefined);
    message.rewardDecreasingFraction !== undefined &&
      (obj.rewardDecreasingFraction = base64FromBytes(
        message.rewardDecreasingFraction !== undefined ? message.rewardDecreasingFraction : new Uint8Array(),
      ));
    if (message.dataRequesterFeeDenoms) {
      obj.dataRequesterFeeDenoms = message.dataRequesterFeeDenoms.map((e) => e);
    } else {
      obj.dataRequesterFeeDenoms = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxRawRequestCount = (object.maxRawRequestCount !== undefined && object.maxRawRequestCount !== null)
      ? Long.fromValue(object.maxRawRequestCount)
      : Long.UZERO;
    message.maxAskCount = (object.maxAskCount !== undefined && object.maxAskCount !== null)
      ? Long.fromValue(object.maxAskCount)
      : Long.UZERO;
    message.expirationBlockCount = (object.expirationBlockCount !== undefined && object.expirationBlockCount !== null)
      ? Long.fromValue(object.expirationBlockCount)
      : Long.UZERO;
    message.baseOwasmGas = (object.baseOwasmGas !== undefined && object.baseOwasmGas !== null)
      ? Long.fromValue(object.baseOwasmGas)
      : Long.UZERO;
    message.perValidatorRequestGas =
      (object.perValidatorRequestGas !== undefined && object.perValidatorRequestGas !== null)
        ? Long.fromValue(object.perValidatorRequestGas)
        : Long.UZERO;
    message.samplingTryCount = (object.samplingTryCount !== undefined && object.samplingTryCount !== null)
      ? Long.fromValue(object.samplingTryCount)
      : Long.UZERO;
    message.oracleRewardPercentage =
      (object.oracleRewardPercentage !== undefined && object.oracleRewardPercentage !== null)
        ? Long.fromValue(object.oracleRewardPercentage)
        : Long.UZERO;
    message.inactivePenaltyDuration =
      (object.inactivePenaltyDuration !== undefined && object.inactivePenaltyDuration !== null)
        ? Long.fromValue(object.inactivePenaltyDuration)
        : Long.UZERO;
    message.maxDataSize = (object.maxDataSize !== undefined && object.maxDataSize !== null)
      ? Long.fromValue(object.maxDataSize)
      : Long.UZERO;
    message.maxCalldataSize = (object.maxCalldataSize !== undefined && object.maxCalldataSize !== null)
      ? Long.fromValue(object.maxCalldataSize)
      : Long.UZERO;
    message.dataProviderRewardPerByte = object.dataProviderRewardPerByte?.map((e) => Coin.fromPartial(e)) || [];
    message.dataProviderRewardThreshold =
      (object.dataProviderRewardThreshold !== undefined && object.dataProviderRewardThreshold !== null)
        ? RewardThreshold.fromPartial(object.dataProviderRewardThreshold)
        : undefined;
    message.rewardDecreasingFraction = object.rewardDecreasingFraction ?? new Uint8Array();
    message.dataRequesterFeeDenoms = object.dataRequesterFeeDenoms?.map((e) => e) || [];
    return message;
  },
};

function createBaseRewardThreshold(): RewardThreshold {
  return { amount: [], blocks: Long.UZERO };
}

export const RewardThreshold = {
  encode(message: RewardThreshold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.blocks.isZero()) {
      writer.uint32(16).uint64(message.blocks);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardThreshold {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardThreshold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blocks = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RewardThreshold {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      blocks: isSet(object.blocks) ? Long.fromValue(object.blocks) : Long.UZERO,
    };
  },

  toJSON(message: RewardThreshold): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.blocks !== undefined && (obj.blocks = (message.blocks || Long.UZERO).toString());
    return obj;
  },

  create<I extends Exact<DeepPartial<RewardThreshold>, I>>(base?: I): RewardThreshold {
    return RewardThreshold.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<RewardThreshold>, I>>(object: I): RewardThreshold {
    const message = createBaseRewardThreshold();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.blocks = (object.blocks !== undefined && object.blocks !== null)
      ? Long.fromValue(object.blocks)
      : Long.UZERO;
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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
