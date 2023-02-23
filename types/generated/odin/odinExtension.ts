import { QueryClientImpl, QueryDataSourceResponse, QueryCountsResponse } from "../oracle/v1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate/build/queryclient/utils";
import { DataSourceId, longify } from "../utils/helpers"
import { QueryClient } from "@cosmjs/stargate";

export interface OdinExtension {
    readonly oracle: {
        countDataSource: () => Promise<QueryCountsResponse>;
        getDataSource: (id: DataSourceId) => Promise<QueryDataSourceResponse>;
    };
}

export function setupOdinExtension(base: QueryClient) {
    const rpc = createProtobufRpcClient(base);

    const queryService = new QueryClientImpl(rpc);
    return {
        oracle: {
            countDataSource: async () => {
                const response = await queryService.Counts({});
                return response;
            },
            getDataSource: async (id: DataSourceId) => {
                const response = await queryService.DataSource({ dataSourceId: longify(id) });
                return response;
            }
        },
    };
}