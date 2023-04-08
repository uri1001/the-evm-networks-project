import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { milkomedaProvider } from '../providers'

export const milkomedaC1 = {
    id: 2001,
    name: 'Milkomeda C1 Mainnet',
    network: 'milkomeda-c1 mainnet',
    infoUrl: 'https://milkomeda.com/',
    docsUrl: 'https://dcspark.github.io/milkomeda-documentation/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-2001.json',
    nativeCurrency: {
        name: 'MilkADA',
        symbol: 'mADA',
        uSymbol: 'amADA',
        decimals: 18,
    },
    rpcNodes: {
        milkomeda: {
            http: ['https://rpc-mainnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
            provider: milkomedaProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc-mainnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
            provider: milkomedaProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc-mainnet-cardano-evm.c1.milkomeda.com/'],
            wss: ['wss://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
            provider: milkomedaProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        milkomedaExplorer: {
            name: 'Milkomeda C1 Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/',
            apiUrl: 'https://localhost:4000/api/',
            docsUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/api-docs/',
            standard: BlockExplorerStandard.TBD,
        },
        default: {
            name: 'Milkomeda C1 Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/',
            apiUrl: 'https://localhost:4000/api/',
            docsUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/api-docs/',
            standard: BlockExplorerStandard.TBD,
        },
    },
    testnet: false,
} as const satisfies Network
