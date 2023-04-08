import * as networks from '../networks'

const getNetworId = (name: string): number => {
    const n = Object.values(networks)

    for (let i = 0; i < n.length; i++) {
        if (
            n[i].name.toLowerCase() === name.toLowerCase() ||
            n[i].network.toLowerCase() === name.toLowerCase()
        )
            return n[i].id
    }
    return -1
}

export default getNetworId
