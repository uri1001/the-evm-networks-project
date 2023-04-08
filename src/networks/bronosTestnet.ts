import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { bronosProvider } from '../providers'

export const bronosTestnet = {
    id: 1038,
    name: 'Bronos Testnet',
    network: 'bronos-testnet',
    infoUrl: 'https://bronos.org/',
    docsUrl: 'https://docs.bronos.org/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1038.json',
    nativeCurrency: {
        name: 'Bronos Coin',
        symbol: 'tBRO',
        uSymbol: 'atBRO',
        decimals: 18,
    },
    rpcNodes: {
        bronos: {
            http: ['https://evm-testnet.bronos.org/'],
            provider: bronosProvider,
            authenticated: false,
        },
        public: {
            http: ['https://evm-testnet.bronos.org/'],
            provider: bronosProvider,
            authenticated: false,
        },
        default: {
            http: ['https://evm-testnet.bronos.org/'],
            provider: bronosProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        bronoScan: {
            name: 'Bronos Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://tbroscan.bronos.org/',
            apiUrl: 'https://tbroscan.bronos.org/',
            docsUrl: 'https://tbroscan.bronos.org/api-docs',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Bronos Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://tbroscan.bronos.org/',
            apiUrl: 'https://tbroscan.bronos.org/',
            docsUrl: 'https://tbroscan.bronos.org/api-docs',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: true,
} as const satisfies Network
