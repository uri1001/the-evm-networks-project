import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, blast, fantomProvider, infura, omnia } from '../providers'

export const polygonMumbai = {
    id: 80001,
    name: 'Polygon Mumbai',
    network: 'maticmum',
    nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
    rpcNodes: {
        alchemy: {
            http: ['https://polygon-mumbai.g.alchemy.com/v2/'],
            webSocket: ['wss://polygon-mumbai.g.alchemy.com/v2/'],
        },
        infura: {
            http: ['https://polygon-mumbai.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: ['https://matic-mumbai.chainstacklabs.com/'],
        },
        public: {
            http: ['https://matic-mumbai.chainstacklabs.com/'],
        },
    },
    blockExplorers: {
        polygonScan: {
            name: 'PolygonScan',
            urls: {
                apiUrl: 'https://mumbai.polygonscan.com/api/',
                browserUrl: 'https://mumbai.polygonscan.com/',
            },
        },
        default: {
            name: 'PolygonScan',
            urls: {
                apiUrl: 'https://mumbai.polygonscan.com/api/',
                browserUrl: 'https://mumbai.polygonscan.com/',
            },
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 25770160,
        },
    },
    testnet: true,
} as const satisfies Network
