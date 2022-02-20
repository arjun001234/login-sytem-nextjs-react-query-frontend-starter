import React from "react"
import {useMutation,QueryClient, useQueryClient} from 'react-query';
import { getMeKey } from "../graphql/keys/key";
import { LoginUserRequest, LoginUserResponse} from "../graphql/types/user";
import gqlClient from '../graphql/client'
import loginUserMutation from "../graphql/mutations/loginUser";
import toast from "react-hot-toast";
import {ClientError} from 'graphql-request'
import { useRouter } from "next/router";
import { appRoutes } from "../helper/constants/pagePaths";
import { User } from "../graphql/generated/types";
import fetchLogin from "../graphql/fetching/fetchLogin";

const useLoginUser = () => {
    const router = useRouter()
    const client = useQueryClient()
    return useMutation<User,ClientError,LoginUserRequest>((variables) => fetchLogin(variables),{
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

export default useLoginUser