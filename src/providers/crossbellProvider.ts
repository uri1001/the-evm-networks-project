import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const crossbellProvider = {
    name: 'Crossbell - Natural Selection Group Limited',
    provider: 'crossbellProvider',
    url: 'https://crossbell.io',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://legal.xlog.app/Privacy-Policy'],
} as const satisfies RpcProvider
