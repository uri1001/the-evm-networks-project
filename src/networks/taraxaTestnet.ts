import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { taraxaProvider } from '../providers'

export const taraxaTestnet = {
    id: 842,
    name: 'Taraxa Testnet',
    network: 'taraxaTestnet',
    infoUrl: 'https://taraxa.io',
    docsUrl: 'https://docs.taraxa.io',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-842.json',
    nativeCurrency: {
        name: 'Tara',
        symbol: 'tTARA',
        uSymbol: 'atTARA',
        decimals: 18,
    },
    rpcNodes: {
        taraxa: {
            rpcNode: 'taraxa',
            type: EndpointType.Public,
            http: ['https://rpc.testnet.taraxa.io'],
            provider: taraxaProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.testnet.taraxa.io'],
            provider: taraxaProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.testnet.taraxa.io'],
            provider: taraxaProvider,
        },
    },
    blockExplorers: {
        taraxaExplorer: {
            name: 'Taraxa Testnet Explorer',
            blockExplorer: 'taraxaExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.testnet.taraxa.io',
        },
        default: {
            name: 'Taraxa Testnet Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.testnet.taraxa.io',
        },
    },
    testnet: true,
    mainnetId: 841,
} as const satisfies Network
