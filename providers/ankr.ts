import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const ankr = {
    provider: 'Ankr',
    url: 'https://www.ankr.com/',
    privacyLevel: ProviderPrivacyLevel.PartialPrivacy,
    privacyPolicy: [
        'https://www.ankr.com/privacy-policy/',
        'https://www.ankr.com/blog/ankrs-ip-address-policy-and-your-privacy/',
    ],
} as const satisfies RpcNodeProvider
