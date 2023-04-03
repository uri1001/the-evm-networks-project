import { type RpcNodeProvider } from '../utils/interfaces'

export const harmonyProvider = {
    provider: 'Harmony Network',
    url: 'https://www.harmony.one/',
    privacyPolicy: ['https://www.harmony.one/privacy/'],
} as const satisfies RpcNodeProvider
