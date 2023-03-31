import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, filecoinProvider } from '../providers'

export const filecoin = {
    id: 314,
    name: 'Filecoin Mainnet',
    network: 'filecoin-mainnet',
    infoUrl: 'https://filecoin.io/',
    docsUrl: 'https://docs.filecoin.io/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-314.json',
    nativeCurrency: {
        name: 'Filecoin',
        symbol: 'FIL',
        decimals: 18,
    },
    rpcNodes: {
        ankr: {
            http: ['https://rpc.ankr.com/filecoin/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        filecoin: {
            http: ['https://api.node.glif.io/'],
            provider: filecoinProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://api.node.glif.io/'],
            provider: filecoinProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://api.node.glif.io/'],
            provider: filecoinProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        glif: {
            name: 'Glif Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.glif.io/',
            standard: BlockExplorerStandard.None,
        },
        filscan: {
            name: 'Filscan',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://filscan.io/',
            standard: BlockExplorerStandard.None,
        },
        filscout: {
            name: 'Filscout',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://www.filscout.com/',
            standard: BlockExplorerStandard.None,
        },
        filfox: {
            name: 'Filfox',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://filfox.info/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Filfox',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://filfox.info/',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: false,
} as const satisfies Network
