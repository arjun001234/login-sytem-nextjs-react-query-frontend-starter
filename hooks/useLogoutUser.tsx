import { ClientError } from 'graphql-request';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import fetchLogout from '../graphql/fetching/fetchLogout';
import { User } from '../graphql/generated/types';
import { getMeKey } from '../graphql/keys/key';
import { appRoutes } from '../helper/constants/pagePaths';

const useLogoutUser = () => {
    const router = useRouter()
    const client = useQueryClient()
  return useMutation<User,ClientError>(() => fetchLogout(),{
      onSuccess: () => {
        client.removeQueries(getMeKey())
        toast.success("User Logged Out")
        router.push(appRoutes.login)
      },
      onError: (error) => {
        client.removeQueries(getMeKey())
        console.log(error.response.errors)
        toast.error(error.response.errors![0].message)
      }
  })
};

export default useLogoutUser;
