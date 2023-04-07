import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const omnia = {
    provider: 'Omnia Tech',
    url: 'https://omniatech.io/',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: [
        'https://www.omniaretail.com/privacy-policy',
        'https://blog.omniatech.io/how-omnia-handles-your-personal-data/',
    ],
} as const satisfies RpcNodeProvider
