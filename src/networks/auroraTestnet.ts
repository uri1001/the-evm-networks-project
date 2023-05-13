import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { auroraProvider, infura, omnia } from '../providers'

export const auroraTestnet = {
    id: 1313161555,
    name: 'Aurora Testnet',
    network: 'auroraTestnet',
    infoUrl: 'https://aurora.dev',
    docsUrl: 'https://doc.aurora.dev',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1313161555.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            rpcNode: 'infura',
            type: EndpointType.Authenticated,
            http: [`https://aurora-testnet.infura.io/v3/${EndpointAuth.Key}`],
            provider: infura,
        },
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/aurora/testnet/${EndpointAuth.Key}`],
            wss: [`wss://endpoints.omniatech.io/v1/aurora/testnet/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/aurora/testnet/public'],
            provider: omnia,
        },
        aurora: {
            rpcNode: 'aurora',
            type: EndpointType.Public,
            http: ['https://testnet.aurora.dev/'],
            provider: auroraProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://testnet.aurora.dev/'],
            provider: auroraProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://testnet.aurora.dev'],
            provider: auroraProvider,
        },
    },
    blockExplorers: {
        auroraExplorer: {
            name: 'Aurora Testnet Explorer',
            blockExplorer: 'auroraExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.testnet.aurora.dev',
            apiUrl: 'https://explorer.testnet.aurora.dev/api',
            docsUrl: 'https://explorer.testnet.aurora.dev/api-docs',
        },
        default: {
            name: 'Aurora Testnet Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.testnet.aurora.dev',
            apiUrl: 'https://explorer.testnet.aurora.dev/api',
            docsUrl: 'https://explorer.testnet.aurora.dev/api-docs',
        },
    },
    testnet: true,
    mainnetId: 1313161554,
} as const satisfies Network
