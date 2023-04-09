import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import { alchemy, polygonProvider, quicknode } from '../providers'

export const polygonZkEvmTestnet = {
    id: 1442,
    name: 'Polygon zkEVM Testnet',
    network: 'polygon-zkevm-testnet',
    infoUrl: 'https://polygon.technology/',
    docsUrl: 'https://wiki.polygon.technology/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1442.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        alchemy: {
            http: [`https://polygonzkevm-testnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            wss: [`wss://polygonzkevm-testnet.g.alchemy.com/v2/${EndpointAuth.PrivateKey}`],
            provider: alchemy,
            authenticated: true,
        },
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        polygonProvider: {
            http: ['https://rpc.public.zkevm-test.net/'],
            provider: polygonProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc.public.zkevm-test.net/'],
            provider: polygonProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc.public.zkevm-test.net/'],
            provider: polygonProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        polygonExplorer: {
            name: 'Polygon zkEVM Testnet Blockchain Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.public.zkevm-test.net/',
            apiUrl: 'https://explorer.public.zkevm-test.net/api/',
            docsUrl: 'https://explorer.public.zkevm-test.net/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        polygonScan: {
            name: 'zkEVM Testnet PolygonScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet-zkevm.polygonscan.com/',
            apiUrl: 'https://api-testnet-zkevm.polygonscan.com/api/',
            docsUrl: 'https://testnet-zkevm.polygonscan.com/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'zkEVM Testnet PolygonScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet-zkevm.polygonscan.com/',
            apiUrl: 'https://api-testnet-zkevm.polygonscan.com/api/',
            docsUrl: 'https://testnet-zkevm.polygonscan.com/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
