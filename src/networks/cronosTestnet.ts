import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { cronosProvider } from '../providers'

export const cronosTestnet = {
    id: 338,
    name: 'Cronos Testnet',
    network: 'cronosTestnet',
    infoUrl: 'https://cronos.org',
    docsUrl: 'https://docs.cronos.org/getting-started/readme',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-338.json',
    nativeCurrency: {
        name: 'Cronos',
        symbol: 'tCRO',
        uSymbol: 'basetCRO',
        decimals: 18,
    },
    rpcNodes: {
        cronos: {
            rpcNode: 'cronos',
            http: ['https://evm-t3.cronos.org'],
            provider: cronosProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://evm-t3.cronos.org'],
            provider: cronosProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://evm-t3.cronos.org'],
            provider: cronosProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        cronosExplorer: {
            name: 'Cronos Testnet Explorer',
            blockExplorer: 'cronosExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://cronos.org/explorer',
            apiUrl: 'https://cronos.org/explorer/api',
            docsUrl: 'https://cronos.org/explorer/api-docs',
        },
        cronosScan: {
            name: 'CronosScan Testnet',
            blockExplorer: 'cronosScan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.cronoscan.com',
            apiUrl: 'https://api-testnet.cronoscan.com/api',
            docsUrl: 'https://testnet.cronoscan.com/apis',
        },
        default: {
            name: 'CronosScan Testnet',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.cronoscan.com',
            apiUrl: 'https://api-testnet.cronoscan.com/api',
            docsUrl: 'https://testnet.cronoscan.com/apis',
        },
    },
    testnet: true,
    mainnetId: 25,
} as const satisfies Network
