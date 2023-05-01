import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import {
    alchemy,
    ankr,
    arbitrumProvider,
    blast,
    blockpi,
    infura,
    omnia,
    onerpc,
    pokt,
} from '../providers'

export const arbitrumOne = {
    id: 42161,
    name: 'Arbitrum One',
    network: 'arbitrumOne',
    infoUrl: 'https://arbitrum.io',
    docsUrl: 'https://developer.arbitrum.io/public-chains',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-42161.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            rpcNode: 'alchemy',
            http: [`https://arb-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://arb-mainnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        infura: {
            rpcNode: 'infura',
            http: [`https://arbitrum-mainnet.infura.io/v3/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        pokt: {
            rpcNode: 'pokt',
            http: [`https://arbitrum-one.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: ['https://arbitrum-rpc.gateway.pokt.network'],
            provider: pokt,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/arbitrum'],
            provider: ankr,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://arbitrum-one.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://arbitrum-one.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://arbitrum-one.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            rpcNode: 'blockpi',
            http: [`https://arbitrum.blockpi.network/v1/rpc/${EndpointAuth.PrivateKey}`],
            wss: [`wss://arbitrum.blockpi.network/v1/ws/${EndpointAuth.PrivateKey}`],
            provider: blockpi,
            authenticated: true,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            http: ['https://arbitrum.blockpi.network/v1/rpc/public'],
            provider: blockpi,
            authenticated: false,
        },
        onerpc: {
            rpcNode: 'onerpc',
            http: ['https://1rpc.io/arb'],
            provider: onerpc,
            authenticated: false,
        },
        omnia: {
            rpcNode: 'omnia',
            http: ['https://endpoints.omniatech.io/v1/arbitrum/one/public'],
            provider: omnia,
            authenticated: false,
        },
        arbitrum: {
            rpcNode: 'arbitrum',
            http: ['https://arb1.arbitrum.io/rpc'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://arb1.arbitrum.io/rpc'],
            provider: arbitrumProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://arb1.arbitrum.io/rpc'],
            provider: arbitrumProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        arbitrumExplorer: {
            name: 'Arbitrum Explorer',
            blockExplorer: 'arbitrumExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.arbitrum.io',
        },
        arbiscan: {
            name: 'Arbiscan',
            blockExplorer: 'arbiscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://arbiscan.io',
            apiUrl: 'https://api.arbiscan.io',
            docsUrl: 'https://docs.arbiscan.io',
        },
        default: {
            name: 'Arbiscan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://arbiscan.io',
            apiUrl: 'https://api.arbiscan.io',
            docsUrl: 'https://docs.arbiscan.io',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 7654707,
            deployTxHash: '0x211f6689adbb0f3fba7392e899d23bde029cef532cbd0ae900920cc09f7d1f32',
        },
    },
    testnet: false,
} as const satisfies Network
