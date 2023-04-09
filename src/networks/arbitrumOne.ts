import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import { alchemy, arbitrumProvider, blast, infura, omnia, onerpc, quicknode } from '../providers'

export const arbitrumOne = {
    id: 42161,
    name: 'Arbitrum One',
    network: 'arbitrum',
    infoUrl: 'https://arbitrum.io/',
    docsUrl: 'https://developer.arbitrum.io/public-chains/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-42161.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: [`https://arb-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://arb-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            http: [`https://arbitrum-mainnet.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        blast: {
            http: ['https://arbitrum-one.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        onerpc: {
            http: ['https://1rpc.io/arb/'],
            provider: onerpc,
            authenticated: false,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/arbitrum/one/public/'],
            provider: omnia,
            authenticated: false,
        },
        arbitrum: {
            http: ['https://arb1.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        public: {
            http: ['https://arb1.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        default: {
            http: ['https://arb1.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        arbitrumExplorer: {
            name: 'Arbitrum Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.arbitrum.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        arbiscan: {
            name: 'Arbiscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://arbiscan.io/',
            apiUrl: 'https://api.arbiscan.io/',
            docsUrl: 'https://docs.arbiscan.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Arbiscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://arbiscan.io/',
            apiUrl: 'https://api.arbiscan.io/',
            docsUrl: 'https://docs.arbiscan.io/',
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
