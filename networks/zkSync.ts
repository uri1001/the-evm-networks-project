import { type Network } from '@/networks/interfaces'

export const zkSync = {
    id: 324,
    name: 'zkSync',
    network: 'zksync',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: {
            http: ['https://zksync2-mainnet.zksync.io/'],
            webSocket: ['wss://zksync2-mainnet.zksync.io/ws/'],
        },
        public: {
            http: ['https://zksync2-mainnet.zksync.io/'],
            webSocket: ['wss://zksync2-mainnet.zksync.io/ws/'],
        },
    },
    blockExplorers: {
        zkExplorer: {
            name: 'zkExplorer',
            urls: {
                apiUrl: 'https://explorer.zksync.io/api/',
                browserUrl: 'https://explorer.zksync.io/',
            },
        },
        default: {
            name: 'zkExplorer',
            urls: {
                apiUrl: 'https://explorer.zksync.io/api/',
                browserUrl: 'https://explorer.zksync.io/',
            },
        },
    },
    testnet: false,
} as const satisfies Network
