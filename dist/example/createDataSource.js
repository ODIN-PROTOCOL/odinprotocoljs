const config_rpc = "http://35.195.4.110:26657";
//const config_rpc= "http://35.241.221.154:26657/"
import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
dotenv.config();
import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes as defaultStargateTypes, SigningStargateClient, } from "@cosmjs/stargate";
import { MsgCreateDataSource } from "../types/generated/oracle/v1/tx"; // Replace with your own Msg import
import { stringToPath } from "@cosmjs/crypto";
const HD_DERIVATION = stringToPath("m/44'/494'/0'/0/0");
const myRegistry = new Registry(defaultStargateTypes);
myRegistry.register("/oracle.v1.MsgCreateDataSource", MsgCreateDataSource); // Replace with your own type URL and Msg class
const mnemonic = process.env.mnemonic ? process.env.mnemonic : "";
const wallet = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic, {
    hdPaths: [HD_DERIVATION],
    prefix: "odin"
});
const client = await SigningStargateClient.connectWithSigner(config_rpc, // Replace with your own RPC endpoint
wallet, { registry: myRegistry });
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const execPath = path.resolve(__dirname, './data_source_code/example.py');
const file = fs.readFileSync(execPath, 'utf8');
const executable = Buffer.from(file).toString('base64');
const fee = {
    amount: [
        {
            denom: "loki",
            amount: "120000",
        },
    ],
    gas: "10000",
};
let [account] = await wallet.getAccounts();
const myMessage = {
    name: "MyDataSource Test", description: "", executable: new Uint8Array(), fee: fee.amount, owner: account.address, sender: account.address
};
const message = {
    typeUrl: "/oracle.v1.MsgCreateDataSource",
    value: myMessage,
};
const response = await client.signAndBroadcast(account.address, [message], fee);
console.log(response);
//# sourceMappingURL=createDataSource.js.map