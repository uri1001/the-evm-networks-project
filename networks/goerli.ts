import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, blast, fantomProvider, infura, omnia } from '../providers'

export const goerli = {
    id: 5,
    name: 'Goerli',
    network: 'goerli',
    infoUrl: 'https://goerli.net/#about',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcNodes: {
        alchemy: {
            http: ['https://eth-goerli.g.alchemy.com/v2/'],
            webSocket: ['wss://eth-goerli.g.alchemy.com/v2/'],
        },
        infura: {
            http: ['https://goerli.infura.io/v3/'],
            wss: ['wss://goerli.infura.io/ws/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        thirdweb: {
            http: ['https://goerli.rpc-staging.thirdweb.com'],
        },
        mudit: {
            http: ['https://rpc.goerli.mudit.blog/'],
        },
        ankr: {
            http: ['https://rpc.ankr.com/eth_goerli/'],
        },
        public: {
            http: ['https://rpc.ankr.com/eth_goerli/'],
        },
        default: {
            http: ['https://rpc.ankr.com/eth_goerli/'],
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'Etherscan',
            browserUrl: 'https://goerli.etherscan.io/',
            apiUrl: 'https://api-goerli.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/v/goerli-etherscan/',
            standard: 'EIP3091',
        },
        default: {
            name: 'Etherscan',
            browserUrl: 'https://goerli.etherscan.io/',
            apiUrl: 'https://api-goerli.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/v/goerli-etherscan/',
            standard: 'EIP3091',
        },
    },
    contracts: {
        ensRegistry: {
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
        },
        ensUniversalResolver: {
            address: '0xA292E2E58d4ddEb29C33c63173d0E8B7a2A4c62e',
            blockCreated: 8610406,
        },
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 6507670,
        },
    },
    testnet: true,
} as const satisfies Network
