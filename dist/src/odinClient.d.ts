import { BankExtension, QueryClient, DistributionExtension, GovExtension, MintExtension, StakingExtension } from "@cosmjs/stargate";
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { OdinExtension } from "../types/generated/odin/odinExtension";
export declare class odinQueryClient {
    tendermintClient: Tendermint34Client;
    queryClient: (QueryClient & OdinExtension & BankExtension & DistributionExtension & GovExtension & MintExtension & StakingExtension);
    connect(url: string): Promise<void>;
}
