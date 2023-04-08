import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { flareProvider } from '../providers'

export const flareTestnet2 = {
    id: 114,
    name: 'Flare Testnet Coston2',
    network: 'flare-testnet-coston2',
    infoUrl: 'https://flare.xyz/',
    docsUrl: 'https://docs.flare.network/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-114.json',
    nativeCurrency: {
        name: 'Coston2 Flare',
        symbol: 'C2FLR',
        uSymbol: 'aC2FLR',
        decimals: 18,
    },
    rpcNodes: {
        flareProvider: {
            http: ['https://coston2-api.flare.network/ext/C/rpc/'],
            provider: flareProvider,
            authenticated: false,
        },
        public: {
            http: ['https://coston2-api.flare.network/ext/C/rpc/'],
            provider: flareProvider,
            authenticated: false,
        },
        default: {
            http: ['https://coston2-api.flare.network/ext/C/rpc/'],
            provider: flareProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        coston2Explorer: {
            name: 'Coston2 Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://coston2-explorer.flare.network/',
            apiUrl: 'https://coston2-explorer.flare.network/api/',
            docsUrl: 'https://coston2-explorer.flare.network/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Coston2 Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://coston2-explorer.flare.network/',
            apiUrl: 'https://coston2-explorer.flare.network/api/',
            docsUrl: 'https://coston2-explorer.flare.network/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
