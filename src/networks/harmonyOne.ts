import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, harmonyProvider, onerpc, onfinality, pokt } from '../providers'

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
            type: EndpointType.Authenticated,
            http: [`https://harmony-0.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: ['https://harmony-0-rpc.gateway.pokt.network'],
            provider: pokt,
        },
        onfinality: {
            rpcNode: 'onfinality',
            type: EndpointType.Public,
            http: ['https://harmony.api.onfinality.io/public'],
            provider: onfinality,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Authenticated,
            http: [`https://1rpc.io/${EndpointAuth.Key}/one`],
            provider: onerpc,
        },
        onerpcPublic: {
            rpcNode: 'onerpcPublic',
            type: EndpointType.Public,
            http: ['https://1rpc.io/one'],
            provider: onerpc,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/harmony/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/harmony'],
            provider: ankr,
        },
        harmony: {
            rpcNode: 'harmony',
            type: EndpointType.Public,
            http: ['https://api.harmony.one'],
            provider: harmonyProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://api.harmony.one'],
            provider: harmonyProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://api.harmony.one'],
            provider: harmonyProvider,
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
