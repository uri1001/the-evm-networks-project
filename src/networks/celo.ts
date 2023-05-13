import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { ankr, forno, infura, lava, onerpc, pokt } from '../providers'

export const celo = {
    id: 42220,
    name: 'Celo',
    network: 'celo',
    infoUrl: 'https://docs.celo.org',
    docsUrl: 'https://docs.celo.org/network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-42220.json',
    nativeCurrency: {
        name: 'Celo',
        symbol: 'CELO',
        uSymbol: 'aCELO',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            rpcNode: 'infura',
            type: EndpointType.Authenticated,
            http: [`https://celo-mainnet.infura.io/v3/${EndpointAuth.Key}`],
            provider: infura,
        },
        lava: {
            rpcNode: 'lava',
            type: EndpointType.Authenticated,
            http: [`https://g.w.lavanet.xyz:443/gateway/celo/rpc-http/${EndpointAuth.Key}`],
            wss: [`wss://g.w.lavanet.xyz:443/gateway/celo/rpc/${EndpointAuth.Key}`],
            provider: lava,
        },
        pokt: {
            rpcNode: 'pokt',
            type: EndpointType.Authenticated,
            http: [`https://celo-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/celo/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/celo'],
            provider: ankr,
        },
        onerpc: {
            rpcNode: 'onerpc',
            type: EndpointType.Public,
            http: ['https://1rpc.io/celo'],
            provider: onerpc,
        },
        forno: {
            rpcNode: 'forno',
            type: EndpointType.Public,
            http: ['https://forno.celo.org'],
            wss: ['wss://forno.celo.org/ws'],
            provider: forno,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://forno.celo.org'],
            wss: ['wss://forno.celo.org/ws'],
            provider: forno,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://forno.celo.org'],
            wss: ['wss://forno.celo.org/ws'],
            provider: forno,
        },
    },
    blockExplorers: {
        celoscan: {
            name: 'CeloScan',
            blockExplorer: 'celoscan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://celoscan.io',
            apiUrl: 'https://api.celoscan.io/api',
            docsUrl: 'https://celoscan.io/apis',
        },
        celoExplorer: {
            name: 'Celo Explorer',
            blockExplorer: 'celoExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.celo.org/mainnet',
            apiUrl: 'https://explorer.celo.org/mainnet/api',
            docsUrl: 'https://explorer.celo.org/mainnet/api-docs',
        },
        default: {
            name: 'Celo Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.celo.org/mainnet',
            apiUrl: 'https://explorer.celo.org/mainnet/api',
            docsUrl: 'https://explorer.celo.org/mainnet/api-docs',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            deployBlock: 13112599,
            deployTxHash: '0xe21952e50a541d6a9129009429b4c931841f95817235b2a7de4d0904c6278afb',
        },
    },
    testnet: false,
} as const satisfies Network
