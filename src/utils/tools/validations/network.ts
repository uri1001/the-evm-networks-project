import { type Network } from '../../../types'
import { type NetworkFilter } from '../../types'
import validateBlockExplorer from './blockExplorer'
import validateContract from './contract'

import { validateBoolean, validateFinalValidations, validateNumber, validateString } from './core'
import validateNativeCurrency from './nativeCurrency'
import validateRpcNode from './rpcNode'

//
// Network Validation
//

const validateNetwork = (
    network: Network | undefined,
    filter: NetworkFilter | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (network == null) return false

    // validation

    const and: boolean[] = []
    const or: boolean[] = []

    const isValidId = validateNumber(network.id, filter.id)

    const isValidName = validateString(network.name, filter.name)
    const isValidNetwork = validateString(network.network, filter.network)

    const isValidNativeCurrency = validateNativeCurrency(
        network.nativeCurrency,
        filter.nativeCurrency,
    )

    let isValidRpcNodes = false
    const rpcNodes = Object.values(network.rpcNodes)

    if (rpcNodes.length === 0) {
        if (filter.rpcNodes == null) isValidRpcNodes = true
    } else {
        for (let i = 0; i < rpcNodes.length; i++)
            isValidRpcNodes = isValidRpcNodes || validateRpcNode(rpcNodes[i], filter.rpcNodes)
    }

    let isValidBlockExplorers = false
    if (network.blockExplorers == null) {
        if (filter.blockExplorers == null) isValidBlockExplorers = true
    } else {
        const blockExplorers = Object.values(network.blockExplorers)

        if (blockExplorers.length === 0) {
            if (filter.blockExplorers == null) isValidBlockExplorers = true
        } else {
            for (let i = 0; i < blockExplorers.length; i++)
                isValidBlockExplorers =
                    isValidBlockExplorers ||
                    validateBlockExplorer(blockExplorers[i], filter.blockExplorers)
        }
    }

    let isValidContracts = false
    if (network.contracts == null) {
        if (filter.contracts == null) isValidContracts = true
    } else {
        const contracts = Object.values(network.contracts)

        if (contracts.length === 0) {
            if (filter.contracts == null) isValidContracts = true
        } else {
            for (let i = 0; i < contracts.length; i++)
                isValidContracts =
                    isValidContracts || validateContract(contracts[i], filter.contracts)
        }
    }

    const isValidTestnet = validateBoolean(network.testnet, filter.testnet)

    const isValidMainnetId = validateNumber(network.mainnetId, filter.mainnetId)

    if (filter.optional != null) {
        filter.optional?.includes('id') ? or.push(isValidId) : and.push(isValidId)
        filter.optional?.includes('name') ? or.push(isValidName) : and.push(isValidName)
        filter.optional?.includes('network') ? or.push(isValidNetwork) : and.push(isValidNetwork)
        filter.optional?.includes('nativeCurrency')
            ? or.push(isValidNativeCurrency)
            : and.push(isValidNativeCurrency)
        filter.optional?.includes('rpcNodes') ? or.push(isValidRpcNodes) : and.push(isValidRpcNodes)
        filter.optional?.includes('blockExplorers')
            ? or.push(isValidBlockExplorers)
            : and.push(isValidBlockExplorers)
        filter.optional?.includes('contracts')
            ? or.push(isValidContracts)
            : and.push(isValidContracts)
        filter.optional?.includes('testnet') ? or.push(isValidTestnet) : and.push(isValidTestnet)
        filter.optional?.includes('mainnetId')
            ? or.push(isValidMainnetId)
            : and.push(isValidMainnetId)
    } else {
        and.push(isValidId)
        and.push(isValidName)
        and.push(isValidNetwork)
        and.push(isValidNativeCurrency)
        and.push(isValidRpcNodes)
        and.push(isValidBlockExplorers)
        and.push(isValidContracts)
        and.push(isValidTestnet)
        and.push(isValidMainnetId)
    }

    const v = validateFinalValidations(and, or)

    if (filter.filterType != null) {
        if (filter.filterType === 'exclude') return !v
    }
    return v
}

export default validateNetwork
