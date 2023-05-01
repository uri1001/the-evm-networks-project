import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const ubiqProvider = {
    name: 'Ubiq',
    provider: 'ubiqProvider',
    url: 'https://thirdweb.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['not found'],
} as const satisfies RpcProvider
