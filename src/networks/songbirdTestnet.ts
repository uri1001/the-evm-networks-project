import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { flareProvider } from '../providers'

export const songbirdTestnet = {
    id: 16,
    name: 'Songbird Testnet Coston',
    network: 'songbirdTestnet',
    infoUrl: 'https://flare.xyz',
    docsUrl: 'https://docs.flare.network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-16.json',
    nativeCurrency: {
        name: 'Coston Flare',
        symbol: 'CFLR',
        uSymbol: 'aCFLR',
        decimals: 18,
    },
    rpcNodes: {
        flare: {
            rpcNode: 'flare',
            http: ['https://coston-api.flare.network/ext/bc/C/rpc'],
            provider: flareProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://coston-api.flare.network/ext/bc/C/rpc'],
            provider: flareProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://coston-api.flare.network/ext/bc/C/rpc'],
            provider: flareProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        costonExplorer: {
            name: 'Coston Explorer',
            blockExplorer: 'costonExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://coston-explorer.flare.network',
            apiUrl: 'https://coston-explorer.flare.network/api',
            docsUrl: 'https://coston-explorer.flare.network/api-docs',
        },
        default: {
            name: 'Coston Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://coston-explorer.flare.network',
            apiUrl: 'https://coston-explorer.flare.network/api',
            docsUrl: 'https://coston-explorer.flare.network/api-docs',
        },
    },
    testnet: true,
    mainnetId: 19,
} as const satisfies Network
