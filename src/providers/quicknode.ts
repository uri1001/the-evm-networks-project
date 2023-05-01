import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const quicknode = {
    name: 'Quicknode',
    provider: 'quicknode',
    url: 'https://www.quicknode.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://www.quicknode.com/privacy/'],
} as const satisfies RpcProvider
