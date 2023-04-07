import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const taraxaProvider = {
    provider: 'Taraxa',
    url: 'https://taraxa.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: [
        'https://taraxa.io/static/taraxa_io/files/Taraxa_Global_Privacy_Policy_March_1_2021.pdf',
    ],
} as const satisfies RpcNodeProvider
