import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { alchemy, ankr, blast, infura, omnia, optimismProvider, thirdweb } from '../providers'

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
            http: [`https://opt-goerli.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://opt-goerli.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            rpcNode: 'infura',
            http: [`https://optimism-goerli.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/optimism_testnet'],
            provider: ankr,
            authenticated: false,
        },
        thirdweb: {
            rpcNode: 'thirdweb',
            http: ['https://optimism-goerli.rpc-staging.thirdweb.com'],
            provider: thirdweb,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://optimism-goerli.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://optimism-goerli.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://optimism-goerli.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        omnia: {
            rpcNode: 'omnia',
            http: ['https://endpoints.omniatech.io/v1/op/goerli/public'],
            provider: omnia,
            authenticated: false,
        },
        optimism: {
            rpcNode: 'optimism',
            http: ['https://goerli.optimism.io'],
            provider: optimismProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://goerli.optimism.io'],
            provider: optimismProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://goerli.optimism.io'],
            provider: optimismProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        optimismExplorer: {
            name: 'Goerli Optimism Blockchain Explorer',
            blockExplorer: 'optimismExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://blockscout.com/optimism/goerli',
            apiUrl: 'https://blockscout.com/optimism/goerli/api-docs',
            docsUrl: 'https://blockscout.com/optimism/goerli/api',
        },
        optimismScan: {
            name: 'Goerli Optimism Etherscan',
            blockExplorer: 'optimismScan',
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
