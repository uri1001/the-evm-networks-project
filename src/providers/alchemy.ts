import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const alchemy = {
    name: 'Alchemy',
    provider: 'alchemy',
    url: 'https://www.alchemy.com/',
    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
} as const satisfies RpcNodeProvider
