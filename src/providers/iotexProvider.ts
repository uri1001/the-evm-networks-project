import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const iotexProvider = {
    name: 'IoTeX Foundation',
    provider: 'iotexProvider',
    url: 'https://iotex.io/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://iotex.io/policy/'],
} as const satisfies RpcNodeProvider
