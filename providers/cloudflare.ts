import { type RpcNodeProvider } from '../utils/interfaces'

export const cloudflare = {
    provider: 'Cloudflare',
    url: 'https://www.cloudflare.com/',
    privacyPolicy: ['https://www.cloudflare.com/privacypolicy/'],
} as const satisfies RpcNodeProvider
