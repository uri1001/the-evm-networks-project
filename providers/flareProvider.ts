import { type RpcNodeProvider } from '../utils/interfaces'

export const flareProvider = {
    provider: 'Flare Network',
    url: 'https://flare.network/',
    privacyPolicy: ['https://flare.network/privacy-policy/'],
} as const satisfies RpcNodeProvider
