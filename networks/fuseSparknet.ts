import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

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
        decimals: 18,
    },
    rpcNodes: {
        fuse: {
            http: ['https://rpc.fusespark.io/'],
            provider: fuseProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://rpc.fusespark.io/'],
            provider: fuseProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://rpc.fusespark.io/'],
            provider: fuseProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
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
