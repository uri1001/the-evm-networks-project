import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { fuseProvider } from '../providers'

export const fuseSparknet = {
    id: 123,
    name: 'Fuse Sparknet',
    network: 'fuseSparknet',
    infoUrl: 'https://fuse.io',
    docsUrl: 'https://docs.fuse.io/v2',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-123.json',
    nativeCurrency: {
        name: 'Spark',
        symbol: 'SPARK',
        uSymbol: 'aSPARK',
        decimals: 18,
    },
    rpcNodes: {
        fuse: {
            rpcNode: 'fuse',
            http: ['https://rpc.fusespark.io'],
            provider: fuseProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpc.fusespark.io'],
            provider: fuseProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpc.fusespark.io'],
            provider: fuseProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        fuseExplorer: {
            name: 'Fuse Testnet Explorer',
            blockExplorer: 'fuseExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.fusespark.io',
            apiUrl: 'https://explorer.fusespark.io/api',
            docsUrl: 'https://explorer.fusespark.io/api-docs',
        },
        default: {
            name: 'Fuse Testnet Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.fusespark.io',
            apiUrl: 'https://explorer.fusespark.io/api',
            docsUrl: 'https://explorer.fusespark.io/api-docs',
        },
    },
    testnet: true,
    mainnetId: 122,
} as const satisfies Network
