import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../interfaces'

import {
    alchemy,
    blast,
    blockpi,
    flashbots,
    infura,
    omnia,
    quicknode,
    sepoliaProvider,
} from '../providers'

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
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: ['https://eth-sepolia.g.alchemy.com/v2/<private-key>'],
            wss: ['wss://eth-sepolia.g.alchemy.com/v2/<private-key>'],
            provider: alchemy,
            authenticated: true,
            authenticatedHttp: ['https://eth-sepolia.g.alchemy.com/v2/<private-key>'],
            authenticatedWss: ['wss://eth-sepolia.g.alchemy.com/v2/<private-key>'],
        },
        infura: {
            http: ['https://sepolia.infura.io/v3/'],
            wss: ['wss://sepolia.infura.io/ws/v3/'],
            provider: infura,
            authenticated: true,
            authenticatedHttp: ['TBD'],
        },
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
            authenticatedHttp: ['TBD'],
        },
        alchemyPublic: {
            http: ['https://eth-sepolia.g.alchemy.com/v2/demo/'],
            provider: alchemy,
            authenticated: false,
        },
        blast: {
            http: ['https://eth-sepolia.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            http: ['https://ethereum-sepolia.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            authenticated: false,
        },
        flashbots: {
            http: ['https://relay-sepolia.flashbots.net/'],
            provider: flashbots,
            authenticated: false,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/eth/sepolia/public/'],
            provider: omnia,
            authenticated: false,
        },
        sepoliaProvider: {
            http: [
                'https://rpc.sepolia.dev',
                'https://rpc.sepolia.org/',
                'https://rpc2.sepolia.org/',
                'https://rpc.sepolia.online/',
            ],
            provider: sepoliaProvider,
            authenticated: false,
        },
        public: {
            http: [
                'https://rpc.sepolia.dev',
                'https://rpc.sepolia.org/',
                'https://rpc2.sepolia.org/',
                'https://rpc.sepolia.online/',
            ],
            provider: sepoliaProvider,
            authenticated: false,
        },
        default: {
            http: [
                'https://rpc.sepolia.dev',
                'https://rpc.sepolia.org/',
                'https://rpc2.sepolia.org/',
                'https://rpc.sepolia.online/',
            ],
            provider: sepoliaProvider,
            authenticated: false,
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
