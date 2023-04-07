import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const fuseProvider = {
    provider: 'Fuse Network',
    url: 'https://fuse.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://fuse.cash/privacy-policy/'],
} as const satisfies RpcNodeProvider
