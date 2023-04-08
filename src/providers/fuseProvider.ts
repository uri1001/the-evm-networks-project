import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const fuseProvider = {
    name: 'Fuse Network',
    provider: 'fuseProvider',
    url: 'https://fuse.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://fuse.cash/privacy-policy/'],
} as const satisfies RpcNodeProvider
