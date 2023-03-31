import { type Network } from '@/networks/interfaces'

export const milkomedaC1 = {
    id: 2001,
    name: 'Milkomeda C1 Mainnet',
    network: 'milkomeda-c1 mainnet',
    infoUrl: 'https://milkomeda.com',
    nativeCurrency: { name: 'MilkADA', symbol: 'mADA', decimals: 18 },
    rpcUrls: {
        milkomeda: {
            http: ['https://rpc-mainnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
        },
        public: {
            http: ['https://rpc-mainnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
        },
        default: {
            http: ['https://rpc-mainnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
        },
    },
    blockExplorers: {
        milkomedaExplorer: {
            name: 'Milkomeda C1 Explorer',
            browserUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/',
            apiUrl: 'https://localhost:4000/api/',
            docsUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/api-docs/',
            standard: 'none',
        },
        default: {
            name: 'Milkomeda C1 Explorer',
            browserUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/',
            apiUrl: 'https://localhost:4000/api/',
            docsUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/api-docs/',
            standard: 'none',
        },
    },
    testnet: false,
} as const satisfies Network
