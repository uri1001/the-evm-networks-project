import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { blast } from '../providers'

export const palmTestnet = {
    id: 11297108099,
    name: 'Palm Testnet',
    network: 'palm-testnet',
    infoUrl: 'https://palm.io/',
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
            http: ['https://palm-testnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        public: {
            http: ['https://palm-testnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        default: {
            http: ['https://palm-testnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
    },
    blockExplorers: {
        palmExplorer: {
            name: 'Palm Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.palm-uat.xyz/',
            apiUrl: 'https://explorer.palm-uat.xyz/api/',
            docsUrl: 'https://explorer.palm-uat.xyz/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Palm Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.palm-uat.xyz/',
            apiUrl: 'https://explorer.palm-uat.xyz/api/',
            docsUrl: 'https://explorer.palm-uat.xyz/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 88114,
        },
    },
    testnet: true,
} as const satisfies Network
