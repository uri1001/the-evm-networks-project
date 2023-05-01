import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import {
    alchemy,
    ankr,
    blast,
    blockpi,
    chainstack,
    infura,
    omnia,
    pokt,
    polygonProvider,
} from '../providers'

export const polygonMumbai = {
    id: 80001,
    name: 'Polygon Mumbai',
    network: 'polygonMumbai',
    infoUrl: 'https://polygon.technology',
    docsUrl: 'https://wiki.polygon.technology',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-80001.json',
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            rpcNode: 'alchemy',
            http: [`https://polygon-mumbai.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://polygon-mumbai.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            rpcNode: 'infura',
            http: [`https://polygon-mumbai.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        pokt: {
            rpcNode: 'pokt',
            http: [`https://polygon-mumbai.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`],
            provider: pokt,
            authenticated: true,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://polygon-testnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://polygon-testnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://polygon-testnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            rpcNode: 'blockpi',
            http: [`https://polygon-mumbai.blockpi.network/v1/rpc/${EndpointAuth.PrivateKey}`],
            wss: [`wss://polygon-mumbai.blockpi.network/v1/ws/${EndpointAuth.PrivateKey}`],
            provider: blockpi,
            authenticated: true,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            http: ['https://polygon-mumbai.blockpi.network/v1/rpc/public'],
            provider: blockpi,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/polygon_mumbai'],
            provider: ankr,
            authenticated: false,
        },
        omnia: {
            rpcNode: 'omnia',
            http: ['https://endpoints.omniatech.io/v1/matic/mumbai/public'],
            provider: omnia,
            authenticated: false,
        },
        polygon: {
            rpcNode: 'polygon',
            http: ['https://rpc-mumbai.matic.today'],
            provider: polygonProvider,
            authenticated: false,
        },
        chainstack: {
            rpcNode: 'chainstack',
            http: ['https://matic-mumbai.chainstacklabs.com'],
            provider: chainstack,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://matic-mumbai.chainstacklabs.com'],
            provider: chainstack,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://matic-mumbai.chainstacklabs.com'],
            provider: chainstack,
            authenticated: false,
        },
    },
    blockExplorers: {
        polygonScan: {
            name: 'Mumbai PolygonScan',
            blockExplorer: 'polygonScan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://mumbai.polygonscan.com',
            apiUrl: 'https://api-testnet.polygonscan.com',
            docsUrl: 'https://docs.polygonscan.com/v/mumbai-polygonscan',
        },
        default: {
            name: 'Mumbai PolygonScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://mumbai.polygonscan.com',
            apiUrl: 'https://api-testnet.polygonscan.com',
            docsUrl: 'https://docs.polygonscan.com/v/mumbai-polygonscan',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 25444704,
            deployTxHash: '0xec60edd53f24800ae2f27ff3c364b05e86cc26165fc6183aca3a879e90f3d345',
        },
    },
    testnet: true,
    mainnetId: 137,
} as const satisfies Network
