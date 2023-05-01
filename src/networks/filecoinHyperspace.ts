import { BlockExplorerStandard, BlockExplorerType } from '../enums'
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
            http: ['https://rpc.ankr.com/filecoin_testnet'],
            provider: ankr,
            authenticated: false,
        },
        filecoin: {
            rpcNode: 'filecoin',
            http: ['https://api.hyperspace.node.glif.io/rpc/v1'],
            provider: filecoinProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://api.hyperspace.node.glif.io/rpc/v1'],
            provider: filecoinProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://api.hyperspace.node.glif.io/rpc/v1'],
            provider: filecoinProvider,
            authenticated: false,
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
