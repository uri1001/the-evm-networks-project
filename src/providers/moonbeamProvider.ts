import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const moonbeamProvider = {
    name: 'Moonbeam Foundation',
    provider: 'moonbeamFoundation',
    url: 'https://moonbeam.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://moonbeam.foundation/privacy-policy/'],
} as const satisfies RpcProvider
