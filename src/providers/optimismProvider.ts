import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const optimismProvider = {
    name: 'Optimism',
    provider: 'optimismProvider',
    url: 'https://optimism.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.optimism.io/data-privacy-policy/'],
} as const satisfies RpcNodeProvider
