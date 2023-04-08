import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { goChainProvider } from '../providers'

export const goChain = {
    id: 60,
    name: 'GoChain',
    network: 'gochain',
    infoUrl: 'https://gochain.io/',
    docsUrl: 'https://gochain.io/developers/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-60.json',
    nativeCurrency: {
        name: 'GoChain Ether',
        symbol: 'GO',
        uSymbol: 'aGO',
        decimals: 18,
    },
    rpcNodes: {
        goChainProvider: {
            http: ['https://rpc.gochain.io/'],
            provider: goChainProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc.gochain.io/'],
            provider: goChainProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc.gochain.io/'],
            provider: goChainProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        gochainExplorer: {
            name: 'GoChain Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.gochain.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'GoChain Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.gochain.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
