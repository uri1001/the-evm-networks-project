import { type BlockExplorer } from '../../../types'
import { type BlockExplorerFilter } from '../../types'

import {
    validateBlockExplorerStandard,
    validateBlockExplorerType,
    validateFinalValidations,
    validateHttpEndpoints,
    validateString,
} from './core'

//
// Block Explorer Validation
//

const validateBlockExplorer = (
    blockExplorer: BlockExplorer | undefined,
    filter: BlockExplorerFilter | undefined,
): boolean => {
    // pre-validation

    // true - no filter set does not apply validation, always accepted
    if (filter == null) return true

    // false - no parameter to check does not apply validation, always rejected
    if (blockExplorer == null) return false

    // validation

    const and: boolean[] = []
    const or: boolean[] = []

    const isValidName: boolean = validateString(blockExplorer.name, filter.name)
    const isValidBlockExplorer: boolean = validateString(blockExplorer.blockExplorer, filter.blockExplorer)

    const isValidType: boolean = validateBlockExplorerType(blockExplorer.type, filter.type)
    const isValidStandard: boolean = validateBlockExplorerStandard(blockExplorer.standard, filter.standard)

    const isValidBrowserUrl: boolean = validateHttpEndpoints([blockExplorer.browserUrl], filter.browserUrl)
    const isValidApiUrl: boolean = validateHttpEndpoints(
        blockExplorer.apiUrl != null ? [blockExplorer.apiUrl] : undefined,
        filter.apiUrl,
    )
    const isValidDocsUrl: boolean = validateHttpEndpoints(
        blockExplorer.docsUrl != null ? [blockExplorer.docsUrl] : undefined,
        filter.docsUrl,
    )

    if (filter.optional != null) {
        filter.optional?.includes('name') ? or.push(isValidName) : and.push(isValidName)
        filter.optional?.includes('blockExplorer')
            ? or.push(isValidBlockExplorer)
            : and.push(isValidBlockExplorer)
        filter.optional?.includes('type') ? or.push(isValidType) : and.push(isValidType)
        filter.optional?.includes('standard') ? or.push(isValidStandard) : and.push(isValidStandard)
        filter.optional?.includes('browserUrl')
            ? or.push(isValidBrowserUrl)
            : and.push(isValidBrowserUrl)
        filter.optional?.includes('apiUrl') ? or.push(isValidApiUrl) : and.push(isValidApiUrl)
        filter.optional?.includes('docsUrl') ? or.push(isValidDocsUrl) : and.push(isValidDocsUrl)
    } else {
        and.push(isValidName)
        and.push(isValidBlockExplorer)
        and.push(isValidType)
        and.push(isValidStandard)
        and.push(isValidBrowserUrl)
        and.push(isValidApiUrl)
        and.push(isValidDocsUrl)
    }

    const v: boolean = validateFinalValidations(and, or)

    if (filter.filterType != null) 
        if (filter.filterType === 'exclude') return !v
    
    return v
}

export default validateBlockExplorer
