import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { flareProvider } from '../providers'

export const flareTestnet = {
    id: 16,
    name: 'Flare Testnet Coston',
    network: 'flare-testnet-coston',
    infoUrl: 'https://flare.xyz/',
    docsUrl: 'https://docs.flare.network/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-14.json',
    nativeCurrency: {
        name: 'Coston Flare',
        symbol: 'CFLR',
        uSymbol: 'aCFLR',
        decimals: 18,
    },
    rpcNodes: {
        flareProvider: {
            http: ['https://coston-api.flare.network/ext/bc/C/rpc/'],
            provider: flareProvider,
            authenticated: false,
        },
        public: {
            http: ['https://coston-api.flare.network/ext/bc/C/rpc/'],
            provider: flareProvider,
            authenticated: false,
        },
        default: {
            http: ['https://coston-api.flare.network/ext/bc/C/rpc/'],
            provider: flareProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        costonExplorer: {
            name: 'Coston Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://coston-explorer.flare.network/',
            apiUrl: 'https://coston-explorer.flare.network/api/',
            docsUrl: 'https://coston-explorer.flare.network/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Coston Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://coston-explorer.flare.network/',
            apiUrl: 'https://coston-explorer.flare.network/api/',
            docsUrl: 'https://coston-explorer.flare.network/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
