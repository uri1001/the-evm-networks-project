import { type Network } from '@/networks/interfaces'

export const songbirdTestnet = {
    id: 16,
    name: 'Coston',
    network: 'coston',
    nativeCurrency: {
        decimals: 18,
        name: 'costonflare',
        symbol: 'CFLR',
    },
    rpcUrls: {
        default: { http: ['https://coston-api.flare.network/ext/C/rpc/'] },
        public: { http: ['https://coston-api.flare.network/ext/C/rpc/'] },
    },
    blockExplorers: {
        costonExplorer: {
            name: 'Coston Explorer',
            urls: {
                apiUrl: 'https://coston-explorer.flare.network/api/',
                browserUrl: 'https://coston-explorer.flare.network/',
            },
        },
        default: {
            name: 'Coston Explorer',
            urls: {
                apiUrl: 'https://coston-explorer.flare.network/api/',
                browserUrl: 'https://coston-explorer.flare.network/',
            },
        },
    },
    testnet: true,
} as const satisfies Network
