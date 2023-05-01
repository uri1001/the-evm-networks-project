import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import {
    ankr,
    avalancheProvider,
    blast,
    blockpi,
    infura,
    omnia,
    onerpc,
    pokt,
    publicnode,
} from '../providers'

export const avalanche = {
    id: 43114,
    name: 'Avalanche C-Chain',
    network: 'avalanche',
    infoUrl: 'https://www.avax.network',
    docsUrl: 'https://docs.avax.network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-43114.json',
    nativeCurrency: {
        name: 'Avalanche',
        symbol: 'AVAX',
        uSymbol: 'aAVAX',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            rpcNode: 'infura',
            http: [`https://avalanche-mainnet.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        pokt: {
            rpcNode: 'pokt',
            http: [
                `https://avax-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
                `https://avax-archival.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
            ],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: [
                'https://avax-rpc.gateway.pokt.network',
                'https://avax-mainnet.gateway.pokt.network/v1/lb/605238bf6b986eea7cf36d5e/ext/bc/C/rpc',
            ],
            provider: pokt,
            authenticated: false,
        },
        onerpc: {
            rpcNode: 'onerpc',
            http: ['https://1rpc.io/avax/c'],
            provider: onerpc,
            authenticated: false,
        },
        omnia: {
            rpcNode: 'omnia',
            http: ['https://endpoints.omniatech.io/v1/avax/mainnet/public'],
            provider: omnia,
            authenticated: false,
        },
        publicnode: {
            rpcNode: 'publicnode',
            http: ['https://avalanche-c-chain.publicnode.com'],
            provider: publicnode,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [
                `https://ava-mainnet.blastapi.io/${EndpointAuth.PrivateKey}/ext/bc/C/rpc`,
                `https://ava-mainnet.blastapi.io/${EndpointAuth.PrivateKey}/ext/bc/C/avax`,
            ],
            wss: [`wss://ava-mainnet.blastapi.io/${EndpointAuth.PrivateKey}/ext/bc/C/ws`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            rpcNode: 'blockpi',
            http: [`https://avalanche.blockpi.network/v1/rpc/${EndpointAuth.PrivateKey}`],
            wss: [`wss://avalanche.blockpi.network/v1/ws/${EndpointAuth.PrivateKey}`],
            provider: blockpi,
            authenticated: true,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            http: ['https://avalanche.blockpi.network/v1/rpc/public'],
            provider: blockpi,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: [
                'https://avalanche.public-rpc.com',
                'https://rpc.ankr.com/avalanche',
                'https://rpc.ankr.com/avalanche-c',
            ],
            provider: ankr,
            authenticated: false,
        },
        avalanche: {
            rpcNode: 'avalanche',
            http: ['https://api.avax.network/ext/bc/C/rpc'],
            provider: avalancheProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://api.avax.network/ext/bc/C/rpc'],
            provider: avalancheProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://api.avax.network/ext/bc/C/rpc'],
            provider: avalancheProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        avascan: {
            name: 'Avascan',
            blockExplorer: 'avascan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://avascan.info/blockchain/c',
            apiUrl: 'https://api.avascan.info/v2/network/mainnet/evm/43114/etherscan',
            docsUrl: 'https://docs.avascan.info',
        },
        snowtrace: {
            name: 'SnowTrace',
            blockExplorer: 'snowtrace',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://snowtrace.io',
            apiUrl: 'https://api.snowtrace.io',
            docsUrl: 'https://docs.snowtrace.io',
        },
        default: {
            name: 'SnowTrace',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://snowtrace.io',
            apiUrl: 'https://api.snowtrace.io',
            docsUrl: 'https://docs.snowtrace.io',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 11907934,
            deployTxHash: '0x9ef24a6a136a1a01dea29c5a1f87a6b9819dc92e9143a163cbdbf1e89dec4b4c',
        },
    },
    testnet: false,
} as const satisfies Network
