import { type Network } from '@/networks/interfaces'

export const iotexTestnet = {
    id: 4690,
    name: 'IoTeX Testnet',
    network: 'iotex-testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'IoTeX',
        symbol: 'IOTX',
    },
    rpcUrls: {
        default: {
            http: ['https://babel-api.testnet.iotex.io/'],
            webSocket: ['wss://babel-api.testnet.iotex.io/'],
        },
        public: {
            http: ['https://babel-api.testnet.iotex.io/'],
            webSocket: ['wss://babel-api.testnet.iotex.io/'],
        },
    },
    blockExplorers: {
        iotexScan: {
            name: 'IoTeXScan',
            urls: {
                apiUrl: 'https://testnet.iotexscan.io/api/',
                browserUrl: 'https://testnet.iotexscan.io/',
            },
        },
        default: {
            name: 'IoTeXScan',
            urls: {
                apiUrl: 'https://testnet.iotexscan.io/api/',
                browserUrl: 'https://testnet.iotexscan.io/',
            },
        },
    },
    testnet: true,
} as const satisfies Network
