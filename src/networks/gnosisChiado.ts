import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { gnosisProvider } from '../providers'

export const gnosisChiado = {
    id: 10200,
    name: 'Gnosis Chiado',
    network: 'chiado',
    infoUrl: 'https://www.gnosis.io/',
    docsUrl: 'https://docs.gnosischain.com/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-10200.json',
    nativeCurrency: {
        name: 'Gnosis',
        symbol: 'xDAI',
        uSymbol: 'axDAI',
        decimals: 18,
    },
    rpcNodes: {
        gnosisProvider: {
            http: [
                'https://rpc.chiadochain.net/',
                'https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado/',
            ],
            provider: gnosisProvider,
            authenticated: false,
        },
        public: {
            http: [
                'https://rpc.chiadochain.net/',
                'https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado/',
            ],
            provider: gnosisProvider,
            authenticated: false,
        },
        default: {
            http: [
                'https://rpc.chiadochain.net/',
                'https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado/',
            ],
            provider: gnosisProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        gnosisExplorerBlockscout: {
            name: 'Gnosis Chiado Blockchain Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://blockscout.chiadochain.net/',
            standard: BlockExplorerStandard.EIP3091,
        },
        gnosisExplorer: {
            name: 'Gnosis Chiado Blockchain Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://blockscout.com/gnosis/chiado/',
            apiUrl: 'https://blockscout.com/gnosis/chiado/api/',
            docsUrl: 'https://blockscout.com/gnosis/chiado/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Gnosis Chiado Blockchain Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://blockscout.com/gnosis/chiado/',
            apiUrl: 'https://blockscout.com/gnosis/chiado/api/',
            docsUrl: 'https://blockscout.com/gnosis/chiado/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    testnet: true,
} as const satisfies Network
