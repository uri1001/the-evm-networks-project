import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { ankr, filecoinProvider } from '../providers'

export const filecoinHyperspace = {
    id: 3141,
    name: 'Filecoin Hyperspace',
    network: 'filecoin-hyperspace',
    infoUrl: 'https://filecoin.io/',
    docsUrl: 'https://docs.filecoin.io/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-3141.json',
    nativeCurrency: {
        name: 'Testnet Filecoin',
        symbol: 'tFIL',
        uSymbol: 'atFIL',
        decimals: 18,
    },
    rpcNodes: {
        ankr: {
            http: ['https://rpc.ankr.com/filecoin_testnet/'],
            provider: ankr,
            authenticated: false,
        },
        filecoin: {
            http: ['https://api.hyperspace.node.glif.io/rpc/v1/'],
            provider: filecoinProvider,
            authenticated: false,
        },
        public: {
            http: ['https://api.hyperspace.node.glif.io/rpc/v1/'],
            provider: filecoinProvider,
            authenticated: false,
        },
        default: {
            http: ['https://api.hyperspace.node.glif.io/rpc/v1/'],
            provider: filecoinProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        filscan: {
            name: 'Hyperspace Filscan',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://hyperspace.filscan.io/',
            standard: BlockExplorerStandard.None,
        },
        filscout: {
            name: 'Hyperspace Filscout',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://hyperspace.filscout.com/',
            standard: BlockExplorerStandard.None,
        },
        filfox: {
            name: 'Hyperspace Filfox',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://hyperspace.filfox.info/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Hyperspace Filfox',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://hyperspace.filfox.info/',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: true,
} as const satisfies Network
