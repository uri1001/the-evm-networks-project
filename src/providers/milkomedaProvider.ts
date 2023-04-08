import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const milkomedaProvider = {
    name: 'Milkomeda',
    provider: 'milkomedaProvider',
    url: 'https://milkomeda.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://milkomeda.com/terms-of-use/'],
} as const satisfies RpcNodeProvider
