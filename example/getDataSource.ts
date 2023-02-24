import { odinQueryClient } from "../src/odinClient";

const config_rpc = "https://node.odin-freya-website.odinprotocol.io/mainnet/a/"

const myOdinClient = new odinQueryClient()
await myOdinClient.connect(config_rpc);

const dataSource = await myOdinClient.queryClient.oracle.getDataSourceById(14)
console.log(dataSource)