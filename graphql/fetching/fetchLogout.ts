import gqlClient from "../../graphql/client"
import { LogoutResponse } from '../../graphql/types/user';
import loginUserMutation from "../mutations/loginUser";

const fetchLogout = async() => {
    const {Logout} = await gqlClient.request<LogoutResponse>(loginUserMutation)
    return Logout
};

export default fetchLogout;