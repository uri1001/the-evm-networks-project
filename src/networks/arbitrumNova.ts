import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { ankr, arbitrumProvider, blast } from '../providers'

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
            http: ['https://rpc.ankr.com/arbitrumnova'],
            provider: ankr,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://arbitrum-nova.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://arbitrum-nova.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://arbitrum-nova.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        arbitrum: {
            rpcNode: 'arbitrum',
            http: ['https://nova.arbitrum.io/rpc'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://nova.arbitrum.io/rpc'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://nova.arbitrum.io/rpc'],
            provider: arbitrumProvider,
            authenticated: false,
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
