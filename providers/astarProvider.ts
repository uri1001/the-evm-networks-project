import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../interfaces'

export const astarProvider = {
    provider: 'Astar',
    url: 'https://astar.network/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://forum.astar.network/privacy/'],
} as const satisfies RpcNodeProvider
