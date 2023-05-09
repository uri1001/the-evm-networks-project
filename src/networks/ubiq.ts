import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { ubiqProvider } from '../providers'

export const ubiq = {
    id: 8,
    name: 'Ubiq',
    network: 'ubiq',
    infoUrl: 'https://ubiqsmart.com',
    docsUrl: 'https://github.com/ubiq',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-8.json',
    nativeCurrency: {
        name: 'Ubiq Ether',
        symbol: 'UBQ',
        uSymbol: 'aUBQ',
        decimals: 18,
    },
    rpcNodes: {
        ubiq: {
            rpcNode: 'ubiq',
            type: EndpointType.Public,
            http: ['https://pyrus2.ubiqscan.io', 'https://rpc.octano.dev'],
            provider: ubiqProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://pyrus2.ubiqscan.io', 'https://rpc.octano.dev'],
            provider: ubiqProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://pyrus2.ubiqscan.io', 'https://rpc.octano.dev'],
            provider: ubiqProvider,
        },
    },
    blockExplorers: {
        ubiqscan: {
            name: 'Ubiqscan',
            blockExplorer: 'ubiqscan',
            type: BlockExplorerType.Null,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://ubiqscan.io',
            docsUrl: 'https://ubiqscan.io/d0x/gubiq',
        },
        default: {
            name: 'Ubiqscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Null,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://ubiqscan.io',
            docsUrl: 'https://ubiqscan.io/d0x/gubiq',
        },
    },
    testnet: false,
} as const satisfies Network
