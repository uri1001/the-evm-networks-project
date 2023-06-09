import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { blockpi, cronosProvider, publicnode } from '../providers'

export const cronos = {
    id: 25,
    name: 'Cronos',
    network: 'cronos',
    infoUrl: 'https://cronos.org',
    docsUrl: 'https://docs.cronos.org/getting-started/readme',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-25.json',
    nativeCurrency: {
        name: 'Cronos',
        symbol: 'CRO',
        uSymbol: 'baseCRO',
        decimals: 18,
    },
    rpcNodes: {
        blockpi: {
            rpcNode: 'blockpi',
            type: EndpointType.Authenticated,
            http: [`https://cronos.blockpi.network/v1/rpc/${EndpointAuth.Key}`],
            wss: [`wss://cronos.blockpi.network/v1/ws/${EndpointAuth.Key}`],
            provider: blockpi,
        },
        blockpiPublic: {
            rpcNode: 'blockpiPublic',
            type: EndpointType.Public,
            http: ['https://cronos.blockpi.network/v1/rpc/public'],
            provider: blockpi,
        },
        publicnode: {
            rpcNode: 'publicnode',
            type: EndpointType.Public,
            http: ['https://cronos-evm.publicnode.com'],
            provider: publicnode,
        },
        cronos: {
            rpcNode: 'cronos',
            type: EndpointType.Public,
            http: ['https://evm.cronos.org', 'https://node.croswap.com/rpc'],
            provider: cronosProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://evm.cronos.org', 'https://node.croswap.com/rpc'],
            provider: cronosProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://evm.cronos.org', 'https://node.croswap.com/rpc'],
            provider: cronosProvider,
        },
    },
    blockExplorers: {
        cronosExplorer: {
            name: 'Cronos Explorer',
            blockExplorer: 'cronosExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://cronos.org/explorer',
            apiUrl: 'https://cronos.org/explorer/api',
            docsUrl: 'https://cronos.org/explorer/api-docs',
        },
        cronosScan: {
            name: 'CronosScan',
            blockExplorer: 'cronosScan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://cronoscan.com',
            apiUrl: 'https://api.cronoscan.com/api',
            docsUrl: 'https://cronoscan.com/apis',
        },
        default: {
            name: 'CronosScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://cronoscan.com',
            apiUrl: 'https://api.cronoscan.com/api',
            docsUrl: 'https://cronoscan.com/apis',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            deployBlock: 1963112,
            deployTxHash: '0x2393da7d6c62b1669fad4719596f17ab2071ecc8e49ab045f8134d516d0ec771',
        },
    },
    testnet: false,
} as const satisfies Network
