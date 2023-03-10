/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { IdentifiedChannel, PacketState } from "./channel";
export const protobufPackage = "ibc.core.channel.v1";
function createBaseGenesisState() {
    return {
        channels: [],
        acknowledgements: [],
        commitments: [],
        receipts: [],
        sendSequences: [],
        recvSequences: [],
        ackSequences: [],
        nextChannelSequence: Long.UZERO,
    };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.acknowledgements) {
            PacketState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commitments) {
            PacketState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.receipts) {
            PacketState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.sendSequences) {
            PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.recvSequences) {
            PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.ackSequences) {
            PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (!message.nextChannelSequence.isZero()) {
            writer.uint32(64).uint64(message.nextChannelSequence);
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
                    message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.commitments.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.receipts.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.recvSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.ackSequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.nextChannelSequence = reader.uint64();
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
            channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            acknowledgements: Array.isArray(object === null || object === void 0 ? void 0 : object.acknowledgements)
                ? object.acknowledgements.map((e) => PacketState.fromJSON(e))
                : [],
            commitments: Array.isArray(object === null || object === void 0 ? void 0 : object.commitments)
                ? object.commitments.map((e) => PacketState.fromJSON(e))
                : [],
            receipts: Array.isArray(object === null || object === void 0 ? void 0 : object.receipts) ? object.receipts.map((e) => PacketState.fromJSON(e)) : [],
            sendSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sendSequences)
                ? object.sendSequences.map((e) => PacketSequence.fromJSON(e))
                : [],
            recvSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.recvSequences)
                ? object.recvSequences.map((e) => PacketSequence.fromJSON(e))
                : [],
            ackSequences: Array.isArray(object === null || object === void 0 ? void 0 : object.ackSequences)
                ? object.ackSequences.map((e) => PacketSequence.fromJSON(e))
                : [],
            nextChannelSequence: isSet(object.nextChannelSequence) ? Long.fromValue(object.nextChannelSequence) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map((e) => e ? IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map((e) => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map((e) => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map((e) => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.sendSequences) {
            obj.sendSequences = message.sendSequences.map((e) => e ? PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.sendSequences = [];
        }
        if (message.recvSequences) {
            obj.recvSequences = message.recvSequences.map((e) => e ? PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.recvSequences = [];
        }
        if (message.ackSequences) {
            obj.ackSequences = message.ackSequences.map((e) => e ? PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.ackSequences = [];
        }
        message.nextChannelSequence !== undefined &&
            (obj.nextChannelSequence = (message.nextChannelSequence || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseGenesisState();
        message.channels = ((_a = object.channels) === null || _a === void 0 ? void 0 : _a.map((e) => IdentifiedChannel.fromPartial(e))) || [];
        message.acknowledgements = ((_b = object.acknowledgements) === null || _b === void 0 ? void 0 : _b.map((e) => PacketState.fromPartial(e))) || [];
        message.commitments = ((_c = object.commitments) === null || _c === void 0 ? void 0 : _c.map((e) => PacketState.fromPartial(e))) || [];
        message.receipts = ((_d = object.receipts) === null || _d === void 0 ? void 0 : _d.map((e) => PacketState.fromPartial(e))) || [];
        message.sendSequences = ((_e = object.sendSequences) === null || _e === void 0 ? void 0 : _e.map((e) => PacketSequence.fromPartial(e))) || [];
        message.recvSequences = ((_f = object.recvSequences) === null || _f === void 0 ? void 0 : _f.map((e) => PacketSequence.fromPartial(e))) || [];
        message.ackSequences = ((_g = object.ackSequences) === null || _g === void 0 ? void 0 : _g.map((e) => PacketSequence.fromPartial(e))) || [];
        message.nextChannelSequence = (object.nextChannelSequence !== undefined && object.nextChannelSequence !== null)
            ? Long.fromValue(object.nextChannelSequence)
            : Long.UZERO;
        return message;
    },
};
function createBasePacketSequence() {
    return { portId: "", channelId: "", sequence: Long.UZERO };
}
export const PacketSequence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.portId !== "") {
            writer.uint32(10).string(message.portId);
        }
        if (message.channelId !== "") {
            writer.uint32(18).string(message.channelId);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.portId = reader.string();
                    break;
                case 2:
                    message.channelId = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
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
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
        };
    },
    toJSON(message) {
        const obj = {};
        message.portId !== undefined && (obj.portId = message.portId);
        message.channelId !== undefined && (obj.channelId = message.channelId);
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        return obj;
    },
    create(base) {
        return PacketSequence.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePacketSequence();
        message.portId = (_a = object.portId) !== null && _a !== void 0 ? _a : "";
        message.channelId = (_b = object.channelId) !== null && _b !== void 0 ? _b : "";
        message.sequence = (object.sequence !== undefined && object.sequence !== null)
            ? Long.fromValue(object.sequence)
            : Long.UZERO;
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