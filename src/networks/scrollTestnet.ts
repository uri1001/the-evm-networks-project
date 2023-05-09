import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
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
            type: EndpointType.Authenticated,
            http: [`https://scroll-testnet.blockpi.network/v1/rpc/${EndpointAuth.Key}`],
            wss: [`wss://scroll-testnet.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: blockpi,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            type: EndpointType.Public,
            http: ['https://scroll-testnet.blockpi.network/v1/rpc/public'],
            wss: ['wss://scroll-alphanet.public.blastapi.io'],
            provider: blockpi,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://scroll-alphanet.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://scroll-alphanet.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://scroll-alphanet.public.blastapi.io'],
            provider: blast,
        },
        scroll: {
            rpcNode: 'scroll',
            type: EndpointType.Public,
            http: ['https://alpha-rpc.scroll.io/l2'],
            wss: ['wss://alpha-rpc.scroll.io/l2/ws'],
            provider: scrollProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://alpha-rpc.scroll.io/l2'],
            wss: ['wss://alpha-rpc.scroll.io/l2/ws'],
            provider: scrollProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://alpha-rpc.scroll.io/l2'],
            wss: ['wss://alpha-rpc.scroll.io/l2/ws'],
            provider: scrollProvider,
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
