import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { ankr, harmonyProvider, onfinality, pokt } from '../providers'

export const harmonyOne = {
    id: 1666600000,
    name: 'Harmony One Mainnet Shard 0',
    network: 'harmony',
    infoUrl: 'https://www.harmony.one/',
    docsUrl: 'https://docs.harmony.one/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-1666600000.json',
    nativeCurrency: {
        name: 'Harmony',
        symbol: 'ONE',
        decimals: 18,
    },
    rpcNodes: {
        onfinality: {
            http: ['https://harmony.api.onfinality.io/public/'],
            provider: onfinality,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        ankr: {
            http: ['https://rpc.ankr.com/harmony/'],
            provider: ankr,
            dataPrivacy: RpcDataPrivacyType.PartialPrivacy,
        },
        pokt: {
            http: ['https://harmony-0-rpc.gateway.pokt.network/'],
            provider: pokt,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        harmonyProvider: {
            http: ['https://api.harmony.one/'],
            provider: harmonyProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://api.harmony.one/'],
            provider: harmonyProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://api.harmony.one/'],
            provider: harmonyProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        harmonyExplorer: {
            name: 'Harmony One Blockchain Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.harmony.one/',
            standard: BlockExplorerStandard.EIP3091,
        },
        default: {
            name: 'Harmony One Blockchain Explorer',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://explorer.harmony.one/',
            standard: BlockExplorerStandard.EIP3091,
        },
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 24185753,
        },
    },
    testnet: false,
} as const satisfies Network
