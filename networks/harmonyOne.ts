import { type Network } from '@/networks/interfaces'

export const harmonyOne = {
    id: 1666600000,
    name: 'Harmony One',
    network: 'harmony',
    nativeCurrency: {
        name: 'Harmony',
        symbol: 'ONE',
        decimals: 18,
    },
    rpcUrls: {
        public: { http: ['https://rpc.ankr.com/harmony/'] },
        default: { http: ['https://rpc.ankr.com/harmony/'] },
    },
    blockExplorers: {
        harmonyExplorer: {
            name: 'Harmony Explorer',
            urls: {
                apiUrl: 'https://explorer.harmony.one/api/',
                browserUrl: 'https://explorer.harmony.one/',
            },
        },
        default: {
            name: 'Harmony Explorer',
            urls: {
                apiUrl: 'https://explorer.harmony.one/api/',
                browserUrl: 'https://explorer.harmony.one/',
            },
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 24185753,
        },
    },
    testnet: false,
} as const satisfies Network
