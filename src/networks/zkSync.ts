import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { onerpc, zkSyncProvider } from '../providers'

export const zkSync = {
    id: 324,
    name: 'zkSync',
    network: 'zksync',
    infoUrl: 'https://era.zksync.io/docs',
    docsUrl: 'https://era.zksync.io/docs/dev',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-324.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Public,
            http: ['https://1rpc.io/zksync2-era	'],
            provider: onerpc,
        },
        zkSync: {
            rpcNode: 'zkSync',
            type: EndpointType.Public,
            http: ['https://zksync2-mainnet.zksync.io', 'https://mainnet.era.zksync.io'],
            wss: ['wss://zksync2-mainnet.zksync.io/ws'],
            provider: zkSyncProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://zksync2-mainnet.zksync.io', 'https://mainnet.era.zksync.io'],
            wss: ['wss://zksync2-mainnet.zksync.io/ws'],
            provider: zkSyncProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://zksync2-mainnet.zksync.io', 'https://mainnet.era.zksync.io'],
            wss: ['wss://zksync2-mainnet.zksync.io/ws'],
            provider: zkSyncProvider,
        },
    },
    blockExplorers: {
        zkSyncExplorer: {
            name: 'ZkSync Explorer',
            blockExplorer: 'zkSyncExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.zksync.io',
            docsUrl: 'https://era.zksync.io/docs/dev',
        },
        default: {
            name: 'ZkSync Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.zksync.io',
            docsUrl: 'https://era.zksync.io/docs/dev',
        },
    },
    testnet: false,
} as const satisfies Network
