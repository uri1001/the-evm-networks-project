import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const onfinality = {
    name: 'OnFinality',
    provider: 'onfinality',
    url: 'https://onfinality.io/',
    privacyLevel: ProviderPrivacyLevel.PartialPrivacy,
    privacyPolicy: ['https://onfinality.io/privacy/'],
} as const satisfies RpcProvider
