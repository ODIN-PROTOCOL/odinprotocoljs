import { QueryClient } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { setupOdinExtension } from "../types/generated/odin/odinExtension";
import { setupBankExtension, setupDistributionExtension, setupGovExtension, setupMintExtension, setupStakingExtension } from "@cosmjs/stargate";
export class odinQueryClient {
    async connect(url) {
        this.tendermintClient = await Tendermint34Client.connect(url),
            this.queryClient = QueryClient.withExtensions(this.tendermintClient, setupOdinExtension, setupBankExtension, setupDistributionExtension, setupGovExtension, setupMintExtension, setupStakingExtension);
    }
}
//# sourceMappingURL=odinClient.js.map