import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { fuseProvider, pokt } from '../providers'

export const fuse = {
    id: 122,
    name: 'Fuse Mainnet',
    network: 'fuse-mainnet',
    infoUrl: 'https://fuse.io/',
    docsUrl: 'https://docs.fuse.io/v2/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-122.json',
    nativeCurrency: {
        name: 'Fuse',
        symbol: 'FUSE',
        uSymbol: 'aFUSE',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            http: ['https://fuse-rpc.gateway.pokt.network/'],
            provider: pokt,
            authenticated: false,
        },
        fuse: {
            http: ['https://rpc.fuse.io/'],
            provider: fuseProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc.fuse.io/'],
            provider: fuseProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc.fuse.io/'],
            provider: fuseProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        fuseExplorer: {
            name: 'Fuse Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.fuse.io/',
            apiUrl: 'https://explorer.fuse.io/api/',
            docsUrl: 'https://explorer.fuse.io/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Fuse Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.fuse.io/',
            apiUrl: 'https://explorer.fuse.io/api/',
            docsUrl: 'https://explorer.fuse.io/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
