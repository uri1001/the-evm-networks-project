import * as networks from '../networks'

const getAllNetworkNames = (): string[] => {
    const names: string[] = []

    const n = Object.values(networks)

    for (let i = 0; i < n.length; i++) {
        names.push(n[i].name)
    }

    return names
}

export default getAllNetworkNames
