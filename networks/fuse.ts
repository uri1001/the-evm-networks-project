import { type Network } from '@/networks/interfaces'

export const fuse = {
    id: 122,
    name: 'Fuse Mainnet',
    network: 'fuse-mainnet',
    infoUrl: 'https://fuse.io/',
    nativeCurrency: {
        name: 'Fuse',
        symbol: 'FUSE',
        decimals: 18,
    },
    rpcUrls: {
        fuse: { http: ['https://rpc.fuse.io/'] },
        public: { http: ['https://rpc.fuse.io/'] },
        default: { http: ['https://rpc.fuse.io/'] },
    },
    blockExplorers: {
        fuseExplorer: {
            name: 'Fuse Explorer',
            browserUrl: 'https://explorer.fuse.io/',
            apiUrl: 'https://explorer.fuse.io/api/',
            docsUrl: 'https://explorer.fuse.io/api-docs/',
            standard: 'EIP3091',
        },
        default: {
            name: 'Fuse Explorer',
            browserUrl: 'https://explorer.fuse.io/',
            apiUrl: 'https://explorer.fuse.io/api/',
            docsUrl: 'https://explorer.fuse.io/api-docs/',
            standard: 'EIP3091',
        },
    },
    testnet: false,
} as const satisfies Network
