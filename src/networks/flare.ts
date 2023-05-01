import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { flareProvider } from '../providers'

export const flare = {
    id: 14,
    name: 'Flare Mainnet',
    network: 'flare',
    infoUrl: 'https://flare.xyz',
    docsUrl: 'https://docs.flare.network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-14.json',
    nativeCurrency: {
        name: 'Flare',
        symbol: 'FLR',
        uSymbol: 'aFLR',
        decimals: 18,
    },
    rpcNodes: {
        flare: {
            rpcNode: 'flare',
            http: ['https://flare-api.flare.network/ext/C/rpc'],
            provider: flareProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://flare-api.flare.network/ext/C/rpc'],
            provider: flareProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://flare-api.flare.network/ext/C/rpc'],
            provider: flareProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        flareExplorer: {
            name: 'Flare Explorer',
            blockExplorer: 'flareExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://flare-explorer.flare.network',
            apiUrl: 'https://flare-explorer.flare.network/api',
            docsUrl: 'https://flare-explorer.flare.network/api-docs',
        },
        default: {
            name: 'Flare Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://flare-explorer.flare.network',
            apiUrl: 'https://flare-explorer.flare.network/api',
            docsUrl: 'https://flare-explorer.flare.network/api-docs',
        },
    },
    testnet: false,
} as const satisfies Network
