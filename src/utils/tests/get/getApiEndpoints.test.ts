import { expect } from 'chai'

import { getApiEndpoints } from '../..'
import { type GetApiEndpointsArgs } from '../../get/getApiEndpoints'

const authConfig = {
    mainnet: {
        blockscout: '<mainnet-blockscout-api-key>',
        etherscan: '<mainnet-etherscan-api-key>',
        default: '<mainnet-etherscan-api-key>',
    },
    polygonZkEvm: {
        polygonScan: '<polygonzkevm-etherscan-api-key>',
    },
    cronosTestnet: {
        default: '<cronos-blockscout-api-key>',
    },
}

describe('Get Block Explorer API Endpoints Function Test', () => {
    describe('Base Tests', () => {
        it('Should return all mainnet API endpoints', () => {
            const args: GetApiEndpointsArgs = {
                authConfig,
                networkFilter: {
                    network: ['mainnet'],
                },
            }

            const expectedResult = [
                'https://blockscout.com/eth/mainnet/api',
                'https://api.etherscan.io/api',
            ]

            const result = getApiEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })

        it('Should return all mainnet API endpoints to get source code with auth config', () => {
            const args: GetApiEndpointsArgs = {
                action: 'getsourcecode',
                actionArg: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
                authConfig,
                networkFilter: {
                    network: ['mainnet'],
                },
            }

            const expectedResult = [
                'https://blockscout.com/eth/mainnet/api?module=contract&action=getsourcecode&address=0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da&apikey=<mainnet-blockscout-api-key>',
                'https://api.etherscan.io/api?module=contract&action=getsourcecode&address=0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da&apikey=<mainnet-etherscan-api-key>',
            ]

            const result = getApiEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })

        it('Should return all polygon API endpoints to get source code with no auth config', () => {
            const args: GetApiEndpointsArgs = {
                action: 'getsourcecode',
                actionArg: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
                authConfig,
                networkFilter: {
                    network: ['polygon'],
                },
            }

            const expectedResult = [
                'https://api.polygonscan.com/api?module=contract&action=getsourcecode&address=0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da&apikey=<auth-key>',
            ]

            const result = getApiEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })

        it('Should return default from cronos API endpoints to get cronos price with auth & strict mode', () => {
            const args: GetApiEndpointsArgs = {
                action: 'ethprice',
                authConfig,
                authStrict: true,
                networkFilter: {
                    network: ['cronosTestnet'],
                },
            }

            const expectedResult = [
                'https://api-testnet.cronoscan.com/api?module=stats&action=ethprice&apikey=<cronos-blockscout-api-key>',
            ]

            const result = getApiEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })

        it('Should return default mainnet API endpoint to get native currency price with auth config', () => {
            const args: GetApiEndpointsArgs = {
                action: 'getsourcecode',
                actionArg: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
                endpointsFilter: {
                    blockExplorer: ['default'],
                },
                authConfig,
                networkFilter: {
                    network: ['mainnet'],
                },
            }

            const expectedResult = [
                'https://api.etherscan.io/api?module=contract&action=getsourcecode&address=0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da&apikey=<mainnet-etherscan-api-key>',
            ]

            const result = getApiEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })

        it('Should return default mainnet API endpoint to get native currency price with auth config - no case sensitive', () => {
            const args: GetApiEndpointsArgs = {
                action: 'getsourcecode',
                actionArg: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
                endpointsFilter: {
                    blockExplorer: ['Default'],
                },
                authConfig,
                networkFilter: {
                    network: ['Mainnet'],
                },
            }

            const expectedResult = [
                'https://api.etherscan.io/api?module=contract&action=getsourcecode&address=0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da&apikey=<mainnet-etherscan-api-key>',
            ]

            const result = getApiEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })
    })
})
