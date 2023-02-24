import { BankExtension, QueryClient, DistributionExtension, GovExtension, MintExtension, StakingExtension } from "@cosmjs/stargate"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc"
import { OdinExtension, setupOdinExtension } from "../types/generated/odin/odinExtension"
import { setupBankExtension, setupDistributionExtension, setupGovExtension, setupMintExtension, setupStakingExtension } from "@cosmjs/stargate"


export class odinQueryClient {

    tendermintClient!: Tendermint34Client
    queryClient!: (QueryClient & OdinExtension & BankExtension & DistributionExtension & GovExtension & MintExtension & StakingExtension)

    async connect(url: string) {
        this.tendermintClient = await Tendermint34Client.connect(url),
        this.queryClient = QueryClient.withExtensions(
            this.tendermintClient,
            setupOdinExtension,
            setupBankExtension,
            setupDistributionExtension,
            setupGovExtension,
            setupMintExtension,
            setupStakingExtension,
        )
    }
  
}