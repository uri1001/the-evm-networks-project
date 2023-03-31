import { RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

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
