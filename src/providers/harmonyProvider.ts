import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const harmonyProvider = {
    name: 'Harmony Network',
    provider: 'harmonyProvider',
    url: 'https://www.harmony.one/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.harmony.one/privacy/'],
} as const satisfies RpcNodeProvider
