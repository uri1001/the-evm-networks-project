import { type Network } from '@/networks/interfaces'

export const ubiq = {
    id: 8,
    name: 'Ubiq',
    network: 'ubiq',
    infoUrl: 'https://ubiqsmart.com',
    nativeCurrency: {
        name: 'Ubiq Ether',
        symbol: 'UBQ',
        decimals: 18,
    },
    rpcUrls: {
        octano: { http: ['https://rpc.octano.dev/'] },
        ubiqscan: { http: ['https://pyrus2.ubiqscan.io/'] },
        public: { http: ['https://rpc.octano.dev/'] },
        default: { http: ['https://rpc.octano.dev/'] },
    },
    blockExplorers: {
        ubiqscan: {
            name: 'Ubiqscan',
            browserUrl: 'https://ubiqscan.io/',
            apiUrl: '',
            docsUrl: '',
            standard: 'EIP3091',
        },
        default: {
            name: 'Ubiqscan',
            browserUrl: 'https://ubiqscan.io/',
            apiUrl: '',
            docsUrl: '',
            standard: 'EIP3091',
        },
    },
    testnet: false,
} as const satisfies Network
