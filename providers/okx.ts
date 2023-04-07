import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const okx = {
    provider: 'OKX',
    url: 'https://www.okx.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.okx.com/support/hc/en-us/articles/360015928271'],
} as const satisfies RpcNodeProvider
