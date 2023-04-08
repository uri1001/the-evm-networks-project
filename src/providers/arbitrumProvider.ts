import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const arbitrumProvider = {
    name: 'Arbitrum',
    provider: 'arbitrum',
    url: 'https://arbitrum.io/',
    privacyLevel: ProviderPrivacyLevel.NoInfo,
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider
