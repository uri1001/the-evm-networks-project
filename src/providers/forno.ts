import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const forno = {
    name: 'Forno',
    provider: 'forno',
    url: 'https://clabs.co/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://clabs.co/privacy/'],
} as const satisfies RpcNodeProvider
