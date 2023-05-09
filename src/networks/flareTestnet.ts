import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { flareProvider } from '../providers'

export const flareTestnet = {
    id: 114,
    name: 'Flare Testnet Coston2',
    network: 'flareTestnet',
    infoUrl: 'https://flare.xyz',
    docsUrl: 'https://docs.flare.network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-114.json',
    nativeCurrency: {
        name: 'Coston2 Flare',
        symbol: 'C2FLR',
        uSymbol: 'aC2FLR',
        decimals: 18,
    },
    rpcNodes: {
        flare: {
            rpcNode: 'flare',
            type: EndpointType.Public,
            http: ['https://coston2-api.flare.network/ext/C/rpc'],
            provider: flareProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://coston2-api.flare.network/ext/C/rpc'],
            provider: flareProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://coston2-api.flare.network/ext/C/rpc'],
            provider: flareProvider,
        },
    },
    blockExplorers: {
        coston2Explorer: {
            name: 'Coston2 Explorer',
            blockExplorer: 'coston2Explorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://coston2-explorer.flare.network',
            apiUrl: 'https://coston2-explorer.flare.network/api',
            docsUrl: 'https://coston2-explorer.flare.network/api-docs',
        },
        default: {
            name: 'Coston2 Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://coston2-explorer.flare.network',
            apiUrl: 'https://coston2-explorer.flare.network/api',
            docsUrl: 'https://coston2-explorer.flare.network/api-docs',
        },
    },
    testnet: true,
    mainnetId: 14,
} as const satisfies Network
