import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const okx = {
    name: 'OKX',
    provider: 'okx',
    url: 'https://www.okx.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.okx.com/support/hc/en-us/articles/360015928271'],
} as const satisfies RpcProvider
