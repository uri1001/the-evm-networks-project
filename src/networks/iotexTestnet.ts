import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { iotexProvider } from '../providers'

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
        iotex: {
            rpcNode: 'iotex',
            http: ['https://babel-api.testnet.iotex.io'],
            wss: ['wss://babel-api.testnet.iotex.io'],
            provider: iotexProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://babel-api.testnet.iotex.io'],
            wss: ['wss://babel-api.testnet.iotex.io'],
            provider: iotexProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://babel-api.testnet.iotex.io'],
            wss: ['wss://babel-api.testnet.iotex.io'],
            provider: iotexProvider,
            authenticated: false,
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
