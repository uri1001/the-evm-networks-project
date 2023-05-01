import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { blast, blockpi, scrollProvider } from '../providers'

export const scrollTestnet = {
    id: 534353,
    name: 'Scroll Testnet',
    network: 'scrollTestnet',
    infoUrl: 'https://scroll.io',
    docsUrl: 'https://scroll.io/alpha',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-534353.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        blockpi: {
            rpcNode: 'blockpi',
            http: [`https://scroll-testnet.blockpi.network/v1/rpc/${EndpointAuth.PrivateKey}`],
            wss: [`wss://scroll-testnet.blockpi.network/v1/ws/${EndpointAuth.PrivateKey}`],
            provider: blockpi,
            authenticated: true,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            http: ['https://scroll-testnet.blockpi.network/v1/rpc/public'],
            provider: blockpi,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://scroll-alphanet.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://scroll-alphanet.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://scroll-alphanet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        scroll: {
            rpcNode: 'scroll',
            http: ['https://alpha-rpc.scroll.io/l2'],
            wss: ['wss://alpha-rpc.scroll.io/l2/ws'],
            provider: scrollProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://alpha-rpc.scroll.io/l2'],
            wss: ['wss://alpha-rpc.scroll.io/l2/ws'],
            provider: scrollProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://alpha-rpc.scroll.io/l2'],
            wss: ['wss://alpha-rpc.scroll.io/l2/ws'],
            provider: scrollProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        scrollExplorer: {
            name: 'Scroll Block Explorer',
            blockExplorer: 'scrollExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://blockscout.scroll.io',
            apiUrl: 'https://blockscout.scroll.io/api',
            docsUrl: 'https://blockscout.scroll.io/api-docs',
        },
        default: {
            name: 'Scroll Block Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://blockscout.scroll.io',
            apiUrl: 'https://blockscout.scroll.io/api',
            docsUrl: 'https://blockscout.scroll.io/api-docs',
        },
    },
    testnet: true,
} as const satisfies Network
