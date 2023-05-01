import { ProviderPrivacyLevel } from '../enums'
import { type RpcProvider } from '../types'

export const nexiProvider = {
    name: 'Nexi Provider',
    provider: 'nexiProvider',
    url: 'https://nexi.technology',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: [''],
} as const satisfies RpcProvider
