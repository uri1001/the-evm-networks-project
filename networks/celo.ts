import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { forno, infura, onerpc } from '../providers'

export const celo = {
    id: 42220,
    name: 'Celo',
    network: 'celo',
    infoUrl: 'https://docs.celo.org/',
    docsUrl: 'https://docs.celo.org/network',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-42220.json',
    nativeCurrency: {
        name: 'Celo',
        symbol: 'CELO',
        decimals: 18,
    },
    rpcNodes: {
        infura: {
            http: ['https://celo-mainnet.infura.io/v3/'],
            provider: infura,
            dataPrivacy: RpcDataPrivacyType.TBD,
        },
        onerpc: {
            http: ['https://1rpc.io/celo/'],
            provider: onerpc,
            dataPrivacy: RpcDataPrivacyType.Privacy,
        },
        forno: {
            http: ['https://forno.celo.org/'],
            wss: ['wss://forno.celo.org/ws/'],
            provider: forno,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://forno.celo.org/'],
            wss: ['wss://forno.celo.org/ws/'],
            provider: forno,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://forno.celo.org/'],
            wss: ['wss://forno.celo.org/ws/'],
            provider: forno,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        celoScan: {
            name: 'CeloScan',
            type: BlockExplorerType.Etherscan,
            browserUrl: 'https://celoscan.io/',
            apiUrl: 'https://api.celoscan.io/api/',
            docsUrl: 'https://celoscan.io/apis/',
            standard: BlockExplorerStandard.EIP3091,
        },
        celoExplorer: {
            name: 'Celo Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.celo.org/mainnet/',
            apiUrl: 'https://explorer.celo.org/mainnet/api/',
            docsUrl: 'https://explorer.celo.org/mainnet/api-docs/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Celo Explorer',
            type: BlockExplorerType.Blockscout,
            browserUrl: 'https://explorer.celo.org/mainnet/',
            apiUrl: 'https://explorer.celo.org/mainnet/api/',
            docsUrl: 'https://explorer.celo.org/mainnet/api-docs/',
            standard: BlockExplorerStandard.None,
        },
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 13112599,
        },
    },
    testnet: false,
} as const satisfies Network
