import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import {
    ankr,
    avalancheProvider,
    blast,
    infura,
    omnia,
    onerpc,
    pokt,
    publicnode,
} from '../providers'

export const avalanche = {
    id: 43114,
    name: 'Avalanche C-Chain',
    network: 'avalanche',
    infoUrl: 'https://www.avax.network/',
    docsUrl: 'https://docs.avax.network/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-43114.json',
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            http: ['https://avalanche-mainnet.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        pokt: {
            http: [
                'https://avax-mainnet.gateway.pokt.network/v1/lb/605238bf6b986eea7cf36d5e/ext/bc/C/rpc/',
            ],
            provider: pokt,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        onerpc: {
            http: ['https://1rpc.io/avax/c/'],
            provider: onerpc,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/avax/mainnet/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        publicnode: {
            http: ['https://avalanche-c-chain.publicnode.com/'],
            provider: publicnode,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        blast: {
            http: ['https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        ankr: {
            http: ['https://avalanche.public-rpc.com/', 'https://rpc.ankr.com/avalanche/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        avalanche: {
            http: ['https://api.avax.network/ext/bc/C/rpc/'],
            provider: avalancheProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://api.avax.network/ext/bc/C/rpc/'],
            provider: avalancheProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://api.avax.network/ext/bc/C/rpc/'],
            provider: avalancheProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        avascan: {
            name: 'Avascan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://avascan.info/',
            apiUrl: 'https://api.avascan.info/v2/network/mainnet/evm/43114/etherscan/',
            docsUrl: 'https://docs.avascan.info/',
            standard: BlockExplorerStandard.EIP3091,
        },
        snowtrace: {
            name: 'SnowTrace',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://snowtrace.io/',
            apiUrl: 'https://api.snowtrace.io/',
            docsUrl: 'https://docs.snowtrace.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'SnowTrace',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://snowtrace.io/',
            apiUrl: 'https://api.snowtrace.io/',
            docsUrl: 'https://docs.snowtrace.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 11907934,
        },
    },
    testnet: false,
} as const satisfies Network
