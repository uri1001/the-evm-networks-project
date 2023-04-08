import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { blast, moonbeamProvider, onfinality } from '../providers'

export const moonbaseAlpha = {
    id: 1287,
    name: 'Moonbase Alpha',
    network: 'moonbase-alpha',
    infoUrl: 'https://moonbeam.network/',
    docsUrl: 'https://docs.moonbeam.network/networks/testnet/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1287.json',
    nativeCurrency: {
        name: 'Dev',
        symbol: 'DEV',
        uSymbol: 'aDEV',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            http: ['https://moonbase-alpha.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        onfinality: {
            http: ['https://moonbeam-alpha.api.onfinality.io/public/'],
            wss: ['wss://moonbeam-alpha.api.onfinality.io/public-ws/'],
            provider: onfinality,
            authenticated: false,
        },
        moonbeamProvider: {
            http: ['https://rpc.api.moonbase.moonbeam.network/'],
            wss: ['wss://wss.api.moonbase.moonbeam.network/'],
            provider: moonbeamProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc.api.moonbase.moonbeam.network/'],
            wss: ['wss://wss.api.moonbase.moonbeam.network/'],
            provider: moonbeamProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc.api.moonbase.moonbeam.network/'],
            wss: ['wss://wss.api.moonbase.moonbeam.network/'],
            provider: moonbeamProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        moonbaseSubscan: {
            name: 'Moonbase Subscan',
            type: BlockExplorerType.Subscan,
            browserUrl: 'https://moonbase.subscan.io/',
            apiUrl: 'https://moonbase.api.subscan.io/',
            docsUrl: 'https://support.subscan.io/#introduction',
            standard: BlockExplorerStandard.TBD,
        },
        moonbaseExplorer: {
            name: 'Moonbase Blockchain Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://moonbase-blockscout.testnet.moonbeam.network/',
            apiUrl: 'https://moonbase-blockscout.testnet.moonbeam.network/api/',
            docsUrl: 'https://moonbase-blockscout.testnet.moonbeam.network/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        moonscan: {
            name: 'Moonbase Moonscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://moonbase.moonscan.io/',
            apiUrl: 'https://api-moonbase.moonscan.io/api/',
            docsUrl: 'https://moonbase.moonscan.io/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Moonbase Moonscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://moonbase.moonscan.io/',
            apiUrl: 'https://api-moonbase.moonscan.io/api/',
            docsUrl: 'https://moonbase.moonscan.io/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1850686,
        },
    },
    testnet: true,
} as const satisfies Network
