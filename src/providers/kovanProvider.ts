import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const kovanProvider = {
    name: 'Kovan Provider',
    provider: 'kovanProvider',
    url: 'https://kovan-testnet.github.io/website',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['not found'],
} as const satisfies RpcProvider
