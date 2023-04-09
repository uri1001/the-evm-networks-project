import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import { auroraProvider, infura, omnia } from '../providers'

export const auroraTestnet = {
    id: 1313161555,
    name: 'Aurora Testnet',
    network: 'aurora-testnet',
    infoUrl: 'https://aurora.dev/',
    docsUrl: 'https://doc.aurora.dev/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1313161555.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            http: [`https://aurora-testnet.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/aurora/testnet/public/'],
            provider: omnia,
            authenticated: false,
        },
        aurora: {
            http: ['https://testnet.aurora.dev/'],
            provider: auroraProvider,
            authenticated: false,
        },
        default: {
            http: ['https://testnet.aurora.dev/'],
            provider: auroraProvider,
            authenticated: false,
        },
        public: {
            http: ['https://testnet.aurora.dev/'],
            provider: auroraProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        auroraExplorer: {
            name: 'Aurora Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.testnet.aurora.dev/',
            apiUrl: 'https://explorer.testnet.aurora.dev/api/',
            docsUrl: 'https://explorer.testnet.aurora.dev/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Aurora Testnet Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.testnet.aurora.dev/',
            apiUrl: 'https://explorer.testnet.aurora.dev/api/',
            docsUrl: 'https://explorer.testnet.aurora.dev/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
