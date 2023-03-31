import { type Network } from '@/networks/interfaces'

export const flareTestnet = {
    id: 16,
    name: 'Flare Testnet Coston',
    network: 'flare-testnet-coston',
    infoUrl: 'https://flare.xyz',
    nativeCurrency: {
        name: 'Coston Flare',
        symbol: 'CFLR',
        decimals: 18,
    },
    rpcUrls: {
        public: { http: ['https://coston-api.flare.network/ext/bc/C/rpc/'] },
        default: { http: ['https://coston-api.flare.network/ext/bc/C/rpc/'] },
    },
    blockExplorers: {
        costonExplorer: {
            name: 'Coston Explorer',
            browserUrl: 'https://coston-explorer.flare.network/',
            apiUrl: 'https://coston-explorer.flare.network/api/',
            docsUrl: 'https://coston-explorer.flare.network/api-docs/',
            standard: 'EIP3091',
        },
        default: {
            name: 'Coston Explorer',
            browserUrl: 'https://coston-explorer.flare.network/',
            apiUrl: 'https://coston-explorer.flare.network/api/',
            docsUrl: 'https://coston-explorer.flare.network/api-docs/',
            standard: 'EIP3091',
        },
    },
    testnet: true,
} as const satisfies Network
