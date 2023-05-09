import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, blast, metisProvider, pokt } from '../providers'

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
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/metis/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/metis'],
            provider: ankr,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://metis-mainnet.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://metis-mainnet.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://metis-mainnet.public.blastapi.io'],
            wss: ['wss://metis-mainnet.public.blastapi.io'],
            provider: blast,
        },
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [`https://metis-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        metis: {
            rpcNode: 'metis',
            type: EndpointType.Public,
            http: ['https://andromeda.metis.io/?owner=1088'],
            provider: metisProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://andromeda.metis.io/?owner=1088'],
            provider: metisProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://andromeda.metis.io/?owner=1088'],
            provider: metisProvider,
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
