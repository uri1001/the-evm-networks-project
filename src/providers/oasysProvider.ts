import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const oasysProvider = {
    name: 'Oasys Games Limited',
    provider: 'oasysProvider',
    url: 'https://www.oasys.games',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: [
        'https://www.oasgames.com/PrivacyPolicy(EN).html#:~:text=You%20need%20an%20OASIS%20Account,number%20or%20other%20financial%20information.',
    ],
} as const satisfies RpcProvider
