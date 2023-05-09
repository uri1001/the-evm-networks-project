import { EndpointAuth } from '../../../enums'

const formatNodeAuthEndpoints = (endpoints: string[], key: string): string[] => {
    for (let i = 0; i < endpoints.length; i++) {
        endpoints[i] = endpoints[i].replace(EndpointAuth.Key, key)
    }
    return endpoints
}

export default formatNodeAuthEndpoints
