import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { milkomedaProvider } from '../providers'

export const milkomedaC1 = {
    id: 2001,
    name: 'Milkomeda C1 Mainnet',
    network: 'milkomedaC1',
    infoUrl: 'https://milkomeda.com',
    docsUrl: 'https://dcspark.github.io/milkomeda-documentation',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-2001.json',
    nativeCurrency: {
        name: 'MilkADA',
        symbol: 'mADA',
        uSymbol: 'amADA',
        decimals: 18,
    },
    rpcNodes: {
        milkomeda: {
            rpcNode: 'milkomeda',
            type: EndpointType.Public,
            http: ['https://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
            wss: ['wss://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
            provider: milkomedaProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
            wss: ['wss://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
            provider: milkomedaProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
            wss: ['wss://rpc-mainnet-cardano-evm.c1.milkomeda.com'],
            provider: milkomedaProvider,
        },
    },
    blockExplorers: {
        milkomedaExplorer: {
            name: 'Milkomeda C1 Explorer',
            blockExplorer: 'milkomedaExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com',
            apiUrl: 'https://localhost:4000/api',
            docsUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/api-docs',
        },
        default: {
            name: 'Milkomeda C1 Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com',
            apiUrl: 'https://localhost:4000/api',
            docsUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/api-docs',
        },
    },
    testnet: false,
} as const satisfies Network
