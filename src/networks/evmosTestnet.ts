import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { blockdaemon, lava, nodestake } from '../providers'

export const evmosTestnet = {
    id: 9000,
    name: 'Evmos Testnet',
    network: 'evmosTestnet',
    infoUrl: 'https://evmos.org/',
    docsUrl: 'https://docs.evmos.org/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-9000.json',
    nativeCurrency: {
        name: 'Test Evmos',
        symbol: 'tEVMOS',
        uSymbol: 'atEVMOS',
        decimals: 18,
    },
    rpcNodes: {
        lava: {
            rpcNode: 'lava',
            type: EndpointType.Authenticated,
            http: [`https://g.w.lavanet.xyz:443/gateway/evmost/json-rpc-http/${EndpointAuth.Key}`],
            wss: [`wss://g.w.lavanet.xyz:443/gateway/evmost/json-rpc/${EndpointAuth.Key}`],
            provider: lava,
        },
        nodestake: {
            type: EndpointType.Public,
            rpcNode: 'nodestake',
            http: ['https://jsonrpc-t.evmos.nodestake.top/'],
            provider: nodestake,
        },
        blockdaemon: {
            rpcNode: 'blockdaemon',
            type: EndpointType.Public,
            http: ['https://eth.bd.evmos.dev:8545'],
            wss: ['wss://eth.bd.evmos.dev:8546'],
            provider: blockdaemon,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://eth.bd.evmos.dev:8545'],
            wss: ['wss://eth.bd.evmos.dev:8546'],
            provider: blockdaemon,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://eth.bd.evmos.dev:8545'],
            wss: ['wss://eth.bd.evmos.dev:8546'],
            provider: blockdaemon,
        },
    },
    blockExplorers: {
        mintscan: {
            name: 'Evmos Testnet Cosmos Explorer',
            blockExplorer: 'mintscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://testnet.mintscan.io/evmos-testnet',
        },
        evmosExplorer: {
            name: 'Evmos Testnet Block Explorer',
            blockExplorer: 'evmosExplorer',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://evm.evmos.dev',
            apiUrl: 'https://localhost:4000/api',
            docsUrl: 'https://evm.evmos.dev/api-docs',
        },
        default: {
            name: 'Evmos Testnet Block Explorer',
            blockExplorer: 'default',
            type: BlockExplorerType.Blockscout,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://evm.evmos.dev',
            apiUrl: 'https://localhost:4000/api',
            docsUrl: 'https://evm.evmos.dev/api-docs',
        },
    },
    testnet: true,
    mainnetId: 9001,
} as const satisfies Network
