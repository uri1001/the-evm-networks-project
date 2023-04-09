import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import { alchemy, arbitrumProvider, blast, infura, omnia, quicknode } from '../providers'

export const arbitrumGoerli = {
    id: 421613,
    name: 'Arbitrum Goerli',
    network: 'arbitrum-goerli',
    infoUrl: 'https://arbitrum.io/',
    docsUrl: 'https://developer.arbitrum.io/public-chains/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-421613.json',
    nativeCurrency: {
        name: 'Arbitrum Goerli Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: [`https://arb-goerli.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://arb-goerli.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            http: [`https://arbitrum-goerli.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        blast: {
            http: ['https://arbitrum-goerli.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/arbitrum/goerli/public/'],
            provider: omnia,
            authenticated: false,
        },
        arbitrum: {
            http: ['https://goerli-rollup.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        public: {
            http: ['https://goerli-rollup.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        default: {
            http: ['https://goerli-rollup.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        arbitrumExplorer: {
            name: 'Arbitrum Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://goerli-rollup-explorer.arbitrum.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        arbiscan: {
            name: 'Arbiscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://goerli.arbiscan.io/',
            apiUrl: 'https://api-goerli.arbiscan.io/',
            docsUrl: 'https://docs.arbiscan.io/v/goerli-arbiscan/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Arbiscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://goerli.arbiscan.io/',
            apiUrl: 'https://api-goerli.arbiscan.io/',
            docsUrl: 'https://docs.arbiscan.io/v/goerli-arbiscan/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 88114,
        },
    },
    testnet: true,
} as const satisfies Network
