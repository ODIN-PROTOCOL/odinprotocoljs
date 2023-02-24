import * as queryInterfaces from "../oracle/v1/query";
import { Id } from "../utils/helpers";
import { QueryClient } from "@cosmjs/stargate";
export interface OdinExtension {
    readonly oracle: {
        readonly countDataSource: () => Promise<queryInterfaces.QueryCountsResponse>;
        readonly getDataSourceByHash: (hash: string) => Promise<queryInterfaces.QueryDataResponse>;
        readonly getDataSourceById: (id: Id) => Promise<queryInterfaces.QueryDataSourceResponse>;
        readonly getOracleScriptById: (id: Id) => Promise<queryInterfaces.QueryOracleScriptResponse>;
        readonly getRequestById: (id: Id) => Promise<queryInterfaces.QueryRequestResponse>;
        readonly getValidatorByAddress: (validatorAddress: string) => Promise<queryInterfaces.QueryValidatorResponse>;
        readonly isReporter: (validatorAddress: string, reporterAddress: string) => Promise<queryInterfaces.QueryIsReporterResponse>;
        readonly getReporters: (validatorAddress: string) => Promise<queryInterfaces.QueryReportersResponse>;
        readonly getActiveValidatorsCount: () => Promise<queryInterfaces.QueryActiveValidatorsResponse>;
        readonly getParams: () => Promise<queryInterfaces.QueryParamsResponse>;
    };
}
export declare function setupOdinExtension(base: QueryClient): {
    oracle: {
        countDataSource: () => Promise<queryInterfaces.QueryCountsResponse>;
        getDataSourceByHash: (dataHash: string) => Promise<queryInterfaces.QueryDataResponse>;
        getDataSourceById: (id: Id) => Promise<queryInterfaces.QueryDataSourceResponse>;
        getOracleScriptById: (id: Id) => Promise<queryInterfaces.QueryOracleScriptResponse>;
        getRequestById: (id: Id) => Promise<queryInterfaces.QueryRequestResponse>;
        getValidatorByAddress: (validatorAddress: string) => Promise<queryInterfaces.QueryValidatorResponse>;
        isReporter: (validatorAddress: string, reporterAddress: string) => Promise<queryInterfaces.QueryIsReporterResponse>;
        getReporters: (validatorAddress: string) => Promise<queryInterfaces.QueryReportersResponse>;
        getActiveValidatorsCount: () => Promise<queryInterfaces.QueryActiveValidatorsResponse>;
        getParams: () => Promise<queryInterfaces.QueryParamsResponse>;
        getReportsByRequestId: (id: Id) => Promise<queryInterfaces.QueryRequestReportsResponse>;
    };
};
