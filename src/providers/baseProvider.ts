import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const baseProvider = {
    name: 'Base',
    provider: 'baseProvider',
    url: 'https://base.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.coinbase.com/legal/privacy/'],
} as const satisfies RpcProvider
