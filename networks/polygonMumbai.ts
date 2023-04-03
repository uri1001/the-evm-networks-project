import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { alchemy, ankr, blast, blockpi, infura, omnia, polygonProvider } from '../providers'

export const polygonMumbai = {
    id: 80001,
    name: 'Polygon Mumbai',
    network: 'maticmum',
    infoUrl: 'https://polygon.technology/',
    docsUrl: 'https://wiki.polygon.technology/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-80001.json',
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: ['https://polygon-mumbai.g.alchemy.com/v2/'],
            wss: ['wss://polygon-mumbai.g.alchemy.com/v2/'],
            provider: alchemy,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        infura: {
            http: ['https://polygon-mumbai.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        blast: {
            http: ['https://polygon-testnet.public.blastapi.io/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        blockpi: {
            http: ['https://polygon-mumbai.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        ankr: {
            http: ['https://rpc.ankr.com/polygon_mumbai/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/matic/mumbai/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        polygonProvider: {
            http: ['https://rpc-mumbai.matic.today/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        public: {
            http: ['https://rpc-mumbai.matic.today/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: ['https://rpc-mumbai.matic.today/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
    },
    blockExplorers: {
        polygonScan: {
            name: 'Mumbai PolygonScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://mumbai.polygonscan.com/',
            apiUrl: 'https://api-testnet.polygonscan.com/',
            docsUrl: 'https://docs.polygonscan.com/v/mumbai-polygonscan/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Mumbai PolygonScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://mumbai.polygonscan.com/',
            apiUrl: 'https://api-testnet.polygonscan.com/',
            docsUrl: 'https://docs.polygonscan.com/v/mumbai-polygonscan/',
            standard: BlockExplorerStandard.EIP3091,
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
