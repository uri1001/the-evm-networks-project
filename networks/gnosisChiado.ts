import { type Network } from '@/networks/interfaces'

export const gnosisChiado = {
    id: 10200,
    name: 'Gnosis Chiado',
    network: 'chiado',
    nativeCurrency: {
        decimals: 18,
        name: 'Gnosis',
        symbol: 'xDAI',
    },
    rpcUrls: {
        default: { http: ['https://rpc.chiadochain.net/'] },
        public: { http: ['https://rpc.chiadochain.net/'] },
    },
    blockExplorers: {
        blockscout: {
            name: 'Blockscout',
            urls: {
                apiUrl: 'https://blockscout.chiadochain.net/api/',
                browserUrl: 'https://blockscout.chiadochain.net/',
            },
        },
        gnosisExplorer: {
            name: 'Gnosis Chiado Blockchain Explorer',
            urls: {
                apiUrl: 'https://blockscout.com/gnosis/chiado/api/',
                browserUrl: 'https://blockscout.com/gnosis/chiado/',
            },
        },
        default: {
            name: 'Gnosis Chiado Blockchain Explorer',
            urls: {
                apiUrl: 'https://blockscout.com/gnosis/chiado/api/',
                browserUrl: 'https://blockscout.com/gnosis/chiado/',
            },
        },
    },
    testnet: true,
} as const satisfies Network
