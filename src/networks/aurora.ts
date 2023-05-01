import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { auroraProvider, infura, omnia } from '../providers'

export const aurora = {
    id: 1313161554,
    name: 'Aurora',
    network: 'aurora',
    infoUrl: 'https://aurora.dev',
    docsUrl: 'https://doc.aurora.dev',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1313161554.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            rpcNode: 'infura',
            http: [`https://aurora-mainnet.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        omnia: {
            rpcNode: 'omnia',
            http: ['https://endpoints.omniatech.io/v1/aurora/mainnet/public'],
            provider: omnia,
            authenticated: false,
        },
        aurora: {
            rpcNode: 'aurora',
            http: ['https://mainnet.aurora.dev'],
            provider: auroraProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://mainnet.aurora.dev'],
            provider: auroraProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://mainnet.aurora.dev'],
            provider: auroraProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        auroraExplorer: {
            name: 'Aurora Explorer',
            blockExplorer: 'auroraExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.aurora.dev',
            apiUrl: 'https://explorer.mainnet.aurora.dev/api',
            docsUrl: 'https://explorer.aurora.dev/api-docs',
        },
        default: {
            name: 'Aurora Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.aurora.dev',
            apiUrl: 'https://explorer.mainnet.aurora.dev/api',
            docsUrl: 'https://explorer.aurora.dev/api-docs',
        },
    },
    testnet: false,
} as const satisfies Network
