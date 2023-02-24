import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.reflection.v2alpha1";
/** Since: cosmos-sdk 0.43 */
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
    /**
     * AuthnDescriptor provides information on how to authenticate transactions on the application
     * NOTE: experimental and subject to change in future releases.
     */
    authn?: AuthnDescriptor;
    /** chain provides the chain descriptor */
    chain?: ChainDescriptor;
    /** codec provides metadata information regarding codec related types */
    codec?: CodecDescriptor;
    /** configuration provides metadata information regarding the sdk.Config type */
    configuration?: ConfigurationDescriptor;
    /** query_services provides metadata information regarding the available queriable endpoints */
    queryServices?: QueryServicesDescriptor;
    /** tx provides metadata information regarding how to send transactions to the given application */
    tx?: TxDescriptor;
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptor {
    /**
     * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
     * it is not meant to support polymorphism of transaction types, it is supposed to be used by
     * reflection clients to understand if they can handle a specific transaction type in an application.
     */
    fullname: string;
    /** msgs lists the accepted application messages (sdk.Msg) */
    msgs: MsgDescriptor[];
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
    /** sign_modes defines the supported signature algorithm */
    signModes: SigningModeDescriptor[];
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptor {
    /** name defines the unique name of the signing mode */
    name: string;
    /** number is the unique int32 identifier for the sign_mode enum */
    number: number;
    /**
     * authn_info_provider_method_fullname defines the fullname of the method to call to get
     * the metadata required to authenticate using the provided sign_modes
     */
    authnInfoProviderMethodFullname: string;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
    /** id is the chain id */
    id: string;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
    /** interfaces is a list of the registerted interfaces descriptors */
    interfaces: InterfaceDescriptor[];
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptor {
    /** fullname is the name of the interface */
    fullname: string;
    /**
     * interface_accepting_messages contains information regarding the proto messages which contain the interface as
     * google.protobuf.Any field
     */
    interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];
    /** interface_implementers is a list of the descriptors of the interface implementers */
    interfaceImplementers: InterfaceImplementerDescriptor[];
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptor {
    /** fullname is the protobuf queryable name of the interface implementer */
    fullname: string;
    /**
     * type_url defines the type URL used when marshalling the type as any
     * this is required so we can provide type safe google.protobuf.Any marshalling and
     * unmarshalling, making sure that we don't accept just 'any' type
     * in our interface fields
     */
    typeUrl: string;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptor {
    /** fullname is the protobuf fullname of the type containing the interface */
    fullname: string;
    /**
     * field_descriptor_names is a list of the protobuf name (not fullname) of the field
     * which contains the interface as google.protobuf.Any (the interface is the same, but
     * it can be in multiple fields of the same proto message)
     */
    fieldDescriptorNames: string[];
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
    /** bech32_account_address_prefix is the account address prefix */
    bech32AccountAddressPrefix: string;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
    /** msg_type_url contains the TypeURL of a sdk.Msg. */
    msgTypeUrl: string;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {
}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
    /** authn describes how to authenticate to the application when sending transactions */
    authn?: AuthnDescriptor;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {
}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
    /** chain describes application chain information */
    chain?: ChainDescriptor;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {
}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
    /** codec describes the application codec such as registered interfaces and implementations */
    codec?: CodecDescriptor;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {
}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
    /** config describes the application's sdk.Config */
    config?: ConfigurationDescriptor;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {
}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
    /** queries provides information on the available queryable services */
    queries?: QueryServicesDescriptor;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {
}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
    /**
     * tx provides information on msgs that can be forwarded to the application
     * alongside the accepted transaction protobuf type
     */
    tx?: TxDescriptor;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
    /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
    queryServices: QueryServiceDescriptor[];
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptor {
    /** fullname is the protobuf fullname of the service descriptor */
    fullname: string;
    /** is_module describes if this service is actually exposed by an application's module */
    isModule: boolean;
    /** methods provides a list of query service methods */
    methods: QueryMethodDescriptor[];
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptor {
    /** name is the protobuf name (not fullname) of the method */
    name: string;
    /**
     * full_query_path is the path that can be used to query
     * this method via tendermint abci.Query
     */
    fullQueryPath: string;
}
export declare const AppDescriptor: {
    encode(message: AppDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AppDescriptor;
    fromJSON(object: any): AppDescriptor;
    toJSON(message: AppDescriptor): unknown;
    create<I extends {
        authn?: {
            signModes?: {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] | undefined;
        } | undefined;
        chain?: {
            id?: string | undefined;
        } | undefined;
        codec?: {
            interfaces?: {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        configuration?: {
            bech32AccountAddressPrefix?: string | undefined;
        } | undefined;
        queryServices?: {
            queryServices?: {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        tx?: {
            fullname?: string | undefined;
            msgs?: {
                msgTypeUrl?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        authn?: ({
            signModes?: {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] | undefined;
        } & {
            signModes?: ({
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] & ({
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            } & {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            } & { [K in Exclude<keyof I["authn"]["signModes"][number], keyof SigningModeDescriptor>]: never; })[] & { [K_1 in Exclude<keyof I["authn"]["signModes"], keyof {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["authn"], "signModes">]: never; }) | undefined;
        chain?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & { [K_3 in Exclude<keyof I["chain"], "id">]: never; }) | undefined;
        codec?: ({
            interfaces?: {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            interfaces?: ({
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: ({
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                } & {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: (string[] & string[] & { [K_4 in Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>]: never; })[] & { [K_6 in Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"], keyof {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[]>]: never; }) | undefined;
                interfaceImplementers?: ({
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                } & {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                } & { [K_7 in Exclude<keyof I["codec"]["interfaces"][number]["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>]: never; })[] & { [K_8 in Exclude<keyof I["codec"]["interfaces"][number]["interfaceImplementers"], keyof {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I["codec"]["interfaces"][number], keyof InterfaceDescriptor>]: never; })[] & { [K_10 in Exclude<keyof I["codec"]["interfaces"], keyof {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["codec"], "interfaces">]: never; }) | undefined;
        configuration?: ({
            bech32AccountAddressPrefix?: string | undefined;
        } & {
            bech32AccountAddressPrefix?: string | undefined;
        } & { [K_12 in Exclude<keyof I["configuration"], "bech32AccountAddressPrefix">]: never; }) | undefined;
        queryServices?: ({
            queryServices?: {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            queryServices?: ({
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: ({
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] & ({
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                } & {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                } & { [K_13 in Exclude<keyof I["queryServices"]["queryServices"][number]["methods"][number], keyof QueryMethodDescriptor>]: never; })[] & { [K_14 in Exclude<keyof I["queryServices"]["queryServices"][number]["methods"], keyof {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I["queryServices"]["queryServices"][number], keyof QueryServiceDescriptor>]: never; })[] & { [K_16 in Exclude<keyof I["queryServices"]["queryServices"], keyof {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I["queryServices"], "queryServices">]: never; }) | undefined;
        tx?: ({
            fullname?: string | undefined;
            msgs?: {
                msgTypeUrl?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            msgs?: ({
                msgTypeUrl?: string | undefined;
            }[] & ({
                msgTypeUrl?: string | undefined;
            } & {
                msgTypeUrl?: string | undefined;
            } & { [K_18 in Exclude<keyof I["tx"]["msgs"][number], "msgTypeUrl">]: never; })[] & { [K_19 in Exclude<keyof I["tx"]["msgs"], keyof {
                msgTypeUrl?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_20 in Exclude<keyof I["tx"], keyof TxDescriptor>]: never; }) | undefined;
    } & { [K_21 in Exclude<keyof I, keyof AppDescriptor>]: never; }>(base?: I | undefined): AppDescriptor;
    fromPartial<I_1 extends {
        authn?: {
            signModes?: {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] | undefined;
        } | undefined;
        chain?: {
            id?: string | undefined;
        } | undefined;
        codec?: {
            interfaces?: {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        configuration?: {
            bech32AccountAddressPrefix?: string | undefined;
        } | undefined;
        queryServices?: {
            queryServices?: {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        tx?: {
            fullname?: string | undefined;
            msgs?: {
                msgTypeUrl?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        authn?: ({
            signModes?: {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] | undefined;
        } & {
            signModes?: ({
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] & ({
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            } & {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            } & { [K_22 in Exclude<keyof I_1["authn"]["signModes"][number], keyof SigningModeDescriptor>]: never; })[] & { [K_23 in Exclude<keyof I_1["authn"]["signModes"], keyof {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_24 in Exclude<keyof I_1["authn"], "signModes">]: never; }) | undefined;
        chain?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & { [K_25 in Exclude<keyof I_1["chain"], "id">]: never; }) | undefined;
        codec?: ({
            interfaces?: {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            interfaces?: ({
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: ({
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                } & {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: (string[] & string[] & { [K_26 in Exclude<keyof I_1["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>]: never; }) | undefined;
                } & { [K_27 in Exclude<keyof I_1["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>]: never; })[] & { [K_28 in Exclude<keyof I_1["codec"]["interfaces"][number]["interfaceAcceptingMessages"], keyof {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[]>]: never; }) | undefined;
                interfaceImplementers?: ({
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                } & {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                } & { [K_29 in Exclude<keyof I_1["codec"]["interfaces"][number]["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>]: never; })[] & { [K_30 in Exclude<keyof I_1["codec"]["interfaces"][number]["interfaceImplementers"], keyof {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_31 in Exclude<keyof I_1["codec"]["interfaces"][number], keyof InterfaceDescriptor>]: never; })[] & { [K_32 in Exclude<keyof I_1["codec"]["interfaces"], keyof {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_33 in Exclude<keyof I_1["codec"], "interfaces">]: never; }) | undefined;
        configuration?: ({
            bech32AccountAddressPrefix?: string | undefined;
        } & {
            bech32AccountAddressPrefix?: string | undefined;
        } & { [K_34 in Exclude<keyof I_1["configuration"], "bech32AccountAddressPrefix">]: never; }) | undefined;
        queryServices?: ({
            queryServices?: {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            queryServices?: ({
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: ({
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] & ({
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                } & {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                } & { [K_35 in Exclude<keyof I_1["queryServices"]["queryServices"][number]["methods"][number], keyof QueryMethodDescriptor>]: never; })[] & { [K_36 in Exclude<keyof I_1["queryServices"]["queryServices"][number]["methods"], keyof {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_37 in Exclude<keyof I_1["queryServices"]["queryServices"][number], keyof QueryServiceDescriptor>]: never; })[] & { [K_38 in Exclude<keyof I_1["queryServices"]["queryServices"], keyof {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_39 in Exclude<keyof I_1["queryServices"], "queryServices">]: never; }) | undefined;
        tx?: ({
            fullname?: string | undefined;
            msgs?: {
                msgTypeUrl?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            msgs?: ({
                msgTypeUrl?: string | undefined;
            }[] & ({
                msgTypeUrl?: string | undefined;
            } & {
                msgTypeUrl?: string | undefined;
            } & { [K_40 in Exclude<keyof I_1["tx"]["msgs"][number], "msgTypeUrl">]: never; })[] & { [K_41 in Exclude<keyof I_1["tx"]["msgs"], keyof {
                msgTypeUrl?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_42 in Exclude<keyof I_1["tx"], keyof TxDescriptor>]: never; }) | undefined;
    } & { [K_43 in Exclude<keyof I_1, keyof AppDescriptor>]: never; }>(object: I_1): AppDescriptor;
};
export declare const TxDescriptor: {
    encode(message: TxDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TxDescriptor;
    fromJSON(object: any): TxDescriptor;
    toJSON(message: TxDescriptor): unknown;
    create<I extends {
        fullname?: string | undefined;
        msgs?: {
            msgTypeUrl?: string | undefined;
        }[] | undefined;
    } & {
        fullname?: string | undefined;
        msgs?: ({
            msgTypeUrl?: string | undefined;
        }[] & ({
            msgTypeUrl?: string | undefined;
        } & {
            msgTypeUrl?: string | undefined;
        } & { [K in Exclude<keyof I["msgs"][number], "msgTypeUrl">]: never; })[] & { [K_1 in Exclude<keyof I["msgs"], keyof {
            msgTypeUrl?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof TxDescriptor>]: never; }>(base?: I | undefined): TxDescriptor;
    fromPartial<I_1 extends {
        fullname?: string | undefined;
        msgs?: {
            msgTypeUrl?: string | undefined;
        }[] | undefined;
    } & {
        fullname?: string | undefined;
        msgs?: ({
            msgTypeUrl?: string | undefined;
        }[] & ({
            msgTypeUrl?: string | undefined;
        } & {
            msgTypeUrl?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["msgs"][number], "msgTypeUrl">]: never; })[] & { [K_4 in Exclude<keyof I_1["msgs"], keyof {
            msgTypeUrl?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof TxDescriptor>]: never; }>(object: I_1): TxDescriptor;
};
export declare const AuthnDescriptor: {
    encode(message: AuthnDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthnDescriptor;
    fromJSON(object: any): AuthnDescriptor;
    toJSON(message: AuthnDescriptor): unknown;
    create<I extends {
        signModes?: {
            name?: string | undefined;
            number?: number | undefined;
            authnInfoProviderMethodFullname?: string | undefined;
        }[] | undefined;
    } & {
        signModes?: ({
            name?: string | undefined;
            number?: number | undefined;
            authnInfoProviderMethodFullname?: string | undefined;
        }[] & ({
            name?: string | undefined;
            number?: number | undefined;
            authnInfoProviderMethodFullname?: string | undefined;
        } & {
            name?: string | undefined;
            number?: number | undefined;
            authnInfoProviderMethodFullname?: string | undefined;
        } & { [K in Exclude<keyof I["signModes"][number], keyof SigningModeDescriptor>]: never; })[] & { [K_1 in Exclude<keyof I["signModes"], keyof {
            name?: string | undefined;
            number?: number | undefined;
            authnInfoProviderMethodFullname?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "signModes">]: never; }>(base?: I | undefined): AuthnDescriptor;
    fromPartial<I_1 extends {
        signModes?: {
            name?: string | undefined;
            number?: number | undefined;
            authnInfoProviderMethodFullname?: string | undefined;
        }[] | undefined;
    } & {
        signModes?: ({
            name?: string | undefined;
            number?: number | undefined;
            authnInfoProviderMethodFullname?: string | undefined;
        }[] & ({
            name?: string | undefined;
            number?: number | undefined;
            authnInfoProviderMethodFullname?: string | undefined;
        } & {
            name?: string | undefined;
            number?: number | undefined;
            authnInfoProviderMethodFullname?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["signModes"][number], keyof SigningModeDescriptor>]: never; })[] & { [K_4 in Exclude<keyof I_1["signModes"], keyof {
            name?: string | undefined;
            number?: number | undefined;
            authnInfoProviderMethodFullname?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "signModes">]: never; }>(object: I_1): AuthnDescriptor;
};
export declare const SigningModeDescriptor: {
    encode(message: SigningModeDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SigningModeDescriptor;
    fromJSON(object: any): SigningModeDescriptor;
    toJSON(message: SigningModeDescriptor): unknown;
    create<I extends {
        name?: string | undefined;
        number?: number | undefined;
        authnInfoProviderMethodFullname?: string | undefined;
    } & {
        name?: string | undefined;
        number?: number | undefined;
        authnInfoProviderMethodFullname?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SigningModeDescriptor>]: never; }>(base?: I | undefined): SigningModeDescriptor;
    fromPartial<I_1 extends {
        name?: string | undefined;
        number?: number | undefined;
        authnInfoProviderMethodFullname?: string | undefined;
    } & {
        name?: string | undefined;
        number?: number | undefined;
        authnInfoProviderMethodFullname?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SigningModeDescriptor>]: never; }>(object: I_1): SigningModeDescriptor;
};
export declare const ChainDescriptor: {
    encode(message: ChainDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ChainDescriptor;
    fromJSON(object: any): ChainDescriptor;
    toJSON(message: ChainDescriptor): unknown;
    create<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): ChainDescriptor;
    fromPartial<I_1 extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): ChainDescriptor;
};
export declare const CodecDescriptor: {
    encode(message: CodecDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodecDescriptor;
    fromJSON(object: any): CodecDescriptor;
    toJSON(message: CodecDescriptor): unknown;
    create<I extends {
        interfaces?: {
            fullname?: string | undefined;
            interfaceAcceptingMessages?: {
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[] | undefined;
            interfaceImplementers?: {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        interfaces?: ({
            fullname?: string | undefined;
            interfaceAcceptingMessages?: {
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[] | undefined;
            interfaceImplementers?: {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[] | undefined;
        }[] & ({
            fullname?: string | undefined;
            interfaceAcceptingMessages?: {
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[] | undefined;
            interfaceImplementers?: {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            interfaceAcceptingMessages?: ({
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            } & {
                fullname?: string | undefined;
                fieldDescriptorNames?: (string[] & string[] & { [K in Exclude<keyof I["interfaces"][number]["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["interfaces"][number]["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>]: never; })[] & { [K_2 in Exclude<keyof I["interfaces"][number]["interfaceAcceptingMessages"], keyof {
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[]>]: never; }) | undefined;
            interfaceImplementers?: ({
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[] & ({
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            } & {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            } & { [K_3 in Exclude<keyof I["interfaces"][number]["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>]: never; })[] & { [K_4 in Exclude<keyof I["interfaces"][number]["interfaceImplementers"], keyof {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["interfaces"][number], keyof InterfaceDescriptor>]: never; })[] & { [K_6 in Exclude<keyof I["interfaces"], keyof {
            fullname?: string | undefined;
            interfaceAcceptingMessages?: {
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[] | undefined;
            interfaceImplementers?: {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, "interfaces">]: never; }>(base?: I | undefined): CodecDescriptor;
    fromPartial<I_1 extends {
        interfaces?: {
            fullname?: string | undefined;
            interfaceAcceptingMessages?: {
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[] | undefined;
            interfaceImplementers?: {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        interfaces?: ({
            fullname?: string | undefined;
            interfaceAcceptingMessages?: {
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[] | undefined;
            interfaceImplementers?: {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[] | undefined;
        }[] & ({
            fullname?: string | undefined;
            interfaceAcceptingMessages?: {
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[] | undefined;
            interfaceImplementers?: {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            interfaceAcceptingMessages?: ({
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            } & {
                fullname?: string | undefined;
                fieldDescriptorNames?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["interfaces"][number]["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I_1["interfaces"][number]["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>]: never; })[] & { [K_10 in Exclude<keyof I_1["interfaces"][number]["interfaceAcceptingMessages"], keyof {
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[]>]: never; }) | undefined;
            interfaceImplementers?: ({
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[] & ({
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            } & {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            } & { [K_11 in Exclude<keyof I_1["interfaces"][number]["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>]: never; })[] & { [K_12 in Exclude<keyof I_1["interfaces"][number]["interfaceImplementers"], keyof {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I_1["interfaces"][number], keyof InterfaceDescriptor>]: never; })[] & { [K_14 in Exclude<keyof I_1["interfaces"], keyof {
            fullname?: string | undefined;
            interfaceAcceptingMessages?: {
                fullname?: string | undefined;
                fieldDescriptorNames?: string[] | undefined;
            }[] | undefined;
            interfaceImplementers?: {
                fullname?: string | undefined;
                typeUrl?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, "interfaces">]: never; }>(object: I_1): CodecDescriptor;
};
export declare const InterfaceDescriptor: {
    encode(message: InterfaceDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceDescriptor;
    fromJSON(object: any): InterfaceDescriptor;
    toJSON(message: InterfaceDescriptor): unknown;
    create<I extends {
        fullname?: string | undefined;
        interfaceAcceptingMessages?: {
            fullname?: string | undefined;
            fieldDescriptorNames?: string[] | undefined;
        }[] | undefined;
        interfaceImplementers?: {
            fullname?: string | undefined;
            typeUrl?: string | undefined;
        }[] | undefined;
    } & {
        fullname?: string | undefined;
        interfaceAcceptingMessages?: ({
            fullname?: string | undefined;
            fieldDescriptorNames?: string[] | undefined;
        }[] & ({
            fullname?: string | undefined;
            fieldDescriptorNames?: string[] | undefined;
        } & {
            fullname?: string | undefined;
            fieldDescriptorNames?: (string[] & string[] & { [K in Exclude<keyof I["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>]: never; })[] & { [K_2 in Exclude<keyof I["interfaceAcceptingMessages"], keyof {
            fullname?: string | undefined;
            fieldDescriptorNames?: string[] | undefined;
        }[]>]: never; }) | undefined;
        interfaceImplementers?: ({
            fullname?: string | undefined;
            typeUrl?: string | undefined;
        }[] & ({
            fullname?: string | undefined;
            typeUrl?: string | undefined;
        } & {
            fullname?: string | undefined;
            typeUrl?: string | undefined;
        } & { [K_3 in Exclude<keyof I["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>]: never; })[] & { [K_4 in Exclude<keyof I["interfaceImplementers"], keyof {
            fullname?: string | undefined;
            typeUrl?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof InterfaceDescriptor>]: never; }>(base?: I | undefined): InterfaceDescriptor;
    fromPartial<I_1 extends {
        fullname?: string | undefined;
        interfaceAcceptingMessages?: {
            fullname?: string | undefined;
            fieldDescriptorNames?: string[] | undefined;
        }[] | undefined;
        interfaceImplementers?: {
            fullname?: string | undefined;
            typeUrl?: string | undefined;
        }[] | undefined;
    } & {
        fullname?: string | undefined;
        interfaceAcceptingMessages?: ({
            fullname?: string | undefined;
            fieldDescriptorNames?: string[] | undefined;
        }[] & ({
            fullname?: string | undefined;
            fieldDescriptorNames?: string[] | undefined;
        } & {
            fullname?: string | undefined;
            fieldDescriptorNames?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>]: never; })[] & { [K_8 in Exclude<keyof I_1["interfaceAcceptingMessages"], keyof {
            fullname?: string | undefined;
            fieldDescriptorNames?: string[] | undefined;
        }[]>]: never; }) | undefined;
        interfaceImplementers?: ({
            fullname?: string | undefined;
            typeUrl?: string | undefined;
        }[] & ({
            fullname?: string | undefined;
            typeUrl?: string | undefined;
        } & {
            fullname?: string | undefined;
            typeUrl?: string | undefined;
        } & { [K_9 in Exclude<keyof I_1["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>]: never; })[] & { [K_10 in Exclude<keyof I_1["interfaceImplementers"], keyof {
            fullname?: string | undefined;
            typeUrl?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof InterfaceDescriptor>]: never; }>(object: I_1): InterfaceDescriptor;
};
export declare const InterfaceImplementerDescriptor: {
    encode(message: InterfaceImplementerDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceImplementerDescriptor;
    fromJSON(object: any): InterfaceImplementerDescriptor;
    toJSON(message: InterfaceImplementerDescriptor): unknown;
    create<I extends {
        fullname?: string | undefined;
        typeUrl?: string | undefined;
    } & {
        fullname?: string | undefined;
        typeUrl?: string | undefined;
    } & { [K in Exclude<keyof I, keyof InterfaceImplementerDescriptor>]: never; }>(base?: I | undefined): InterfaceImplementerDescriptor;
    fromPartial<I_1 extends {
        fullname?: string | undefined;
        typeUrl?: string | undefined;
    } & {
        fullname?: string | undefined;
        typeUrl?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof InterfaceImplementerDescriptor>]: never; }>(object: I_1): InterfaceImplementerDescriptor;
};
export declare const InterfaceAcceptingMessageDescriptor: {
    encode(message: InterfaceAcceptingMessageDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceAcceptingMessageDescriptor;
    fromJSON(object: any): InterfaceAcceptingMessageDescriptor;
    toJSON(message: InterfaceAcceptingMessageDescriptor): unknown;
    create<I extends {
        fullname?: string | undefined;
        fieldDescriptorNames?: string[] | undefined;
    } & {
        fullname?: string | undefined;
        fieldDescriptorNames?: (string[] & string[] & { [K in Exclude<keyof I["fieldDescriptorNames"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof InterfaceAcceptingMessageDescriptor>]: never; }>(base?: I | undefined): InterfaceAcceptingMessageDescriptor;
    fromPartial<I_1 extends {
        fullname?: string | undefined;
        fieldDescriptorNames?: string[] | undefined;
    } & {
        fullname?: string | undefined;
        fieldDescriptorNames?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["fieldDescriptorNames"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof InterfaceAcceptingMessageDescriptor>]: never; }>(object: I_1): InterfaceAcceptingMessageDescriptor;
};
export declare const ConfigurationDescriptor: {
    encode(message: ConfigurationDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConfigurationDescriptor;
    fromJSON(object: any): ConfigurationDescriptor;
    toJSON(message: ConfigurationDescriptor): unknown;
    create<I extends {
        bech32AccountAddressPrefix?: string | undefined;
    } & {
        bech32AccountAddressPrefix?: string | undefined;
    } & { [K in Exclude<keyof I, "bech32AccountAddressPrefix">]: never; }>(base?: I | undefined): ConfigurationDescriptor;
    fromPartial<I_1 extends {
        bech32AccountAddressPrefix?: string | undefined;
    } & {
        bech32AccountAddressPrefix?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "bech32AccountAddressPrefix">]: never; }>(object: I_1): ConfigurationDescriptor;
};
export declare const MsgDescriptor: {
    encode(message: MsgDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDescriptor;
    fromJSON(object: any): MsgDescriptor;
    toJSON(message: MsgDescriptor): unknown;
    create<I extends {
        msgTypeUrl?: string | undefined;
    } & {
        msgTypeUrl?: string | undefined;
    } & { [K in Exclude<keyof I, "msgTypeUrl">]: never; }>(base?: I | undefined): MsgDescriptor;
    fromPartial<I_1 extends {
        msgTypeUrl?: string | undefined;
    } & {
        msgTypeUrl?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "msgTypeUrl">]: never; }>(object: I_1): MsgDescriptor;
};
export declare const GetAuthnDescriptorRequest: {
    encode(_: GetAuthnDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthnDescriptorRequest;
    fromJSON(_: any): GetAuthnDescriptorRequest;
    toJSON(_: GetAuthnDescriptorRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): GetAuthnDescriptorRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetAuthnDescriptorRequest;
};
export declare const GetAuthnDescriptorResponse: {
    encode(message: GetAuthnDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetAuthnDescriptorResponse;
    fromJSON(object: any): GetAuthnDescriptorResponse;
    toJSON(message: GetAuthnDescriptorResponse): unknown;
    create<I extends {
        authn?: {
            signModes?: {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        authn?: ({
            signModes?: {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] | undefined;
        } & {
            signModes?: ({
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] & ({
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            } & {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            } & { [K in Exclude<keyof I["authn"]["signModes"][number], keyof SigningModeDescriptor>]: never; })[] & { [K_1 in Exclude<keyof I["authn"]["signModes"], keyof {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["authn"], "signModes">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "authn">]: never; }>(base?: I | undefined): GetAuthnDescriptorResponse;
    fromPartial<I_1 extends {
        authn?: {
            signModes?: {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        authn?: ({
            signModes?: {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] | undefined;
        } & {
            signModes?: ({
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[] & ({
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            } & {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            } & { [K_4 in Exclude<keyof I_1["authn"]["signModes"][number], keyof SigningModeDescriptor>]: never; })[] & { [K_5 in Exclude<keyof I_1["authn"]["signModes"], keyof {
                name?: string | undefined;
                number?: number | undefined;
                authnInfoProviderMethodFullname?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["authn"], "signModes">]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "authn">]: never; }>(object: I_1): GetAuthnDescriptorResponse;
};
export declare const GetChainDescriptorRequest: {
    encode(_: GetChainDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetChainDescriptorRequest;
    fromJSON(_: any): GetChainDescriptorRequest;
    toJSON(_: GetChainDescriptorRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): GetChainDescriptorRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetChainDescriptorRequest;
};
export declare const GetChainDescriptorResponse: {
    encode(message: GetChainDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetChainDescriptorResponse;
    fromJSON(object: any): GetChainDescriptorResponse;
    toJSON(message: GetChainDescriptorResponse): unknown;
    create<I extends {
        chain?: {
            id?: string | undefined;
        } | undefined;
    } & {
        chain?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & { [K in Exclude<keyof I["chain"], "id">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "chain">]: never; }>(base?: I | undefined): GetChainDescriptorResponse;
    fromPartial<I_1 extends {
        chain?: {
            id?: string | undefined;
        } | undefined;
    } & {
        chain?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["chain"], "id">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "chain">]: never; }>(object: I_1): GetChainDescriptorResponse;
};
export declare const GetCodecDescriptorRequest: {
    encode(_: GetCodecDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCodecDescriptorRequest;
    fromJSON(_: any): GetCodecDescriptorRequest;
    toJSON(_: GetCodecDescriptorRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): GetCodecDescriptorRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetCodecDescriptorRequest;
};
export declare const GetCodecDescriptorResponse: {
    encode(message: GetCodecDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetCodecDescriptorResponse;
    fromJSON(object: any): GetCodecDescriptorResponse;
    toJSON(message: GetCodecDescriptorResponse): unknown;
    create<I extends {
        codec?: {
            interfaces?: {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        codec?: ({
            interfaces?: {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            interfaces?: ({
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: ({
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                } & {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: (string[] & string[] & { [K in Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>]: never; })[] & { [K_2 in Exclude<keyof I["codec"]["interfaces"][number]["interfaceAcceptingMessages"], keyof {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[]>]: never; }) | undefined;
                interfaceImplementers?: ({
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                } & {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                } & { [K_3 in Exclude<keyof I["codec"]["interfaces"][number]["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>]: never; })[] & { [K_4 in Exclude<keyof I["codec"]["interfaces"][number]["interfaceImplementers"], keyof {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["codec"]["interfaces"][number], keyof InterfaceDescriptor>]: never; })[] & { [K_6 in Exclude<keyof I["codec"]["interfaces"], keyof {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["codec"], "interfaces">]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, "codec">]: never; }>(base?: I | undefined): GetCodecDescriptorResponse;
    fromPartial<I_1 extends {
        codec?: {
            interfaces?: {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        codec?: ({
            interfaces?: {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            interfaces?: ({
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: ({
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                } & {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: (string[] & string[] & { [K_9 in Exclude<keyof I_1["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number]["fieldDescriptorNames"], keyof string[]>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I_1["codec"]["interfaces"][number]["interfaceAcceptingMessages"][number], keyof InterfaceAcceptingMessageDescriptor>]: never; })[] & { [K_11 in Exclude<keyof I_1["codec"]["interfaces"][number]["interfaceAcceptingMessages"], keyof {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[]>]: never; }) | undefined;
                interfaceImplementers?: ({
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] & ({
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                } & {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                } & { [K_12 in Exclude<keyof I_1["codec"]["interfaces"][number]["interfaceImplementers"][number], keyof InterfaceImplementerDescriptor>]: never; })[] & { [K_13 in Exclude<keyof I_1["codec"]["interfaces"][number]["interfaceImplementers"], keyof {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I_1["codec"]["interfaces"][number], keyof InterfaceDescriptor>]: never; })[] & { [K_15 in Exclude<keyof I_1["codec"]["interfaces"], keyof {
                fullname?: string | undefined;
                interfaceAcceptingMessages?: {
                    fullname?: string | undefined;
                    fieldDescriptorNames?: string[] | undefined;
                }[] | undefined;
                interfaceImplementers?: {
                    fullname?: string | undefined;
                    typeUrl?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I_1["codec"], "interfaces">]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, "codec">]: never; }>(object: I_1): GetCodecDescriptorResponse;
};
export declare const GetConfigurationDescriptorRequest: {
    encode(_: GetConfigurationDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigurationDescriptorRequest;
    fromJSON(_: any): GetConfigurationDescriptorRequest;
    toJSON(_: GetConfigurationDescriptorRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): GetConfigurationDescriptorRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetConfigurationDescriptorRequest;
};
export declare const GetConfigurationDescriptorResponse: {
    encode(message: GetConfigurationDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetConfigurationDescriptorResponse;
    fromJSON(object: any): GetConfigurationDescriptorResponse;
    toJSON(message: GetConfigurationDescriptorResponse): unknown;
    create<I extends {
        config?: {
            bech32AccountAddressPrefix?: string | undefined;
        } | undefined;
    } & {
        config?: ({
            bech32AccountAddressPrefix?: string | undefined;
        } & {
            bech32AccountAddressPrefix?: string | undefined;
        } & { [K in Exclude<keyof I["config"], "bech32AccountAddressPrefix">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "config">]: never; }>(base?: I | undefined): GetConfigurationDescriptorResponse;
    fromPartial<I_1 extends {
        config?: {
            bech32AccountAddressPrefix?: string | undefined;
        } | undefined;
    } & {
        config?: ({
            bech32AccountAddressPrefix?: string | undefined;
        } & {
            bech32AccountAddressPrefix?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["config"], "bech32AccountAddressPrefix">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "config">]: never; }>(object: I_1): GetConfigurationDescriptorResponse;
};
export declare const GetQueryServicesDescriptorRequest: {
    encode(_: GetQueryServicesDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetQueryServicesDescriptorRequest;
    fromJSON(_: any): GetQueryServicesDescriptorRequest;
    toJSON(_: GetQueryServicesDescriptorRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): GetQueryServicesDescriptorRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetQueryServicesDescriptorRequest;
};
export declare const GetQueryServicesDescriptorResponse: {
    encode(message: GetQueryServicesDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetQueryServicesDescriptorResponse;
    fromJSON(object: any): GetQueryServicesDescriptorResponse;
    toJSON(message: GetQueryServicesDescriptorResponse): unknown;
    create<I extends {
        queries?: {
            queryServices?: {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        queries?: ({
            queryServices?: {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            queryServices?: ({
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: ({
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] & ({
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                } & {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                } & { [K in Exclude<keyof I["queries"]["queryServices"][number]["methods"][number], keyof QueryMethodDescriptor>]: never; })[] & { [K_1 in Exclude<keyof I["queries"]["queryServices"][number]["methods"], keyof {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["queries"]["queryServices"][number], keyof QueryServiceDescriptor>]: never; })[] & { [K_3 in Exclude<keyof I["queries"]["queryServices"], keyof {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["queries"], "queryServices">]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "queries">]: never; }>(base?: I | undefined): GetQueryServicesDescriptorResponse;
    fromPartial<I_1 extends {
        queries?: {
            queryServices?: {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        queries?: ({
            queryServices?: {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            queryServices?: ({
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[] & ({
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            } & {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: ({
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] & ({
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                } & {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                } & { [K_6 in Exclude<keyof I_1["queries"]["queryServices"][number]["methods"][number], keyof QueryMethodDescriptor>]: never; })[] & { [K_7 in Exclude<keyof I_1["queries"]["queryServices"][number]["methods"], keyof {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I_1["queries"]["queryServices"][number], keyof QueryServiceDescriptor>]: never; })[] & { [K_9 in Exclude<keyof I_1["queries"]["queryServices"], keyof {
                fullname?: string | undefined;
                isModule?: boolean | undefined;
                methods?: {
                    name?: string | undefined;
                    fullQueryPath?: string | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["queries"], "queryServices">]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, "queries">]: never; }>(object: I_1): GetQueryServicesDescriptorResponse;
};
export declare const GetTxDescriptorRequest: {
    encode(_: GetTxDescriptorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxDescriptorRequest;
    fromJSON(_: any): GetTxDescriptorRequest;
    toJSON(_: GetTxDescriptorRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I | undefined): GetTxDescriptorRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): GetTxDescriptorRequest;
};
export declare const GetTxDescriptorResponse: {
    encode(message: GetTxDescriptorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTxDescriptorResponse;
    fromJSON(object: any): GetTxDescriptorResponse;
    toJSON(message: GetTxDescriptorResponse): unknown;
    create<I extends {
        tx?: {
            fullname?: string | undefined;
            msgs?: {
                msgTypeUrl?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        tx?: ({
            fullname?: string | undefined;
            msgs?: {
                msgTypeUrl?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            msgs?: ({
                msgTypeUrl?: string | undefined;
            }[] & ({
                msgTypeUrl?: string | undefined;
            } & {
                msgTypeUrl?: string | undefined;
            } & { [K in Exclude<keyof I["tx"]["msgs"][number], "msgTypeUrl">]: never; })[] & { [K_1 in Exclude<keyof I["tx"]["msgs"], keyof {
                msgTypeUrl?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["tx"], keyof TxDescriptor>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "tx">]: never; }>(base?: I | undefined): GetTxDescriptorResponse;
    fromPartial<I_1 extends {
        tx?: {
            fullname?: string | undefined;
            msgs?: {
                msgTypeUrl?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        tx?: ({
            fullname?: string | undefined;
            msgs?: {
                msgTypeUrl?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            msgs?: ({
                msgTypeUrl?: string | undefined;
            }[] & ({
                msgTypeUrl?: string | undefined;
            } & {
                msgTypeUrl?: string | undefined;
            } & { [K_4 in Exclude<keyof I_1["tx"]["msgs"][number], "msgTypeUrl">]: never; })[] & { [K_5 in Exclude<keyof I_1["tx"]["msgs"], keyof {
                msgTypeUrl?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["tx"], keyof TxDescriptor>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "tx">]: never; }>(object: I_1): GetTxDescriptorResponse;
};
export declare const QueryServicesDescriptor: {
    encode(message: QueryServicesDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryServicesDescriptor;
    fromJSON(object: any): QueryServicesDescriptor;
    toJSON(message: QueryServicesDescriptor): unknown;
    create<I extends {
        queryServices?: {
            fullname?: string | undefined;
            isModule?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        queryServices?: ({
            fullname?: string | undefined;
            isModule?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[] | undefined;
        }[] & ({
            fullname?: string | undefined;
            isModule?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            isModule?: boolean | undefined;
            methods?: ({
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[] & ({
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            } & {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            } & { [K in Exclude<keyof I["queryServices"][number]["methods"][number], keyof QueryMethodDescriptor>]: never; })[] & { [K_1 in Exclude<keyof I["queryServices"][number]["methods"], keyof {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["queryServices"][number], keyof QueryServiceDescriptor>]: never; })[] & { [K_3 in Exclude<keyof I["queryServices"], keyof {
            fullname?: string | undefined;
            isModule?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "queryServices">]: never; }>(base?: I | undefined): QueryServicesDescriptor;
    fromPartial<I_1 extends {
        queryServices?: {
            fullname?: string | undefined;
            isModule?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        queryServices?: ({
            fullname?: string | undefined;
            isModule?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[] | undefined;
        }[] & ({
            fullname?: string | undefined;
            isModule?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[] | undefined;
        } & {
            fullname?: string | undefined;
            isModule?: boolean | undefined;
            methods?: ({
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[] & ({
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            } & {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            } & { [K_5 in Exclude<keyof I_1["queryServices"][number]["methods"][number], keyof QueryMethodDescriptor>]: never; })[] & { [K_6 in Exclude<keyof I_1["queryServices"][number]["methods"], keyof {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I_1["queryServices"][number], keyof QueryServiceDescriptor>]: never; })[] & { [K_8 in Exclude<keyof I_1["queryServices"], keyof {
            fullname?: string | undefined;
            isModule?: boolean | undefined;
            methods?: {
                name?: string | undefined;
                fullQueryPath?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "queryServices">]: never; }>(object: I_1): QueryServicesDescriptor;
};
export declare const QueryServiceDescriptor: {
    encode(message: QueryServiceDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryServiceDescriptor;
    fromJSON(object: any): QueryServiceDescriptor;
    toJSON(message: QueryServiceDescriptor): unknown;
    create<I extends {
        fullname?: string | undefined;
        isModule?: boolean | undefined;
        methods?: {
            name?: string | undefined;
            fullQueryPath?: string | undefined;
        }[] | undefined;
    } & {
        fullname?: string | undefined;
        isModule?: boolean | undefined;
        methods?: ({
            name?: string | undefined;
            fullQueryPath?: string | undefined;
        }[] & ({
            name?: string | undefined;
            fullQueryPath?: string | undefined;
        } & {
            name?: string | undefined;
            fullQueryPath?: string | undefined;
        } & { [K in Exclude<keyof I["methods"][number], keyof QueryMethodDescriptor>]: never; })[] & { [K_1 in Exclude<keyof I["methods"], keyof {
            name?: string | undefined;
            fullQueryPath?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof QueryServiceDescriptor>]: never; }>(base?: I | undefined): QueryServiceDescriptor;
    fromPartial<I_1 extends {
        fullname?: string | undefined;
        isModule?: boolean | undefined;
        methods?: {
            name?: string | undefined;
            fullQueryPath?: string | undefined;
        }[] | undefined;
    } & {
        fullname?: string | undefined;
        isModule?: boolean | undefined;
        methods?: ({
            name?: string | undefined;
            fullQueryPath?: string | undefined;
        }[] & ({
            name?: string | undefined;
            fullQueryPath?: string | undefined;
        } & {
            name?: string | undefined;
            fullQueryPath?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["methods"][number], keyof QueryMethodDescriptor>]: never; })[] & { [K_4 in Exclude<keyof I_1["methods"], keyof {
            name?: string | undefined;
            fullQueryPath?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof QueryServiceDescriptor>]: never; }>(object: I_1): QueryServiceDescriptor;
};
export declare const QueryMethodDescriptor: {
    encode(message: QueryMethodDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMethodDescriptor;
    fromJSON(object: any): QueryMethodDescriptor;
    toJSON(message: QueryMethodDescriptor): unknown;
    create<I extends {
        name?: string | undefined;
        fullQueryPath?: string | undefined;
    } & {
        name?: string | undefined;
        fullQueryPath?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryMethodDescriptor>]: never; }>(base?: I | undefined): QueryMethodDescriptor;
    fromPartial<I_1 extends {
        name?: string | undefined;
        fullQueryPath?: string | undefined;
    } & {
        name?: string | undefined;
        fullQueryPath?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryMethodDescriptor>]: never; }>(object: I_1): QueryMethodDescriptor;
};
/** ReflectionService defines a service for application reflection. */
export interface ReflectionService {
    /**
     * GetAuthnDescriptor returns information on how to authenticate transactions in the application
     * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
     * future releases of the cosmos-sdk.
     */
    GetAuthnDescriptor(request: GetAuthnDescriptorRequest): Promise<GetAuthnDescriptorResponse>;
    /** GetChainDescriptor returns the description of the chain */
    GetChainDescriptor(request: GetChainDescriptorRequest): Promise<GetChainDescriptorResponse>;
    /** GetCodecDescriptor returns the descriptor of the codec of the application */
    GetCodecDescriptor(request: GetCodecDescriptorRequest): Promise<GetCodecDescriptorResponse>;
    /** GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application */
    GetConfigurationDescriptor(request: GetConfigurationDescriptorRequest): Promise<GetConfigurationDescriptorResponse>;
    /** GetQueryServicesDescriptor returns the available gRPC queryable services of the application */
    GetQueryServicesDescriptor(request: GetQueryServicesDescriptorRequest): Promise<GetQueryServicesDescriptorResponse>;
    /** GetTxDescriptor returns information on the used transaction object and available msgs that can be used */
    GetTxDescriptor(request: GetTxDescriptorRequest): Promise<GetTxDescriptorResponse>;
}
export declare class ReflectionServiceClientImpl implements ReflectionService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetAuthnDescriptor(request: GetAuthnDescriptorRequest): Promise<GetAuthnDescriptorResponse>;
    GetChainDescriptor(request: GetChainDescriptorRequest): Promise<GetChainDescriptorResponse>;
    GetCodecDescriptor(request: GetCodecDescriptorRequest): Promise<GetCodecDescriptorResponse>;
    GetConfigurationDescriptor(request: GetConfigurationDescriptorRequest): Promise<GetConfigurationDescriptorResponse>;
    GetQueryServicesDescriptor(request: GetQueryServicesDescriptorRequest): Promise<GetQueryServicesDescriptorResponse>;
    GetTxDescriptor(request: GetTxDescriptorRequest): Promise<GetTxDescriptorResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
