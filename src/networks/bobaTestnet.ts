import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { bobaProvider } from '../providers'

export const bobaTestnet = {
    id: 2888,
    name: 'Boba Network Goerli Testnet',
    network: 'bobaTestnet',
    infoUrl: 'https://boba.network',
    docsUrl: 'https://docs.boba.network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-2888.json',
    nativeCurrency: {
        name: 'Goerli Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        boba: {
            rpcNode: 'boba',
            type: EndpointType.Public,
            http: ['https://goerli.boba.network'],
            provider: bobaProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://goerli.boba.network'],
            provider: bobaProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://goerli.boba.network'],
            provider: bobaProvider,
        },
    },
    blockExplorers: {
        bobascan: {
            name: 'BOBAScan Goerli Testnet',
            blockExplorer: 'bobascan',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.bobascan.com',
            apiUrl: 'https://api-testnet.bobascan.com/api',
            docsUrl: 'https://testnet.bobascan.com/apis',
        },
        default: {
            name: 'BOBAScan Goerli Testnet',
            blockExplorer: 'default',
            type: BlockExplorerType.Etherscan,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.bobascan.com',
            apiUrl: 'https://api-testnet.bobascan.com/api',
            docsUrl: 'https://testnet.bobascan.com/apis',
        },
    },
    testnet: true,
    mainnetId: 288,
} as const satisfies Network
