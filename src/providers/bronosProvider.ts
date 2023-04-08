import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const bronosProvider = {
    name: 'Bronos',
    provider: 'bronosProvider',
    url: 'https://bronos.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://bronos.org/privacy-policy/'],
} as const satisfies RpcNodeProvider
