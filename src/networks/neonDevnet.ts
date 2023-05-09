import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { neonProvider } from '../providers'

export const neonDevnet = {
    id: 245022926,
    name: 'Neon Devnet',
    network: 'neonDevnet',
    infoUrl: 'https://neon-labs.org',
    docsUrl: 'https://neon-labs.org/developers',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-245022926.json',
    nativeCurrency: {
        name: 'Test Neon',
        symbol: 'tNEON',
        uSymbol: 'atNEON',
        decimals: 18,
    },
    rpcNodes: {
        neon: {
            rpcNode: 'neon',
            type: EndpointType.Public,
            http: ['https://devnet.neonevm.org'],
            provider: neonProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://devnet.neonevm.org'],
            provider: neonProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://devnet.neonevm.org'],
            provider: neonProvider,
        },
    },
    blockExplorers: {
        neonExplorer: {
            name: 'Neon Devnet Explorer',
            blockExplorer: 'neonExplorer',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://devnet.explorer.neon-labs.org',
        },
        neonscan: {
            name: 'Neon Devnet Scan',
            blockExplorer: 'neonscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://neonscan.org',
        },
        default: {
            name: 'Neon Devnet Scan',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://neonscan.org',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            deployBlock: 205206112,
            deployTxHash: '0xcce02c2d2ce167321e05168e4877c3a90b60d6afaa1e44f1349c6380baa491aa',
        },
    },
    testnet: true,
} as const satisfies Network
