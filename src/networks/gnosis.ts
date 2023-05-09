import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
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
            type: EndpointType.Authenticated,
            http: [
                `https://poa-xdai.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
                `https://poa-xdai-archival.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
            ],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: [
                'https://gnosischain-rpc.gateway.pokt.network',
                'https://gnosischain-archival-rpc.gateway.pokt.network',
                'https://xdai-rpc.gateway.pokt.network',
            ],
            provider: pokt,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/gnosis/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/gnosis'],
            provider: ankr,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://gnosis-mainnet.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://gnosis-mainnet.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://gnosis-mainnet.public.blastapi.io'],
            wss: ['wss://gnosis-mainnet.public.blastapi.io'],
            provider: blast,
        },
        blockpi: {
            rpcNode: 'blockpi',
            type: EndpointType.Authenticated,
            http: [`https://gnosis.blockpi.network/v1/rpc/${EndpointAuth.Key}`],
            wss: [`wss://gnosis.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: blockpi,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            type: EndpointType.Public,
            http: ['https://gnosis.blockpi.network/v1/rpc/public'],
            provider: blockpi,
        },
        onfinality: {
            rpcNode: 'onfinality',
            type: EndpointType.Public,
            http: ['https://gnosis.api.onfinality.io/public'],
            provider: onfinality,
        },
        gnosis: {
            rpcNode: 'gnosis',
            type: EndpointType.Public,
            http: ['https://rpc.gnosischain.com'],
            wss: ['wss://rpc.gnosischain.com/wss'],
            provider: gnosisProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.gnosischain.com'],
            wss: ['wss://rpc.gnosischain.com/wss'],
            provider: gnosisProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.gnosischain.com'],
            wss: ['wss://rpc.gnosischain.com/wss'],
            provider: gnosisProvider,
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
