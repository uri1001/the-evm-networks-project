import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { auroraProvider, infura, omnia, onerpc } from '../providers'

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
            type: EndpointType.Authenticated,
            http: [`https://aurora-mainnet.infura.io/v3/${EndpointAuth.Key}`],
            provider: infura,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Public,
            http: ['https://1rpc.io/aurora'],
            provider: onerpc,
        },
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/aurora/mainnet/${EndpointAuth.Key}`],
            wss: [`wss://endpoints.omniatech.io/v1/aurora/mainnet/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/aurora/mainnet/public'],
            provider: omnia,
        },
        aurora: {
            rpcNode: 'aurora',
            type: EndpointType.Public,
            http: ['https://mainnet.aurora.dev'],
            provider: auroraProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://mainnet.aurora.dev'],
            provider: auroraProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://mainnet.aurora.dev'],
            provider: auroraProvider,
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
