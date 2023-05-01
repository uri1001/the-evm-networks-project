import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const cronosProvider = {
    name: 'Cronos',
    provider: 'cronosProvider',
    url: 'https://cronos.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://cronos.org/cronos-privacy-notice.pdf'],
} as const satisfies RpcProvider
