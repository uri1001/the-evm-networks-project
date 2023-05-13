import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { alchemy, arbitrumProvider, blast, infura, lava, omnia } from '../providers'

export const arbitrumGoerli = {
    id: 421613,
    name: 'Arbitrum Goerli',
    network: 'arbitrumGoerli',
    infoUrl: 'https://arbitrum.io',
    docsUrl: 'https://developer.arbitrum.io/public-chains',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-421613.json',
    nativeCurrency: {
        name: 'Arbitrum Goerli Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            rpcNode: 'alchemy',
            type: EndpointType.Authenticated,
            http: [`https://arb-goerli.g.alchemy.com/v2/${EndpointAuth.Key}`],
            wss: [`wss://arb-goerli.g.alchemy.com/v2/${EndpointAuth.Key}`],
            provider: alchemy,
        },
        infura: {
            rpcNode: 'infura',
            type: EndpointType.Authenticated,
            http: [`https://arbitrum-goerli.infura.io/v3/${EndpointAuth.Key}`],
            provider: infura,
        },
        lava: {
            rpcNode: 'lava',
            type: EndpointType.Authenticated,
            http: [`https://g.w.lavanet.xyz:443/gateway/arb1/rpc-http/${EndpointAuth.Key}`],
            wss: [`wss://g.w.lavanet.xyz:443/gateway/arb1/rpc/${EndpointAuth.Key}`],
            provider: lava,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://arbitrum-goerli.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://arbitrum-goerli.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://arbitrum-goerli.public.blastapi.io'],
            wss: ['wss://arbitrum-goerli.public.blastapi.io'],
            provider: blast,
        },
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/arbitrum/goerli/${EndpointAuth.Key}`],
            wss: [`wss://endpoints.omniatech.io/v1/arbitrum/goerli/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/arbitrum/goerli/public'],
            provider: omnia,
        },
        arbitrum: {
            rpcNode: 'arbitrum',
            type: EndpointType.Public,
            http: ['https://goerli-rollup.arbitrum.io/rpc'],
            provider: arbitrumProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://goerli-rollup.arbitrum.io/rpc'],
            provider: arbitrumProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://goerli-rollup.arbitrum.io/rpc'],
            provider: arbitrumProvider,
        },
    },
    blockExplorers: {
        arbitrumExplorer: {
            name: 'Arbitrum Explorer',
            blockExplorer: 'arbitrumExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli-rollup-explorer.arbitrum.io',
        },
        arbiscan: {
            name: 'Arbiscan',
            blockExplorer: 'arbiscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.arbiscan.io',
            apiUrl: 'https://api-goerli.arbiscan.io/api',
            docsUrl: 'https://docs.arbiscan.io/v/goerli-arbiscan',
        },
        default: {
            name: 'Arbiscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.arbiscan.io',
            apiUrl: 'https://api-goerli.arbiscan.io/api',
            docsUrl: 'https://docs.arbiscan.io/v/goerli-arbiscan',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 88114,
            deployTxHash: '0xf97f47c906ad3c6ff094ca3b755609ffb263f5cbcb756e4b432eba07145a075e',
        },
    },
    testnet: true,
    mainnetId: 42161,
} as const satisfies Network
