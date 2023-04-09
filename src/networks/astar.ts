import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import { alchemy, astarProvider, blast, onerpc, onfinality } from '../providers'

export const astar = {
    id: 592,
    name: 'Astar',
    network: 'astar',
    infoUrl: 'https://astar.network/',
    docsUrl: 'https://docs.astar.network/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-592.json',
    nativeCurrency: {
        name: 'Astar',
        symbol: 'ASTR',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: [`https://astar-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://astar-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        onfinality: {
            http: ['https://astar.api.onfinality.io/public/'],
            wss: ['wss://astar.api.onfinality.io/public-ws/'],
            provider: onfinality,
            authenticated: false,
        },
        blast: {
            http: ['https://astar.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        onerpc: {
            http: ['https://1rpc.io/astr/'],
            provider: onerpc,
            authenticated: false,
        },
        astar: {
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network/'],
            provider: astarProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network/'],
            provider: astarProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network/'],
            provider: astarProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        astarExplorer: {
            name: 'Astar Explorer',
            type: BlockExplorerType.Subscan,
            browserUrl: 'https://astar.subscan.io/',
            apiUrl: 'https://astar.api.subscan.io/',
            docsUrl: 'https://support.subscan.io/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Astar Explorer',
            type: BlockExplorerType.Subscan,
            browserUrl: 'https://astar.subscan.io/',
            apiUrl: 'https://astar.api.subscan.io/',
            docsUrl: 'https://support.subscan.io/',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: false,
} as const satisfies Network
