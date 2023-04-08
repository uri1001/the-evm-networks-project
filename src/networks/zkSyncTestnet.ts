import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { zkSyncProvider } from '../providers'

export const zkSyncTestnet = {
    id: 280,
    name: 'zkSync Testnet',
    network: 'zksync-testnet',
    infoUrl: 'https://era.zksync.io/docs/',
    docsUrl: 'https://era.zksync.io/docs/dev/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-280.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        zkSyncProvider: {
            http: ['https://zksync2-testnet.zksync.dev/', 'https://testnet.era.zksync.dev/'],
            wss: ['wss://zksync2-testnet.zksync.dev/ws/'],
            provider: zkSyncProvider,
            authenticated: false,
        },
        public: {
            http: ['https://zksync2-testnet.zksync.dev/', 'https://testnet.era.zksync.dev/'],
            wss: ['wss://zksync2-testnet.zksync.dev/ws/'],
            provider: zkSyncProvider,
            authenticated: false,
        },
        default: {
            http: ['https://zksync2-testnet.zksync.dev/', 'https://testnet.era.zksync.dev/'],
            wss: ['wss://zksync2-testnet.zksync.dev/ws/'],
            provider: zkSyncProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        zkSyncExplorer: {
            name: 'Testnet ZkSync Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://goerli.explorer.zksync.io/',
            docsUrl: 'https://era.zksync.io/docs/dev/',
            standard: BlockExplorerStandard.TBD,
        },
        default: {
            name: 'Testnet ZkSync Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://goerli.explorer.zksync.io/',
            docsUrl: 'https://era.zksync.io/docs/dev/',
            standard: BlockExplorerStandard.TBD,
        },
    },
    testnet: true,
} as const satisfies Network
