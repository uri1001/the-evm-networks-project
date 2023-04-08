import { type Network } from '../types/types'

import { localhostProvider } from '../providers'

export const localhost = {
    id: 1337,
    name: 'Go Ethereum Private Testnet',
    network: 'localhost',
    infoUrl: 'https://ethereum.org/en/developers/local-environment/',
    docsUrl: 'https://ethereum.org/en/developers/local-environment/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1337.json',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        public: {
            http: ['http://127.0.0.1:8545'],
            provider: localhostProvider,
            authenticated: false,
        },
        default: {
            http: ['http://127.0.0.1:8545'],
            provider: localhostProvider,
            authenticated: false,
        },
    },
    testnet: true,
} as const satisfies Network
