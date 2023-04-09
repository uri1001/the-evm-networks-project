import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { ankr, harmonyProvider, onfinality, pokt, quicknode } from '../providers'

export const harmonyOne = {
    id: 1666600000,
    name: 'Harmony One Mainnet Shard 0',
    network: 'harmony',
    infoUrl: 'https://www.harmony.one/',
    docsUrl: 'https://docs.harmony.one/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1666600000.json',
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
        onfinality: {
            http: ['https://harmony.api.onfinality.io/public/'],
            provider: onfinality,
            authenticated: false,
        },
        ankr: {
            http: ['https://rpc.ankr.com/harmony/'],
            provider: ankr,
            authenticated: false,
        },
        pokt: {
            http: ['https://harmony-0-rpc.gateway.pokt.network/'],
            provider: pokt,
            authenticated: false,
        },
        harmonyProvider: {
            http: ['https://api.harmony.one/'],
            provider: harmonyProvider,
            authenticated: false,
        },
        public: {
            http: ['https://api.harmony.one/'],
            provider: harmonyProvider,
            authenticated: false,
        },
        default: {
            http: ['https://api.harmony.one/'],
            provider: harmonyProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        harmonyExplorer: {
            name: 'Harmony One Blockchain Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.harmony.one/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Harmony One Blockchain Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.harmony.one/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 24185753,
        },
    },
    testnet: false,
} as const satisfies Network
