import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

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
    name: 'Ethereum',
    network: 'homestead',
    infoUrl: 'https://ethereum.org/',
    docsUrl: 'https://ethereum.org/en/developers/docs/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: ['https://eth-mainnet.g.alchemy.com/v2/'],
            wss: ['wss://eth-mainnet.g.alchemy.com/v2/'],
            provider: alchemy,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        infura: {
            http: ['https://mainnet.infura.io/v3/'],
            wss: ['wss://mainnet.infura.io/ws/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        thirdweb: {
            http: ['https://ethereum.rpc.thirdweb.com/'],
            provider: thirdweb,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        blast: {
            http: ['https://eth-mainnet.public.blastapi.io/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        blockpi: {
            http: ['https://ethereum.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        ankr: {
            http: ['https://rpc.ankr.com/eth/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        onfinality: {
            http: ['https://harmony.api.onfinality.io/public/'],
            provider: onfinality,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        cloudflare: {
            http: ['https://cloudflare-eth.com/'],
            provider: cloudflare,
            dataPrivacy: RpcDataPrivacyType.NoPrivacy,
        },
        onerpc: {
            http: ['https://1rpc.io/eth/'],
            provider: onerpc,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        omnia: {
            http: ['https://endpoints.omniatech.io/v1/eth/mainnet/public/'],
            provider: omnia,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        pokt: {
            http: ['https://eth-rpc.gateway.pokt.network/'],
            provider: pokt,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        publicnode: {
            http: ['https://ethereum.publicnode.com/'],
            provider: publicnode,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        flashbots: {
            http: ['https://rpc.flashbots.net/'],
            provider: flashbots,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        llama: {
            http: ['https://eth.llamarpc.com/'],
            wss: ['wss://eth.llamarpc.com/'],
            provider: llama,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        public: {
            http: ['https://eth.llamarpc.com/'],
            wss: ['wss://eth.llamarpc.com/'],
            provider: llama,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        default: {
            http: ['https://eth.llamarpc.com/'],
            wss: ['wss://eth.llamarpc.com/'],
            provider: llama,
            dataPrivacy: RpcDataPrivacyType.Privacy,
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
