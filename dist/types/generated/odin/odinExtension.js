import * as queryInterfaces from "../oracle/v1/query";
import { createProtobufRpcClient } from "@cosmjs/stargate/build/queryclient/utils";
import { longify } from "../utils/helpers";
export function setupOdinExtension(base) {
    const rpc = createProtobufRpcClient(base);
    const queryService = new queryInterfaces.QueryClientImpl(rpc);
    return {
        oracle: {
            countDataSource: async () => {
                const response = await queryService.Counts({});
                return response;
            },
            getDataSourceByHash: async (dataHash) => {
                const response = await queryService.Data({ dataHash: dataHash });
                return response;
            },
            getDataSourceById: async (id) => {
                const response = await queryService.DataSource({ dataSourceId: longify(id) });
                return response;
            },
            getOracleScriptById: async (id) => {
                const response = await queryService.OracleScript({ oracleScriptId: longify(id) });
                return response;
            },
            getRequestById: async (id) => {
                const response = await queryService.Request({ requestId: longify(id) });
                return response;
            },
            getValidatorByAddress: async (validatorAddress) => {
                const response = await queryService.Validator({ validatorAddress: validatorAddress });
                return response;
            },
            isReporter: async (validatorAddress, reporterAddress) => {
                const response = await queryService.IsReporter({ validatorAddress: validatorAddress, reporterAddress: reporterAddress });
                return response;
            },
            getReporters: async (validatorAddress) => {
                const response = await queryService.Reporters({ validatorAddress: validatorAddress });
                return response;
            },
            getActiveValidatorsCount: async () => {
                const response = await queryService.ActiveValidators({});
                return response;
            },
            getParams: async () => {
                const response = await queryService.Params({});
                return response;
            },
            getReportsByRequestId: async (id) => {
                const response = await queryService.RequestReports({ requestId: longify(id) });
                return response;
            },
        },
    };
}
//# sourceMappingURL=odinExtension.js.map