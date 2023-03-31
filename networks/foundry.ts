import { RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

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
