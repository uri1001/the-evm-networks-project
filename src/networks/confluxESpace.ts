import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { confluxProvider } from '../providers'

export const confluxESpace = {
    id: 1030,
    name: 'Conflux eSpace',
    network: 'confluxESpace',
    infoUrl: 'https://confluxnetwork.org',
    docsUrl: 'https://confluxnetwork.org/en/developers/tools',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1030.json',
    nativeCurrency: {
        name: 'CFX',
        symbol: 'CFX',
        uSymbol: 'aCFX',
        decimals: 18,
    },
    rpcNodes: {
        conflux: {
            rpcNode: 'conflux',
            http: ['https://evm.confluxrpc.org'],
            provider: confluxProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://evm.confluxrpc.org'],
            provider: confluxProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://evm.confluxrpc.org'],
            provider: confluxProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        confluxscan: {
            name: 'Confluxscan',
            blockExplorer: 'confluxscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://evm.confluxscan.io',
            apiUrl: 'https://api.confluxscan.io',
            docsUrl: 'https://evmapi.confluxscan.io/doc',
        },
        default: {
            name: 'Confluxscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://evm.confluxscan.io',
            apiUrl: 'https://api.confluxscan.io',
            docsUrl: 'https://evmapi.confluxscan.io/doc',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xEFf0078910f638cd81996cc117bccD3eDf2B072F',
            deployBlock: 68602935,
            deployTxHash: '0xab11f57bf455a6badefaeb1ccc4291a8940489fb764c1ccbe16990385a09bebd',
        },
    },
    testnet: false,
} as const satisfies Network
