import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const metisProvider = {
    name: 'Metis Provider',
    provider: 'metisProvider',
    url: 'https://metis.io/company/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['not found'],
} as const satisfies RpcProvider
