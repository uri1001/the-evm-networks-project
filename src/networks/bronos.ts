import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { bronosProvider } from '../providers'

export const bronos = {
    id: 1039,
    name: 'Bronos',
    network: 'bronos',
    infoUrl: 'https://bronos.org',
    docsUrl: 'https://docs.bronos.org',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1039.json',
    nativeCurrency: {
        name: 'Bronos Coin',
        symbol: 'BRO',
        uSymbol: 'aBRO',
        decimals: 18,
    },
    rpcNodes: {
        bronos: {
            rpcNode: 'bronos',
            type: EndpointType.Public,
            http: ['https://evm.bronos.org'],
            provider: bronosProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://evm.bronos.org'],
            provider: bronosProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://evm.bronos.org'],
            provider: bronosProvider,
        },
    },
    blockExplorers: {
        default: {
            name: '',
            blockExplorer: '',
            type: BlockExplorerType.Null,
            standard: BlockExplorerStandard.Null,
            browserUrl: '',
            apiUrl: '',
            docsUrl: '',
        },
    },
    testnet: false,
} as const satisfies Network
