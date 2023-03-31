import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { baseProvider, blast } from '../providers'

export const base = {
    id: 8453,
    name: 'Base',
    network: 'base',
    infoUrl: 'https://base.org/',
    docsUrl: 'https://docs.base.org/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-8453.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            http: [''],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        base: {
            http: [''],
            provider: baseProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        public: {
            http: [''],
            provider: baseProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        default: {
            http: [''],
            provider: baseProvider,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
    },
    blockExplorers: {
        baseExplorer: {
            name: 'Base Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: '',
            apiUrl: '',
            docsUrl: '',
            standard: BlockExplorerStandard.TBD,
        },
        basescan: {
            name: 'Basescan',
            type: BlockExplorerType.Etherscan,
            browserUrl: '',
            apiUrl: '',
            docsUrl: '',
            standard: BlockExplorerStandard.TBD,
        },
        default: {
            name: 'Basescan',
            type: BlockExplorerType.Etherscan,
            browserUrl: '',
            apiUrl: '',
            docsUrl: '',
            standard: BlockExplorerStandard.TBD,
        },
    },
    testnet: false,
} as const satisfies Network
