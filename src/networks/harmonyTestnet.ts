import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { harmonyProvider } from '../providers'

export const harmonyTestnet = {
    id: 1666700000,
    name: 'Harmony One Testnet Shard 0',
    network: 'harmonyTestnet',
    infoUrl: 'https://www.harmony.one',
    docsUrl: 'https://docs.harmony.one',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1666700000.json',
    nativeCurrency: {
        name: 'Harmony',
        symbol: 'ONE',
        uSymbol: 'Atto',
        decimals: 18,
    },
    rpcNodes: {
        harmony: {
            rpcNode: 'harmony',
            type: EndpointType.Public,
            http: ['https://api.s0.b.hmny.io'],
            provider: harmonyProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://api.s0.b.hmny.io'],
            provider: harmonyProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://api.s0.b.hmny.io'],
            provider: harmonyProvider,
        },
    },
    blockExplorers: {
        harmonyExplorer: {
            name: 'Harmony Testnet Blockchain Explorer',
            blockExplorer: 'harmonyExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.pops.one',
        },
        default: {
            name: 'Harmony Testnet Blockchain Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.pops.one',
        },
    },
    testnet: true,
    mainnetId: 1666600000,
} as const satisfies Network
