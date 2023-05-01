import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import {
    alchemy,
    ankr,
    blast,
    blockpi,
    flashbots,
    infura,
    omnia,
    sepoliaProvider,
} from '../providers'

export const sepolia = {
    id: 11155111,
    name: 'Sepolia',
    network: 'sepolia',
    infoUrl: 'https://sepolia.dev',
    docsUrl: 'https://github.com/eth-clients/sepolia',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-11155111.json',
    nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            rpcNode: 'alchemy',
            http: [`https://eth-sepolia.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://eth-sepolia.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            rpcNode: 'infura',
            http: [`https://sepolia.infura.io/v3/${EndpointAuth.PrivateKey}`],
            wss: [`wss://sepolia.infura.io/ws/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        alchemyPublic: {
            rpcNode: 'alchemyPublic',
            http: ['https://eth-sepolia.g.alchemy.com/v2/demo'],
            provider: alchemy,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/eth_sepolia'],
            provider: ankr,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://eth-sepolia.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://eth-sepolia.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://eth-sepolia.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            rpcNode: 'blockpi',
            http: [`https://ethereum-sepolia.blockpi.network/v1/rpc/${EndpointAuth.PrivateKey}`],
            wss: [`wss://ethereum-sepolia.blockpi.network/v1/ws/${EndpointAuth.PrivateKey}`],
            provider: blockpi,
            authenticated: true,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            http: ['https://ethereum-sepolia.blockpi.network/v1/rpc/public'],
            provider: blockpi,
            authenticated: false,
        },
        flashbots: {
            rpcNode: 'flashbots',
            http: ['https://relay-sepolia.flashbots.net'],
            provider: flashbots,
            authenticated: false,
        },
        omnia: {
            rpcNode: 'omnia',
            http: ['https://endpoints.omniatech.io/v1/eth/sepolia/public'],
            provider: omnia,
            authenticated: false,
        },
        sepolia: {
            rpcNode: 'sepolia',
            http: [
                'https://rpc.sepolia.org',
                'https://rpc2.sepolia.org',
                'https://rpc.sepolia.online',
                'https://rpc.sepolia.dev',
            ],
            provider: sepoliaProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: [
                'https://rpc.sepolia.org',
                'https://rpc2.sepolia.org',
                'https://rpc.sepolia.online',
                'https://rpc.sepolia.dev',
            ],
            provider: sepoliaProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: [
                'https://rpc.sepolia.org',
                'https://rpc2.sepolia.org',
                'https://rpc.sepolia.online',
                'https://rpc.sepolia.dev',
            ],
            provider: sepoliaProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        otterscan: {
            name: 'Otterscan Sepolia',
            blockExplorer: 'otterscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://sepolia.otterscan.io',
        },
        etherscan: {
            name: 'Sepolia Etherscan',
            blockExplorer: 'etherscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://sepolia.etherscan.io',
            apiUrl: 'https://api-sepolia.etherscan.io',
            docsUrl: 'https://docs.etherscan.io/v/sepolia-etherscan',
        },
        default: {
            name: 'Sepolia Etherscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://sepolia.etherscan.io',
            apiUrl: 'https://api-sepolia.etherscan.io',
            docsUrl: 'https://docs.etherscan.io/v/sepolia-etherscan',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 751532,
            deployTxHash: '0x6313b2cee1ddd9a77a8a1edf93495a9eb3c51a4d85479f4f8fec0090ad82596b',
        },
    },
    testnet: true,
    mainnetId: 1,
} as const satisfies Network
