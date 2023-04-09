import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { arbitrumProvider, blast, quicknode } from '../providers'

export const arbitrumNova = {
    id: 42170,
    name: 'Arbitrum Nova',
    network: 'arbitrum-nova',
    infoUrl: 'https://nova.arbitrum.io/',
    docsUrl: 'https://developer.arbitrum.io/inside-anytrust/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-42170.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        blast: {
            http: ['https://arbitrum-nova.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        arbitrum: {
            http: ['https://nova.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        public: {
            http: ['https://nova.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        default: {
            http: ['https://nova.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        arbitrumExplorer: {
            name: 'Arbitrum Nova Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://nova-explorer.arbitrum.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        arbiscan: {
            name: 'Arbitrum Nova Arbiscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://nova.arbiscan.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Arbitrum Nova Arbiscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://nova.arbiscan.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7654707,
        },
    },
    testnet: false,
} as const satisfies Network
