import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const blockpi = {
    name: 'BlockPI Network',
    provider: 'blockpi',
    url: 'https://blockpi.io/',
    privacyLevel: ProviderPrivacyLevel.PartialPrivacy,
    privacyPolicy: ['https://blockpi.io/privacy-policy'],
} as const satisfies RpcNodeProvider
