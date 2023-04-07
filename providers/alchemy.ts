import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const alchemy = {
    provider: 'Alchemy',
    url: 'https://www.alchemy.com/',
    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
    privacyPolicy: ['https://www.alchemy.com/policies/privacy-policy/'],
} as const satisfies RpcNodeProvider
