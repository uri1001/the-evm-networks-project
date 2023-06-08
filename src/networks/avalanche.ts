import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import {
    ankr,
    avalancheProvider,
    blast,
    blockpi,
    infura,
    lava,
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
            type: EndpointType.Authenticated,
            http: [`https://avalanche-mainnet.infura.io/v3/${EndpointAuth.Key}`],
            provider: infura,
        },
        lava: {
            rpcNode: 'lava',
            type: EndpointType.Authenticated,
            http: [`https://g.w.lavanet.xyz:443/gateway/avax/rpc-http/${EndpointAuth.Key}`],
            wss: [`wss://g.w.lavanet.xyz:443/gateway/avax/rpc/${EndpointAuth.Key}`],
            provider: lava,
        },
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [
                `https://avax-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
                `https://avax-archival.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
            ],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: [
                'https://avax-rpc.gateway.pokt.network',
                'https://avax-mainnet.gateway.pokt.network/v1/lb/605238bf6b986eea7cf36d5e/ext/bc/C/rpc',
            ],
            provider: pokt,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Authenticated,
            http: [`https://1rpc.io/${EndpointAuth.Key}/avax/c`],
            provider: onerpc,
        },
        onerpcPublic: {
            rpcNode: 'onerpcPublic',
            type: EndpointType.Public,
            http: ['https://1rpc.io/avax/c'],
            provider: onerpc,
        },
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/avax/mainnet/${EndpointAuth.Key}`],
            wss: [`wss://endpoints.omniatech.io/v1/avax/mainnet/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/avax/mainnet/public'],
            provider: omnia,
        },
        publicnode: {
            rpcNode: 'publicnode',
            type: EndpointType.Public,
            http: ['https://avalanche-c-chain.publicnode.com'],
            provider: publicnode,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [
                `https://ava-mainnet.blastapi.io/${EndpointAuth.Key}/ext/bc/C/rpc`,
                `https://ava-mainnet.blastapi.io/${EndpointAuth.Key}/ext/bc/C/avax`,
            ],
            wss: [`wss://ava-mainnet.blastapi.io/${EndpointAuth.Key}/ext/bc/C/ws`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: [
                'https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc',
                'https://ava-mainnet.public.blastapi.io/ext/bc/C/avax',
            ],
            wss: ['wss://ava-mainnet.public.blastapi.io/ext/bc/C/ws'],
            provider: blast,
        },
        blockpi: {
            rpcNode: 'blockpi',
            type: EndpointType.Authenticated,
            http: [`https://avalanche.blockpi.network/v1/rpc/${EndpointAuth.Key}`],
            wss: [`wss://avalanche.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: blockpi,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            type: EndpointType.Public,
            http: ['https://avalanche.blockpi.network/v1/rpc/public'],
            provider: blockpi,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [
                `https://rpc.ankr.com/avalanche/${EndpointAuth.Key}`,
                `https://rpc.ankr.com/avalanche-c/${EndpointAuth.Key}`,
            ],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: [
                'https://avalanche.public-rpc.com',
                'https://rpc.ankr.com/avalanche',
                'https://rpc.ankr.com/avalanche-c',
            ],
            provider: ankr,
        },
        avalanche: {
            rpcNode: 'avalanche',
            type: EndpointType.Public,
            http: ['https://api.avax.network/ext/bc/C/rpc'],
            provider: avalancheProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://api.avax.network/ext/bc/C/rpc'],
            provider: avalancheProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://api.avax.network/ext/bc/C/rpc'],
            provider: avalancheProvider,
        },
    },
    blockExplorers: {
        avascan: {
            name: 'Avascan',
            blockExplorer: 'avascan',
            type: BlockExplorerType.Blockscout,
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
            apiUrl: 'https://api.snowtrace.io/api',
            docsUrl: 'https://docs.snowtrace.io',
        },
        default: {
            name: 'SnowTrace',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://snowtrace.io',
            apiUrl: 'https://api.snowtrace.io/api',
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
