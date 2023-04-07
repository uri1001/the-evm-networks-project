import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const fantomProvider = {
    provider: 'Fantom Foundation',
    url: 'https://fantom.foundation/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: [
        'https://app.termly.io/document/privacy-policy/761b18ba-cb88-4c57-af82-7c51466786dd/',
    ],
} as const satisfies RpcNodeProvider
