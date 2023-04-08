import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const baseProvider = {
    name: 'Base',
    provider: 'baseProvider',
    url: 'https://base.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.coinbase.com/legal/privacy/'],
} as const satisfies RpcNodeProvider
