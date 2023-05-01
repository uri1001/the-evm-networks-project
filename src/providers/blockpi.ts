import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const blockpi = {
    name: 'BlockPI Network',
    provider: 'blockpi',
    url: 'https://blockpi.io/',
    privacyLevel: ProviderPrivacyLevel.PartialPrivacy,
    privacyPolicy: ['https://blockpi.io/privacy-policy'],
} as const satisfies RpcProvider
