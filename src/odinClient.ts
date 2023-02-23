import { BankExtension, QueryClient, DistributionExtension, GovExtension, MintExtension, StakingExtension } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { OdinExtension, setupOdinExtension } from "../types/generated/odin/odinExtension";
import { setupBankExtension, setupDistributionExtension, setupGovExtension, setupMintExtension, setupStakingExtension } from "@cosmjs/stargate";


export class odinQueryClient {
    queryClient!: (QueryClient & OdinExtension & BankExtension & DistributionExtension & GovExtension & MintExtension & StakingExtension);

    constructor() {
    }

    async connect(url: string) {
        this.queryClient = QueryClient.withExtensions(
            await Tendermint34Client.connect(url),
            setupOdinExtension,
            setupBankExtension,
            setupDistributionExtension,
            setupGovExtension,
            setupMintExtension,
            setupStakingExtension,
        );
    }
  
}