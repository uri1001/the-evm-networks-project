import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const bronosProvider = {
    provider: 'Bronos',
    url: 'https://bronos.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://bronos.org/privacy-policy/'],
} as const satisfies RpcNodeProvider
