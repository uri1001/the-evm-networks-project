import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { ankr, blast, blockpi, gnosisProvider, onfinality, pokt, quicknode } from '../providers'

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
        uSymbol: 'axDAI',
        decimals: 18,
    },
    rpcNodes: {
        quicknode: {
            http: ['TBD'],
            provider: quicknode,
            authenticated: true,
        },
        ankr: {
            http: ['https://rpc.ankr.com/gnosis/'],
            provider: ankr,
            authenticated: false,
        },
        blast: {
            http: ['https://gnosis-mainnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        blockpi: {
            http: ['https://gnosis.blockpi.network/v1/rpc/public/'],
            provider: blockpi,
            authenticated: false,
        },
        onfinality: {
            http: ['https://gnosis.api.onfinality.io/public/'],
            provider: onfinality,
            authenticated: false,
        },
        pokt: {
            http: [
                'https://gnosischain-rpc.gateway.pokt.network/',
                'https://xdai-rpc.gateway.pokt.network',
            ],
            provider: pokt,
            authenticated: false,
        },
        gnosisProvider: {
            http: ['https://rpc.gnosischain.com/'],
            wss: ['wss://rpc.gnosischain.com/wss/'],
            provider: gnosisProvider,
            authenticated: false,
        },
        public: {
            http: ['https://rpc.gnosischain.com/'],
            wss: ['wss://rpc.gnosischain.com/wss/'],
            provider: gnosisProvider,
            authenticated: false,
        },
        default: {
            http: ['https://rpc.gnosischain.com/'],
            wss: ['wss://rpc.gnosischain.com/wss/'],
            provider: gnosisProvider,
            authenticated: false,
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
