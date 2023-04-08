import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { taraxaProvider } from '../providers'

export const taraxa = {
    id: 841,
    name: 'Taraxa Mainnet',
    network: 'taraxa',
    infoUrl: 'https://taraxa.io/',
    docsUrl: 'https://docs.taraxa.io/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-841.json',
    nativeCurrency: {
        name: 'Tara',
        symbol: 'TARA',
        uSymbol: 'aTARA',
        decimals: 18,
    },
    rpcNodes: {
        taraxaProvider: {
            http: ['https://rpc.mainnet.taraxa.io/'],
            provider: taraxaProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc.mainnet.taraxa.io/'],
            provider: taraxaProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc.mainnet.taraxa.io/'],
            provider: taraxaProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        taraxaExplorer: {
            name: 'Taraxa Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.mainnet.taraxa.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Taraxa Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.mainnet.taraxa.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
