import getMeQuery from '../../graphql/queries/getMe';
import gqlClient from "../../graphql/client"
import { ForgotPasswordRequest, ForgotPasswordResponse } from '../../graphql/types/user';

const fetchForgotPassword = async(variables: ForgotPasswordRequest) => {
    const {ForgotPassword} = await gqlClient.request<ForgotPasswordResponse,ForgotPasswordRequest>(getMeQuery,variables)
    return ForgotPassword
};

export default fetchForgotPassword;