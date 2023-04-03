import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { polygonProvider } from '../providers'

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
        decimals: 18,
    },
    rpcNodes: {
        polygonProvider: {
            http: ['https://rpc.public.zkevm-test.net/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        public: {
            http: ['https://rpc.public.zkevm-test.net/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: ['https://rpc.public.zkevm-test.net/'],
            provider: polygonProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
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
