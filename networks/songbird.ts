import { type Network } from '@/networks/interfaces'

export const songbird = {
    id: 19,
    name: 'Songbird Mainnet',
    network: 'songbird-canary-network',
    infoUrl: 'https://flare.xyz',
    nativeCurrency: {
        name: 'Songbird',
        symbol: 'SGB',
        decimals: 18,
    },
    rpcUrls: {
        towolabs: { http: ['https://songbird.towolabs.com/rpc/'] },
        ftso: { http: ['https://sgb-rpc.ftso.eu/'] },
        lightft: { http: ['https://sgb.lightft.so/rpc/'] },
        flare: { http: ['https://songbird-api.flare.network/ext/C/rpc/'] },
        public: { http: ['https://songbird-api.flare.network/ext/C/rpc/'] },
        default: { http: ['https://songbird-api.flare.network/ext/C/rpc/'] },
    },
    blockExplorers: {
        songbirdExplorer: {
            name: 'Songbird Explorer',
            browserUrl: 'https://songbird-explorer.flare.network/',
            apiUrl: 'https://songbird-explorer.flare.network/api/',
            docsUrl: 'https://songbird-explorer.flare.network/api-docs/',
            standard: 'EIP3091',
        },
        default: {
            name: 'Songbird Explorer',
            browserUrl: 'https://songbird-explorer.flare.network/',
            apiUrl: 'https://songbird-explorer.flare.network/api/',
            docsUrl: 'https://songbird-explorer.flare.network/api-docs/',
            standard: 'EIP3091',
        },
    },
    testnet: false,
} as const satisfies Network
