import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, blast, fantomProvider, infura, omnia } from '../providers'

export const polygon = {
    id: 137,
    name: 'Polygon',
    network: 'matic',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcNodes: {
        alchemy: {
            http: ['https://polygon-mainnet.g.alchemy.com/v2/'],
            webSocket: ['wss://polygon-mainnet.g.alchemy.com/v2/'],
        },
        infura: {
            http: ['https://polygon-mainnet.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: ['https://polygon-rpc.com/'],
        },
        public: {
            http: ['https://polygon-rpc.com/'],
        },
    },
    blockExplorers: {
        polygonScan: {
            name: 'PolygonScan',
            urls: { apiUrl: 'https://polygonscan.com/api/', browserUrl: 'https://polygonscan.com/' },
        },
        default: {
            name: 'PolygonScan',
            urls: { apiUrl: 'https://polygonscan.com/api/', browserUrl: 'https://polygonscan.com/' },
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160,
        },
    },
    testnet: false,
} as const satisfies Network
