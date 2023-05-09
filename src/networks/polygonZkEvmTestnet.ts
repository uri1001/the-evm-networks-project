import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { alchemy, ankr, polygonProvider } from '../providers'

export const polygonZkEvmTestnet = {
    id: 1442,
    name: 'Polygon zkEVM Testnet',
    network: 'polygonZkEvmTestnet',
    infoUrl: 'https://polygon.technology',
    docsUrl: 'https://wiki.polygon.technology',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1442.json',
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
            http: [`https://polygonzkevm-testnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
            wss: [`wss://polygonzkevm-testnet.g.alchemy.com/v2/${EndpointAuth.Key}`],
            provider: alchemy,
        },
        ankr: {
            rpcNode: 'ankr',
            type: EndpointType.Authenticated,
            http: [`https://rpc.ankr.com/polygon_zkevm_testnet/${EndpointAuth.Key}`],
            provider: ankr,
        },
        ankrPublic: {
            rpcNode: 'ankrPublic',
            type: EndpointType.Public,
            http: ['https://rpc.ankr.com/polygon_zkevm_testnet'],
            provider: ankr,
        },
        polygon: {
            rpcNode: 'polygon',
            type: EndpointType.Public,
            http: ['https://rpc.public.zkevm-test.net'],
            provider: polygonProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.public.zkevm-test.net'],
            provider: polygonProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.public.zkevm-test.net'],
            provider: polygonProvider,
        },
    },
    blockExplorers: {
        polygonExplorer: {
            name: 'Polygon zkEVM Testnet Blockchain Explorer',
            blockExplorer: 'polygonExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://explorer.public.zkevm-test.net',
            apiUrl: 'https://explorer.public.zkevm-test.net/api',
            docsUrl: 'https://explorer.public.zkevm-test.net/api-docs',
        },
        polygonScan: {
            name: 'zkEVM Testnet PolygonScan',
            blockExplorer: 'polygonScan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet-zkevm.polygonscan.com',
            apiUrl: 'https://api-testnet-zkevm.polygonscan.com/api',
            docsUrl: 'https://testnet-zkevm.polygonscan.com/apis',
        },
        default: {
            name: 'zkEVM Testnet PolygonScan',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet-zkevm.polygonscan.com',
            apiUrl: 'https://api-testnet-zkevm.polygonscan.com/api',
            docsUrl: 'https://testnet-zkevm.polygonscan.com/apis',
        },
    },
    testnet: true,
    mainnetId: 1101,
} as const satisfies Network
