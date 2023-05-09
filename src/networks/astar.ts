import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
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
            type: EndpointType.Authenticated,
            http: [`https://astar-mainnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
            wss: [`wss://astar-mainnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
            provider: alchemy,
        },
        onfinality: {
            rpcNode: 'onfinality',
            type: EndpointType.Public,
            http: ['https://astar.api.onfinality.io/public'],
            wss: ['wss://astar.api.onfinality.io/public-ws'],
            provider: onfinality,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://astar.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://astar.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://astar.public.blastapi.io'],
            wss: ['wss://astar.public.blastapi.io'],
            provider: blast,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Public,
            http: ['https://1rpc.io/astr'],
            provider: onerpc,
        },
        astar: {
            rpcNode: 'astar',
            type: EndpointType.Public,
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network'],
            provider: astarProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network'],
            provider: astarProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network'],
            provider: astarProvider,
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
