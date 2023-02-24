/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CapabilityOwners } from "./capability";
export const protobufPackage = "cosmos.capability.v1beta1";
function createBaseGenesisOwners() {
    return { index: Long.UZERO, indexOwners: undefined };
}
export const GenesisOwners = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.index.isZero()) {
            writer.uint32(8).uint64(message.index);
        }
        if (message.indexOwners !== undefined) {
            CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisOwners();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.indexOwners = CapabilityOwners.decode(reader, reader.uint32());
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
            index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
            indexOwners: isSet(object.indexOwners) ? CapabilityOwners.fromJSON(object.indexOwners) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
        message.indexOwners !== undefined &&
            (obj.indexOwners = message.indexOwners ? CapabilityOwners.toJSON(message.indexOwners) : undefined);
        return obj;
    },
    create(base) {
        return GenesisOwners.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGenesisOwners();
        message.index = (object.index !== undefined && object.index !== null) ? Long.fromValue(object.index) : Long.UZERO;
        message.indexOwners = (object.indexOwners !== undefined && object.indexOwners !== null)
            ? CapabilityOwners.fromPartial(object.indexOwners)
            : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return { index: Long.UZERO, owners: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.index.isZero()) {
            writer.uint32(8).uint64(message.index);
        }
        for (const v of message.owners) {
            GenesisOwners.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.index = reader.uint64();
                    break;
                case 2:
                    message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
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
            index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
            owners: Array.isArray(object === null || object === void 0 ? void 0 : object.owners) ? object.owners.map((e) => GenesisOwners.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
        if (message.owners) {
            obj.owners = message.owners.map((e) => e ? GenesisOwners.toJSON(e) : undefined);
        }
        else {
            obj.owners = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.index = (object.index !== undefined && object.index !== null) ? Long.fromValue(object.index) : Long.UZERO;
        message.owners = ((_a = object.owners) === null || _a === void 0 ? void 0 : _a.map((e) => GenesisOwners.fromPartial(e))) || [];
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