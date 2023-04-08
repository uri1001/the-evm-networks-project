import { ProviderPrivacyLevel } from '../enums'
import { type RpcNodeProvider } from '../types/types'

export const thirdweb = {
    name: 'ThirdWeb',
    provider: 'thirdweb',
    url: 'https://thirdweb.com/',
    privacyLevel: ProviderPrivacyLevel.TBD,
    privacyPolicy: ['https://thirdweb.com/thirdweb_Privacy_Policy_May_2022.pdf'],
} as const satisfies RpcNodeProvider
