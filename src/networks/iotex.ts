import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { ankr, iotexProvider, pokt } from '../providers'

export const iotex = {
    id: 4689,
    name: 'IoTeX',
    network: 'iotex',
    infoUrl: 'https://iotex.io/',
    docsUrl: 'https://iotex.io/developers/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-4689.json',
    nativeCurrency: {
        name: 'IoTeX',
        symbol: 'IOTX',
        uSymbol: 'aIOTX',
        decimals: 18,
    },
    rpcNodes: {
        ankr: {
            http: ['https://rpc.ankr.com/iotex/'],
            provider: ankr,
            authenticated: false,
        },
        pokt: {
            http: [
                'https://pokt-api.iotex.io/',
                'https://iotex-mainnet.gateway.pokt.network/v1/lb/6176f902e19001003499f492/',
            ],
            provider: pokt,
            authenticated: false,
        },
        iotexProvider: {
            http: ['https://babel-api.mainnet.iotex.io/'],
            provider: iotexProvider,
            authenticated: false,
        },
        public: {
            http: ['https://babel-api.mainnet.iotex.io/'],
            provider: iotexProvider,
            authenticated: false,
        },
        default: {
            http: ['https://babel-api.mainnet.iotex.io/'],
            provider: iotexProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        iotexScan: {
            name: 'IoTeXScan',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://iotexscan.io/',
            standard: BlockExplorerStandard.None,
        },
        iotexScout: {
            name: 'IoTeXScout',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://iotexscout.io/',
            docsUrl: 'https://docs.iotex.io/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'IoTeXScout',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://iotexscout.io/',
            docsUrl: 'https://docs.iotex.io/',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: false,
} as const satisfies Network
