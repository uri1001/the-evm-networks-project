import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { crossbellProvider } from '../providers'

export const crossbell = {
    id: 3737,
    name: 'Crossbell',
    network: 'crossbell',
    infoUrl: 'https://crossbell.io',
    docsUrl: 'https://github.com/Crossbell-Box/Crossbell-Contracts/wiki',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-3737.json',
    nativeCurrency: {
        name: 'Crossbell Token',
        symbol: 'CSB',
        uSymbol: 'aCSB',
        decimals: 18,
    },
    rpcNodes: {
        crossbell: {
            rpcNode: 'crossbell',
            type: EndpointType.Public,
            http: ['https://rpc.crossbell.io'],
            provider: crossbellProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.crossbell.io'],
            provider: crossbellProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.crossbell.io'],
            provider: crossbellProvider,
        },
    },
    blockExplorers: {
        crossbellExplorer: {
            name: 'Crossbell Explorer',
            blockExplorer: 'crossbellExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://scan.crossbell.io',
            apiUrl: 'https://scan.crossbell.io/api',
            docsUrl: 'https://scan.crossbell.io/api-docs',
        },
        default: {
            name: 'Crossbell Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://scan.crossbell.io',
            apiUrl: 'https://scan.crossbell.io/api',
            docsUrl: 'https://scan.crossbell.io/api-docs',
        },
    },
    testnet: false,
} as const satisfies Network
