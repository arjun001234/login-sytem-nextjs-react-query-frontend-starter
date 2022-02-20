import { useMutation, useQueryClient } from 'react-query';
import {ClientError} from 'graphql-request'
import toast from 'react-hot-toast';
import { appRoutes } from '../helper/constants/pagePaths';
import { useRouter } from 'next/router';
import { User } from '../graphql/generated/types';
import { getMeKey } from '../graphql/keys/key';
import fetchGoogleLogin from '../graphql/fetching/fetchGoogleLogin';

const useGoogleLogin = () => {
    const router = useRouter()
    const client = useQueryClient()
    return useMutation<User,ClientError,string>((token) => fetchGoogleLogin(token),{
        onSuccess:(data) => {
            client.setQueryData<User>(getMeKey(),data)
            router.push(appRoutes.home)
        },
        onError: (error) => {
            console.log(error.response.errors)
            toast.error(error.response.errors![0].message)
        }
    })
};

export default useGoogleLogin;
