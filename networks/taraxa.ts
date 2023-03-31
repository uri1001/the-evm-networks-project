import { type Network } from '@/networks/interfaces'

export const taraxa = {
    id: 841,
    name: 'Taraxa Mainnet',
    network: 'taraxa',
    nativeCurrency: { name: 'Tara', symbol: 'TARA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.mainnet.taraxa.io/'],
        },
        public: {
            http: ['https://rpc.mainnet.taraxa.io/'],
        },
    },
    blockExplorers: {
        taraxaExplorer: {
            name: 'Taraxa Explorer',
            urls: {
                apiUrl: 'https://explorer.mainnet.taraxa.io/api/',
                browserUrl: 'https://explorer.mainnet.taraxa.io/',
            },
        },
        default: {
            name: 'Taraxa Explorer',
            urls: {
                apiUrl: 'https://explorer.mainnet.taraxa.io/api/',
                browserUrl: 'https://explorer.mainnet.taraxa.io/',
            },
        },
    },
    testnet: false,
} as const satisfies Network
