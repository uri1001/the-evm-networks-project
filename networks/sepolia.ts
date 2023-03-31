import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, blast, fantomProvider, infura, omnia } from '../providers'

export const sepolia = {
    id: 11155111,
    name: 'Sepolia',
    network: 'sepolia',
    infoUrl: 'https://sepolia.otterscan.io',
    nativeCurrency: { name: 'Sepolia Ether', symbol: 'SEP', decimals: 18 },
    rpcNodes: {
        infura: {
            http: ['https://sepolia.infura.io/v3/'],
            wss: ['wss://sepolia.infura.io/ws/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: ['https://rpc.sepolia.org/'],
        },
        public: {
            http: ['https://rpc.sepolia.org/'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Etherscan',
            browserUrl: 'https://sepolia.etherscan.io/',
            apiUrl: 'https://api-sepolia.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/v/sepolia-etherscan/',
            standard: 'EIP3091',
        },
        otterscan: {
            name: 'Otterscan Sepolia',
            browserUrl: 'https://sepolia.otterscan.io/',
            apiUrl: '',
            docsUrl: '',
            standard: 'EIP3091',
        },
        default: {
            name: 'Etherscan',
            browserUrl: 'https://sepolia.etherscan.io/',
            apiUrl: 'https://api-sepolia.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/v/sepolia-etherscan/',
            standard: 'EIP3091',
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6507670,
        },
    },
    testnet: true,
} as const satisfies Network
