import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { ankr, iotexProvider, pokt } from '../providers'

export const iotex = {
    id: 4689,
    name: 'IoTeX',
    network: 'iotex',
    infoUrl: 'https://iotex.io',
    docsUrl: 'https://iotex.io/developers',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-4689.json',
    nativeCurrency: {
        name: 'IoTeX',
        symbol: 'IOTX',
        uSymbol: 'aIOTX',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            http: [`https://iotex-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: [
                'https://pokt-api.iotex.io',
                'https://iotex-mainnet.gateway.pokt.network/v1/lb/6176f902e19001003499f492',
            ],
            provider: pokt,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/iotex'],
            provider: ankr,
            authenticated: false,
        },
        iotex: {
            rpcNode: 'iotex',
            http: ['https://babel-api.mainnet.iotex.io'],
            wss: ['wss://babel-api.mainnet.iotex.io'],
            provider: iotexProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://babel-api.mainnet.iotex.io'],
            wss: ['wss://babel-api.mainnet.iotex.io'],
            provider: iotexProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://babel-api.mainnet.iotex.io'],
            wss: ['wss://babel-api.mainnet.iotex.io'],
            provider: iotexProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        iotexScan: {
            name: 'IoTeXScan',
            blockExplorer: 'iotexScan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://iotexscan.io',
        },
        iotexScout: {
            name: 'IoTeXScout',
            blockExplorer: 'iotexScout',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://iotexscout.io',
            docsUrl: 'https://docs.iotex.io',
        },
        default: {
            name: 'IoTeXScout',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://iotexscout.io',
            docsUrl: 'https://docs.iotex.io',
        },
    },
    testnet: false,
} as const satisfies Network
