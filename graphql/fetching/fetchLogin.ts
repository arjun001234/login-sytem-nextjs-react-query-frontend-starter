import gqlClient from "../../graphql/client"
import { LoginUserRequest, LoginUserResponse } from '../../graphql/types/user';
import loginUserMutation from "../mutations/loginUser";

const fetchLogin = async(variables: LoginUserRequest) => {
    const {LoginUser} = await gqlClient.request<LoginUserResponse,LoginUserRequest>(loginUserMutation,variables)
    return LoginUser
};

export default fetchLogin;