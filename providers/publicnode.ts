import { type RpcNodeProvider } from '../utils/interfaces'

export const publicnode = {
    provider: 'PublicNode',
    url: 'https://www.publicnode.com/',
    privacyPolicy: ['https://www.publicnode.com/privacy/'],
} as const satisfies RpcNodeProvider
