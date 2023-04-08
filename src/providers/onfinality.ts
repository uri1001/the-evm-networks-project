import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const onfinality = {
    name: 'OnFinality',
    provider: 'onfinality',
    url: 'https://onfinality.io/',
    privacyLevel: ProviderPrivacyLevel.PartialPrivacy,
    privacyPolicy: ['https://onfinality.io/privacy/'],
} as const satisfies RpcNodeProvider
