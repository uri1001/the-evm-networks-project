import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const avalancheProvider = {
    provider: 'Avalanche',
    url: 'https://www.avax.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.avax.com/privacy-policy/'],
} as const satisfies RpcNodeProvider
