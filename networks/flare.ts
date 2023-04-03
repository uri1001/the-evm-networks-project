import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { flareProvider } from '../providers'

export const flare = {
    id: 14,
    name: 'Flare Mainnet',
    network: 'flare-mainnet',
    infoUrl: 'https://flare.xyz/',
    docsUrl: 'https://docs.flare.network/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-14.json',
    nativeCurrency: {
        name: 'Flare',
        symbol: 'FLR',
        decimals: 18,
    },
    rpcNodes: {
        flareProvider: {
            http: ['https://flare-api.flare.network/ext/C/rpc/'],
            provider: flareProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://flare-api.flare.network/ext/C/rpc/'],
            provider: flareProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://flare-api.flare.network/ext/C/rpc/'],
            provider: flareProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        flareExplorer: {
            name: 'Flare Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://flare-explorer.flare.network/',
            apiUrl: 'https://flare-explorer.flare.network/api/',
            docsUrl: 'https://flare-explorer.flare.network/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Flare Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://flare-explorer.flare.network/',
            apiUrl: 'https://flare-explorer.flare.network/api/',
            docsUrl: 'https://flare-explorer.flare.network/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
