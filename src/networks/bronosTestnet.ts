import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { bronosProvider } from '../providers'

export const bronosTestnet = {
    id: 1038,
    name: 'Bronos Testnet',
    network: 'bronosTestnet',
    infoUrl: 'https://bronos.org',
    docsUrl: 'https://docs.bronos.org',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1038.json',
    nativeCurrency: {
        name: 'Bronos Coin',
        symbol: 'tBRO',
        uSymbol: 'atBRO',
        decimals: 18,
    },
    rpcNodes: {
        bronos: {
            rpcNode: 'bronos',
            type: EndpointType.Public,
            http: ['https://evm-testnet.bronos.org'],
            provider: bronosProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://evm-testnet.bronos.org'],
            provider: bronosProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://evm-testnet.bronos.org'],
            provider: bronosProvider,
        },
    },
    blockExplorers: {
        bronoScan: {
            name: 'Bronos Testnet Explorer',
            blockExplorer: 'bronoScan',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://tbroscan.bronos.org',
            apiUrl: 'https://tbroscan.bronos.org/api',
            docsUrl: 'https://tbroscan.bronos.org/api-docs',
        },
        default: {
            name: 'Bronos Testnet Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://tbroscan.bronos.org',
            apiUrl: 'https://tbroscan.bronos.org/api',
            docsUrl: 'https://tbroscan.bronos.org/api-docs',
        },
    },
    testnet: true,
    mainnetId: 1039,
} as const satisfies Network
