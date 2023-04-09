import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import { forno, infura } from '../providers'

export const celoAlfajores = {
    id: 44787,
    name: 'Alfajores',
    network: 'celo-alfajores',
    infoUrl: 'https://docs.celo.org/',
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
            http: [`https://celo-alfajores.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        forno: {
            http: ['https://alfajores-forno.celo-testnet.org/'],
            wss: ['wss://alfajores-forno.celo-testnet.org/ws/'],
            provider: forno,
            authenticated: false,
        },
        public: {
            http: ['https://alfajores-forno.celo-testnet.org/'],
            wss: ['wss://alfajores-forno.celo-testnet.org/ws/'],
            provider: forno,
            authenticated: false,
        },
        default: {
            http: ['https://alfajores-forno.celo-testnet.org/'],
            wss: ['wss://alfajores-forno.celo-testnet.org/ws/'],
            provider: forno,
            authenticated: false,
        },
    },
    blockExplorers: {
        celoScan: {
            name: 'CeloScan Alfajores',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://alfajores.celoscan.io/',
            apiUrl: 'https://api-alfajores.celoscan.io/api/',
            docsUrl: 'https://alfajores.celoscan.io/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
        celoExplorer: {
            name: 'Celo Alfajores Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.celo.org/alfajores/',
            apiUrl: 'https://explorer.celo.org/alfajores/api/',
            docsUrl: 'https://explorer.celo.org/alfajores/api-docs/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Celo Alfajores Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.celo.org/alfajores/',
            apiUrl: 'https://explorer.celo.org/alfajores/api/',
            docsUrl: 'https://explorer.celo.org/alfajores/api-docs/',
            standard: BlockExplorerStandard.None,
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 14569001,
        },
    },
    testnet: true,
} as const satisfies Network
