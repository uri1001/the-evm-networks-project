import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const scrollProvider = {
    provider: 'Scroll',
    url: 'https://scroll.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider
