import { type Network } from '@/networks/interfaces'

export const gnosis = {
    id: 100,
    name: 'Gnosis',
    network: 'gnosis',
    nativeCurrency: {
        decimals: 18,
        name: 'Gnosis',
        symbol: 'xDAI',
    },
    rpcUrls: {
        default: { http: ['https://rpc.gnosischain.com/'] },
        public: { http: ['https://rpc.gnosischain.com/'] },
    },
    blockExplorers: {
        gnosisScan: {
            name: 'GnosisScan',
            urls: { apiUrl: 'https://gnosisscan.io/api/', browserUrl: 'https://gnosisscan.io/' },
        },
        gnosisExplorer: {
            name: 'Gnosis Blockchain Explorer',
            urls: {
                apiUrl: 'https://blockscout.com/xdai/mainnet/api/',
                browserUrl: 'https://blockscout.com/xdai/mainnet/',
            },
        },
        default: {
            name: 'Gnosis Blockchain Explorer',
            urls: {
                apiUrl: 'https://blockscout.com/xdai/mainnet/api/',
                browserUrl: 'https://blockscout.com/xdai/mainnet/',
            },
        },
    },
    testnet: false,
} as const satisfies Network
