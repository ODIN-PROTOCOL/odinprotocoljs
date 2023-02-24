/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DataSource, OraclePool, OracleScript } from "./oracle";
import { Params } from "./params";
export const protobufPackage = "oracle.v1";
function createBaseGenesisState() {
    return { params: undefined, dataSources: [], oracleScripts: [], oraclePool: undefined, moduleCoinsAccount: "" };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.dataSources) {
            DataSource.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.oracleScripts) {
            OracleScript.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.oraclePool !== undefined) {
            OraclePool.encode(message.oraclePool, writer.uint32(34).fork()).ldelim();
        }
        if (message.moduleCoinsAccount !== "") {
            writer.uint32(42).string(message.moduleCoinsAccount);
        }
        return writer;
    },
    decode(input, length) {
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
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            dataSources: Array.isArray(object === null || object === void 0 ? void 0 : object.dataSources) ? object.dataSources.map((e) => DataSource.fromJSON(e)) : [],
            oracleScripts: Array.isArray(object === null || object === void 0 ? void 0 : object.oracleScripts)
                ? object.oracleScripts.map((e) => OracleScript.fromJSON(e))
                : [],
            oraclePool: isSet(object.oraclePool) ? OraclePool.fromJSON(object.oraclePool) : undefined,
            moduleCoinsAccount: isSet(object.moduleCoinsAccount) ? String(object.moduleCoinsAccount) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.dataSources) {
            obj.dataSources = message.dataSources.map((e) => e ? DataSource.toJSON(e) : undefined);
        }
        else {
            obj.dataSources = [];
        }
        if (message.oracleScripts) {
            obj.oracleScripts = message.oracleScripts.map((e) => e ? OracleScript.toJSON(e) : undefined);
        }
        else {
            obj.oracleScripts = [];
        }
        message.oraclePool !== undefined &&
            (obj.oraclePool = message.oraclePool ? OraclePool.toJSON(message.oraclePool) : undefined);
        message.moduleCoinsAccount !== undefined && (obj.moduleCoinsAccount = message.moduleCoinsAccount);
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.dataSources = ((_a = object.dataSources) === null || _a === void 0 ? void 0 : _a.map((e) => DataSource.fromPartial(e))) || [];
        message.oracleScripts = ((_b = object.oracleScripts) === null || _b === void 0 ? void 0 : _b.map((e) => OracleScript.fromPartial(e))) || [];
        message.oraclePool = (object.oraclePool !== undefined && object.oraclePool !== null)
            ? OraclePool.fromPartial(object.oraclePool)
            : undefined;
        message.moduleCoinsAccount = (_c = object.moduleCoinsAccount) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map