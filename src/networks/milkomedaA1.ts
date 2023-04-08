import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { milkomedaProvider } from '../providers'

export const milkomedaA1 = {
    id: 2002,
    name: 'Milkomeda A1 Mainnet',
    network: 'milkomeda-a1 mainnet',
    infoUrl: 'https://milkomeda.com/',
    docsUrl: 'https://dcspark.github.io/milkomeda-documentation/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-2002.json',
    nativeCurrency: {
        name: 'MilkALGO',
        symbol: 'mALGO',
        uSymbol: 'amALGO',
        decimals: 18,
    },
    rpcNodes: {
        milkomeda: {
            http: ['https://rpc-mainnet-algorand-rollup.a1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws/'],
            provider: milkomedaProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc-mainnet-algorand-rollup.a1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws/'],
            provider: milkomedaProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc-mainnet-algorand-rollup.a1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws/'],
            provider: milkomedaProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        milkomedaExplorer: {
            name: 'Milkomeda A1 Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/',
            apiUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api/',
            docsUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api-docs/',
            standard: BlockExplorerStandard.TBD,
        },
        default: {
            name: 'Milkomeda A1 Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/',
            apiUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api/',
            docsUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api-docs/',
            standard: BlockExplorerStandard.TBD,
        },
    },
    testnet: false,
} as const satisfies Network
