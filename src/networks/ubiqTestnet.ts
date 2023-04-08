import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { ubiqProvider } from '../providers'

export const ubiqTestnet = {
    id: 9,
    name: 'Ubiq Network Testnet',
    network: 'ubiq-testnet',
    infoUrl: 'https://xinfin.org/',
    docsUrl: 'https://howto.xinfin.org/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-9.json',
    nativeCurrency: {
        name: 'Ubiq Testnet Ether',
        symbol: 'TUBQ',
        uSymbol: 'aTUBQ',
        decimals: 18,
    },
    rpcNodes: {
        public: {
            http: [''],
            provider: ubiqProvider,
            authenticated: false,
        },
        default: {
            http: [''],
            provider: ubiqProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        default: {
            name: '',
            type: BlockExplorerType.Null,
            browserUrl: '',
            standard: BlockExplorerStandard.Null,
        },
    },
    testnet: false,
} as const satisfies Network
