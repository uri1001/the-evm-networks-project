import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, filecoinProvider } from '../providers'

export const filecoin = {
    id: 314,
    name: 'Filecoin Mainnet',
    network: 'filecoin',
    infoUrl: 'https://filecoin.io',
    docsUrl: 'https://docs.filecoin.io',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-314.json',
    nativeCurrency: {
        name: 'Filecoin',
        symbol: 'FIL',
        uSymbol: 'aFIL',
        decimals: 18,
    },
    rpcNodes: {
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/filecoin/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/filecoin'],
            provider: ankr,
        },
        filecoin: {
            rpcNode: 'filecoin',
            type: EndpointType.Public,
            http: ['https://api.node.glif.io/rpc/v1', 'https://api.node.glif.io'],
            provider: filecoinProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://api.node.glif.io/rpc/v1', 'https://api.node.glif.io'],
            provider: filecoinProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://api.node.glif.io/rpc/v1', 'https://api.node.glif.io'],
            provider: filecoinProvider,
        },
    },
    blockExplorers: {
        glif: {
            name: 'Glif Explorer',
            blockExplorer: 'glif',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://explorer.glif.io',
        },
        filscan: {
            name: 'Filscan',
            blockExplorer: 'filscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://filscan.io',
        },
        filscout: {
            name: 'Filscout',
            blockExplorer: 'filscout',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://www.filscout.com',
        },
        filfox: {
            name: 'Filfox',
            blockExplorer: 'filfox',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://filfox.info',
        },
        default: {
            name: 'Filfox',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://filfox.info',
        },
    },
    testnet: false,
} as const satisfies Network
