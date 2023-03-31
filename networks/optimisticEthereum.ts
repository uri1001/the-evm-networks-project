import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, blast, fantomProvider, infura, omnia } from '../providers'

export const optimisticEthereum = {
    id: 10,
    name: 'Optimism',
    network: 'optimism',
    infoUrl: 'https://optimism.io',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcNodes: {
        alchemy: {
            http: ['https://opt-mainnet.g.alchemy.com/v2/'],
            webSocket: ['wss://opt-mainnet.g.alchemy.com/v2/'],
        },
        infura: {
            http: ['https://optimism-mainnet.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        thirdweb: {
            http: ['https://optimism.rpc-staging.thirdweb.com'],
        },
        optimism: {
            http: ['https://mainnet.optimism.io/'],
        },
        public: {
            http: ['https://mainnet.optimism.io/'],
        },
        default: {
            http: ['https://mainnet.optimism.io/'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Optimism Etherscan',
            browserUrl: 'https://optimistic.etherscan.io/',
            apiUrl: 'https://api-optimistic.etherscan.io/',
            docsUrl: 'https://docs.optimistic.etherscan.io/',
            standard: 'EIP3091',
        },
        default: {
            name: 'Optimism Etherscan',
            browserUrl: 'https://optimistic.etherscan.io/',
            apiUrl: 'https://api-optimistic.etherscan.io/',
            docsUrl: 'https://docs.optimistic.etherscan.io/',
            standard: 'EIP3091',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4286263,
        },
    },
    testnet: false,
} as const satisfies Network
