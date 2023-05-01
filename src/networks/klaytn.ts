import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { ankr, blockpi, klaytnProvider, pokt } from '../providers'

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
            http: [`https://klaytn-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: ['https://klaytn-rpc.gateway.pokt.network'],
            provider: pokt,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/klaytn'],
            provider: ankr,
            authenticated: false,
        },
        blockpi: {
            rpcNode: 'blockpi',
            http: [`https://klaytn.blockpi.network/v1/rpc/${EndpointAuth.PrivateKey}`],
            wss: [`wss://klaytn.blockpi.network/v1/ws/${EndpointAuth.PrivateKey}`],
            provider: blockpi,
            authenticated: true,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            http: ['https://klaytn.blockpi.network/v1/rpc/public'],
            provider: blockpi,
            authenticated: false,
        },
        klaytn: {
            rpcNode: 'klaytn',
            http: [
                'https://public-node-api.klaytnapi.com/v1/cypress',
                'https://cypress.fautor.app/archive',
            ],
            provider: klaytnProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: [
                'https://public-node-api.klaytnapi.com/v1/cypress',
                'https://cypress.fautor.app/archive',
            ],
            provider: klaytnProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: [
                'https://public-node-api.klaytnapi.com/v1/cypress',
                'https://cypress.fautor.app/archive',
            ],
            provider: klaytnProvider,
            authenticated: false,
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
