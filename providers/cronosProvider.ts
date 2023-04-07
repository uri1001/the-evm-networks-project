import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const cronosProvider = {
    provider: 'Cronos',
    url: 'https://cronos.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://cronos.org/cronos-privacy-notice.pdf'],
} as const satisfies RpcNodeProvider
