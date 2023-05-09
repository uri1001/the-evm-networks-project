import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { wanchainProvider } from '../providers'

export const wanchainTestnet = {
    id: 999,
    name: 'Wanchain Testnet',
    network: 'wanchainTestnet',
    infoUrl: 'https://www.wanchain.org',
    docsUrl: 'https://docs.wanchain.org/get-started/introduction',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-999.json',
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
            http: ['https://gwan-ssl.wandevs.org:46891'],
            provider: wanchainProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://gwan-ssl.wandevs.org:46891'],
            provider: wanchainProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://gwan-ssl.wandevs.org:46891'],
            provider: wanchainProvider,
        },
    },
    blockExplorers: {
        wanscan: {
            name: 'Wanchain Testnet Scan',
            blockExplorer: 'wanscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.wanscan.org',
        },
        default: {
            name: 'Wanchain Testnet Scan',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://testnet.wanscan.org',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0x11c89bF4496c39FB80535Ffb4c92715839CC5324',
            deployBlock: 24743448,
            deployTxHash: '0xc0f5b0c420c4811117c62c603359be3e97370bc1dcebe2a7de270b3822588364',
        },
    },
    testnet: true,
    mainnetId: 888,
} as const satisfies Network
