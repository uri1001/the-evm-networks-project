import { type Network } from '@/networks/interfaces'

export const klaytn = {
    id: 8217,
    name: 'Klaytn',
    network: 'klaytn',
    nativeCurrency: {
        decimals: 18,
        name: 'Klaytn',
        symbol: 'KLAY',
    },
    rpcUrls: {
        default: { http: ['https://cypress.fautor.app/archive/'] },
        public: { http: ['https://cypress.fautor.app/archive/'] },
    },
    blockExplorers: {
        klaytnScope: {
            name: 'KlaytnScope',
            urls: {
                apiUrl: 'https://scope.klaytn.com/api/',
                browserUrl: 'https://scope.klaytn.com/',
            },
        },
        default: {
            name: 'KlaytnScope',
            urls: {
                apiUrl: 'https://scope.klaytn.com/api/',
                browserUrl: 'https://scope.klaytn.com/',
            },
        },
    },
} as const satisfies Network
