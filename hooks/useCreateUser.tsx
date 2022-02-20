import {useMutation,QueryClient, useQueryClient} from 'react-query';
import { getMeKey } from "../graphql/keys/key";
import createUserMutation from "../graphql/mutations/createUser";
import { CreateUserRequest, CreateUserResponse } from "../graphql/types/user";
import gqlClient from '../graphql/client'
import { ClientError } from "graphql-request";
import toast from "react-hot-toast";
import { appRoutes } from '../helper/constants/pagePaths';
import { useRouter } from 'next/router';
import { User } from '../graphql/generated/types';
import fetchCreateUser from '../graphql/fetching/fetchCreateUser';

const useCreateUser = () => {
    const router = useRouter()
    const client = useQueryClient()
    return useMutation<User,ClientError,CreateUserRequest>((variables) => fetchCreateUser(variables),{
        onSuccess: (data) => {
            client.setQueryData<User>(getMeKey(),data)
            router.push(appRoutes.home)
        },
        onError: (error) => {
            client.removeQueries(getMeKey())
            console.log(error.response.errors)
            toast.error(error.response.errors![0].message)
        }
    })
}

export default useCreateUser