import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { kavaProvider } from '../providers'

export const kavaTestnet = {
    id: 2221,
    name: 'Kava EVM Testnet',
    network: 'kavaTestnet',
    infoUrl: 'https://www.kava.io',
    docsUrl: 'https://www.kava.io/developers#resources',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-2221.json',
    nativeCurrency: {
        name: 'TKava',
        symbol: 'TKAVA',
        uSymbol: 'aTKAVA',
        decimals: 18,
    },
    rpcNodes: {
        kava: {
            rpcNode: 'kava',
            type: EndpointType.Public,
            http: ['https://evm.testnet.kava.io'],
            wss: ['wss://wevm.testnet.kava.io'],
            provider: kavaProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://evm.testnet.kava.io'],
            wss: ['wss://wevm.testnet.kava.io'],
            provider: kavaProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://evm.testnet.kava.io'],
            wss: ['wss://wevm.testnet.kava.io'],
            provider: kavaProvider,
        },
    },
    blockExplorers: {
        kavaExplorer: {
            name: 'Kava Testnet Block Explorer',
            blockExplorer: 'kavaExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.testnet.kava.io',
            apiUrl: 'https://explorer.testnet.kava.io/api',
            docsUrl: 'https://explorer.testnet.kava.io/api-docs',
        },
        default: {
            name: 'Kava Testnet Block Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.testnet.kava.io',
            apiUrl: 'https://explorer.testnet.kava.io/api',
            docsUrl: 'https://explorer.testnet.kava.io/api-docs',
        },
    },
    testnet: true,
    mainnetId: 2222,
} as const satisfies Network
