import React from "react";
import {GoogleLogin} from 'react-google-login'
import useGoogleLogin from "../../hooks/useGoogleLogin";

type ExternalLoginLinksProps = {}

const ExternalLoginLinks : React.FC<ExternalLoginLinksProps> = () => {

    const {mutate} = useGoogleLogin()

    const handleGoogleLogin = (res: any) => {
        mutate(res.tokenId)
    }

    const handleGoogleFailure = (error: any) => {
        console.log(error)
    }

    return (
        <div className="flex flex-col gap-4" >
           <section className="flex flex-row items-center gap-2">
               <div className="h-1 bg-gray-200 flex-grow"></div>
               <p className="text-gray-400">OR</p>
               <div className="h-1 bg-gray-200 flex-grow"></div>
           </section>
           <GoogleLogin
             clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
             onSuccess={handleGoogleLogin.bind(null)}
             onFailure={handleGoogleFailure.bind(null)}
             />
        </div>
    )
}

export default ExternalLoginLinks;