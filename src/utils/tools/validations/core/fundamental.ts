//
// Fundamental Type Validations
//

export const validateBoolean = (bool: boolean | undefined, filter: boolean | undefined): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (bool == null) return false

    // validation

    // true - valid filter match if both booleans are equal
    return bool === filter
}

export const validateNumber = (
    num: number | undefined,
    filter: Array<number | string> | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (num == null) return false

    // validation

    // true - valid filter match if num is found in filter array
    for (let i = 0; i < filter.length; i++) {
        if (num === Number(filter[i])) return true
    }

    return false
}

export const validateString = (str: string | undefined, filter: string[] | undefined): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (str == null) return false

    // validation

    // true - valid filter match if str is found in filter array
    for (let i = 0; i < filter.length; i++) {
        if (str.toLowerCase() === filter[i].toLowerCase()) return true
    }

    return false
}
