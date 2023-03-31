import { type Network } from '@/networks/interfaces'

export const moonbaseAlpha = {
    id: 1287,
    name: 'Moonbase Alpha',
    network: 'moonbase-alpha',
    nativeCurrency: {
        decimals: 18,
        name: 'DEV',
        symbol: 'DEV',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.api.moonbase.moonbeam.network/'],
            webSocket: ['wss://wss.api.moonbase.moonbeam.network/'],
        },
        public: {
            http: ['https://rpc.api.moonbase.moonbeam.network/'],
            webSocket: ['wss://wss.api.moonbase.moonbeam.network/'],
        },
    },
    blockExplorers: {
        moonscan: {
            name: 'Moonscan',
            urls: {
                apiUrl: 'https://moonbase.moonscan.io/api/',
                browserUrl: 'https://moonbase.moonscan.io/',
            },
        },
        default: {
            name: 'Moonscan',
            urls: {
                apiUrl: 'https://moonbase.moonscan.io/api/',
                browserUrl: 'https://moonbase.moonscan.io/',
            },
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1850686,
        },
    },
    testnet: true,
} as const satisfies Network
