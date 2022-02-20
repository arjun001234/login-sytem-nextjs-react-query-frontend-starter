import React from 'react'
import { AuthContext } from '../components/context/authContext'
import prefetchMe from '../helper/prefetch/prefetchMe'

const usePrefetch = () => {
  React.useEffect(() => {
    async function loadData(){
        try {
          await prefetchMe()
          localStorage.setItem("isAuthenticated","true")
        } catch (error) {
          localStorage.setItem("isAuthenticated","false")
        }
    }
    loadData()
  },[])
}

export default usePrefetch