import { type RpcNodeProvider } from '../utils/interfaces'

export const filecoinProvider = {
    provider: 'Protocol Labs',
    url: 'https://protocol.ai/',
    privacyPolicy: ['https://protocol.ai/legal/#privacy-policy/'],
} as const satisfies RpcNodeProvider
