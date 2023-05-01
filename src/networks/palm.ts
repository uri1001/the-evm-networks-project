import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
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
            http: [`https://palm-mainnet.infura.io/v3/${EndpointAuth.PrivateKey}`],
            wss: [`wss://palm-mainnet.infura.io/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://palm-mainnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://palm-mainnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://palm-mainnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://palm-mainnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://palm-mainnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
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
