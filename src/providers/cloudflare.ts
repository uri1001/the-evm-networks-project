import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const cloudflare = {
    name: 'Cloudflare',
    provider: 'cloudflare',
    url: 'https://www.cloudflare.com/',
    privacyLevel: ProviderPrivacyLevel.NoPrivacy,
    privacyPolicy: ['https://www.cloudflare.com/privacypolicy/'],
} as const satisfies RpcNodeProvider
