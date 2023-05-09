import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, avalancheProvider, blast, infura, omnia } from '../providers'

export const avalancheFujiTestnet = {
    id: 43113,
    name: 'Avalanche Fuji',
    network: 'avalancheFujiTestnet',
    infoUrl: 'https://www.avax.network',
    docsUrl: 'https://docs.avax.network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-43113.json',
    nativeCurrency: {
        name: 'Avalanche Fuji',
        symbol: 'AVAX',
        uSymbol: 'aAVAX',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            rpcNode: 'infura',
            type: EndpointType.Authenticated,
            http: [`https://avalanche-fuji.infura.io/v3/${EndpointAuth.Key}`],
            provider: infura,
        },
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/avax/fuji/${EndpointAuth.Key}`],
            wss: [`wss://endpoints.omniatech.io/v1/avax/fuji/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/avax/fuji/public'],
            provider: omnia,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [
                `https://ava-testnet.blastapi.io/${EndpointAuth.Key}/ext/bc/C/rpc`,
                `https://ava-testnet.blastapi.io/${EndpointAuth.Key}/ext/bc/C/avax`,
            ],
            wss: [`wss://ava-testnet.blastapi.io/${EndpointAuth.Key}/ext/bc/C/ws`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: [
                'https://ava-testnet.public.blastapi.io/ext/bc/C/rpc',
                'https://ava-testnet.public.blastapi.io/ext/bc/C/avax',
            ],
            wss: ['wss://ava-testnet.public.blastapi.io/ext/bc/C/ws'],
            provider: blast,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [
                `https://rpc.ankr.com/avalanche_fuji/${EndpointAuth.Key}`,
                `https://rpc.ankr.com/avalanche_fuji-c/${EndpointAuth.Key}`,
            ],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/avalanche_fuji', 'https://rpc.ankr.com/avalanche_fuji-c'],
            provider: ankr,
        },
        avalanche: {
            rpcNode: 'avalanche',
            type: EndpointType.Public,
            http: ['https://api.avax-test.network/ext/bc/C/rpc'],
            provider: avalancheProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://api.avax-test.network/ext/bc/C/rpc'],
            provider: avalancheProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://api.avax-test.network/ext/bc/C/rpc'],
            provider: avalancheProvider,
        },
    },
    blockExplorers: {
        avascan: {
            name: 'Avascan',
            blockExplorer: 'avascan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.avascan.info/blockchain/c',
            apiUrl: 'https://api.avascan.info/v2/network/testnet/evm/43113/etherscan',
            docsUrl: 'https://docs.avascan.info',
        },
        snowtrace: {
            name: 'SnowTrace',
            blockExplorer: 'snowtrace',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.snowtrace.io',
            apiUrl: 'https://api-testnet.snowtrace.io',
            docsUrl: 'https://docs.snowtrace.io/v/fuji-snowtrace',
        },
        default: {
            name: 'SnowTrace',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.snowtrace.io',
            apiUrl: 'https://api-testnet.snowtrace.io',
            docsUrl: 'https://docs.snowtrace.io/v/fuji-snowtrace',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 7096959,
            deployTxHash: '0x151236cbaccade6dc10106fa850fc75697450f3c2e55f07fc261788d2b17e8a9',
        },
    },
    testnet: true,
    mainnetId: 43114,
} as const satisfies Network
