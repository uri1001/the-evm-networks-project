import { type Network } from '@/networks/interfaces'

export const flare = {
    id: 14,
    name: 'Flare Mainnet',
    network: 'flare-mainnet',
    infoUrl: 'https://flare.xyz',
    nativeCurrency: {
        name: 'Flare',
        symbol: 'FLR',
        decimals: 18,
    },
    rpcUrls: {
        flare: { http: ['https://flare-api.flare.network/ext/C/rpc/'] },
        public: { http: ['https://flare-api.flare.network/ext/C/rpc/'] },
        default: { http: ['https://flare-api.flare.network/ext/C/rpc/'] },
    },
    blockExplorers: {
        flareExplorer: {
            name: 'Flare Explorer',
            browserUrl: 'https://flare-explorer.flare.network/',
            apiUrl: 'https://flare-explorer.flare.network/api/',
            docsUrl: 'https://flare-explorer.flare.network/api-docs/',
            standard: 'EIP3091',
        },
        default: {
            name: 'Flare Explorer',
            browserUrl: 'https://flare-explorer.flare.network/',
            apiUrl: 'https://flare-explorer.flare.network/api/',
            docsUrl: 'https://flare-explorer.flare.network/api-docs/',
            standard: 'EIP3091',
        },
    },
    testnet: false,
} as const satisfies Network
