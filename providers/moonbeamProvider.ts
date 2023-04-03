import { type RpcNodeProvider } from '../utils/interfaces'

export const moonbeamProvider = {
    provider: 'Moonbeam Foundation',
    url: 'https://moonbeam.network/',
    privacyPolicy: ['https://moonbeam.foundation/privacy-policy/'],
} as const satisfies RpcNodeProvider
