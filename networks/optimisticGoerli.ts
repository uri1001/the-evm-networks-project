import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { alchemy, blast, infura, omnia, optimismProvider, thirdweb } from '../providers'

export const optimisticGoerli = {
    id: 420,
    name: 'Optimism Goerli',
    network: 'optimism-goerli',
    infoUrl: 'https://optimism.io',
    docsUrl: 'https://community.optimism.io/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-420.json',
    nativeCurrency: {
        name: 'Goerli Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: ['https://opt-goerli.g.alchemy.com/v2/'],
            wss: ['wss://opt-goerli.g.alchemy.com/v2/'],
            provider: alchemy,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        infura: {
            http: ['https://optimism-goerli.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        thirdweb: {
            http: ['https://optimism-goerli.rpc-staging.thirdweb.com'],
            provider: thirdweb,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        blast: {
            http: ['https://optimism-goerli.public.blastapi.io/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        omniatech: {
            http: ['https://endpoints.omniatech.io/v1/op/goerli/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        optimism: {
            http: ['https://goerli.optimism.io/'],
            provider: optimismProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        public: {
            http: ['https://goerli.optimism.io/'],
            provider: optimismProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: ['https://goerli.optimism.io/'],
            provider: optimismProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
    },
    blockExplorers: {
        optimismExplorer: {
            name: 'Goerli Optimism Blockchain Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://blockscout.com/optimism/goerli/',
            apiUrl: 'https://blockscout.com/optimism/goerli/api-docs/',
            docsUrl: 'https://blockscout.com/optimism/goerli/api/',
            standard: BlockExplorerStandard.EIP3091,
        },
        optimismScan: {
            name: 'Goerli Optimism Etherscan',
            browserUrl: 'https://goerli-optimism.etherscan.io/',
            type: BlockExplorerType.Etherscan,
            apiUrl: 'https://api-goerli-optimistic.etherscan.io/',
            docsUrl: 'https://docs.optimism.etherscan.io/v/optimistic-goerli-etherscan/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Goerli Optimism Etherscan',
            browserUrl: 'https://goerli-optimism.etherscan.io/',
            type: BlockExplorerType.Etherscan,
            apiUrl: 'https://api-goerli-optimistic.etherscan.io/',
            docsUrl: 'https://docs.optimism.etherscan.io/v/optimistic-goerli-etherscan/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 49461,
        },
    },
    testnet: true,
} as const satisfies Network
