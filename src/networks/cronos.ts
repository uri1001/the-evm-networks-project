import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { blockpi, cronosProvider, publicnode } from '../providers'

export const cronos = {
    id: 25,
    name: 'Cronos',
    network: 'cronos',
    infoUrl: 'https://cronos.org/',
    docsUrl: 'https://docs.cronos.org/getting-started/readme/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-25.json',
    nativeCurrency: {
        name: 'Cronos',
        symbol: 'CRO',
        uSymbol: 'baseCRO',
        decimals: 18,
    },
    rpcNodes: {
        blockpi: {
            http: ['https://cronos.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            authenticated: false,
        },
        publicnode: {
            http: ['https://cronos-evm.publicnode.com/'],
            provider: publicnode,
            authenticated: false,
        },
        cronos: {
            http: ['https://evm.cronos.org/'],
            provider: cronosProvider,
            authenticated: false,
        },
        public: {
            http: ['https://evm.cronos.org/'],
            provider: cronosProvider,
            authenticated: false,
        },
        default: {
            http: ['https://evm.cronos.org/'],
            provider: cronosProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        cronosExplorer: {
            name: 'Cronos Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://cronos.org/explorer/',
            apiUrl: 'https://cronos.org/explorer/api/',
            docsUrl: 'https://cronos.org/explorer/api-docs/',
            standard: BlockExplorerStandard.TBD,
        },
        cronosScan: {
            name: 'CronosScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://cronoscan.com/',
            apiUrl: 'https://api.cronoscan.com/api/',
            docsUrl: 'https://cronoscan.com/apis/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'CronosScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://cronoscan.com/',
            apiUrl: 'https://api.cronoscan.com/api/',
            docsUrl: 'https://cronoscan.com/apis/',
            standard: BlockExplorerStandard.None,
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 1963112,
        },
    },
    testnet: false,
} as const satisfies Network
