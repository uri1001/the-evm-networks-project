import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const metisProvider = {
    name: 'Metis Provider',
    provider: 'metisProvider',
    url: 'https://metis.io/company/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider
