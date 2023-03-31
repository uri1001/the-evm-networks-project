import { type Network } from '@/networks/interfaces'

export const taraxaTestnet = {
    id: 842,
    name: 'Taraxa Testnet',
    network: 'taraxa-testnet',
    nativeCurrency: { name: 'Tara', symbol: 'TARA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.taraxa.io/'],
        },
        public: {
            http: ['https://rpc.testnet.taraxa.io/'],
        },
    },
    blockExplorers: {
        taraxaExplorer: {
            name: 'Taraxa Explorer',
            urls: {
                apiUrl: 'https://explorer.testnet.taraxa.io/api/',
                browserUrl: 'https://explorer.testnet.taraxa.io/',
            },
        },
        default: {
            name: 'Taraxa Explorer',
            urls: {
                apiUrl: 'https://explorer.testnet.taraxa.io/api/',
                browserUrl: 'https://explorer.testnet.taraxa.io/',
            },
        },
    },
    testnet: true,
} as const satisfies Network
