import { BlockExplorerStandard, BlockExplorerType } from '../enums'
import { type Network } from '../types/types'

import { bobaProvider } from '../providers'

export const bobaTestnet = {
    id: 2888,
    name: 'Boba Network Goerli Testnet',
    network: 'boba-goerli',
    infoUrl: 'https://boba.network/',
    docsUrl: 'https://docs.boba.network/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-2888.json',
    nativeCurrency: {
        name: 'Goerli Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        boba: {
            http: ['https://goerli.boba.network/'],
            provider: bobaProvider,
            authenticated: false,
        },
        public: {
            http: ['https://goerli.boba.network/'],
            provider: bobaProvider,
            authenticated: false,
        },
        default: {
            http: ['https://goerli.boba.network/'],
            provider: bobaProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        bobascan: {
            name: 'BOBAScan Goerli Testnet',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.bobascan.com/',
            apiUrl: 'https://api-testnet.bobascan.com/api/',
            docsUrl: 'https://testnet.bobascan.com/apis/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'BOBAScan Goerli Testnet',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.bobascan.com/',
            apiUrl: 'https://api-testnet.bobascan.com/api/',
            docsUrl: 'https://testnet.bobascan.com/apis/',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: true,
} as const satisfies Network
