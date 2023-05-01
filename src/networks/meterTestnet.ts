import { BlockExplorerStandard, BlockExplorerType, EndpointAuth } from '../enums'
import { type Network } from '../types'

import { meterProvider, pokt } from '../providers'

export const meterTestnet = {
    id: 83,
    name: 'Meter Testnet',
    network: 'meterTestnet',
    infoUrl: 'https://www.meter.io',
    docsUrl: 'https://docs.meter.io/developer-documentation/introduction',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-83.json',
    nativeCurrency: {
        name: 'Meter',
        symbol: 'MTR',
        uSymbol: 'aMTR',
        decimals: 18,
    },
    rpcNodes: {
        pokt: {
            rpcNode: 'pokt',
            http: [`https://meter-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.PrivateKey}`],
            provider: pokt,
            authenticated: true,
        },
        meter: {
            rpcNode: 'meter',
            http: ['https://rpctest.meter.io'],
            provider: meterProvider,
            authenticated: false,
        },
        public: {
            rpcNode: 'public',
            http: ['https://rpctest.meter.io'],
            provider: meterProvider,
            authenticated: false,
        },
        default: {
            rpcNode: 'default',
            http: ['https://rpctest.meter.io'],
            provider: meterProvider,
            authenticated: false,
        },
    },
    blockExplorers: {
        meterScan: {
            name: 'Meter Testnet Scan',
            blockExplorer: 'meterScan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://scan-warringstakes.meter.io',
        },
        default: {
            name: 'Meter Testnet Scan',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://scan-warringstakes.meter.io',
        },
    },
    testnet: true,
    mainnetId: 82,
} as const satisfies Network
