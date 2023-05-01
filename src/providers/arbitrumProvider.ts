import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const arbitrumProvider = {
    name: 'Arbitrum',
    provider: 'arbitrum',
    url: 'https://arbitrum.io/',
    privacyLevel: ProviderPrivacyLevel.NoInfo,
    privacyPolicy: ['not found'],
} as const satisfies RpcProvider
