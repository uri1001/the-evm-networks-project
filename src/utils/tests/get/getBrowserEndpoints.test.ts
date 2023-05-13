import { expect } from 'chai'

import { getBrowserEndpoints } from '../..'
import { type GetBrowserEndpointsArgs } from '../../get/getBrowserEndpoints'

describe('Get Block Explorer Browser Endpoints Function Test', () => {
    describe('Base Tests', () => {
        it('Should return all mainnet Browser endpoints', () => {
            const args: GetBrowserEndpointsArgs = {
                networkFilter: {
                    network: ['mainnet'],
                },
            }

            const expectedResult = ['https://blockscout.com/eth/mainnet', 'https://etherscan.io']

            const result = getBrowserEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })

        it('Should return all mainnet Browser endpoints for an address', () => {
            const args: GetBrowserEndpointsArgs = {
                type: 'address',
                typeArg: '0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
                networkFilter: {
                    network: ['mainnet'],
                },
            }

            const expectedResult = [
                'https://blockscout.com/eth/mainnet/address/0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
                'https://etherscan.io/address/0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da',
            ]

            const result = getBrowserEndpoints(args)

            expect(expectedResult).deep.equal(result)
        })
    })
})
