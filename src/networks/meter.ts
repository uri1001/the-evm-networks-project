import { BlockExplorerStandard, BlockExplorerType, EndpointAuth, EndpointType } from '../enums'
import { type Network } from '../types'

import { meterProvider, pokt } from '../providers'

export const meter = {
    id: 82,
    name: 'Meter Mainnet',
    network: 'meter',
    infoUrl: 'https://www.meter.io',
    docsUrl: 'https://docs.meter.io/developer-documentation/introduction',
    eipUrl: 'https://github.com/ethereum-lists/chains/blob/master/_data/chains/eip155-82.json',
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
            http: ['https://rpc.meter.io:8545'],
            wss: ['wss://ws.meter.io:8546'],
            provider: meterProvider,
        },
        public: {
            rpcNode: 'public',
            type: EndpointType.Public,
            http: ['https://rpc.meter.io:8545'],
            wss: ['wss://ws.meter.io:8546'],
            provider: meterProvider,
        },
        default: {
            rpcNode: 'default',
            type: EndpointType.Public,
            http: ['https://rpc.meter.io:8545'],
            wss: ['wss://ws.meter.io:8546'],
            provider: meterProvider,
        },
    },
    blockExplorers: {
        meterScan: {
            name: 'Meter Scan',
            blockExplorer: 'meterScan',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://scan.meter.io',
        },
        default: {
            name: 'Meter Scan',
            blockExplorer: 'default',
            type: BlockExplorerType.Independent,
            standard: BlockExplorerStandard.EIP3091,
            browserUrl: 'https://scan.meter.io',
        },
    },
    testnet: false,
} as const satisfies Network
