import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { telosProvider } from '../providers'

export const telosTestnet = {
    id: 41,
    name: 'Telos',
    network: 'telos-testnet',
    infoUrl: 'https://telos.net/',
    docsUrl: 'https://docs.telos.net/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-41.json',
    nativeCurrency: {
        name: 'Test Telos',
        symbol: 'tTLOS',
        uSymbol: 'tARC',
        decimals: 18,
    },
    rpcNodes: {
        telosProvider: {
            http: ['https://testnet.telos.net/evm/'],
            provider: telosProvider,
            authenticated: false,
        },
        public: {
            http: ['https://testnet.telos.net/evm/'],
            provider: telosProvider,
            authenticated: false,
        },
        default: {
            http: ['https://testnet.telos.net/evm/'],
            provider: telosProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        teloscan: {
            name: 'Teloscan Testnet',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://testnet.teloscan.io/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Teloscan Testnet',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://testnet.teloscan.io/',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: true,
} as const satisfies Network
