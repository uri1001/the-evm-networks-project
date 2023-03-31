import { type RpcNodeProvider } from '../utils/interfaces'

export const auroraProvider = {
    provider: 'Aurora',
    url: 'https://aurora.dev/',
    privacyPolicy: ['https://aurora.dev/privacy/'],
} as const satisfies RpcNodeProvider
