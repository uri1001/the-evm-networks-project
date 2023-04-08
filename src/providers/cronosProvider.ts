import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const cronosProvider = {
    name: 'Cronos',
    provider: 'cronosProvider',
    url: 'https://cronos.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://cronos.org/cronos-privacy-notice.pdf'],
} as const satisfies RpcNodeProvider
