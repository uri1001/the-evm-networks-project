import { type Network } from '../types/types'

import { localhostProvider } from '../providers'

export const foundry = {
    id: 31337,
    name: 'Foundry',
    network: 'foundry',
    infoUrl: 'https://github.com/foundry-rs/',
    docsUrl: 'https://github.com/foundry-rs/foundry/',
    eipUrl: 'none',
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
