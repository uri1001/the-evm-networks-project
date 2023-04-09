import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { harmonyProvider, quicknode } from '../providers'

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
        uSymbol: 'Atto',
        decimals: 18,
    },
    rpcNodes: {
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        harmonyProvider: {
            http: ['https://api.s0.b.hmny.io/'],
            provider: harmonyProvider,
            authenticated: false,
        },
        public: {
            http: ['https://api.s0.b.hmny.io/'],
            provider: harmonyProvider,
            authenticated: false,
        },
        default: {
            http: ['https://api.s0.b.hmny.io/'],
            provider: harmonyProvider,
            authenticated: false,
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
