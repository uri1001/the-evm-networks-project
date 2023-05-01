import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { baseProvider, blast } from '../providers'

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
        blast: {
            rpcNode: 'blast',
            http: [''],
            provider: blast,
            authenticated: false,
        },
        base: {
            rpcNode: 'base',
            http: [''],
            provider: baseProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: [''],
            provider: baseProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: [''],
            provider: baseProvider,
            authenticated: false,
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
