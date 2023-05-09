import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, iotexProvider } from '../providers'

export const iotexTestnet = {
    id: 4690,
    name: 'IoTeX Testnet',
    network: 'iotexTestnet',
    infoUrl: 'https://iotex.io',
    docsUrl: 'https://iotex.io/developers',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-4690.json',
    nativeCurrency: {
        name: 'IoTeX',
        symbol: 'IOTX',
        uSymbol: 'aIOTX',
        decimals: 18,
    },
    rpcNodes: {
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/iotex_testnet/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/iotex_testnet/'],
            provider: ankr,
        },
        iotex: {
            rpcNode: 'iotex',
            type: EndpointType.Public,
            http: ['https://babel-api.testnet.iotex.io'],
            wss: ['wss://babel-api.testnet.iotex.io'],
            provider: iotexProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://babel-api.testnet.iotex.io'],
            wss: ['wss://babel-api.testnet.iotex.io'],
            provider: iotexProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://babel-api.testnet.iotex.io'],
            wss: ['wss://babel-api.testnet.iotex.io'],
            provider: iotexProvider,
        },
    },
    blockExplorers: {
        iotexScan: {
            name: 'Testnet IoTeXScan',
            blockExplorer: 'iotexScan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.iotexscan.io',
        },
        iotexScout: {
            name: 'Testnet IoTeXScout',
            blockExplorer: 'iotexScout',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.iotexscout.io',
            docsUrl: 'https://docs.iotex.io',
        },
        default: {
            name: 'Testnet IoTeXScout',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.iotexscout.io',
            docsUrl: 'https://docs.iotex.io',
        },
    },
    testnet: true,
    mainnetId: 4689,
} as const satisfies Network
