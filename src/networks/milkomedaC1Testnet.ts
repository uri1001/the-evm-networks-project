import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { milkomedaProvider } from '../providers'

export const milkomedaC1Testnet = {
    id: 200101,
    name: 'Milkomeda C1 Testnet',
    network: 'milkomeda-c1 testnet',
    infoUrl: 'https://milkomeda.com',
    docsUrl: 'https://dcspark.github.io/milkomeda-documentation/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-200101.json',
    nativeCurrency: {
        name: 'MilkTADA',
        symbol: 'mTADA',
        uSymbol: 'amTADA',
        decimals: 18,
    },
    rpcNodes: {
        milkomeda: {
            http: ['https://rpc-devnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-devnet-cardano-evm.c1.milkomeda.com'],
            provider: milkomedaProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc-devnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-devnet-cardano-evm.c1.milkomeda.com'],
            provider: milkomedaProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc-devnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-devnet-cardano-evm.c1.milkomeda.com'],
            provider: milkomedaProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        milkomedaExplorer: {
            name: 'Milkomeda C1 Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/',
            apiUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/api/',
            docsUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/api-docs/',
            standard: BlockExplorerStandard.TBD,
        },
        default: {
            name: 'Milkomeda C1 Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/',
            apiUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/api/',
            docsUrl: 'https://explorer-devnet-cardano-evm.c1.milkomeda.com/api-docs/',
            standard: BlockExplorerStandard.TBD,
        },
    },
    testnet: true,
} as const satisfies Network
