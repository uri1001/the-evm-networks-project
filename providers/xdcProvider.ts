import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const xdcProvider = {
    provider: 'XinfFin',
    url: 'https://xinfin.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://xinfin.org/privacy/'],
} as const satisfies RpcNodeProvider
