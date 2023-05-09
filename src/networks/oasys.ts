import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
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
            type: EndpointType.Authenticated,
            http: [
                `https://oasys-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
                `https://oasys-mainnet-archival.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
            ],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: ['https://oasys-rpc.gateway.pokt.network'],
            provider: pokt,
        },
        blockpi: {
            rpcNode: 'blockpi',
            type: EndpointType.Authenticated,
            http: [`https://oasys.blockpi.network/v1/rpc/${EndpointAuth.Key}`],
            wss: [`wss://oasys.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: blockpi,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            type: EndpointType.Public,
            http: ['https://oasys.blockpi.network/v1/rpc/public'],
            provider: blockpi,
        },
        oasys: {
            rpcNode: 'oasys',
            type: EndpointType.Public,
            http: ['https://rpc.mainnet.oasys.games'],
            provider: oasysProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.mainnet.oasys.games'],
            provider: oasysProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.mainnet.oasys.games'],
            provider: oasysProvider,
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
