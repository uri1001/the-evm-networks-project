import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, avalancheProvider, blast, infura, omnia } from '../providers'

export const avalancheFujiTestnet = {
    id: 43113,
    name: 'Avalanche Fuji',
    network: 'avalanche-fuji',
    infoUrl: 'https://www.avax.network/',
    docsUrl: 'https://docs.avax.network/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-43113.json',
    nativeCurrency: {
        name: 'Avalanche Fuji',
        symbol: 'AVAX',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            http: ['https://avalanche-fuji.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/avax/fuji/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        blast: {
            http: ['https://ava-testnet.public.blastapi.io/ext/bc/C/rpc/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        ankr: {
            http: ['https://rpc.ankr.com/avalanche_fuji/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        avalanche: {
            http: ['https://api.avax-test.network/ext/bc/C/rpc/'],
            provider: avalancheProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://api.avax-test.network/ext/bc/C/rpc/'],
            provider: avalancheProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://api.avax-test.network/ext/bc/C/rpc/'],
            provider: avalancheProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        avascan: {
            name: 'Avascan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.avascan.info/',
            apiUrl: 'https://api.avascan.info/v2/network/testnet/evm/43113/etherscan/',
            docsUrl: 'https://docs.avascan.info/',
            standard: BlockExplorerStandard.EIP3091,
        },
        snowtrace: {
            name: 'SnowTrace',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.snowtrace.io/',
            apiUrl: 'https://api-testnet.snowtrace.io/',
            docsUrl: 'https://docs.snowtrace.io/v/fuji-snowtrace/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'SnowTrace',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.snowtrace.io/',
            apiUrl: 'https://api-testnet.snowtrace.io/',
            docsUrl: 'https://docs.snowtrace.io/v/fuji-snowtrace/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 7096959,
        },
    },
    testnet: true,
} as const satisfies Network
