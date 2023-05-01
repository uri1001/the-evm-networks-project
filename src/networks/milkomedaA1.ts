import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { milkomedaProvider } from '../providers'

export const milkomedaA1 = {
    id: 2002,
    name: 'Milkomeda A1 Mainnet',
    network: 'milkomedaA1',
    infoUrl: 'https://milkomeda.com',
    docsUrl: 'https://dcspark.github.io/milkomeda-documentation',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-2002.json',
    nativeCurrency: {
        name: 'MilkALGO',
        symbol: 'mALGO',
        uSymbol: 'amALGO',
        decimals: 18,
    },
    rpcNodes: {
        milkomeda: {
            rpcNode: 'milkomeda',
            http: ['https://rpc-mainnet-algorand-rollup.a1.milkomeda.com'],
            wss: ['wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws'],
            provider: milkomedaProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpc-mainnet-algorand-rollup.a1.milkomeda.com'],
            wss: ['wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws'],
            provider: milkomedaProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpc-mainnet-algorand-rollup.a1.milkomeda.com'],
            wss: ['wss://rpc-mainnet-algorand-rollup.a1.milkomeda.com/ws'],
            provider: milkomedaProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        milkomedaExplorer: {
            name: 'Milkomeda A1 Explorer',
            blockExplorer: 'milkomedaExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com',
            apiUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api',
            docsUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api-docs',
        },
        default: {
            name: 'Milkomeda A1 Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com',
            apiUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api',
            docsUrl: 'https://explorer-mainnet-algorand-rollup.a1.milkomeda.com/api-docs',
        },
    },
    testnet: false,
} as const satisfies Network
