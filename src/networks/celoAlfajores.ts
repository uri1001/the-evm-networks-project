import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { forno, infura } from '../providers'

export const celoAlfajores = {
    id: 44787,
    name: 'Alfajores',
    network: 'celoAlfajores',
    infoUrl: 'https://docs.celo.org',
    docsUrl: 'https://docs.celo.org/network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-44787.json',
    nativeCurrency: {
        name: 'Celo',
        symbol: 'A-CELO',
        uSymbol: 'aA-CELO',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            rpcNode: 'infura',
            http: [`https://celo-alfajores.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        forno: {
            rpcNode: 'forno',
            http: ['https://alfajores-forno.celo-testnet.org'],
            wss: ['wss://alfajores-forno.celo-testnet.org/ws'],
            provider: forno,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://alfajores-forno.celo-testnet.org'],
            wss: ['wss://alfajores-forno.celo-testnet.org/ws'],
            provider: forno,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://alfajores-forno.celo-testnet.org'],
            wss: ['wss://alfajores-forno.celo-testnet.org/ws'],
            provider: forno,
            authenticated: false,
        },
    },
    blockExplorers: {
        celoScan: {
            name: 'CeloScan Alfajores',
            blockExplorer: 'celoScan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://alfajores.celoscan.io',
            apiUrl: 'https://api-alfajores.celoscan.io/api',
            docsUrl: 'https://alfajores.celoscan.io/apis',
        },
        celoExplorer: {
            name: 'Celo Alfajores Explorer',
            blockExplorer: 'celoExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.celo.org/alfajores',
            apiUrl: 'https://explorer.celo.org/alfajores/api',
            docsUrl: 'https://explorer.celo.org/alfajores/api-docs',
        },
        default: {
            name: 'Celo Alfajores Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.celo.org/alfajores',
            apiUrl: 'https://explorer.celo.org/alfajores/api',
            docsUrl: 'https://explorer.celo.org/alfajores/api-docs',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            deployBlock: 14569001,
            deployTxHash: '0xfdcbb9bd329a0a0a72d8c207b46e7179be1b25a5438edeeb059f844108be0d65',
        },
    },
    testnet: true,
    mainnetId: 42220,
} as const satisfies Network
