import { type RpcNodeProvider } from '../utils/interfaces'

export const fuseProvider = {
    provider: 'Fuse Network',
    url: 'https://fuse.io/',
    privacyPolicy: ['https://fuse.cash/privacy-policy/'],
} as const satisfies RpcNodeProvider
