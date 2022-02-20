import gqlClient from "../../graphql/client"
import { CreateUserRequest, CreateUserResponse } from '../../graphql/types/user';
import createUserMutation from "../mutations/createUser";

const fetchCreateUser = async(variables: CreateUserRequest) => {
    const {CreateUser} = await gqlClient.request<CreateUserResponse,CreateUserRequest>(createUserMutation,variables)
    return CreateUser
};

export default fetchCreateUser;