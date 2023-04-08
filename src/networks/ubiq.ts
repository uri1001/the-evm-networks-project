import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { ubiqProvider } from '../providers'

export const ubiq = {
    id: 8,
    name: 'Ubiq',
    network: 'ubiq',
    infoUrl: 'https://ubiqsmart.com',
    docsUrl: 'https://github.com/ubiq/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-8.json',
    nativeCurrency: {
        name: 'Ubiq Ether',
        symbol: 'UBQ',
        uSymbol: 'aUBQ',
        decimals: 18,
    },
    rpcNodes: {
        ubiqProvider: {
            http: ['https://pyrus2.ubiqscan.io/', 'https://rpc.octano.dev/'],
            provider: ubiqProvider,
            authenticated: false,
        },
        public: {
            http: ['https://pyrus2.ubiqscan.io/', 'https://rpc.octano.dev/'],
            provider: ubiqProvider,
            authenticated: false,
        },
        default: {
            http: ['https://pyrus2.ubiqscan.io/', 'https://rpc.octano.dev/'],
            provider: ubiqProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        ubiqscan: {
            name: 'Ubiqscan',
            type: BlockExplorerType.Null,
            browserUrl: 'https://ubiqscan.io/',
            docsUrl: 'https://ubiqscan.io/d0x/gubiq/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Ubiqscan',
            type: BlockExplorerType.Null,
            browserUrl: 'https://ubiqscan.io/',
            docsUrl: 'https://ubiqscan.io/d0x/gubiq/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
