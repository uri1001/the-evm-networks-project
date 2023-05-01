import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { fuseProvider, pokt } from '../providers'

export const fuse = {
    id: 122,
    name: 'Fuse Mainnet',
    network: 'fuse',
    infoUrl: 'https://fuse.io',
    docsUrl: 'https://docs.fuse.io/v2',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-122.json',
    nativeCurrency: {
        name: 'Fuse',
        symbol: 'FUSE',
        uSymbol: 'aFUSE',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            http: [
                `https://fuse-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
                `https://fuse-archival.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
            ],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: ['https://fuse-rpc.gateway.pokt.network'],
            provider: pokt,
            authenticated: false,
        },
        fuse: {
            rpcNode: 'fuse',
            http: ['https://rpc.fuse.io'],
            provider: fuseProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpc.fuse.io'],
            provider: fuseProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpc.fuse.io'],
            provider: fuseProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        fuseExplorer: {
            name: 'Fuse Explorer',
            blockExplorer: 'fuseExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.fuse.io',
            apiUrl: 'https://explorer.fuse.io/api',
            docsUrl: 'https://explorer.fuse.io/api-docs',
        },
        default: {
            name: 'Fuse Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.fuse.io',
            apiUrl: 'https://explorer.fuse.io/api',
            docsUrl: 'https://explorer.fuse.io/api-docs',
        },
    },
    testnet: false,
} as const satisfies Network
