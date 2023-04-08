import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const xdcProvider = {
    name: 'XinfFin',
    provider: 'xdcProvider',
    url: 'https://xinfin.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://xinfin.org/privacy/'],
} as const satisfies RpcNodeProvider
