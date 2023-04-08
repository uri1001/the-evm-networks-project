import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const milkomedaProvider = {
    name: 'Milkomeda',
    provider: 'milkomedaProvider',
    url: 'https://milkomeda.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://milkomeda.com/terms-of-use/'],
} as const satisfies RpcNodeProvider
