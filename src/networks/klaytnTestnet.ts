import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { ankr, blockpi, klaytnProvider } from '../providers'

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
            http: ['https://rpc.ankr.com/klaytn_testnet'],
            provider: ankr,
            authenticated: false,
        },
        blockpi: {
            rpcNode: 'blockpi',
            http: [`https://klaytn-baobab.blockpi.network/v1/rpc/${EndpointAuth.PrivateKey}`],
            wss: [`wss://klaytn-baobab.blockpi.network/v1/ws/${EndpointAuth.PrivateKey}`],
            provider: blockpi,
            authenticated: false,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            http: ['https://klaytn-baobab.blockpi.network/v1/rpc/public'],
            provider: blockpi,
            authenticated: false,
        },
        klaytn: {
            rpcNode: 'klaytn',
            http: [
                'https://public-node-api.klaytnapi.com/v1/baobab',
                'https://api.baobab.klaytn.net:8651',
            ],
            provider: klaytnProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: [
                'https://public-node-api.klaytnapi.com/v1/baobab',
                'https://api.baobab.klaytn.net:8651',
            ],
            provider: klaytnProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: [
                'https://public-node-api.klaytnapi.com/v1/baobab',
                'https://api.baobab.klaytn.net:8651',
            ],
            provider: klaytnProvider,
            authenticated: false,
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
