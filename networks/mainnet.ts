import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, blast, fantomProvider, infura, omnia } from '../providers'

export const mainnet = {
    id: 1,
    name: 'Ethereum',
    network: 'homestead',
    infoUrl: 'https://ethereum.org/',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: ['https://eth-mainnet.g.alchemy.com/v2/'],
            webSocket: ['wss://eth-mainnet.g.alchemy.com/v2/'],
        },
        infura: {
            http: ['https://mainnet.infura.io/v3/'],
            wss: ['wss://mainnet.infura.io/ws/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        thirdweb: {
            http: ['https://ethereum.rpc.thirdweb.com'],
        },
        mycryptoapi: {
            http: ['https://api.mycryptoapi.com/eth/'],
        },
        cloudflare: {
            http: ['https://cloudflare-eth.com/'],
        },
        public: {
            http: ['https://cloudflare-eth.com/'],
        },
        default: {
            http: ['https://cloudflare-eth.com/'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Etherscan',
            browserUrl: 'https://etherscan.io/',
            apiUrl: 'https://api.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/',
            standard: 'EIP3091',
        },
        default: {
            name: 'Etherscan',
            browserUrl: 'https://etherscan.io/',
            apiUrl: 'https://api.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/',
            standard: 'EIP3091',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        ensUniversalResolver: {
            address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
            blockCreated: 16773775,
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 14353601,
        },
    },
    testnet: false,
} as const satisfies Network
