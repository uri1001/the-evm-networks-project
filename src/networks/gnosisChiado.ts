import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { gnosisProvider } from '../providers'

export const gnosisChiado = {
    id: 10200,
    name: 'Gnosis Chiado',
    network: 'gnosisChiado',
    infoUrl: 'https://www.gnosis.io',
    docsUrl: 'https://docs.gnosischain.com',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-10200.json',
    nativeCurrency: {
        name: 'Gnosis',
        symbol: 'xDAI',
        uSymbol: 'axDAI',
        decimals: 18,
    },
    rpcNodes: {
        blast: {
            rpcNode: 'blast',
            type: EndpointType.Authenticated,
            http: [`https://gnosis-chiado.blastapi.io/${EndpointAuth.Key}`],
            wss: [`wss://gnosis-chiado.blastapi.io/${EndpointAuth.Key}`],
            provider: gnosisProvider,
        },
        blastPublic: {
            rpcNode: 'blastPublic',
            type: EndpointType.Public,
            http: ['https://gnosis-chiado.public.blastapi.io'],
            wss: ['wss://gnosis-chiado.public.blastapi.io'],
            provider: gnosisProvider,
        },
        gnosis: {
            rpcNode: 'gnosis',
            type: EndpointType.Public,
            http: [
                'https://rpc.chiadochain.net',
                'https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado',
            ],
            provider: gnosisProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: [
                'https://rpc.chiadochain.net',
                'https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado',
            ],
            provider: gnosisProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: [
                'https://rpc.chiadochain.net',
                'https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado',
            ],
            provider: gnosisProvider,
        },
    },
    blockExplorers: {
        gnosisExplorerBlockscout: {
            name: 'Gnosis Chiado Blockscout',
            blockExplorer: 'gnosisExplorerBlockscout',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://blockscout.chiadochain.net',
        },
        gnosisExplorer: {
            name: 'Gnosis Chiado Blockchain Explorer',
            blockExplorer: 'gnosisExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://blockscout.com/gnosis/chiado',
            apiUrl: 'https://blockscout.com/gnosis/chiado/api',
            docsUrl: 'https://blockscout.com/gnosis/chiado/api-docs',
        },
        default: {
            name: 'Gnosis Chiado Blockchain Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://blockscout.com/gnosis/chiado',
            apiUrl: 'https://blockscout.com/gnosis/chiado/api',
            docsUrl: 'https://blockscout.com/gnosis/chiado/api-docs',
        },
    },
    testnet: true,
    mainnetId: 100,
} as const satisfies Network
