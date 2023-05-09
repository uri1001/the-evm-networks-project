import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { goChainProvider } from '../providers'

export const goChainTestnet = {
    id: 31337,
    name: 'GoChain Testnet',
    network: 'goChainTestnet',
    infoUrl: 'https://gochain.io',
    docsUrl: 'https://gochain.io/developers',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-31337.json',
    nativeCurrency: {
        name: 'GoChain Ether',
        symbol: 'GO',
        uSymbol: 'aGO',
        decimals: 18,
    },
    rpcNodes: {
        goChain: {
            rpcNode: 'goChain',
            type: EndpointType.Public,
            http: ['https://testnet-rpc.gochain.io'],
            provider: goChainProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://testnet-rpc.gochain.io'],
            provider: goChainProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://testnet-rpc.gochain.io'],
            provider: goChainProvider,
        },
    },
    blockExplorers: {
        gochainExplorer: {
            name: 'GoChain Testnet Explorer',
            blockExplorer: 'gochainExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet-explorer.gochain.io',
        },
        default: {
            name: 'GoChain Testnet Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet-explorer.gochain.io',
        },
    },
    testnet: true,
    mainnetId: 60,
} as const satisfies Network
