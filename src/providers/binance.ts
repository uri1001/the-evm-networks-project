import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const binance = {
    name: 'Binance',
    provider: 'binance',
    url: 'https://www.binance.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.bnbchain.org/en/privacy-policy/'],
} as const satisfies RpcNodeProvider
