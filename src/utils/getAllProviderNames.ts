import * as providers from '../providers'

const getAllProviderNames = (): string[] => {
    const names: string[] = []

    const n = Object.values(providers)

    for (let i = 0; i < n.length; i++) {
        names.push(n[i].provider)
    }

    return names
}

export default getAllProviderNames
