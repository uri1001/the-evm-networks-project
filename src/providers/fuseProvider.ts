import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const fuseProvider = {
    name: 'Fuse Network',
    provider: 'fuseProvider',
    url: 'https://fuse.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://fuse.cash/privacy-policy/'],
} as const satisfies RpcProvider
