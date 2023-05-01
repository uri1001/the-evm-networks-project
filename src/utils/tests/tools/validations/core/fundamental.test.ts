import { expect } from 'chai'

import { validateBoolean, validateNumber, validateString } from '../../../../tools/validations/core'

describe('Fundamental Type Validations Test', () => {
    //
    // Boolean Tests
    //
    describe('Validate Boolean Test', () => {
        // pre-validation
        describe('pre-validation', () => {
            it('Should return true if filter is undefined', () => {
                let result = validateBoolean(true, undefined)
                expect(result).to.equal(true)

                result = validateBoolean(undefined, undefined)
                expect(result).to.equal(true)
            })

            it('Should return false if filter is defined and param undefined', () => {
                const result = validateBoolean(undefined, true)
                expect(result).to.equal(false)
            })
        })

        // validation
        describe('validation', () => {
            it('Should return true if booleans are equal - XOR', () => {
                let result = validateBoolean(true, true)
                expect(result).to.equal(true)

                result = validateBoolean(false, false)
                expect(result).to.equal(true)
            })

            it('Should return false if booleans are not equal - XOR', () => {
                let result = validateBoolean(true, false)
                expect(result).to.equal(false)

                result = validateBoolean(true, false)
                expect(result).to.equal(false)
            })
        })
    })
    //
    // Number Tests
    //
    describe('Validate Number Test', () => {
        // pre-validation
        describe('pre-validation', () => {
            it('Should return true if filter is undefined', () => {
                let result = validateNumber(1, undefined)
                expect(result).to.equal(true)

                result = validateNumber(undefined, undefined)
                expect(result).to.equal(true)
            })

            it('Should return false if filter is defined and param undefined', () => {
                const result = validateNumber(undefined, [1])
                expect(result).to.equal(false)
            })
        })

        // validation
        describe('validation', () => {
            it('Should return true if num arg is found in the filter', () => {
                let result = validateNumber(1, [1])
                expect(result).to.equal(true)

                result = validateNumber(1, ['1'])
                expect(result).to.equal(true)

                result = validateNumber(111002233322111, [1, 5, 10, 111002233322111])
                expect(result).to.equal(true)

                result = validateNumber(99999999999999, [1, 10, '99999999999999', '369'])
                expect(result).to.equal(true)

                result = validateNumber(369, [1, 10, '99999999999999', '369'])
                expect(result).to.equal(true)
            })

            it('Should return false if num arg is not found in the filter', () => {
                let result = validateNumber(11, [1])
                expect(result).to.equal(false)

                result = validateNumber(11, ['1'])
                expect(result).to.equal(false)

                result = validateNumber(369, [1, 5, 10, 111002233322111])
                expect(result).to.equal(false)

                result = validateNumber(7, [1, 10, '99999999999999', '369'])
                expect(result).to.equal(false)

                result = validateNumber(99999999999998, [1, 10, '99999999999999', '369'])
                expect(result).to.equal(false)

                result = validateNumber(1, ['abcd', '10', 7])
                expect(result).to.equal(false)
            })
        })
    })
    //
    // String Tests
    //
    describe('Validate String Test', () => {
        // pre-validation
        describe('pre-validation', () => {
            it('Should return true if filter is undefined', () => {
                let result = validateString('mainnet', undefined)
                expect(result).to.equal(true)

                result = validateString(undefined, undefined)
                expect(result).to.equal(true)
            })

            it('Should return false if filter is defined and param undefined', () => {
                const result = validateString(undefined, ['mainnet'])
                expect(result).to.equal(false)
            })
        })

        // validation
        describe('validation', () => {
            it('Should return true if string arg is found in the filter', () => {
                let result = validateString('mainnet', ['mainnet'])
                expect(result).to.equal(true)

                result = validateString('Polygon zkEVM Testnet', ['123', 'polygon zkevm testnet'])
                expect(result).to.equal(true)

                result = validateString('polygon', ['SEPOLIA', 'GOERLI', 'POLYGON'])
                expect(result).to.equal(true)
            })

            it('Should return false if string arg is not found in the filter', () => {
                let result = validateString('mainnet', ['mainnett'])
                expect(result).to.equal(false)

                result = validateString('Polygon zkEVM Testnet', ['123', 'polygonzkevmtestnet'])
                expect(result).to.equal(false)

                result = validateString('polygon', ['SEPOLIA', 'GOERLI'])
                expect(result).to.equal(false)
            })
        })
    })
})
