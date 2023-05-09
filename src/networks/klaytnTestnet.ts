import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, blockpi, klaytnProvider, onerpc } from '../providers'

export const klaytnTestnet = {
    id: 1001,
    name: 'Klaytn Testnet Baobab',
    network: 'klaytnTestnet',
    infoUrl: 'https://www.klaytn.com',
    docsUrl: 'https://docs.klaytn.foundation',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1001.json',
    nativeCurrency: {
        name: 'Test Klaytn',
        symbol: 'tKLAY',
        uSymbol: 'tPeb',
        decimals: 18,
    },
    rpcNodes: {
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/klaytn_testnet/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/klaytn_testnet'],
            provider: ankr,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Public,
            http: ['https://1rpc.io/klay'],
            provider: onerpc,
        },
        blockpi: {
            rpcNode: 'blockpi',
            type: EndpointType.Authenticated,
            http: [`https://klaytn-baobab.blockpi.network/v1/rpc/${EndpointAuth.Key}`],
            wss: [`wss://klaytn-baobab.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: blockpi,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            type: EndpointType.Public,
            http: ['https://klaytn-baobab.blockpi.network/v1/rpc/public'],
            provider: blockpi,
        },
        klaytn: {
            rpcNode: 'klaytn',
            type: EndpointType.Public,
            http: [
                'https://public-node-api.klaytnapi.com/v1/baobab',
                'https://api.baobab.klaytn.net:8651',
            ],
            provider: klaytnProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: [
                'https://public-node-api.klaytnapi.com/v1/baobab',
                'https://api.baobab.klaytn.net:8651',
            ],
            provider: klaytnProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: [
                'https://public-node-api.klaytnapi.com/v1/baobab',
                'https://api.baobab.klaytn.net:8651',
            ],
            provider: klaytnProvider,
        },
    },
    blockExplorers: {
        klaytnScope: {
            name: 'Klaytn Scope Testnet Explorer',
            blockExplorer: 'klaytnScope',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://baobab.klaytnscope.com/',
            docsUrl: 'https://docs.klaytnscope.com',
        },
        default: {
            name: 'Klaytn Scope Testnet Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://baobab.klaytnscope.com/',
            docsUrl: 'https://docs.klaytnscope.com',
        },
    },
    testnet: true,
    mainnetId: 8217,
} as const satisfies Network
