import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { metisProvider } from '../providers'

export const metisTestnet = {
    id: 599,
    name: 'Metis Testnet',
    network: 'metisTestnet',
    infoUrl: 'https://www.metis.io',
    docsUrl: 'https://docs.metis.io/dev',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-599.json',
    nativeCurrency: {
        name: 'Test Metis',
        symbol: 'tMETIS',
        uSymbol: 'atMETIS',
        decimals: 18,
    },
    rpcNodes: {
        metis: {
            rpcNode: 'metis',
            http: ['https://goerli.gateway.metisdevops.link'],
            provider: metisProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://goerli.gateway.metisdevops.link'],
            provider: metisProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://goerli.gateway.metisdevops.link'],
            provider: metisProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        metisExplorer: {
            name: 'Metis Testnet Block Explorer',
            blockExplorer: 'metisExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.explorer.metisdevops.link',
            apiUrl: 'https://goerli.explorer.metisdevops.link/api',
            docsUrl: 'https://goerli.explorer.metisdevops.link/api-docs',
        },
        default: {
            name: 'Metis Testnet Block Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.explorer.metisdevops.link',
            apiUrl: 'https://goerli.explorer.metisdevops.link/api',
            docsUrl: 'https://goerli.explorer.metisdevops.link/api-docs',
        },
    },
    testnet: true,
    mainnetId: 1088,
} as const satisfies Network
