import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { goChainProvider } from '../providers'

export const goChainTestnet = {
    id: 31337,
    name: 'GoChain Testnet',
    network: 'gochain-testnet',
    infoUrl: 'https://gochain.io',
    docsUrl: 'https://gochain.io/developers/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-31337.json',
    nativeCurrency: {
        name: 'GoChain Ether',
        symbol: 'GO',
        uSymbol: 'aGO',
        decimals: 18,
    },
    rpcNodes: {
        goChainProvider: {
            http: ['https://testnet-rpc.gochain.io/'],
            provider: goChainProvider,
            authenticated: false,
        },
        public: {
            http: ['https://testnet-rpc.gochain.io/'],
            provider: goChainProvider,
            authenticated: false,
        },
        default: {
            http: ['https://testnet-rpc.gochain.io/'],
            provider: goChainProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        gochainExplorer: {
            name: 'GoChain Testnet Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://testnet-explorer.gochain.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'GoChain Testnet Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://testnet-explorer.gochain.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
