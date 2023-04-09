import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { baseProvider, blast, quicknode } from '../providers'

export const base = {
    id: 8453,
    name: 'Base',
    network: 'base',
    infoUrl: 'https://base.org/',
    docsUrl: 'https://docs.base.org/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-8453.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        blast: {
            http: [''],
            provider: blast,
            authenticated: false,
        },
        base: {
            http: [''],
            provider: baseProvider,
            authenticated: false,
        },
        public: {
            http: [''],
            provider: baseProvider,
            authenticated: false,
        },
        default: {
            http: [''],
            provider: baseProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        baseExplorer: {
            name: 'Base Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: '',
            apiUrl: '',
            docsUrl: '',
            standard: BlockExplorerStandard.TBD,
        },
        basescan: {
            name: 'Basescan',
            type: BlockExplorerType.Etherscan,
            browserUrl: '',
            apiUrl: '',
            docsUrl: '',
            standard: BlockExplorerStandard.TBD,
        },
        default: {
            name: 'Basescan',
            type: BlockExplorerType.Etherscan,
            browserUrl: '',
            apiUrl: '',
            docsUrl: '',
            standard: BlockExplorerStandard.TBD,
        },
    },
    testnet: false,
} as const satisfies Network
