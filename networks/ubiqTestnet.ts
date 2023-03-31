import { type Network } from '@/networks/interfaces'

export const ubiqTestnet = {
    id: 9,
    name: 'Ubiq Network Testnet',
    network: 'tubiq',
    infoUrl: 'https://ethersocial.org',
    nativeCurrency: {
        name: 'Ubiq Testnet Ether',
        symbol: 'TUBQ',
        decimals: 18,
    },
    rpcUrls: {
        public: { http: [''] },
        default: { http: [''] },
    },
    testnet: true,
} as const satisfies Network
