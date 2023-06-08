import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import {
    ankr,
    blast,
    blockpi,
    fantomProvider,
    lava,
    omnia,
    onerpc,
    pokt,
    publicnode,
} from '../providers'

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
            type: EndpointType.Authenticated,
            http: [`https://fantom-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        poktPublic: {
            rpcNode: 'poktPublic',
            type: EndpointType.Public,
            http: ['https://fantom-rpc.gateway.pokt.network'],
            provider: pokt,
        },
        lava: {
            rpcNode: 'lava',
            type: EndpointType.Public,
            http: [`https://g.w.lavanet.xyz:443/gateway/ftm250/rpc-http/${EndpointAuth.Key}`],
            wss: [`wss://g.w.lavanet.xyz:443/gateway/ftm250/rpc/${EndpointAuth.Key}`],
            provider: lava,
        },
        omnia: {
            rpcNode: 'omnia',
            type: EndpointType.Authenticated,
            http: [`https://endpoints.omniatech.io/v1/fantom/mainnet/${EndpointAuth.Key}`],
            wss: [`wss://endpoints.omniatech.io/v1/fantom/mainnet/${EndpointAuth.Key}`],
            provider: omnia,
        },
        omniaPublic: {
            rpcNode: 'omniaPublic',
            type: EndpointType.Public,
            http: ['https://endpoints.omniatech.io/v1/fantom/mainnet/public'],
            provider: omnia,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Authenticated,
            http: [`https://1rpc.io/${EndpointAuth.Key}/ftm`],
            provider: onerpc,
        },
        onerpcPublic: {
            rpcNode: 'onerpcPublic',
            type: EndpointType.Public,
            http: ['https://1rpc.io/ftm'],
            provider: onerpc,
        },
        publicnode: {
            rpcNode: 'publicnode',
            type: EndpointType.Public,
            http: ['https://fantom.publicnode.com'],
            provider: publicnode,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/fantom/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/fantom'],
            provider: ankr,
        },
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://fantom-mainnet.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://fantom-mainnet.blastapi.io/${EndpointAuth.Key}`],
            provider: blast,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://fantom-mainnet.public.blastapi.io'],
            wss: ['wss://fantom-mainnet.public.blastapi.io'],
            provider: blast,
        },
        blockpi: {
            rpcNode: 'blockpi',
            type: EndpointType.Authenticated,
            http: [`https://fantom.blockpi.network/v1/rpc/${EndpointAuth.Key}`],
            wss: [`wss://fantom.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: blockpi,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            type: EndpointType.Public,
            http: ['https://fantom.blockpi.network/v1/rpc/public'],
            provider: blockpi,
        },
        fantom: {
            rpcNode: 'fantom',
            type: EndpointType.Public,
            http: [
                'https://rpcapi.fantom.network',
                'https://rpc.fantom.network',
                'https://rpc2.fantom.network',
                'https://rpc3.fantom.network',
            ],
            provider: fantomProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: [
                'https://rpcapi.fantom.network',
                'https://rpc.fantom.network',
                'https://rpc2.fantom.network',
                'https://rpc3.fantom.network',
            ],
            provider: fantomProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: [
                'https://rpcapi.fantom.network',
                'https://rpc.fantom.network',
                'https://rpc2.fantom.network',
                'https://rpc3.fantom.network',
            ],
            provider: fantomProvider,
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
        ftmscan: {
            name: 'FTMScan',
            blockExplorer: 'ftmscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://ftmscan.com',
            apiUrl: 'https://api.ftmscan.com/api',
            docsUrl: 'https://docs.ftmscan.com',
        },
        default: {
            name: 'FTMScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://ftmscan.com',
            apiUrl: 'https://api.ftmscan.com/api',
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
