import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const neonProvider = {
    name: 'Neon Labs ltd.',
    provider: 'neonProvider',
    url: 'https://neon-labs.org',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://neon-labs.org/privacy-policy'],
} as const satisfies RpcProvider
