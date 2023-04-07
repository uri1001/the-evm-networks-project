import { type BlockExplorerStandard, type BlockExplorerType } from '../enums'

interface BlockExplorer {
    name: string
    type: BlockExplorerType
    browserUrl: string
    apiUrl?: string
    docsUrl?: string
    standard: BlockExplorerStandard
}

export default BlockExplorer
