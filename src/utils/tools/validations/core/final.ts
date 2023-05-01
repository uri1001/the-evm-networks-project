//
// Final Validation of Validations Result
//

export const validateFinalValidations = (and: boolean[], or: boolean[]): boolean => {
    if (and.length === 0) {
        let v: boolean = false
        for (let i = 0; i < or.length; i++) v = v || or[i]
        return v
    } else if (or.length === 0) {
        let v: boolean = true
        for (let i = 0; i < and.length; i++) v = v && and[i]
        return v
    } else {
        let vor: boolean = false
        for (let i = 0; i < or.length; i++) vor = vor || or[i]

        let vand: boolean = true
        for (let i = 0; i < and.length; i++) vand = vand && and[i]

        return vor || vand
    }
}
