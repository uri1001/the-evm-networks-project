import { type Network } from '@/networks/interfaces'

export const goChain = {
    id: 60,
    name: 'GoChain',
    network: 'gochain',
    infoUrl: 'https://gochain.io',
    nativeCurrency: {
        name: 'GoChain Ether',
        symbol: 'GO',
        decimals: 18,
    },
    rpcUrls: {
        gochain: { http: ['https://rpc.gochain.io/'] },
        public: { http: ['https://rpc.gochain.io/'] },
        default: { http: ['https://rpc.gochain.io/'] },
    },
    blockExplorers: {
        gochainExplorer: {
            name: 'GoChain Explorer',
            browserUrl: 'https://explorer.gochain.io/',
            standard: 'EIP3091',
        },
        default: {
            name: 'GoChain Explorer',
            browserUrl: 'https://explorer.gochain.io/',
            standard: 'EIP3091',
        },
    },
    testnet: false,
} as const satisfies Network
