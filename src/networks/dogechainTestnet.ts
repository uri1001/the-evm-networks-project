import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { dogechainProvider } from '../providers'

export const dogechainTestnet = {
    id: 568,
    name: 'Dogechain Testnet',
    network: 'dogechainTestnet',
    infoUrl: 'https://dogechain.dog',
    docsUrl: 'https://docs.dogechain.dog/docs/overview',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-568.json',
    nativeCurrency: {
        name: 'Testnet Dogechain Coin',
        symbol: 'tDC',
        uSymbol: 'tShibe',
        decimals: 18,
    },
    rpcNodes: {
        dogechain: {
            rpcNode: 'dogechain',
            http: ['https://rpc-testnet.dogechain.dog'],
            provider: dogechainProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpc-testnet.dogechain.dog'],
            provider: dogechainProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpc-testnet.dogechain.dog'],
            provider: dogechainProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        dogechainExplorer: {
            name: 'Dogechain Testnet Explorer',
            blockExplorer: 'dogechainExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer-testnet.dogechain.dog',
            apiUrl: 'http://explorer-testnet.dogechain.dog/api',
            docsUrl: 'https://explorer-testnet.dogechain.dog/api-docs',
        },
        default: {
            name: 'Dogechain Testnet Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer-testnet.dogechain.dog',
            apiUrl: 'http://explorer-testnet.dogechain.dog/api',
            docsUrl: 'https://explorer-testnet.dogechain.dog/api-docs',
        },
    },
    testnet: true,
    mainnetId: 2000,
} as const satisfies Network
