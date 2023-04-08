import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { zkSyncProvider } from '../providers'

export const zkSync = {
    id: 324,
    name: 'zkSync',
    network: 'zksync',
    infoUrl: 'https://era.zksync.io/docs/',
    docsUrl: 'https://era.zksync.io/docs/dev/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-324.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        zkSyncProvider: {
            http: ['https://zksync2-mainnet.zksync.io/', 'https://mainnet.era.zksync.io/'],
            wss: ['wss://zksync2-mainnet.zksync.io/ws/'],
            provider: zkSyncProvider,
            authenticated: false,
        },
        public: {
            http: ['https://zksync2-mainnet.zksync.io/', 'https://mainnet.era.zksync.io/'],
            wss: ['wss://zksync2-mainnet.zksync.io/ws/'],
            provider: zkSyncProvider,
            authenticated: false,
        },
        default: {
            http: ['https://zksync2-mainnet.zksync.io/', 'https://mainnet.era.zksync.io/'],
            wss: ['wss://zksync2-mainnet.zksync.io/ws/'],
            provider: zkSyncProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        zkSyncExplorer: {
            name: 'ZkSync Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.zksync.io/',
            docsUrl: 'https://era.zksync.io/docs/dev/',
            standard: BlockExplorerStandard.TBD,
        },
        default: {
            name: 'ZkSync Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.zksync.io/',
            docsUrl: 'https://era.zksync.io/docs/dev/',
            standard: BlockExplorerStandard.TBD,
        },
    },
    testnet: false,
} as const satisfies Network
