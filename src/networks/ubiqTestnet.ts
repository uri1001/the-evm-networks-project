import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
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
            type: EndpointType.Null,
            http: [''],
            provider: ubiqProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Null,
            http: [''],
            provider: ubiqProvider,
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
