import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const avalancheProvider = {
    name: 'Avalanche',
    provider: 'avalancheProvider',
    url: 'https://www.avax.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.avax.com/privacy-policy/'],
} as const satisfies RpcNodeProvider
