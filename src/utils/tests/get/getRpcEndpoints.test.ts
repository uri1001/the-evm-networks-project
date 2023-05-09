import { expect } from 'chai'
import getNetworks from '../../get/getNetworks'
import getRpcEndpoints from '../../get/getRpcEndpoints'
import { type NetworkFilter } from '../../types'

const numNetworks = 95

describe('Get RPC Endpoints Function Test', () => {
    describe('Base Tests', () => {
        it('Should return all mainnet public endpoints', () => {
            const args = {
                networkFilter: {
                    network: ['mainnet'],
                },
            }

            const result = getRpcEndpoints(args)
            console.log(`\n----------------`)
            console.log(result)
            console.log(`----------------\n`)
            expect(result.length).to.equal(numNetworks)
        })

        it('Should return all mainnet endpoints', () => {
            const args = {
                authConfig: [
                    {
                        provider: 'alchemy',
                        key: '4LCH3MY-K3Y',
                    },
                    {
                        provider: 'infura',
                        key: '1NFUR4-K3Y',
                    },
                    {
                        provider: 'lava',
                        key: 'L4V4-K3Y',
                    },
                    {
                        provider: 'pokt',
                        key: 'P0KT-K3Y',
                    },
                    {
                        provider: 'ankr',
                        key: '4NKR-K3Y',
                    },
                    {
                        provider: 'blast',
                        key: 'BL4ST-K3Y',
                    },
                    {
                        provider: 'blockpi',
                        key: 'BL0CKP1-M4INN3T-K3Y',
                        network: 1,
                    },
                    {
                        provider: 'blockpi',
                        key: 'BL0CKP1-G03RL1-K3Y',
                        network: 'goerli',
                    },
                    {
                        provider: 'blockpi',
                        key: 'BL0CKP1-S3P0L14-K3Y',
                        network: 'sepolia',
                    },
                    {
                        provider: 'blockpi',
                        key: 'BL0CKP1-MUMB41-K3Y',
                        network: '80001',
                    },
                    {
                        provider: 'omnia',
                        key: '0MN14-K3Y',
                    },
                ],
                networkFilter: {
                    network: ['mainnet'],
                },
            }

            const result = getRpcEndpoints(args)
            console.log(`\n----------------3`)
            console.log(result)
            console.log(`----------------3\n`)
            expect(result.length).to.equal(numNetworks)
        })

        it('Should return goerli and sepolia endpoints networks', () => {
            const filter: NetworkFilter = { network: ['goerli', 'sepolia'] }

            const result = getNetworks(filter)
            expect(result.length).to.equal(2)

            const args = {
                authConfig: [
                    {
                        provider: 'alchemy',
                        key: '4LCH3MY-K3Y',
                    },
                    {
                        provider: 'infura',
                        key: '1NFUR4-K3Y',
                    },
                    {
                        provider: 'lava',
                        key: 'L4V4-K3Y',
                    },
                    {
                        provider: 'pokt',
                        key: 'P0KT-K3Y',
                    },
                    {
                        provider: 'ankr',
                        key: '4NKR-K3Y',
                    },
                    {
                        provider: 'blast',
                        key: 'BL4ST-K3Y',
                    },
                    {
                        provider: 'blockpi',
                        key: 'BL0CKP1-M4INN3T-K3Y',
                        network: 1,
                    },
                    {
                        provider: 'blockpi',
                        key: 'BL0CKP1-G03RL1-K3Y',
                        network: 'goerli',
                    },
                    {
                        provider: 'blockpi',
                        key: 'BL0CKP1-S3P0L14-K3Y',
                        network: 'sepolia',
                    },
                    {
                        provider: 'blockpi',
                        key: 'BL0CKP1-MUMB41-K3Y',
                        network: '80001',
                    },
                    {
                        provider: 'omnia',
                        key: '0MN14-K3Y',
                    },
                ],
                networks: result,
            }

            const resultRpc = getRpcEndpoints(args)
            console.log(`\n----------------9`)
            console.log(resultRpc)
            console.log(`----------------9\n`)
            expect(resultRpc.length).to.equal(numNetworks)
        })
    })
})
