import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
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
            http: [`https://avalanche-fuji.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        omnia: {
            rpcNode: 'omnia',
            http: ['https://endpoints.omniatech.io/v1/avax/fuji/public'],
            provider: omnia,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [
                `https://ava-testnet.blastapi.io/${EndpointAuth.PrivateKey}/ext/bc/C/rpc`,
                `https://ava-testnet.blastapi.io/${EndpointAuth.PrivateKey}/ext/bc/C/avax`,
            ],
            wss: [`wss://ava-testnet.blastapi.io/${EndpointAuth.PrivateKey}/ext/bc/C/ws`],
            provider: blast,
            authenticated: false,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://ava-testnet.public.blastapi.io/ext/bc/C/rpc'],
            provider: blast,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/avalanche_fuji', 'https://rpc.ankr.com/avalanche_fuji-c'],
            provider: ankr,
            authenticated: false,
        },
        avalanche: {
            rpcNode: 'avalanche',
            http: ['https://api.avax-test.network/ext/bc/C/rpc'],
            provider: avalancheProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://api.avax-test.network/ext/bc/C/rpc'],
            provider: avalancheProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://api.avax-test.network/ext/bc/C/rpc'],
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
