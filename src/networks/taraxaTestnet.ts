import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { taraxaProvider } from '../providers'

export const taraxaTestnet = {
    id: 842,
    name: 'Taraxa Testnet',
    network: 'taraxa-testnet',
    infoUrl: 'https://taraxa.io/',
    docsUrl: 'https://docs.taraxa.io/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-842.json',
    nativeCurrency: {
        name: 'Tara',
        symbol: 'tTARA',
        uSymbol: 'atTARA',
        decimals: 18,
    },
    rpcNodes: {
        taraxaProvider: {
            http: ['https://rpc.testnet.taraxa.io/'],
            provider: taraxaProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc.testnet.taraxa.io/'],
            provider: taraxaProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc.testnet.taraxa.io/'],
            provider: taraxaProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        taraxaExplorer: {
            name: 'Taraxa Testnet Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.testnet.taraxa.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Taraxa Testnet Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.testnet.taraxa.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
