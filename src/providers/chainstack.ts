import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const chainstack = {
    name: 'Chainstack Labs',
    provider: 'chainstack',
    url: 'https://chainstack.com',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://chainstack.com/privacy/'],
} as const satisfies RpcProvider
