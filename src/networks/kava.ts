import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { kavaProvider, pokt } from '../providers'

export const kava = {
    id: 2222,
    name: 'Kava EVM',
    network: 'kava',
    infoUrl: 'https://www.kava.io',
    docsUrl: 'https://www.kava.io/developers#resources',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-2222.json',
    nativeCurrency: {
        name: 'Kava',
        symbol: 'KAVA',
        uSymbol: 'aKAVA',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [
                `https://kava-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
                `https://kava-mainnet-archival.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
            ],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: ['https://kava-rpc.gateway.pokt.network'],
            provider: pokt,
        },
        kava: {
            rpcNode: 'kava',
            type: EndpointType.Public,
            http: ['https://evm.kava.io', 'https://evm2.kava.io'],
            wss: ['wss://wevm.kava.io', 'wss://wevm2.kava.io'],
            provider: kavaProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://evm.kava.io', 'https://evm2.kava.io'],
            wss: ['wss://wevm.kava.io', 'wss://wevm2.kava.io'],
            provider: kavaProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://evm.kava.io', 'https://evm2.kava.io'],
            wss: ['wss://wevm.kava.io', 'wss://wevm2.kava.io'],
            provider: kavaProvider,
        },
    },
    blockExplorers: {
        kavaExplorer: {
            name: 'Kava Block Explorer',
            blockExplorer: 'kavaExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.kava.io',
            apiUrl: 'https://explorer.kava.io/api',
            docsUrl: 'https://explorer.kava.io/api-docs',
        },
        default: {
            name: 'Kava Block Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.kava.io',
            apiUrl: 'https://explorer.kava.io/api',
            docsUrl: 'https://explorer.kava.io/api-docs',
        },
    },
    testnet: false,
} as const satisfies Network
