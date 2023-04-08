import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { xdcProvider } from '../providers'

export const xdc = {
    id: 50,
    name: 'XinFin Network',
    network: 'xdc',
    infoUrl: 'https://xinfin.org/',
    docsUrl: 'https://howto.xinfin.org/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-50.json',
    nativeCurrency: {
        name: 'XinFin',
        symbol: 'XDC',
        uSymbol: 'aXDC',
        decimals: 18,
    },
    rpcNodes: {
        xdcProvider: {
            http: [
                'https://erpc.xinfin.network',
                'https://rpc.xinfin.network/',
                'https://rpc1.xinfin.network/',
            ],
            provider: xdcProvider,
            authenticated: false,
        },
        public: {
            http: [
                'https://erpc.xinfin.network',
                'https://rpc.xinfin.network/',
                'https://rpc1.xinfin.network/',
            ],
            provider: xdcProvider,
            authenticated: false,
        },
        default: {
            http: [
                'https://erpc.xinfin.network',
                'https://rpc.xinfin.network/',
                'https://rpc1.xinfin.network/',
            ],
            provider: xdcProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        xdcExplorer: {
            name: 'XinFin Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.xinfin.network/',
            apiUrl: 'https://xdc.blocksscan.io/api/',
            docsUrl: 'https://xdc.blocksscan.io/docs/',
            standard: BlockExplorerStandard.TBD,
        },
        xdcBlockscan: {
            name: 'XinFin Blockscan',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://xdc.blocksscan.io/',
            apiUrl: 'https://xdc.blocksscan.io/api/',
            docsUrl: 'https://xdc.blocksscan.io/docs/',
            standard: BlockExplorerStandard.TBD,
        },
        default: {
            name: 'XinFin Blockscan',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://xdc.blocksscan.io/',
            apiUrl: 'https://xdc.blocksscan.io/api/',
            docsUrl: 'https://xdc.blocksscan.io/docs/',
            standard: BlockExplorerStandard.TBD,
        },
    },
    testnet: false,
} as const satisfies Network
