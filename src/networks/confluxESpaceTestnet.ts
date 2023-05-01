import { BlockExplorerStandard, BlockExplorerType } from '../enums'
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
            http: ['https://evmtestnet.confluxrpc.org'],
            provider: confluxProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://evmtestnet.confluxrpc.org'],
            provider: confluxProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://evmtestnet.confluxrpc.org'],
            provider: confluxProvider,
            authenticated: false,
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
