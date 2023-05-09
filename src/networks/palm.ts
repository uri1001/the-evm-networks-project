import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { blast, infura } from '../providers'

export const palm = {
    id: 11297108109,
    name: 'Palm',
    network: 'palm',
    infoUrl: 'https://palm.io',
    docsUrl: '',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-11297108109.json',
    nativeCurrency: {
        name: 'PALM',
        symbol: 'PALM',
        uSymbol: 'aPALM',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            rpcNode: 'infura',
            type: EndpointType.Authenticated,
            http: [`https://palm-mainnet.infura.io/v3/${EndpointAuth.Key}`],
            wss: [`wss://palm-mainnet.infura.io/${EndpointAuth.Key}`],
            provider: infura,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://palm-mainnet.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://palm-mainnet.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://palm-mainnet.public.blastapi.io'],
            wss: ['wss://palm-mainnet.public.blastapi.io'],
            provider: blast,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://palm-mainnet.public.blastapi.io'],
            wss: ['wss://palm-mainnet.public.blastapi.io'],
            provider: blast,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://palm-mainnet.public.blastapi.io'],
            wss: ['wss://palm-mainnet.public.blastapi.io'],
            provider: blast,
        },
    },
    blockExplorers: {
        palmExplorer: {
            name: 'Palm Explorer',
            blockExplorer: 'palmExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.palm.io',
            apiUrl: 'https://explorer.palm.io/api',
            docsUrl: 'https://explorer.palm.io/api-docs',
        },
        default: {
            name: 'Palm Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.palm.io',
            apiUrl: 'https://explorer.palm.io/api',
            docsUrl: 'https://explorer.palm.io/api-docs',
        },
    },
    testnet: false,
} as const satisfies Network
