import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { bronosProvider } from '../providers'

export const bronosTestnet = {
    id: 1038,
    name: 'Bronos Testnet',
    network: 'bronos-testnet',
    infoUrl: 'https://bronos.org/',
    docsUrl: 'https://docs.bronos.org/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1038.json',
    nativeCurrency: {
        name: 'Bronos Coin',
        symbol: 'tBRO',
        decimals: 18,
    },
    rpcNodes: {
        bronos: {
            http: ['https://evm-testnet.bronos.org/'],
            provider: bronosProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://evm-testnet.bronos.org/'],
            provider: bronosProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://evm-testnet.bronos.org/'],
            provider: bronosProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        bronoScan: {
            name: 'Bronos Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://tbroscan.bronos.org/',
            apiUrl: 'https://tbroscan.bronos.org/',
            docsUrl: 'https://tbroscan.bronos.org/api-docs',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Bronos Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://tbroscan.bronos.org/',
            apiUrl: 'https://tbroscan.bronos.org/',
            docsUrl: 'https://tbroscan.bronos.org/api-docs',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: true,
} as const satisfies Network
