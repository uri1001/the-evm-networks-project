import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { xdcProvider } from '../providers'

export const xdc = {
    id: 50,
    name: 'XinFin Network',
    network: 'xdc',
    infoUrl: 'https://xinfin.org',
    docsUrl: 'https://howto.xinfin.org',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-50.json',
    nativeCurrency: {
        name: 'XinFin',
        symbol: 'XDC',
        uSymbol: 'aXDC',
        decimals: 18,
    },
    rpcNodes: {
        xdc: {
            rpcNode: 'xdc',
            http: [
                'https://rpc.xinfin.network',
                'https://erpc.xinfin.network',
                'https://rpc1.xinfin.network',
            ],
            provider: xdcProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: [
                'https://rpc.xinfin.network',
                'https://erpc.xinfin.network',
                'https://rpc1.xinfin.network',
            ],
            provider: xdcProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: [
                'https://rpc.xinfin.network',
                'https://erpc.xinfin.network',
                'https://rpc1.xinfin.network',
            ],
            provider: xdcProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        xdcExplorer: {
            name: 'XinFin Explorer',
            blockExplorer: 'xdcExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://explorer.xinfin.network',
            apiUrl: 'https://xdc.blocksscan.io/api',
            docsUrl: 'https://xdc.blocksscan.io/docs',
        },
        xdcBlockscan: {
            name: 'XinFin Blockscan',
            blockExplorer: 'xdcBlockscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://xdc.blocksscan.io',
            apiUrl: 'https://xdc.blocksscan.io/api',
            docsUrl: 'https://xdc.blocksscan.io/docs',
        },
        default: {
            name: 'XinFin Blockscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://xdc.blocksscan.io',
            apiUrl: 'https://xdc.blocksscan.io/api',
            docsUrl: 'https://xdc.blocksscan.io/docs',
        },
    },
    testnet: false,
} as const satisfies Network
