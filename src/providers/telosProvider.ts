import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const telosProvider = {
    name: 'Telos',
    provider: 'telosProvider',
    url: 'https://telos.net/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.telos.net/privacy-policy'],
} as const satisfies RpcNodeProvider
