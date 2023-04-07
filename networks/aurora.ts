import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../interfaces'

import { auroraProvider, infura, omnia } from '../providers'

export const aurora = {
    id: 1313161554,
    name: 'Aurora',
    network: 'aurora',
    infoUrl: 'https://aurora.dev/',
    docsUrl: 'https://doc.aurora.dev/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1313161554.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            http: ['https://aurora-mainnet.infura.io/v3/'],
            provider: infura,
            authenticated: true,
            authenticatedHttp: ['TBD'],
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/aurora/mainnet/public'],
            provider: omnia,
            authenticated: false,
        },
        aurora: {
            http: ['https://mainnet.aurora.dev/'],
            provider: auroraProvider,
            authenticated: false,
        },
        public: {
            http: ['https://mainnet.aurora.dev/'],
            provider: auroraProvider,
            authenticated: false,
        },
        default: {
            http: ['https://mainnet.aurora.dev/'],
            provider: auroraProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        auroraExplorer: {
            name: 'Aurora Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.aurora.dev/',
            apiUrl: 'https://explorer.mainnet.aurora.dev/api/',
            docsUrl: 'https://explorer.aurora.dev/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Aurora Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.aurora.dev/',
            apiUrl: 'https://explorer.mainnet.aurora.dev/api/',
            docsUrl: 'https://explorer.aurora.dev/api-docs',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
