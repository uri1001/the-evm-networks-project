import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { auroraProvider, infura, omnia } from '../providers'

export const aurora = {
    id: 1313161554,
    name: 'Aurora',
    network: 'aurora',
    infoUrl: 'https://aurora.dev/',
    docsUrl: 'https://doc.aurora.dev/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1313161554.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            http: ['https://aurora-mainnet.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/aurora/mainnet/public'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        aurora: {
            http: ['https://mainnet.aurora.dev/'],
            provider: auroraProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://mainnet.aurora.dev/'],
            provider: auroraProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://mainnet.aurora.dev/'],
            provider: auroraProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        auroraExplorer: {
            name: 'Aurora Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.aurora.dev/',
            apiUrl: 'https://explorer.mainnet.aurora.dev/api/',
            docsUrl: 'https://explorer.aurora.dev/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Aurora Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.aurora.dev/',
            apiUrl: 'https://explorer.mainnet.aurora.dev/api/',
            docsUrl: 'https://explorer.aurora.dev/api-docs',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
