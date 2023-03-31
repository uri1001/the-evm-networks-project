import BlockExplorer from './blockExplorer'
import Contract from './contract'
import NativeCurrency from './nativeCurrency'
import RpcNode from './rpcNode'

interface Network {
    id: number
    name: string
    network: string
    infoUrl: string
    docsUrl: string
    eipUrl: string
    nativeCurrency: NativeCurrency
    rpcNodes: {
        [key: string]: RpcNode
        public: RpcNode
        default: RpcNode
    }
    blockExplorers?: {
        [key: string]: BlockExplorer
        default: BlockExplorer
    }
    contracts?: {
        ensRegistry?: Contract
        ensUniversalResolver?: Contract
        multicall3?: Contract
    }
    testnet: boolean
}

export default Network
