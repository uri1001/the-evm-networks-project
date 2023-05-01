import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const milkomedaProvider = {
    name: 'Milkomeda',
    provider: 'milkomedaProvider',
    url: 'https://milkomeda.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://milkomeda.com/terms-of-use/'],
} as const satisfies RpcProvider
