import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, binance, blast, blockpi, omnia, onerpc, pokt, publicnode } from '../providers'

export const bsc = {
    id: 56,
    name: 'BNB Smart Chain',
    network: 'bsc',
    infoUrl: 'https://www.bnbchain.org',
    docsUrl: 'https://docs.bnbchain.org/docs/overview',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-56.json',
    nativeCurrency: {
        name: 'Build & Build',
        symbol: 'BNB',
        uSymbol: 'Jager',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [
                `https://bsc-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
                `https://bsc-archival.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`,
            ],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: [
                'https://bsc-rpc.gateway.pokt.network',
                'https://bsc-mainnet.gateway.pokt.network/v1/lb/6136201a7bad1500343e248d',
            ],
            provider: pokt,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Authenticated,
            http: [`https://1rpc.io/${EndpointAuth.Key}/bnb`],
            provider: onerpc,
        },
        onerpcPublic: {
            rpcNode: 'onerpcPublic',
            type: EndpointType.Public,
            http: ['https://1rpc.io/bnb'],
            provider: onerpc,
        },
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/bsc/mainnet/${EndpointAuth.Key}`],
            wss: [`wss://endpoints.omniatech.io/v1/bsc/mainnet/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/bsc/mainnet/public'],
            provider: omnia,
        },
        publicnode: {
            rpcNode: 'publicnode',
            type: EndpointType.Public,
            http: ['https://bsc.publicnode.com'],
            provider: publicnode,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/bsc/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/bsc'],
            provider: ankr,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://bsc-mainnet.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://bsc-mainnet.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://bsc-mainnet.public.blastapi.io'],
            wss: ['wss://bsc-mainnet.public.blastapi.io'],
            provider: blast,
        },
        blockpi: {
            rpcNode: 'blockpi',
            type: EndpointType.Authenticated,
            http: [`https://bsc.blockpi.network/v1/rpc/${EndpointAuth.Key}`],
            wss: [`wss://bsc.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: blockpi,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            type: EndpointType.Public,
            http: ['https://bsc.blockpi.network/v1/rpc/public'],
            provider: blockpi,
        },
        binance: {
            rpcNode: 'binance',
            type: EndpointType.Public,
            http: ['https://bsc-dataseed.binance.org'],
            provider: binance,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://bsc-dataseed.binance.org'],
            provider: binance,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://bsc-dataseed.binance.org'],
            provider: binance,
        },
    },
    blockExplorers: {
        bscscan: {
            name: 'BscScan',
            blockExplorer: 'bscscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://bscscan.com',
            apiUrl: 'https://api.bscscan.com/api',
            docsUrl: 'https://docs.bscscan.com',
        },
        default: {
            name: 'BscScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://bscscan.com',
            apiUrl: 'https://api.bscscan.com/api',
            docsUrl: 'https://docs.bscscan.com',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 15921452,
            deployTxHash: '0xcc0ddf5f791617ba9befce57995dbcb3a202946a1eefa3469742b01a0decdaf2',
        },
    },
    testnet: false,
} as const satisfies Network
