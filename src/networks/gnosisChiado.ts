import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
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
            http: [`https://gnosis-chiado.blastapi.io/${EndpointAuth.PrivateKey}`],
            wss: [`wss://gnosis-chiado.blastapi.io/${EndpointAuth.PrivateKey}`],
            provider: gnosisProvider,
            authenticated: false,
        },
        gnosis: {
            rpcNode: 'gnosis',
            http: [
                'https://rpc.chiadochain.net',
                'https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado',
            ],
            provider: gnosisProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: [
                'https://rpc.chiadochain.net',
                'https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado',
            ],
            provider: gnosisProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: [
                'https://rpc.chiadochain.net',
                'https://rpc.eu-central-2.gateway.fm/v3/gnosis/archival/chiado',
            ],
            provider: gnosisProvider,
            authenticated: false,
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
