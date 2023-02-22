/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DataSource, OraclePool, OracleScript } from "./oracle";
import { Params } from "./params";

export const protobufPackage = "oracle.v1";

/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  params?: Params;
  dataSources: DataSource[];
  oracleScripts: OracleScript[];
  oraclePool?: OraclePool;
  moduleCoinsAccount: string;
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, dataSources: [], oracleScripts: [], oraclePool: undefined, moduleCoinsAccount: "" };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.dataSources) {
      DataSource.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.oracleScripts) {
      OracleScript.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.oraclePool !== undefined) {
      OraclePool.encode(message.oraclePool, writer.uint32(34).fork()).ldelim();
    }
    if (message.moduleCoinsAccount !== "") {
      writer.uint32(42).string(message.moduleCoinsAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
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
          message.dataSources.push(DataSource.decode(reader, reader.uint32()));
          break;
        case 3:
          message.oracleScripts.push(OracleScript.decode(reader, reader.uint32()));
          break;
        case 4:
          message.oraclePool = OraclePool.decode(reader, reader.uint32());
          break;
        case 5:
          message.moduleCoinsAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      dataSources: Array.isArray(object?.dataSources) ? object.dataSources.map((e: any) => DataSource.fromJSON(e)) : [],
      oracleScripts: Array.isArray(object?.oracleScripts)
        ? object.oracleScripts.map((e: any) => OracleScript.fromJSON(e))
        : [],
      oraclePool: isSet(object.oraclePool) ? OraclePool.fromJSON(object.oraclePool) : undefined,
      moduleCoinsAccount: isSet(object.moduleCoinsAccount) ? String(object.moduleCoinsAccount) : "",
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.dataSources) {
      obj.dataSources = message.dataSources.map((e) => e ? DataSource.toJSON(e) : undefined);
    } else {
      obj.dataSources = [];
    }
    if (message.oracleScripts) {
      obj.oracleScripts = message.oracleScripts.map((e) => e ? OracleScript.toJSON(e) : undefined);
    } else {
      obj.oracleScripts = [];
    }
    message.oraclePool !== undefined &&
      (obj.oraclePool = message.oraclePool ? OraclePool.toJSON(message.oraclePool) : undefined);
    message.moduleCoinsAccount !== undefined && (obj.moduleCoinsAccount = message.moduleCoinsAccount);
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.dataSources = object.dataSources?.map((e) => DataSource.fromPartial(e)) || [];
    message.oracleScripts = object.oracleScripts?.map((e) => OracleScript.fromPartial(e)) || [];
    message.oraclePool = (object.oraclePool !== undefined && object.oraclePool !== null)
      ? OraclePool.fromPartial(object.oraclePool)
      : undefined;
    message.moduleCoinsAccount = object.moduleCoinsAccount ?? "";
    return message;
  },
};

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
