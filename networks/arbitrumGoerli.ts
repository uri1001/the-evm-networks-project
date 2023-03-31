import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { alchemy, arbitrumProvider, blast, infura, omnia } from '../providers'

export const arbitrumGoerli = {
    id: 421613,
    name: 'Arbitrum Goerli',
    network: 'arbitrum-goerli',
    infoUrl: 'https://arbitrum.io/',
    docsUrl: 'https://developer.arbitrum.io/public-chains/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-421613.json',
    nativeCurrency: {
        name: 'Arbitrum Goerli Ether',
        symbol: 'AGOR',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: ['https://arb-goerli.g.alchemy.com/v2/'],
            wss: ['wss://arb-goerli.g.alchemy.com/v2/'],
            provider: alchemy,
            dataPrivacy: RpcDataPrivacyType.NoPrivacy,
        },
        infura: {
            http: ['https://arbitrum-goerli.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        blast: {
            http: ['https://arbitrum-goerli.public.blastapi.io/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/arbitrum/goerli/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        arbitrum: {
            http: ['https://goerli-rollup.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://goerli-rollup.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://goerli-rollup.arbitrum.io/rpc/'],
            provider: arbitrumProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
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
