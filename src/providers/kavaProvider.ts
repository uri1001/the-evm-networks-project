import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const kavaProvider = {
    name: 'Kava Labs Inc.',
    provider: 'kavaProvider',
    url: 'https://www.kava.io',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.kava.io/privacy-policy'],
} as const satisfies RpcProvider
