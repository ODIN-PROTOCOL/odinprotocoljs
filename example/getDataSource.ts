import { DataSource } from "../types/generated/oracle/v1/oracle";
import { QueryDataSourceResponse } from "../types/generated/oracle/v1/query";
import { odinQueryClient } from "../src/odinClient";

const config_rpc= "http://35.241.221.154:26657/"

const myOdinClient = new odinQueryClient()
await myOdinClient.connect(config_rpc);

const dataSource = await myOdinClient.queryClient.oracle.getDataSourceFromId(14)
//const totalDataSources = await myOdinClient.queryClient.oracle.countDataSource()

const toText = (bytes: number[]): string => {
    let result = '';
    for (let i = 0; i < bytes.length; ++i) {
        const byte = bytes[i];
        const text = byte.toString(16);
        result += (byte < 16 ? '%0' : '%') + text;
    }
    return decodeURIComponent(result);
};

console.log(dataSource)
//const dataSourceFromHash = await myOdinClient.queryClient.oracle.getDataSourceFromHash("d2c57251a60577916a7eec00086e909709d03e789616fd025daa178244d1a5f2")
//var code = new TextDecoder().decode(dataSourceFromHash.data);
//console.log(code)
const votes = await myOdinClient.queryClient.gov.votes(5)
console.log(votes)

const dataSources = await myOdinClient.queryClient.oracle.getDataSourcesPaginated()
console.log(dataSources)

const dataSourcesPaginated = await myOdinClient.queryClient.distribution.communityPool()
console.log(dataSourcesPaginated)