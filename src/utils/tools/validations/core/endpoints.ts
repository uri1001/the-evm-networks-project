//
// Endpoint Validations
//

export const validateHttpEndpoints = (
    endpoints: readonly string[] | undefined,
    filter: boolean | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // true - filter set to false and empty parameter is valid, always accepted
    // false - filter set to true and empty parameter is not valid, always rejected
    const isEmpty = endpoints == null || endpoints.length === 0
    if (isEmpty && !filter) return true
    if (isEmpty && filter) return false

    // false - no parameter to check does not apply validation, always rejected
    if (endpoints == null) return false

    // validation

    // true - valid filter match if all enpoints have an http format
    let v = true
    for (let i = 0; i < endpoints.length; i++) {
        const isHttp = endpoints[i].startsWith('http://') || endpoints[i].startsWith('https://')
        const isUrl = endpoints[i].length > 10
        v = v && isHttp && isUrl
    }

    // true - true - valid http check and filter accepts it - return true
    // true - false - valid http check and filter does not accept it - return false
    // false - true - not valid http check and filter accepts it - return false
    // false - false - not valid http check and filter does not accept it - return true
    return v === filter
}

export const validateWssEndpoints = (
    endpoints: readonly string[] | undefined,
    filter: boolean | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // true - filter set to false and empty parameter is valid, always accepted
    // false - filter set to true and empty parameter is not valid, always rejected
    const isEmpty = endpoints == null || endpoints.length === 0
    if (isEmpty && !filter) return true
    if (isEmpty && filter) return false

    // false - no parameter to check does not apply validation, always rejected
    if (endpoints == null) return false

    // validation

    // true - valid filter match if all enpoints have an wss format
    let v = true
    for (let i = 0; i < endpoints.length; i++) {
        const isWss = endpoints[i].startsWith('wss://')
        const isUrl = endpoints[i].length > 10
        v = v && isWss && isUrl
    }

    // true - true - valid wss check and filter accepts it - return true
    // true - false - valid wss check and filter does not accept it - return false
    // false - true - not valid wss check and filter accepts it - return false
    // false - false - not valid wss check and filter does not accept it - return true
    return v === filter
}
