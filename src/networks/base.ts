import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { baseProvider } from '../providers'

export const base = {
    id: 8453,
    name: 'Base',
    network: 'base',
    infoUrl: 'https://base.org',
    docsUrl: 'https://docs.base.org',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-8453.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        base: {
            rpcNode: 'base',
            type: EndpointType.Null,
            http: [''],
            provider: baseProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Null,
            http: [''],
            provider: baseProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Null,
            http: [''],
            provider: baseProvider,
        },
    },
    blockExplorers: {
        baseExplorer: {
            name: 'Base Explorer',
            blockExplorer: 'baseExplorer',
            type: BlockExplorerType.Null,
            standard: BlockExplorerStandard.Null,
            browserUrl: '',
            apiUrl: '',
            docsUrl: '',
        },
        basescan: {
            name: 'Basescan',
            blockExplorer: 'basescan',
            type: BlockExplorerType.Null,
            standard: BlockExplorerStandard.Null,
            browserUrl: '',
            apiUrl: '',
            docsUrl: '',
        },
        default: {
            name: 'Basescan',
            blockExplorer: 'default',
            type: BlockExplorerType.Null,
            standard: BlockExplorerStandard.Null,
            browserUrl: '',
            apiUrl: '',
            docsUrl: '',
        },
    },
    testnet: false,
} as const satisfies Network
