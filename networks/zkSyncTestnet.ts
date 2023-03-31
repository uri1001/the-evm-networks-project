import { type Network } from '@/networks/interfaces'

export const zkSyncTestnet = {
    id: 280,
    name: 'zkSync Testnet',
    network: 'zksync-testnet',
    nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://zksync2-testnet.zksync.dev/'],
            webSocket: ['wss://zksync2-testnet.zksync.dev/ws/'],
        },
        public: {
            http: ['https://zksync2-testnet.zksync.dev/'],
            webSocket: ['wss://zksync2-testnet.zksync.dev/ws/'],
        },
    },
    blockExplorers: {
        zkExplorer: {
            name: 'zkExplorer',
            urls: {
                apiUrl: 'https://goerli.explorer.zksync.io/api/',
                browserUrl: 'https://goerli.explorer.zksync.io/',
            },
        },
        default: {
            name: 'zkExplorer',
            urls: {
                apiUrl: 'https://goerli.explorer.zksync.io/api/',
                browserUrl: 'https://goerli.explorer.zksync.io/',
            },
        },
    },
    testnet: true,
} as const satisfies Network
