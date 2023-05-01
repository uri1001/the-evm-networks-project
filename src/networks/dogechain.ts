import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { ankr, dogechainProvider, pokt } from '../providers'

export const dogechain = {
    id: 2000,
    name: 'Dogechain Mainnet',
    network: 'dogechain',
    infoUrl: 'https://dogechain.dog',
    docsUrl: 'https://docs.dogechain.dog/docs/overview',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-2000.json',
    nativeCurrency: {
        name: 'Dogechain Coin',
        symbol: 'DC',
        uSymbol: 'Shibe',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            http: [
                `https://dogechain-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
            ],
            provider: pokt,
            authenticated: true,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://www.ankr.com/rpc/dogechain'],
            provider: ankr,
            authenticated: false,
        },
        dogechain: {
            rpcNode: 'dogechain',
            http: [
                'https://rpc.dogechain.dog',
                'https://rpc-us.dogechain.dog',
                'https://rpc01.dogechain.dog',
            ],
            provider: dogechainProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: [
                'https://rpc.dogechain.dog',
                'https://rpc-us.dogechain.dog',
                'https://rpc01.dogechain.dog',
            ],
            provider: dogechainProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: [
                'https://rpc.dogechain.dog',
                'https://rpc-us.dogechain.dog',
                'https://rpc01.dogechain.dog',
            ],
            provider: dogechainProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        dogechainExplorer: {
            name: 'Dogechain Explorer',
            blockExplorer: 'dogechainExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.dogechain.dog',
            apiUrl: 'https://explorer.dogechain.dog/api',
            docsUrl: 'https://explorer.dogechain.dog/api-docs',
        },
        default: {
            name: 'Dogechain Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.dogechain.dog',
            apiUrl: 'https://explorer.dogechain.dog/api',
            docsUrl: 'https://explorer.dogechain.dog/api-docs',
        },
    },
    testnet: false,
} as const satisfies Network
