import { expect } from 'chai'

import { validateFinalValidations } from '../../../../tools/validations/core'

describe('Final Validation of Validations Result Test', () => {
    //
    // Validate AND Booleans
    //
    describe('Validate AND Test', () => {
        it('Should return true if all booleans are true', () => {
            let and: boolean[] = [true]
            const or: boolean[] = []

            let result = validateFinalValidations(and, or)
            expect(result).to.equal(true)

            and = [true, true, true]

            result = validateFinalValidations(and, or)
            expect(result).to.equal(true)
        })

        it('Should return false if one or more booleans are false', () => {
            let and: boolean[] = [false]
            const or: boolean[] = []

            let result = validateFinalValidations(and, or)
            expect(result).to.equal(false)

            and = [true, true, false]

            result = validateFinalValidations(and, or)
            expect(result).to.equal(false)

            and = [false, true, false, false]

            result = validateFinalValidations(and, or)
            expect(result).to.equal(false)
        })
    })
    //
    // Validate OR Booleans
    //
    describe('Validate OR Test', () => {
        it('Should return false if all booleans are false', () => {
            let and: boolean[] = [false]
            const or: boolean[] = []

            let result = validateFinalValidations(and, or)
            expect(result).to.equal(false)

            and = [false, false, false]

            result = validateFinalValidations(and, or)
            expect(result).to.equal(false)
        })

        it('Should return true if one or more booleans are true', () => {
            let or: boolean[] = [true]
            const and: boolean[] = []

            let result = validateFinalValidations(and, or)
            expect(result).to.equal(true)

            or = [false, false, true]

            result = validateFinalValidations(and, or)
            expect(result).to.equal(true)

            or = [true, false, true, true]

            result = validateFinalValidations(and, or)
            expect(result).to.equal(true)
        })
    })
    //
    // Validate AND & OR Booleans
    //
    describe('Validate AND & OR Test', () => {
        it('Should return true if one of them gets accepted (true)', () => {
            let and: boolean[] = [true]
            let or: boolean[] = [false]

            let result = validateFinalValidations(and, or)
            expect(result).to.equal(true)

            and = [false]
            or = [true]

            result = validateFinalValidations(and, or)
            expect(result).to.equal(true)

            and = [true, true, true]
            or = [false, false, true]

            result = validateFinalValidations(and, or)
            expect(result).to.equal(true)

            and = [false, false, false]
            or = [false, false, true]

            result = validateFinalValidations(and, or)
            expect(result).to.equal(true)
        })

        it('Should return false if both of them get rejected (false)', () => {
            let and: boolean[] = [false]
            let or: boolean[] = [false]

            let result = validateFinalValidations(and, or)
            expect(result).to.equal(false)

            and = [false, true, true]
            or = [false, false, false]

            result = validateFinalValidations(and, or)
            expect(result).to.equal(false)
        })
    })
})
