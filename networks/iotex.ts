import { type Network } from '@/networks/interfaces'

export const iotex = {
    id: 4689,
    name: 'IoTeX',
    network: 'iotex',
    nativeCurrency: {
        decimals: 18,
        name: 'IoTeX',
        symbol: 'IOTX',
    },
    rpcUrls: {
        default: {
            http: ['https://babel-api.mainnet.iotex.io/'],
            webSocket: ['wss://babel-api.mainnet.iotex.io/'],
        },
        public: {
            http: ['https://babel-api.mainnet.iotex.io/'],
            webSocket: ['wss://babel-api.mainnet.iotex.io/'],
        },
    },
    blockExplorers: {
        iotexScan: {
            name: 'IoTeXScan',
            urls: { apiUrl: 'https://iotexscan.io/api/', browserUrl: 'https://iotexscan.io/' },
        },
        default: {
            name: 'IoTeXScan',
            urls: { apiUrl: 'https://iotexscan.io/api/', browserUrl: 'https://iotexscan.io/' },
        },
    },
    testnet: false,
} as const satisfies Network
