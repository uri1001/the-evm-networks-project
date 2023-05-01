import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
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
            http: [`https://bsc-testnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://bsc-testnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/bsc_testnet_chapel'],
            provider: ankr,
            authenticated: false,
        },
        omnia: {
            rpcNode: 'omnia',
            http: ['https://endpoints.omniatech.io/v1/bsc/testnet/public'],
            provider: omnia,
            authenticated: false,
        },
        binance: {
            rpcNode: 'binance',
            http: [
                'https://data-seed-prebsc-1-s1.binance.org:8545',
                'https://data-seed-prebsc-1-s2.binance.org:8545',
                'https://data-seed-prebsc-1-s3.binance.org:8545',
            ],
            provider: binance,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: [
                'https://data-seed-prebsc-1-s1.binance.org:8545',
                'https://data-seed-prebsc-1-s2.binance.org:8545',
                'https://data-seed-prebsc-1-s3.binance.org:8545',
            ],
            provider: binance,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: [
                'https://data-seed-prebsc-1-s1.binance.org:8545',
                'https://data-seed-prebsc-1-s2.binance.org:8545',
                'https://data-seed-prebsc-1-s3.binance.org:8545',
            ],
            provider: binance,
            authenticated: false,
        },
    },
    blockExplorers: {
        bscScan: {
            name: 'Testnet BscScan',
            blockExplorer: 'bscScan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.bscscan.com',
            apiUrl: 'https://api-testnet.bscscan.com',
            docsUrl: 'https://docs.bscscan.com/v/bscscan-testnet',
        },
        default: {
            name: 'Testnet BscScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.bscscan.com',
            apiUrl: 'https://api-testnet.bscscan.com',
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
