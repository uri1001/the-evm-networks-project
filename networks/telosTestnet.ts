import { type Network } from '@/networks/interfaces'

export const telosTestnet = {
    id: 41,
    name: 'Telos',
    network: 'telosTestnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Telos',
        symbol: 'TLOS',
    },
    rpcUrls: {
        default: { http: ['https://testnet.telos.net/evm/'] },
        public: { http: ['https://testnet.telos.net/evm/'] },
    },
    blockExplorers: {
        teloscan: {
            name: 'Teloscan Testnet',
            urls: {
                apiUrl: 'https://testnet.teloscan.io/api/',
                browserUrl: 'https://testnet.teloscan.io/',
            },
        },
        default: {
            name: 'Teloscan Testnet',
            urls: {
                apiUrl: 'https://testnet.teloscan.io/api/',
                browserUrl: 'https://testnet.teloscan.io/',
            },
        },
    },
    testnet: true,
} as const satisfies Network
