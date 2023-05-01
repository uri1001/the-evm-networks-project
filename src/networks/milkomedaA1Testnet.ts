import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { milkomedaProvider } from '../providers'

export const milkomedaA1Testnet = {
    id: 200202,
    name: 'Milkomeda A1 Testnet',
    network: 'milkomedaA1Testnet',
    infoUrl: 'https://milkomeda.com',
    docsUrl: 'https://dcspark.github.io/milkomeda-documentation',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-200202.json',
    nativeCurrency: {
        name: 'MilkTALGO',
        symbol: 'mTALGO',
        uSymbol: 'amTALGO',
        decimals: 18,
    },
    rpcNodes: {
        milkomeda: {
            rpcNode: 'milkomeda',
            http: ['https://rpc-devnet-algorand-rollup.a1.milkomeda.com'],
            provider: milkomedaProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpc-devnet-algorand-rollup.a1.milkomeda.com'],
            provider: milkomedaProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpc-devnet-algorand-rollup.a1.milkomeda.com'],
            provider: milkomedaProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        milkomedaExplorer: {
            name: 'Milkomeda A1 Testnet Explorer',
            blockExplorer: 'milkomedaExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com',
            apiUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com/api',
            docsUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com/api-docs',
        },
        default: {
            name: 'Milkomeda A1 Testnet Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com',
            apiUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com/api',
            docsUrl: 'https://explorer-devnet-algorand-rollup.a1.milkomeda.com/api-docs',
        },
    },
    testnet: true,
    mainnetId: 2002,
} as const satisfies Network
