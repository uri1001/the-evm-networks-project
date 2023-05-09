import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
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
            type: EndpointType.Authenticated,
            http: [`https://iotex-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: [
                'https://pokt-api.iotex.io',
                'https://iotex-mainnet.gateway.pokt.network/v1/lb/6176f902e19001003499f492',
            ],
            provider: pokt,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/iotex/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/iotex'],
            provider: ankr,
        },
        iotex: {
            rpcNode: 'iotex',
            type: EndpointType.Public,
            http: ['https://babel-api.mainnet.iotex.io'],
            wss: ['wss://babel-api.mainnet.iotex.io'],
            provider: iotexProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://babel-api.mainnet.iotex.io'],
            wss: ['wss://babel-api.mainnet.iotex.io'],
            provider: iotexProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://babel-api.mainnet.iotex.io'],
            wss: ['wss://babel-api.mainnet.iotex.io'],
            provider: iotexProvider,
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
