import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const alchemy = {
    name: 'Alchemy',
    provider: 'alchemy',
    url: 'https://www.alchemy.com',
    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy'],
} as const satisfies RpcProvider
