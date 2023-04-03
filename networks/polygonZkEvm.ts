import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { polygonProvider } from '../providers'

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
        decimals: 18,
    },
    rpcNodes: {
        polygonProvider: {
            http: ['https://zkevm-rpc.com/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        public: {
            http: ['https://zkevm-rpc.com/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: ['https://zkevm-rpc.com/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
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
