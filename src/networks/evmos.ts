import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { blast, blockdaemon, notional, onfinality, pokt, publicnode } from '../providers'

export const evmos = {
    id: 9001,
    name: 'Evmos',
    network: 'evmos',
    infoUrl: 'https://evmos.org/',
    docsUrl: 'https://docs.evmos.org/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-9001.json',
    nativeCurrency: {
        name: 'Evmos',
        symbol: 'EVMOS',
        uSymbol: 'aEVMOS',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            http: ['https://evmos-mainnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        onfinality: {
            http: ['https://evmos.api.onfinality.io/public/'],
            provider: onfinality,
            authenticated: false,
        },
        pokt: {
            http: ['https://evmos-mainnet.gateway.pokt.network/v1/lb/627586ddea1b320039c95205/'],
            provider: pokt,
            authenticated: false,
        },
        blockdaemon: {
            http: ['https://eth.bd.evmos.org:8545'],
            wss: ['wss://eth.bd.evmos.org:8546'],
            provider: blockdaemon,
            authenticated: false,
        },
        notional: {
            http: ['https://jsonrpc-evmos-ia.cosmosia.notional.ventures/'],
            provider: notional,
            authenticated: false,
        },
        publicnode: {
            http: ['https://evmos-evm.publicnode.com/'],
            provider: publicnode,
            authenticated: false,
        },
        public: {
            http: ['https://evmos-evm.publicnode.com/'],
            provider: publicnode,
            authenticated: false,
        },
        default: {
            http: ['https://evmos-evm.publicnode.com/'],
            provider: publicnode,
            authenticated: false,
        },
    },
    blockExplorers: {
        mintscan: {
            name: 'Evmos Cosmos Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://www.mintscan.io/evmos/',
            standard: BlockExplorerStandard.None,
        },
        evmosExplorer: {
            name: 'Evmos Block Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://escan.live/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Evmos Block Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://escan.live/',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: false,
} as const satisfies Network
