import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
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
            type: EndpointType.Authenticated,
            http: [`https://dogechain-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Public,
            http: ['https://www.ankr.com/rpc/dogechain'],
            provider: ankr,
        },
        dogechain: {
            rpcNode: 'dogechain',
            type: EndpointType.Public,
            http: [
                'https://rpc.dogechain.dog',
                'https://rpc-us.dogechain.dog',
                'https://rpc01.dogechain.dog',
            ],
            provider: dogechainProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: [
                'https://rpc.dogechain.dog',
                'https://rpc-us.dogechain.dog',
                'https://rpc01.dogechain.dog',
            ],
            provider: dogechainProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: [
                'https://rpc.dogechain.dog',
                'https://rpc-us.dogechain.dog',
                'https://rpc01.dogechain.dog',
            ],
            provider: dogechainProvider,
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
