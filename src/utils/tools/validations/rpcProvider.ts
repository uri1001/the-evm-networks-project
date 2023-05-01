import { type RpcProvider } from '../../../types'
import { type RpcProviderFilter } from '../../types'

import { validateFinalValidations, validatePrivacyLevel, validateString } from './core'

//
// RPC Provider Validation
//

const validateRpcProvider = (
    provider: RpcProvider | undefined,
    filter: RpcProviderFilter | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (provider == null) return false

    // validation

    const and: boolean[] = []
    const or: boolean[] = []

    const isValidName = validateString(provider.name, filter.name)
    const isValidProvider = validateString(provider.provider, filter.provider)

    const isPrivacyLevel = validatePrivacyLevel(provider.privacyLevel, filter.privacyLevel)

    if (filter.optional != null) {
        filter.optional?.includes('name') ? or.push(isValidName) : and.push(isValidName)
        filter.optional?.includes('provider') ? or.push(isValidProvider) : and.push(isValidProvider)
        filter.optional?.includes('privacyLevel')
            ? or.push(isPrivacyLevel)
            : and.push(isPrivacyLevel)
    } else {
        and.push(isValidName)
        and.push(isValidProvider)
        and.push(isPrivacyLevel)
    }

    const v = validateFinalValidations(and, or)

    if (filter.filterType != null) {
        if (filter.filterType === 'exclude') return !v
    }
    return v
}

export default validateRpcProvider
