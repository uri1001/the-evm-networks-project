import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types'

import { baseProvider, blast } from '../providers'

export const baseGoerli = {
    id: 84531,
    name: 'Base Goerli',
    network: 'baseGoerli',
    infoUrl: 'https://base.org',
    docsUrl: 'https://docs.base.org',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-84531.json',
    nativeCurrency: {
        name: 'Base Goerli Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            rpcNode: 'blast',
            http: ['https://base-goerli.public.blastapi.io'],
            provider: blast,
            authenticated: false,
        },
        base: {
            rpcNode: 'base',
            http: ['https://goerli.base.org'],
            provider: baseProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://goerli.base.org'],
            provider: baseProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://goerli.base.org'],
            provider: baseProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        baseExplorer: {
            name: 'Base Goerli Explorer',
            blockExplorer: 'baseExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://base-goerli.blockscout.com',
            apiUrl: 'https://eth-goerli.blockscout.com/api',
            docsUrl: 'https://docs.blockscout.com/for-users/api/rpc-endpoints',
        },
        basescan: {
            name: 'Basescan Goerli',
            blockExplorer: 'basescan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.basescan.org',
            apiUrl: 'https://api-goerli.basescan.org/api',
            docsUrl: 'https://goerli.basescan.org/apis',
        },
        default: {
            name: 'Basescan Goerli',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://goerli.basescan.or/',
            apiUrl: 'https://api-goerli.basescan.org/api',
            docsUrl: 'https://goerli.basescan.org/apis',
        },
    },
    testnet: true,
    mainnetId: 8453,
} as const satisfies Network
