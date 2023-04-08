import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const quicknode = {
    name: 'Quicknode',
    provider: 'quicknode',
    url: 'https://www.quicknode.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.quicknode.com/privacy/'],
} as const satisfies RpcNodeProvider
