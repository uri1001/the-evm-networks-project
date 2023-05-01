import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { ubiqProvider } from '../providers'

export const ubiqTestnet = {
    id: 9,
    name: 'Ubiq Network Testnet',
    network: 'ubiqTestnet',
    infoUrl: 'https://ubiqsmart.com',
    docsUrl: 'https://github.com/ubiq',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-9.json',
    nativeCurrency: {
        name: 'Ubiq Testnet Ether',
        symbol: 'TUBQ',
        uSymbol: 'aTUBQ',
        decimals: 18,
    },
    rpcNodes: {
        public: {
            rpcNode: 'public',
            http: [''],
            provider: ubiqProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: [''],
            provider: ubiqProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        default: {
            name: '',
            blockExplorer: '',
            type: BlockExplorerType.Null,
            standard: BlockExplorerStandard.Null,
            browserUrl: '',
        },
    },
    testnet: true,
    mainnetId: 8,
} as const satisfies Network
