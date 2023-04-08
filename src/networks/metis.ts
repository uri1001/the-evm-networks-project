import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { metisProvider } from '../providers'

export const metis = {
    id: 1088,
    name: 'Metis Andromeda Mainnet',
    network: 'metis-andromeda',
    infoUrl: 'https://www.metis.io/',
    docsUrl: 'https://docs.metis.io/dev/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1088.json',
    nativeCurrency: {
        name: 'Metis',
        symbol: 'METIS',
        uSymbol: 'aMETIS',
        decimals: 18,
    },
    rpcNodes: {
        metisProvider: {
            http: ['https://andromeda.metis.io/?owner=1088/'],
            provider: metisProvider,
            authenticated: false,
        },
        public: {
            http: ['https://andromeda.metis.io/?owner=1088/'],
            provider: metisProvider,
            authenticated: false,
        },
        default: {
            http: ['https://andromeda.metis.io/?owner=1088/'],
            provider: metisProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        metisExplorer: {
            name: 'Metis Block Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://andromeda-explorer.metis.io/',
            apiUrl: 'https://andromeda-explorer.metis.io/api/',
            docsUrl: 'https://andromeda-explorer.metis.io/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Metis Block Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://andromeda-explorer.metis.io/',
            apiUrl: 'https://andromeda-explorer.metis.io/api/',
            docsUrl: 'https://andromeda-explorer.metis.io/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
