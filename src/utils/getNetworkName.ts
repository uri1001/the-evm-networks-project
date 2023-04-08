import * as networks from '../networks'

// ID can be network ID as number or string
const getNetworkName = (id: number | string): string => {
    const n = Object.values(networks)

    for (let i = 0; i < n.length; i++) {
        if (n[i].id === Number(id)) return n[i].name
    }
    return ''
}

export default getNetworkName
