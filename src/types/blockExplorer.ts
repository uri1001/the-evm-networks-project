import { type BlockExplorerStandard, type BlockExplorerType } from '../enums'

interface BlockExplorer {
    name: string
    blockExplorer: string
    type: BlockExplorerType
    standard: BlockExplorerStandard
    browserUrl: string
    apiUrl?: string
    docsUrl?: string
}

export default BlockExplorer
