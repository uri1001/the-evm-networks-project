import { type RpcNode } from '../../../types'
import { type RpcNodeFilter } from '../../types'

import {
    validateBoolean,
    validateFinalValidations,
    validateHttpEndpoints,
    validateString,
    validateWssEndpoints,
} from './core'
import validateRpcProvider from './rpcProvider'

//
// RPC Node Validation
//

const validateRpcNode = (
    rpcNode: RpcNode | undefined,
    filter: RpcNodeFilter | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (rpcNode == null) return false

    // validation

    const and: boolean[] = []
    const or: boolean[] = []

    const isValidRpcNode = validateString(rpcNode.rpcNode, filter.rpcNode)

    const isValidHtpp = validateHttpEndpoints(rpcNode.http, filter.http)
    const isValidWss = validateWssEndpoints(rpcNode.wss, filter.wss)

    const isValidProvider = validateRpcProvider(rpcNode.provider, filter.provider)

    const isValidAuthenticated = validateBoolean(rpcNode.authenticated, filter.authenticated)

    if (filter.optional != null) {
        filter.optional?.includes('rpcNode') ? or.push(isValidRpcNode) : and.push(isValidRpcNode)
        filter.optional?.includes('http') ? or.push(isValidHtpp) : and.push(isValidHtpp)
        filter.optional?.includes('wss') ? or.push(isValidWss) : and.push(isValidWss)
        filter.optional?.includes('provider') ? or.push(isValidProvider) : and.push(isValidProvider)
        filter.optional?.includes('authenticated')
            ? or.push(isValidAuthenticated)
            : and.push(isValidAuthenticated)
    } else {
        and.push(isValidRpcNode)
        and.push(isValidHtpp)
        and.push(isValidWss)
        and.push(isValidProvider)
        and.push(isValidAuthenticated)
    }

    const v = validateFinalValidations(and, or)

    if (filter.filterType != null) {
        if (filter.filterType === 'exclude') return !v
    }
    return v
}

export default validateRpcNode
