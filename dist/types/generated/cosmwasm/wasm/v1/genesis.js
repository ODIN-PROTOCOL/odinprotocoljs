/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { MsgExecuteContract, MsgInstantiateContract, MsgStoreCode } from "./tx";
import { CodeInfo, ContractInfo, Model, Params } from "./types";
export const protobufPackage = "cosmwasm.wasm.v1";
function createBaseGenesisState() {
    return { params: undefined, codes: [], contracts: [], sequences: [], genMsgs: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.codes) {
            Code.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contracts) {
            Contract.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            Sequence.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.genMsgs) {
            GenesisState_GenMsgs.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.codes.push(Code.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.contracts.push(Contract.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequences.push(Sequence.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.genMsgs.push(GenesisState_GenMsgs.decode(reader, reader.uint32()));
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
            codes: Array.isArray(object === null || object === void 0 ? void 0 : object.codes) ? object.codes.map((e) => Code.fromJSON(e)) : [],
            contracts: Array.isArray(object === null || object === void 0 ? void 0 : object.contracts) ? object.contracts.map((e) => Contract.fromJSON(e)) : [],
            sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences) ? object.sequences.map((e) => Sequence.fromJSON(e)) : [],
            genMsgs: Array.isArray(object === null || object === void 0 ? void 0 : object.genMsgs) ? object.genMsgs.map((e) => GenesisState_GenMsgs.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        if (message.codes) {
            obj.codes = message.codes.map((e) => e ? Code.toJSON(e) : undefined);
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map((e) => e ? Contract.toJSON(e) : undefined);
        }
        else {
            obj.contracts = [];
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map((e) => e ? Sequence.toJSON(e) : undefined);
        }
        else {
            obj.sequences = [];
        }
        if (message.genMsgs) {
            obj.genMsgs = message.genMsgs.map((e) => e ? GenesisState_GenMsgs.toJSON(e) : undefined);
        }
        else {
            obj.genMsgs = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
        message.codes = ((_a = object.codes) === null || _a === void 0 ? void 0 : _a.map((e) => Code.fromPartial(e))) || [];
        message.contracts = ((_b = object.contracts) === null || _b === void 0 ? void 0 : _b.map((e) => Contract.fromPartial(e))) || [];
        message.sequences = ((_c = object.sequences) === null || _c === void 0 ? void 0 : _c.map((e) => Sequence.fromPartial(e))) || [];
        message.genMsgs = ((_d = object.genMsgs) === null || _d === void 0 ? void 0 : _d.map((e) => GenesisState_GenMsgs.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGenesisState_GenMsgs() {
    return { storeCode: undefined, instantiateContract: undefined, executeContract: undefined };
}
export const GenesisState_GenMsgs = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.storeCode !== undefined) {
            MsgStoreCode.encode(message.storeCode, writer.uint32(10).fork()).ldelim();
        }
        if (message.instantiateContract !== undefined) {
            MsgInstantiateContract.encode(message.instantiateContract, writer.uint32(18).fork()).ldelim();
        }
        if (message.executeContract !== undefined) {
            MsgExecuteContract.encode(message.executeContract, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState_GenMsgs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storeCode = MsgStoreCode.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.instantiateContract = MsgInstantiateContract.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.executeContract = MsgExecuteContract.decode(reader, reader.uint32());
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
            storeCode: isSet(object.storeCode) ? MsgStoreCode.fromJSON(object.storeCode) : undefined,
            instantiateContract: isSet(object.instantiateContract)
                ? MsgInstantiateContract.fromJSON(object.instantiateContract)
                : undefined,
            executeContract: isSet(object.executeContract) ? MsgExecuteContract.fromJSON(object.executeContract) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.storeCode !== undefined &&
            (obj.storeCode = message.storeCode ? MsgStoreCode.toJSON(message.storeCode) : undefined);
        message.instantiateContract !== undefined && (obj.instantiateContract = message.instantiateContract
            ? MsgInstantiateContract.toJSON(message.instantiateContract)
            : undefined);
        message.executeContract !== undefined &&
            (obj.executeContract = message.executeContract ? MsgExecuteContract.toJSON(message.executeContract) : undefined);
        return obj;
    },
    create(base) {
        return GenesisState_GenMsgs.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState_GenMsgs();
        message.storeCode = (object.storeCode !== undefined && object.storeCode !== null)
            ? MsgStoreCode.fromPartial(object.storeCode)
            : undefined;
        message.instantiateContract = (object.instantiateContract !== undefined && object.instantiateContract !== null)
            ? MsgInstantiateContract.fromPartial(object.instantiateContract)
            : undefined;
        message.executeContract = (object.executeContract !== undefined && object.executeContract !== null)
            ? MsgExecuteContract.fromPartial(object.executeContract)
            : undefined;
        return message;
    },
};
function createBaseCode() {
    return { codeId: Long.UZERO, codeInfo: undefined, codeBytes: new Uint8Array(), pinned: false };
}
export const Code = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.codeId.isZero()) {
            writer.uint32(8).uint64(message.codeId);
        }
        if (message.codeInfo !== undefined) {
            CodeInfo.encode(message.codeInfo, writer.uint32(18).fork()).ldelim();
        }
        if (message.codeBytes.length !== 0) {
            writer.uint32(26).bytes(message.codeBytes);
        }
        if (message.pinned === true) {
            writer.uint32(32).bool(message.pinned);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeId = reader.uint64();
                    break;
                case 2:
                    message.codeInfo = CodeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codeBytes = reader.bytes();
                    break;
                case 4:
                    message.pinned = reader.bool();
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
            codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
            codeInfo: isSet(object.codeInfo) ? CodeInfo.fromJSON(object.codeInfo) : undefined,
            codeBytes: isSet(object.codeBytes) ? bytesFromBase64(object.codeBytes) : new Uint8Array(),
            pinned: isSet(object.pinned) ? Boolean(object.pinned) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
        message.codeInfo !== undefined && (obj.codeInfo = message.codeInfo ? CodeInfo.toJSON(message.codeInfo) : undefined);
        message.codeBytes !== undefined &&
            (obj.codeBytes = base64FromBytes(message.codeBytes !== undefined ? message.codeBytes : new Uint8Array()));
        message.pinned !== undefined && (obj.pinned = message.pinned);
        return obj;
    },
    create(base) {
        return Code.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCode();
        message.codeId = (object.codeId !== undefined && object.codeId !== null)
            ? Long.fromValue(object.codeId)
            : Long.UZERO;
        message.codeInfo = (object.codeInfo !== undefined && object.codeInfo !== null)
            ? CodeInfo.fromPartial(object.codeInfo)
            : undefined;
        message.codeBytes = (_a = object.codeBytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.pinned = (_b = object.pinned) !== null && _b !== void 0 ? _b : false;
        return message;
    },
};
function createBaseContract() {
    return { contractAddress: "", contractInfo: undefined, contractState: [] };
}
export const Contract = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.contractInfo !== undefined) {
            ContractInfo.encode(message.contractInfo, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contractState) {
            Model.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.contractInfo = ContractInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.contractState.push(Model.decode(reader, reader.uint32()));
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
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            contractInfo: isSet(object.contractInfo) ? ContractInfo.fromJSON(object.contractInfo) : undefined,
            contractState: Array.isArray(object === null || object === void 0 ? void 0 : object.contractState)
                ? object.contractState.map((e) => Model.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.contractInfo !== undefined &&
            (obj.contractInfo = message.contractInfo ? ContractInfo.toJSON(message.contractInfo) : undefined);
        if (message.contractState) {
            obj.contractState = message.contractState.map((e) => e ? Model.toJSON(e) : undefined);
        }
        else {
            obj.contractState = [];
        }
        return obj;
    },
    create(base) {
        return Contract.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseContract();
        message.contractAddress = (_a = object.contractAddress) !== null && _a !== void 0 ? _a : "";
        message.contractInfo = (object.contractInfo !== undefined && object.contractInfo !== null)
            ? ContractInfo.fromPartial(object.contractInfo)
            : undefined;
        message.contractState = ((_b = object.contractState) === null || _b === void 0 ? void 0 : _b.map((e) => Model.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSequence() {
    return { idKey: new Uint8Array(), value: Long.UZERO };
}
export const Sequence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.idKey.length !== 0) {
            writer.uint32(10).bytes(message.idKey);
        }
        if (!message.value.isZero()) {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idKey = reader.bytes();
                    break;
                case 2:
                    message.value = reader.uint64();
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
            idKey: isSet(object.idKey) ? bytesFromBase64(object.idKey) : new Uint8Array(),
            value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idKey !== undefined &&
            (obj.idKey = base64FromBytes(message.idKey !== undefined ? message.idKey : new Uint8Array()));
        message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return Sequence.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSequence();
        message.idKey = (_a = object.idKey) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (object.value !== undefined && object.value !== null) ? Long.fromValue(object.value) : Long.UZERO;
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
//# sourceMappingURL=genesis.js.map