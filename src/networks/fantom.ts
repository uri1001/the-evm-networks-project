import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { ankr, blast, blockpi, fantomProvider, omnia, onerpc, pokt, publicnode } from '../providers'

export const fantom = {
    id: 250,
    name: 'Fantom Opera',
    network: 'fantom',
    infoUrl: 'https://fantom.foundation',
    docsUrl: 'https://docs.fantom.foundation',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-250.json',
    nativeCurrency: {
        name: 'Fantom',
        symbol: 'FTM',
        uSymbol: 'aFTM',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            http: [`https://fantom-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`],
            provider: pokt,
            authenticated: true,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            http: ['https://fantom-rpc.gateway.pokt.network'],
            provider: pokt,
            authenticated: false,
        },
        omnia: {
            rpcNode: 'omnia',
            http: ['https://endpoints.omniatech.io/v1/fantom/mainnet/public'],
            provider: omnia,
            authenticated: false,
        },
        onerpc: {
            rpcNode: 'onerpc',
            http: ['https://1rpc.io/ftm'],
            provider: onerpc,
            authenticated: false,
        },
        publicnode: {
            rpcNode: 'publicnode',
            http: ['https://fantom.publicnode.com'],
            provider: publicnode,
            authenticated: false,
        },
        ankr: {
            rpcNode: 'ankr',
            http: ['https://rpc.ankr.com/fantom'],
            provider: ankr,
            authenticated: false,
        },
        blast: {
            rpcNode: 'blast',
            http: [`https://fantom-mainnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://fantom-mainnet.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: blast,
            authenticated: true,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            http: ['https://fantom-mainnet.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            rpcNode: 'blockpi',
            http: [`https://fantom.blockpi.network/v1/rpc/${EndpointAuth.PrivateKey}`],
            wss: [`wss://fantom.blockpi.network/v1/ws/${EndpointAuth.PrivateKey}`],
            provider: blockpi,
            authenticated: true,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            http: ['https://fantom.blockpi.network/v1/rpc/public'],
            provider: blockpi,
            authenticated: false,
        },
        fantom: {
            rpcNode: 'fantom',
            http: [
                'https://rpcapi.fantom.network',
                'https://rpc.fantom.network',
                'https://rpc2.fantom.network',
                'https://rpc3.fantom.network',
            ],
            provider: fantomProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: [
                'https://rpcapi.fantom.network',
                'https://rpc.fantom.network',
                'https://rpc2.fantom.network',
                'https://rpc3.fantom.network',
            ],
            provider: fantomProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: [
                'https://rpcapi.fantom.network',
                'https://rpc.fantom.network',
                'https://rpc2.fantom.network',
                'https://rpc3.fantom.network',
            ],
            provider: fantomProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        oklink: {
            name: 'Fantom Oklink Explorer',
            blockExplorer: 'oklink',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://www.oklink.com/ftm',
            apiUrl: 'https://www.oklink.com',
            docsUrl: 'https://www.oklink.com/docs',
        },
        ftmExplorer: {
            name: 'Fantom Explorer',
            blockExplorer: 'ftmExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://explorer.fantom.network',
        },
        ftmScan: {
            name: 'FTMScan',
            blockExplorer: 'ftmScan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://ftmscan.com',
            apiUrl: 'https://api.ftmscan.com',
            docsUrl: 'https://docs.ftmscan.com',
        },
        default: {
            name: 'FTMScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://ftmscan.com',
            apiUrl: 'https://api.ftmscan.com',
            docsUrl: 'https://docs.ftmscan.com',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 33001987,
            deployTxHash: '0xcd2027fb534d23b4562e8ee6f598a2d82c2452ed4987ba25d863f654dfad97df',
        },
    },
    testnet: false,
} as const satisfies Network
