import { type Network } from '@/networks/interfaces'

export const milkomedaA1Testnet = {
    id: 200202,
    name: 'Milkomeda A1 Testnet',
    network: 'milkomeda-a1',
    infoUrl: 'https://milkomeda.com',
    nativeCurrency: { name: 'MilkTALGO', symbol: 'mTALGO', decimals: 18 },
    rpcUrls: {
        milkomeda: {
            http: ['https://rpc-devnet-algorand-rollup.a1.milkomeda.com/'],
        },
        public: {
            http: ['https://rpc-devnet-algorand-rollup.a1.milkomeda.com/'],
        },
        default: {
            http: ['https://rpc-devnet-algorand-rollup.a1.milkomeda.com/'],
        },
    },
    blockExplorers: {
        milkomedaExplorer: {
            name: 'Milkomeda A1 Testnet Explorer',
            browserUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com/',
            apiUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com/api/',
            docsUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com/api-docs/',
            standard: 'none',
        },
        default: {
            name: 'Milkomeda A1 Testnet Explorer',
            browserUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com/',
            apiUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com/api/',
            docsUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com/api-docs/',
            standard: 'none',
        },
    },
    testnet: false,
} as const satisfies Network
