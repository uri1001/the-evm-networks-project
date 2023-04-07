import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const publicnode = {
    provider: 'PublicNode',
    url: 'https://www.publicnode.com/',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: ['https://www.publicnode.com/privacy/'],
} as const satisfies RpcNodeProvider
