import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, blast, fantomProvider, infura, omnia } from '../providers'

export const optimisticGoerli = {
    id: 420,
    name: 'Optimism Goerli',
    network: 'optimism-goerli',
    infoUrl: 'https://optimism.io',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcNodes: {
        alchemy: {
            http: ['https://opt-goerli.g.alchemy.com/v2/'],
            webSocket: ['wss://opt-goerli.g.alchemy.com/v2/'],
        },
        infura: {
            http: ['https://optimism-goerli.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        thirdweb: {
            http: ['https://optimism-goerli.rpc-staging.thirdweb.com'],
        },
        optimism: {
            http: ['https://goerli.optimism.io/'],
        },
        public: {
            http: ['https://goerli.optimism.io/'],
        },
        default: {
            http: ['https://goerli.optimism.io/'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Optimism Etherscan',
            browserUrl: 'https://goerli-optimism.etherscan.io/',
            apiUrl: 'https://api-goerli-optimistic.etherscan.io/',
            docsUrl: 'https://docs.optimistic.etherscan.io/v/optimistic-goerli-etherscan',
            standard: 'EIP3091',
        },
        default: {
            name: 'Optimism Etherscan',
            browserUrl: 'https://goerli-optimism.etherscan.io/',
            apiUrl: 'https://api-goerli-optimistic.etherscan.io/',
            docsUrl: 'https://docs.optimistic.etherscan.io/v/optimistic-goerli-etherscan',
            standard: 'EIP3091',
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
