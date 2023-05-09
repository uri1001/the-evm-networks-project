import { BlockExplorerStandard, BlockExplorerType, EndpointType } from '../enums'
import { type Network } from '../types'

import { filecoinProvider } from '../providers'

export const filecoinCalibration = {
    id: 314159,
    name: 'Filecoin Calibration',
    network: 'filecoinCalibration',
    infoUrl: 'https://filecoin.io',
    docsUrl: 'https://docs.filecoin.io',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-314159.json',
    nativeCurrency: {
        name: 'Testnet Filecoin',
        symbol: 'tFIL',
        uSymbol: 'atFIL',
        decimals: 18,
    },
    rpcNodes: {
        filecoin: {
            rpcNode: 'filecoin',
            type: EndpointType.Public,
            http: ['https://api.calibration.node.glif.io/rpc/v1'],
            provider: filecoinProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://api.calibration.node.glif.io/rpc/v1'],
            provider: filecoinProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://api.calibration.node.glif.io/rpc/v1'],
            provider: filecoinProvider,
        },
    },
    blockExplorers: {
        filscan: {
            name: 'Calibration Filscan',
            blockExplorer: 'filscan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://calibration.filscan.io',
        },
        filscout: {
            name: 'Calibration Filscout',
            blockExplorer: 'filscout',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://calibration.filscout.com',
        },
        filfox: {
            name: 'Calibration Filfox',
            blockExplorer: 'filfox',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://calibration.filfox.info',
        },
        default: {
            name: 'Calibration Filfox',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.None,
            browserUrl: 'https://calibration.filfox.info',
        },
    },
    testnet: true,
    mainnetId: 314,
} as const satisfies Network
