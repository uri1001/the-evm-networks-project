import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const publicnode = {
    name: 'PublicNode',
    provider: 'publicnode',
    url: 'https://www.publicnode.com',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: ['https://www.publicnode.com/privacy'],
} as const satisfies RpcProvider
