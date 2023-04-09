import { type Network, type RpcNodeProvider } from '../types/types'

import { ProviderPrivacyLevel } from '../enums'

export const unknownProvider = {
    name: 'Unknown Provider',
    provider: 'unknownProvider',
    url: '',
    privacyLevel: ProviderPrivacyLevel.NoInfo,
    privacyPolicy: [''],
} as const satisfies RpcNodeProvider

export const unknownNetwork = {
    id: -1,
    name: 'unknown Network',
    network: 'unknown',
    infoUrl: '',
    docsUrl: '',
    eipUrl: '',
    nativeCurrency: {
        name: 'unknown',
        symbol: 'unknown',
        uSymbol: 'unknown',
        decimals: -1,
    },
    rpcNodes: {
        public: {
            http: [''],
            provider: unknownProvider,
            authenticated: false,
        },
        default: {
            http: [''],
            provider: unknownProvider,
            authenticated: false,
        },
    },
    testnet: true,
} as const satisfies Network
