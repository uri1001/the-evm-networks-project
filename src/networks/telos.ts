import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { telosProvider } from '../providers'

export const telos = {
    id: 40,
    name: 'Telos',
    network: 'telos',
    infoUrl: 'https://telos.net/',
    docsUrl: 'https://docs.telos.net/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-40.json',
    nativeCurrency: {
        name: 'Telos',
        symbol: 'TLOS',
        uSymbol: 'ARC',
        decimals: 18,
    },
    rpcNodes: {
        telosProvider: {
            http: ['https://mainnet.telos.net/evm/'],
            provider: telosProvider,
            authenticated: false,
        },
        public: {
            http: ['https://mainnet.telos.net/evm/'],
            provider: telosProvider,
            authenticated: false,
        },
        default: {
            http: ['https://mainnet.telos.net/evm/'],
            provider: telosProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        teloscan: {
            name: 'Teloscan',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://www.teloscan.io/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Teloscan',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://www.teloscan.io/',
            standard: BlockExplorerStandard.None,
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 246530709,
        },
    },
    testnet: false,
} as const satisfies Network
