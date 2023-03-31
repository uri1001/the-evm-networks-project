import { type Network } from '@/networks/interfaces'

export const goChainTestnet = {
    id: 31337,
    name: 'GoChain Testnet',
    network: 'gochain-testnet',
    infoUrl: 'https://gochain.io',
    nativeCurrency: {
        name: 'GoChain Ether',
        symbol: 'GO',
        decimals: 18,
    },
    rpcUrls: {
        gochain: { http: ['https://testnet-rpc.gochain.io/'] },
        public: { http: ['https://testnet-rpc.gochain.io/'] },
        default: { http: ['https://testnet-rpc.gochain.io/'] },
    },
    blockExplorers: {
        gochainExplorer: {
            name: 'GoChain Testnet Explorer',
            browserUrl: 'https://testnet-explorer.gochain.io/',
            standard: 'EIP3091',
        },
        default: {
            name: 'GoChain Testnet Explorer',
            browserUrl: 'https://testnet-explorer.gochain.io/',
            standard: 'EIP3091',
        },
    },
    testnet: true,
} as const satisfies Network
