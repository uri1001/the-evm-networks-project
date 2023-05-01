import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { blockpi, oasysProvider, pokt } from '../providers'

export const oasys = {
    id: 248,
    name: 'Oasys Mainnet',
    network: 'oasys',
    infoUrl: 'https://oasys.games',
    docsUrl: 'https://docs.oasys.games',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-248.json',
    nativeCurrency: {
        name: 'OAS',
        symbol: 'OAS',
        uSymbol: 'aOAS',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            http: [
                `https://oasys-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
                `https://oasys-mainnet-archival.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
            ],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: ['https://oasys-rpc.gateway.pokt.network'],
            provider: pokt,
            authenticated: false,
        },
        blockpi: {
            rpcNode: 'blockpi',
            http: [`https://oasys.blockpi.network/v1/rpc/${EndpointAuth.PrivateKey}`],
            wss: [`wss://oasys.blockpi.network/v1/ws/${EndpointAuth.PrivateKey}`],
            provider: blockpi,
            authenticated: true,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            http: ['https://oasys.blockpi.network/v1/rpc/public'],
            provider: blockpi,
            authenticated: false,
        },
        oasys: {
            rpcNode: 'oasys',
            http: ['https://rpc.mainnet.oasys.games'],
            provider: oasysProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpc.mainnet.oasys.games'],
            provider: oasysProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpc.mainnet.oasys.games'],
            provider: oasysProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        oasysExplorer: {
            name: 'Oasys Explorer',
            blockExplorer: 'oasysExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.oasys.games',
            apiUrl: 'https://scan.oasys.games/api',
            docsUrl: 'https://scan.oasys.games/api-docs',
        },
        default: {
            name: 'Oasys Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.oasys.games',
            apiUrl: 'https://scan.oasys.games/api',
            docsUrl: 'https://scan.oasys.games/api-docs',
        },
    },
    testnet: false,
} as const satisfies Network
