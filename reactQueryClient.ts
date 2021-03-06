import {QueryClient} from 'react-query'

export default new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 20
        }
    }
})