import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const pokt = {
    provider: 'Pocket Network',
    url: 'https://www.pokt.network/',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: [
        'https://www.pokt.network/privacy-policy',
        'https://www.blog.pokt.network/rpc-logging-practices/',
    ],
} as const satisfies RpcNodeProvider
