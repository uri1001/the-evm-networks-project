import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
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
            http: [
                `https://kava-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
                `https://kava-mainnet-archival.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
            ],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: ['https://kava-rpc.gateway.pokt.network'],
            provider: pokt,
            authenticated: false,
        },
        kava: {
            rpcNode: 'kava',
            http: ['https://evm.kava.io', 'https://evm2.kava.io'],
            wss: ['wss://wevm.kava.io', 'wss://wevm2.kava.io'],
            provider: kavaProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://evm.kava.io', 'https://evm2.kava.io'],
            wss: ['wss://wevm.kava.io', 'wss://wevm2.kava.io'],
            provider: kavaProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://evm.kava.io', 'https://evm2.kava.io'],
            wss: ['wss://wevm.kava.io', 'wss://wevm2.kava.io'],
            provider: kavaProvider,
            authenticated: false,
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
