import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { flareProvider } from '../providers'

export const songbird = {
    id: 19,
    name: 'Songbird Canary Network',
    network: 'songbird',
    infoUrl: 'https://flare.xyz',
    docsUrl: 'https://docs.flare.network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-19.json',
    nativeCurrency: {
        name: 'Songbird',
        symbol: 'SGB',
        uSymbol: 'aSGB',
        decimals: 18,
    },
    rpcNodes: {
        flare: {
            rpcNode: 'flare',
            type: EndpointType.Public,
            http: [
                'https://songbird-api.flare.network/ext/C/rpc',
                'https://sgb.ftso.com.au/ext/bc/C/rpc',
            ],
            provider: flareProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: [
                'https://songbird-api.flare.network/ext/C/rpc',
                'https://sgb.ftso.com.au/ext/bc/C/rpc',
            ],
            provider: flareProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: [
                'https://songbird-api.flare.network/ext/C/rpc',
                'https://sgb.ftso.com.au/ext/bc/C/rpc',
            ],
            provider: flareProvider,
        },
    },
    blockExplorers: {
        songbirdExplorer: {
            name: 'Songbird Explorer',
            blockExplorer: 'songbirdExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://songbird-explorer.flare.network',
            apiUrl: 'https://songbird-explorer.flare.network/api',
            docsUrl: 'https://songbird-explorer.flare.network/api-docs',
        },
        default: {
            name: 'Songbird Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://songbird-explorer.flare.network',
            apiUrl: 'https://songbird-explorer.flare.network/api',
            docsUrl: 'https://songbird-explorer.flare.network/api-docs',
        },
    },
    testnet: true,
    mainnetId: 14,
} as const satisfies Network
