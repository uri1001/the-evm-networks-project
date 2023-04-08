import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { blast, moonbeamProvider, onfinality } from '../providers'

export const moonriver = {
    id: 1285,
    name: 'Moonriver',
    network: 'moonriver',
    infoUrl: 'https://moonbeam.network/',
    docsUrl: 'https://docs.moonbeam.network/learn/platform/networks/moonriver/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1285.json',
    nativeCurrency: {
        name: 'MOVR',
        symbol: 'MOVR',
        uSymbol: 'aMOVR',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            http: ['https://moonriver.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        onfinality: {
            http: [
                'https://moonriver.public.blastapi.io/',
                'https://moonriver.api.onfinality.io/public/',
            ],
            wss: [
                'wss://moonriver.public.blastapi.io/',
                'wss://moonriver.api.onfinality.io/public-ws/',
            ],
            provider: onfinality,
            authenticated: false,
        },
        moonbeamProvider: {
            http: ['https://rpc.api.moonriver.moonbeam.network/'],
            wss: ['wss://wss.api.moonriver.moonbeam.network/'],
            provider: moonbeamProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc.api.moonriver.moonbeam.network/'],
            wss: ['wss://wss.api.moonriver.moonbeam.network/'],
            provider: moonbeamProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc.api.moonriver.moonbeam.network/'],
            wss: ['wss://wss.api.moonriver.moonbeam.network/'],
            provider: moonbeamProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        moonriverSubscan: {
            name: 'Moonriver Blockchain Explorer',
            type: BlockExplorerType.Subscan,
            browserUrl: 'https://moonriver.subscan.io/',
            apiUrl: 'https://moonriver.api.subscan.io/',
            docsUrl: 'https://support.subscan.io/#introduction',
            standard: BlockExplorerStandard.TBD,
        },
        moonriverExplorer: {
            name: 'Moonriver Blockchain Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://blockscout.moonriver.moonbeam.network/',
            apiUrl: 'https://blockscout.moonriver.moonbeam.network/api/',
            docsUrl: 'https://blockscout.moonriver.moonbeam.network/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        moonscan: {
            name: 'Moonriver Moonscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://moonriver.moonscan.io/',
            apiUrl: 'https://api-moonriver.moonscan.io/api/',
            docsUrl: 'https://moonriver.moonscan.io/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Moonriver Moonscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://moonriver.moonscan.io/',
            apiUrl: 'https://api-moonriver.moonscan.io/api/',
            docsUrl: 'https://moonriver.moonscan.io/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1597904,
        },
    },
    testnet: false,
} as const satisfies Network
