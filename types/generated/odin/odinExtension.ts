import * as queryInterfaces from "../oracle/v1/query"
import { createProtobufRpcClient } from "@cosmjs/stargate/build/queryclient/utils"
import { Id, longify } from "../utils/helpers"
import { QueryClient } from "@cosmjs/stargate"

export interface OdinExtension {
    readonly oracle: {
        readonly countDataSource: () => Promise<queryInterfaces.QueryCountsResponse>
        readonly getDataSourceByHash: (hash: string) => Promise<queryInterfaces.QueryDataResponse>
        readonly getDataSourceById: (id: Id) => Promise<queryInterfaces.QueryDataSourceResponse>
        readonly getOracleScriptById: (id: Id) => Promise<queryInterfaces.QueryOracleScriptResponse>
        readonly getRequestById: (id: Id) => Promise<queryInterfaces.QueryRequestResponse>
        readonly getValidatorByAddress: (validatorAddress: string) => Promise<queryInterfaces.QueryValidatorResponse>
        readonly isReporter: (validatorAddress: string, reporterAddress: string) => Promise<queryInterfaces.QueryIsReporterResponse>
        readonly getReporters: (validatorAddress: string) => Promise<queryInterfaces.QueryReportersResponse>
        readonly getActiveValidatorsCount: () => Promise<queryInterfaces.QueryActiveValidatorsResponse>
        readonly getParams: () => Promise<queryInterfaces.QueryParamsResponse>
    };
}

export function setupOdinExtension(base: QueryClient) {
    const rpc = createProtobufRpcClient(base)

    const queryService = new queryInterfaces.QueryClientImpl(rpc)
    
    return {
        oracle: {
            countDataSource: async () => {
                const response = await queryService.Counts({})
                return response
            },
            getDataSourceByHash: async (dataHash: string) => {
                const response = await queryService.Data({ dataHash: dataHash })
                return response
            },
            getDataSourceById: async (id: Id) => {
                const response = await queryService.DataSource({ dataSourceId: longify(id) })
                return response
            },
            getOracleScriptById: async (id: Id) => {
                const response = await queryService.OracleScript({ oracleScriptId: longify(id) })
                return response
            },
            getRequestById: async (id: Id) => {
                const response = await queryService.Request({ requestId: longify(id) })
                return response
            },
            getValidatorByAddress: async (validatorAddress: string) => {
                const response = await queryService.Validator({ validatorAddress: validatorAddress })
                return response
            },
            isReporter: async (validatorAddress: string, reporterAddress: string) => {
                const response = await queryService.IsReporter({ validatorAddress: validatorAddress, reporterAddress: reporterAddress })
                return response
            },
            getReporters: async (validatorAddress: string) => {
                const response = await queryService.Reporters({ validatorAddress: validatorAddress })
                return response
            },
            getActiveValidatorsCount: async () => {
                const response = await queryService.ActiveValidators({})
                return response
            },
            getParams: async () => {
                const response = await queryService.Params({})
                return response
            },
            getReportsByRequestId: async (id: Id) => {
                const response = await queryService.RequestReports({ requestId: longify(id) })
                return response
            },
        },
    };
}