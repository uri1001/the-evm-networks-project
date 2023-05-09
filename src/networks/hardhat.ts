import { type Network } from '../types'

import { EndpointType } from '../enums'
import { localhostProvider } from '../providers'

export const hardhat = {
    id: 31337,
    name: 'Hardhat',
    network: 'hardhat',
    infoUrl: 'https://hardhat.org',
    docsUrl: 'https://hardhat.org/docs',
    eipUrl: 'none',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        uSymbol: 'Wei',
        decimals: 18,
    },
    rpcNodes: {
        public: {
            rpcNode: 'public',
            type: EndpointType.Local,
            http: ['http://127.0.0.1:8545'],
            provider: localhostProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Local,
            http: ['http://127.0.0.1:8545'],
            provider: localhostProvider,
        },
    },
    testnet: true,
} as const satisfies Network
