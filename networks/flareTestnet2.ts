import { type Network } from '@/networks/interfaces'

export const flareTestnet2 = {
    id: 114,
    name: 'Flare Testnet Coston2',
    network: 'flare-testnet-coston2',
    infoUrl: 'https://flare.xyz',
    nativeCurrency: {
        name: 'Coston2 Flare',
        symbol: 'C2FLR',
        decimals: 18,
    },
    rpcUrls: {
        default: { http: ['https://coston2-api.flare.network/ext/C/rpc/'] },
        public: { http: ['https://coston2-api.flare.network/ext/C/rpc/'] },
    },
    blockExplorers: {
        coston2Explorer: {
            name: 'Coston2 Explorer',
            browserUrl: 'https://coston2-explorer.flare.network/',
            apiUrl: 'https://coston2-explorer.flare.network/api/',
            docsUrl: 'https://coston2-explorer.flare.network/api-docs/',
            standard: 'EIP3091',
        },
        default: {
            name: 'Coston2 Explorer',
            browserUrl: 'https://coston2-explorer.flare.network/',
            apiUrl: 'https://coston2-explorer.flare.network/api/',
            docsUrl: 'https://coston2-explorer.flare.network/api-docs/',
            standard: 'EIP3091',
        },
    },
    testnet: true,
} as const satisfies Network
