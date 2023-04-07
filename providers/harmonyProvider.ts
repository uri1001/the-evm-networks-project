import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const harmonyProvider = {
    provider: 'Harmony Network',
    url: 'https://www.harmony.one/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.harmony.one/privacy/'],
} as const satisfies RpcNodeProvider
