import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { alchemy, blast, blockpi, flashbots, infura, omnia, sepoliaProvider } from '../providers'

export const sepolia = {
    id: 11155111,
    name: 'Sepolia',
    network: 'sepolia',
    infoUrl: 'https://sepolia.dev/',
    docsUrl: 'https://github.com/eth-clients/sepolia/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-11155111.json',
    nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: ['https://eth-sepolia.g.alchemy.com/v2/demo/'],
            provider: alchemy,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        infura: {
            http: ['https://sepolia.infura.io/v3/'],
            wss: ['wss://sepolia.infura.io/ws/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        blast: {
            http: ['https://eth-sepolia.public.blastapi.io/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        blockpi: {
            http: ['https://ethereum-sepolia.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        flashbots: {
            http: ['https://relay-sepolia.flashbots.net/'],
            provider: flashbots,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/eth/sepolia/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        sepoliaProvider: {
            http: [
                'https://rpc.sepolia.dev',
                'https://rpc.sepolia.org/',
                'https://rpc2.sepolia.org/',
                'https://rpc.sepolia.online/',
            ],
            provider: sepoliaProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: [
                'https://rpc.sepolia.dev',
                'https://rpc.sepolia.org/',
                'https://rpc2.sepolia.org/',
                'https://rpc.sepolia.online/',
            ],
            provider: sepoliaProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: [
                'https://rpc.sepolia.dev',
                'https://rpc.sepolia.org/',
                'https://rpc2.sepolia.org/',
                'https://rpc.sepolia.online/',
            ],
            provider: sepoliaProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        otterscan: {
            name: 'Otterscan Sepolia',
            browserUrl: 'https://sepolia.otterscan.io/',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
        },
        etherscan: {
            name: 'Sepolia Etherscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://sepolia.etherscan.io/',
            apiUrl: 'https://api-sepolia.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/v/sepolia-etherscan/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Sepolia Etherscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://sepolia.etherscan.io/',
            apiUrl: 'https://api-sepolia.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/v/sepolia-etherscan/',
            standard: BlockExplorerStandard.EIP3091,
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
