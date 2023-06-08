import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { alchemy, ankr, onerpc, pokt, polygonProvider } from '../providers'

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
            type: EndpointType.Authenticated,
            http: [`https://polygonzkevm-mainnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
            wss: [`wss://polygonzkevm-mainnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
            provider: alchemy,
        },
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [`https://polygon-zkevm-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: ['https://zkevm-polygon-mainnet-rpc.gateway.pokt.network'],
            provider: pokt,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/polygon_zkevm/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/polygon_zkevm'],
            provider: ankr,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Authenticated,
            http: [`https://1rpc.io/${EndpointAuth.Key}/zkevm`],
            provider: onerpc,
        },
        onerpcPublic: {
            rpcNode: 'onerpcPublic',
            type: EndpointType.Public,
            http: ['https://1rpc.io/zkevm'],
            provider: onerpc,
        },
        polygon: {
            rpcNode: 'polygon',
            type: EndpointType.Public,
            http: ['https://zkevm-rpc.com'],
            provider: polygonProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://zkevm-rpc.com'],
            provider: polygonProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://zkevm-rpc.com'],
            provider: polygonProvider,
        },
    },
    blockExplorers: {
        polygonscan: {
            name: 'zkEVM PolygonScan',
            blockExplorer: 'polygonscan',
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
