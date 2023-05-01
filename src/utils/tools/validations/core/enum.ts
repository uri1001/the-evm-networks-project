import {
    type BlockExplorerStandard,
    type BlockExplorerType,
    type ProviderPrivacyLevel,
} from '../../../../enums'

//
// Enum Validations
//

export const validatePrivacyLevel = (
    level: ProviderPrivacyLevel | undefined,
    filter: ProviderPrivacyLevel[] | string[] | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (level == null) return false

    // validation

    // true - valid filter match if level is found in filter array
    for (let i = 0; i < filter.length; i++) if (filter[i] === level) return true
    return false
}

export const validateBlockExplorerType = (
    type: BlockExplorerType | undefined,
    filter: BlockExplorerType[] | string[] | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (type == null) return false

    // validation

    // true - valid filter match if level is found in filter array
    for (let i = 0; i < filter.length; i++) if (filter[i] === type) return true
    return false
}

export const validateBlockExplorerStandard = (
    standard: BlockExplorerStandard | undefined,
    filter: BlockExplorerStandard[] | string[] | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (standard == null) return false

    // validation

    // true - valid filter match if level is found in filter array
    for (let i = 0; i < filter.length; i++) if (filter[i] === standard) return true
    return false
}
