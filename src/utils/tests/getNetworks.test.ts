import { expect } from 'chai'
import getNetworks from '../get/getNetworks'
import { type NetworkFilter } from '../types'

describe('Get Networks Funtion Test', () => {
    describe('Base Tests', () => {
        it('Should return all networks (75 networks)', () => {
            const result = getNetworks()
            expect(result.length).to.equal(75)
        })

        it('Should return mainnet, goerli and sepolia networks', () => {
            const filter: NetworkFilter = { network: ['mainnet', 'goerli', 'sepolia'] }

            const result = getNetworks(filter)
            console.log(result)
            expect(result.length).to.equal(3)
            // CHECK RESULT CONTAINS NETWORKS WITH THE NETWORK PARAM THAT MATCHES THE FILTER
        })

        it('Should return all provider networks', () => {
            const filter: NetworkFilter = {
                rpcNodes: {
                    provider: {
                        provider: ['infura'],
                    },
                },
            }

            console.time('get-networks')
            const result = getNetworks(filter)
            console.timeEnd('get-networks')

            console.log(result)
            expect(result.length).to.equal(3)
            // CHECK RESULT CONTAINS NETWORKS WITH THE NETWORK PARAM THAT MATCHES THE FILTER
        })

        // it('Should return networks with authenticated HTTP from Infura or Alchemy, that have a known multicall contract and are testnets', () => {
        //     const filter = {
        //         require: [
        //             'rpcNodes.http',
        //             'rpcNodes.provider.provider',
        //             'rpcNodes.authenticated',
        //             'contracts',
        //             'testnet',
        //         ],
        //         rpcNodes: {
        //             http: true,
        //             provider: {
        //                 provider: ['infura', 'alchemy'],
        //             },
        //             authenticated: true,
        //         },
        //         contracts: ['multicall3'],
        //         testnet: true,
        //     }
        //     const result = getNetworks(filter)
        //     expect(result.length).to.equal(3)
        //     // CHECK ALL NETWORKS HAVE THE PARAMETERS EXPECTED
        // })
    })
})
