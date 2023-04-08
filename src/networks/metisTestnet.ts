import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { metisProvider } from '../providers'

export const metisTestnet = {
    id: 599,
    name: 'Metis Testnet',
    network: 'metis-testnet',
    infoUrl: 'https://www.metis.io/',
    docsUrl: 'https://docs.metis.io/dev/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-599.json',
    nativeCurrency: {
        name: 'Test Metis',
        symbol: 'tMETIS',
        uSymbol: 'atMETIS',
        decimals: 18,
    },
    rpcNodes: {
        metisProvider: {
            http: ['https://goerli.gateway.metisdevops.link/'],
            provider: metisProvider,
            authenticated: false,
        },
        public: {
            http: ['https://goerli.gateway.metisdevops.link/'],
            provider: metisProvider,
            authenticated: false,
        },
        default: {
            http: ['https://goerli.gateway.metisdevops.link/'],
            provider: metisProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        metisExplorer: {
            name: 'Metis Testnet Block Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://goerli.explorer.metisdevops.link/',
            apiUrl: 'https://goerli.explorer.metisdevops.link/api/',
            docsUrl: 'https://goerli.explorer.metisdevops.link/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Metis Testnet Block Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://goerli.explorer.metisdevops.link/',
            apiUrl: 'https://goerli.explorer.metisdevops.link/api/',
            docsUrl: 'https://goerli.explorer.metisdevops.link/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
