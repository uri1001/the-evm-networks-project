import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { blast } from '../providers'

export const palmTestnet = {
    id: 11297108099,
    name: 'Palm Testnet',
    network: 'palmTestnet',
    infoUrl: 'https://palm.io',
    docsUrl: '',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-11297108099.json',
    nativeCurrency: {
        name: 'Test PALM',
        symbol: 'tPALM',
        uSymbol: 'atPALM',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://palm-testnet.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://palm-testnet.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://palm-testnet.public.blastapi.io'],
            wss: ['wss://palm-testnet.public.blastapi.io'],
            provider: blast,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://palm-testnet.public.blastapi.io'],
            wss: ['wss://palm-testnet.public.blastapi.io'],
            provider: blast,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://palm-testnet.public.blastapi.io'],
            wss: ['wss://palm-testnet.public.blastapi.io'],
            provider: blast,
        },
    },
    blockExplorers: {
        palmExplorer: {
            name: 'Palm Testnet Explorer',
            blockExplorer: 'palmExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.palm-uat.xyz',
            apiUrl: 'https://explorer.palm-uat.xyz/api',
            docsUrl: 'https://explorer.palm-uat.xyz/api-docs',
        },
        default: {
            name: 'Palm Testnet Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.palm-uat.xyz',
            apiUrl: 'https://explorer.palm-uat.xyz/api',
            docsUrl: 'https://explorer.palm-uat.xyz/api-docs',
        },
    },
    testnet: true,
    mainnetId: 11297108109,
} as const satisfies Network
