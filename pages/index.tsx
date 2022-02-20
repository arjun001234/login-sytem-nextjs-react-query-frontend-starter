import React from "react";
import {GetStaticProps} from "next";
import { appRoutes } from "../helper/constants/pagePaths";
import { useRouter } from "next/router";
import useLogoutUser from "../hooks/useLogoutUser";
import { AuthContext } from "../components/context/authContext";

const HomePage : React.FC = () => {

    const {mutate} = useLogoutUser()

    const {isAuthenticated} = React.useContext(AuthContext)

    const router = useRouter()

    const handleLogout = () => {
         mutate()
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <section className="flex flex-row gap-2">
            <button className=" p-2 px-4 rounded-md bg-blue-600 text-white" onClick={() => router.push(appRoutes.profile)}>Profile</button>
            {isAuthenticated ? <button className=" p-2 px-4 rounded-md text-blue-600" onClick={handleLogout.bind(null)}>Logout</button> : 
            <button className=" p-2 px-4 rounded-md text-blue-600" onClick={() => router.push(appRoutes.login)}>Login</button>}
            </section>
        </div>
    )
}

export default HomePage;

export const getStaticProps : GetStaticProps = (context) => {

  return {
      props: {}
  }
}