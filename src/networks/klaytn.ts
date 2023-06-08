import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, blockpi, klaytnProvider, onerpc, pokt } from '../providers'

export const klaytn = {
    id: 8217,
    name: 'Klaytn Mainnet Cypress',
    network: 'klaytn',
    infoUrl: 'https://www.klaytn.com',
    docsUrl: 'https://docs.klaytn.foundation',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-8217.json',
    nativeCurrency: {
        name: 'Klaytn',
        symbol: 'KLAY',
        uSymbol: 'Peb',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [`https://klaytn-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: ['https://klaytn-rpc.gateway.pokt.network'],
            provider: pokt,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Authenticated,
            http: [`https://1rpc.io/${EndpointAuth.Key}/klay`],
            provider: onerpc,
        },
        onerpcPublic: {
            rpcNode: 'onerpcPublic',
            type: EndpointType.Public,
            http: ['https://1rpc.io/klay'],
            provider: onerpc,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/klaytn/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/klaytn'],
            provider: ankr,
        },
        blockpi: {
            rpcNode: 'blockpi',
            type: EndpointType.Authenticated,
            http: [`https://klaytn.blockpi.network/v1/rpc/${EndpointAuth.Key}`],
            wss: [`wss://klaytn.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: blockpi,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            type: EndpointType.Public,
            http: ['https://klaytn.blockpi.network/v1/rpc/public'],
            provider: blockpi,
        },
        klaytn: {
            rpcNode: 'klaytn',
            type: EndpointType.Public,
            http: [
                'https://public-node-api.klaytnapi.com/v1/cypress',
                'https://cypress.fautor.app/archive',
            ],
            provider: klaytnProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: [
                'https://public-node-api.klaytnapi.com/v1/cypress',
                'https://cypress.fautor.app/archive',
            ],
            provider: klaytnProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: [
                'https://public-node-api.klaytnapi.com/v1/cypress',
                'https://cypress.fautor.app/archive',
            ],
            provider: klaytnProvider,
        },
    },
    blockExplorers: {
        klaytnScope: {
            name: 'Klaytn Scope Explorer',
            blockExplorer: 'klaytnScope',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://scope.klaytn.com',
            docsUrl: 'https://docs.klaytnscope.com',
        },
        default: {
            name: 'Klaytn Scope Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://scope.klaytn.com',
            docsUrl: 'https://docs.klaytnscope.com',
        },
    },
    testnet: false,
} as const satisfies Network
