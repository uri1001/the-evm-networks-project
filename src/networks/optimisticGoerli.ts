import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import { alchemy, blast, infura, omnia, optimismProvider, quicknode, thirdweb } from '../providers'

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
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: [`https://opt-goerli.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://opt-goerli.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            http: [`https://optimism-goerli.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        thirdweb: {
            http: ['https://optimism-goerli.rpc-staging.thirdweb.com'],
            provider: thirdweb,
            authenticated: false,
        },
        blast: {
            http: ['https://optimism-goerli.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        omniatech: {
            http: ['https://endpoints.omniatech.io/v1/op/goerli/public/'],
            provider: omnia,
            authenticated: false,
        },
        optimism: {
            http: ['https://goerli.optimism.io/'],
            provider: optimismProvider,
            authenticated: false,
        },
        public: {
            http: ['https://goerli.optimism.io/'],
            provider: optimismProvider,
            authenticated: false,
        },
        default: {
            http: ['https://goerli.optimism.io/'],
            provider: optimismProvider,
            authenticated: false,
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
