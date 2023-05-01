import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { metisProvider, pokt } from '../providers'

export const metis = {
    id: 1088,
    name: 'Metis Andromeda Mainnet',
    network: 'metis',
    infoUrl: 'https://www.metis.io',
    docsUrl: 'https://docs.metis.io/dev',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1088.json',
    nativeCurrency: {
        name: 'Metis',
        symbol: 'METIS',
        uSymbol: 'aMETIS',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            http: [`https://metis-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`],
            provider: pokt,
            authenticated: true,
        },
        metis: {
            rpcNode: 'metis',
            http: ['https://andromeda.metis.io/?owner=1088'],
            provider: metisProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://andromeda.metis.io/?owner=1088'],
            provider: metisProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://andromeda.metis.io/?owner=1088'],
            provider: metisProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        metisExplorer: {
            name: 'Metis Block Explorer',
            blockExplorer: 'metisExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://andromeda-explorer.metis.io',
            apiUrl: 'https://andromeda-explorer.metis.io/api',
            docsUrl: 'https://andromeda-explorer.metis.io/api-docs',
        },
        default: {
            name: 'Metis Block Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://andromeda-explorer.metis.io',
            apiUrl: 'https://andromeda-explorer.metis.io/api',
            docsUrl: 'https://andromeda-explorer.metis.io/api-docs',
        },
    },
    testnet: false,
} as const satisfies Network
