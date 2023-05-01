import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
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
            http: [`https://palm-testnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://palm-testnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://palm-testnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://palm-testnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://palm-testnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
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
