import { type RpcNodeProvider } from '../utils/interfaces'

export const cronosProvider = {
    provider: 'Cronos',
    url: 'https://cronos.org/',
    privacyPolicy: ['https://cronos.org/cronos-privacy-notice.pdf'],
} as const satisfies RpcNodeProvider
