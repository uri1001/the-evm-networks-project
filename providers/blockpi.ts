import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const blockpi = {
    provider: 'BlockPI Network',
    url: 'https://blockpi.io/',
    privacyLevel: ProviderPrivacyLevel.PartialPrivacy,
    privacyPolicy: ['https://blockpi.io/privacy-policy'],
} as const satisfies RpcNodeProvider
