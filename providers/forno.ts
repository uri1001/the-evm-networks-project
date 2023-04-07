import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const forno = {
    provider: 'Forno',
    url: 'https://clabs.co/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://clabs.co/privacy/'],
} as const satisfies RpcNodeProvider
