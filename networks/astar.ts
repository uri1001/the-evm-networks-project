import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { astarProvider, blast, onerpc, onfinality } from '../providers'

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
        decimals: 18,
    },
    rpcNodes: {
        onfinality: {
            http: ['https://astar.api.onfinality.io/public/'],
            wss: ['wss://astar.api.onfinality.io/public-ws/'],
            provider: onfinality,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        blast: {
            http: ['https://astar.public.blastapi.io/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        onerpc: {
            http: ['https://1rpc.io/astr/'],
            provider: onerpc,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        astar: {
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network/'],
            provider: astarProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        public: {
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network/'],
            provider: astarProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: ['https://rpc.astar.network:8545', 'https://evm.astar.network/'],
            provider: astarProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
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
