import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { flareProvider } from '../providers'

export const songbird = {
    id: 19,
    name: 'Songbird Mainnet',
    network: 'songbird-canary-network',
    infoUrl: 'https://flare.xyz/',
    docsUrl: 'https://docs.flare.network/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-19.json',
    nativeCurrency: {
        name: 'Songbird',
        symbol: 'SGB',
        uSymbol: 'aSGB',
        decimals: 18,
    },
    rpcNodes: {
        flare: {
            http: [
                'https://songbird-api.flare.network/ext/C/rpc/',
                'https://sgb.ftso.com.au/ext/bc/C/rpc',
            ],
            provider: flareProvider,
            authenticated: false,
        },
        public: {
            http: [
                'https://songbird-api.flare.network/ext/C/rpc/',
                'https://sgb.ftso.com.au/ext/bc/C/rpc',
            ],
            provider: flareProvider,
            authenticated: false,
        },
        default: {
            http: [
                'https://songbird-api.flare.network/ext/C/rpc/',
                'https://sgb.ftso.com.au/ext/bc/C/rpc',
            ],
            provider: flareProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        songbirdExplorer: {
            name: 'Songbird Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://songbird-explorer.flare.network/',
            apiUrl: 'https://songbird-explorer.flare.network/api/',
            docsUrl: 'https://songbird-explorer.flare.network/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Songbird Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://songbird-explorer.flare.network/',
            apiUrl: 'https://songbird-explorer.flare.network/api/',
            docsUrl: 'https://songbird-explorer.flare.network/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
