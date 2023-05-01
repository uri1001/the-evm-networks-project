import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { alchemy, arbitrumProvider, blast, infura, omnia } from '../providers'

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
            http: [`https://arb-goerli.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://arb-goerli.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            rpcNode: 'infura',
            http: [`https://arbitrum-goerli.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        blast: {
            rpcNode: 'blast',
            http: ['https://arbitrum-goerli.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        omnia: {
            rpcNode: 'omnia',
            http: ['https://endpoints.omniatech.io/v1/arbitrum/goerli/public'],
            provider: omnia,
            authenticated: false,
        },
        arbitrum: {
            rpcNode: 'arbitrum',
            http: ['https://goerli-rollup.arbitrum.io/rpc'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://goerli-rollup.arbitrum.io/rpc'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://goerli-rollup.arbitrum.io/rpc'],
            provider: arbitrumProvider,
            authenticated: false,
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
            apiUrl: 'https://api-goerli.arbiscan.io',
            docsUrl: 'https://docs.arbiscan.io/v/goerli-arbiscan',
        },
        default: {
            name: 'Arbiscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.arbiscan.io',
            apiUrl: 'https://api-goerli.arbiscan.io',
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
