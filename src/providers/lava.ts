import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const lava = {
    name: 'Lava Networks',
    provider: 'lava',
    url: 'https://www.lavanet.xyz/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['not found'],
} as const satisfies RpcProvider
