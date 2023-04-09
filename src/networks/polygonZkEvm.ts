import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import { alchemy, polygonProvider, quicknode } from '../providers'

export const polygonZkEvm = {
    id: 1101,
    name: 'Polygon zkEVM',
    network: 'polygon-zkevm',
    infoUrl: 'https://polygon.technology/',
    docsUrl: 'https://wiki.polygon.technology/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1101.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: [`https://polygonzkevm-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://polygonzkevm-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        polygonProvider: {
            http: ['https://zkevm-rpc.com/'],
            provider: polygonProvider,
            authenticated: false,
        },
        public: {
            http: ['https://zkevm-rpc.com/'],
            provider: polygonProvider,
            authenticated: false,
        },
        default: {
            http: ['https://zkevm-rpc.com/'],
            provider: polygonProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        polygonScan: {
            name: 'zkEVM PolygonScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://zkevm.polygonscan.com/',
            apiUrl: 'https://api-zkevm.polygonscan.com/api/',
            docsUrl: 'https://zkevm.polygonscan.com/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'zkEVM PolygonScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://zkevm.polygonscan.com/',
            apiUrl: 'https://api-zkevm.polygonscan.com/api/',
            docsUrl: 'https://zkevm.polygonscan.com/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
