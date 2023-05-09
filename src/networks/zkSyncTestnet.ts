import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { zkSyncProvider } from '../providers'

export const zkSyncTestnet = {
    id: 280,
    name: 'zkSync Testnet',
    network: 'zksyncTestnet',
    infoUrl: 'https://era.zksync.io/docs',
    docsUrl: 'https://era.zksync.io/docs/dev',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-280.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        zkSync: {
            rpcNode: 'zkSync',
            type: EndpointType.Public,
            http: ['https://zksync2-testnet.zksync.dev', 'https://testnet.era.zksync.dev'],
            wss: ['wss://zksync2-testnet.zksync.dev/ws'],
            provider: zkSyncProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://zksync2-testnet.zksync.dev', 'https://testnet.era.zksync.dev'],
            wss: ['wss://zksync2-testnet.zksync.dev/ws'],
            provider: zkSyncProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://zksync2-testnet.zksync.dev', 'https://testnet.era.zksync.dev'],
            wss: ['wss://zksync2-testnet.zksync.dev/ws'],
            provider: zkSyncProvider,
        },
    },
    blockExplorers: {
        zkSyncExplorer: {
            name: 'Testnet ZkSync Explorer',
            blockExplorer: 'zkSyncExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.explorer.zksync.io',
            docsUrl: 'https://era.zksync.io/docs/dev',
        },
        default: {
            name: 'Testnet ZkSync Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.explorer.zksync.io',
            docsUrl: 'https://era.zksync.io/docs/dev',
        },
    },
    testnet: true,
    mainnetId: 324,
} as const satisfies Network
