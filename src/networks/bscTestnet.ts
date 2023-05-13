import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, binance, blast, omnia } from '../providers'

export const bscTestnet = {
    id: 97,
    name: 'BNB Smart Chain Testnet',
    network: 'bscTestnet',
    infoUrl: 'https://www.bnbchain.org',
    docsUrl: 'https://docs.bnbchain.org/docs/overview',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-97.json',
    nativeCurrency: {
        name: 'Build & Build',
        symbol: 'tBNB',
        uSymbol: 'tJager',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://bsc-testnet.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://bsc-testnet.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://bsc-testnet.public.blastapi.io'],
            wss: ['wss://bsc-testnet.public.blastapi.io'],
            provider: blast,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/bsc_testnet_chapel/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/bsc_testnet_chapel'],
            provider: ankr,
        },
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/bsc/testnet/${EndpointAuth.Key}`],
            wss: [`wss://endpoints.omniatech.io/v1/bsc/testnet/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/bsc/testnet/public'],
            provider: omnia,
        },
        binance: {
            rpcNode: 'binance',
            type: EndpointType.Public,
            http: [
                'https://data-seed-prebsc-1-s1.binance.org:8545',
                'https://data-seed-prebsc-1-s2.binance.org:8545',
                'https://data-seed-prebsc-1-s3.binance.org:8545',
            ],
            provider: binance,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: [
                'https://data-seed-prebsc-1-s1.binance.org:8545',
                'https://data-seed-prebsc-1-s2.binance.org:8545',
                'https://data-seed-prebsc-1-s3.binance.org:8545',
            ],
            provider: binance,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: [
                'https://data-seed-prebsc-1-s1.binance.org:8545',
                'https://data-seed-prebsc-1-s2.binance.org:8545',
                'https://data-seed-prebsc-1-s3.binance.org:8545',
            ],
            provider: binance,
        },
    },
    blockExplorers: {
        bscscan: {
            name: 'Testnet BscScan',
            blockExplorer: 'bscscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.bscscan.com',
            apiUrl: 'https://api-testnet.bscscan.com/api',
            docsUrl: 'https://docs.bscscan.com/v/bscscan-testnet',
        },
        default: {
            name: 'Testnet BscScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.bscscan.com',
            apiUrl: 'https://api-testnet.bscscan.com/api',
            docsUrl: 'https://docs.bscscan.com/v/bscscan-testnet',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 17422483,
            deployTxHash: '0x7027186f9492ac15c999130591ff930054ed6669717522f0005c827432cafb53',
        },
    },
    testnet: true,
    mainnetId: 56,
} as const satisfies Network
