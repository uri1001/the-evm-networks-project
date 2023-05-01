import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

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
    thirdweb,
} from '../providers'

export const mainnet = {
    id: 1,
    name: 'Ethereum Mainnet',
    network: 'mainnet',
    infoUrl: 'https://ethereum.org',
    docsUrl: 'https://ethereum.org/en/developers/docs',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            rpcNode: 'alchemy',
            http: [`https://eth-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://eth-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            rpcNode: 'infura',
            http: [`https://mainnet.infura.io/v3/${EndpointAuth.PrivateKey}`],
            wss: [`wss://mainnet.infura.io/ws/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        pokt: {
            rpcNode: 'pokt',
            http: [
                `https://eth-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
                `https://eth-archival.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`,
            ],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: [
                'https://eth-rpc.gateway.pokt.network',
                'https://eth-archival-rpc.gateway.pokt.network',
            ],
            provider: pokt,
            authenticated: false,
        },
        thirdweb: {
            rpcNode: 'thirdweb',
            http: ['https://ethereum.rpc.thirdweb.com'],
            provider: thirdweb,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://eth-mainnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://eth-mainnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://eth-mainnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            rpcNode: 'blockpi',
            http: [`https://ethereum.blockpi.network/v1/rpc/${EndpointAuth.PrivateKey}`],
            wss: [`wss://ethereum.blockpi.network/v1/ws/${EndpointAuth.PrivateKey}`],
            provider: blockpi,
            authenticated: true,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            http: ['https://ethereum.blockpi.network/v1/rpc/public'],
            provider: blockpi,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/eth'],
            provider: ankr,
            authenticated: false,
        },
        onfinality: {
            rpcNode: 'onfinality',
            http: ['https://harmony.api.onfinality.io/public'],
            provider: onfinality,
            authenticated: false,
        },
        cloudflare: {
            rpcNode: 'cloudflare',
            http: ['https://cloudflare-eth.com'],
            provider: cloudflare,
            authenticated: false,
        },
        onerpc: {
            rpcNode: 'onerpc',
            http: ['https://1rpc.io/eth'],
            provider: onerpc,
            authenticated: false,
        },
        omnia: {
            rpcNode: 'omnia',
            http: ['https://endpoints.omniatech.io/v1/eth/mainnet/public'],
            provider: omnia,
            authenticated: false,
        },
        publicnode: {
            rpcNode: 'publicnode',
            http: ['https://ethereum.publicnode.com'],
            provider: publicnode,
            authenticated: false,
        },
        flashbots: {
            rpcNode: 'flashbots',
            http: ['https://rpc.flashbots.net'],
            provider: flashbots,
            authenticated: false,
        },
        llama: {
            rpcNode: 'llama',
            http: ['https://eth.llamarpc.com'],
            wss: ['wss://eth.llamarpc.com'],
            provider: llama,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://eth.llamarpc.com'],
            wss: ['wss://eth.llamarpc.com'],
            provider: llama,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://eth.llamarpc.com'],
            wss: ['wss://eth.llamarpc.com'],
            provider: llama,
            authenticated: false,
        },
    },
    blockExplorers: {
        blockscout: {
            name: 'Blockscout',
            blockExplorer: 'blockscout',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://blockscout.com/eth/mainnet',
            apiUrl: 'https://blockscout.com/eth/mainnet/api',
            docsUrl: 'https://blockscout.com/eth/mainnet/api-docs',
        },
        etherscan: {
            name: 'Etherscan',
            blockExplorer: 'etherscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://etherscan.io',
            apiUrl: 'https://api.etherscan.io',
            docsUrl: 'https://docs.etherscan.io',
        },
        default: {
            name: 'Etherscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://etherscan.io',
            apiUrl: 'https://api.etherscan.io',
            docsUrl: 'https://docs.etherscan.io',
        },
    },
    contracts: {
        ensRegistry: {
            name: 'ENS Registry',
            contract: 'ensRegistry',
            address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
            deployBlock: 9380380,
            deployTxHash: '0x00df88239dcc77e499f4ed3bad25bc58cc30663a26bc7c531decff94e861b9bf',
        },
        ensUniversalResolver: {
            name: 'ENS Universal Resolver',
            contract: 'ensUniversalResolver',
            address: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
            deployBlock: 16773775,
            deployTxHash: '0x9a188ae0321d9d09230b645e9d13c1802bfd97553e94cec4a42e0e1275b113ca',
        },
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 14353601,
            deployTxHash: '0x00d9fcb7848f6f6b0aae4fb709c133d69262b902156c85a473ef23faa60760bd',
        },
    },
    testnet: false,
} as const satisfies Network
