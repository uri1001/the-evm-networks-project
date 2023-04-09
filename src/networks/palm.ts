import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types/types'

import { blast, infura } from '../providers'

export const palm = {
    id: 11297108109,
    name: 'Palm',
    network: 'palm',
    infoUrl: 'https://palm.io/',
    docsUrl: '',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-11297108109.json',
    nativeCurrency: {
        name: 'PALM',
        symbol: 'PALM',
        uSymbol: 'aPALM',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            http: [
                'https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b/',
                'https://palm-mainnet.infura.io/v3/',
            ],
            wss: [`wss://palm-mainnet.infura.io/${EndpointAuth.PrivateKey}`],
            provider: infura,
            authenticated: true,
        },
        blast: {
            http: ['https://palm-mainnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        public: {
            http: ['https://palm-mainnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
        default: {
            http: ['https://palm-mainnet.public.blastapi.io/'],
            provider: blast,
            authenticated: false,
        },
    },
    blockExplorers: {
        palmExplorer: {
            name: 'Palm Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.palm.io/',
            apiUrl: 'https://explorer.palm.io/api/',
            docsUrl: 'https://explorer.palm.io/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Palm Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.palm.io/',
            apiUrl: 'https://explorer.palm.io/api/',
            docsUrl: 'https://explorer.palm.io/api-docs/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 88114,
        },
    },
    testnet: false,
} as const satisfies Network
