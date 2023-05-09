import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { wanchainProvider } from '../providers'

export const wanchain = {
    id: 888,
    name: 'Wanchain',
    network: 'wanchain',
    infoUrl: 'https://www.wanchain.org',
    docsUrl: 'https://docs.wanchain.org/get-started/introduction',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-888.json',
    nativeCurrency: {
        name: 'Wancoin',
        symbol: 'WAN',
        uSymbol: 'aWAN',
        decimals: 18,
    },
    rpcNodes: {
        wanchain: {
            rpcNode: 'wanchain',
            type: EndpointType.Public,
            http: ['https://gwan-ssl.wandevs.org:56891', 'https://gwan2-ssl.wandevs.org'],
            provider: wanchainProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://gwan-ssl.wandevs.org:56891', 'https://gwan2-ssl.wandevs.org'],
            provider: wanchainProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://gwan-ssl.wandevs.org:56891', 'https://gwan2-ssl.wandevs.org'],
            provider: wanchainProvider,
        },
    },
    blockExplorers: {
        wanscan: {
            name: 'Wanchain Scan',
            blockExplorer: 'wanscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://wanscan.org',
        },
        default: {
            name: 'Wanchain Scan',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://wanscan.org',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB',
            deployBlock: 25312390,
            deployTxHash: '0xd0153e872cdf41cac915f02bdaca567a0a5c39981d978874f8167197c187d0b9',
        },
    },
    testnet: false,
} as const satisfies Network
