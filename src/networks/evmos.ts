import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { blast, blockdaemon, notional, onfinality, pokt, publicnode } from '../providers'

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
        pokt: {
            rpcNode: 'pokt',
            http: [`https://evmos-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: [
                'https://evmos-rpc.gateway.pokt.network',
                'https://evmos-mainnet.gateway.pokt.network/v1/lb/627586ddea1b320039c95205',
            ],
            provider: pokt,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://evmos-mainnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://evmos-mainnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: false,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://evmos-mainnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        onfinality: {
            rpcNode: 'onfinality',
            http: ['https://evmos.api.onfinality.io/public'],
            provider: onfinality,
            authenticated: false,
        },
        blockdaemon: {
            rpcNode: 'blockdaemon',
            http: ['https://eth.bd.evmos.org:8545'],
            wss: ['wss://eth.bd.evmos.org:8546'],
            provider: blockdaemon,
            authenticated: false,
        },
        notional: {
            rpcNode: 'notional',
            http: ['https://jsonrpc-evmos-ia.cosmosia.notional.ventures'],
            provider: notional,
            authenticated: false,
        },
        publicnode: {
            rpcNode: 'publicnode',
            http: ['https://evmos-evm.publicnode.com'],
            provider: publicnode,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://evmos-evm.publicnode.com'],
            provider: publicnode,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://evmos-evm.publicnode.com'],
            provider: publicnode,
            authenticated: false,
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
