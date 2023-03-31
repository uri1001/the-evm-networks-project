import { type RpcNodeProvider } from '../utils/interfaces'

export const bobaProvider = {
    provider: 'Boba',
    url: 'https://boba.network/',
    privacyPolicy: ['https://forum.boba.network/privacy/'],
} as const satisfies RpcNodeProvider
