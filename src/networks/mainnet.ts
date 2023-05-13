import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import {
    alchemy,
    ankr,
    blast,
    blockpi,
    cloudflare,
    flashbots,
    infura,
    lava,
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
            type: EndpointType.Authenticated,
            http: [`https://eth-mainnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
            wss: [`wss://eth-mainnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
            provider: alchemy,
        },
        infura: {
            rpcNode: 'infura',
            type: EndpointType.Authenticated,
            http: [`https://mainnet.infura.io/v3/${EndpointAuth.Key}`],
            wss: [`wss://mainnet.infura.io/ws/v3/${EndpointAuth.Key}`],
            provider: infura,
        },
        lava: {
            rpcNode: 'lava',
            type: EndpointType.Authenticated,
            http: [`https://g.w.lavanet.xyz:443/gateway/eth/rpc-http/${EndpointAuth.Key}`],
            wss: [`wss://g.w.lavanet.xyz:443/gateway/eth/rpc/${EndpointAuth.Key}`],
            provider: lava,
        },
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [
                `https://eth-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
                `https://eth-archival.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
            ],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: [
                'https://eth-rpc.gateway.pokt.network',
                'https://eth-archival-rpc.gateway.pokt.network',
            ],
            provider: pokt,
        },
        thirdweb: {
            rpcNode: 'thirdweb',
            type: EndpointType.Public,
            http: ['https://ethereum.rpc.thirdweb.com'],
            provider: thirdweb,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://eth-mainnet.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://eth-mainnet.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://eth-mainnet.public.blastapi.io'],
            wss: ['wss://eth-mainnet.public.blastapi.io'],
            provider: blast,
        },
        blockpi: {
            rpcNode: 'blockpi',
            type: EndpointType.Authenticated,
            http: [`https://ethereum.blockpi.network/v1/rpc/${EndpointAuth.Key}`],
            wss: [`wss://ethereum.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: blockpi,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            type: EndpointType.Public,
            http: ['https://ethereum.blockpi.network/v1/rpc/public'],
            provider: blockpi,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/eth/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/eth'],
            provider: ankr,
        },
        onfinality: {
            rpcNode: 'onfinality',
            type: EndpointType.Public,
            http: ['https://eth.api.onfinality.io/public'],
            provider: onfinality,
        },
        cloudflare: {
            rpcNode: 'cloudflare',
            type: EndpointType.Public,
            http: ['https://cloudflare-eth.com'],
            provider: cloudflare,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Public,
            http: ['https://1rpc.io/eth'],
            provider: onerpc,
        },
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/eth/mainnet/${EndpointAuth.Key}`],
            wss: [`wss://ethereum.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/eth/mainnet/public'],
            provider: omnia,
        },
        publicnode: {
            rpcNode: 'publicnode',
            type: EndpointType.Public,
            http: ['https://ethereum.publicnode.com'],
            provider: publicnode,
        },
        flashbots: {
            rpcNode: 'flashbots',
            type: EndpointType.Public,
            http: ['https://rpc.flashbots.net'],
            provider: flashbots,
        },
        llama: {
            rpcNode: 'llama',
            type: EndpointType.Public,
            http: ['https://eth.llamarpc.com'],
            wss: ['wss://eth.llamarpc.com'],
            provider: llama,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://eth.llamarpc.com'],
            wss: ['wss://eth.llamarpc.com'],
            provider: llama,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://eth.llamarpc.com'],
            wss: ['wss://eth.llamarpc.com'],
            provider: llama,
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
            apiUrl: 'https://api.etherscan.io/api',
            docsUrl: 'https://docs.etherscan.io',
        },
        default: {
            name: 'Etherscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://etherscan.io',
            apiUrl: 'https://api.etherscan.io/api',
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
