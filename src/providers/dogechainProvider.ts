import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const dogechainProvider = {
    name: 'Dogechain Provider',
    provider: 'dogechainProvider',
    url: 'https://dogechain.dog',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: [''],
} as const satisfies RpcProvider
