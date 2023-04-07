import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const baseProvider = {
    provider: 'Base',
    url: 'https://base.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.coinbase.com/legal/privacy/'],
} as const satisfies RpcNodeProvider
