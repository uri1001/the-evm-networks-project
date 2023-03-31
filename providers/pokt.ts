import { type RpcNodeProvider } from '../utils/interfaces'

export const pokt = {
    provider: 'Pocket Network',
    url: 'https://www.pokt.network/',
    privacyPolicy: [
        'https://www.pokt.network/privacy-policy',
        'https://www.blog.pokt.network/rpc-logging-practices/',
    ],
} as const satisfies RpcNodeProvider
