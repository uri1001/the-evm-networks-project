import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import {
    alchemy,
    ankr,
    blast,
    blockpi,
    infura,
    omnia,
    onerpc,
    optimismProvider,
    thirdweb,
} from '../providers'

export const optimisticEthereum = {
    id: 10,
    name: 'Optimism',
    network: 'optimism',
    infoUrl: 'https://optimism.io/',
    docsUrl: 'https://community.optimism.io/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-10.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: ['https://opt-mainnet.g.alchemy.com/v2/'],
            wss: ['wss://opt-mainnet.g.alchemy.com/v2/'],
            provider: alchemy,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        infura: {
            http: ['https://optimism-mainnet.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        thirdweb: {
            http: ['https://optimism.rpc-staging.thirdweb.com'],
            provider: thirdweb,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        ankr: {
            http: ['https://rpc.ankr.com/optimism/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        blast: {
            http: ['https://optimism-mainnet.public.blastapi.io/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        blockpi: {
            http: ['https://optimism.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        onerpc: {
            http: ['https://1rpc.io/op/'],
            provider: onerpc,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        omniatech: {
            http: ['https://endpoints.omniatech.io/v1/op/mainnet/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        optimism: {
            http: ['https://mainnet.optimism.io/'],
            provider: optimismProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        public: {
            http: ['https://mainnet.optimism.io/'],
            provider: optimismProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: ['https://mainnet.optimism.io/'],
            provider: optimismProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
    },
    blockExplorers: {
        optimismScan: {
            name: 'Optimism Etherscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://optimistic.etherscan.io/',
            apiUrl: 'https://api-optimistic.etherscan.io/',
            docsUrl: 'https://docs.optimism.etherscan.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Optimism Etherscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://optimistic.etherscan.io/',
            apiUrl: 'https://api-optimistic.etherscan.io/',
            docsUrl: 'https://docs.optimism.etherscan.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 4286263,
        },
    },
    testnet: false,
} as const satisfies Network
