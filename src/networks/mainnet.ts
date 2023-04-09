import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import {
    alchemy,
    ankr,
    blast,
    blockpi,
    cloudflare,
    flashbots,
    infura,
    llama,
    omnia,
    onerpc,
    onfinality,
    pokt,
    publicnode,
    quicknode,
    thirdweb,
} from '../providers'

export const mainnet = {
    id: 1,
    name: 'Ethereum',
    network: 'homestead',
    infoUrl: 'https://ethereum.org/',
    docsUrl: 'https://ethereum.org/en/developers/docs/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: [`https://eth-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://eth-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            http: [`https://mainnet.infura.io/v3/${EndpointAuth.PrivateKey}`],
            wss: [`wss://mainnet.infura.io/ws/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        thirdweb: {
            http: ['https://ethereum.rpc.thirdweb.com/'],
            provider: thirdweb,
            authenticated: false,
        },
        blast: {
            http: ['https://eth-mainnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            http: ['https://ethereum.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            authenticated: false,
        },
        ankr: {
            http: ['https://rpc.ankr.com/eth/'],
            provider: ankr,
            authenticated: false,
        },
        onfinality: {
            http: ['https://harmony.api.onfinality.io/public/'],
            provider: onfinality,
            authenticated: false,
        },
        cloudflare: {
            http: ['https://cloudflare-eth.com/'],
            provider: cloudflare,
            authenticated: false,
        },
        onerpc: {
            http: ['https://1rpc.io/eth/'],
            provider: onerpc,
            authenticated: false,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/eth/mainnet/public/'],
            provider: omnia,
            authenticated: false,
        },
        pokt: {
            http: ['https://eth-rpc.gateway.pokt.network/'],
            provider: pokt,
            authenticated: false,
        },
        publicnode: {
            http: ['https://ethereum.publicnode.com/'],
            provider: publicnode,
            authenticated: false,
        },
        flashbots: {
            http: ['https://rpc.flashbots.net/'],
            provider: flashbots,
            authenticated: false,
        },
        llama: {
            http: ['https://eth.llamarpc.com/'],
            wss: ['wss://eth.llamarpc.com/'],
            provider: llama,
            authenticated: false,
        },
        public: {
            http: ['https://eth.llamarpc.com/'],
            wss: ['wss://eth.llamarpc.com/'],
            provider: llama,
            authenticated: false,
        },
        default: {
            http: ['https://eth.llamarpc.com/'],
            wss: ['wss://eth.llamarpc.com/'],
            provider: llama,
            authenticated: false,
        },
    },
    blockExplorers: {
        blockscout: {
            name: 'Blockscout',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://blockscout.com/eth/mainnet/',
            apiUrl: 'https://blockscout.com/eth/mainnet/api/',
            docsUrl: 'https://blockscout.com/eth/mainnet/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        etherscan: {
            name: 'Etherscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://etherscan.io/',
            apiUrl: 'https://api.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Etherscan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://etherscan.io/',
            apiUrl: 'https://api.etherscan.io/',
            docsUrl: 'https://docs.etherscan.io/',
            standard: BlockExplorerStandard.EIP3091,
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
