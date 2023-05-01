import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { blast, moonbeamProvider, onfinality } from '../providers'

export const moonbaseAlpha = {
    id: 1287,
    name: 'Moonbase Alpha',
    network: 'moonbaseAlpha',
    infoUrl: 'https://moonbeam.network',
    docsUrl: 'https://docs.moonbeam.network/networks/testnet',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1287.json',
    nativeCurrency: {
        name: 'Dev',
        symbol: 'DEV',
        uSymbol: 'aDEV',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            rpcNode: 'blast',
            http: [`https://moonbase-alpha.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://moonbase-alpha.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://moonbase-alpha.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        onfinality: {
            rpcNode: 'onfinality',
            http: ['https://moonbeam-alpha.api.onfinality.io/public'],
            wss: ['wss://moonbeam-alpha.api.onfinality.io/public-ws'],
            provider: onfinality,
            authenticated: false,
        },
        moonbeam: {
            rpcNode: 'moonbeam',
            http: ['https://rpc.api.moonbase.moonbeam.network'],
            wss: ['wss://wss.api.moonbase.moonbeam.network'],
            provider: moonbeamProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpc.api.moonbase.moonbeam.network'],
            wss: ['wss://wss.api.moonbase.moonbeam.network'],
            provider: moonbeamProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpc.api.moonbase.moonbeam.network'],
            wss: ['wss://wss.api.moonbase.moonbeam.network'],
            provider: moonbeamProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        moonbaseSubscan: {
            name: 'Moonbase Subscan',
            blockExplorer: 'moonbaseSubscan',
            type: BlockExplorerType.Subscan,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://moonbase.subscan.io',
            apiUrl: 'https://moonbase.api.subscan.io',
            docsUrl: 'https://support.subscan.io/#introduction',
        },
        moonbaseExplorer: {
            name: 'Moonbase Blockchain Explorer',
            blockExplorer: 'moonbaseExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://moonbase-blockscout.testnet.moonbeam.network',
            apiUrl: 'https://moonbase-blockscout.testnet.moonbeam.network/api',
            docsUrl: 'https://moonbase-blockscout.testnet.moonbeam.network/api-docs',
        },
        moonscan: {
            name: 'Moonbase Moonscan',
            blockExplorer: 'moonscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://moonbase.moonscan.io',
            apiUrl: 'https://api-moonbase.moonscan.io/api',
            docsUrl: 'https://moonbase.moonscan.io/apis',
        },
        default: {
            name: 'Moonbase Moonscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://moonbase.moonscan.io',
            apiUrl: 'https://api-moonbase.moonscan.io/api',
            docsUrl: 'https://moonbase.moonscan.io/apis',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            deployBlock: 1850686,
            deployTxHash: '0x698034c3eca2e75de3bd35fce3b726a2410c7424f167c1c7c0fd99ea13e3734b',
        },
    },
    testnet: true,
    mainnetId: 1284,
} as const satisfies Network
