import { type RpcNodeProvider } from '../utils/interfaces'

export const polygonProvider = {
    provider: 'Polygon Labs',
    url: 'https://polygon.technology/',
    privacyPolicy: ['https://polygon.technology/privacy-policy/'],
} as const satisfies RpcNodeProvider
