import { expect } from 'chai'

import { validateHttpEndpoints, validateWssEndpoints } from '../../../../tools/validations/core'

describe('Endpoint Validations Test', () => {
    //
    // HTTP Tests
    //
    describe('Validate HTTP Endpoints Test', () => {
        // pre-validation
        describe('pre-validation', () => {
            it('Should return true if filter is undefined', () => {
                let result = validateHttpEndpoints(['https://eth.llamarpc.com/'], undefined)
                expect(result).to.equal(true)

                result = validateHttpEndpoints(undefined, undefined)
                expect(result).to.equal(true)
            })

            it('Should return false if filter is active and param undefined', () => {
                const result = validateHttpEndpoints(undefined, true)
                expect(result).to.equal(false)
            })

            it('Should return true if filter is inactive and param undefined', () => {
                const result = validateHttpEndpoints(undefined, false)
                expect(result).to.equal(true)
            })

            it('Should return false if filter is active and param is empty', () => {
                const result = validateHttpEndpoints([], true)
                expect(result).to.equal(false)
            })

            it('Should return true if filter is inactive and param undefined', () => {
                const result = validateHttpEndpoints([], false)
                expect(result).to.equal(true)
            })
        })

        // validation
        describe('validation', () => {
            it('Should return true if all endpoints have a valid HTTP format and filter is active', () => {
                let result = validateHttpEndpoints(
                    [
                        'https://rpc-mainnet-algorand-rollup.a1.milkomeda.com/',
                        'https://eth.llamarpc.com/',
                        'http://test.io',
                    ],
                    true,
                )
                expect(result).to.equal(true)

                result = validateHttpEndpoints(['http://sexy.t', 'http://test.io'], true)
                expect(result).to.equal(true)
            })

            it('Should return false if at least one endpoint does not have a valid HTTP format and filter is active', () => {
                let result = validateHttpEndpoints(
                    ['https://', 'https://eth.llamarpc.com/', 'http://test.io'],
                    true,
                )
                expect(result).to.equal(false)

                result = validateHttpEndpoints(['http://sexy.t', 'www.test.io'], true)
                expect(result).to.equal(false)

                result = validateHttpEndpoints(['wss://eth.llamarpc.com/'], true)
                expect(result).to.equal(false)

                result = validateHttpEndpoints([''], true)
                expect(result).to.equal(false)
            })

            it('Should return true if at least one endpoint does not have a valid HTTP format and filter is inactive', () => {
                let result = validateHttpEndpoints(
                    ['https://', 'https://eth.llamarpc.com/', 'http://test.io'],
                    false,
                )
                expect(result).to.equal(true)

                result = validateHttpEndpoints(['http://sexy.t', 'www.test.io'], false)
                expect(result).to.equal(true)

                result = validateHttpEndpoints([''], false)
                expect(result).to.equal(true)
            })

            it('Should return false if all endpoints have a valid HTTP format and filter is inactive', () => {
                let result = validateHttpEndpoints(
                    [
                        'https://rpc-mainnet-algorand-rollup.a1.milkomeda.com/',
                        'https://eth.llamarpc.com/',
                        'http://test.io',
                    ],
                    false,
                )
                expect(result).to.equal(false)

                result = validateHttpEndpoints(['http://sexy.t', 'http://test.io'], false)
                expect(result).to.equal(false)
            })
        })
    })

    //
    // WSS Tests
    //
    describe('Validate WSS Endpoints Test', () => {
        // pre-validation
        describe('pre-validation', () => {
            it('Should return true if filter is undefined', () => {
                let result = validateWssEndpoints(['wss://eth.llamarpc.com/'], undefined)
                expect(result).to.equal(true)

                result = validateWssEndpoints(undefined, undefined)
                expect(result).to.equal(true)
            })

            it('Should return false if filter is active and param undefined', () => {
                const result = validateWssEndpoints(undefined, true)
                expect(result).to.equal(false)
            })

            it('Should return true if filter is inactive and param undefined', () => {
                const result = validateWssEndpoints(undefined, false)
                expect(result).to.equal(true)
            })

            it('Should return false if filter is active and param is empty', () => {
                const result = validateWssEndpoints([], true)
                expect(result).to.equal(false)
            })

            it('Should return true if filter is inactive and param undefined', () => {
                const result = validateWssEndpoints([], false)
                expect(result).to.equal(true)
            })
        })

        // validation
        describe('validation', () => {
            it('Should return true if all endpoints have a valid WSS format and filter is active', () => {
                let result = validateWssEndpoints(
                    ['wss://eth.llamarpc.com/', 'wss://mainnet.infura.io/ws/v3/', 'wss://test.io'],
                    true,
                )
                expect(result).to.equal(true)

                result = validateWssEndpoints(['wss://sexy.t', 'wss://test.io'], true)
                expect(result).to.equal(true)
            })

            it('Should return false if at least one endpoint does not have a valid WSS format and filter is active', () => {
                let result = validateWssEndpoints(
                    ['wss://', 'wss://mainnet.infura.io/ws/v3/', 'wss://test.io'],
                    true,
                )
                expect(result).to.equal(false)

                result = validateWssEndpoints(['wss://sexy.t', 'www.test.io'], true)
                expect(result).to.equal(false)

                result = validateWssEndpoints(['https://eth.llamarpc.com/'], true)
                expect(result).to.equal(false)

                result = validateWssEndpoints([''], true)
                expect(result).to.equal(false)
            })

            it('Should return true if at least one endpoint does not have a valid WSS format and filter is inactive', () => {
                let result = validateWssEndpoints(
                    ['wss://', 'wss://mainnet.infura.io/ws/v3/', 'wss://test.io'],
                    false,
                )
                expect(result).to.equal(true)

                result = validateWssEndpoints(['wss://sexy.t', 'www.test.io'], false)
                expect(result).to.equal(true)

                result = validateWssEndpoints(['https://eth.llamarpc.com/'], false)
                expect(result).to.equal(true)

                result = validateWssEndpoints([''], false)
                expect(result).to.equal(true)
            })

            it('Should return false if all endpoints have a valid WSS format and filter is inactive', () => {
                let result = validateWssEndpoints(
                    ['wss://eth.llamarpc.com/', 'wss://mainnet.infura.io/ws/v3/', 'wss://test.io'],
                    false,
                )
                expect(result).to.equal(false)

                result = validateWssEndpoints(['wss://sexy.t', 'wss://test.io'], false)
                expect(result).to.equal(false)
            })
        })
    })
})
