/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { ConnectionPaths, IdentifiedConnection, Params } from "./connection";
export const protobufPackage = "ibc.core.connection.v1";
function createBaseGenesisState() {
    return { connections: [], clientConnectionPaths: [], nextConnectionSequence: Long.UZERO, params: undefined };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.connections) {
            IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clientConnectionPaths) {
            ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (!message.nextConnectionSequence.isZero()) {
            writer.uint32(24).uint64(message.nextConnectionSequence);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clientConnectionPaths.push(ConnectionPaths.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.nextConnectionSequence = reader.uint64();
                    break;
                case 4:
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
        return {
            connections: Array.isArray(object === null || object === void 0 ? void 0 : object.connections)
                ? object.connections.map((e) => IdentifiedConnection.fromJSON(e))
                : [],
            clientConnectionPaths: Array.isArray(object === null || object === void 0 ? void 0 : object.clientConnectionPaths)
                ? object.clientConnectionPaths.map((e) => ConnectionPaths.fromJSON(e))
                : [],
            nextConnectionSequence: isSet(object.nextConnectionSequence)
                ? Long.fromValue(object.nextConnectionSequence)
                : Long.UZERO,
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map((e) => e ? IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.clientConnectionPaths) {
            obj.clientConnectionPaths = message.clientConnectionPaths.map((e) => e ? ConnectionPaths.toJSON(e) : undefined);
        }
        else {
            obj.clientConnectionPaths = [];
        }
        message.nextConnectionSequence !== undefined &&
            (obj.nextConnectionSequence = (message.nextConnectionSequence || Long.UZERO).toString());
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.connections = ((_a = object.connections) === null || _a === void 0 ? void 0 : _a.map((e) => IdentifiedConnection.fromPartial(e))) || [];
        message.clientConnectionPaths = ((_b = object.clientConnectionPaths) === null || _b === void 0 ? void 0 : _b.map((e) => ConnectionPaths.fromPartial(e))) || [];
        message.nextConnectionSequence =
            (object.nextConnectionSequence !== undefined && object.nextConnectionSequence !== null)
                ? Long.fromValue(object.nextConnectionSequence)
                : Long.UZERO;
        message.params = (object.params !== undefined && object.params !== null)
            ? Params.fromPartial(object.params)
            : undefined;
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