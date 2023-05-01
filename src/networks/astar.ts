import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { alchemy, astarProvider, blast, onerpc, onfinality } from '../providers'

export const astar = {
    id: 592,
    name: 'Astar',
    network: 'astar',
    infoUrl: 'https://astar.network',
    docsUrl: 'https://docs.astar.network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-592.json',
    nativeCurrency: {
        name: 'Astar',
        symbol: 'ASTR',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            rpcNode: 'alchemy',
            http: [`https://astar-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://astar-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        onfinality: {
            rpcNode: 'onfinality',
            http: ['https://astar.api.onfinality.io/public'],
            wss: ['wss://astar.api.onfinality.io/public-ws'],
            provider: onfinality,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://astar.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://astar.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://astar.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        onerpc: {
            rpcNode: 'onerpc',
            http: ['https://1rpc.io/astr'],
            provider: onerpc,
            authenticated: false,
        },
        astar: {
            rpcNode: 'astar',
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network'],
            provider: astarProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network'],
            provider: astarProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network'],
            provider: astarProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        astarExplorer: {
            name: 'Astar Explorer',
            blockExplorer: 'astarExplorer',
            type: BlockExplorerType.Subscan,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://astar.subscan.io',
            apiUrl: 'https://astar.api.subscan.io',
            docsUrl: 'https://support.subscan.io',
        },
        default: {
            name: 'Astar Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Subscan,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://astar.subscan.io',
            apiUrl: 'https://astar.api.subscan.io',
            docsUrl: 'https://support.subscan.io',
        },
    },
    testnet: false,
} as const satisfies Network
