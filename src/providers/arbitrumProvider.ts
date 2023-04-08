import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const arbitrumProvider = {
    name: 'Arbitrum',
    provider: 'arbitrum',
    url: 'https://arbitrum.io/',
    privacyLevel: ProviderPrivacyLevel.NoInfo,
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider