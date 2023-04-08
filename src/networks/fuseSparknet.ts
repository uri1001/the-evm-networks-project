import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { fuseProvider } from '../providers'

export const fuseSparknet = {
    id: 123,
    name: 'Fuse Sparknet',
    network: 'fuse-sparknet',
    infoUrl: 'https://fuse.io/',
    docsUrl: 'https://docs.fuse.io/v2/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-123.json',
    nativeCurrency: {
        name: 'Spark',
        symbol: 'SPARK',
        uSymbol: 'aSPARK',
        decimals: 18,
    },
    rpcNodes: {
        fuse: {
            http: ['https://rpc.fusespark.io/'],
            provider: fuseProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc.fusespark.io/'],
            provider: fuseProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc.fusespark.io/'],
            provider: fuseProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        fuseExplorer: {
            name: 'Fuse Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.fusespark.io/',
            apiUrl: 'https://explorer.fusespark.io/api/',
            docsUrl: 'https://explorer.fusespark.io/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Fuse Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.fusespark.io/',
            apiUrl: 'https://explorer.fusespark.io/api/',
            docsUrl: 'https://explorer.fusespark.io/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
