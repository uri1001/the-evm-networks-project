import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { nexiProvider } from '../providers'

export const nexi = {
    id: 4242,
    name: 'Nexi Mainnet',
    network: 'nexi',
    infoUrl: 'https://www.nexi.technology',
    docsUrl: 'https://nexi.technology/development',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-4242.json',
    nativeCurrency: {
        name: 'Nexi',
        symbol: 'NEXI',
        uSymbol: 'aNEXI',
        decimals: 18,
    },
    rpcNodes: {
        nexi: {
            rpcNode: 'nexi',
            type: EndpointType.Public,
            http: ['https://rpc.chain.nexi.technology', 'https://chain.nexi.evmnode.online'],
            provider: nexiProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.chain.nexi.technology', 'https://chain.nexi.evmnode.online'],
            provider: nexiProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.chain.nexi.technology', 'https://chain.nexi.evmnode.online'],
            provider: nexiProvider,
        },
    },
    blockExplorers: {
        nexiscan: {
            name: 'Nexi Scan',
            blockExplorer: 'nexiscan',
            type: BlockExplorerType.Null,
            standard: BlockExplorerStandard.Null,
            browserUrl: 'https://www.nexiscan.com',
        },
        default: {
            name: 'Nexi Scan',
            blockExplorer: 'default',
            type: BlockExplorerType.Null,
            standard: BlockExplorerStandard.Null,
            browserUrl: 'https://www.nexiscan.com',
        },
    },
    contracts: {
        multicall3: {
            name: 'Multicall V3',
            contract: 'multicall3',
            address: '0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E',
            deployBlock: 25770160,
            deployTxHash: '',
        },
    },
    testnet: false,
} as const satisfies Network
