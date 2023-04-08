import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { baseProvider, blast } from '../providers'

export const baseGoerli = {
    id: 84531,
    name: 'Base Goerli',
    network: 'base-goerli',
    infoUrl: 'https://base.org/',
    docsUrl: 'https://docs.base.org/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-84531.json',
    nativeCurrency: {
        name: 'Base Goerli Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            http: ['https://base-goerli.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        base: {
            http: ['https://goerli.base.org/'],
            provider: baseProvider,
            authenticated: false,
        },
        public: {
            http: ['https://goerli.base.org/'],
            provider: baseProvider,
            authenticated: false,
        },
        default: {
            http: ['https://goerli.base.org/'],
            provider: baseProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        baseExplorer: {
            name: 'Base Goerli Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://base-goerli.blockscout.com/',
            apiUrl: 'https://eth-goerli.blockscout.com/api/',
            docsUrl: 'https://docs.blockscout.com/for-users/api/rpc-endpoints/',
            standard: BlockExplorerStandard.EIP3091,
        },
        basescan: {
            name: 'Basescan Goerli',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://goerli.basescan.org/',
            apiUrl: 'https://api-goerli.basescan.org/api/',
            docsUrl: 'https://goerli.basescan.org/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Basescan Goerli',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://goerli.basescan.org/',
            apiUrl: 'https://api-goerli.basescan.org/api/',
            docsUrl: 'https://goerli.basescan.org/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
