import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { confluxProvider } from '../providers'

export const confluxESpaceTestnet = {
    id: 71,
    name: 'Conflux eSpace Testnet',
    network: 'confluxESpaceTestnet',
    infoUrl: 'https://confluxnetwork.org',
    docsUrl: 'https://confluxnetwork.org/en/developers/tools',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-71.json',
    nativeCurrency: {
        name: 'CFX',
        symbol: 'CFX',
        uSymbol: 'aCFX',
        decimals: 18,
    },
    rpcNodes: {
        conflux: {
            rpcNode: 'conflux',
            type: EndpointType.Public,
            http: ['https://evmtestnet.confluxrpc.org'],
            provider: confluxProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://evmtestnet.confluxrpc.org'],
            provider: confluxProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://evmtestnet.confluxrpc.org'],
            provider: confluxProvider,
        },
    },
    blockExplorers: {
        confluxscan: {
            name: 'Confluxscan Testnet',
            blockExplorer: 'confluxscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.confluxscan.io',
            apiUrl: 'https://api-testnet.confluxscan.io',
            docsUrl: 'https://evmapi.confluxscan.io/doc',
        },
        default: {
            name: 'Confluxscan Testnet',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.confluxscan.io',
            apiUrl: 'https://api-testnet.confluxscan.io',
            docsUrl: 'https://evmapi.confluxscan.io/doc',
        },
    },
    testnet: true,
    mainnetId: 1030,
} as const satisfies Network
