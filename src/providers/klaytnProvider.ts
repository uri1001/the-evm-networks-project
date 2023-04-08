import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const klaytnProvider = {
    name: 'Klaytn Foundation',
    provider: 'klaytnProvider',
    url: 'https://klaytn.foundation/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://klaytn.foundation/privacy/'],
} as const satisfies RpcNodeProvider
