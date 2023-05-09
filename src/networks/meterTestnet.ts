import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
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
            type: EndpointType.Authenticated,
            http: [`https://meter-mainnet.gateway.pokt.network/v1/lb/${EndpointAuth.Key}`],
            provider: pokt,
        },
        meter: {
            rpcNode: 'meter',
            type: EndpointType.Public,
            http: ['https://rpctest.meter.io'],
            provider: meterProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpctest.meter.io'],
            provider: meterProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpctest.meter.io'],
            provider: meterProvider,
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
