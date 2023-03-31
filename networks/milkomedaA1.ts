import { type Network } from '@/networks/interfaces'

export const milkomedaA1 = {
    id: 2002,
    name: 'Milkomeda A1 Mainnet',
    network: 'milkomeda-a1 mainnet',
    infoUrl: 'https://milkomeda.com',
    nativeCurrency: { name: 'MilkALGO', symbol: 'mALGO', decimals: 18 },
    rpcUrls: {
        milkomeda: {
            http: ['https://rpc-mainnet-algorand-rollup.a1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws/'],
        },
        public: {
            http: ['https://rpc-mainnet-algorand-rollup.a1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws/'],
        },
        default: {
            http: ['https://rpc-mainnet-algorand-rollup.a1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws/'],
        },
    },
    blockExplorers: {
        milkomedaExplorer: {
            name: 'Milkomeda A1 Explorer',
            browserUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/',
            apiUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api/',
            docsUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api-docs/',
            standard: 'none',
        },
        default: {
            name: 'Milkomeda A1 Explorer',
            browserUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/',
            apiUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api/',
            docsUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api-docs/',
            standard: 'none',
        },
    },
    testnet: true,
} as const satisfies Network
