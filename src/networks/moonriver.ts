import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { blast, moonbeamProvider, onfinality, pokt } from '../providers'

export const moonriver = {
    id: 1285,
    name: 'Moonriver',
    network: 'moonriver',
    infoUrl: 'https://moonbeam.network',
    docsUrl: 'https://docs.moonbeam.network/learn/platform/networks/moonriver',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1285.json',
    nativeCurrency: {
        name: 'MOVR',
        symbol: 'MOVR',
        uSymbol: 'aMOVR',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [`https://moonriver-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: ['https://moonriver-rpc.gateway.pokt.network'],
            provider: pokt,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://moonriver.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://moonriver.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://moonriver.public.blastapi.io'],
            wss: ['wss://moonriver.public.blastapi.io'],
            provider: blast,
        },
        onfinality: {
            rpcNode: 'onfinality',
            type: EndpointType.Public,
            http: [
                'https://moonriver.public.blastapi.io',
                'https://moonriver.api.onfinality.io/public',
            ],
            wss: [
                'wss://moonriver.public.blastapi.io',
                'wss://moonriver.api.onfinality.io/public-ws',
            ],
            provider: onfinality,
        },
        moonbeam: {
            rpcNode: 'moonbeam',
            type: EndpointType.Public,
            http: ['https://rpc.api.moonriver.moonbeam.network'],
            wss: ['wss://wss.api.moonriver.moonbeam.network'],
            provider: moonbeamProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.api.moonriver.moonbeam.network'],
            wss: ['wss://wss.api.moonriver.moonbeam.network'],
            provider: moonbeamProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.api.moonriver.moonbeam.network'],
            wss: ['wss://wss.api.moonriver.moonbeam.network'],
            provider: moonbeamProvider,
        },
    },
    blockExplorers: {
        moonriverSubscan: {
            name: 'Moonriver Blockchain Explorer',
            blockExplorer: 'moonriverSubscan',
            type: BlockExplorerType.Subscan,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://moonriver.subscan.io',
            apiUrl: 'https://moonriver.api.subscan.io',
            docsUrl: 'https://support.subscan.io/#introduction',
        },
        moonriverExplorer: {
            name: 'Moonriver Blockchain Explorer',
            blockExplorer: 'moonriverExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://blockscout.moonriver.moonbeam.network',
            apiUrl: 'https://blockscout.moonriver.moonbeam.network/api',
            docsUrl: 'https://blockscout.moonriver.moonbeam.network/api-docs',
        },
        moonscan: {
            name: 'Moonriver Moonscan',
            blockExplorer: 'moonscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://moonriver.moonscan.io',
            apiUrl: 'https://api-moonriver.moonscan.io/api',
            docsUrl: 'https://moonriver.moonscan.io/apis',
        },
        default: {
            name: 'Moonriver Moonscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://moonriver.moonscan.io',
            apiUrl: 'https://api-moonriver.moonscan.io/api',
            docsUrl: 'https://moonriver.moonscan.io/apis',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            deployBlock: 1597904,
            deployTxHash: '0xc01c1016fba9f0b0cc72e946e4e03545e6d4f57d1bf4fba97781ff28bc547322',
        },
    },
    testnet: true,
    mainnetId: 1284,
} as const satisfies Network
