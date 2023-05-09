import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { blast, blockdaemon, lava, notional, onfinality, pokt, publicnode } from '../providers'

export const evmos = {
    id: 9001,
    name: 'Evmos',
    network: 'evmos',
    infoUrl: 'https://evmos.org',
    docsUrl: 'https://docs.evmos.org',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-9001.json',
    nativeCurrency: {
        name: 'Evmos',
        symbol: 'EVMOS',
        uSymbol: 'aEVMOS',
        decimals: 18,
    },
    rpcNodes: {
        lava: {
            rpcNode: 'lava',
            type: EndpointType.Authenticated,
            http: [`https://g.w.lavanet.xyz:443/gateway/evmos/json-rpc-http/${EndpointAuth.Key}`],
            wss: [`wss://g.w.lavanet.xyz:443/gateway/evmos/json-rpc/${EndpointAuth.Key}`],
            provider: lava,
        },
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [`https://evmos-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: [
                'https://evmos-rpc.gateway.pokt.network',
                'https://evmos-mainnet.gateway.pokt.network/v1/lb/627586ddea1b320039c95205',
            ],
            provider: pokt,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://evmos-mainnet.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://evmos-mainnet.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://evmos-mainnet.public.blastapi.io'],
            wss: ['wss://evmos-mainnet.public.blastapi.io'],
            provider: blast,
        },
        onfinality: {
            rpcNode: 'onfinality',
            type: EndpointType.Public,
            http: ['https://evmos.api.onfinality.io/public'],
            provider: onfinality,
        },
        blockdaemon: {
            rpcNode: 'blockdaemon',
            type: EndpointType.Public,
            http: ['https://eth.bd.evmos.org:8545'],
            wss: ['wss://eth.bd.evmos.org:8546'],
            provider: blockdaemon,
        },
        notional: {
            rpcNode: 'notional',
            type: EndpointType.Public,
            http: ['https://jsonrpc-evmos-ia.cosmosia.notional.ventures'],
            provider: notional,
        },
        publicnode: {
            rpcNode: 'publicnode',
            type: EndpointType.Public,
            http: ['https://evmos-evm.publicnode.com'],
            provider: publicnode,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://evmos-evm.publicnode.com'],
            provider: publicnode,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://evmos-evm.publicnode.com'],
            provider: publicnode,
        },
    },
    blockExplorers: {
        mintscan: {
            name: 'Evmos Cosmos Explorer',
            blockExplorer: 'mintscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://www.mintscan.io/evmos',
        },
        evmosExplorer: {
            name: 'Evmos Block Explorer',
            blockExplorer: 'evmosExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://escan.live',
        },
        default: {
            name: 'Evmos Block Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://escan.live',
        },
    },
    testnet: false,
} as const satisfies Network
