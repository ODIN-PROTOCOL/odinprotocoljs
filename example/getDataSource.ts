import { odinQueryClient } from "../src/odinClient";

const config_rpc= "http://35.241.221.154:26657/"

const myOdinClient = new odinQueryClient()
await myOdinClient.connect(config_rpc);


const dataSource = await myOdinClient.queryClient.oracle.getDataSource(14)
console.log(dataSource)

const totalDataSources = await myOdinClient.queryClient.oracle.countDataSource()
console.log(totalDataSources)