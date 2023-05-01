import { type NativeCurrency } from '../../../types'
import { type NativeCurrencyFilter } from '../../types'

import { validateFinalValidations, validateNumber, validateString } from './core'

//
// Native Currency Validation
//

const validateNativeCurrency = (
    nativeCurrency: NativeCurrency | undefined,
    filter: NativeCurrencyFilter | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (nativeCurrency == null) return false

    // validation

    const and: boolean[] = []
    const or: boolean[] = []

    const isValidName = validateString(nativeCurrency.name, filter.name)
    const isValidSymbol = validateString(nativeCurrency.symbol, filter.symbol)
    const isValidUSymbol = validateString(nativeCurrency.uSymbol, filter.uSymbol)

    const isValidDecimals = validateNumber(nativeCurrency.decimals, filter.decimals)

    if (filter.optional != null) {
        filter.optional?.includes('name') ? or.push(isValidName) : and.push(isValidName)
        filter.optional?.includes('symbol') ? or.push(isValidSymbol) : and.push(isValidSymbol)
        filter.optional?.includes('uSymbol') ? or.push(isValidUSymbol) : and.push(isValidUSymbol)
        filter.optional?.includes('decimals') ? or.push(isValidDecimals) : and.push(isValidDecimals)
    } else {
        and.push(isValidName)
        and.push(isValidSymbol)
        and.push(isValidUSymbol)
        and.push(isValidDecimals)
    }

    const v = validateFinalValidations(and, or)

    if (filter.filterType != null) {
        if (filter.filterType === 'exclude') return !v
    }
    return v
}

export default validateNativeCurrency
