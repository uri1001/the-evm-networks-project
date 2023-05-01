import { type Contract } from '../../../types'
import { type ContractFilter } from '../../types'

import { validateFinalValidations, validateNumber, validateString } from './core'

//
// Contract Validation
//

const validateContract = (
    contract: Contract | undefined,
    filter: ContractFilter | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (contract == null) return false

    // validation

    const and: boolean[] = []
    const or: boolean[] = []

    const isValidName = validateString(contract.name, filter.name)
    const isValidContract = validateString(contract.contract, filter.contract)
    const isValidAddress = validateString(contract.address, filter.address)

    const isValidDeployBlock = validateNumber(contract.deployBlock, filter.deployBlock)

    const isValidDeployTxHash = validateString(contract.deployTxHash, filter.deployTxHash)

    if (filter.optional != null) {
        filter.optional?.includes('name') ? or.push(isValidName) : and.push(isValidName)
        filter.optional?.includes('contract') ? or.push(isValidContract) : and.push(isValidContract)
        filter.optional?.includes('address') ? or.push(isValidAddress) : and.push(isValidAddress)
        filter.optional?.includes('deployBlock')
            ? or.push(isValidDeployBlock)
            : and.push(isValidDeployBlock)
        filter.optional?.includes('deployTxHash')
            ? or.push(isValidDeployTxHash)
            : and.push(isValidDeployTxHash)
    } else {
        and.push(isValidName)
        and.push(isValidContract)
        and.push(isValidAddress)
        and.push(isValidDeployBlock)
        and.push(isValidDeployTxHash)
    }

    const v = validateFinalValidations(and, or)

    if (filter.filterType != null) {
        if (filter.filterType === 'exclude') return !v
    }
    return v
}

export default validateContract
