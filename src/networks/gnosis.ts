import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { ankr, blast, blockpi, gnosisProvider, onfinality, pokt } from '../providers'

export const gnosis = {
    id: 100,
    name: 'Gnosis',
    network: 'gnosis',
    infoUrl: 'https://www.gnosis.io',
    docsUrl: 'https://docs.gnosischain.com',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-100.json',
    nativeCurrency: {
        name: 'Gnosis',
        symbol: 'xDAI',
        uSymbol: 'axDAI',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            http: [
                `https://poa-xdai.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
                `https://poa-xdai-archival.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
            ],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: [
                'https://gnosischain-rpc.gateway.pokt.network',
                'https://gnosischain-archival-rpc.gateway.pokt.network',
                'https://xdai-rpc.gateway.pokt.network',
            ],
            provider: pokt,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/gnosis'],
            provider: ankr,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://gnosis-mainnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://gnosis-mainnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://gnosis-mainnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            rpcNode: 'blockpi',
            http: [`https://gnosis.blockpi.network/v1/rpc/${EndpointAuth.PrivateKey}`],
            wss: [`wss://gnosis.blockpi.network/v1/ws/${EndpointAuth.PrivateKey}`],
            provider: blockpi,
            authenticated: true,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            http: ['https://gnosis.blockpi.network/v1/rpc/public'],
            provider: blockpi,
            authenticated: false,
        },
        onfinality: {
            rpcNode: 'onfinality',
            http: ['https://gnosis.api.onfinality.io/public'],
            provider: onfinality,
            authenticated: false,
        },
        gnosis: {
            rpcNode: 'gnosis',
            http: ['https://rpc.gnosischain.com'],
            wss: ['wss://rpc.gnosischain.com/wss'],
            provider: gnosisProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpc.gnosischain.com'],
            wss: ['wss://rpc.gnosischain.com/wss'],
            provider: gnosisProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpc.gnosischain.com'],
            wss: ['wss://rpc.gnosischain.com/wss'],
            provider: gnosisProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        gnosisExplorer: {
            name: 'Gnosis Blockchain Explorer',
            blockExplorer: 'gnosisExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://blockscout.com/xdai/mainnet',
        },
        gnosisScan: {
            name: 'GnosisScan',
            blockExplorer: 'gnosisScan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://gnosisscan.io',
            apiUrl: 'https://api.gnosisscan.io',
            docsUrl: 'https://docs.gnosisscan.io',
        },
        default: {
            name: 'GnosisScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://gnosisscan.io',
            apiUrl: 'https://api.gnosisscan.io',
            docsUrl: 'https://docs.gnosisscan.io',
        },
    },
    testnet: false,
} as const satisfies Network
