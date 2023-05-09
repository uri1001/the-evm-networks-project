import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { telosProvider } from '../providers'

export const telos = {
    id: 40,
    name: 'Telos',
    network: 'telos',
    infoUrl: 'https://telos.net',
    docsUrl: 'https://docs.telos.net',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-40.json',
    nativeCurrency: {
        name: 'Telos',
        symbol: 'TLOS',
        uSymbol: 'ARC',
        decimals: 18,
    },
    rpcNodes: {
        telos: {
            rpcNode: 'telos',
            type: EndpointType.Public,
            http: ['https://mainnet.telos.net/evm'],
            provider: telosProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://mainnet.telos.net/evm'],
            provider: telosProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://mainnet.telos.net/evm'],
            provider: telosProvider,
        },
    },
    blockExplorers: {
        teloscan: {
            name: 'Teloscan',
            blockExplorer: 'teloscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://www.teloscan.io',
        },
        default: {
            name: 'Teloscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://www.teloscan.io',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            deployBlock: 246530709,
            deployTxHash: '0x6f3fe9080217abefba80736d066b49d5eb46594acebf89e7fb6a982269c5cf56',
        },
    },
    testnet: false,
} as const satisfies Network
