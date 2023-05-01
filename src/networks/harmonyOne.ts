import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { ankr, harmonyProvider, onfinality, pokt } from '../providers'

export const harmonyOne = {
    id: 1666600000,
    name: 'Harmony One Mainnet Shard 0',
    network: 'harmonyOne',
    infoUrl: 'https://www.harmony.one',
    docsUrl: 'https://docs.harmony.one',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1666600000.json',
    nativeCurrency: {
        name: 'Harmony',
        symbol: 'ONE',
        uSymbol: 'Atto',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            http: [`https://harmony-0.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: ['https://harmony-0-rpc.gateway.pokt.network'],
            provider: pokt,
            authenticated: false,
        },
        onfinality: {
            rpcNode: 'onfinality',
            http: ['https://harmony.api.onfinality.io/public'],
            provider: onfinality,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/harmony'],
            provider: ankr,
            authenticated: false,
        },
        harmony: {
            rpcNode: 'harmony',
            http: ['https://api.harmony.one'],
            provider: harmonyProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://api.harmony.one'],
            provider: harmonyProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://api.harmony.one'],
            provider: harmonyProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        harmonyExplorer: {
            name: 'Harmony One Blockchain Explorer',
            blockExplorer: 'harmonyExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.harmony.one',
        },
        default: {
            name: 'Harmony One Blockchain Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.harmony.one',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 24185753,
            deployTxHash: '0xce3914fe736774a49223b1e81a45bfbdbea7f408287a47b9752744517994f49c',
        },
    },
    testnet: false,
} as const satisfies Network
