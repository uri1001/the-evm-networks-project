import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { blast, scrollProvider } from '../providers'

export const scrollTestnet = {
    id: 534353,
    name: 'Scroll Testnet',
    network: 'scroll-testnet',
    infoUrl: 'https://scroll.io/',
    docsUrl: 'https://scroll.io/alpha/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-534353.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            http: ['https://scroll-alphanet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        scrollProvider: {
            http: ['https://alpha-rpc.scroll.io/l2/'],
            wss: ['wss://alpha-rpc.scroll.io/l2/ws'],
            provider: scrollProvider,
            authenticated: false,
        },
        public: {
            http: ['https://alpha-rpc.scroll.io/l2/'],
            wss: ['wss://alpha-rpc.scroll.io/l2/ws'],
            provider: scrollProvider,
            authenticated: false,
        },
        default: {
            http: ['https://alpha-rpc.scroll.io/l2/'],
            wss: ['wss://alpha-rpc.scroll.io/l2/ws'],
            provider: scrollProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        scrollExplorer: {
            name: 'Scroll Block Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://blockscout.scroll.io/',
            apiUrl: 'https://blockscout.scroll.io/api/',
            docsUrl: 'https://blockscout.scroll.io/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Scroll Block Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://blockscout.scroll.io/',
            apiUrl: 'https://blockscout.scroll.io/api/',
            docsUrl: 'https://blockscout.scroll.io/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
