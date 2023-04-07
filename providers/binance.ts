import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const binance = {
    provider: 'Binance',
    url: 'https://www.binance.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.bnbchain.org/en/privacy-policy/'],
} as const satisfies RpcNodeProvider
