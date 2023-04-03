import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, blast, blockpi, gnosisProvider, onfinality, pokt } from '../providers'

export const gnosis = {
    id: 100,
    name: 'Gnosis',
    network: 'gnosis',
    infoUrl: 'https://www.gnosis.io/',
    docsUrl: 'https://docs.gnosischain.com/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-100.json',
    nativeCurrency: {
        name: 'Gnosis',
        symbol: 'xDAI',
        decimals: 18,
    },
    rpcNodes: {
        ankr: {
            http: ['https://rpc.ankr.com/gnosis/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        blast: {
            http: ['https://gnosis-mainnet.public.blastapi.io/'],
            provider: blast,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        blockpi: {
            http: ['https://gnosis.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        onfinality: {
            http: ['https://gnosis.api.onfinality.io/public/'],
            provider: onfinality,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        pokt: {
            http: [
                'https://gnosischain-rpc.gateway.pokt.network/',
                'https://xdai-rpc.gateway.pokt.network',
            ],
            provider: pokt,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        gnosisProvider: {
            http: ['https://rpc.gnosischain.com/'],
            wss: ['wss://rpc.gnosischain.com/wss/'],
            provider: gnosisProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://rpc.gnosischain.com/'],
            wss: ['wss://rpc.gnosischain.com/wss/'],
            provider: gnosisProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://rpc.gnosischain.com/'],
            wss: ['wss://rpc.gnosischain.com/wss/'],
            provider: gnosisProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        gnosisExplorer: {
            name: 'Gnosis Blockchain Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://blockscout.com/xdai/mainnet/',
            standard: BlockExplorerStandard.EIP3091,
        },
        gnosisScan: {
            name: 'GnosisScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://gnosisscan.io/',
            apiUrl: 'https://api.gnosisscan.io/',
            docsUrl: 'https://docs.gnosisscan.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'GnosisScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://gnosisscan.io/',
            apiUrl: 'https://api.gnosisscan.io/',
            docsUrl: 'https://docs.gnosisscan.io/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: false,
} as const satisfies Network
