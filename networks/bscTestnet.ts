import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { binance, omnia } from '../providers'

export const bscTestnet = {
    id: 97,
    name: 'BNB Smart Chain Testnet',
    network: 'bsc-testnet',
    infoUrl: 'https://www.bnbchain.org/',
    docsUrl: 'https://docs.bnbchain.org/docs/overview/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-97.json',
    nativeCurrency: {
        name: 'Build & Build',
        symbol: 'tBNB',
        decimals: 18,
    },
    rpcNodes: {
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/bsc/testnet/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        binance: {
            http: [
                'https://data-seed-prebsc-1-s1.binance.org:8545',
                'https://data-seed-prebsc-1-s2.binance.org:8545',
                'https://data-seed-prebsc-1-s3.binance.org:8545',
            ],
            provider: binance,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: [
                'https://data-seed-prebsc-1-s1.binance.org:8545',
                'https://data-seed-prebsc-1-s2.binance.org:8545',
                'https://data-seed-prebsc-1-s3.binance.org:8545',
            ],
            provider: binance,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: [
                'https://data-seed-prebsc-1-s1.binance.org:8545',
                'https://data-seed-prebsc-1-s2.binance.org:8545',
                'https://data-seed-prebsc-1-s3.binance.org:8545',
            ],
            provider: binance,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        bscScan: {
            name: 'Testnet BscScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.bscscan.com/',
            apiUrl: 'https://api-testnet.bscscan.com/',
            docsUrl: 'https://docs.bscscan.com/v/bscscan-testnet/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Testnet BscScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.bscscan.com/',
            apiUrl: 'https://api-testnet.bscscan.com/',
            docsUrl: 'https://docs.bscscan.com/v/bscscan-testnet/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 17422483,
        },
    },
    testnet: true,
} as const satisfies Network
