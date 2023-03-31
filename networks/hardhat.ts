import { RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { localhostProvider } from '../providers'

export const hardhat = {
    id: 31337,
    name: 'Hardhat',
    network: 'hardhat',
    infoUrl: 'https://hardhat.org/',
    docsUrl: 'https://hardhat.org/docs/',
    eipUrl: 'none',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcNodes: {
        public: {
            http: ['http://127.0.0.1:8545'],
            provider: localhostProvider,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        default: {
            http: ['http://127.0.0.1:8545'],
            provider: localhostProvider,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
    },
    testnet: true,
} as const satisfies Network
