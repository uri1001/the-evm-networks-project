import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const nodestake = {
    provider: 'NodeStake',
    privacyLevel: ProviderPrivacyLevel.TBD,
    url: 'https://nodestake.top/',
    privacyPolicy: ['not found'],
} as const satisfies RpcNodeProvider
