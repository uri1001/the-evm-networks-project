import { expect } from 'chai'

import { type NetworkFilter } from '../../types'

import { EndpointType, ProviderPrivacyLevel } from '../../../enums'

import getNetworks from '../../get/getNetworks'
import getRpcEndpoints, { type GetRpcEndpointsArgs } from '../../get/getRpcEndpoints'

import { rpcProviderAuthTemplate as authConfig } from '../../types/auth/templates'

describe('Get RPC Endpoints Function Test', () => {
    describe('Base Tests', () => {
        it('Should return all mainnet public endpoints', () => {
            const args: GetRpcEndpointsArgs = {
                networkFilter: {
                    network: ['mainnet'],
                },
            }

            const expectedResult = [
                'https://eth-mainnet.g.alchemy.com/v2/<auth-key>',
                'wss://eth-mainnet.g.alchemy.com/v2/<auth-key>',
                'https://mainnet.infura.io/v3/<auth-key>',
                'wss://mainnet.infura.io/ws/v3/<auth-key>',
                'https://g.w.lavanet.xyz:443/gateway/eth/rpc-http/<auth-key>',
                'wss://g.w.lavanet.xyz:443/gateway/eth/rpc/<auth-key>',
                'https://eth-mainnet.gateway.pokt.network/v1/lb/<auth-key>',
                'https://eth-archival.gateway.pokt.network/v1/lb/<auth-key>',
                'https://eth-rpc.gateway.pokt.network',
                'https://eth-archival-rpc.gateway.pokt.network',
                'https://ethereum.rpc.thirdweb.com',
                'https://eth-mainnet.blastapi.io/<auth-key>',
                'wss://eth-mainnet.blastapi.io/<auth-key>',
                'https://eth-mainnet.public.blastapi.io',
                'wss://eth-mainnet.public.blastapi.io',
                'https://ethereum.blockpi.network/v1/rpc/<auth-key>',
                'wss://ethereum.blockpi.network/v1/ws/<auth-key>',
                'https://ethereum.blockpi.network/v1/rpc/public',
                'https://rpc.ankr.com/eth/<auth-key>',
                'https://rpc.ankr.com/eth',
                'https://eth.api.onfinality.io/public',
                'https://cloudflare-eth.com',
                'https://1rpc.io/eth',
                'https://endpoints.omniatech.io/v1/eth/mainnet/<auth-key>',
                'wss://eth.llamarpc.com',
                'https://endpoints.omniatech.io/v1/eth/mainnet/public',
                'https://ethereum.publicnode.com',
                'https://rpc.flashbots.net',
                'https://eth.llamarpc.com',
            ]

            const result = getRpcEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })

        it('Should return all mainnet endpoints', () => {
            const args: GetRpcEndpointsArgs = {
                authConfig,
                networkFilter: {
                    network: ['mainnet'],
                },
            }

            const expectedResult = [
                'https://eth-mainnet.g.alchemy.com/v2/<alchemy-rpc-api-key>',
                'wss://eth-mainnet.g.alchemy.com/v2/<alchemy-rpc-api-key>',
                'https://mainnet.infura.io/v3/<infura-rpc-api-key>',
                'wss://mainnet.infura.io/ws/v3/<infura-rpc-api-key>',
                'https://g.w.lavanet.xyz:443/gateway/eth/rpc-http/<lava-rpc-api-key>',
                'wss://g.w.lavanet.xyz:443/gateway/eth/rpc/<lava-rpc-api-key>',
                'https://eth-mainnet.gateway.pokt.network/v1/lb/<pokt-rpc-api-key>',
                'https://eth-archival.gateway.pokt.network/v1/lb/<pokt-rpc-api-key>',
                'https://eth-rpc.gateway.pokt.network',
                'https://eth-archival-rpc.gateway.pokt.network',
                'https://ethereum.rpc.thirdweb.com',
                'https://eth-mainnet.blastapi.io/<blast-rpc-api-key>',
                'wss://eth-mainnet.blastapi.io/<blast-rpc-api-key>',
                'https://eth-mainnet.public.blastapi.io',
                'wss://eth-mainnet.public.blastapi.io',
                'https://ethereum.blockpi.network/v1/rpc/<blockpi-mainnet-rpc-api-key>',
                'wss://ethereum.blockpi.network/v1/ws/<blockpi-mainnet-rpc-api-key>',
                'https://ethereum.blockpi.network/v1/rpc/public',
                'https://rpc.ankr.com/eth/<ankr-rpc-api-key>',
                'https://rpc.ankr.com/eth',
                'https://eth.api.onfinality.io/public',
                'https://cloudflare-eth.com',
                'https://1rpc.io/eth',
                'https://endpoints.omniatech.io/v1/eth/mainnet/<omnia-mainnet-rpc-api-key>',
                'wss://ethereum.blockpi.network/v1/ws/<omnia-mainnet-rpc-api-key>',
                'https://endpoints.omniatech.io/v1/eth/mainnet/public',
                'https://ethereum.publicnode.com',
                'https://rpc.flashbots.net',
                'https://eth.llamarpc.com',
                'wss://eth.llamarpc.com',
            ]

            const result = getRpcEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })

        it('Should return goerli and sepolia endpoints networks', () => {
            const filter: NetworkFilter = { network: ['polygonZkEvm', 'polygonZkEvmTestnet'] }

            const result = getNetworks(filter)
            expect(result.length).to.equal(2)

            const args: GetRpcEndpointsArgs = {
                authConfig,
                networks: result,
            }

            const expectedResult = [
                'https://polygonzkevm-mainnet.g.alchemy.com/v2/<alchemy-rpc-api-key>',
                'wss://polygonzkevm-mainnet.g.alchemy.com/v2/<alchemy-rpc-api-key>',
                'https://polygon-zkevm-mainnet.gateway.pokt.network/v1/lb/<pokt-rpc-api-key>',
                'https://zkevm-polygon-mainnet-rpc.gateway.pokt.network',
                'https://rpc.ankr.com/polygon_zkevm/<ankr-rpc-api-key>',
                'https://rpc.ankr.com/polygon_zkevm',
                'https://1rpc.io/zkevm',
                'https://zkevm-rpc.com',
                'https://rpc.ankr.com/polygon_zkevm_testnet',
                'https://rpc.public.zkevm-test.net',
                'https://polygonzkevm-testnet.g.alchemy.com/v2/<alchemy-rpc-api-key>',
                'wss://polygonzkevm-testnet.g.alchemy.com/v2/<alchemy-rpc-api-key>',
                'https://rpc.ankr.com/polygon_zkevm_testnet/<ankr-rpc-api-key>',
            ]

            const resultRpc = getRpcEndpoints(args)

            expect(expectedResult).deep.equal(resultRpc)
        })

        it('Should return mumbai http authenticated endpoints', () => {
            const args: GetRpcEndpointsArgs = {
                endpointsFilter: {
                    type: [EndpointType.Authenticated],
                    http: true,
                    wss: false,
                },
                authConfig,
                networkFilter: {
                    network: ['polygonMumbai'],
                },
            }

            const result = getRpcEndpoints(args)

            const expectedResult = [
                'https://polygon-mumbai.g.alchemy.com/v2/<alchemy-rpc-api-key>',
                'https://polygon-mumbai.infura.io/v3/<infura-rpc-api-key>',
                'https://polygon-mumbai.gateway.pokt.network/v1/lb/<pokt-rpc-api-key>',
                'https://g.w.lavanet.xyz:443/gateway/polygon1t/rpc-http/<lava-rpc-api-key>',
                'https://polygon-testnet.blastapi.io/<blast-rpc-api-key>',
                'https://polygon-mumbai.blockpi.network/v1/rpc/<blockpi-polygon-mumbai-rpc-api-key>',
                'https://rpc.ankr.com/polygon_mumbai/<ankr-rpc-api-key>',
                'https://endpoints.omniatech.io/v1/matic/mumbai/<omnia-polygon-mumbai-rpc-api-key>',
            ]

            expect(expectedResult).deep.equal(result)
        })

        it('Should return mainnet http endpoints with privacy', () => {
            const args: GetRpcEndpointsArgs = {
                endpointsFilter: {
                    http: true,
                    wss: false,
                    provider: {
                        privacyLevel: [ProviderPrivacyLevel.Privacy],
                    },
                },
                authConfig,
                networkFilter: {
                    network: ['mainnet'],
                },
            }

            const expectedResult = [
                'https://eth-mainnet.gateway.pokt.network/v1/lb/<pokt-rpc-api-key>',
                'https://eth-archival.gateway.pokt.network/v1/lb/<pokt-rpc-api-key>',
                'https://eth-rpc.gateway.pokt.network',
                'https://eth-archival-rpc.gateway.pokt.network',
                'https://1rpc.io/eth',
                'https://endpoints.omniatech.io/v1/eth/mainnet/<omnia-mainnet-rpc-api-key>',
                'https://endpoints.omniatech.io/v1/eth/mainnet/public',
                'https://ethereum.publicnode.com',
                'https://rpc.flashbots.net',
                'https://eth.llamarpc.com',
            ]

            const result = getRpcEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })

        it('Should return all local machine endpoints', () => {
            const args: GetRpcEndpointsArgs = {
                endpointsFilter: {
                    type: [EndpointType.Local],
                    http: true,
                    wss: false,
                    provider: {
                        privacyLevel: [ProviderPrivacyLevel.Privacy],
                    },
                },
            }

            const expectedResult = ['http://127.0.0.1:8545']

            const result = getRpcEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })

        it('Should return avalanche http default endpoints', () => {
            const args: GetRpcEndpointsArgs = {
                endpointsFilter: {
                    rpcNode: ['default'],
                    http: true,
                    wss: false,
                    provider: {
                        privacyLevel: [ProviderPrivacyLevel.Privacy],
                    },
                },
            }

            const expectedResult = [
                'https://evmos-evm.publicnode.com',
                'http://127.0.0.1:8545',
                'https://rpc.ankr.com/eth_goerli',
                'https://eth.llamarpc.com',
            ]

            const result = getRpcEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })
    })
})
