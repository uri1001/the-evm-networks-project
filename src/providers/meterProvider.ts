import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const meterProvider = {
    name: 'Meter Provider',
    provider: 'meterProvider',
    url: 'https://meter.io',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['not found'],
} as const satisfies RpcProvider
