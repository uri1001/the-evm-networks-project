import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const pokt = {
    name: 'Pocket Network',
    provider: 'pokt',
    url: 'https://www.pokt.network/',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: [
        'https://www.pokt.network/privacy-policy',
        'https://www.blog.pokt.network/rpc-logging-practices/',
    ],
} as const satisfies RpcNodeProvider
