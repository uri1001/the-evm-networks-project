import { type Network } from '@/networks/interfaces'

export const fuseSparknet = {
    id: 123,
    name: 'Fuse Sparknet',
    network: 'fuse-sparknet',
    infoUrl: 'https://fuse.io/',
    nativeCurrency: {
        name: 'Spark',
        symbol: 'SPARK',
        decimals: 18,
    },
    rpcUrls: {
        fuse: { http: ['https://rpc.fusespark.io/'] },
        public: { http: ['https://rpc.fusespark.io/'] },
        default: { http: ['https://rpc.fusespark.io/'] },
    },
    blockExplorers: {
        fusesparkExplorer: {
            name: 'Fuse Sparknet Explorer',
            browserUrl: 'https://explorer.fusespark.io//',
            apiUrl: 'https://explorer.fusespark.io/api/',
            docsUrl: 'https://explorer.fusespark.io/api-docs/',
            standard: 'EIP3091',
        },
        default: {
            name: 'Fuse Sparknet Explorer',
            browserUrl: 'https://explorer.fusespark.io//',
            apiUrl: 'https://explorer.fusespark.io/api/',
            docsUrl: 'https://explorer.fusespark.io/api-docs/',
            standard: 'EIP3091',
        },
    },
    testnet: true,
} as const satisfies Network
