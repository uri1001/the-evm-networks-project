import { type RpcNodeProvider } from '../utils/interfaces'

export const blockdaemon = {
    provider: 'Blockdaemon',
    url: 'https://blockdaemon.com/',
    privacyPolicy: ['https://blockdaemon.com/privacy-policy/'],
} as const satisfies RpcNodeProvider
