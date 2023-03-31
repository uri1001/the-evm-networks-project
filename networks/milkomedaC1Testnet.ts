import { type Network } from '@/networks/interfaces'

export const milkomedaC1Testnet = {
    id: 200101,
    name: 'Milkomeda C1 Testnet',
    network: 'milkomeda-c1 testnet',
    infoUrl: 'https://milkomeda.com',
    nativeCurrency: { name: 'MilkTADA', symbol: 'mTADA', decimals: 18 },
    rpcUrls: {
        milkomeda: {
            http: ['https://rpc-devnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-devnet-cardano-evm.c1.milkomeda.com'],
        },
        public: {
            http: ['https://rpc-devnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-devnet-cardano-evm.c1.milkomeda.com'],
        },
        default: {
            http: ['https://rpc-devnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-devnet-cardano-evm.c1.milkomeda.com'],
        },
    },
    blockExplorers: {
        milkomedaExplorer: {
            name: 'Milkomeda C1 Testnet Explorer',
            browserUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/',
            apiUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/api/',
            docsUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/api-docs/',
            standard: 'none',
        },
        default: {
            name: 'Milkomeda C1 Testnet Explorer',
            browserUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/',
            apiUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/api/',
            docsUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/api-docs/',
            standard: 'none',
        },
    },
    testnet: true,
} as const satisfies Network
