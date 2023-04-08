import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const omnia = {
    name: 'Omnia Tech',
    provider: 'omnia',
    url: 'https://omniatech.io/',
    privacyLevel: ProviderPrivacyLevel.Privacy,
    privacyPolicy: [
        'https://www.omniaretail.com/privacy-policy',
        'https://blog.omniatech.io/how-omnia-handles-your-personal-data/',
    ],
} as const satisfies RpcNodeProvider
