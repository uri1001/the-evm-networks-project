import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import {
    alchemy,
    ankr,
    blast,
    blockpi,
    infura,
    omnia,
    polygonProvider,
    quicknode,
} from '../providers'

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
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: [`https://polygon-mumbai.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://polygon-mumbai.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            http: [`https://polygon-mumbai.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        blast: {
            http: ['https://polygon-testnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            http: ['https://polygon-mumbai.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            authenticated: false,
        },
        ankr: {
            http: ['https://rpc.ankr.com/polygon_mumbai/'],
            provider: ankr,
            authenticated: false,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/matic/mumbai/public/'],
            provider: omnia,
            authenticated: false,
        },
        polygonProvider: {
            http: ['https://rpc-mumbai.matic.today/'],
            provider: polygonProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc-mumbai.matic.today/'],
            provider: polygonProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc-mumbai.matic.today/'],
            provider: polygonProvider,
            authenticated: false,
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
