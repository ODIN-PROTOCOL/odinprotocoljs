import * as queryInterfaces from "../oracle/v1/query"
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination"
import { createProtobufRpcClient } from "@cosmjs/stargate/build/queryclient/utils"
import { DataSourceId, longify, createPagination } from "../utils/helpers"
import { QueryClient } from "@cosmjs/stargate"

export interface OdinExtension {
    readonly oracle: {
        readonly countDataSource: () => Promise<queryInterfaces.QueryCountsResponse>
        readonly getDataSourceFromHash: (hash: string) => Promise<queryInterfaces.QueryDataResponse>
        readonly getDataSourceFromId: (id: DataSourceId) => Promise<queryInterfaces.QueryDataSourceResponse>
        readonly getDataSourcesPaginated: (paginationKey?: Uint8Array) => Promise<queryInterfaces.QueryDataSourcesResponse>
        
        
        readonly getOracleScriptsPaginated: (paginationKey?: Uint8Array) => Promise<queryInterfaces.QueryOracleScriptsResponse>
        /*
        OracleScript(request: QueryOracleScriptRequest): Promise<QueryOracleScriptResponse>
        OracleScripts(request: QueryOracleScriptsRequest): Promise<QueryOracleScriptsResponse>
        Request(request: QueryRequestRequest): Promise<QueryRequestResponse>
        Requests(request: QueryRequestsRequest): Promise<QueryRequestsResponse>
        Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>
        IsReporter(request: QueryIsReporterRequest): Promise<QueryIsReporterResponse>
        Reporters(request: QueryReportersRequest): Promise<QueryReportersResponse>
        ActiveValidators(request: QueryActiveValidatorsRequest): Promise<QueryActiveValidatorsResponse>
        Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
        RequestSearch(request: QueryRequestSearchRequest): Promise<QueryRequestSearchResponse>
        RequestPrice(request: QueryRequestPriceRequest): Promise<QueryRequestPriceResponse>
        DataProvidersPool(request: QueryDataProvidersPoolRequest): Promise<QueryDataProvidersPoolResponse>
        RequestReports(request: QueryRequestReportsRequest): Promise<QueryRequestReportsResponse>
        DataProviderReward(request: QueryDataProviderRewardRequest): Promise<QueryDataProviderRewardResponse>
        PendingRequests(request: QueryPendingRequestsRequest): Promise<QueryPendingRequestsResponse>
        RequestVerification(request: QueryRequestVerificationRequest): Promise<QueryRequestVerificationResponse>
        DataProviderAccumulatedReward(
          request: QueryDataProviderAccumulatedRewardRequest,
        ): Promise<QueryDataProviderAccumulatedRewardResponse>
        */
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
            getDataSourceFromHash: async (dataHash: string) => {
                const response = await queryService.Data({ dataHash: dataHash })
                return response
            },
            getDataSourceFromId: async (id: DataSourceId) => {
                const response = await queryService.DataSource({ dataSourceId: longify(id) })
                return response
            },
            getDataSourcesPaginated: async (paginationKey?: Uint8Array) => {
                const response = await queryService.DataSources({
                    pagination: createPagination(paginationKey),
                })
                return response
            },
            getOracleScriptsPaginated: async (paginationKey?: Uint8Array) => {
                const response = await queryService.OracleScripts({
                    pagination: createPagination(paginationKey),
                })
                return response
            }
        },
    };
}