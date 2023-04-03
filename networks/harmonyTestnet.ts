import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { harmonyProvider } from '../providers'

export const harmonyTestnet = {
    id: 1666700000,
    name: 'Harmony One Testnet Shard 0',
    network: 'harmony-testnet',
    infoUrl: 'https://www.harmony.one/',
    docsUrl: 'https://docs.harmony.one/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1666700000.json',
    nativeCurrency: {
        name: 'Harmony',
        symbol: 'ONE',
        decimals: 18,
    },
    rpcNodes: {
        harmonyProvider: {
            http: ['https://api.s0.b.hmny.io/'],
            provider: harmonyProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://api.s0.b.hmny.io/'],
            provider: harmonyProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://api.s0.b.hmny.io/'],
            provider: harmonyProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        harmonyExplorer: {
            name: 'Harmony Testnet Blockchain Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.pops.one/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Harmony Testnet Blockchain Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.pops.one/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
