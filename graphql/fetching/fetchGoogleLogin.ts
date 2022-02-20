import gqlClient from "../../graphql/client"
import { GoogleLoginResponse } from '../../graphql/types/user';
import googleLoginMutation from "../mutations/googleLogin";

const fetchGoogleLogin = async(token: string) => {
    const {GoogleLogin} = await gqlClient.request<GoogleLoginResponse>(googleLoginMutation,{},{
        authorization: "Bearer " + token
    })
    return GoogleLogin
};

export default fetchGoogleLogin;