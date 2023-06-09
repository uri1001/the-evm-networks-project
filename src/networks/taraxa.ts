import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { taraxaProvider } from '../providers'

export const taraxa = {
    id: 841,
    name: 'Taraxa Mainnet',
    network: 'taraxa',
    infoUrl: 'https://taraxa.io',
    docsUrl: 'https://docs.taraxa.io',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-841.json',
    nativeCurrency: {
        name: 'Tara',
        symbol: 'TARA',
        uSymbol: 'aTARA',
        decimals: 18,
    },
    rpcNodes: {
        taraxa: {
            rpcNode: 'taraxa',
            type: EndpointType.Public,
            http: ['https://rpc.mainnet.taraxa.io'],
            provider: taraxaProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.mainnet.taraxa.io'],
            provider: taraxaProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.mainnet.taraxa.io'],
            provider: taraxaProvider,
        },
    },
    blockExplorers: {
        taraxaExplorer: {
            name: 'Taraxa Explorer',
            blockExplorer: 'taraxaExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.mainnet.taraxa.io',
        },
        default: {
            name: 'Taraxa Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.mainnet.taraxa.io',
        },
    },
    testnet: false,
} as const satisfies Network
