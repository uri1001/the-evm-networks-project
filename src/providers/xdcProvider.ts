import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const xdcProvider = {
    name: 'XinfFin',
    provider: 'xdcProvider',
    url: 'https://xinfin.org/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://xinfin.org/privacy/'],
} as const satisfies RpcProvider
