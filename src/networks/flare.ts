import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

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
        uSymbol: 'aFLR',
        decimals: 18,
    },
    rpcNodes: {
        flareProvider: {
            http: ['https://flare-api.flare.network/ext/C/rpc/'],
            provider: flareProvider,
            authenticated: false,
        },
        public: {
            http: ['https://flare-api.flare.network/ext/C/rpc/'],
            provider: flareProvider,
            authenticated: false,
        },
        default: {
            http: ['https://flare-api.flare.network/ext/C/rpc/'],
            provider: flareProvider,
            authenticated: false,
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
