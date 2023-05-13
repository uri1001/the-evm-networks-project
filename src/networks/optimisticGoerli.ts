import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { alchemy, ankr, blast, infura, lava, omnia, optimismProvider, thirdweb } from '../providers'

export const optimisticGoerli = {
    id: 420,
    name: 'Optimism Goerli',
    network: 'optimisticGoerli',
    infoUrl: 'https://optimism.io',
    docsUrl: 'https://community.optimism.io',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-420.json',
    nativeCurrency: {
        name: 'Goerli Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            rpcNode: 'alchemy',
            type: EndpointType.Authenticated,
            http: [`https://opt-goerli.g.alchemy.com/v2/${EndpointAuth.Key}`],
            wss: [`wss://opt-goerli.g.alchemy.com/v2/${EndpointAuth.Key}`],
            provider: alchemy,
        },
        infura: {
            rpcNode: 'infura',
            type: EndpointType.Authenticated,
            http: [`https://optimism-goerli.infura.io/v3/${EndpointAuth.Key}`],
            provider: infura,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/optimism_testnet/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/optimism_testnet'],
            provider: ankr,
        },
        lava: {
            rpcNode: 'lava',
            type: EndpointType.Authenticated,
            http: [`https://g.w.lavanet.xyz:443/gateway/optmt/rpc-http/${EndpointAuth.Key}`],
            wss: [`wss://g.w.lavanet.xyz:443/gateway/optmt/rpc/${EndpointAuth.Key}`],
            provider: lava,
        },
        thirdweb: {
            rpcNode: 'thirdweb',
            type: EndpointType.Public,
            http: ['https://optimism-goerli.rpc-staging.thirdweb.com'],
            provider: thirdweb,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://optimism-goerli.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://optimism-goerli.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://optimism-goerli.public.blastapi.io'],
            wss: ['wss://optimism-goerli.public.blastapi.io'],
            provider: blast,
        },
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/op/goerli/${EndpointAuth.Key}`],
            wss: [`wss://endpoints.omniatech.io/v1/op/goerli/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/op/goerli/public'],
            provider: omnia,
        },
        optimism: {
            rpcNode: 'optimism',
            type: EndpointType.Public,
            http: ['https://goerli.optimism.io'],
            provider: optimismProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://goerli.optimism.io'],
            provider: optimismProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://goerli.optimism.io'],
            provider: optimismProvider,
        },
    },
    blockExplorers: {
        optimismExplorer: {
            name: 'Goerli Optimism Blockchain Explorer',
            blockExplorer: 'optimismExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://blockscout.com/optimism/goerli',
            apiUrl: 'https://blockscout.com/optimism/goerli/api',
            docsUrl: 'https://blockscout.com/optimism/goerli/api-docs',
        },
        optimismscan: {
            name: 'Goerli Optimism Etherscan',
            blockExplorer: 'optimismscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli-optimism.etherscan.io',
            apiUrl: 'https://api-goerli-optimistic.etherscan.io',
            docsUrl: 'https://docs.optimism.etherscan.io/v/optimistic-goerli-etherscan',
        },
        default: {
            name: 'Goerli Optimism Etherscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli-optimism.etherscan.io',
            apiUrl: 'https://api-goerli-optimistic.etherscan.io',
            docsUrl: 'https://docs.optimism.etherscan.io/v/optimistic-goerli-etherscan',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 49461,
            deployTxHash: '0x0813f69b765964c4673c0dd066e36d825268f35409219ee6aa35210ca2bf0434',
        },
    },
    testnet: true,
    mainnetId: 10,
} as const satisfies Network
