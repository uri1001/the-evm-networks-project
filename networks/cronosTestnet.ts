import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { cronosProvider } from '../providers'

export const cronosTestnet = {
    id: 338,
    name: 'Cronos Testnet',
    network: 'cronos-testnet',
    infoUrl: 'https://cronos.org/',
    docsUrl: 'https://docs.cronos.org/getting-started/readme/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-338.json',
    nativeCurrency: {
        name: 'Cronos',
        symbol: 'TCRO',
        decimals: 18,
    },
    rpcNodes: {
        cronos: {
            http: ['https://evm-t3.cronos.org/'],
            provider: cronosProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://evm-t3.cronos.org/'],
            provider: cronosProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://evm-t3.cronos.org/'],
            provider: cronosProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        cronosExplorer: {
            name: 'Cronos Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://cronos.org/explorer/',
            apiUrl: 'https://cronos.org/explorer/api/',
            docsUrl: 'https://cronos.org/explorer/api-docs/',
            standard: BlockExplorerStandard.TBD,
        },
        cronosScan: {
            name: 'CronosScan Testnet',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.cronoscan.com/',
            apiUrl: 'https://api-testnet.cronoscan.com/api/',
            docsUrl: 'https://testnet.cronoscan.com/apis',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'CronosScan Testnet',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://testnet.cronoscan.com/',
            apiUrl: 'https://api-testnet.cronoscan.com/api/',
            docsUrl: 'https://testnet.cronoscan.com/apis',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: true,
} as const satisfies Network
