/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.base.reflection.v2alpha1";
function createBaseAppDescriptor() {
    return {
        authn: undefined,
        chain: undefined,
        codec: undefined,
        configuration: undefined,
        queryServices: undefined,
        tx: undefined,
    };
}
export const AppDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authn !== undefined) {
            AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain !== undefined) {
            ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
        }
        if (message.codec !== undefined) {
            CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
        }
        if (message.configuration !== undefined) {
            ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
        }
        if (message.queryServices !== undefined) {
            QueryServicesDescriptor.encode(message.queryServices, writer.uint32(42).fork()).ldelim();
        }
        if (message.tx !== undefined) {
            TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = AuthnDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain = ChainDescriptor.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codec = CodecDescriptor.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.configuration = ConfigurationDescriptor.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.queryServices = QueryServicesDescriptor.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.tx = TxDescriptor.decode(reader, reader.uint32());
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
            authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined,
            chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined,
            codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined,
            configuration: isSet(object.configuration) ? ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
            queryServices: isSet(object.queryServices) ? QueryServicesDescriptor.fromJSON(object.queryServices) : undefined,
            tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
        message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
        message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
        message.configuration !== undefined &&
            (obj.configuration = message.configuration ? ConfigurationDescriptor.toJSON(message.configuration) : undefined);
        message.queryServices !== undefined &&
            (obj.queryServices = message.queryServices ? QueryServicesDescriptor.toJSON(message.queryServices) : undefined);
        message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
        return obj;
    },
    create(base) {
        return AppDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseAppDescriptor();
        message.authn = (object.authn !== undefined && object.authn !== null)
            ? AuthnDescriptor.fromPartial(object.authn)
            : undefined;
        message.chain = (object.chain !== undefined && object.chain !== null)
            ? ChainDescriptor.fromPartial(object.chain)
            : undefined;
        message.codec = (object.codec !== undefined && object.codec !== null)
            ? CodecDescriptor.fromPartial(object.codec)
            : undefined;
        message.configuration = (object.configuration !== undefined && object.configuration !== null)
            ? ConfigurationDescriptor.fromPartial(object.configuration)
            : undefined;
        message.queryServices = (object.queryServices !== undefined && object.queryServices !== null)
            ? QueryServicesDescriptor.fromPartial(object.queryServices)
            : undefined;
        message.tx = (object.tx !== undefined && object.tx !== null) ? TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
};
function createBaseTxDescriptor() {
    return { fullname: "", msgs: [] };
}
export const TxDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.msgs) {
            MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            msgs: Array.isArray(object === null || object === void 0 ? void 0 : object.msgs) ? object.msgs.map((e) => MsgDescriptor.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.msgs) {
            obj.msgs = message.msgs.map((e) => e ? MsgDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    create(base) {
        return TxDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTxDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.msgs = ((_b = object.msgs) === null || _b === void 0 ? void 0 : _b.map((e) => MsgDescriptor.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAuthnDescriptor() {
    return { signModes: [] };
}
export const AuthnDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.signModes) {
            SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthnDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signModes.push(SigningModeDescriptor.decode(reader, reader.uint32()));
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
            signModes: Array.isArray(object === null || object === void 0 ? void 0 : object.signModes)
                ? object.signModes.map((e) => SigningModeDescriptor.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signModes) {
            obj.signModes = message.signModes.map((e) => e ? SigningModeDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.signModes = [];
        }
        return obj;
    },
    create(base) {
        return AuthnDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAuthnDescriptor();
        message.signModes = ((_a = object.signModes) === null || _a === void 0 ? void 0 : _a.map((e) => SigningModeDescriptor.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSigningModeDescriptor() {
    return { name: "", number: 0, authnInfoProviderMethodFullname: "" };
}
export const SigningModeDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.authnInfoProviderMethodFullname !== "") {
            writer.uint32(26).string(message.authnInfoProviderMethodFullname);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningModeDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.authnInfoProviderMethodFullname = reader.string();
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
            number: isSet(object.number) ? Number(object.number) : 0,
            authnInfoProviderMethodFullname: isSet(object.authnInfoProviderMethodFullname)
                ? String(object.authnInfoProviderMethodFullname)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.authnInfoProviderMethodFullname !== undefined &&
            (obj.authnInfoProviderMethodFullname = message.authnInfoProviderMethodFullname);
        return obj;
    },
    create(base) {
        return SigningModeDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSigningModeDescriptor();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.number = (_b = object.number) !== null && _b !== void 0 ? _b : 0;
        message.authnInfoProviderMethodFullname = (_c = object.authnInfoProviderMethodFullname) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseChainDescriptor() {
    return { id: "" };
}
export const ChainDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return ChainDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseChainDescriptor();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCodecDescriptor() {
    return { interfaces: [] };
}
export const CodecDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.interfaces) {
            InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodecDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaces.push(InterfaceDescriptor.decode(reader, reader.uint32()));
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
            interfaces: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaces)
                ? object.interfaces.map((e) => InterfaceDescriptor.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.interfaces) {
            obj.interfaces = message.interfaces.map((e) => e ? InterfaceDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interfaces = [];
        }
        return obj;
    },
    create(base) {
        return CodecDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCodecDescriptor();
        message.interfaces = ((_a = object.interfaces) === null || _a === void 0 ? void 0 : _a.map((e) => InterfaceDescriptor.fromPartial(e))) || [];
        return message;
    },
};
function createBaseInterfaceDescriptor() {
    return { fullname: "", interfaceAcceptingMessages: [], interfaceImplementers: [] };
}
export const InterfaceDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.interfaceAcceptingMessages) {
            InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.interfaceImplementers) {
            InterfaceImplementerDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.interfaceAcceptingMessages.push(InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.interfaceImplementers.push(InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            interfaceAcceptingMessages: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaceAcceptingMessages)
                ? object.interfaceAcceptingMessages.map((e) => InterfaceAcceptingMessageDescriptor.fromJSON(e))
                : [],
            interfaceImplementers: Array.isArray(object === null || object === void 0 ? void 0 : object.interfaceImplementers)
                ? object.interfaceImplementers.map((e) => InterfaceImplementerDescriptor.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.interfaceAcceptingMessages) {
            obj.interfaceAcceptingMessages = message.interfaceAcceptingMessages.map((e) => e ? InterfaceAcceptingMessageDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interfaceAcceptingMessages = [];
        }
        if (message.interfaceImplementers) {
            obj.interfaceImplementers = message.interfaceImplementers.map((e) => e ? InterfaceImplementerDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interfaceImplementers = [];
        }
        return obj;
    },
    create(base) {
        return InterfaceDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseInterfaceDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.interfaceAcceptingMessages =
            ((_b = object.interfaceAcceptingMessages) === null || _b === void 0 ? void 0 : _b.map((e) => InterfaceAcceptingMessageDescriptor.fromPartial(e))) || [];
        message.interfaceImplementers =
            ((_c = object.interfaceImplementers) === null || _c === void 0 ? void 0 : _c.map((e) => InterfaceImplementerDescriptor.fromPartial(e))) || [];
        return message;
    },
};
function createBaseInterfaceImplementerDescriptor() {
    return { fullname: "", typeUrl: "" };
}
export const InterfaceImplementerDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.typeUrl !== "") {
            writer.uint32(18).string(message.typeUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceImplementerDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.typeUrl = reader.string();
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            typeUrl: isSet(object.typeUrl) ? String(object.typeUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
        return obj;
    },
    create(base) {
        return InterfaceImplementerDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseInterfaceImplementerDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.typeUrl = (_b = object.typeUrl) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseInterfaceAcceptingMessageDescriptor() {
    return { fullname: "", fieldDescriptorNames: [] };
}
export const InterfaceAcceptingMessageDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.fieldDescriptorNames) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceAcceptingMessageDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.fieldDescriptorNames.push(reader.string());
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            fieldDescriptorNames: Array.isArray(object === null || object === void 0 ? void 0 : object.fieldDescriptorNames)
                ? object.fieldDescriptorNames.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.fieldDescriptorNames) {
            obj.fieldDescriptorNames = message.fieldDescriptorNames.map((e) => e);
        }
        else {
            obj.fieldDescriptorNames = [];
        }
        return obj;
    },
    create(base) {
        return InterfaceAcceptingMessageDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseInterfaceAcceptingMessageDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.fieldDescriptorNames = ((_b = object.fieldDescriptorNames) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseConfigurationDescriptor() {
    return { bech32AccountAddressPrefix: "" };
}
export const ConfigurationDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bech32AccountAddressPrefix !== "") {
            writer.uint32(10).string(message.bech32AccountAddressPrefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigurationDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bech32AccountAddressPrefix = reader.string();
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
            bech32AccountAddressPrefix: isSet(object.bech32AccountAddressPrefix)
                ? String(object.bech32AccountAddressPrefix)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.bech32AccountAddressPrefix !== undefined &&
            (obj.bech32AccountAddressPrefix = message.bech32AccountAddressPrefix);
        return obj;
    },
    create(base) {
        return ConfigurationDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConfigurationDescriptor();
        message.bech32AccountAddressPrefix = (_a = object.bech32AccountAddressPrefix) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgDescriptor() {
    return { msgTypeUrl: "" };
}
export const MsgDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msgTypeUrl !== "") {
            writer.uint32(10).string(message.msgTypeUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgTypeUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
        return obj;
    },
    create(base) {
        return MsgDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgDescriptor();
        message.msgTypeUrl = (_a = object.msgTypeUrl) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetAuthnDescriptorRequest() {
    return {};
}
export const GetAuthnDescriptorRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthnDescriptorRequest();
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
        return GetAuthnDescriptorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetAuthnDescriptorRequest();
        return message;
    },
};
function createBaseGetAuthnDescriptorResponse() {
    return { authn: undefined };
}
export const GetAuthnDescriptorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authn !== undefined) {
            AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthnDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = AuthnDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
        return obj;
    },
    create(base) {
        return GetAuthnDescriptorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetAuthnDescriptorResponse();
        message.authn = (object.authn !== undefined && object.authn !== null)
            ? AuthnDescriptor.fromPartial(object.authn)
            : undefined;
        return message;
    },
};
function createBaseGetChainDescriptorRequest() {
    return {};
}
export const GetChainDescriptorRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetChainDescriptorRequest();
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
        return GetChainDescriptorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetChainDescriptorRequest();
        return message;
    },
};
function createBaseGetChainDescriptorResponse() {
    return { chain: undefined };
}
export const GetChainDescriptorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== undefined) {
            ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetChainDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = ChainDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
        return obj;
    },
    create(base) {
        return GetChainDescriptorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetChainDescriptorResponse();
        message.chain = (object.chain !== undefined && object.chain !== null)
            ? ChainDescriptor.fromPartial(object.chain)
            : undefined;
        return message;
    },
};
function createBaseGetCodecDescriptorRequest() {
    return {};
}
export const GetCodecDescriptorRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCodecDescriptorRequest();
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
        return GetCodecDescriptorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetCodecDescriptorRequest();
        return message;
    },
};
function createBaseGetCodecDescriptorResponse() {
    return { codec: undefined };
}
export const GetCodecDescriptorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.codec !== undefined) {
            CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCodecDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codec = CodecDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
        return obj;
    },
    create(base) {
        return GetCodecDescriptorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetCodecDescriptorResponse();
        message.codec = (object.codec !== undefined && object.codec !== null)
            ? CodecDescriptor.fromPartial(object.codec)
            : undefined;
        return message;
    },
};
function createBaseGetConfigurationDescriptorRequest() {
    return {};
}
export const GetConfigurationDescriptorRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetConfigurationDescriptorRequest();
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
        return GetConfigurationDescriptorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetConfigurationDescriptorRequest();
        return message;
    },
};
function createBaseGetConfigurationDescriptorResponse() {
    return { config: undefined };
}
export const GetConfigurationDescriptorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetConfigurationDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = ConfigurationDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { config: isSet(object.config) ? ConfigurationDescriptor.fromJSON(object.config) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined &&
            (obj.config = message.config ? ConfigurationDescriptor.toJSON(message.config) : undefined);
        return obj;
    },
    create(base) {
        return GetConfigurationDescriptorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetConfigurationDescriptorResponse();
        message.config = (object.config !== undefined && object.config !== null)
            ? ConfigurationDescriptor.fromPartial(object.config)
            : undefined;
        return message;
    },
};
function createBaseGetQueryServicesDescriptorRequest() {
    return {};
}
export const GetQueryServicesDescriptorRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetQueryServicesDescriptorRequest();
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
        return GetQueryServicesDescriptorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetQueryServicesDescriptorRequest();
        return message;
    },
};
function createBaseGetQueryServicesDescriptorResponse() {
    return { queries: undefined };
}
export const GetQueryServicesDescriptorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.queries !== undefined) {
            QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetQueryServicesDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queries = QueryServicesDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { queries: isSet(object.queries) ? QueryServicesDescriptor.fromJSON(object.queries) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.queries !== undefined &&
            (obj.queries = message.queries ? QueryServicesDescriptor.toJSON(message.queries) : undefined);
        return obj;
    },
    create(base) {
        return GetQueryServicesDescriptorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetQueryServicesDescriptorResponse();
        message.queries = (object.queries !== undefined && object.queries !== null)
            ? QueryServicesDescriptor.fromPartial(object.queries)
            : undefined;
        return message;
    },
};
function createBaseGetTxDescriptorRequest() {
    return {};
}
export const GetTxDescriptorRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxDescriptorRequest();
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
        return GetTxDescriptorRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseGetTxDescriptorRequest();
        return message;
    },
};
function createBaseGetTxDescriptorResponse() {
    return { tx: undefined };
}
export const GetTxDescriptorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = TxDescriptor.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
        return obj;
    },
    create(base) {
        return GetTxDescriptorResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetTxDescriptorResponse();
        message.tx = (object.tx !== undefined && object.tx !== null) ? TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
};
function createBaseQueryServicesDescriptor() {
    return { queryServices: [] };
}
export const QueryServicesDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.queryServices) {
            QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryServicesDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queryServices.push(QueryServiceDescriptor.decode(reader, reader.uint32()));
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
            queryServices: Array.isArray(object === null || object === void 0 ? void 0 : object.queryServices)
                ? object.queryServices.map((e) => QueryServiceDescriptor.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.queryServices) {
            obj.queryServices = message.queryServices.map((e) => e ? QueryServiceDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.queryServices = [];
        }
        return obj;
    },
    create(base) {
        return QueryServicesDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryServicesDescriptor();
        message.queryServices = ((_a = object.queryServices) === null || _a === void 0 ? void 0 : _a.map((e) => QueryServiceDescriptor.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryServiceDescriptor() {
    return { fullname: "", isModule: false, methods: [] };
}
export const QueryServiceDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.isModule === true) {
            writer.uint32(16).bool(message.isModule);
        }
        for (const v of message.methods) {
            QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryServiceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.isModule = reader.bool();
                    break;
                case 3:
                    message.methods.push(QueryMethodDescriptor.decode(reader, reader.uint32()));
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            isModule: isSet(object.isModule) ? Boolean(object.isModule) : false,
            methods: Array.isArray(object === null || object === void 0 ? void 0 : object.methods) ? object.methods.map((e) => QueryMethodDescriptor.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        message.isModule !== undefined && (obj.isModule = message.isModule);
        if (message.methods) {
            obj.methods = message.methods.map((e) => e ? QueryMethodDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
    create(base) {
        return QueryServiceDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryServiceDescriptor();
        message.fullname = (_a = object.fullname) !== null && _a !== void 0 ? _a : "";
        message.isModule = (_b = object.isModule) !== null && _b !== void 0 ? _b : false;
        message.methods = ((_c = object.methods) === null || _c === void 0 ? void 0 : _c.map((e) => QueryMethodDescriptor.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryMethodDescriptor() {
    return { name: "", fullQueryPath: "" };
}
export const QueryMethodDescriptor = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.fullQueryPath !== "") {
            writer.uint32(18).string(message.fullQueryPath);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMethodDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.fullQueryPath = reader.string();
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
            fullQueryPath: isSet(object.fullQueryPath) ? String(object.fullQueryPath) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.fullQueryPath !== undefined && (obj.fullQueryPath = message.fullQueryPath);
        return obj;
    },
    create(base) {
        return QueryMethodDescriptor.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryMethodDescriptor();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.fullQueryPath = (_b = object.fullQueryPath) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
export class ReflectionServiceClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cosmos.base.reflection.v2alpha1.ReflectionService";
        this.rpc = rpc;
        this.GetAuthnDescriptor = this.GetAuthnDescriptor.bind(this);
        this.GetChainDescriptor = this.GetChainDescriptor.bind(this);
        this.GetCodecDescriptor = this.GetCodecDescriptor.bind(this);
        this.GetConfigurationDescriptor = this.GetConfigurationDescriptor.bind(this);
        this.GetQueryServicesDescriptor = this.GetQueryServicesDescriptor.bind(this);
        this.GetTxDescriptor = this.GetTxDescriptor.bind(this);
    }
    GetAuthnDescriptor(request) {
        const data = GetAuthnDescriptorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetAuthnDescriptor", data);
        return promise.then((data) => GetAuthnDescriptorResponse.decode(new _m0.Reader(data)));
    }
    GetChainDescriptor(request) {
        const data = GetChainDescriptorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetChainDescriptor", data);
        return promise.then((data) => GetChainDescriptorResponse.decode(new _m0.Reader(data)));
    }
    GetCodecDescriptor(request) {
        const data = GetCodecDescriptorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetCodecDescriptor", data);
        return promise.then((data) => GetCodecDescriptorResponse.decode(new _m0.Reader(data)));
    }
    GetConfigurationDescriptor(request) {
        const data = GetConfigurationDescriptorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetConfigurationDescriptor", data);
        return promise.then((data) => GetConfigurationDescriptorResponse.decode(new _m0.Reader(data)));
    }
    GetQueryServicesDescriptor(request) {
        const data = GetQueryServicesDescriptorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetQueryServicesDescriptor", data);
        return promise.then((data) => GetQueryServicesDescriptorResponse.decode(new _m0.Reader(data)));
    }
    GetTxDescriptor(request) {
        const data = GetTxDescriptorRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "GetTxDescriptor", data);
        return promise.then((data) => GetTxDescriptorResponse.decode(new _m0.Reader(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=reflection.js.map