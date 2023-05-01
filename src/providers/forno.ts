import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const forno = {
    name: 'Forno',
    provider: 'forno',
    url: 'https://clabs.co/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://clabs.co/privacy/'],
} as const satisfies RpcProvider
