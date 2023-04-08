import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { iotexProvider } from '../providers'

export const iotexTestnet = {
    id: 4690,
    name: 'IoTeX Testnet',
    network: 'iotex-testnet',
    infoUrl: 'https://iotex.io/',
    docsUrl: 'https://iotex.io/developers/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-4690.json',
    nativeCurrency: {
        decimals: 18,
        name: 'IoTeX',
        uSymbol: 'aIOTX',
        symbol: 'IOTX',
    },
    rpcNodes: {
        iotexProvider: {
            http: ['https://babel-api.testnet.iotex.io/'],
            provider: iotexProvider,
            authenticated: false,
        },
        public: {
            http: ['https://babel-api.testnet.iotex.io/'],
            provider: iotexProvider,
            authenticated: false,
        },
        default: {
            http: ['https://babel-api.testnet.iotex.io/'],
            provider: iotexProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        iotexScan: {
            name: 'Testnet IoTeXScan',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://testnet.iotexscan.io/',
            standard: BlockExplorerStandard.None,
        },
        iotexScout: {
            name: 'Testnet IoTeXScout',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.iotexscout.io/',
            docsUrl: 'https://docs.iotex.io/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Testnet IoTeXScout',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.iotexscout.io/',
            docsUrl: 'https://docs.iotex.io/',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: true,
} as const satisfies Network
