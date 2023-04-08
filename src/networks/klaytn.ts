import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { blockpi, klaytnProvider } from '../providers'

export const klaytn = {
    id: 8217,
    name: 'Klaytn',
    network: 'klaytn',
    infoUrl: 'https://www.klaytn.com/',
    docsUrl: 'https://docs.klaytn.foundation/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-8217.json',
    nativeCurrency: {
        name: 'Klaytn',
        symbol: 'KLAY',
        uSymbol: 'Peb',
        decimals: 18,
    },
    rpcNodes: {
        blockpi: {
            http: ['https://klaytn.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            authenticated: false,
        },
        klaytnProvider: {
            http: [
                'https://public-node-api.klaytnapi.com/v1/cypress/',
                'https://cypress.fautor.app/archive/',
            ],
            provider: klaytnProvider,
            authenticated: false,
        },
        public: {
            http: [
                'https://public-node-api.klaytnapi.com/v1/cypress/',
                'https://cypress.fautor.app/archive/',
            ],
            provider: klaytnProvider,
            authenticated: false,
        },
        default: {
            http: [
                'https://public-node-api.klaytnapi.com/v1/cypress/',
                'https://cypress.fautor.app/archive/',
            ],
            provider: klaytnProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        klaytnScope: {
            name: 'KlaytnScope',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://scope.klaytn.com/',
            docsUrl: 'https://docs.klaytnscope.com/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'KlaytnScope',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://scope.klaytn.com/',
            docsUrl: 'https://docs.klaytnscope.com/',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: false,
} as const satisfies Network
