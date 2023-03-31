import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { auroraProvider, infura, omnia } from '../providers'

export const auroraTestnet = {
    id: 1313161555,
    name: 'Aurora Testnet',
    network: 'aurora-testnet',
    infoUrl: 'https://aurora.dev/',
    docsUrl: 'https://doc.aurora.dev/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1313161555.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            http: ['https://aurora-testnet.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/aurora/testnet/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        aurora: {
            http: ['https://testnet.aurora.dev/'],
            provider: auroraProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://testnet.aurora.dev/'],
            provider: auroraProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://testnet.aurora.dev/'],
            provider: auroraProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        auroraExplorer: {
            name: 'Aurora Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.testnet.aurora.dev/',
            apiUrl: 'https://explorer.testnet.aurora.dev/api/',
            docsUrl: 'https://explorer.testnet.aurora.dev/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Aurora Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.testnet.aurora.dev/',
            apiUrl: 'https://explorer.testnet.aurora.dev/api/',
            docsUrl: 'https://explorer.testnet.aurora.dev/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
