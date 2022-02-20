import { NextRouter } from 'next/router';
import React from 'react';
import { appRoutes } from '../../helper/constants/pagePaths';
import { AuthContext } from '../context/authContext';

type ProtectedRoutesType = {
  children: React.ReactNode,
  router: NextRouter
}

const ProtectedRoutes : React.FC<ProtectedRoutesType> = ({router,children}) => {

    const {isAuthenticated} = React.useContext(AuthContext)

    const protectedRoutesList : string[] = [appRoutes.profile]

    React.useEffect(() =>{
        if (protectedRoutesList.findIndex(routes => routes === router.pathname) != -1 && !isAuthenticated) {
            router.push(appRoutes.login)
        }
    },[])

     return (
         <>
         {children}
         </>
     )
};

export default ProtectedRoutes;
