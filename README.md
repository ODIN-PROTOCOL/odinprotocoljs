<!-- PROJECT LOGO -->
<p align="center">
  <a href="https://mainnet.odinprotocol.io">
    <img src="static/img/favicon.png" alt="Logo" width="120">
  </a>

  <h2 align="center">Odinprotocoljs</h3>

  <p align="center" width="100%">
   <a href=""><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
   <a href=""><img height="20" src="https://img.shields.io/github/package-json/v/odin-protocol/odinjs?filename=package.json"></a>
</p>

  <p align="center">
    OdinprotocolJS is a library for interacting easily with Odin network based on Stargate.
    <br />
    <br />
    <a href="https://github.com/ODIN-PROTOCOL/odinjs/issues">Report Bug</a>
    ·
    <a href="https://github.com/ODIN-PROTOCOL/odinjs/issues">Request Feature</a>
  </p>
</p>

---
## Install

```sh
npm install odinprotocoljs
```

## Usage

First you need to import the odin client and connect it to your RPC. Then you can call the methods of the client.

All methods for Odin Client are defined in the interface extension `types/generated/odin/odinExtension.ts`

Run the following file with:

```sh
node --es-module-specifier-resolution=node .\dataSourceTest.js
```

### RPC Clients

```js title="dataSourceTest.js"
import { odinQueryClient } from "odinprotocoljs";

const config_rpc = "https://node.odin-freya-website.odinprotocol.io/mainnet/a/"

const myOdinClient = new odinQueryClient()
await myOdinClient.connect(config_rpc);

const dataSource = await myOdinClient.queryClient.oracle.getDataSourceById(14)
console.log(dataSource)
