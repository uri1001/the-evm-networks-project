import { BlockExplorerStandard, BlockExplorerType, RpcDataPrivacyType } from '../utils/enums'
import { type Network } from '../utils/interfaces'

import { filecoinProvider } from '../providers'

export const filecoinCalibration = {
    id: 314159,
    name: 'Filecoin Calibration',
    network: 'filecoin-calibration',
    infoUrl: 'https://filecoin.io/',
    docsUrl: 'https://docs.filecoin.io/',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-314159.json',
    nativeCurrency: {
        name: 'Testnet Filecoin',
        symbol: 'tFIL',
        decimals: 18,
    },
    rpcNodes: {
        filecoin: {
            http: ['https://api.calibration.node.glif.io/rpc/v1/'],
            provider: filecoinProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        public: {
            http: ['https://api.calibration.node.glif.io/rpc/v1/'],
            provider: filecoinProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
        default: {
            http: ['https://api.calibration.node.glif.io/rpc/v1/'],
            provider: filecoinProvider,
            dataPrivacy: RpcDataPrivacyType.NoInfo,
        },
    },
    blockExplorers: {
        filscan: {
            name: 'Calibration Filscan',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://calibration.filscan.io/',
            standard: BlockExplorerStandard.None,
        },
        filscout: {
            name: 'Calibration Filscout',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://calibration.filscout.com/',
            standard: BlockExplorerStandard.None,
        },
        filfox: {
            name: 'Calibration Filfox',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://calibration.filfox.info/',
            standard: BlockExplorerStandard.None,
        },
        default: {
            name: 'Calibration Filfox',
            type: BlockExplorerType.Independent,
            browserUrl: 'https://calibration.filfox.info/',
            standard: BlockExplorerStandard.None,
        },
    },
    testnet: true,
} as const satisfies Network
