import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { telosProvider } from '../providers'

export const telosTestnet = {
    id: 41,
    name: 'Telos Testnet',
    network: 'telosTestnet',
    infoUrl: 'https://telos.net',
    docsUrl: 'https://docs.telos.net',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-41.json',
    nativeCurrency: {
        name: 'Test Telos',
        symbol: 'tTLOS',
        uSymbol: 'tARC',
        decimals: 18,
    },
    rpcNodes: {
        telos: {
            rpcNode: 'telos',
            type: EndpointType.Public,
            http: ['https://testnet.telos.net/evm'],
            provider: telosProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://testnet.telos.net/evm'],
            provider: telosProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://testnet.telos.net/evm'],
            provider: telosProvider,
        },
    },
    blockExplorers: {
        teloscan: {
            name: 'Teloscan Testnet',
            blockExplorer: 'teloscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://testnet.teloscan.io',
        },
        default: {
            name: 'Teloscan Testnet',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://testnet.teloscan.io',
        },
    },
    testnet: true,
    mainnetId: 40,
} as const satisfies Network
