import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { goChainProvider } from '../providers'

export const goChain = {
    id: 60,
    name: 'GoChain',
    network: 'goChain',
    infoUrl: 'https://gochain.io',
    docsUrl: 'https://gochain.io/developers',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-60.json',
    nativeCurrency: {
        name: 'GoChain Ether',
        symbol: 'GO',
        uSymbol: 'aGO',
        decimals: 18,
    },
    rpcNodes: {
        goChain: {
            rpcNode: 'goChain',
            http: ['https://rpc.gochain.io'],
            provider: goChainProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpc.gochain.io'],
            provider: goChainProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpc.gochain.io'],
            provider: goChainProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        gochainExplorer: {
            name: 'GoChain Explorer',
            blockExplorer: 'gochainExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.gochain.io',
        },
        default: {
            name: 'GoChain Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.gochain.io',
        },
    },
    testnet: false,
} as const satisfies Network
