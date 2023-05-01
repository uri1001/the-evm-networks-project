import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { alchemy, ankr, pokt, polygonProvider } from '../providers'

export const polygonZkEvm = {
    id: 1101,
    name: 'Polygon zkEVM',
    network: 'polygonZkEvm',
    infoUrl: 'https://polygon.technology',
    docsUrl: 'https://wiki.polygon.technology',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1101.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            rpcNode: 'alchemy',
            http: [`https://polygonzkevm-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://polygonzkevm-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        pokt: {
            rpcNode: 'pokt',
            http: [
                `https://polygon-zkevm-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
            ],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: ['https://zkevm-polygon-mainnet-rpc.gateway.pokt.network'],
            provider: pokt,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/polygon_zkevm'],
            provider: ankr,
            authenticated: false,
        },
        polygon: {
            rpcNode: 'polygon',
            http: ['https://zkevm-rpc.com'],
            provider: polygonProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://zkevm-rpc.com'],
            provider: polygonProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://zkevm-rpc.com'],
            provider: polygonProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        polygonScan: {
            name: 'zkEVM PolygonScan',
            blockExplorer: 'polygonScan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://zkevm.polygonscan.com',
            apiUrl: 'https://api-zkevm.polygonscan.com/api',
            docsUrl: 'https://zkevm.polygonscan.com/apis',
        },
        default: {
            name: 'zkEVM PolygonScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://zkevm.polygonscan.com',
            apiUrl: 'https://api-zkevm.polygonscan.com/api',
            docsUrl: 'https://zkevm.polygonscan.com/apis',
        },
    },
    testnet: false,
} as const satisfies Network
