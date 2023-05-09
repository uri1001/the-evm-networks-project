import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, filecoinProvider } from '../providers'

export const filecoinHyperspace = {
    id: 3141,
    name: 'Filecoin Hyperspace',
    network: 'filecoinHyperspace',
    infoUrl: 'https://filecoin.io',
    docsUrl: 'https://docs.filecoin.io',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-3141.json',
    nativeCurrency: {
        name: 'Testnet Filecoin',
        symbol: 'tFIL',
        uSymbol: 'atFIL',
        decimals: 18,
    },
    rpcNodes: {
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/filecoin_testnet/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/filecoin_testnet'],
            provider: ankr,
        },
        filecoin: {
            rpcNode: 'filecoin',
            type: EndpointType.Public,
            http: ['https://api.hyperspace.node.glif.io/rpc/v1'],
            provider: filecoinProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://api.hyperspace.node.glif.io/rpc/v1'],
            provider: filecoinProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://api.hyperspace.node.glif.io/rpc/v1'],
            provider: filecoinProvider,
        },
    },
    blockExplorers: {
        filscan: {
            name: 'Hyperspace Filscan',
            blockExplorer: 'filscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://hyperspace.filscan.io',
        },
        filscout: {
            name: 'Hyperspace Filscout',
            blockExplorer: 'filscout',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://hyperspace.filscout.com',
        },
        filfox: {
            name: 'Hyperspace Filfox',
            blockExplorer: 'filfox',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://hyperspace.filfox.info',
        },
        default: {
            name: 'Hyperspace Filfox',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://hyperspace.filfox.info',
        },
    },
    testnet: true,
    mainnetId: 314,
} as const satisfies Network
