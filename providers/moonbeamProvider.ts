import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const moonbeamProvider = {
    provider: 'Moonbeam Foundation',
    url: 'https://moonbeam.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://moonbeam.foundation/privacy-policy/'],
} as const satisfies RpcNodeProvider
