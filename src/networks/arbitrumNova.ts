import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, arbitrumProvider, blast, lava } from '../providers'

export const arbitrumNova = {
    id: 42170,
    name: 'Arbitrum Nova',
    network: 'arbitrumNova',
    infoUrl: 'https://nova.arbitrum.io',
    docsUrl: 'https://developer.arbitrum.io/inside-anytrust',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-42170.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/arbitrumnova/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/arbitrumnova'],
            provider: ankr,
        },
        lava: {
            rpcNode: 'lava',
            type: EndpointType.Authenticated,
            http: [`https://g.w.lavanet.xyz:443/gateway/arbn/rpc-http/${EndpointAuth.Key}`],
            wss: [`wss://g.w.lavanet.xyz:443/gateway/arbn/rpc/${EndpointAuth.Key}`],
            provider: lava,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://arbitrum-nova.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://arbitrum-nova.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://arbitrum-nova.public.blastapi.io'],
            wss: ['wss://arbitrum-nova.public.blastapi.io'],
            provider: blast,
        },
        arbitrum: {
            rpcNode: 'arbitrum',
            type: EndpointType.Public,
            http: ['https://nova.arbitrum.io/rpc'],
            provider: arbitrumProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://nova.arbitrum.io/rpc'],
            provider: arbitrumProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://nova.arbitrum.io/rpc'],
            provider: arbitrumProvider,
        },
    },
    blockExplorers: {
        arbitrumExplorer: {
            name: 'Arbitrum Nova Explorer',
            blockExplorer: 'arbitrumExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://nova-explorer.arbitrum.io',
        },
        arbiscan: {
            name: 'Arbitrum Nova Arbiscan',
            blockExplorer: 'arbiscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://nova.arbiscan.io',
        },
        default: {
            name: 'Arbitrum Nova Arbiscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://nova.arbiscan.io',
        },
    },
    testnet: false,
} as const satisfies Network
