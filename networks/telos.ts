import { type Network } from '@/networks/interfaces'

export const telos = {
    id: 40,
    name: 'Telos',
    network: 'telos',
    nativeCurrency: {
        decimals: 18,
        name: 'Telos',
        symbol: 'TLOS',
    },
    rpcUrls: {
        default: { http: ['https://mainnet.telos.net/evm/'] },
        public: { http: ['https://mainnet.telos.net/evm/'] },
    },
    blockExplorers: {
        teloscan: {
            name: 'Teloscan',
            urls: { apiUrl: 'https://www.teloscan.io/api/', browserUrl: 'https://www.teloscan.io/' },
        },
        default: {
            name: 'Teloscan',
            urls: { apiUrl: 'https://www.teloscan.io/api/', browserUrl: 'https://www.teloscan.io/' },
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 246530709,
        },
    },
    testnet: false,
} as const satisfies Network
