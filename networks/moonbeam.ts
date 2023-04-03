import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, blast, moonbeamProvider, onerpc, onfinality } from '../providers'

export const moonbeam = {
    id: 1284,
    name: 'Moonbeam',
    network: 'moonbeam',
    infoUrl: 'https://moonbeam.network/',
    docsUrl: 'https://docs.moonbeam.network/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1284.json',
    nativeCurrency: {
        name: 'GLMR',
        symbol: 'GLMR',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            http: ['https://moonbeam.public.blastapi.io/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        onfinality: {
            http: ['https://moonbeam.api.onfinality.io/public/'],
            wss: ['wss://moonbeam.api.onfinality.io/public-ws/'],
            provider: onfinality,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        ankr: {
            http: ['https://rpc.ankr.com/moonbeam/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        onerpc: {
            http: ['https://1rpc.io/glmr/'],
            provider: onerpc,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        moonbeamProvider: {
            http: ['https://rpc.api.moonbeam.network/'],
            wss: ['wss://wss.api.moonbeam.network/'],
            provider: moonbeamProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        public: {
            http: ['https://rpc.api.moonbeam.network/'],
            wss: ['wss://wss.api.moonbeam.network/'],
            provider: moonbeamProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: ['https://rpc.api.moonbeam.network/'],
            wss: ['wss://wss.api.moonbeam.network/'],
            provider: moonbeamProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
    },
    blockExplorers: {
        moonbeamSubscan: {
            name: 'Moonbeam Subscan',
            type: BlockExplorerType.Subscan,
            browserUrl: 'https://moonbeam.subscan.io/',
            apiUrl: 'https://moonbeam.api.subscan.io/',
            docsUrl: 'https://support.subscan.io/#introduction',
            standard: BlockExplorerStandard.TBD,
        },
        moonbeamExplorer: {
            name: 'Moonbeam Blockchain Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://blockscout.moonbeam.network/',
            apiUrl: 'https://blockscout.moonbeam.network/api/',
            docsUrl: 'https://blockscout.moonbeam.network/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        moonscan: {
            name: 'Moonscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://moonscan.io/',
            apiUrl: 'https://api-moonbeam.moonscan.io/api/',
            docsUrl: 'https://moonscan.io/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Moonscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://moonscan.io/',
            apiUrl: 'https://api-moonbeam.moonscan.io/api/',
            docsUrl: 'https://moonscan.io/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 609002,
        },
    },
    testnet: false,
} as const satisfies Network
