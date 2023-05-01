import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const avalancheProvider = {
    name: 'Avalanche',
    provider: 'avalancheProvider',
    url: 'https://www.avax.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.avax.com/privacy-policy/'],
} as const satisfies RpcProvider
