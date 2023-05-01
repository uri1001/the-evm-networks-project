import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const nodestake = {
    name: 'NodeStake',
    provider: 'nodestake',
    privacyLevel: ProviderPrivacyLevel.TBD,
    url: 'https://nodestake.top/',
    privacyPolicy: ['not found'],
} as const satisfies RpcProvider
