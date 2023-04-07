import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const iotexProvider = {
    provider: 'IoTeX Foundation',
    url: 'https://iotex.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://iotex.io/policy/'],
} as const satisfies RpcNodeProvider
